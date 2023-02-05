<template>
  <transition name="fade">
    <div
      v-if="videoVisible"
      class="absolute z-50 h-full w-full overflow-hidden lg:h-screen"
    >
      <div class="absolute top-6 left-6 z-50 w-16">
        <g-link
          to="/"
          class="relative z-50 text-white transition-all duration-300 ease-in-out scrolled:w-16 scrolled:text-a-green xl:w-24"
        >
          <AtomBrand />
        </g-link>
      </div>
      <video
        playsinline=""
        autoplay=""
        muted=""
        loop=""
        poster="/landingimage.png"
        class="absolute inset-0 z-40 h-full w-full object-cover"
      >
        <source :src="videoLinkDesktop" type="video/mp4" />
      </video>
      <button
        type="button"
        class="buttonStyling !absolute top-6 right-6 z-40"
        @click="videoVisible = false"
      >
        <span class="textSmall">Skip Video</span>
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      videoVisible: true,
      videoLinkDesktop: `https://player.vimeo.com/progressive_redirect/playback/777757984/rendition/1080p/file.mp4?loc=external&signature=6307e9214ea9b5468bd6ec9328a3c8dadb00459c2911d5c820d1f3fe808ed73f`,
    };
  },
  mounted() {
    setTimeout(() => {
      this.videoVisible = false;
    }, 8000);
  },
};
</script>
