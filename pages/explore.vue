<script setup>

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Draggable} from "gsap/Draggable";
import {InertiaPlugin} from "gsap/InertiaPlugin";
import {Observer} from "gsap/Observer";


gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin, Observer);

//DATA MUST BE HARD-CODED BECAUSE I AM DEPLOYING THE WEB SERVER WITH GITHUB PAGES(ONLY STATIC FILES)
const portfolioData = [
{
    "title": "How It All Started",
    "listed": true,
    "slug": "background",
    "type": "Background",
    "videoWebm": "",
    "videoMP4": "",
    "cover": "https://oscargomez.dev/captures/beginning.webp",
    "intro": "I didn’t always see myself in tech. Before university, computers were just… computers. I used them, but I never imagined building with them.",
    "content": "Short on time? Take a peek at <a href=\"https://www.oscargomez.dev/about/\" target=\"_blank\" rel=\"noopener noreferrer\">my quick resume</a>. If not, let's dive back into my journey.",
    "date": "2004-2021"
  },
  {
    "title": "The Curiosity Spark",
    "listed": true,
    "slug": "seville",
    "type": "The Beginning",
    "videoWebm": "",
    "videoMP4": "https://oscargomez.dev/videos/sevilla_compressed.mp4",
    "cover": "https://oscargomez.dev/captures/sevilla_cover.webp",
    "intro": "Everything changed in my first year at Universidad de Sevilla. Algorithms, OOP, networking — suddenly, I was asking questions like, “How does the internet even work?” and “How do two computers start talking to each other?” Curiosity turned into obsession",
    "content": "A new city and new friends at first felt overwhelming — but by the second year I fell for my studies and started achieving top grades.",
    "date": "2022-Present"
  },
  {
    "title": "Crossing Borders, Expanding Skills",
    "listed": true,
    "slug": "exchange",
    "type": "Exchange Year",
    "videoWebm": "",
    "videoMP4": "https://oscargomez.dev/videos/reutlingen.mp4",
    "cover": "https://oscargomez.dev/captures/germany.webp",
    "intro": "My exchange year at Hochschule Reutlingen in Germany took things further. I deepened my knowledge in Cloud Technologies, Web & Mobile Programming, and Machine Learning — all while travelling, meeting new people, and of course drinking a lot of beer.",
    "content": "Not only I improved my english and german, but also continued with this passion, and I graduated in the top 5% of my class with a 1.47/5 (First Class Honours).",
    "date": "2024-2025"
  },
  {
    "title": "Beyond the Classroom",
    "listed": true,
    "slug": "consulting-club",
    "type": "Consulting Club",
    "videoWebm": "",
    "videoMP4": "https://oscargomez.dev/videos/esb_compressed.mp4",
    "cover": "https://oscargomez.dev/captures/esb_cover.webp",
    "intro": "In the first semester of my exchange, I joined the <a href=\"https://esbstudentconsulting.de/\" target=\"_blank\" rel=\"noopener noreferrer\">ESB Student Consulting Club</a> and met many interesting and ambitious people.",
    "content": "I conducted a market analysis of generative and specialized AI solutions in sustainability, providing potential use cases for a $90B client.",
    "date": " October 2024-March 2025"
  },
  {
    "title": "Turning Curiosity Into Impact",
    "listed": true,
    "slug": "research",
    "type": "Real-World Impact",
    "videoWebm": "",
    "videoMP4": "",
    "cover": "https://oscargomez.dev/captures/research.webp",
    "intro": "By the second semester, my professor offered me a paid student assistant role in his research project. That’s when my curiosity evolved from “how things work” to “how to build and secure them.”",
    "content": "I integrated and automated features of an Identity Access Management (IAM) system into the global <a href=\"https://www.forschungspraxennetz-bw.de/\" target=\"_blank\" rel=\"noopener noreferrer\">FoPraNet-BW Project</a>, working alongside Prof. Dr. Christian Thies and Dipl.-Ing. Sven Dörflinger.",
    "date": "May 2025-August 2025"
  },
  {
    "title": "Where I’m Headed",
    "listed": true,
    "slug": "currently",
    "type": "Current Focus",
    "videoWebm": "",
    "videoMP4": "",
    "cover": "https://oscargomez.dev/captures/now.webp",
    "intro":"Outside of school, I’ve self-studied cloud & cybersecurity and built several hands-on projects, connecting my love for learning with real-world experimentation.",
    "content": "Check my <a href=\"https://github.com/oscargomezgonzalezz\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a> for a clearer view of what I am talking about. <br> In case you want to <a href=\"mailto:hello@oscargomez.dev\" target=\"_blank\" rel=\"noopener noreferrer\">contact me <i class=\"fas fa-envelope\"></i></a>",
    "date": "Present"
  }
  ]




// TODO: Review on mobile and perhaps make the cards a little smaller - need to handle resize event.

/**
 * The proxy element that Draggable will use to track the drag action
 */
let proxy = null;

/**
 * The animation to be controlled by Draggable
 */
let animation = null;

/**
 * The Observer instance that will be used to track mouse wheel events
 */
