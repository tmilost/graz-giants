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
  return { retrieveNavbarLinks }
})
