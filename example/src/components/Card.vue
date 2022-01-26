<template>
  <el-card class="item">
    <template #header>
      <div class="card-header">
        <el-button circle @click="refreshItem" :icon="Refresh"></el-button>
      </div>
    </template>
    <div class="content" v-loading="loading">
      <span>Axios请求数据 </span>
      <span class="value">{{ target }}</span>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { Refresh } from '@element-plus/icons-vue';
import request from '../api/request';
import oi from 'ref-once-init';

defineProps();
const item = oi(request.count, 1);
const target = item.target;
const loading = item.loading;
item.init();
const refreshItem = () => {
  item.refresh();
};
</script>

<style lang="scss" scoped>
div.item {
  min-width: 400px;
  .card-header {
    display: flex;
    justify-content: flex-end;
  }
  .content {
    span.value {
      font-weight: bold;
      color: #1e1e1e;
    }
  }
}
</style>
