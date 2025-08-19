<template>
  <section class="page">

    <NavMenu/>

    <div class="container-xxxl">

      <div class="row mt-5">
        <div class="col-auto">
          <MWIcon :size="50" :type="'notext'"/>
        </div>
      </div>

      <div class="row mt-5 mt-lg-8 mt-xl-9 pb-3 justify-content-center">
        <main class="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-6">
          <div class="col">
            <h1 class="mb-3 mb-lg-4 article__title mouse-md"> {{ currentArticleItem['title'] }} </h1>
            <h2 class="article__lead mb-5"> {{ currentArticleItem['lead'] }} </h2>
            <div class="d-flex flex-row align-items-center mb-4">
              <img src="~assets/images/headshot.jpg" alt="Simon Le Marchant" class="article__headshot me-4 mouse-sm">
              <div>
                <label class="article__author" itemprop="name">Simon Le Marchant · <a
                    href="https://twitter.com/marchantweb" target="blank" class="article__followlink mouse-sm">Follow on
                  𝕏</a></label>
                <span class="article__readtime">{{ readTime }} · {{ formattedDate }} </span>
              </div>
            </div>
            <hr class="mb-6">
          </div>
          <NotionContent class="article__content" :isArticle="true" :blocks="currentArticleItem['pageContent']"/>
          <p class="mt-7 mt-xxl-8 mt-xxxl-9 text-small text-end copyright d-none d-lg-block">Copyright ©
            {{ new Date().getFullYear() }} Marchant Web, LLC. All rights reserved.</p>
        </main>
      </div>

    </div>

  </section>
</template>

<script setup>
import sugar from 'sugar';

sugar.extend();

