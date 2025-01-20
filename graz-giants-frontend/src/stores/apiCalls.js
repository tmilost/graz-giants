import { defineStore } from 'pinia'
import axios from 'axios'
import { apiPaths } from '../config/apiPaths'

export const useApiCalls = defineStore('apiCalls', () => {
  function retrieveWordpressPage(pageSlug) {
    return axios
      .get(`${apiPaths.BASE_API_PATH}/pages?slug=${pageSlug}`)
      .then((response) => {
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
        return response.data[0].content.rendered
      })
      .catch(() => {
        return null
      })
  }
  return { retrieveWordpressPage, retrieveWordpressPost }
})
