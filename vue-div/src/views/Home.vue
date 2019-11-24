<template>
  <div class="home">
    <div>
      <circle-loading />
    </div>
    <div>
      <bubble-loading />
    </div>
    <div>
      <Teacup-loading />
    </div>
    <div>
      <PlayButton />
    </div>
    <div>
      <Floating-Button />
    </div>
    <div>
      <progress-Bar />
    </div>
  </div>
</template>
<script>
import CircleLoading from "../components/CircleLoading";
import BubbleLoading from "../components/BubbleLoading";
import TeacupLoading from "../components/TeacupLoading";
import PlayButton from "../components/PlayButton";
import FloatingButton from "../components/FloatingButton";
import ProgressBar from "../components/ProgressBar";
export default {
  components: {
    CircleLoading,
    BubbleLoading,
    TeacupLoading,
    PlayButton,
    FloatingButton,
    ProgressBar
  }
};
</script>
<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100vh;
  justify-items: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}
.home > div {
  transform: scale(1.5);
}
</style>
