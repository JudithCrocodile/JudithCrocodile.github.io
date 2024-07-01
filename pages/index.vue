<script lang="ts" setup>
import { onMounted } from 'vue'
const { $refreshAos } = useNuxtApp()
const { $aos } = useNuxtApp()

onMounted(() => {
  // $refreshAos()
  // console.log('onMounted')
  // console.log(useNuxtApp().$aos())

  setTimeout(() => {
    console.log('setTimeout')

    $aos.init()
  }, 5000)

  // window.onresize = function () {
  //   useNuxtApp().$aos().refresh()
  // }
})
</script>

<template>
  <div class="home">
    <div class="block">
      <div class="main-content flex" id="test">
        <div class="img-wrapper">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
            src="https://images.unsplash.com/photo-1652368719583-2bd29a79c474?q=80&w=3688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="flower img"
          />
        </div>
        <div
          class="context"
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-duration="1000"
          data-aos-mirror="false"
          data-aos-once="true"
          data-aos-anchor="#test"
        >
          <h1 class="flex flex-wrap">
            <span>Hi,&nbsp;</span>
            <span class="text-nowrap">I am Jane</span>
          </h1>
          <p class="font-light text-right">FRONTEND DEVELOPER</p>
        </div>
      </div>
    </div>
    <div class="block">
      <Work />
    </div>
    <div class="block">
      <About />
    </div>
  </div>
</template>

<style scope lang="scss">
.block,
.home {
  position: relative;
  width: 100%;
  height: 100%;
}

.home {
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.block {
  scroll-margin: 0;
  scroll-margin-block: 0;
  scroll-margin-top: 0;
  scroll-snap-align: start;
}

.main-content {
  width: 100%;
  height: 100%;
}

.img-wrapper {
  height: 100%;
  width: fit-content;
  z-index: 0;

  img {
    width: auto;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.context {
  position: absolute;
  margin-left: 40%;
  margin-top: 50vh;
  z-index: 1;
  padding-right: 5rem;

  h1 {
    font-size: 4rem;
    font-weight: normal;
  }
}

@media only screen and (width < 780px) {
  .img-wrapper {
    position: absolute;
    opacity: 0.4;
    width: 100%;

    img {
      width: 100%;
    }
  }

  .context {
    margin: 10rem auto 0;
    text-align: center;
    padding-right: 0;
    position: relative;
  }
}
</style>
