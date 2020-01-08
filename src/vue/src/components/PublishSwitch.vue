<template>
  <div>
    <label class="switch">
      <input type="checkbox" v-model="flg" @change="setPublished">
      <span class="slider round"></span>
    </label>
    <span v-if="flg">公開</span>
    <span v-else>非公開</span>
  </div>
</template>

<script lang="ts">
  import {Component, Emit, Prop, Vue} from 'vue-property-decorator';

@Component
export default class PublishSwitch extends Vue {
  @Prop() private is_published: boolean = false;
  @Emit('change')
  changePublished(is_published: boolean) {}
  private flg: boolean = false;

  mounted() {
    this.flg = this.is_published
  }

  setPublished() {
    this.changePublished(this.flg)
  }
}
</script>
<style scoped>
  .switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 25px;
    margin: 7px 5px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 19px;
    width: 19px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(21px);
    -ms-transform: translateX(21px);
    transform: translateX(21px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 25px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>