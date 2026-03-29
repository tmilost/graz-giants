<template>
  <div class="card-text px-[30px] h-[268px] w-[350px]" :style="{ backgroundColor: bgColor }">
    <div
      class="flex h-full flex-col items-center justify-between py-5 text-center leading-9"
      :style="{ color: textColor }"
    >
      <p
        v-if="cardData?.tittle"
        class="text-[20px] font-normal uppercase leading-[28px] sm:text-[28px] sm:leading-[28px]"
        :style="{ color: tittleColor }"
      >
        {{ cardData?.tittle }}
      </p>
      <div
        v-if="pagedPersons?.length > 0"
        class="flex flex-col gap-2 w-full items-center font-roboto font-bold"
      >
        <div
          v-for="person in pagedPersons"
          :key="person.year + person.names"
          class="flex flex-row whitespace-pre-wrap text-[15px] leading-[15px] border-b border-current pb-2.5 w-[200px]"
        >
          <span
            v-if="person.year && person.year.trim() !== ''"
            class="font-semibold w-[50px] flex-shrink-0"
            >{{ person.year }}</span
          >
          <span
            v-if="person.names"
            :class="!person.year || person.year.trim() === '' ? 'mx-auto w-full text-center' : ''"
          >
            {{ person.names }}
          </span>
        </div>
      </div>
      <div class="flex justify-center gap-2">
        <button
          v-for="(dot, idx) in pageCount"
          :key="idx"
          class="h-3.5 w-3.5 rounded-full border-2"
          :style="currentPage === idx ? { borderColor: dotColor, backgroundColor: dotColor } : {}"
          :class="currentPage === idx ? '' : 'border-white bg-transparent'"
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
  bgColor: {
    type: String,
    default: '#183264',
  },
  textColor: {
    type: String,
    default: '#FFFFFF',
  },
  tittleColor: {
    type: String,
    default: '#FAB900',
  },
  dotColor: {
    type: String,
    default: '#FAB900',
  },
})

const currentPage = ref(0)

const persons = computed(() => {
  if (!props.cardData) return []
  return Object.keys(props.cardData)
    .filter((k) => k.startsWith('person_'))
    .map((k) => props.cardData[k])
    .filter((person) => person?.year || person?.names)
})

const pageCount = computed(() => Math.ceil(persons.value.length / 4))

const pagedPersons = computed(() => {
  const start = currentPage.value * 4
  return persons.value.slice(start, start + 4)
})
</script>
