<template>
  <div class="mark-down">
    <v-md-editor v-model="value" style="height:100%" @save="saveHtml" @change="saveHtml"></v-md-editor>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Home",
  components: {
  },
  setup() {
    let value = ref(`
    ::: tip
      你可以点击 toolbar 中的 tip 来快速插入
    :::

    ::: warning
      这是一段警告
    :::

    ::: danger
    这是一个危险警告
    :::

    ::: tip 自定义标题
      你也可以自定义块中的标题
    :::

    ::: danger STOP
      危险区域，禁止通行
    :::`);
    const saveHtml = (text: string, html: string) => {
      console.log('text', text);
      console.log('html', html);

    }
    return {
      value,
      saveHtml
    };
  },
});
</script>
<style lang="scss" scoped>
.mark-down {
  width: 100%;
  height: 580px;
  margin: auto;
}
</style>
