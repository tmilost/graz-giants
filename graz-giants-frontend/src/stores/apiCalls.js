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

  function retrieveHomePageSection(pageSlug) {
    return axios
      .get(`${apiPaths.BASE_API_PATH}/homepage?acf_format=standard&slug=${pageSlug}`)
      .then((response) => {
        return response.data[0].acf
      })
      .catch(() => {
        return null
      })
  }

  function retrieveNews(totalNews) {
    return axios
      .get(`${apiPaths.BASE_API_PATH}/posts?acf_format=standard&per_page=${totalNews}&order=desc`)
      .then((response) => {
        return response.data
      })
      .catch(() => {
        return null
      })
  }

  function retrieveNewsPost(postSlug) {
    return axios
      .get(`${apiPaths.BASE_API_PATH}/posts?acf_format=standard&slug=${postSlug}`)
      .then((response) => {
        return response.data[0]?.acf
      })
      .catch(() => {
        return null
      })
  }

  function retrievePage(pageSlug) {
    return axios
      .get(`${apiPaths.BASE_API_PATH}/pages?acf_format=standard&slug=${pageSlug}`)
      .then((response) => {
        return response.data[0]?.acf
      })
      .catch(() => {
        return null
      })
  }

  return {
    retrieveWordpressPage,
    retrieveWordpressPost,
    allWordpressPages,
    allWordpressPosts,
    retrieveHomePageSection,
    retrieveNews,
    retrieveNewsPost,
    retrievePage,
  }
})
