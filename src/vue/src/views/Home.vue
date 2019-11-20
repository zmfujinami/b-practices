<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  @Component({})
  export default class Home extends Vue {

  }
</script>
