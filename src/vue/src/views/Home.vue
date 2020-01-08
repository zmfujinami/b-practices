<template>
    <div class="container my-5">
        <h3>記事一覧</h3>
        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>タイトル</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in posts">
                <td>{{post.id}}</td>
                <td>{{post.title}}</td>
                <td>
                    <router-link :to="'/detail/' + post.id" class="btn btn-primary">編集</router-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator';
  import {Post} from "@/models/Post";
  import HttpClient from "@/services/httpClient";


  @Component
  export default class Home extends Vue {

    private httpClient = new HttpClient()

    private posts: Post[] = []

    async created() {
      this.posts = await this.httpClient.getPosts()
    }

    mounted() {

    }
  }
</script>
