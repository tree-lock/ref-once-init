<script setup lang="ts">
import { ref } from "vue";
import request from "@/api/request";
import oi from "ref-once-init";
defineProps<{ msg: string }>();

const count = ref(0);
const req = () =>
  request.count().then((res) => {
    count.value = res;
  });
const oiReq = oi(req).refresh;
req();
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="req">send request</button>
  <button @click="oiReq">send oiRequest</button>
  <h3>{{ count }}</h3>
</template>

<style scoped></style>
