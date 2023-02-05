<template>
  <transition name="fade">
    <div
      v-show="elementVisible"
      class="bg-a-charcoal fixed inset-0 z-50 h-full w-full"
    >
      <div class="pin-center absolute mx-auto w-full max-w-5xl p-10">
        <AtomLoader class="w-full" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      elementVisible: false,
    };
  },

  mounted() {
    setTimeout(() => {
      this.elementVisible = false;
    }, 1500);
  },
};
</script>
