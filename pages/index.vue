<script lang="ts" setup>
import { watch } from 'vue'
import { onMounted } from 'vue'
const { $refreshAos } = useNuxtApp()
const { $aos } = useNuxtApp()
import { useRoute } from 'vue-router'
const route = useRoute()

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

  if (route.hash) {
    document.querySelector(route.hash).scrollIntoView({
      behavior: 'smooth'
    })
  }
})

watch(
  () => route.hash,
  () => {
    doScrolling(getElementY(route.hash))
  }
)

function getElementY(query) {
  return (
    document.querySelector('#page-wrapper').scrollTop +
    document.querySelector(query).getBoundingClientRect().top -
    document.querySelector('#page-wrapper').getBoundingClientRect().y // nav height
  )
}

function doScrolling(elementY, duration = 1000) {
  var startingY = document.querySelector('#page-wrapper').scrollTop
  var diff = elementY - startingY
  var start

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    // Elapsed milliseconds since start of scrolling.
    var time = timestamp - start
    // Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1)

    console.log('percent', percent)

    document
      .querySelector('#page-wrapper')
      .scrollTo(0, startingY + diff * percent)

    console.log('scrollTo', startingY + diff * percent)
    console.log('-------------------------------------------')

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}
</script>

<template>
  <div class="home" id="page-wrapper">
    <div class="block" id="home">
      <div class="main-content flex" id="test">
        <div class="img-wrapper">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-mirror="true"
            src="https://images.unsplash.com/photo-1652368719583-2bd29a79c474?q=80&w=3688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="flower img"
          />
        </div>
        <div
          class="context"
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-duration="1000"
          data-aos-mirror="true"
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

// .block {
//   scroll-margin: 0;
//   scroll-margin-block: 0;
//   scroll-margin-top: 0;
//   scroll-snap-align: start;
// }

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
