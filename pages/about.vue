<script setup lang="ts">
import { useTransition } from '~/composables/transition'
useTransition()
useObserver('.section')
</script>

<template>
  <main>
    <section class="section section--nm about-1">
      <div class="container about-1__wrapper">
        <div class="about-1__text-wrapper">
          <h1 class="about-1__title">
            WE ARE THE AGENCY
            <span class="about-1__style-title"> SQUID</span>.
          </h1>
        </div>
      </div>
      <TheSocials class="bottom-nav-socials" />
      <NextBlockButton>Scroll</NextBlockButton>
    </section>
    <section class="section about-2">
      <div class="container about-2__wrapper">
        <div class="grid about-2__text-wrapper">
          <p class="about-2__text">
            We are an industry-agnostic agency that focuses on doing great work
            for great people. We think big. We think smart. We ask the tough
            questions, and shed light in dark spaces. We are a driven team that
            partners with driven teams. We are a passionate group of talented
            individuals that are here to make your business better.
          </p>
        </div>
      </div>
    </section>
    <section class="section about-3">
      <div class="container grid about-3__wrapper">
        <TheImage
          class="about-3__img"
          src="/images/about/1.jpg"
          alt="Image"
        />
      </div>
    </section>
    <section class="section about-4">
      <div class="container about-4__wrapper">
        <h2 class="about-4__title">A LOOK INSIDE</h2>
        <div class="about-4__list-wrapper">
          <ul class="about-4__list">
            <li class="about-4__li">
              <h3 class="about-4__block-title">OUR PHILOSOPHY</h3>
              <p class="about-4__desc">
                We are changing the standard of agency culture by putting the
                well-being of the person first. We respect, appreciate, and
                cheer-on our employees in all aspects of their lives as we
                understand that without them, we wouldn’t be successful.
              </p>
            </li>
            <li class="about-4__li">
              <h3 class="about-4__block-title">OUR VALUES</h3>
              <p class="about-4__desc">
                We believe that mental health is the foundation for purposeful
                thinking, successful creative, and a positive work environment.
                In order for everyone to bring their best selves and best work
                to the agency, we understand that we need our team to be
                mentally nourished, personally supported, and occupationally
                fulfilled.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section about-5">
      <div class="container about-5__wrapper">
        <div class="grid about-5__content">
          <h2 class="about-5__title">WE DO GREAT WORK WITH GREAT PEOPLE.</h2>
          <TheImage
            class="about-5__img"
            data-parallax="-0.1"
            src="/images/about/2.jpg"
            alt="Image"
          />
          <TheImage
            class="about-5__img"
            data-parallax="-0.05"
            src="/images/about/3.jpg"
            alt="Image"
          />
        </div>
      </div>
    </section>
    <section class="section about-6">
      <div class="container about-6__wrapper">
        <div class="grid about-6__text-wrapper">
          <h2 class="about-6__title">WE ARE ENTREPRENEURS</h2>
          <p class="about-6__text">
            Our seats are filled with thinkers, builders and creators who are
            always hungry for more. We fully support and encourage different
            side hustles and endeavors that feed the soul. By contributing time
            for our personal businesses and passion projects, our cups
            continuously get filled, all-the-while, attaining personal growth.
          </p>
        </div>
      </div>
    </section>
    <section class="section about-7">
      <div class="container about-7__wrapper">
        <div class="grid about-7__content">
          <TheImage
            class="about-7__img"
            src="/images/about/4.jpg"
            alt="Image"
          />
          <TheImage
            class="about-7__img"
            src="/images/about/5.jpg"
            alt="Image"
          />
        </div>
      </div>
    </section>
    <section class="section about-8">
      <div class="container about-8__wrapper">
        <div class="grid about-8__content-wrapper">
          <h3 class="about-8__title">
            WE ARE <span class="about-8__style-title"> COLLABORATORS</span>
          </h3>
          <p class="about-8__desc">
            We collaborate as a team to gather perspectives from all walks of
            life. Our multi-generational group has different viewpoints,
            cultural backgrounds, opinions, upbringings and life experiences,
            which makes us an amazingly diverse group of thinkers and doers. We
            all share. We all listen. We all contribute to the success of the
            Agency.
          </p>
          <h3 class="about-8__title">
            WE ARE <span class="about-8__style-title"> VISIONARIES</span>
          </h3>
          <p class="about-8__desc">
            We think big and sometimes even bigger. We envision the impossible
            and make it possible. We problem-solve by thinking creatively,
            divergently, laterally, revolutionarily and unconventionally. In a
            world where “everything’s been done”, we pride ourselves in
            accepting that challenge.
          </p>
        </div>
      </div>
    </section>
    <section class="section about-9">
      <div class="container about-9__wrapper">
        <div class="grid about-9__content">
          <h2 class="about-9__title">YEARNING FOR MORE?</h2>
        </div>
        <div class="about-9__text-wrapper">
          <p class="about-9__text">Chyeah</p>
          <p class="about-9__text">Definitely</p>
          <p class="about-9__text">Yerp</p>
        </div>
      </div>
    </section>
    <TheFooter />
  </main>
</template>
