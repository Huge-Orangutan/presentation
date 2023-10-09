<template>
  <header class="design-header">
    <!-- 头部左边边 -->
    <div class="design-header-left">
      <n-space></n-space>
    </div>

    <!-- 头部中间 -->
    <div class="design-header-center">
      <n-space align="center" size="small">
        <div>
          <span>命名 -</span>
          <n-button
            size="small"
            style="margin-left: 5px;"
            v-show="!isShowPresentationNameInput"
            :focusable="false"
            @click="controlPresentationNameInputShowStatus(true)"
            >{{ presentationName }}</n-button
          >
        </div>

        <n-input
          ref="presentationNameInputComponent"
          :autofocus="true"
          @blur="controlPresentationNameInputShowStatus(false)"
          size="small"
          placeholder="请输入幻灯片名称"
          v-show="isShowPresentationNameInput"
          v-model:value="presentationName"
        />
      </n-space>
    </div>

    <!-- 头部右边 -->
    <n-space></n-space>
  </header>
</template>

<script setup lang="ts">
import { ref,nextTick, onMounted } from "vue";
import { InputInst } from "naive-ui";

/** 输入框属性 */
const presentationNameInputComponent = ref<undefined | InputInst>();

/** 幻灯片命名 */
const presentationName = ref("");

/** 是否显示幻灯片命名输入框 */
const isShowPresentationNameInput = ref(false);

/** 控制是否显示幻灯片命名输入框 */
const controlPresentationNameInputShowStatus = async (status: boolean) => {
  isShowPresentationNameInput.value = status;
  await nextTick();
  presentationNameInputComponent.value?.focus();
};

onMounted(()=> {
  const params = new URLSearchParams(location.search);

  const id  = params.get('id');
  
  if(id) {

  } else {
    presentationName.value = Math.random().toString(36).substring(2)

  }

})
</script>

<style scoped lang="scss">
.design-header {
  display: grid;
  grid-template-columns: repeat(3, 33%);
  height: 60px;
  padding: 0 20px 0 60px;
}

.design-header > * {
  display: flex;
  align-items: center;
  min-width: 520px;
}

.design-header-center {
  justify-content: center;
}

.design-header-right {
}
</style>