const route = useRoute();
const articleData = [
{
    "id": "b080de32-34fc-4aa1-b53e-58fb4b695caa",
    "createdAt": "2023-12-26T22:33:00.000Z",
    "title": "The simplicity of using Vue’s reactivity system outside of Vue",
    "listed": true,
    "slug": "the-simplicity-of-using-vue's-reactivity-system-outside-of-vue",
    "lead": "tldr; Vue’s reactivity can be imported and used in JS outside of a Vue app, like in Node directly.",
    "pageContent": [
      {
        "object": "block",
        "id": "f53c08bd-6a71-48d5-bc45-4db4832d38c8",
        "parent": {
          "type": "page_id",
          "page_id": "b080de32-34fc-4aa1-b53e-58fb4b695caa"
        },
        "created_time": "2023-12-26T17:54:00.000Z",
        "last_edited_time": "2023-12-26T17:54:00.000Z",
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
        "type": "image",
        "image": {
          "caption": [],
          "type": "file",
          "file": {
            "url": "https://prod-files-secure.s3.us-west-2.amazonaws.com/ba27abef-4bbc-4834-b02a-65197fa7427a/0e6306c0-7e10-4c7b-b77a-40b40ef44c5c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDL237S2%2F20250819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250819T122748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC2UY02UIVjwiPty%2BgLIZPOUgACffaN5DJ4Lo%2Fol1YnEgIgdyfSbThm%2BI5y5%2Frc7I0ZQyinneJUAaiuSPBaYD8ljvoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FsnuPiAESlczJ1DCrcA46yusbnFL%2Bq13axVBXIY5a2ndSsdMdBj5r4KJtRwnJoMZZCJTa7%2BDyFJpfTCEf58yq7hUQbavXiqc5scVmo%2F9RAOV0%2FOQq%2B2VQRw1kjlzeb9SOoJ6RRusFdG78FcM7nA5xu%2FVNTPOVrZVpubpzciA9j1mfn%2B7AiwQKQvGblcS8m4DhRYtPvLityp5P2hFSdCBxqVupsPoVM5SkXLPQdGQiFT2c%2FROpxGzkdiCHUkt9iNajRutTivjfG9FwI0V39Fcw4BzJHKSjicc1Zg0AaGK2VKakanK8IJthOKBeHSCtGjpgo7yi8CeqN4NhrOXGKhypZDsCleEVGBy%2Ft8gli3gv1npXSIjNKwqK8hBP7NjOaN0NoKnNz5Z2NVczbF%2FDIZ2rmk52vuxehIkgF%2FP%2BZrlpDUFRf79z%2Bu8KA5CtQkttGwvxb2R5iGDkTWrdwvVAYWeF9GPVQRIfddZJ8RgN0ZtxGqtVIcGiLlo4BuD1QRgv%2Fji%2BJ0FaqP8xxnEZ9HvbZ2vFscgKBM7dWgFspoBcF2KAsD1Nblwnor0ZB7e7A1IdD7mZVdxI21R1hsJxBWfFDxZYenCDCxFchRh4keNXArc6ZR1F3A6f07%2FYIh0otUqdB7gWryxWtiTHBqLeiMNHAkcUGOqUBbmG8WwAaY%2B6FLgFCTatFCWXxE8xqkmXDVR9ZbjJEGyQuFbrQMx2w%2FkyiQ2vd04GlZBxDxMVZCsxJLnta%2B%2F5i%2BPVLPQfLGLRvPcwNOexKTBZxxDzPZ%2Fz8G30b103vVWNY6l2YFyhldJWcxk5KOnQ2pgop7CqzyImbrDfIZh4Ilovsy0LFm0f9i0tkOD9bgCHn0RBuIV46ixJa90cjsS7sXzLZ9EbD&X-Amz-Signature=35348d6c45a2e53047ff6ea42abd1bdfc29c2644832ac08f8d04bdd8abc2d146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
            "expiry_time": "2025-08-19T13:27:48.100Z"
          }
        }
      },
      {
        "object": "block",
        "id": "3939eb2d-5f6e-4075-b881-7261186d64a4",
        "parent": {
          "type": "page_id",
          "page_id": "b080de32-34fc-4aa1-b53e-58fb4b695caa"
        },
        "created_time": "2023-12-26T16:52:00.000Z",
        "last_edited_time": "2023-12-26T22:11:00.000Z",
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
                "content": "Vue is described as “",
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
              "plain_text": "Vue is described as “",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "incrementally adoptable",
                "link": null
              },
              "annotations": {
                "bold": false,
                "italic": true,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "incrementally adoptable",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "”, which is what drew me to it years ago. In now-ancient projects ",
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
              "plain_text": "”, which is what drew me to it years ago. In now-ancient projects ",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "(let’s say 5 or 6 years ago)",
                "link": null
              },
              "annotations": {
                "bold": false,
                "italic": true,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "(let’s say 5 or 6 years ago)",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": ", I incorporated Vue 2 by just dropping a CDN script tag in my HTML, and then copy/pasting a boilerplate block of code to mount to ",
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
              "plain_text": ", I incorporated Vue 2 by just dropping a CDN script tag in my HTML, and then copy/pasting a boilerplate block of code to mount to ",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "#app",
                "link": null
              },
              "annotations": {
                "bold": false,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": true,
                "color": "default"
              },
              "plain_text": "#app",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": ". In a few lines of code, I had reactivity. To be able to do this is what made Vue a library in my head canon. It wasn’t opinionated, outside of using the Options API structure.",
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
              "plain_text": ". In a few lines of code, I had reactivity. To be able to do this is what made Vue a library in my head canon. It wasn’t opinionated, outside of using the Options API structure.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
      {
        "object": "block",
        "id": "b9bb06c8-c84c-4e2f-9927-e9b647abf91f",
        "parent": {
          "type": "page_id",
          "page_id": "b080de32-34fc-4aa1-b53e-58fb4b695caa"
        },
        "created_time": "2023-12-26T22:10:00.000Z",
        "last_edited_time": "2023-12-26T22:12:00.000Z",
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
                "content": "Nowadays, things are a little different, but the mindset of keeping Vue incrementally adopted has remained. Vue 3 and the Composition API not only makes massive strides forward for Vue apps, but actually allows us to cherry-pick out the reactivity features of Vue and use them in other places. The Vue core library actually has a package explicitly for this, ",
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
              "plain_text": "Nowadays, things are a little different, but the mindset of keeping Vue incrementally adopted has remained. Vue 3 and the Composition API not only makes massive strides forward for Vue apps, but actually allows us to cherry-pick out the reactivity features of Vue and use them in other places. The Vue core library actually has a package explicitly for this, ",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "@vue/reactivity",
                "link": null
              },
              "annotations": {
                "bold": false,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": true,
                "color": "default"
              },
              "plain_text": "@vue/reactivity",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": ". Or if you want even more, you can just bring in the full ",
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
              "plain_text": ". Or if you want even more, you can just bring in the full ",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "vue@latest",
                "link": null
              },
              "annotations": {
                "bold": false,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": true,
                "color": "default"
              },
              "plain_text": "vue@latest",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": ".",
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
              "plain_text": ".",
              "href": null
            }
          ],
          "color": "default"
        }
      },
      {
        "object": "block",
        "id": "0b87e271-9067-482f-9b43-a8f9382c3270",
        "parent": {
          "type": "page_id",
          "page_id": "b080de32-34fc-4aa1-b53e-58fb4b695caa"
        },
        "created_time": "2023-12-26T16:57:00.000Z",
        "last_edited_time": "2023-12-26T21:08:00.000Z",
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
        "type": "heading_2",
        "heading_2": {
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "A simple example: using Vue reactivity in Node",
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
              "plain_text": "A simple example: using Vue reactivity in Node",
              "href": null
            }
          ],
          "is_toggleable": false,
          "color": "default"
        }
      },
      {
        "object": "block",
        "id": "d6c82c3f-5d2c-415e-bf5f-5fc4d5a9da95",
        "parent": {
          "type": "page_id",
          "page_id": "b080de32-34fc-4aa1-b53e-58fb4b695caa"
        },
        "created_time": "2023-12-26T16:57:00.000Z",
        "last_edited_time": "2023-12-26T22:13:00.000Z",
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
                "content": "Let's jump in with a simple yet effective example, using reactivity in a plain Node script.",
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
              "plain_text": "Let's jump in with a simple yet effective example, using reactivity in a plain Node script.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
      {
        "object": "block",
        "id": "63604765-9309-49e9-8d7b-1bb8fba7818f",
        "parent": {
          "type": "page_id",
          "page_id": "b080de32-34fc-4aa1-b53e-58fb4b695caa"
        },
        "created_time": "2023-12-26T16:57:00.000Z",
        "last_edited_time": "2023-12-26T20:39:00.000Z",
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
        "type": "code",
        "code": {
          "caption": [],
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "// node entry.js\n\nconst { ref, computed, watchEffect } = require('vue'); // CommonJS require\n\nconst number = ref(0);\n\nwatchEffect(() =\u003E {\n    console.log(number.value);\n});\n\nsetInterval(() =\u003E {\n    number.value += 1;\n}, 1000);\n\n// Prints\n// 1\n// 2\n// 3\n// etc...",
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
              "plain_text": "// node entry.js\n\nconst { ref, computed, watchEffect } = require('vue'); // CommonJS require\n\nconst number = ref(0);\n\nwatchEffect(() =\u003E {\n    console.log(number.value);\n});\n\nsetInterval(() =\u003E {\n    number.value += 1;\n}, 1000);\n\n// Prints\n// 1\n// 2\n// 3\n// etc...",
              "href": null
            }
          ],
          "language": "javascript"
        }
      },
      {
        "object": "block",
        "id": "b9a81123-3983-4439-ad17-f77f89070e56",
        "parent": {
          "type": "page_id",
          "page_id": "b080de32-34fc-4aa1-b53e-58fb4b695caa"
        },
        "created_time": "2023-12-26T16:57:00.000Z",
        "last_edited_time": "2023-12-26T22:08:00.000Z",
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
                "content": "This isn’t novel, in fact it’s absurdly obvious if you spend even a moment thinking about it - but up until now, I never had a reason to; and I’d argue most haven’t either.",
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
              "plain_text": "This isn’t novel, in fact it’s absurdly obvious if you spend even a moment thinking about it - but up until now, I never had a reason to; and I’d argue most haven’t either.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
      {
        "object": "block",
        "id": "6f16afa4-3356-4feb-8bac-a4b32423929d",
        "parent": {
          "type": "page_id",
          "page_id": "b080de32-34fc-4aa1-b53e-58fb4b695caa"
        },
        "created_time": "2023-12-26T22:13:00.000Z",
        "last_edited_time": "2023-12-26T22:14:00.000Z",
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
                "content": "Hell at first glance you’d think you were looking at a ",
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
              "plain_text": "Hell at first glance you’d think you were looking at a ",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "\u003Cscript setup\u003E",
                "link": null
              },
              "annotations": {
                "bold": false,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": true,
                "color": "default"
              },
              "plain_text": "\u003Cscript setup\u003E",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " tag, but nope, this is just a top-level JavaScript file, being ran by Node ",
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
              "plain_text": " tag, but nope, this is just a top-level JavaScript file, being ran by Node ",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "(or Bun/Deno if you’re inclined to use those)",
                "link": null
              },
              "annotations": {
                "bold": false,
                "italic": true,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "(or Bun/Deno if you’re inclined to use those)",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": ".",
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
              "plain_text": ".",
              "href": null
            }
          ],
          "color": "default"
        }
      },
      {
        "object": "block",
        "id": "14efb7d7-bac3-467e-b921-ec953ba37919",
        "parent": {
          "type": "page_id",
          "page_id": "b080de32-34fc-4aa1-b53e-58fb4b695caa"
        },
        "created_time": "2023-12-26T17:03:00.000Z",
        "last_edited_time": "2023-12-26T17:10:00.000Z",
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
        "type": "heading_2",
        "heading_2": {
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "Thinking outside of the box",
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
              "plain_text": "Thinking outside of the box",
              "href": null
            }
          ],
          "is_toggleable": false,
          "color": "default"
        }
      },
      {
        "object": "block",
        "id": "4b860303-1019-44ea-aba0-160e2f45b8be",
        "parent": {
          "type": "page_id",
          "page_id": "b080de32-34fc-4aa1-b53e-58fb4b695caa"
        },
        "created_time": "2023-12-26T17:05:00.000Z",
        "last_edited_time": "2023-12-26T22:20:00.000Z",
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
                "content": "With this example in mind, we can quickly get creative. Take, for example, a Raspberry Pi. This little device is capable of running JavaScript through a Node.js environment, and thus can benefit from Vue's reactivity.",
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
              "plain_text": "With this example in mind, we can quickly get creative. Take, for example, a Raspberry Pi. This little device is capable of running JavaScript through a Node.js environment, and thus can benefit from Vue's reactivity.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
      {
        "object": "block",
        "id": "c5b4ee61-79fc-477a-9a16-5a4fbed10d65",
        "parent": {
          "type": "page_id",
          "page_id": "b080de32-34fc-4aa1-b53e-58fb4b695caa"
        },
        "created_time": "2023-12-26T22:20:00.000Z",
        "last_edited_time": "2023-12-26T22:20:00.000Z",
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
                "content": "Picture a home automation system where reactive data handles sensor input changes, turning lights on or off, or even managing a garden's watering schedule — all with reactivity powered by Vue.",
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
              "plain_text": "Picture a home automation system where reactive data handles sensor input changes, turning lights on or off, or even managing a garden's watering schedule — all with reactivity powered by Vue.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
      {
        "object": "block",
        "id": "601531ba-f04a-47fd-ac6e-8b2b36544a5d",
        "parent": {
          "type": "page_id",
          "page_id": "b080de32-34fc-4aa1-b53e-58fb4b695caa"
        },
        "created_time": "2023-12-26T22:17:00.000Z",
        "last_edited_time": "2023-12-26T22:20:00.000Z",
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
        "type": "code",
        "code": {
          "caption": [],
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "const { ref, watch } = require('vue');\n\n// Reactive state\nconst temperature = ref(75); // in degrees (F)\nconst soilMoisture = ref(30); // in percentage\nconst lightsOn = ref(false);\nconst isWatering = ref(false);\n\n// Simulate sensor data change\nsetTimeout(() =\u003E {\n    temperature.value = 22; // Temperature rises\n    soilMoisture.value = 15; // Soil moisture drops\n}, 3000);\n\n// Turn the lights on if the temperature is too high\nwatch(temperature, (newTemp) =\u003E {\n    lightsOn.value = newTemp \u003E 78;\n});\n\n// Water the plant if the soil is too dry\nwatch(soilMoisture, (newMoisture) =\u003E {\n    isWatering.value = newMoisture \u003C 20;\n});",
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
              "plain_text": "const { ref, watch } = require('vue');\n\n// Reactive state\nconst temperature = ref(75); // in degrees (F)\nconst soilMoisture = ref(30); // in percentage\nconst lightsOn = ref(false);\nconst isWatering = ref(false);\n\n// Simulate sensor data change\nsetTimeout(() =\u003E {\n    temperature.value = 22; // Temperature rises\n    soilMoisture.value = 15; // Soil moisture drops\n}, 3000);\n\n// Turn the lights on if the temperature is too high\nwatch(temperature, (newTemp) =\u003E {\n    lightsOn.value = newTemp \u003E 78;\n});\n\n// Water the plant if the soil is too dry\nwatch(soilMoisture, (newMoisture) =\u003E {\n    isWatering.value = newMoisture \u003C 20;\n});",
              "href": null
            }
          ],
          "language": "javascript"
        }
      },
      {
        "object": "block",
        "id": "26f8d378-c917-4f12-bef7-e1f72d114be9",
        "parent": {
          "type": "page_id",
          "page_id": "b080de32-34fc-4aa1-b53e-58fb4b695caa"
        },
        "created_time": "2023-12-26T22:20:00.000Z",
        "last_edited_time": "2023-12-26T22:25:00.000Z",
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
                "content": "This straightforward example keeps things local to Node, but you can easily see how you might use a serial port or another communication method to interact with IOT devices based on actions triggered by Vue’s reactivity. Some other examples that pop to mind include data synchronization and workflow automation - anywhere where you can run JS and may not need a full UI framework.",
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
              "plain_text": "This straightforward example keeps things local to Node, but you can easily see how you might use a serial port or another communication method to interact with IOT devices based on actions triggered by Vue’s reactivity. Some other examples that pop to mind include data synchronization and workflow automation - anywhere where you can run JS and may not need a full UI framework.",
              "href": null
            }
          ],
          "color": "default"
        }
      }
    ]
  },
  {
    "id": "121ecc21-6843-42f1-acea-f1de989d6dfe",
    "createdAt": "2024-01-03T17:55:00.000Z",
    "title": "Persisting Vue composables in Pinia stores",
    "listed": false,
    "slug": "persisting-vue-composables-in-pinia-stores",
    "lead": "tldr; a known limitation of Pinia is that non-primitives are not able to be persisted, but we won’t take “no” for an answer.",
    "pageContent": [
      {
        "object": "block",
        "id": "3851c004-ab2e-41f1-bb08-b73688be0a4a",
        "parent": {
          "type": "page_id",
          "page_id": "121ecc21-6843-42f1-acea-f1de989d6dfe"
        },
        "created_time": "2024-01-03T17:55:00.000Z",
        "last_edited_time": "2024-01-03T17:55:00.000Z",
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
        "type": "image",
        "image": {
          "caption": [],
          "type": "file",
          "file": {
            "url": "https://prod-files-secure.s3.us-west-2.amazonaws.com/ba27abef-4bbc-4834-b02a-65197fa7427a/1744439a-e44b-4ea6-882b-99203088085a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJVXR5NS%2F20250819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250819T122748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCr7UzDzhRkNKc2F54Ht4P%2BNg2a7sb9jKMVka%2FNHSz8XAIhANhyHUagWgwDIwSDwNboeYqXUalAs4WbBAjBZMIMlQJgKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytHeIvBj2Tv5N8owAq3AN1FQdG7p6CZ4p32Q0%2FaMJpbJMtuiNAFBzAGC27d77gbSeUZWZw4dBzcEnuVsTYl6ckGCS42iysvkyHEuKdEjBA7TnP%2FZ4hq3ENfY4PqipV%2F6DVVEifkYWqAPJ0F9Vh7arL4jQvv5FnY014%2FWjZdd9meJv4nvdw%2FRsGWgb6gC%2BAOeKhX%2BTTfvls8RYn%2FlfQP%2FrzRZuucNACZpTQaY2YHJ55NGab5OdbNWgPh%2BY1zvS4I9rVjsI1MV7tR8p8mv99bb2U2GXIOXGoQUBiVpRKZIcGCvmdVpE5G7d3QoLxn%2FpsLWOBca9Sw4c2MS%2FlqcDIqBE19GCG8Rbwa154mzKLqrEe9NVCmNQBPrTR6%2BkN37GNY6jncxoxsYuhdkju9%2BIivYXFeMXxyOeeiMX07134XlFOX8%2Bhai4uXfWI8%2BG6va9pwBLv3PZdK%2BEv7cnTaa74w%2F%2F%2BMV6zf%2Fd7XSf%2F9Qqt%2BweId35dx07idURDVVQmH26nzjwXP%2BcYKpwCRoWSBow4xKmAB6Y9QgGgkkOvNqwcegeJv25xQa5ZVKY1JQpVbSalcJnHiSNTsfM9QthvDkOEafp9D8tstdPGLDvkG2eRyG8p0nKa7wHhh6u%2BswMQPx7SxTLF%2BK9vSsAhMlHp3DDRwJHFBjqkAXSXkaenI4NzqgC%2FfAu171sB6JmGEkHfrgMpWZa0Gcs8Cf6R98kVBQH%2Bsvdqh92CGgyZ%2FF6FFUsRWaef5YiDaB%2F3U%2BAeDbgFHr7ARUE5Kjdp6hPRWgk03ktbsQtRpjLoUYQIqdDaR5O2Cb177ygi2p71esTFmRdFOuXRSJ0dHOcs1CusnQgfnuc6aHpdP9LXclCZAdKZCRqXdkyBYMiahVPSLmzw&X-Amz-Signature=9164349f1465f71032a06b597836bb05cd45a1e832e761fad3aeaad463618cdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
            "expiry_time": "2025-08-19T13:27:48.538Z"
          }
        }
      },
      {
        "object": "block",
        "id": "e2817e09-3901-44e6-9fd7-666a63c93542",
        "parent": {
          "type": "page_id",
          "page_id": "121ecc21-6843-42f1-acea-f1de989d6dfe"
        },
        "created_time": "2024-01-03T17:55:00.000Z",
        "last_edited_time": "2024-01-03T17:55:00.000Z",
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
          "rich_text": [],
          "color": "default"
        }
      }
    ]
  }
  ];

