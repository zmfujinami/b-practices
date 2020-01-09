<template>
    <div class="container my-5">
        <h3>記事{{post_id}}</h3>
        <PublishSwitch :is_published="post.is_published" @change="changePublished"></PublishSwitch>
        <div>
            <label>タイトル</label>
            <input class="form-control" v-model="post.title">
        </div>
        <div>
            <label>URL</label>
            <input class="form-control" v-model="post.url">
        </div>
        <div>
            <label>本文</label>
            <textarea class="form-control" v-model="post.body"></textarea>
        </div>
        <div>
            <label>価格（税込 {{priceIntax}}円）</label>
            <input class="form-control" v-model="post.price">
        </div>

        <div class="my-3">
            <label>Author</label>
            <select v-model="post.author_id">
                <option v-for="author in authors" :value="author.id">{{author.name}}</option>
            </select>
        </div>

        <div class="my-3">
            <label>カテゴリ</label>
            <div v-for="category in categories">
                <input type="checkbox" :value="category.id" v-model="post.category_id">
                <label>{{category.name}}</label>
            </div>
        </div>

        <div class="text-center">
            <button class="btn btn-lg btn-success" @click="save">保存</button>
        </div>
    </div>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator';
  import {Post} from "@/models/Post";
  import HttpClient from "@/services/httpClient";
  import PublishSwitch from "@/components/PublishSwitch.vue";
  import {Category} from "@/models/Category";
  import {Author} from "@/models/Author";

  @Component({
    components: {
      PublishSwitch,
    }
  })
  export default class Detail extends Vue {
    private httpClient = new HttpClient()
    private tax: number = 0.1
    private post_id: number = 0
    private post: Post = new Post();
    private categories: Category[] = [];
    private authors: Author[] = [];

    async created() {
      this.post_id = Number(this.$route.params['id'])
      const postPromise = this.httpClient.getPost(this.post_id)
      const categoryPromise = this.httpClient.getCategories()
      const authorPromise = this.httpClient.getAuthors()
      await Promise.all([postPromise, categoryPromise, authorPromise])
      this.post = await postPromise
      this.categories = await categoryPromise
      this.authors = await authorPromise
    }

    /**
     * 税込計算（Computed）
     */
    get priceIntax(): string {
      return Math.round(this.post.price * (1 + this.tax)).toLocaleString()
    }

    /**
     * 子ComponentからのEmitによる公開非公開
     * @param {boolean} is_published
     */
    changePublished(is_published: boolean) {
      this.post.is_published = is_published
    }

    /**
     * データの保存
     */
    save() {
      this.httpClient.savePost(this.post)
        .then(() => {

        })
        .catch(() => {

        })
    }
  }
</script>