let wheelObserver = null;

/**
 * Flag to indicate whether the user is interacting with the slider
 */
let isInteracting = false;

/**
 * The ID of the animation frame that will be used to update the position of the slider
 */
let animationFrameId;

onMounted(async () => {

  // Let's calculate some starting values
  const cardsContainer = document.querySelector('.cards');
  const cards = gsap.utils.toArray('.card');
  let wrapWidth = document.querySelector('.cards').offsetWidth;
  wrapWidth = cards.reduce((acc, card) => acc + card.offsetWidth, 0);
  let widestCardWidth = Math.max(...cards.map(card => card.offsetWidth));
  let position = 0;

  // Set the initial position of each card in the slider
  cards.forEach((card, i) => {
    gsap.set(card, {x: position, left: -widestCardWidth});
    position += card.offsetWidth + 5; // Add 5px for spacing between cards
    wrapWidth += 5; // Add 5px for spacing between cards
  });

  // Creating a draggable proxy element
  proxy = document.createElement("div");

const startIndex = 0;
let initialX = 0;
for (let i = 0; i < startIndex; i++) {
  initialX -= cards[i].offsetWidth + 5;
}
gsap.set(proxy, { x: initialX });



  // GSAP animation controlled by Draggable
  animation = gsap.to(cards, {
    x: "+=" + wrapWidth,
    ease: "none",
    paused: true,
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % wrapWidth),
    }
  });

  // Initialize Draggable
  Draggable.create(proxy, {
    type: "x",
    trigger: cardsContainer,
    inertia: true,
    onPress: () => {
      isInteracting = true;
      cancelAnimationFrame(animationFrameId);
    },
    onRelease: () => {
      isInteracting = false;
      animationFrameId = requestAnimationFrame(updatePosition);
    },
    onThrowComplete: updateAnimation,
    onDrag: updateAnimation,
    onThrowUpdate: updateAnimation,
  });

  // Utility function to wrap items around the slider infinitely
  const wrapProgress = gsap.utils.wrap(0, 1)
  const props = gsap.getProperty(proxy);

  // Function to update GSAP animation progress based on drag action
  function updateAnimation() {
    animation.progress(wrapProgress((props("x") + widestCardWidth) / wrapWidth));
  }

  // Now let's also make it work with mouse wheel
  wheelObserver = Observer.create({
    type: "wheel",
    onWheel: (self) => {
      gsap.to(proxy, {
        x: "+=" + (self.deltaY < 0 ? 1200 : -1200),
        onUpdate: () => updateAnimation(),
        ease: "power1.out",
        duration: 0.5
      });
    },
    onWheelStart: () => {
      isInteracting = true;
      cancelAnimationFrame(animationFrameId);
    },
    onWheelEnd: () => {
      isInteracting = false;
      animationFrameId = requestAnimationFrame(updatePosition);
    },
    preventDefault: true,
  });


  // Lastly, let's get an ambient scrolling motion going on when the user is not interacting with the slider

  //computing the scrolling speed depending of the wide of the screen
  const getSpeed = () => {
  const width = window.innerWidth;

  if (width < 600) return 5;   // pantallas pequeñas
  if (width < 1200) return 10; // pantallas medianas
  return 20;                   // pantallas grandes
};
  const updatePosition = () => {
    if (!isInteracting) { // Only update position if user is not interacting
      const currentX = parseFloat(gsap.getProperty(proxy, "x")) || 0;
      const speed = getSpeed();
      const newX = currentX - (speed / 60); //This sets the speed of the automated scrolling

      gsap.set(proxy, {x: newX % wrapWidth});
      updateAnimation();
    }
    animationFrameId = requestAnimationFrame(updatePosition);
  };
  animationFrameId = requestAnimationFrame(updatePosition);

});

// Commit mass murder
onUnmounted(() => {
  wheelObserver.kill();
  animation.kill();
  Draggable.get(proxy).kill();
  cancelAnimationFrame(animationFrameId);
});

</script>

<template>
  <section class="page" style="overflow: hidden">

    <template v-if="portfolioData">
      <section id="explore-slider">
        <ul class="cards">
          <li class="card" v-for="(portfolioItem, index) in portfolioData">
            <ProjectCover :aria-posinset="index" :aria-setsize="portfolioData.length" :portfolioItem="portfolioItem"
                          :index="index"/>
          </li>
        </ul>
      </section>
    </template>

  </section>
</template>

<style scoped lang="scss">

.page-leave-active {
  transition: all 0.6s;
}

.page-enter-active {
  transition: none;
}

#explore-slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: slider-rotation 24s ease-in-out infinite alternate;

  @media screen and (max-width: 768px) {
    margin-bottom: 100px;
    animation: none;
  }
}

.cards {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  height: 100%;
  gap: 8px;
}

.card {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  left: 0;
}

@keyframes slider-rotation {
  0% {
    transform: rotate3d(0, 0, 1, -3deg);
  }
  100% {
    transform: rotate3d(0, 0, 1, 3deg);
  }
}

</style>
