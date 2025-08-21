<template>
  <div class="bottom-bar row pb-2 pb-md-3 align-items-end d-flex justify-content-between">
    <div class="col-auto d-flex align-items-center" itemscope itemtype="https://schema.org/Person">
      
      <h1 class="bottom-navigation__title ms-4"><span itemprop="name">Óscar Gómez</span><br><span
          itemprop="jobTitle">Software Engineer</span></h1>
    </div>
    <div class="col-auto mb-3 d-flex align-items-center">
      
      <a href="https://github.com/OscarGomezGonzalezz" target="_blank" class="me-4 text-decoration-none" aria-label="View this site on GitHub">
        <i class="fa-brands fa-github fa-xl github-icon mouse-sm text-decoration-none"
          title="View this site on GitHub">
        </i>
      </a>
      <a href="https://www.linkedin.com/in/oscargomezgonzalez/" target="_blank" class="me-5 text-decoration-none" aria-label="Find me on LinkedIn">
        <i class="fa-brands fa-linkedin fa-xl linkedin-icon mouse-sm text-decoration-none"
        title="Find me on LinkedIn">
        </i>
      </a>
      <a href="mailto:hello@oscargomez.dev" target="_blank" class="me-5 text-decoration-none" aria-label="Find me on LinkedIn">
        <i class="fa-solid fa-envelope fa-xl email-icon mouse-sm text-decoration-none d-sm-none"
        title="Contact me">
        </i>
      </a>
      <StatusIndicator class="d-none d-xl-block"/>
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
  margin-bottom: 12px;

  span {
    color: white;

    &:last-child {
      color: #bdc8e0;
      font-weight: 400;
      font-size: 0.9rem;
    }
  }
}

.github-icon, .audio-icon, .twitter-icon, .linkedin-icon {
  color: rgba(224, 222, 255, 0.8);
  mix-blend-mode: color-dodge;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
}

</style>