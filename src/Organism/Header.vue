<template>
  <header class="bg-blur-2xl custom-transition fixed top-0 z-30 w-1/2 p-6">
    <div class="mx-auto flex w-full max-w-8xl items-center justify-between">
      <g-link
        to="/"
        class="scrolled:text-a-teal z-50 w-48 text-white transition-all duration-300 ease-in-out scrolled:w-40 xl:w-64"
      >
        <object data="/logo.svg" class="w-full">
          <img src="/logo.svg" alt="" class="w-full" />
        </object>
      </g-link>

      <!-- <div
        class="order-2 ml-auto flex w-16 max-w-8xl items-center justify-end text-right md:order-none md:mr-10 md:w-full"
      >
        <MoleculeSiteMenu />
      </div> -->
      <div class="fixed top-10 right-10 z-10">
        <AtomIconTwitter link="https://twitter.com/OngakuOfficial" />
      </div>
    </div>
  </header>
</template>

<style>
/* Fill button styling */
.buttonStyling {
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 40px 8px;
  outline: 0;

  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  @apply border-white font-mono !text-sm text-gray-800;
}

.buttonStyling::after {
  content: '';
  @apply bg-black;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

.buttonStyling:hover::after {
  top: 0px;
  left: 0px;
}
/* End of Fill Button  */
</style>
