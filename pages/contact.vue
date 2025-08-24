<template>
  <section class="page">

    <div class="container-xxxl">
      <div class="row mt-0 mt-lg-6 justify-content-end">
        <div class="col-12 col-md-8 col-lg-7 col-xl-5 col-xxl-4 mb-4">
          <NuxtLink class="back-link mouse-md mt-4 mt-lg-0" to="/"><i class="fa-solid fa-arrow-left fa-2x pe-3"></i>
          </NuxtLink>
          <CodeTag class="mt-5 mb-3">contact</CodeTag>
          <h1 class="mb-4">Let's Chat</h1>
          <p class="mb-4">I’m always up for a good tech conversation — or even better, new ideas to build.
Feel free to drop me a message, I don’t bite (promise).</p>
          <ActionButton to="mailto:hello@oscargomez.dev" target="_blank" class="mb-6">
            <i class="fa-sharp fa-light fa-paper-plane"></i>
            Let's chat
          </ActionButton>
          <hr class="mb-6">
          <p class="mb-4">You can find me posting occasionally on <a href="https://www.linkedin.com/in/oscargomezgonzalez/" target="blank" class="article__followlink mouse-sm">LinkedIn</a>.</p>
        </div>
        <div class="col-1 d-none d-xl-block"></div>
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>

.page-enter-active {
  transition: all 1.4s ease;
  transition-delay: 1.7s;
}

.page-leave-active {
  transition: all 1s;
}

.page-enter-from, .page-leave-to {
  opacity: 0;
}

.back-link {
  color: #212A36;
  position: fixed;
  top: 40px;
  left: 60px;

  @media screen and (max-width: 992px) {
    position: relative;
    top: 0;
    left: 0;
  }
}

.container-xxxl {
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    min-height: unset;
  }
}

@media (min-width: 1440px) {
  .back-link {
    top: 3vh;    // reemplaza 40px
    left: 2vw;   // reemplaza 60px
    font-size: 2.5vh; // opcional: si quieres que el icono crezca con la pantalla
  }
  .code-tag {
    font-size: 1.3vh;       
    padding-bottom: 1vh;
  }

  .container-xxxl p.mb-4:first-of-type { 
    max-width: 90vw;
  }

  h1 {
    font-size: 2.5vw;
  }

  p, .mb-6 {
    font-size: 1.8vh; // escala párrafos y márgenes
  }

  ActionButton {
    font-size: 1.8vh; // si el texto del botón crece con la pantalla
    padding: 1vh 2vw; // padding proporcional
  }

  hr {
    margin-bottom: 3vh; // escalado proporcional
  }

  h3 {
    font-size: 2vh;
    margin-bottom: 2vh;
  }
}


</style>
