<template>
  <div class="w-full h-full" id="work">
    <Layout title="WORK">
      <div class="work">
        <ul
          class="work__list grid gap-4 md:grid-cols-2 grid-rows-fr grid-cols-1"
        >
          <li class="work__item order-1">
            <a
              href="https://unsplash-clone-nextjs-jo4b23mkd-judithcrocodiles-projects.vercel.app"
            >
              <div class="works-img">
                <img
                  src="~/assets/images/works/unsplash_clone.png"
                  alt="color_game"
                />
              </div>
              <p class="work-intro">Unsplash clone project</p>
            </a>
          </li>
          <li class="work__item order-3">
            <a href="/works/color_game/color_game.html">
              <div class="works-img">
                <img src="~/assets/images/works/cg.jpg" alt="color_game" />
              </div>
              <p class="work-intro">COLOR GAME</p>
            </a>
          </li>
          <li class="work__item order-4">
            <a href="/works/toDoList/index.html">
              <div class="works-img">
                <img src="~/assets/images/works/tdl.jpg" alt="ToDoList" />
              </div>
              <p class="work-intro">TODO LIST</p>
            </a>
          </li>
          <!-- <li class="work__item order-1">
            <a href="https://murmuring-refuge-47228.herokuapp.com/">
              <div class="works-img">
                <img src="~/assets/images/works/yelpcamp.jpg" alt="Yelp Camp" />
              </div>
              <p class="work-intro">YELP CAMP</p>
              <p class="work-intro">
                使用工具 : NODE.js、EJS、NPM、MONGODB、GIT、RESTful標準
              </p>
            </a>
          </li> -->
          <li class="work__item order-2">
            <a href="https://calculator-app-woad-eta.vercel.app">
              <div class="works-img">
                <img
                  src="~/assets/images/works/img-calculator.png"
                  alt="Yelp Camp"
                />
              </div>
              <p class="work-intro">Calculator App</p>
              <!-- <p class="work-intro">使用工具 : Nuxt.js 3</p> -->
            </a>
          </li>
        </ul>

        <!-- <h3>JAVASCRIPT/JQUERY</h3>
        <div class="work">


        </div> -->
      </div>
    </Layout>
  </div>
</template>

<style scoped lang="scss">
.work {
  &__list {
    grid-auto-rows: 50%;
  }

  &__item {
    overflow: hidden;
    transition: all 400ms;

    &:hover {
      transform: scale(0.9);
    }
  }
}

.work-intro {
  text-align: center;
  font-weight: normal;
  letter-spacing: 0.5rem;
  margin-top: 0.5rem;
}

.works-img {
  img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
}

@media only screen and (width < 780px) {
  .work {
    &__list {
      grid-auto-rows: 30%;
    }
  }
}
</style>
