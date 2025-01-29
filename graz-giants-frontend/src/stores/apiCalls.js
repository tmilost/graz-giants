import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { apiPaths } from '../config/apiPaths'

export const useApiCalls = defineStore('apiCalls', () => {
  const allWordpressPages = ref({})
  const allWordpressPosts = ref({})

  onMounted(async () => {
    await retrieveWordpressPost('DropDownMenuLinks')
    getUnsignedWordpressPost('MainHeader')
    getUnsignedWordpressPost('NavBarTabs')
    getUnsignedWordpressPost('ShopButton')
  })

  function retrieveWordpressPage(pageSlug) {
    return axios
      .get(`${apiPaths.BASE_API_PATH}/pages?slug=${pageSlug}`)
      .then((response) => {
        if (response.data[0]) {
          allWordpressPages.value[pageSlug] = response.data[0].content.rendered
        } else {
          allWordpressPages.value[pageSlug] = ''
        }
        return response.data[0].content.rendered
      })
      .catch(() => {
        return null
      })
  }
  function retrieveWordpressPost(postSlug) {
    return axios
      .get(`${apiPaths.BASE_API_PATH}/posts?slug=${postSlug}`)
      .then((response) => {
        if (response.data[0]) {
          allWordpressPosts.value[postSlug] = response.data[0].content.rendered
        } else {
          allWordpressPosts.value[postSlug] = ''
        }
        return response.data[0].content.rendered
      })
      .catch(() => {
        return null
      })
  }

  async function getUnsignedWordpressPost(post) {
    if (allWordpressPosts.value[post] === undefined) {
      await retrieveWordpressPost(post)
    }
  }

  return { retrieveWordpressPage, retrieveWordpressPost, allWordpressPages, allWordpressPosts }
})
