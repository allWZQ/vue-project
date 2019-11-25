<template>
  <div class="land-mark"></div>
</template>
<style lang="scss" scoped>
.land-mark {
  position: relative;
  display: block;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  filter: drop-shadow(0px 1px 1px #973340a3);
  background-image: linear-gradient(0deg, red, #ff8484);
  animation: jump infinite 2s ease;
}
//画出正方形并移动旋转
.land-mark::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: -2;
  display: block;
  margin-left: -5px;
  width: 10px;
  height: 10px;
  background-color: red;
  transform: scaleX(1.3) translateY(2px) rotate(45deg);
}
//画出圆形覆盖
.land-mark::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  margin-top: -5px;
  margin-left: -5px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: white;
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.4);
}
//此处时候translateY会出现BUG，修改成top即可
@keyframes jump {
  0% {
    top: 0px;
  }
  50% {
    top: -10px;
  }
  100% {
    top: 0px;
  }
}
</style>
