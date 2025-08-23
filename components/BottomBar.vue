<template>
  <div class="bottom-bar flex-wrap align-items-center d-flex justify-content-between pb-2 pb-md-3">
    <div class="d-flex align-items-center">
      
      <h1 class="bottom-navigation__title ms-4"><span itemprop="name">Óscar Gómez</span><br><span
          itemprop="jobTitle">Software Engineer</span></h1>
    </div>
    <div class="col-auto mb-3 d-flex">
      
      <a href="https://github.com/OscarGomezGonzalezz" target="_blank" class="me-4 text-decoration-none" aria-label="View this site on GitHub">
        <i class="fa-brands fa-github fa-xl github-icon mouse-sm text-decoration-none"
          title="View this site on GitHub">
        </i>
      </a>
      <a href="https://www.linkedin.com/in/oscargomezgonzalez/" target="_blank" class="me-4 text-decoration-none" aria-label="Find me on LinkedIn">
        <i class="fa-brands fa-linkedin fa-xl linkedin-icon mouse-sm text-decoration-none"
        title="Find me on LinkedIn">
        </i>
      </a>
      <StatusIndicator class="status-indicator d-none d-xl-block"/>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.bottom-bar{

  &:after{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 200px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    z-index: -1;
    opacity: 1;
    transition: opacity 0.5s ease;
  }
}

.bottom-navigation__title {
  display: block;
  color: white;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 00;
  line-height: 18px;
  letter-spacing: 0.2px;
  margin-bottom: 1.2vh;

  span {
    color: white;

    &:last-child {
      color: #bdc8e0;
      font-weight: 400;
      font-size: 0.9rem;
    }
  }
}

.github-icon, .audio-icon, .twitter-icon, .linkedin-icon, .email-icon {
  color: rgba(224, 222, 255, 0.8);
  mix-blend-mode: color-dodge;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
}
@media (min-width: 1200px) {
  .bottom-navigation__title {
    font-size: 1.8vh;  
    line-height: 2.3vh;    
    letter-spacing: 0.06vh;

    span:last-child {
      font-size: 1.6vh; // antes 0.9rem
    }
  }

  .github-icon, .linkedin-icon, .email-icon, .twitter-icon, .audio-icon {
    font-size: 2.5vh; // aumenta relativo al contenedor
    margin-right: 0.5vh;
  }

  .bottom-bar::after {
    height: 3.5vh;
  }
  .status-indicator {
   position: relative;
  top: -0.00vh; // mueve el indicador hacia arriba
  }
}

@media (min-width: 1900px) {
  .status-indicator {
    position: relative;
    top: -0.2vw; // mueve el indicador hacia arriba
    }
}

@media (min-width: 2100px) {
  .status-indicator {
    position: relative;
    top: -0.4vw; // mueve el indicador hacia arriba
    }
}
@media (min-width: 2500px) {
  .status-indicator {
    position: relative;
    top: -0.65vw; // mueve el indicador hacia arriba
    }
}


</style>