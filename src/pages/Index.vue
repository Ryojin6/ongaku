<template>
  <TemplateDefault class="relative z-10 bg-a-yellow text-white" homepage>
    <AtomSection
      class="relative grid pt-24 md:h-screen md:min-h-[1000px] md:grid-cols-2 md:pt-0"
      full-width
    >
      <div
        class="relative flex h-full min-h-[500px] w-full flex-col items-center justify-center px-10"
      >
        <div
          class="relative z-10 font-title text-7xl font-bold text-a-charcoal 2xl:text-8xl 3xl:text-9xl"
        >
          The <span class="text-a-red">#1</span> Music NFT in 2023
        </div>
        <div class="textMedium pt-10 text-black">
          Ongaku is about connecting music to Web 3. The purpose and goal of
          Ongaku is to empower people to be as musically creative as they can
          with their own personal NFT.
        </div>
      </div>
      <div class="relative z-50 flex items-center justify-end bg-a-charcoal">
        <AtomAnimate
          class="relative z-50 flex w-full flex-col items-end space-y-4 py-10"
        >
          <button
            type="button"
            @click.prevent="
              playSound(
                'http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3',
              )
            "
            class="custom-transition h-24 w-10/12 rounded-xl bg-a-navy hover:scale-110 2xl:h-28 3xl:h-32"
          />
          <button
            @click.prevent="
              playSound(
                'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3',
              )
            "
            type="button"
            class="custom-transition h-24 w-10/12 rounded-xl bg-a-green hover:scale-110 2xl:h-28 3xl:h-32"
          />
          <button
            @click.prevent="
              playSound(
                'http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3',
              )
            "
            type="button"
            class="custom-transition absolute right-0 bottom-1/2 z-20 h-24 w-6/12 -translate-y-16 rounded-xl bg-a-charcoal hover:scale-110 2xl:h-28 3xl:h-32"
          />
          <button
            @click.prevent="
              playSound(
                'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3',
              )
            "
            type="button"
            class="custom-transition absolute right-0 top-1/2 z-20 h-24 w-6/12 translate-y-16 rounded-xl bg-a-charcoal hover:scale-110 2xl:h-28 3xl:h-32"
          />
          <button
            @click.prevent="
              playSound(
                'http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3',
              )
            "
            type="button"
            class="custom-transition h-24 w-10/12 rounded-xl bg-a-pink hover:scale-110 2xl:h-28 3xl:h-32"
          />
          <button
            @click.prevent="
              playSound(
                'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3',
              )
            "
            type="button"
            class="custom-transition h-24 w-10/12 rounded-xl bg-a-yellow hover:scale-110 2xl:h-28 3xl:h-32"
          />
          <button
            @click.prevent="
              playSound(
                'http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3',
              )
            "
            type="button"
            class="custom-transition h-24 w-10/12 rounded-xl bg-a-blue hover:scale-110 2xl:h-28 3xl:h-32"
          />
          <button
            @click.prevent="
              playSound(
                'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3',
              )
            "
            type="button"
            class="custom-transition h-24 w-10/12 rounded-xl bg-a-red hover:scale-110 2xl:h-28 3xl:h-32"
          />
        </AtomAnimate>
      </div>
    </AtomSection>
    <div class="fixed bottom-10 right-10 z-20">
      <mini-audio :audio-source="selectedMusic" />
    </div>
    <div
      class="relative grid md:h-screen md:min-h-[1000px] md:grid-cols-2"
      full-width
    >
      <div
        class="relative flex h-full w-full flex-col items-start justify-center space-y-6 bg-white px-4 py-10 text-a-charcoal xl:px-12 3xl:space-y-10"
      >
        <div
          v-for="i in musicCards"
          :key="i.title"
          type="button"
          class="flex cursor-pointer items-center space-x-2 rounded-xl px-6 pb-10 pt-4 text-center font-title text-4xl font-bold hover:bg-a-green xl:text-5xl 2xl:text-6xl 3xl:text-7xl"
          :class="{ 'bg-a-green': selectedMusic === i.song }"
          @click.prevent="selectedMusic = i.song"
        >
          <div class="mt-6 h-10 w-10">
            <img src="/playbutton.svg" alt="" />
          </div>
          <div class="w-full">{{ i.title }}</div>
        </div>
      </div>
      <div
        class="relative flex h-full w-full flex-col items-center justify-center bg-a-blue"
      >
        <div class="flex h-full w-full items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20">
            <rect
              class="eq-bar eq-bar--1"
              :class="{ start: activeSound }"
              x="4"
              y="4"
              width="3.7"
              height="8"
              rx="2"
            />
            <rect
              class="eq-bar eq-bar--2"
              :class="{ start: activeSound }"
              x="10.2"
              y="4"
              rx="2"
              width="3.7"
              height="16"
            />
            <rect
              class="eq-bar eq-bar--3"
              :class="{ start: activeSound }"
              x="16.3"
              y="4"
              rx="2"
              width="3.7"
              height="11"
            />
          </svg>
        </div>
      </div>
    </div>
    <AtomSection
      class="relative grid md:h-screen md:min-h-[1000px] md:grid-cols-2"
      full-width
    >
      <div
        class="relative flex h-full w-full flex-col items-start justify-start space-y-6 bg-a-charcoal px-4 pt-10 text-a-charcoal xl:px-12 3xl:space-y-10"
      >
        <AtomAnimate
          type="button"
          class="textXLarge pb-12 font-title font-bold text-a-green"
        >
          <ul>
            <li>Explore the your limitless potential.</li>
            <li>Endless customization.</li>
            <li>Unlimited potential.</li>
          </ul>
          <br />
          <p>Ongaku</p>
        </AtomAnimate>
      </div>
      <div
        class="relative flex h-full w-full flex-col justify-center space-y-10 bg-a-green p-10"
      >
        <div class="grid gap-10 md:w-10/12 md:grid-cols-2">
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <g-image
                src="/1.jpg"
                immediate
                alt=""
                class="w-full rounded-xl shadow-2xl"
              />
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <g-image
                src="/2.jpg"
                immediate
                alt=""
                class="w-full rounded-xl shadow-2xl"
              />
            </kinesis-element>
          </kinesis-container>
        </div>
        <div class="grid gap-10 self-end md:w-10/12 md:grid-cols-2">
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <g-image
                src="/3.jpg"
                immediate
                alt=""
                class="w-full rounded-xl shadow-2xl"
              />
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <g-image
                src="/4.jpg"
                immediate
                alt=""
                class="w-full rounded-xl shadow-2xl"
              />
            </kinesis-element>
          </kinesis-container>
        </div>

        <div class="grid gap-10 md:w-10/12 md:grid-cols-2">
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <g-image
                src="/5.jpg"
                immediate
                alt=""
                class="w-full rounded-xl shadow-2xl"
              />
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <g-image
                src="/6.jpg"
                immediate
                alt=""
                class="w-full rounded-xl shadow-2xl"
              />
            </kinesis-element>
          </kinesis-container>
        </div>
        <div class="hidden w-10/12 gap-10 self-end md:grid-cols-2 3xl:grid">
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <g-image
                src="/7.jpg"
                immediate
                alt=""
                class="w-full rounded-xl shadow-2xl"
              />
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <g-image
                src="/8.jpg"
                immediate
                alt=""
                class="w-full rounded-xl shadow-2xl"
              />
            </kinesis-element>
          </kinesis-container>
        </div>
      </div>
    </AtomSection>
    <AtomSection
      class="relative grid md:h-screen md:min-h-[1000px] md:grid-cols-2"
      full-width
    >
      <div
        class="relative flex h-full w-full flex-col items-start justify-start space-y-6 bg-white px-4 pt-10 text-a-charcoal 3xl:space-y-10"
      >
        <div
          v-for="card in faq"
          :key="card.title"
          type="button"
          class="flex cursor-pointer items-center space-x-2 rounded-xl px-6 pb-6 pt-4 font-title text-3xl font-semibold hover:bg-a-green xl:text-4xl"
          :class="{ 'bg-a-yellow': activeFaq === card.title }"
          @click="activeFaq = card.title"
        >
          <div class="w-full">{{ card.title }}</div>
        </div>
      </div>
      <div
        class="relative flex h-full w-full flex-col space-y-10 bg-a-charcoal p-10"
      >
        <div class="font-title text-2xl">Answer</div>
        <div
          v-for="(card, cardName) in faq"
          :id="`ongaku-${cardName}`"
          :key="cardName"
        >
          <div
            v-show="card.title === activeFaq"
            class="textMedium prose !text-white"
          >
            <div class="" v-html="card.description" />
          </div>
        </div>
      </div>
    </AtomSection>
  </TemplateDefault>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis';

