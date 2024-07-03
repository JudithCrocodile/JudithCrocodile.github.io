<template>
  <div id="about" class="h-full">
    <Layout title="ABOUT">
      <div class="main-content flex h-full" id="test">
        <div class="img-wrapper">
          <!-- <img
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-mirror="true"
            src="~/assets/images/me.jpg"
            alt="flower img"
          /> -->
        </div>
        <div class="context md:pt-20 md:ml-20 md:pl-18 px-5 pb-5 pt-16">
          <div class="mb-12">
            <p class="font-normal text-lg">4 years of frontend developer</p>
          </div>

          <div>
            <h3 class="text-xl tracking-widest mb-8">Skills</h3>
            <ul class="grid grid-cols-3 grid-rows-fr gap-6">
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
            </ul>
          </div>
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

@media only screen and (width < 780px) {
  .main-content {
    overflow: hidden scroll;
    flex-direction: column-reverse;

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
  }
}
</style>
