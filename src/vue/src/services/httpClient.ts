import axios from 'axios'
import {Post} from "@/models/Post";
import {Author} from "@/models/Author";
import {Category} from "@/models/Category";
export default class HttpClient {

  /**
   * IDから記事を1件取得
   * @param {number} id
   * @returns {Promise<Post>}
   */
  async getPost(id: number): Promise<Post> {
    return axios.get(`${process.env.VUE_APP_API_ENDPOINT}post/${id}`)
      .then((res: any) => {
        return res.data
      })
      .catch((e) => {
        return new Post()
      })
  }

  /**
   * 記事を複数件取得
   * @returns {Promise<Post[]>}
   */
  async getPosts(): Promise<Post[]> {
    return axios.get(`${process.env.VUE_APP_API_ENDPOINT}post`)
      .then((res: any) => {
        return res.data
      })
      .catch((e) => {
        return []
      })
  }

  /**
   * postの新規登録
   * @returns {Promise<void>}
   */
  async savePost(data: Post): Promise<void> {
    return axios.post(`${process.env.VUE_APP_API_ENDPOINT}post`, data)
  }

  /**
   * postの編集
   * @param {number} id
   * @returns {Promise<void>}
   */
  async editPost(id: number, data: Post): Promise<void> {
    return axios.put(`${process.env.VUE_APP_API_ENDPOINT}post/${id}`, data)
  }

  /**
   * postの削除
   * @param {number} id
   * @returns {Promise<void>}
   */
  async deletePost(id: number): Promise<void> {
    return axios.delete(`${process.env.VUE_APP_API_ENDPOINT}post/${id}`)
  }

  /**
   * 著者取得
   * @returns {Promise<Author[]>}
   */
  async getAuthors(): Promise<Author[]> {
    return axios.get(`${process.env.VUE_APP_API_ENDPOINT}author`)
      .then((res: any) => {
        return res.data
      })
      .catch((e) => {
        return []
      })
  }

  /**
   * カテゴリ取得
   * @returns {Promise<Category[]>}
   */
  async getCategories(): Promise<Category[]> {
    return axios.get(`${process.env.VUE_APP_API_ENDPOINT}category`)
      .then((res: any) => {
        return res.data
      })
      .catch((e) => {
        return []
      })
  }
}