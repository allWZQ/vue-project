<template>
  <div class="vue"></div>
</template>
<style lang="scss" scoped>
.vue {
  position: relative;
  width: 40px;
  height: 40px;
  overflow: hidden;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));
}
//旋转移动画出三角形
.vue::before,
.vue::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: scaleY(1.8) translate(-50%, -30px) rotate(45deg);
}
.vue::before {
  width: 40px;
  height: 40px;
  background: #41b883;
}
.vue::after {
  width: 20px;
  height: 20px;
  border: 6px solid #35495e;
  background-color: white;
}
</style>
