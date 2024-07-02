<template>
  <div id="about" class="h-full">
    <Layout title="ABOUT">
      <div class="main-content flex h-full" id="test">
        <div class="img-wrapper">
          <img
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-mirror="true"
            src="~/assets/images/me.jpg"
            alt="flower img"
          />
        </div>
        <div class="context pt-20 ml-20 pl-18">
          <div class="mb-12">
            <p class="font-normal text-lg">4 years of frontend developer</p>
          </div>

          <div>
            <h3 class="text-xl tracking-widest mb-4">Skills</h3>
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

  &::before {
    content: '';
    position: absolute;
    right: -1rem;
    top: 1rem;
    background: rgb(227 227 227);
    width: 100%;
    height: 85%;
  }
}
</style>
