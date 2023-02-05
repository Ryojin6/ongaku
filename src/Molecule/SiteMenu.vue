<template>
  <nav class="text-white scrolled:text-a-teal xl:w-full">
    <div class="z-40 flex h-full w-full items-center">
      <div
        class="textSmall z-30 hidden w-full items-center justify-end space-x-10 font-bold xl:flex"
      >
        <AtomSiteMenuItem
          v-for="item in links"
          :key="item.label"
          :item="item"
          class="transition-all duration-300 ease-in-out"
        />
      </div>
      <transition name="slide-fade">
        <div
          v-if="toggled"
          class="bg-lab-navy absolute inset-0 z-50 flex h-screen w-full flex-col items-center justify-center space-y-6 xl:shadow-xl"
          @click="toggled = !toggled"
        >
          <AtomSiteMenuItem
            v-for="item in links"
            :key="item.label"
            :item="item"
            class="textLarge text-white xl:hidden"
          />
        </div>
      </transition>
      <button
        class="focus:outline-none relative z-50 block xl:hidden"
        @click="toggled = !toggled"
      >
        <AtomIconHamburger :class="{ 'open text-white': toggled }" />
      </button>
    </div>

    <div
      class="fixed inset-0 h-full w-full bg-black transition-all duration-500 ease-in-out xl:hidden"
    />
  </nav>
</template>

<script>
export default {
  props: {
    inverted: {
      type: Boolean,
      default: false,
    },

    homepage: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      siteUrl: process.env.FRONTEND_URI,
      links: [
        {
          label: 'About Us',
          link: '/about',
        },
        {
          label: 'Our Projects',
          link: '/our-projects',
        },
      ],
      toggled: false,
      toggleSearch: false,
    };
  },
  methods: {
    closeMenu() {
      this.toggled = false;
    },
  },
};
</script>
