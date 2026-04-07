<template>
  <button
    class="font-roboto flex justify-center h-[38px] items-center rounded-[20px] bg-[#FFFFFF] hover:bg-[#FAB900] focus:bg-[#FFFFFF] px-[20px] text-[15px] font-bold uppercase text-[#003867] hover:text-[#ffffff] focus:text-[#FAB900] sm:mt-auto cursor-pointer"
    type="button"
    @click="handleClick"
  >
    {{ decodeHtml(props.text) }}
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

// Utility to decode HTML entities
function decodeHtml(html) {
  if (!html) return ''
  // eslint-disable-next-line
  const txt = document.createElement('textarea')
  txt.innerHTML = html
  return txt.value
}

function handleClick() {
  navigate(props.href)
}
</script>
