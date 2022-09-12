<script setup lang="ts">
import { useTransition } from '~/composables/transition'
useTransition()
useObserver('.section')


const route = useRoute()

const slug = route.params.slug

const {posts} = usePosts()

const post = computed(() => {
  return posts.value.find(post => post.slug === slug)
})

const prevPost = computed(() => {
  const idx = posts.value.findIndex(post => post.slug === slug)

  return idx <= 0 ? posts.value[posts.value.length - 1] : posts.value[idx - 1]
})

const nextPost = computed(() => {
  const idx = posts.value.findIndex(post => post.slug === slug)

  return idx >= posts.value.length - 1 ? posts.value[0] : posts.value[idx + 1]
})

// const otherPosts = computed(() => {
//   return  posts.value.filter(post => post.slug !== slug)
// })

</script>

<template>
  <main>
    <section class="section section--nm post-1">
      <div class="container post-1__wrapper">
        <h1 class="post-1__title">
          {{post.title.split(' ')[0]}}
          <span
            v-if="post.title?.split(' ')[1]"
            class="post-1__style-title"
          > {{post.title.split(' ')[1]}}</span>
        </h1>
        <div class="post-1__btns-wrapper">
          <NuxtLink
            :to="`/portfolio/${prevPost.slug}`"
            class="post-1__btn post-1__btn--prev"
          >PREVIOUS</NuxtLink>
          <NuxtLink
            :to="`/portfolio/${nextPost.slug}`"
            class="post-1__btn post-1__btn--next"
          >NEXT</NuxtLink>
        </div>
      </div>
      <TheSocials class="bottom-nav-socials" />
      <NextBlockButton>Scroll</NextBlockButton>
    </section>
    <section class="section section--nm post-2">
      <div class="post-2__wrapper">
        <TheImage
          class="post-2__img"
          :src="post.image"
          alt="Image"
        />
      </div>
    </section>
    <section class="section post-3">
      <div class="container post-3__wrapper">
        <div class="grid post-3__text-wrapper">
          <h2 class="post-3__title">THE SCOPE</h2>
          <p class="post-3__desc">
            As the number one horticultural grower in the country, Costa Farms
            wanted to elevate their “white label” brand to a consumer-facing
            brand and launch a disruptive, bold campaign that supported both the
            corporate growth goals and brand marketing vision.
          </p>
        </div>
      </div>
    </section>
    <section class="section post-4">
      <div class="container post-4__wrapper">
        <div class="post-4__line"></div>
        <ul class="grid post-4__list">
          <li class="post-4__li">
            <h3 class="post-4__title">Role</h3>
            <div class="post-4__text-wrapper">
              <p class="post-4__text">Research</p>
              <p class="post-4__text">Strategy</p>
              <p class="post-4__text">Creative</p>
              <p class="post-4__text">Direction</p>
              <p class="post-4__text">Production</p>
            </div>
          </li>
          <li class="post-4__li">
            <h3 class="post-4__title">Deliverables</h3>
            <div class="post-4__text-wrapper">
              <p class="post-4__text">Marketing & Branding Strategy</p>
              <p class="post-4__text">Branding/Art Direction</p>
              <p class="post-4__text">Copywriting/Brand Voice</p>
              <p class="post-4__text">Videography/Photography</p>
              <p class="post-4__text">Digital Presence</p>
              <p class="post-4__text">Website Design</p>
              <p class="post-4__text">Social Media Strategy/Launch</p>
            </div>
          </li>
          <li class="post-4__li">
            <h3 class="post-4__title">Client</h3>
            <div class="post-4__text-wrapper">
              <p class="post-4__text">Costa Farms</p>
            </div>
          </li>
          <li class="post-4__li">
            <h3 class="post-4__title">Company Type</h3>
            <div class="post-4__text-wrapper">
              <p class="post-4__text">B2C / B2B</p>
              <p class="post-4__text">Agriculture</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="section post-5">
      <div class="post-5__wrapper">
        <TheImage
          class="post-5__img"
          src="/images/post/2.jpg"
          alt="Image"
        />
      </div>
    </section>
    <section class="section post-6">
      <div class="container post-6__wrapper">
        <TheImage
          class="post-6__img"
          src="/images/post/3.jpg"
          alt="Image"
        />
      </div>
    </section>
    <section class="section post-7">
      <div class="container post-7__wrapper">
        <div class="grid post-7__content-wrapper">
          <h3 class="post-7__title">
            THE <span class="post-7__style-title"> CHALLENGE</span>
          </h3>
          <p class="post-7__desc">
            For over 60 years, Costa Farms has provided major retailers with
            indoor, blooming, and perennial plants and grown to be the #1 grower
            of indoor plants in the U.S. With the business goal of expanding the
            company from a $700,000 in sales to a $ billion in 2 years meant
            that brand awareness and an aggressive push-pull brand marketing
            strategy needed to be strategized and executed quickly.
          </p>
          <h3 class="post-7__title">
            THE <span class="post-7__style-title"> SOLUTION</span>
          </h3>
          <p class="post-7__desc">
            Creating a consumer brand identity that captured the company vision,
            supported the brand pyramid, and connected with loyal and new
            consumers by being legible in retail and digital channels was the
            goal. From that, a launch campaign was concepted and produced to
            prove that Costa Farms grows and brings plants to everyone,
            regardless of growing experience, allowing self-expression within
            any interior space.
          </p>
        </div>
      </div>
    </section>
    <section class="section post-8">
      <div class="post-8__wrapper">
        <TheImage
          class="post-8__img"
          src="/images/post/4.jpg"
          alt="Image"
        />
      </div>
    </section>
    <section class="section post-9">
      <div class="container post-9__wrapper">
        <div class="grid post-9__text-wrapper">
          <p class="post-9__text">
            The shift in consumer behavior caused by the pandemic magnified the
            need to deeply research and acutely targeted audience segmentation.
            Through this research, we built a data driven brand pyramid,
            architecture, position, and marketing strategy.
          </p>
        </div>
      </div>
    </section>
    <section class="section post-10">
      <div class="container post-10__wrapper">
        <div class="grid post-10__content">
          <TheImage
            class="post-10__img"
            src="/images/post/5.jpg"
            alt="Image"
          />
          <TheImage
            class="post-10__img"
            src="/images/post/6.jpg"
            alt="Image"
          />
        </div>
      </div>
    </section>
    <section class="section post-11">
      <div class="container post-11__wrapper">
        <h2 class="post-11__title">BRANDING</h2>
        <div class="post-11__list-wrapper">
          <ul class="post-11__list">
            <li class="post-11__li">
              <h3 class="post-11__block-title">Strategy</h3>
              <p class="post-11__desc">
                The process began by defining the brand process, objectives, and
                expectations. We conducted an extensive competitor evaluation
                that helped define the “white space” we could own. This,
                combined with data collected, formed the brand vision,
                manifesto, and persona..
              </p>
            </li>
            <li class="post-11__li">
              <h3 class="post-11__block-title">Identity</h3>
              <p class="post-11__desc">
                The brand identity needed to not only reflect the strategy but
                also be ownable and recognizable while communicating a secure
                and reputable organization – transcending fads and trends.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section post-12">
      <div class="post-12__wrapper">
        <TheImage
          class="post-12__img"
          src="/images/post/7.jpg"
          alt="Image"
        />
      </div>
    </section>
    <section class="section post-13">
      <div class="container post-13__wrapper">
        <ul class="post-13__img-list">
          <li class="post-13__li">
            <TheImage
              class="post-13__img"
              src="/images/post/10.jpg"
              alt="Image"
            />
            <div class="post-13__block">
              <p class="post-13__text">
                Option to add a caption to these images.
              </p>
            </div>
          </li>
          <li class="post-13__li">
            <TheImage
              class="post-13__img"
              src="/images/post/11.jpg"
              alt="Image"
            />
            <div class="post-13__block">
              <p class="post-13__text">
                Option to add a caption to these images.
              </p>
            </div>
          </li>
          <li class="post-13__li">
            <TheImage
              class="post-13__img"
              src="/images/post/12.jpg"
              alt="Image"
            />
          </li>
          <li class="post-13__li">
            <TheImage
              class="post-13__img"
              src="/images/post/13.jpg"
              alt="Image"
            />
          </li>
          <li class="post-13__li">
            <TheImage
              class="post-13__img"
              src="/images/post/14.jpg"
              alt="Image"
            />
            <div class="post-13__block">
              <p class="post-13__text">
                Option to add a caption to these images.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="section section--nm post-14">
      <div class="container post-14__wrapper">
        <div class="grid post-14__text-wrapper">
          <h2 class="post-14__title">HEADLINE OPTION</h2>
          <p class="post-14__text">
            The Squid squad moves with powerful strokes. It’s our ambidexterity
            that allows us to strike quickly and decisively – to solve complex
            business problems and make our clients look really good.
          </p>
        </div>
      </div>
    </section>
    <section class="section post-15">
      <div class="container post-15__wrapper">
        <h2 class="post-15__title">
          BIG TEXT OPTION. IMAGES WOULD SCROLL BEHIND TEXT.
        </h2>
        <ul class="post-15__img-list">
          <li
            class="post-15__li"
            data-parallax="-0.1"
          >
            <TheImage
              class="post-15__img"
              src="/images/post/15.jpg"
              alt="Image"
            />
            <div class="post-15__block">
              <p class="post-15__text">
                Option to add a caption to these images.
              </p>
            </div>
          </li>
          <li
            data-parallax="-0.05"
            class="post-15__li"
          >
            <TheImage
              class="post-15__img"
              src="/images/post/16.jpg"
              alt="Image"
            />
            <div class="post-15__block">
              <p class="post-15__text">
                Option to add a caption to these images.
              </p>
            </div>
          </li>
          <li class="post-15__li">
            <TheImage
              class="post-15__img"
              src="/images/post/17.jpg"
              alt="Image"
            />
          </li>
        </ul>
      </div>
    </section>
    <section class="section post-16">
      <div class="container post-16__wrapper">
        <h2 class="post-16__title">RESULTS</h2>
        <div class="post-16__list-wrapper">
          <ul class="post-16__list">
            <li class="post-16__li">
              <h3 class="post-16__block-title">$1 BILLION GOAL MET</h3>
              <p class="post-16__desc">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Maecenas sed diam eget risus varius blandit sit.
              </p>
            </li>
            <li class="post-16__li">
              <h3 class="post-16__block-title">BRAND AWARENESS</h3>
              <p class="post-16__desc">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
                Integer posuere erat a ante.
              </p>
            </li>
            <li class="post-16__li">
              <h3 class="post-16__block-title">FOLLOWING INCREASE</h3>
              <p class="post-16__desc">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Maecenas sed diam eget risus varius blandit sit amet non
                magna. Morbi leo risus, porta ac consectetur ac, vestibulum at
                eros. Maecenas sed diam eget risus varius blandit sit amet non
                magna.
              </p>
            </li>
            <li class="post-16__li">
              <h3 class="post-16__block-title">SALE INCREASE</h3>
              <p class="post-16__desc">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section post-17">
      <div class="post-17__wrapper">
        <TheImage
          class="post-17__img"
          src="/images/post/8.jpg"
          alt="Image"
        />
      </div>
    </section>
    <section class="section post-18">
      <div class="container post-18__wrapper">
        <TheImage
          class="post-18__img"
          src="/images/post/9.jpg"
          alt="Image"
        />
      </div>
    </section>
    <section class="section section--nm post-19">
      <div class="container grid post-19__wrapper">
        <h2 class="post-19__title">
          “Quote from the client will go here., it’ll be shortish. One to two
          sentences singing our praises.”
        </h2>
        <p class="post-19__rotate-text">—mari, vp marketing costa farms</p>
      </div>
    </section>
    <section class="section post-20">
      <div class="container post-20__wrapper">
        <div class="post-20__line"></div>
        <ul class="grid post-20__list">
          <li class="post-20__li">
            <h3 class="post-20__title">Credits: The Team</h3>
            <div class="post-20__text-wrapper">
              <p class="post-20__text">Creative Director: Brent Marmo</p>
              <p class="post-20__text">
                Strategic Planning Director: Miles Marmo
              </p>
              <p class="post-20__text">
                Art Director and Designer: Tanya Jacobson
              </p>
              <p class="post-20__text">
                Designer and Producer: Braden Schlegel
              </p>
            </div>
          </li>
          <li class="post-20__li">
            <h3 class="post-20__title">Partners</h3>
            <div class="post-20__text-wrapper">
              <p class="post-20__text">
                Videographer: Johnathon Doe Studios / Johnathon Doe Studios
              </p>
              <p class="post-20__text">
                Photographer: Braden Schlegel / Johnathon Doe
              </p>
              <p class="post-20__text">Media Team: Johnathon Doe Studios</p>
              <p class="post-20__text">Post-Production: Johnathon Doe</p>
              <p class="post-20__text">
                Digital-Production: Johnathon Doe / Johnathon Doe Studios
              </p>
              <p class="post-20__text">VFX Production: Johnathon Doe</p>
            </div>
          </li>
        </ul>
        <div class="post-20__link-wrapper">
          <h3 class="post-20__link-title">Other Case Studies</h3>
          <PostNavigation
            class="post-20__nav"
            :prev-post-link="`/portfolio/${prevPost.slug}/`"
            :next-post-link="`/portfolio/${nextPost.slug}/`"
            all-posts-link="/portfolio/"
          />
        </div>
      </div>
    </section>
    <TheFooter />
  </main>
</template>
