<template>
  <div class="relative z-50 mx-auto h-full rounded-3xl pb-12">
    <div class="aspect-w-16 aspect-h-9 rounded-3xl">
      <!-- <video ref="myvideo" controls class="rounded-3xl bg-transparent">
        <source src="/video.mp4" type="video/mp4" />
      </video> -->
      <div v-if="!playVideo" class="absolute inset-0 h-full w-full rounded-3xl">
        <img
          src="/landingimage.png"
          alt=""
          class="h-full w-full rounded-3xl object-cover"
        />
      </div>
    </div>

    <!-- <audio controls autoplay class="opacity-0">
      <source src="/sound.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio> -->

    <div v-if="!playVideo" class="pin-center absolute">
      <button
        type="button"
        title="Play informational video"
        class="lg:mt-10"
        @click="play"
      >
        <AtomIconPlay class="w-16 md:w-24 xl:w-32 2xl:w-64" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playVideo: false,
    };
  },
  methods: {
    play() {
      this.$refs.myvideo.play();
      this.playVideo = true;
    },
  },
};
</script>
