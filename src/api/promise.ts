
interface Post {
  id: number
  title: string
  content: string
}


class PromisePractice {

  /**
   * Promise生成でresolve
   * @param {number} id
   * @returns {Promise<Post>}
   */
  async getDataWithPromise(id: number): Promise<Post> {
    return new Promise<Post>((resolve, reject) => {
      // Postを取得する何らかの処理
      const post: Post = {
        id: id,
        title: 'タイトル',
        content: '内容'
      }
      resolve(post)
    })
  }

  /**
   * Promise生成でreject
   * @param {number} id
   * @returns {Promise<Post>}
   */
  async getDataWithPromiseError(id: number): Promise<Post> {
    return new Promise<Post>((resolve, reject) => {
      // Postを取得する何らかの処理
      const post: Post = null
      if (post === null) reject({message: 'データが存在しません。'})
      resolve(post)
    })
  }

  /**
   * Promiseの結果取得
   * @returns {Promise<void>}
   */
  async basicPromise(): Promise<void> {
    // thenで結果を取得
    this.getDataWithPromise(1)
      .then((post: Post) => {
        console.log('Postデータ: ')
        console.log(post)
      })

    // catchでエラーハンドリング
    this.getDataWithPromiseError(2)
      .then((post: Post) => {
      })
      .catch((err: any) => {
        console.error('エラー: ')
        console.error(err)
      })

    // awaitで結果を取得
    const post = await this.getDataWithPromise(1)
    console.log('Postデータ: ')
    console.log(post)
  }

  /**
   * PostをID配列から複数取得
   * @param {number[]} ids
   * @returns {Promise<Post[]>}
   */
  async getPostsWithIds(ids: number[]): Promise<Post[]> {
    let result: Post[] = []
    for (let id of ids) {
      const post = await this.getDataWithPromise(id)
      result.push(post)
    }
    console.log(result)
    return result
  }

  /**
   * PostをID配列から複数非同期で取得
   * @param {number[]} ids
   * @returns {Promise<Post[]>}
   */
  async getPostsWithIdsAsync(ids: number[]): Promise<Post[]> {
    let result = []
    // let promises = []
    for (let id of ids) {
      const post = this.getDataWithPromise(id)
      result.push(post)
      // promises.push(post)
    }
    // result = await Promise.all(promises)
    console.log(result)
    return result
  }

  /**
   * promiseAllの他の使い道
   * @returns {Promise<void>}
   */
  async getPostsWithIdsAnotherAsync() {
    let promise1: Promise<Post> = this.getDataWithPromise(1)
    let promise2: Promise<Post> = this.getDataWithPromise(2)
    let promise3: Promise<Post> = this.getDataWithPromise(3)
    await Promise.all([promise1, promise2, promise3])

    console.log(await promise1)
    return
  }
}

// Promiseの基本
new PromisePractice().basicPromise()

// awaitで複数件取得
// new PromisePractice().getPostsWithIds([1,2,3])

// awaitせずに複数件取得
// new PromisePractice().getPostsWithIdsAsync([1,2,3])

// new PromisePractice().getPostsWithIdsAnotherAsync()