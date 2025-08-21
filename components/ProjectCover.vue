<template>
  <article role="article" :class="containerClasses" tabindex="0"
           :aria-label="currentPortfolioItem['title']"
           :aria-description="currentPortfolioItem['lead']">

<Transition name="fade">
  <div v-if="!showDetails" class="project-cover__video-container project-cover__fade" @click="toggleDetails">
    <video ref="video" :style="mediaStyle" class="project-cover__video mouse-md" loop muted autoplay playsinline :poster="currentPortfolioItem['cover']">
      <source :src="currentPortfolioItem['videoWebm']" type="video/webm">
      <source :src="currentPortfolioItem['videoMP4']" type="video/mp4">
    </video>

    <div class="title-bar row project-cover__fade" >
      <div class="col-auto">
        <div class="d-block">
          <h1 class="project-cover__title mb-0">{{ currentPortfolioItem["title"] }}</h1>
          <span class="project-cover__type text-small mb-0 d-block">{{ currentPortfolioItem["type"] }}</span>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="project-cover__details project-cover__fade" @click="toggleDetails">
    <div class="meta">
    <h1 class="card-intro" v-html="currentPortfolioItem['intro']"></h1>
    <h1 class="card-content" v-html="currentPortfolioItem['content']"></h1>
    </div>
  </div>
</Transition>

  </article>
</template>

<script setup>

import {useMouse, useWindowSize} from "@vueuse/core";

const showDetails = ref(false);
const toggleDetails = () => {
  showDetails.value = !showDetails.value;
};
const props = defineProps({
  portfolioItem: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  isFocused: {
    type: Boolean,
    required: false,
    default: false
  }
});

const currentPortfolioItem = toRef(props, 'portfolioItem');

const displayIndex = computed(() => {
  return props.index.toString().padStart(2, '0');
});

const container = ref(null);
const {width, height} = useWindowSize();
const {x, y} = useMouse();
const parallaxOffset = 30;
const isActive = ref(false);

/**
 * Determine the inline styles to apply to the video/image element
 */
const mediaStyle = computed(() => {
  return {
    'transform': `translate(${(((1 / width.value) * x.value) * parallaxOffset * -1)}px, ${(((1 / height.value) * y.value) * parallaxOffset * -1)}px)`
  }
});

const containerClasses = computed(() => {
  return {
    'project-cover': true,
    'project-cover--active': isActive.value,
  }
});

const video = ref(null);
watch(() => props.isFocused, (isFocused) => {
  if (isFocused) {
    video.value.play();
  } else {
    video.value.pause();
  }
});

onMounted(() => {
  isActive.value = true;
});

</script>

<style lang="scss" scoped>

.card-intro {
  font-size: 1rem;
  font-weight: 600;
  color: #222;
  line-height: 1.4;
}

.card-content {
  font-size: 0.9rem;
  line-height: 1.3;
  color: #555;
}

/* enlaces dentro del contenido */
.card-content a {
  color: #6c5ce7; /* llamativo */
  text-decoration: underline;
  transition: color 0.3s ease;
}

.card-content a:hover {
  color: #341f97;
}

.project-cover__fade {
  opacity: 1;
  transition: opacity 0.3s ease-in-out !important; // !important para sobrescribir otros transitions
}

.project-cover__fade.hidden {
  opacity: 0;
}

.project-cover__details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  color: #333;
  text-align: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}


.project-cover__details:hover {
  box-shadow: 0 15px 40px rgba(0,0,0,0.25);
}

.project-cover__details h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.project-cover__details .lead {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #555;
}

.project-cover__details .meta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 0.95rem;
  color: #666;
  flex-wrap: wrap;
}

.project-cover__details .meta span {
  background: #f5f5f5;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
}

.project-cover {
  position: relative;
  height: 600px;
  flex: none;
  background: #111115;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0 5px 10px;
  transform: scale(0) rotateZ(10deg);
  transform-origin: center center;
  transition: transform 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  aspect-ratio: 1.6;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 80%);
    z-index: 5;
    border-radius: 0 0 8px 8px;
    pointer-events: none;
  }

  @media screen and (max-width: 1200px) {
    height: 60svh;
    aspect-ratio: 0.8;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: scale(1);
}

.title-bar {
  position: absolute;
  bottom: 20px;
  left: 40px;
  pointer-events: none;
  z-index: 6;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.project-cover__title, .project-cover__type {
  color: #F2F2F2;
}

.project-cover__video-container {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.project-cover__video {
  width: calc(100% + 60px);
  height: calc(100% + 60px);
  object-fit: cover;
  object-position: center center;
  transform-origin: center center;
  background-color: #25223d;
}

.project-cover--active {
  transform: scale(1);

  .title-bar {
    opacity: 1;
    transition-delay: 1.2s;
  }
}

.project-cover__featured-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 8px;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
}

</style>
