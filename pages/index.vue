<template>
  <section class="page">


    <div class="robot-wrapper d-none d-xl-block">
<spline-viewer loading-anim-type="spinner-big-light" url="https://prod.spline.design/3Q0pEaUhhT13LgE5/scene.splinecode"></spline-viewer>
    </div>
    <!-- 
   
   
    -->
    <ScrollHint class="scroll-hint"/>

  </section>
</template>

<script setup>

import {useEventListener} from "@vueuse/core";

let navigatingToPortfolio = false;

onMounted(() => {
  preloadRouteComponents('/explore');
  useEventListener(document, 'wheel', async (event) => {
    if (event.deltaY > 0 && !navigatingToPortfolio) {
      navigatingToPortfolio = true;
      navigateTo('/explore');
    }
  });
});

</script>

<style lang="scss" scoped>

.page-leave-active {
  transition: all 0.3s ease;
}

.scroll-hint {
  position: absolute;
  bottom: 100px;
  right: 60px;
  z-index: 1;
  max-width: calc(100vw - 60px);

  @media (max-width: 1200px) {
    right: unset;
    left: 40px;
    overflow: hidden;
  }
}

* {
  user-select: none;
  -webkit-user-select: none;
}
.my-center {
  margin-left: 7vh;
}
.lead {
  color: #F2F2F2;
  user-select: none;
  text-shadow: -1px 0 0 rgb(44, 191, 217), 1px 0 0 rgb(239, 9, 105), 0px 3px 2px rgb(39, 20, 103);
  transition: text-shadow 0.1s ease-in-out;
  @media screen and (max-width: 992px) {
    text-shadow: none;
  }
  max-width: 900px;

  span {
    pointer-events: none;
    color: #F2F2F2;
    user-select: none;
  }
}

.lead-icon {
  color: #F2F2F2;
  font-size: 40px;
  text-shadow: 0 22px 30px rgba(0, 0, 0, 0.2), 2px 2px 1px rgba(206, 89, 55, 0);
  animation: leadIconAnimation 1s ease-in-out forwards;
  animation-delay: 1s;
  opacity: 0;
  transform: translateX(20px);

  @media screen and (max-width: 992px) {
    font-size: 28px;
    font-weight: 400 !important;
  }
}

@keyframes leadIconAnimation {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.heading-char {
  display: inline;
  opacity: 0;
  animation: headingCharReveal 2s cubic-bezier(0.7, 0, 0.2, 1) forwards;
}
.robot-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12vh;
  margin-left: 11vh;

  spline-viewer {
    width: 100vw;     
    aspect-ratio: 16/9;  /* 🔑 mantiene proporción exacta */
  }
}

@media (max-width: 768px) {
  .robot-wrapper {
  width: 100%;
    margin-top: 30vh; /* menos espacio arriba */
    margin-left: 5vh;   /* centrado */


    spline-viewer {
      width: 100vw; 
      aspect-ratio: 1/1; /* cuadrado para móviles */
      max-height: 50vh;  /* que no coma toda la pantalla */
    }
  }
}

@keyframes headingCharReveal {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


</style>
