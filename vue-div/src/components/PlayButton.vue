<template>
  <div class="play-button"></div>
</template>
<style lang="scss" scoped>
.play-button {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-image: linear-gradient(45deg, #5298ff, #ff00a8);
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);
}
.play-button::before {
  content: "";
  position: absolute;
  left: 21px;
  top: 50%;
  margin-left: -4px;
  margin-top: -8px;
  width: 0px;
  height: 0px;
  //画出三角形
  border: 10px solid transparent;
  border-left-color: white;
  border-top-width: 8px;
  border-bottom-width: 8px;
  //绘制三角形的阴影要用filter: drop-shadow
  filter: drop-shadow(0 2px 1px rgba(0, 0, 0, 0.2));
  transition: all 0.2s ease;
  //通知浏览器你要做什么，提升性能
  will-change: border-width, height, left;
}
.play-button::after {
  content: "";
  position: absolute;
  right: 16px;
  top: 50%;
  margin-right: -4px;
  margin-top: -8px;
  width: 0px;
  height: 16px;
  //画出长方形
  border: 5px solid transparent;
  border-width: 0px 0px 0px 5px;
  border-left-color: white;
  filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.2));
  opacity: 0;
  transform: scale(0);
  transition: all 0.2s ease;
}
.play-button:hover::before {
  border-width: 0px 0px 0px 5px;
  height: 16px;
  left: 16px;
}
.play-button:hover::after {
  opacity: 1;
  transform: scale(1);
}
</style>
