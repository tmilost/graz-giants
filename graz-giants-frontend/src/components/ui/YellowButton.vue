<template>
  <button
    class="flex justify-center h-[38px] items-center rounded-[20px] bg-[#FAB900] focus:bg-[#ffffff] px-[20px] text-[15px] font-bold uppercase text-[#003867] hover:text-[#ffffff] focus:text-[#FAB900] sm:mt-auto cursor-pointer"
    type="button"
    @click="handleClick"
  >
    {{ props.text }}
  </button>
</template>

<script setup>
import { useNavigation } from '@/composables/useNavigation'

const { navigate } = useNavigation()

const props = defineProps({
  href: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
})
function handleClick() {
  navigate(props.href)
}
</script>
