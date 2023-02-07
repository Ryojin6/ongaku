<template>
  <div>
    <div v-for="(track, index) in tracks" :key="index">
      <audio :src="track.src" ref="audio" />
      <button @click="play(index)">Play</button>
      <button @click="pause(index)">Pause</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tracks: [
        {
          src: '/m1.mp3',
        },
        {
          src: '/m2.mp3',
        },
        {
          src: '/m1.mp3',
        },
      ],
      currentTrack: null,
    };
  },
  methods: {
    play(index) {
      this.currentTrack = this.$refs.audio[index];
      this.currentTrack.play();
    },
    pause(index) {
      this.currentTrack = this.$refs.audio[index];
      this.currentTrack.pause();
    },
  },
};
</script>
