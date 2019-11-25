<template>
  <div>
    <div class="heart"></div>
  </div>
</template>
<style lang="scss" scoped>
.heart {
  display: flex;
  margin: 5px 0px;
  width: 40px;
  height: 30px;
  filter: drop-shadow(0px 1px 1px #973340a3);
  animation: breath infinite 2s ease;
}
.heart::before,
.heart::after {
  content: "";
  flex: 1;
  height: 30px;
  border-radius: 20px 20px 4px 4px;
  //设置原点左右，上下
  transform-origin: 50% 6px;
}
//画出圆柱，调整角度
.heart::before {
  transform: rotate(-45deg);
  background-image: linear-gradient(90deg, red, #ff6666);
}
//画出圆柱，调整角度
.heart::after {
  transform: rotate(45deg);
  background-image: linear-gradient(0deg, red, #ff8484);
}
@keyframes breath {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