const currentArticleItem = computed(() => {
  return articleData.value[articleData.value.findIndex(article => article["slug"] === route.params["slug"][0])];
});

/**
 * Calculates the read time of the current article
 * @type {ComputedRef<string>}
 */
const readTime = computed(() => {
  let totalTextLength = 0;
  currentArticleItem.value['pageContent'].forEach((block) => {
    if ((block.type === 'paragraph' || block.type === 'code') && block[block.type]["rich_text"].length) {
      block[block.type]["rich_text"].forEach((textBlock) => {
        totalTextLength += textBlock["plain_text"].trim().split(/\s+/).length;
      });
    }
  });
  const readTimeMinutes = Math.ceil(totalTextLength / 100);
  return `${readTimeMinutes} min read`;
});

/**
 * Find the cover image of the article, or use the default.
 * @type {ComputedRef<string>}
 */
const coverImage = computed(() => {
  let coverImage = 'https://marchantweb.com/cover.jpg';
  for (let block of currentArticleItem.value['pageContent']) {
    if (block.type === 'image') {
      coverImage = 'https://marchantweb.com/cdn-cgi/image/width=1974,quality=100,format=auto/https://api.marchantweb.com/images/' + encodeURI(block['id']);
      break;
    }
  }
  return coverImage;
});

