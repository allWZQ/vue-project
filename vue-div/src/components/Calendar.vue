<template>
  <div class="calendar">31</div>
</template>
<style lang="scss" scoped>
.calendar {
  position: relative;
  margin: 2px 5px 30px;
  border-radius: 2px 2px 0px 0px;
  width: 36px;
  height: 5px;
  //动画样式:transform-style
  transform-style: preserve-3d;
  background-color: #ccc;
  color: rgb(233, 233, 233);
  font-size: 20px;
  font-weight: 200;
  text-align: center;
  line-height: 40px;
  //可以提升性能
  transform: translateZ(0);
}
.calendar::before,
.calendar::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 5px;
  z-index: -1;
  display: block;
  margin-left: -20px;
  border-radius: 3px;
  width: 40px;
  height: 30px;
}
.calendar::before {
  background-color: rgb(35, 109, 193);
  //难点Z轴移动-2px
  transform: translateZ(-2px) rotateX(-10deg);
}
.calendar::after {
  background-color: rgb(45, 118, 228);
  //难点Z轴移动-2px
  transform: translateZ(-2px) rotateX(10deg);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
}
</style>
