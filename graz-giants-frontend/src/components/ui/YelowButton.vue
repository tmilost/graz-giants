<template>
  <button
    class="inline-flex h-[38px] items-center rounded-[20px] bg-[#FAB900] px-[20px] text-[15px] font-bold uppercase text-[#003867] sm:mt-auto cursor-pointer"
    type="button"
    @click="handleClick"
  >
    {{ props.text }}
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
const router = useRouter()
function handleClick() {
  if (props.href.startsWith('http://') || props.href.startsWith('https://')) {
    window.open(props.href, '_blank', 'noopener')
  } else {
    router.push(props.href)
  }
}
</script>
