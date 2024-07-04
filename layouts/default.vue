<script setup lang="ts">
import { ref } from 'vue'

const nuxtPageRef: any = ref(null)

const clickLink = (hash: string): void => {
  if (nuxtPageRef) {
    nuxtPageRef.value.pageRef?.scrollToHash(hash)
  }
}
</script>

<template>
  <div>
    <div class="layout">
      <div class="nav ml-auto w-full">
        <ul class="flex gap-12 justify-end font-light">
          <li>
            <NuxtLink
              to="#home"
              class="hover:text-slate-500 transition-all"
              @click="clickLink('#home')"
            >
              HOME
            </NuxtLink>

            <!-- <button class="hover:text-slate-500 transition-all">HOME</button> -->
          </li>
          <li>
            <NuxtLink
              to="#work"
              class="hover:text-slate-500 transition-all"
              @click="clickLink('#work')"
            >
              WORK
            </NuxtLink>
            <!-- <button class="hover:text-slate-500 transition-all">WORK</button> -->
          </li>
          <li>
            <NuxtLink
              to="#about"
              class="hover:text-slate-500 transition-all"
              @click="clickLink('#about')"
            >
              ABOUT
            </NuxtLink>
            <!-- <button class="hover:text-slate-500 transition-all">ABOUT</button> -->
          </li>
        </ul>
      </div>
      <div class="nuxt-page-wrapper">
        <NuxtPage ref="nuxtPageRef" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  position: relative;
  width: 100vw;
  height: 100vh;

  .nuxt-page-wrapper {
    position: absolute;
    width: 95vw;
    height: 85vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgb(207 207 207);
    overflow: hidden;
  }

  .nav {
    height: calc(15vh / 2);
    width: 95vw;
    margin: 0 auto;

    ul {
      height: 100%;
      align-items: center;
    }
  }
}
</style>
