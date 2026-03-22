import { useRouter } from 'vue-router'

export function useNavigation() {
  const router = useRouter()

  const navigate = (href) => {
    if (href.startsWith('http://') || href.startsWith('https://')) {
      // Use noopener for security when opening external links
      window.open(href, '_blank', 'noopener')
    } else {
      router.push(href)
    }
  }

  return { navigate }
}
