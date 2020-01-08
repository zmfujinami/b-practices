<template>
  <div>
    detail{{post_id}}
    <input v-model="post.title">
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator';
  import {Post} from "@/models/Post";

  @Component({})
  export default class Detail extends Vue {
    private tax: number = 0.1
    private post_id: number = 0
    private post: Post;

    created() {
      this.post_id = Number(this.$route.params['id'])
      this.post = {
        id: 1,
        title: 'あ',
        price: 100
      }
    }

    @Watch('title')
    public postChanged(val: Post, oldVal: Post){
      console.log('title')
    }

    get priceIntax(): number {
      return Math.round(this.post.price * (1 + this.tax))
    }
  }
</script>
