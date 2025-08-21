<template>
  <section class="page">

    <div class="container-xxxl">

      <div class="row mt-5">
        <div class="col-auto my-center">
          <MWIcon :size="50" />
        </div>
      </div>

      <!-- Hero-->
      <div class="row gx-6 mt-5 mt-lg-6">
        <div class="col-12 col-lg-4">
          <CodeTag class="mb-2 mb-lg-3">{{ currentPortfolioItem['type'] }}</CodeTag>
          <h1 class="mb-5 mb-lg-8 project__name"> {{ currentPortfolioItem['title'] }} </h1>
          <NuxtLink class="back-link mouse-md mb-5 mb-lg-0" to="/explore"><i class="fa-solid fa-arrow-left fa-2x pe-3"></i></NuxtLink>
        </div>
        <div class="col">
          <video class="mouse-md" loop="true" muted autoplay playsinline :poster="currentPortfolioItem['cover']" data-aos="zoom-in-down">
            <source :src="currentPortfolioItem['videoWebm']" type="video/webm">
            <source :src="currentPortfolioItem['videoMP4']" type="video/mp4">
          </video>
        </div>
      </div>

      <div class="row mt-5 mt-lg-8 mt-xl-7 gx-6 gx-xl-8 pb-3">
        <div class="col-12 col-lg-4 order-2 order-lg-1 pt-6 pt-lg-0">
          <aside class="ps-0 ps-lg-6 mb-5 mb-lg-0" style="position: sticky; top: 60px">
            <h3 class="mb-5" data-aos="fade-up">{{ currentPortfolioItem['title'] }}</h3>
            <dl class="mb-5 d-block" data-aos="fade-up">

              <dt v-if="currentPortfolioItem['client']">Client</dt>
              <dd v-if="currentPortfolioItem['client']"> {{ currentPortfolioItem['client']}} </dd>

              <dt class="mt-4" v-if="currentPortfolioItem['partner']">Partner</dt>
              <dd v-if="currentPortfolioItem['partner']"> {{ currentPortfolioItem['partner']}} </dd>

              <dt class="mt-4" v-if="currentPortfolioItem['role']">Role</dt>
              <dd v-if="currentPortfolioItem['role']"> {{ currentPortfolioItem['role']}} </dd>

              <dt class="mt-4" v-if="currentPortfolioItem['completed']">Completed</dt>
              <dd v-if="currentPortfolioItem['completed']"> {{ currentPortfolioItem['completed']}} </dd>

            </dl>
            <ActionButton to="mailto:hello@oscargomez.dev" target="_blank" class="mb-6">
              <i class="fa-sharp fa-light fa-paper-plane"></i>
              Let's chat
            </ActionButton>
          </aside>
        </div>
        <main class="col-12 col-lg-8 order-1 order-lg-2">
          <div class="col-12 col-lg-11 col-xl-10">
            <h1 class="mb-4 mb-lg-5" data-aos="fade-up">{{ currentPortfolioItem['lead'] }}</h1>
          </div>
          <NotionContent :blocks="currentPortfolioItem['pageContent']"/>
          
        </main>
      </div>

    </div>

  </section>
</template>

<script setup>

const route = useRoute();

