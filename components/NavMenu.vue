<template>
        <div :class="navClasses">
          <div class="nav-icon">
            <div class="nav-icon__line"></div>
            <div class="nav-icon__line"></div>
            <div class="nav-icon__line"></div>
          </div>
          <nav class="nav-links">
            <NuxtLink to="/about" class="mouse-md">
              About
            </NuxtLink>
            <NuxtLink to="/explore" class="mouse-md">
              Explore
            </NuxtLink>
            <NuxtLink to="/contact" class="mouse-md">
              Contact
            </NuxtLink>
          </nav>
        </div>
</template>

<script setup>

import {useMouse} from "@vueuse/core";
import {useWindowSize} from "@vueuse/core";

const {x, y} = useMouse();
const {width} = useWindowSize();

const navClasses = computed(() => {
  return {
    'nav-container': true,
    'nav-container--open': y.value < 180 && x.value > Math.min((width.value / 2), width.value - 800)
  }
});

</script>

<style lang="scss" scoped>

.nav-container {
  position: absolute;
  top: 3vh;
  right: 3vh;
  z-index: 100;

  @media screen and (max-width: 1680px) {
    right: 3vh;
  }

  @media screen and (max-width: 992px) {
    display: none;
    position: relative;
  }

  .nav-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 2vh;
    width: 3vh;
  }

  .nav-icon__line {
    height: 0.2vh;
    width: 100%;
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0.1vh 0.1vh, rgba(0, 0, 0, 0.1) 0 0.2vh 0.2vh;
    pointer-events: none;
    transition: transform 0.5s cubic-bezier(0.7, 0, 0, 1);
  }

  .nav-links {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    transition: clip-path 0.5s cubic-bezier(0.7, 0, 0, 1);
    position: absolute;
    top: -3vh;
    right: 9vh;
    display: flex;
    flex-direction: row;
    gap: 3vh;

    @media screen and (max-width: 1400px) {
      gap: 2vh;
    }

    a{
      background: none;
      border: none;
      padding: 3vh;
      margin: 0;
      color: white;
      font-family: 'N27', sans-serif;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.2vh;
      text-shadow: 0 0.2vh 0.1vh rgb(0 0 0 / 40%);
      font-size: 1.4vh;
      text-decoration: none;
      position: relative;
    }
  }

  &.nav-container--open{

    .nav-icon__line{

      &:nth-child(1){
        transform: rotate(45deg) translate(0.5vh, 0.8vh);
      }

      &:nth-child(2){
        transition: transform 0.7s cubic-bezier(0.7, 0, 0, 1);
        transform: translate(-60vh);
      }

      &:nth-child(3){
        transform: rotate(-45deg) translate(0.5vh, -0.8vh);
      }
    }

    .nav-links{
      transition: clip-path 0.7s cubic-bezier(0.7, 0, 0, 1);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }

}

</style>
