import { defineStore } from 'pinia'
import axios from 'axios'
import { apiPaths } from '../config/apiPaths'

export const useApiCalls = defineStore('apiCalls', () => {
  function retrieveNavbarLinks() {
    return axios
      .get(`${apiPaths.BASE_API_PATH}/posts/27`)
      .then((response) => {
        return response.data.content.rendered
      })
      .catch(() => {
        return null
      })
  }

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
  return { retrieveNavbarLinks, retrieveWordpressPage, retrieveWordpressPost }
})
