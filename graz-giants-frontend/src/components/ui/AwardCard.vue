<template>
  <div class="card-text px-[30px] h-[268px] w-[350px] bg-[#183264]">
    <div
      class="flex h-full flex-col items-center justify-between py-5 text-center leading-9 text-white"
    >
      <p
        v-if="cardData?.tittle"
        class="text-[20px] font-normal uppercase leading-[28px] text-[#FAB900] sm:text-[28px] sm:leading-[28px]"
      >
        {{ cardData?.tittle }}
      </p>
      <div v-if="pagedPersons?.length > 0" class="flex flex-col gap-2">
        <div
          v-for="person in pagedPersons"
          :key="person.year + person.names"
          class="whitespace-pre-wrap flex flex-row text-left text-[15px] leading-[15px]"
        >
          <span class="font-semibold">{{ person.year }}&nbsp;&nbsp;&nbsp;</span>{{ person.names }}
        </div>
      </div>
      <div class="flex justify-center gap-2">
        <button
          v-for="(dot, idx) in pageCount"
          :key="idx"
          class="h-3.5 w-3.5 rounded-full border-2"
          :class="
            currentPage === idx ? 'border-[#FAB900] bg-[#FAB900]' : 'border-white bg-transparent'
          "
          @click="currentPage = idx"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  cardData: {
    type: Object,
    required: false,
  },
})

const currentPage = ref(0)

const persons = computed(() => {
  if (!props.cardData) return []
  return Object.keys(props.cardData)
    .filter((k) => k.startsWith('person_'))
    .map((k) => props.cardData[k])
    .filter((person) => person?.year && person?.names)
})

const pageCount = computed(() => Math.ceil(persons.value.length / 4))

const pagedPersons = computed(() => {
  const start = currentPage.value * 4
  return persons.value.slice(start, start + 4)
})
</script>
