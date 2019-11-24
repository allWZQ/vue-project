<template>
  <div class="floating-button"></div>
</template>
<style lang="scss" scoped>
.floating-button {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-image: linear-gradient(45deg, #52ffaf, #2196f3);
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);
}
.floating-button::before,
.floating-button::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 0px;
  display: block;
  margin-left: -9px;
  border-radius: 3px;
  width: 18px;
  height: 3px;
  background-color: white;
  transition: all 0.2s ease;
}
.floating-button::before {
  //第一条线
  transform: translateY(12px);
  //用阴影绘制第二条线
  filter: drop-shadow(0px 7px 0px white);
}
.floating-button::after {
  //第三条线
  transform: translateY(24px);
}
.floating-button:hover::before {
  filter: none;
  transform: translateY(18px) rotate(-45deg);
}
.floating-button:hover::after {
  transform: translateY(18px) rotate(45deg);
}
</style>
