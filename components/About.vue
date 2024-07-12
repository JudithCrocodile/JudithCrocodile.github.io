<template>
  <div id="about" class="h-full">
    <Layout title="ABOUT">
      <div class="main-content flex h-full" id="test">
        <div class="img-wrapper order-2"></div>
        <div
          class="context md:pt-20 md:ml-20 md:pl-18 px-5 pb-5 pt-2 w-[80%] md:w-full mx-auto mb-16 md:mb-0 order-1"
        >
          <div class="mb-12">
            <p class="font-normal text-lg">4 years of frontend developer</p>
          </div>

          <div class="">
            <h3 class="text-xl tracking-widest mb-8">Skills</h3>
            <ul
              class="grid md:grid-cols-3 grid-rows-fr gap-6 grid-cols-auto sm:grid-cols-2"
            >
              <li class="font-normal">HTML5</li>
              <li class="font-normal">JAVASCRIPT</li>
              <li class="font-normal">CSS3</li>
              <li class="font-normal">VUE</li>
              <li class="font-normal">NUXT</li>
              <li class="font-normal">jQuery</li>
              <li class="font-normal">tailwind css</li>
              <li class="font-normal">bootstrap</li>
              <li class="font-normal">RESTful APIs</li>
              <li class="font-normal">SEO practices</li>
              <li class="font-normal">Git collaboration</li>
              <li class="font-normal">Responsive web design</li>
              <li class="font-normal">Web accessibility</li>
              <li class="font-normal">Cordova</li>
            </ul>
          </div>
        </div>
        <div class="footer">
          <a
            href="https://github.com/JudithCrocodile?tab=repositories"
            target="_blank"
          >
            <img src="~/assets/images/github-mark.svg" alt="github-mark" />
          </a>
        </div>
      </div>
    </Layout>
  </div>
</template>

<style scoped lang="scss">
.img-wrapper {
  flex-basis: 39%;
  position: relative;
  background-image: url('~/assets/images/me.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 85%;

  &::before {
    content: '';
    position: absolute;
    right: -1rem;
    top: 1rem;
    background: rgb(227 227 227);
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}

.footer {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  right: 0;
  padding: 1rem;

  img {
    width: 2rem;
    height: 2rem;
  }

  a {
    opacity: 0.5;
    transition: all 500ms;

    &:hover {
      opacity: 0.9;
    }
  }
}

@media only screen and (width < 780px) {
  .main-content {
    overflow: hidden scroll;
    flex-direction: column;
    padding-bottom: 4rem;

    /* FireFox */
    scrollbar-width: none;

    /* IE10+ */
    -ms-overflow-style: -ms-autohiding-scrollbar;

    /* Chrome, Safari, Edge */
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .img-wrapper {
    padding-top: 150%;
    width: 80%;
    margin: 0 auto;
  }
}
</style>