export default {
  components: {
    KinesisContainer,
    KinesisElement,
  },
  data() {
    return {
      selectedPortfolio: '',
      popup: false,
      activeSound: 'false',
      isPlaying: false,
      activeFaq: 'Inspiration',
      activeMusic: 'First one ipsum',
      selectedMusic: '/m1.mp3',
      faq: [
        {
          title: 'Inspiration',
          description: `The vision of Ongaku was to create an environment which not only
          brings artists of Asia together, but also provide a space where holders can
          explore their creative mind.`,
        },
        {
          title: 'Music',
          description: `Each NFT will have music behind the animation which will be
          customizable to holders. In an effort to diversify the sound of Ongaku we've
          reached out to artists all over Asia each with their own unique style. Ranging
          from K-Pop music to Techno music.`,
        },
        {
          title: 'Customization',
          description: `
          <p>Each Ongaku can be hand tailored to each holder and their preferences,
          allowing each holder to have something unique to themselves and truly represents.
           To acheive this goal we've implemented the following systems.</p>

          <p>1. Gender Swap - Each Ongaku NFT will have the option to switch
          between male or female.</p>

          <p>2. Music Creation - The music behind every Ongaku can be customized and created by the
          holder using our websites built-in system which will update the metadata of NFT
          and change the song your Ongaku listens to.</p>
`,
        },
        {
          title: 'Mint Information',
          description: `More will be revealed in time...`,
        },
        {
          title: 'Contact Information',
          description: ` <p>
          Twitter Direct Messages :
          <a href="https://twitter.com/OngakuOfficial" target="_blank"
            >https://twitter.com/OngakuOfficial</a
          >
        </p>
        <p>
          General Support : support@ongaku.com <br />
          Business Inquiries :info@ongaku.com
        </p>`,
        },
      ],
      musicCards: [
        {
          title: 'Sunset Valley',
          song: '/m1.mp3',
        },
        {
          title: 'Empower',
          song: '/m2.mp3',
        },
        {
          title: 'Street Side',
          song: '/m3.mp3',
        },
      ],
      cardInfo: [
        {
          title: ' portfolio 1',
          video: 'https://player.vimeo.com/video/773601002',
        },
        {
          title: ' portfolio 1',
          video: 'https://player.vimeo.com/video/773601002',
        },
        {
          title: ' portfolio 1',
          video: 'https://player.vimeo.com/video/773601002',
        },
        {
          title: ' portfolio 1',
          video: 'https://player.vimeo.com/video/773601002',
        },
        {
          title: ' portfolio 1',
          video: 'https://player.vimeo.com/video/773601002',
        },
        {
          title: ' portfolio 1',
          video: 'https://player.vimeo.com/video/773601002',
        },
      ],
    };
  },

  methods: {
    playSound(sound) {
      if (sound) {
        const audio = new Audio(sound);
        audio.play();
      }
    },
  },
};
</script>

