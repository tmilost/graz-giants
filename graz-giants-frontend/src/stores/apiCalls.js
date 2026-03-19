import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { apiPaths } from '../config/apiPaths'

export const useApiCalls = defineStore('apiCalls', () => {
  // Simple in-memory cache object
  const apiCache = {}

  onMounted(async () => {})

  function retrieveHomePageSection(pageSlug) {
    const cacheKey = `retrieveHomePageSection:${pageSlug}`
    if (apiCache[cacheKey]) return Promise.resolve(apiCache[cacheKey])
    return axios
      .get(`${apiPaths.BASE_API_PATH}/homepage?acf_format=standard&slug=${pageSlug}`)
      .then((response) => {
        const data = response.data[0].acf
        apiCache[cacheKey] = data
        return data
      })
      .catch(() => {
        return null
      })
  }

  function retrieveNews(totalNews) {
    const cacheKey = `retrieveNews:${totalNews}`
    if (apiCache[cacheKey]) return Promise.resolve(apiCache[cacheKey])
    return axios
      .get(`${apiPaths.BASE_API_PATH}/posts?acf_format=standard&per_page=${totalNews}&order=desc`)
      .then((response) => {
        apiCache[cacheKey] = response.data
        return response.data
      })
      .catch(() => {
        return null
      })
  }

  function retrieveNewsByTag(tagId) {
    const cacheKey = `retrieveNewsByTag:${tagId}`
    if (apiCache[cacheKey]) return Promise.resolve(apiCache[cacheKey])
    return axios
      .get(`${apiPaths.BASE_API_PATH}/posts?acf_format=standard&tags=${tagId}&order=desc`)
      .then((response) => {
        apiCache[cacheKey] = response.data
        return response.data
      })
      .catch(() => {
        return null
      })
  }

  function retrieveTagsIds(tagSlug) {
    const slugs = Array.isArray(tagSlug) ? tagSlug.join(',') : tagSlug
    const cacheKey = `retrieveTagsIds:${slugs}`
    if (apiCache[cacheKey]) return Promise.resolve(apiCache[cacheKey])
    return axios
      .get(`${apiPaths.BASE_API_PATH}/tags?acf_format=standard&slug=${slugs}`)
      .then((response) => {
        apiCache[cacheKey] = response.data
        return response.data
      })
      .catch(() => {
        return null
      })
  }

  function retrieveNewsPost(postSlug) {
    const cacheKey = `retrieveNewsPost:${postSlug}`
    if (apiCache[cacheKey]) return Promise.resolve(apiCache[cacheKey])
    return axios
      .get(`${apiPaths.BASE_API_PATH}/posts?acf_format=standard&slug=${postSlug}`)
      .then((response) => {
        const data = response.data[0]?.acf
        apiCache[cacheKey] = data
        return data
      })
      .catch(() => {
        return null
      })
  }

  function retrievePage(pageSlug) {
    const cacheKey = `retrievePage:${pageSlug}`
    if (apiCache[cacheKey]) return Promise.resolve(apiCache[cacheKey])
    return axios
      .get(`${apiPaths.BASE_API_PATH}/pages?acf_format=standard&slug=${pageSlug}`)
      .then((response) => {
        const data = response.data[0]?.acf
        apiCache[cacheKey] = data
        return data
      })
      .catch(() => {
        return null
      })
  }

  function retrievePeople(PostType) {
    const cacheKey = `retrievePeople:${PostType}`
    if (apiCache[cacheKey]) return Promise.resolve(apiCache[cacheKey])
    return axios
      .get(`${apiPaths.BASE_API_PATH}/${PostType}?acf_format=standard&_fields=acf&`)
      .then((response) => {
        apiCache[cacheKey] = response.data
        return response.data
      })
      .catch(() => {
        return null
      })
  }

  return {
    retrieveHomePageSection,
    retrieveNews,
    retrieveNewsPost,
    retrievePage,
    retrievePeople,
    retrieveNewsByTag,
    retrieveTagsIds,
  }
})
