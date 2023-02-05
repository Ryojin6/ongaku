<template>
  <TemplateDefault class="relative z-10 bg-a-yellow text-white" homepage>
    <AtomSection
      class="relative grid h-screen min-h-[1000px] grid-cols-2"
      full-width
    >
      <div
        class="relative flex h-full w-full flex-col items-center justify-center px-10"
      >
        <div
          class="relative z-10 font-title text-7xl font-bold text-a-charcoal 2xl:text-8xl 3xl:text-9xl"
        >
          The <span class="text-a-red">#1</span> Music NFT in 2023
        </div>
        <div class="textMedium pt-10 text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          id sed provident repellat.
        </div>
      </div>
      <div class="relative z-50 flex items-center justify-end bg-a-charcoal">
        <AtomAnimate
          class="relative z-50 flex w-full flex-col items-end space-y-4 pt-4"
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
            class="custom-transition absolute right-0 top-40 z-20 h-24 w-6/12 -translate-y-0 rounded-xl bg-a-charcoal hover:scale-110 2xl:h-28 3xl:h-32"
          />
          <button
            @click.prevent="
              playSound(
                'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3',
              )
            "
            type="button"
            class="custom-transition absolute right-0 top-96 z-20 h-24 w-6/12 rounded-xl bg-a-charcoal hover:scale-110 2xl:h-28 3xl:h-32"
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
    <!-- <div class="fixed bottom-10 right-10">
      <audio controls autoplay>
        <source src="/1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div> -->
    <div class="relative grid h-screen min-h-[1000px] grid-cols-2" full-width>
      <div
        class="relative flex h-full w-full flex-col items-start justify-center space-y-6 bg-white px-4 text-a-charcoal xl:px-12 3xl:space-y-10"
      >
        <div
          v-for="i in musicCards"
          :key="i.title"
          type="button"
          class="flex cursor-pointer items-center space-x-2 rounded-xl px-6 pb-10 pt-4 text-center font-title text-4xl font-bold hover:bg-a-green xl:text-5xl 2xl:text-6xl 3xl:text-7xl"
          :class="{ 'bg-a-green': activeMusic === i.title }"
          @click.prevent="
            playSound(
              'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3',
            ),
              (activeMusic = i.title)
          "
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
      class="relative grid h-screen min-h-[1000px] grid-cols-2"
      full-width
    >
      <div
        class="relative flex h-full w-full flex-col items-start justify-start space-y-6 bg-a-charcoal px-4 pt-10 text-a-charcoal xl:px-12 3xl:space-y-10"
      >
        <AtomAnimate
          type="button"
          class="textXLarge font-title font-bold text-a-green"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quaerat
          officiis expedita cum aliquam iste ducimus.
        </AtomAnimate>
      </div>
      <div
        class="relative flex h-full w-full flex-col justify-center space-y-10 bg-a-green p-10"
      >
        <div class="grid w-10/12 grid-cols-2 gap-10">
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <g-image
                src="/example.png"
                immediate
                alt=""
                class="w-full rounded-xl shadow-2xl"
              />
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <g-image
                src="/example.png"
                immediate
                alt=""
                class="w-full rounded-xl shadow-2xl"
              />
            </kinesis-element>
          </kinesis-container>
        </div>
        <div class="grid w-10/12 grid-cols-2 gap-10 self-end">
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <g-image
                src="/example.png"
                immediate
                alt=""
                class="w-full rounded-xl shadow-2xl"
              />
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <g-image
                src="/example.png"
                immediate
                alt=""
                class="w-full rounded-xl shadow-2xl"
              />
            </kinesis-element>
          </kinesis-container>
        </div>

        <div class="grid w-10/12 grid-cols-2 gap-10">
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <g-image
                src="/example.png"
                immediate
                alt=""
                class="w-full rounded-xl shadow-2xl"
              />
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <g-image
                src="/example.png"
                immediate
                alt=""
                class="w-full rounded-xl shadow-2xl"
              />
            </kinesis-element>
          </kinesis-container>
        </div>
        <div class="hidden w-10/12 grid-cols-2 gap-10 self-end 3xl:grid">
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <g-image
                src="/example.png"
                immediate
                alt=""
                class="w-full rounded-xl shadow-2xl"
              />
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element :strength="10" type="depth">
              <g-image
                src="/example.png"
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
      class="relative grid h-screen min-h-[1000px] grid-cols-2"
      full-width
    >
      <div
        class="relative flex h-full w-full flex-col items-start justify-start space-y-6 bg-white px-4 pt-10 text-a-charcoal xl:px-12 3xl:space-y-10"
      >
        <div
          v-for="card in faq"
          :key="card.title"
          type="button"
          class="flex cursor-pointer items-center space-x-2 rounded-xl px-6 pb-10 pt-4 text-center font-title text-4xl font-bold hover:bg-a-green xl:text-5xl 3xl:text-7xl"
          :class="{ 'bg-a-green': activeFaq === card.title }"
          @click="activeFaq = card.title"
        >
          <div class="w-full">{{ card.title }}</div>
        </div>
      </div>
      <div
        class="relative flex h-full w-full flex-col space-y-10 bg-a-charcoal p-10"
      >
        <div
          v-for="(card, cardName) in faq"
          :id="`ongaku-${cardName}`"
          :key="cardName"
          class="absolute top-0"
        >
          <div
            v-show="card.title === activeFaq"
            class="textSmall prose !text-white"
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
      activeFaq: 'Lorem ipsumesometsama2',
      activeMusic: 'First one ipsum',
      faq: [
        {
          title: 'Lorem ipsumesometsama',
          description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Maxime sapiente ipsa ea inventore consequatur, at sed cum ex voluptate 
          aperiam ipsum dolorum aliquam quos repellendus delectus ullam nihil hic
           deserunt?`,
        },
        {
          title: 'Lorem ipsumesometsama2',
          description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Maxime sapiente ipsa ea inventore consequatur, at sed cum ex voluptate 
          aperiam ipsum dolorum aliquam quos repellendus delectus ullam nihil hic
           deserunt?`,
        },
        {
          title: 'Lorem ipsumesometsama3',
          description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Maxime sapiente ipsa ea inventore consequatur, at sed cum ex voluptate 
          aperiam ipsum dolorum aliquam quos repellendus delectus ullam nihil hic
           deserunt?`,
        },
      ],
      musicCards: [
        {
          title: 'First one ipsum',
        },
        {
          title: 'Lorem ipsum',
        },
        {
          title: 'Lorem ipsum2',
        },
        {
          title: 'Lorem ipsum3',
        },
        {
          title: 'Lorem ipsum4',
        },
        {
          title: 'Lorem ipsum5',
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
        let audio = new Audio(sound);
        audio.play();
      }
    },
  },
};
</script>

<style>
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
