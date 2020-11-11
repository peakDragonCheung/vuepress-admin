<template>
  <h1>{{ msg }}</h1>
  <div>my name is {{ object.foo }}</div>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "myName",
    },
  },
  setup() {
    const count = ref(0);
    const object = reactive({
      foo: "bar",
    });
    return {
      count,
      object,
    };
  },
};
</script>
