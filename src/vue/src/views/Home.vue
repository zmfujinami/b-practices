<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
    </div>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator';
  import {Post} from "@/models/Post";


  @Component({})
  export default class Home extends Vue {

    private posts: Post[] = []

    created() {

    }

    mounted() {

    }

  }
</script>