//DATA MUST BE HARD CODED BECAUSE I AM DEPLOYING THE WEB SERVER WITH GITHUB PAGES(ONLY STATIC)
const portfolioData = [
{
    "title": "How It All Started",
    "listed": true,
    "slug": "background",
    "type": "Background",
    "videoWebm": "",
    "videoMP4": "",
    "cover": "/captures/beginning.webp",
    "client": "Deerfield",
    "clientLogo": null,
    "partner": "White Rhino",
    "completed": 2019,
    "stack": [
      {
        "id": "b0f3b137-8162-42b9-9374-929833891c93",
        "name": "GSAP",
        "color": "pink"
      },
      {
        "id": "945e2733-0557-49d6-91ca-b5924dc95216",
        "name": "HTML5 Canvas",
        "color": "brown"
      },
      {
        "id": "b8723929-bf87-4ce5-9062-5f3bd20e06b4",
        "name": "SCSS",
        "color": "default"
      }
    ],
    "role": null,
    "lead": null,
    "awards": null,
    "pageContent": [
      {
        "object": "block",
        "id": "8ecc0cad-7ca4-4a56-922a-7b5cfc022d85",
        "parent": {
          "type": "page_id",
          "page_id": "77790b2b-f14a-4b62-ac1c-75faa334578f"
        },
        "created_time": "2023-01-10T03:45:00.000Z",
        "last_edited_time": "2023-02-10T20:33:00.000Z",
        "created_by": {
          "object": "user",
          "id": "850b2956-a12b-4dd0-a6bd-d72a0f8cd68f"
        },
        "last_edited_by": {
          "object": "user",
          "id": "850b2956-a12b-4dd0-a6bd-d72a0f8cd68f"
        },
        "has_children": false,
        "archived": false,
        "in_trash": false,
        "type": "paragraph",
        "paragraph": {
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Deerfield is an investment management company with a focus on healthcare - with hundreds of articles on their website for visitors to br. The challenge that presented itself was how visitors would find content, and how to display it to prouser experience had to guide users towards key content, while also keeping it well organized and fluid enough that you could explore in many different ways.",
                "link": null
              },
              "annotations": {
                "bold": false,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Deerfield is an investment management company with a focus on healthcare - with hundreds of articles on their website for visitors to browse and denge that presented itself was how visitors would find content, and how to display it to proThe user experience had to guide users towards key content, while also keeping it well organized and fluid enough that you could explore in many different ways.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
    ]
  },
  {
    "id": "77790b2b-f14a-4b62-ac1c-75faa334578f",
    "title": "The Curiosity Spark",
    "listed": true,
    "slug": "seville",
    "type": "The Beginning",
    "videoWebm": "",
    "videoMP4": "/videos/sevilla_compressed.mp4",
    "cover": "/captures/sevilla_cover.webp",
    "client": null,
    "clientLogo": null,
    "partner": null,
    "completed": 2019,
    "stack": [
      {
        "id": "b0f3b137-8162-42b9-9374-929833891c93",
        "name": "GSAP",
        "color": "pink"
      },
      {
        "id": "945e2733-0557-49d6-91ca-b5924dc95216",
        "name": "HTML5 Canvas",
        "color": "brown"
      },
      {
        "id": "b8723929-bf87-4ce5-9062-5f3bd20e06b4",
        "name": "SCSS",
        "color": "default"
      }
    ],
    "role": "Creative Developer",
    "lead": "Building a dynamic contene with hundreds of creatively animated, interactive dots.",
    "awards": null,
    "pageContent": [
      {
        "object": "block",
        "id": "8ecc0cad-7ca4-4a56-922a-7b5cfc022d85",
        "parent": {
          "type": "page_id",
          "page_id": "77790b2b-f14a-4b62-ac1c-75faa334578f"
        },
        "created_time": "2023-01-10T03:45:00.000Z",
        "last_edited_time": "2023-02-10T20:33:00.000Z",
        "created_by": {
          "object": "user",
          "id": "850b2956-a12b-4dd0-a6bd-d72a0f8cd68f"
        },
        "last_edited_by": {
          "object": "user",
          "id": "850b2956-a12b-4dd0-a6bd-d72a0f8cd68f"
        },
        "has_children": false,
        "archived": false,
        "in_trash": false,
        "type": "paragraph",
        "paragraph": {
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Deerfield is an investment management company with a focus on healthcare - with hundreds of articles on their website for visitors to browsllenge that presented itself was how visitors would find content, and how to display it to promote ery. The user experience had to guide users towards key content, while also keeping it well organized and fluid enough that you could explore in many different ways.",
                "link": null
              },
              "annotations": {
                "bold": false,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Deerfield is an investment management company with a focus on healthcare - with hundreds of articles on their website for visitors to browallenge that presented itself was how visitors would find content, and how to display it to pry. The user experience had to guide users towards key content, while also keeping it well organized and fluid enough that you could explore in many different ways.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
    ]
  },
  {
    "id": "77790b2b-f14a-4b62-ac1c-75faa334578f",
    "title": "Crossing Borders, Expanding Skills",
    "listed": true,
    "slug": "exchange",
    "type": "Exchange Year",
    "videoWebm": "",
    "videoMP4": "",
    "cover": "/captures/reutlingen.webp",
    "client": "Deerfield",
    "clientLogo": null,
    "partner": "White Rhino",
    "completed": 2019,
    "stack": [
      {
        "id": "b0f3b137-8162-42b9-9374-929833891c93",
        "name": "GSAP",
        "color": "pink"
      },
      {
        "id": "945e2733-0557-49d6-91ca-b5924dc95216",
        "name": "HTML5 Canvas",
        "color": "brown"
      },
      {
        "id": "b8723929-bf87-4ce5-9062-5f3bd20e06b4",
        "name": "SCSS",
        "color": "default"
      }
    ],
    "role": "Creative Developer",
    "lead": "Building a dynamic contentovery experience with hundreds of creatively animated, interactive dots.",
    "awards": null,
    "pageContent": [
      {
        "object": "block",
        "id": "8ecc0cad-7ca4-4a56-922a-7b5cfc022d85",
        "parent": {
          "type": "page_id",
          "page_id": "77790b2b-f14a-4b62-ac1c-75faa334578f"
        },
        "created_time": "2023-01-10T03:45:00.000Z",
        "last_edited_time": "2023-02-10T20:33:00.000Z",
        "created_by": {
          "object": "user",
          "id": "850b2956-a12b-4dd0-a6bd-d72a0f8cd68f"
        },
        "last_edited_by": {
          "object": "user",
          "id": "850b2956-a12b-4dd0-a6bd-d72a0f8cd68f"
        },
        "has_children": false,
        "archived": false,
        "in_trash": false,
        "type": "paragraph",
        "paragraph": {
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Deerfield is an investment management company with a focus on healthcare - with hundreds of articles on their website for visitors to brow. The challenge that presented itself was how visitors would find content, and how to display it to promote discovery. The user experience had to guide users towards key content, while also keeping it well organized and fluid enough that you could explore in many different ways.",
                "link": null
              },
              "annotations": {
                "bold": false,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Deerfield is an investment management company with a focus on healthcare - with hundreds of articles on their website for visitors to browse presented itself was how visitors would find content, and how to display it to pro The user experience had to guide users towards key content, while also keeping it well organized and fluid enough that you could explore in many different ways.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
    ]
  },
  {
    "id": "77790b2b-f14a-4b62-ac1c-75faa334578f",
    "title": "Beyond the Classroom",
    "listed": true,
    "slug": "consulting-club",
    "type": "Consulting Club",
    "videoWebm": "",
    "videoMP4": "",
    "cover": "/captures/esb_cover.webp",
    "client": "Deerfield",
    "clientLogo": null,
    "partner": "White Rhino",
    "completed": 2019,
    "stack": [
      {
        "id": "b0f3b137-8162-42b9-9374-929833891c93",
        "name": "GSAP",
        "color": "pink"
      },
      {
        "id": "945e2733-0557-49d6-91ca-b5924dc95216",
        "name": "HTML5 Canvas",
        "color": "brown"
      },
      {
        "id": "b8723929-bf87-4ce5-9062-5f3bd20e06b4",
        "name": "SCSS",
        "color": "default"
      }
    ],
    "role": "Creative Developer",
    "lead": "Building a dynamic contentovery experience with hundreds of creatively animated, interactive dots.",
    "awards": null,
    "pageContent": [
      {
        "object": "block",
        "id": "8ecc0cad-7ca4-4a56-922a-7b5cfc022d85",
        "parent": {
          "type": "page_id",
          "page_id": "77790b2b-f14a-4b62-ac1c-75faa334578f"
        },
        "created_time": "2023-01-10T03:45:00.000Z",
        "last_edited_time": "2023-02-10T20:33:00.000Z",
        "created_by": {
          "object": "user",
          "id": "850b2956-a12b-4dd0-a6bd-d72a0f8cd68f"
        },
        "last_edited_by": {
          "object": "user",
          "id": "850b2956-a12b-4dd0-a6bd-d72a0f8cd68f"
        },
        "has_children": false,
        "archived": false,
        "in_trash": false,
        "type": "paragraph",
        "paragraph": {
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Deerfield is an investment management company with a focus on healthcare - with hundreds of articles on their website for visitors to brow. The challenge that presented itself was how visitors would find content, and how to display it to promote discovery. The user experience had to guide users towards key content, while also keeping it well organized and fluid enough that you could explore in many different ways.",
                "link": null
              },
              "annotations": {
                "bold": false,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Deerfield is an investment management company with a focus on healthcare - with hundreds of articles on their website for visitors to browse presented itself was how visitors would find content, and how to display it to pro The user experience had to guide users towards key content, while also keeping it well organized and fluid enough that you could explore in many different ways.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
    ]
  },
  {
    "id": "77790b2b-f14a-4b62-ac1c-75faa334578f",
    "title": "Turning Curiosity Into Impact",
    "listed": true,
    "slug": "research",
    "type": "Real-World Impact",
    "videoWebm": "",
    "videoMP4": "/videos/research_compressed.mp4",
    "cover": "/captures/research.webp",
    "client": "Deerfield",
    "clientLogo": null,
    "partner": "White Rhino",
    "completed": 2019,
    "stack": [
      {
        "id": "b0f3b137-8162-42b9-9374-929833891c93",
        "name": "GSAP",
        "color": "pink"
      },
      {
        "id": "945e2733-0557-49d6-91ca-b5924dc95216",
        "name": "HTML5 Canvas",
        "color": "brown"
      },
      {
        "id": "b8723929-bf87-4ce5-9062-5f3bd20e06b4",
        "name": "SCSS",
        "color": "default"
      }
    ],
    "role": "Creative Developer",
    "lead": "Building a dynamic contentovery experience with hundreds of creatively animated, interactive dots.",
    "awards": null,
    "pageContent": [
      {
        "object": "block",
        "id": "8ecc0cad-7ca4-4a56-922a-7b5cfc022d85",
        "parent": {
          "type": "page_id",
          "page_id": "77790b2b-f14a-4b62-ac1c-75faa334578f"
        },
        "created_time": "2023-01-10T03:45:00.000Z",
        "last_edited_time": "2023-02-10T20:33:00.000Z",
        "created_by": {
          "object": "user",
          "id": "850b2956-a12b-4dd0-a6bd-d72a0f8cd68f"
        },
        "last_edited_by": {
          "object": "user",
          "id": "850b2956-a12b-4dd0-a6bd-d72a0f8cd68f"
        },
        "has_children": false,
        "archived": false,
        "in_trash": false,
        "type": "paragraph",
        "paragraph": {
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Deerfield is an investment management company with a focus on healthcare - with hundreds of articles on their website for visitors to brow. The challenge that presented itself was how visitors would find content, and how to display it to promote discovery. The user experience had to guide users towards key content, while also keeping it well organized and fluid enough that you could explore in many different ways.",
                "link": null
              },
              "annotations": {
                "bold": false,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Deerfield is an investment management company with a focus on healthcare - with hundreds of articles on their website for visitors to browse presented itself was how visitors would find content, and how to display it to pro The user experience had to guide users towards key content, while also keeping it well organized and fluid enough that you could explore in many different ways.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
    ]
  },
  {
    "id": "77790b2b-f14a-4b62-ac1c-75faa334578f",
    "title": "Where I’m Headed",
    "listed": true,
    "slug": "currently",
    "type": "Current Focus",
    "videoWebm": "",
    "videoMP4": "",
    "cover": "/captures/now.webp",
    "client": "Deerfield",
    "clientLogo": null,
    "partner": "White Rhino",
    "completed": 2019,
    "stack": [
      {
        "id": "b0f3b137-8162-42b9-9374-929833891c93",
        "name": "GSAP",
        "color": "pink"
      },
      {
        "id": "945e2733-0557-49d6-91ca-b5924dc95216",
        "name": "HTML5 Canvas",
        "color": "brown"
      },
      {
        "id": "b8723929-bf87-4ce5-9062-5f3bd20e06b4",
        "name": "SCSS",
        "color": "default"
      }
    ],
    "role": "Creative Developer",
    "lead": "Building a dynamic contentovery experience with hundreds of creatively animated, interactive dots.",
    "awards": null,
    "pageContent": [
      {
        "object": "block",
        "id": "8ecc0cad-7ca4-4a56-922a-7b5cfc022d85",
        "parent": {
          "type": "page_id",
          "page_id": "77790b2b-f14a-4b62-ac1c-75faa334578f"
        },
        "created_time": "2023-01-10T03:45:00.000Z",
        "last_edited_time": "2023-02-10T20:33:00.000Z",
        "created_by": {
          "object": "user",
          "id": "850b2956-a12b-4dd0-a6bd-d72a0f8cd68f"
        },
        "last_edited_by": {
          "object": "user",
          "id": "850b2956-a12b-4dd0-a6bd-d72a0f8cd68f"
        },
        "has_children": false,
        "archived": false,
        "in_trash": false,
        "type": "paragraph",
        "paragraph": {
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Deerfield is an investment management company with a focus on healthcare - with hundreds of articles on their website for visitors to brow. The challenge that presented itself was how visitors would find content, and how to display it to promote discovery. The user experience had to guide users towards key content, while also keeping it well organized and fluid enough that you could explore in many different ways.",
                "link": null
              },
              "annotations": {
                "bold": false,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "Deerfield is an investment management company with a focus on healthcare - with hundreds of articles on their website for visitors to browse presented itself was how visitors would find content, and how to display it to pro The user experience had to guide users towards key content, while also keeping it well organized and fluid enough that you could explore in many different ways.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
    ]
  }
  ]



const currentPortfolioItem = computed(() => {
  return portfolioData[portfolioData.findIndex(project => project["slug"] === route.params["slug"][0])];
});

useHead({
  title: 'Case Study: ' + currentPortfolioItem.value['title'] + ', ' + currentPortfolioItem.value['type'] + ' | ' + 'Marchant Web',
  meta: [
    { hid: 'description', name: 'description', content:  currentPortfolioItem.value['lead'] },
    { hid: 'og:title', property: 'og:title', content: currentPortfolioItem.value['title'] },
    { hid: 'og:url', property: 'og:url', content: 'https://marchantweb.com' + route.fullPath },
    { hid: 'og:description', property: 'og:description', content: currentPortfolioItem.value['lead'] },
    { hid: 'og:image', property: 'og:image', content: currentPortfolioItem.value['cover']},

    // twitter card
    { hid: "twitter:title", name: "twitter:title", content: currentPortfolioItem.value['title'] },
    { hid: "twitter:url", name: "twitter:url", content: 'https://marchantweb.com' + route.fullPath },
    { hid: 'twitter:description', name: 'twitter:description', content: currentPortfolioItem.value['lead'] },
    { hid: "twitter:image", name: "twitter:image", content: currentPortfolioItem.value['cover']},
  ],
  link: [
    { hid: "canonical", rel: "canonical", href: 'https://marchantweb.com' + route.fullPath },
  ],
  bodyAttrs: {
    class: 'enable-scroll'
  }
});

</script>

<style lang="scss" scoped>

h1.project__name {
  color: #F2F2F2;
}
.my-center {
  margin-left: 4vh;
}

video {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  box-shadow: rgba(0,0,0,0.2) 0 60px 15px -40px, rgba(0,0,0,0.06) 0 4px 6px -2px;
  border-radius: 8px;

  @media screen and (max-width: 992px) {
    box-shadow: rgba(0,0,0,0.3) 0 10px 8px -10px, rgba(0,0,0,0.06) 0 4px 6px -2px;
  }
}

</style>