/**
 * Shows the article's date, formatted based on how long ago it was published.
 * Within 10 days is relative, 30 days is medium, and anything older is just the year (if the same year).
 * Can also return an empty string if the date is too old, to avoid it appearing stale.
 * @type {ComputedRef<string|string>}
 */
const formattedDate = computed(() => {
  const date = new Date(currentArticleItem.value['createdAt']);
  if (date.isAfter(Date.create("10 days ago"))) {
    return date.relative();
  } else if (date.isAfter(Date.create("30 days ago"))) {
    return date.medium();
  } else if (date.getFullYear() === new Date().getFullYear()) {
    return date.format('{yyyy}');
  } else {
    return '';
  }
});


useHead({
  title: currentArticleItem.value['title'],
  meta: [
    {hid: 'description', name: 'description', content: currentArticleItem.value['lead']},
    {hid: 'og:title', property: 'og:title', content: currentArticleItem.value['title']},
    {hid: 'og:url', property: 'og:url', content: 'https://marchantweb.com' + route.fullPath},
    {hid: 'og:description', property: 'og:description', content: currentArticleItem.value['lead']},
    {hid: 'og:image', property: 'og:image', content: coverImage.value},

    // twitter card
    {hid: "twitter:title", name: "twitter:title", content: currentArticleItem.value['title']},
    {hid: "twitter:url", name: "twitter:url", content: 'https://marchantweb.com' + route.fullPath},
    {hid: 'twitter:description', name: 'twitter:description', content: currentArticleItem.value['lead']},
    {hid: "twitter:image", name: "twitter:image", content: coverImage.value},
  ],
  link: [
    {hid: "canonical", rel: "canonical", href: 'https://marchantweb.com' + route.fullPath},
  ],
  bodyAttrs: {
    class: 'enable-scroll'
  }
});

useSchemaOrg([
  {
    '@type': 'Article',
    'headline': currentArticleItem.value['title'],
    'description': currentArticleItem.value['lead'],
    'image': coverImage.value,
    'author': {
      'name': 'Simon Le Marchant',
      'url': 'https://marchantweb.com'
    },
  }
])

</script>

<style lang="scss" scoped>

.article__lead {
  color: #6e829c;
  font-weight: 500;
}

.article__readtime {
  color: #6e829c;
  font-weight: 400;
  display: block;
  font-size: 14px;
}

.article__followlink {
  color: #7A4FEE;
}

.article__author {
  font-weight: 600;
  margin-bottom: 0;
}

.article__headshot {
  width: 65px;
  border-radius: 50%;
}

.copyright {
  opacity: 0.5;
  font-size: 12px;
  border-top: 1px solid #CCC;
  max-width: 500px;
  padding-top: 20px;
  padding-left: 40px;
  float: right;
}

</style>