<style>
.prose a {
  @apply text-white;
}
.main:after {
  animation: grain 8s steps(10) infinite;
  background-image: url(/grain.png);
  content: '';
  height: 400%;
  left: -50%;
  opacity: 0.4;
  position: fixed;
  top: -150%;
  width: 300%;
}
@keyframes grain {
  0%,
  to {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  10% {
    -webkit-transform: translate(-5%, -10%);
    transform: translate(-5%, -10%);
  }
  20% {
    -webkit-transform: translate(-15%, 5%);
    transform: translate(-15%, 5%);
  }
  30% {
    -webkit-transform: translate(7%, -25%);
    transform: translate(7%, -25%);
  }
  40% {
    -webkit-transform: translate(-5%, 25%);
    transform: translate(-5%, 25%);
  }
  50% {
    -webkit-transform: translate(-15%, 10%);
    transform: translate(-15%, 10%);
  }
  60% {
    -webkit-transform: translate(15%);
    transform: translate(15%);
  }
  70% {
    -webkit-transform: translateY(15%);
    transform: translateY(15%);
  }
  80% {
    -webkit-transform: translate(3%, 35%);
    transform: translate(3%, 35%);
  }
  90% {
    -webkit-transform: translate(-10%, 10%);
    transform: translate(-10%, 10%);
  }
}
.eq-bar {
  transform: scale(1, -1) translate(0, -24px);
}

.eq-bar--1 {
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-delay: 0s;
  @apply rounded-xl fill-current text-a-yellow;
}

.eq-bar--2 {
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-delay: 0.17s;
  @apply rounded-xl fill-current text-a-yellow;
}

.eq-bar--3 {
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-delay: 0.34s;
  @apply rounded-xl fill-current text-a-yellow;
}
.start.eq-bar--1,
.start.eq-bar--3 {
  animation-name: short-eq;
}
.start.eq-bar--2 {
  animation-name: tall-eq;
}
@keyframes short-eq {
  0% {
    height: 8px;
  }

  50% {
    height: 4px;
  }

  100% {
    height: 8px;
  }
}

@keyframes tall-eq {
  0% {
    height: 16px;
  }

  50% {
    height: 6px;
  }

  100% {
    height: 16px;
  }
}
</style>
