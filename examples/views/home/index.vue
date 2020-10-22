<template>
  <div>
    <router-link class="btn" to="magnifier">
      <luan-button class="btn" type="primary">放大镜</luan-button>
    </router-link>
    <router-link class="btn" to="checkIn">
      <luan-button class="btn" type="primary">签到</luan-button>
    </router-link>
    <router-link class="btn" to="imgLabel">图片标签</router-link>
    <router-link class="btn" to="slide-check">滑动验证</router-link>
    <router-link class="btn" to="watemark">添加水印</router-link>
    <router-link class="btn" to="countdown">倒计时</router-link>
    <router-link class="btn" to="drag">拖拽</router-link>
    <luan-button class="btn" type="primary">签到</luan-button>
    <luan-button plain  type="success">success按钮</luan-button>
    <luan-button plain  type="info">info按钮</luan-button>
    <luan-button plain  type="danger">danger按钮</luan-button>
    <luan-button plain  type="warning">warning按钮</luan-button>
    <router-view></router-view>
  </div>
</template>

<style lang="stylus" scoped>
.btn {
  margin-right: 10px;
}
</style>
