<template>
  <div>
    <div class="layout">
      <div class="nav ml-auto w-full">
        <ul class="flex gap-8 justify-end font-light">
          <li><button>HOME</button></li>
          <li><button>WORK</button></li>
          <li><button>ABOUT</button></li>
        </ul>
      </div>
      <div class="nuxt-page-wrapper">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style scope lang="scss">
.layout {
  position: relative;
  width: 100vw;
  height: 100vh;

  .nuxt-page-wrapper {
    position: absolute;
    width: 90vw;
    height: 85vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgb(207 207 207);
    overflow: hidden;
  }

  .nav {
    height: calc(15vh / 2);
    width: 90vw;
    margin: 0 auto;

    ul {
      height: 100%;
      align-items: center;
    }
  }
}
</style>
