<template>
  <div class="home">
    detail{{post_id}}
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({})
  export default class Detail extends Vue {
    post_id: number = 0
    created() {
      this.post_id = Number(this.$route.params['id'])
    }
  }
</script>
