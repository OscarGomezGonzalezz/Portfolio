<template>
  <section class="page">

    <div class="container-xxxl">
      <div class="row mt-0 mt-lg-6">
        <main class="d-flex flex-column" itemscope itemtype="https://schema.org/Person">
          <div class="col-12 col-md-8 col-lg-7 col-xl-6 col-xxl-5 mb-4">
            <NuxtLink class="back-link mouse-md mt-4 mt-lg-0 mb-5 mb-lg-0 d-block text-end text-md-start" to="/">
            <i class="fa-solid fa-arrow-right fa-2x pe-3"></i></NuxtLink>
            <CodeTag class="mt-5 mb-5 d-none d-lg-block">about</CodeTag>
            <div class="d-flex flex-row align-items-center mb-5">
              <img src="~assets/images/headshot.jpg" alt="Hey I'm Óscar" class="headshot me-4 me-lg-5">
            </div>
            <h2 class="my-4" itemprop="description">Hi there 👋 <br>  It's Óscar here</h2>
            <div itemprop="knowsAbout">
            <p>
            Quick story: I studied Software Engineering at Universidad de Sevilla (2022–26), and did a 2024–25 exchange year at Hochschule Reutlingen.
            During the exchange, a professor hired me as a Research Associate (May–Aug 2025) integrating and automating IAM features for the
            <a href="https://www.forschungspraxennetz-bw.de/" target="_blank" rel="noopener noreferrer">FoPraNet-BW project</a>.
           </p>
            <p>
            Before that, as a Junior Consultant at <a href="https://esbstudentconsulting.de/" target="_blank" rel="noopener noreferrer">ESB Student Consulting Club</a>.
            (Oct 2024–Mar 2025) I mapped generative and specialized AI solutions in sustainability and proposed practical use cases for a $90B client (no pressure).
            </p>
            <p>
            Since starting university, I’ve loved learning on my own in parallel, which has allowed me to deepen my knowledge in cybersecurity and cloud computing, adding more skills
            and projects to my portfolio than the expected.
            </p>
            </div>
            <h3 class="mt-5 mb-3">Some of these skills are:</h3>
          </div>
          <div class="col-12 col-md-8 col-lg-7 col-xl-6 col-xxxl-6">
            <div class="client-logo__container">
              <img src="https://oscargomez.dev/skills/docker.svg" alt="Docker logo" class="client-logo mouse-md">
              <img src="https://oscargomez.dev/skills/kubernetes.svg" alt="Dolby logo" class="client-logo mouse-md">
              <img src="https://oscargomez.dev/skills/keycloak.svg" alt="ABM logo" class="client-logo mouse-md">
              <img src="https://oscargomez.dev/skills/spring.svg" alt="Steward logo" class="client-logo mouse-md">
              <img src="https://oscargomez.dev/skills/java.svg" alt="MIT logo" class="client-logo mouse-md">
              <img src="https://oscargomez.dev/skills/terraform.svg" alt="Alaska Airlines logo" class="client-logo mouse-md">
              <img src="https://oscargomez.dev/skills/python.svg" alt="Stanley Black and Decker logo"
                   class="client-logo mouse-md">
              <img src="https://oscargomez.dev/skills/nginx.svg" alt="Panera Bread logo"
                   class="client-logo mouse-md">
              <img src="https://oscargomez.dev/skills/github-actions.svg" alt="University of Georgia logo"
                   class="client-logo mouse-md">
              <img src="https://oscargomez.dev/skills/iam.svg" alt="MCASD logo" class="client-logo mouse-md">
              
            </div>
          </div>
          <h3 style="margin-top: 5vh"><a href="https://github.com/OscarGomezGonzalezz" target="_blank" rel="noopener noreferrer">Some of my personal projects</a></h3>
          <div class="col-12 col-md-8 col-lg-7 col-xl-6 col-xxl-5 mb-4 mb-lg-8">
            
            <p class="mb-5">
            </p>
            <ActionButton to="mailto:hello@oscargomez.dev" target="_blank" class="mb-6">
              <i class="fa-sharp fa-light fa-paper-plane"></i>
              Let's chat
            </ActionButton>
          </div>
        </main>

      </div>
    </div>

  </section>
</template>

<script setup>

useHead({
  title: 'Hi there, It´s Óscar here — a Software Engineer specialized in Cloud Security.',
  meta: [
    {
      name: 'description',
      content: 'Hi there, It´s Óscar here — a Software Engineer specialized in Cloud Security.'
    }
  ],
  bodyAttrs: {
    class: 'enable-scroll fixed-webgl'
  }
});

</script>

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

.client-logo__container {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  &:hover {
    .client-logo:not(:hover) {
      opacity: 0.5;
    }
  }
}

.client-logo {
  width: 50%;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.back-link {
  color: #212A36;
  position: fixed;
  top: 40px;
  right: 60px;

  @media screen and (max-width: 992px) {
    position: relative;
    top: 0;
    left: 0;
  }
}

.headshot {
  width: 110px;
  border-radius: 30%;

  @media screen and (max-width: 992px) {
    width: 70px;
  }
}

</style>
