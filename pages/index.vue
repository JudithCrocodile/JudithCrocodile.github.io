<script lang="ts" setup>
import { nextTick, onMounted, ref, watch } from 'vue'
const { $aos } = useNuxtApp()
import { useRoute } from 'vue-router'
const route = useRoute()

const isScrolling = ref(false)
const SCROLL_DURATION = 350

onMounted(() => {
  nextTick(() => {
    console.log('mounted')
    console.log($aos)
    $aos.refreshHard()
  })

  if (route.hash) {
    scrollToHash(route.hash)
  }
})

const scrollToHash = (hash: string): void => {
  if (!hash) {
    return
  }

  doScrolling(getElementY(hash), SCROLL_DURATION)
}

watch(
  () => route.hash,
  () => {
    scrollToHash(route.hash)
  }
)

function getElementY(query: string): number {
  if (document.querySelector('#page-wrapper') === null) {
    return 0
  }

  const pageWrapper = document.querySelector<HTMLElement>('#page-wrapper')
  const target = document.querySelector<HTMLElement>(query)

  if (pageWrapper && target) {
    return (
      pageWrapper.scrollTop +
      target.getBoundingClientRect().top -
      pageWrapper.getBoundingClientRect().y // nav height
    )
  }

  return 0
}

function doScrolling(elementY: number, duration = 1000) {
  const pageWrapper = document.querySelector<HTMLElement>('#page-wrapper')
  let startingY: number = 0

  if (pageWrapper) {
    startingY = pageWrapper.scrollTop || 0
  }

  var diff = elementY - startingY
  var start: number

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    isScrolling.value = true

    if (!start) start = timestamp
    // Elapsed milliseconds since start of scrolling.
    var time = timestamp - start
    // Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1)
    var easedPercent = 1 - Math.pow(1 - percent, 3)

    if (pageWrapper) {
      pageWrapper.scrollTo(0, startingY + diff * easedPercent)
    }

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step)
    } else {
      isScrolling.value = false
    }
  })
}

defineExpose({
  scrollToHash
})
</script>

<template>
  <div class="home" id="page-wrapper">
    <div class="block" :class="{ 'scroll-margin': !isScrolling }" id="home">
      <div class="main-content flex overflow-x-hidden" id="test">
        <div class="img-wrapper">
          <img
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-mirror="true"
            src="~/assets/images/img_main-page.avif"
            alt="flower img"
          />
        </div>
        <div
          class="context"
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor="#test"
          data-aos-duration="1000"
        >
          <h1 class="flex flex-wrap">
            <span>Hi,&nbsp;</span>
            <span class="text-nowrap">I am Jane</span>
          </h1>
          <p class="font-light text-right tracking-widest">
            FRONTEND DEVELOPER
          </p>
        </div>
      </div>
    </div>
    <div class="block" :class="{ 'scroll-margin': !isScrolling }">
      <Work />
    </div>
    <div class="block" :class="{ 'scroll-margin': !isScrolling }">
      <About />
    </div>
  </div>
</template>

<style scoped lang="scss">
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
  &.scroll-margin {
    scroll-margin: 0;
    scroll-margin-block: 0;
    scroll-margin-top: 0;
    scroll-snap-align: start;
  }
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
