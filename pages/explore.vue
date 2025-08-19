<script setup>

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Draggable} from "gsap/Draggable";
import {InertiaPlugin} from "gsap/InertiaPlugin";
import {Observer} from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin, Observer);

const portfolioData = [
{
    "id": "77790b2b-f14a-4b62-ac1c-75faa334578f",
    "title": "Advancing Healthcare",
    "listed": true,
    "slug": "advancing-healthcare",
    "type": "Interactive Visualization",
    "videoWebm": "https://api.marchantweb.com/videos/Deerfield.webm",
    "videoMP4": "https://api.marchantweb.com/videos/Deerfield.mp4",
    "cover": "https://api.marchantweb.com/videos/Deerfield.jpg",
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
    "lead": "Building a dynamic content discovery experience with hundreds of creatively animated, interactive dots.",
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
                "content": "Deerfield is an investment management company with a focus on healthcare - with hundreds of articles on their website for visitors to browse and discover. The challenge that presented itself was how visitors would find content, and how to display it to promote discovery. The user experience had to guide users towards key content, while also keeping it well organized and fluid enough that you could explore in many different ways.",
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
              "plain_text": "Deerfield is an investment management company with a focus on healthcare - with hundreds of articles on their website for visitors to browse and discover. The challenge that presented itself was how visitors would find content, and how to display it to promote discovery. The user experience had to guide users towards key content, while also keeping it well organized and fluid enough that you could explore in many different ways.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
      {
        "object": "block",
        "id": "ff07f19b-31ca-4a9e-b1fb-bf90b227254e",
        "parent": {
          "type": "page_id",
          "page_id": "77790b2b-f14a-4b62-ac1c-75faa334578f"
        },
        "created_time": "2023-02-09T23:18:00.000Z",
        "last_edited_time": "2023-02-10T20:41:00.000Z",
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
                "content": "This project entailed taking an agency's design files and working alongside them to develop a reactive component that was visually interesting, while also performing well across a multitude of device capabilities.",
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
              "plain_text": "This project entailed taking an agency's design files and working alongside them to develop a reactive component that was visually interesting, while also performing well across a multitude of device capabilities.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
      {
        "object": "block",
        "id": "ec70d8e3-74f5-4ab9-a302-17c35129b1e2",
        "parent": {
          "type": "page_id",
          "page_id": "77790b2b-f14a-4b62-ac1c-75faa334578f"
        },
        "created_time": "2023-02-09T23:18:00.000Z",
        "last_edited_time": "2024-09-27T12:40:00.000Z",
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
            "url": "https://prod-files-secure.s3.us-west-2.amazonaws.com/ba27abef-4bbc-4834-b02a-65197fa7427a/6e4f6afe-d698-48b3-af3a-495b8d00a25a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WWN6XS7%2F20250819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250819T122747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFgR8fcMZr1V9cdEwCVTrIsbry7NVHHYhX5GgpayY9f%2FAiEA4Pw4AK%2BhHgduIlTJRo%2Fm3Qfd0so3WAH9vzeoGCMGzyoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN912xv2c2hPWx4bOyrcAw90oLcd%2B6j%2FdbJVwuZrbPlPcI%2BVdDITv0pqc8oQ3kdCK8Lju9v4JdnP6siJ%2B2Rb%2FHpWL7uSCrE2kvRnScUvVTCLORwSf5wk%2BM%2FGURjItUdMK0jzpM80MGe99aDPEJPxZ9NYi62csnLevn81zdsIqEG9EnPC59BzJzmWEqHBqDcti4oJGrGFAjVqBhwKLSJ7F3OIV3OVS5rE3Qd8uL%2FS5Uh6BNYyHFjKcvNfxXG%2Boiv5eLuFpzknkchPNAITOje8skJ8vVBQ0jm8st18XHO2ZMWF9p93v7JUzHN5%2BMnHb6w%2BIgQ399kc%2BLO9gdoi8fmRvNxbWLQ6M0UVr4lmwhN9MnzK6JNgyCQWo5Na0Q0fK8zxJll7EOknqDKLcSA185uxXIknBg%2FrNRF5mmbSlKnHipmy%2B0DbNJD6O2Ie%2B8PVE5fCKuus1jWBh1pJjPXaeq4zEyq0nO876fq7MFfTM1W04IrNHbCPnBQf6Xo2%2Fx3eEnaDrXe%2BlcizPZcseUxyQHmkESSrxnJ187XNJRAbs15hRaD54Z0Yu%2Fuetd5CJKIe%2Br%2B%2FQLgS9IV%2B3t%2FfQeq6Dgh5hmeIWAaysOF4AbxGy3vqhcL8SkbqReHWrkpL3E3t2NWULjnZg36hjSAdjW7EMIrAkcUGOqUBfLGWg5CkvpXXZGeA7Sejho9j%2BA4E5ZDi93t4OyL53PpCezt9QIEWIzPzZ6kFQJJakm0sdIj%2FIA83MaXBQGtLHGPngK5ntmDqQDQBBg%2FL6G7RsKsgBp6r%2Bvd0tV%2Bqj9aqb3etKREzxHevqPbAFF6fV1phZW0emlHHS7Fan7N%2BfR9yqJao2F9EgFabIuzOVmctvzYB5rtCJan3Vmnp5Vet6rQzGQuF&X-Amz-Signature=384fdb7d41935810c39f9f02a0d5ab5bdcca0671bab4abee24562a7ddc04f915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
            "expiry_time": "2025-08-19T13:27:46.963Z"
          }
        }
      },
      {
        "object": "block",
        "id": "6d8b35c2-c381-403b-81ee-0ff1ac0ecf02",
        "parent": {
          "type": "page_id",
          "page_id": "77790b2b-f14a-4b62-ac1c-75faa334578f"
        },
        "created_time": "2023-02-10T20:34:00.000Z",
        "last_edited_time": "2023-02-10T20:41:00.000Z",
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
                "content": "As you’d expect, a bunch of math went into place to calculate where each dot would land, and how they animate across the screen. HTML5 canvas was used to render the layer, with hit tests that trigger modal pop-ups surfacing more details on each content item.",
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
              "plain_text": "As you’d expect, a bunch of math went into place to calculate where each dot would land, and how they animate across the screen. HTML5 canvas was used to render the layer, with hit tests that trigger modal pop-ups surfacing more details on each content item.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
      {
        "object": "block",
        "id": "78c1c949-9354-44aa-8838-bf5cbcd39f89",
        "parent": {
          "type": "page_id",
          "page_id": "77790b2b-f14a-4b62-ac1c-75faa334578f"
        },
        "created_time": "2023-02-10T20:28:00.000Z",
        "last_edited_time": "2023-02-10T20:37:00.000Z",
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
                "content": "Content was drawn to the screen in concentric rings, with each dot representing a single content item. These items were color-coded into one of three categories, and their distance to the center of the diagram ",
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
              "plain_text": "Content was drawn to the screen in concentric rings, with each dot representing a single content item. These items were color-coded into one of three categories, and their distance to the center of the diagram ",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "(and the brightness of the hotspot)",
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
              "plain_text": "(and the brightness of the hotspot)",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": " was determine based on the content’s relevance.",
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
              "plain_text": " was determine based on the content’s relevance.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
      {
        "object": "block",
        "id": "b5e6cb51-a766-4fc0-8b40-71a09f92395a",
        "parent": {
          "type": "page_id",
          "page_id": "77790b2b-f14a-4b62-ac1c-75faa334578f"
        },
        "created_time": "2023-02-09T23:18:00.000Z",
        "last_edited_time": "2024-09-27T12:40:00.000Z",
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
          "caption": [
            {
              "type": "text",
              "text": {
                "content": "When a search term is entered, content animates into a new concentric circle.",
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
              "plain_text": "When a search term is entered, content animates into a new concentric circle.",
              "href": null
            }
          ],
          "type": "file",
          "file": {
            "url": "https://prod-files-secure.s3.us-west-2.amazonaws.com/ba27abef-4bbc-4834-b02a-65197fa7427a/cb72aeec-eeea-4615-8292-10dcb93eb097/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WWN6XS7%2F20250819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250819T122746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFgR8fcMZr1V9cdEwCVTrIsbry7NVHHYhX5GgpayY9f%2FAiEA4Pw4AK%2BhHgduIlTJRo%2Fm3Qfd0so3WAH9vzeoGCMGzyoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN912xv2c2hPWx4bOyrcAw90oLcd%2B6j%2FdbJVwuZrbPlPcI%2BVdDITv0pqc8oQ3kdCK8Lju9v4JdnP6siJ%2B2Rb%2FHpWL7uSCrE2kvRnScUvVTCLORwSf5wk%2BM%2FGURjItUdMK0jzpM80MGe99aDPEJPxZ9NYi62csnLevn81zdsIqEG9EnPC59BzJzmWEqHBqDcti4oJGrGFAjVqBhwKLSJ7F3OIV3OVS5rE3Qd8uL%2FS5Uh6BNYyHFjKcvNfxXG%2Boiv5eLuFpzknkchPNAITOje8skJ8vVBQ0jm8st18XHO2ZMWF9p93v7JUzHN5%2BMnHb6w%2BIgQ399kc%2BLO9gdoi8fmRvNxbWLQ6M0UVr4lmwhN9MnzK6JNgyCQWo5Na0Q0fK8zxJll7EOknqDKLcSA185uxXIknBg%2FrNRF5mmbSlKnHipmy%2B0DbNJD6O2Ie%2B8PVE5fCKuus1jWBh1pJjPXaeq4zEyq0nO876fq7MFfTM1W04IrNHbCPnBQf6Xo2%2Fx3eEnaDrXe%2BlcizPZcseUxyQHmkESSrxnJ187XNJRAbs15hRaD54Z0Yu%2Fuetd5CJKIe%2Br%2B%2FQLgS9IV%2B3t%2FfQeq6Dgh5hmeIWAaysOF4AbxGy3vqhcL8SkbqReHWrkpL3E3t2NWULjnZg36hjSAdjW7EMIrAkcUGOqUBfLGWg5CkvpXXZGeA7Sejho9j%2BA4E5ZDi93t4OyL53PpCezt9QIEWIzPzZ6kFQJJakm0sdIj%2FIA83MaXBQGtLHGPngK5ntmDqQDQBBg%2FL6G7RsKsgBp6r%2Bvd0tV%2Bqj9aqb3etKREzxHevqPbAFF6fV1phZW0emlHHS7Fan7N%2BfR9yqJao2F9EgFabIuzOVmctvzYB5rtCJan3Vmnp5Vet6rQzGQuF&X-Amz-Signature=dc97a6e61089db18ecc8504a8b6598064d673062c7488cac053e24caf424978e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
            "expiry_time": "2025-08-19T13:27:46.874Z"
          }
        }
      },
      {
        "object": "block",
        "id": "f2069529-10fe-4306-94fa-602a520a0ff6",
        "parent": {
          "type": "page_id",
          "page_id": "77790b2b-f14a-4b62-ac1c-75faa334578f"
        },
        "created_time": "2023-02-10T20:37:00.000Z",
        "last_edited_time": "2023-02-10T20:38:00.000Z",
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
                "content": "This functionality was extended into the search feature. When a user enters a search term, or clicks on one of the three main categories of content, the network will re-arrange and filter itself to show the most appropriate content front-and-center. Search itself was implemented using SwiftType.",
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
              "plain_text": "This functionality was extended into the search feature. When a user enters a search term, or clicks on one of the three main categories of content, the network will re-arrange and filter itself to show the most appropriate content front-and-center. Search itself was implemented using SwiftType.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
      {
        "object": "block",
        "id": "e62da0dc-3c4b-4819-88c3-75ae73722038",
        "parent": {
          "type": "page_id",
          "page_id": "77790b2b-f14a-4b62-ac1c-75faa334578f"
        },
        "created_time": "2023-02-09T23:18:00.000Z",
        "last_edited_time": "2023-02-10T20:35:00.000Z",
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
                "content": "On the initial load, we wanted a full introduction animation before the network comes together to form their core values. This process involved not only working to simultaneously load data and swap out psuedo-elements, but a custom SVG filter was developed with some clever trickery to allow the dots to \"blob\" together when near each other, creative an intriguing fluid effect.",
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
              "plain_text": "On the initial load, we wanted a full introduction animation before the network comes together to form their core values. This process involved not only working to simultaneously load data and swap out psuedo-elements, but a custom SVG filter was developed with some clever trickery to allow the dots to \"blob\" together when near each other, creative an intriguing fluid effect.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
      {
        "object": "block",
        "id": "3bfede44-834e-47ec-862d-6b6c8075a389",
        "parent": {
          "type": "page_id",
          "page_id": "77790b2b-f14a-4b62-ac1c-75faa334578f"
        },
        "created_time": "2023-02-09T23:18:00.000Z",
        "last_edited_time": "2024-09-27T12:40:00.000Z",
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
            "url": "https://prod-files-secure.s3.us-west-2.amazonaws.com/ba27abef-4bbc-4834-b02a-65197fa7427a/112fcae0-514e-4ef8-af9e-57e088ee7491/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WWN6XS7%2F20250819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250819T122746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFgR8fcMZr1V9cdEwCVTrIsbry7NVHHYhX5GgpayY9f%2FAiEA4Pw4AK%2BhHgduIlTJRo%2Fm3Qfd0so3WAH9vzeoGCMGzyoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN912xv2c2hPWx4bOyrcAw90oLcd%2B6j%2FdbJVwuZrbPlPcI%2BVdDITv0pqc8oQ3kdCK8Lju9v4JdnP6siJ%2B2Rb%2FHpWL7uSCrE2kvRnScUvVTCLORwSf5wk%2BM%2FGURjItUdMK0jzpM80MGe99aDPEJPxZ9NYi62csnLevn81zdsIqEG9EnPC59BzJzmWEqHBqDcti4oJGrGFAjVqBhwKLSJ7F3OIV3OVS5rE3Qd8uL%2FS5Uh6BNYyHFjKcvNfxXG%2Boiv5eLuFpzknkchPNAITOje8skJ8vVBQ0jm8st18XHO2ZMWF9p93v7JUzHN5%2BMnHb6w%2BIgQ399kc%2BLO9gdoi8fmRvNxbWLQ6M0UVr4lmwhN9MnzK6JNgyCQWo5Na0Q0fK8zxJll7EOknqDKLcSA185uxXIknBg%2FrNRF5mmbSlKnHipmy%2B0DbNJD6O2Ie%2B8PVE5fCKuus1jWBh1pJjPXaeq4zEyq0nO876fq7MFfTM1W04IrNHbCPnBQf6Xo2%2Fx3eEnaDrXe%2BlcizPZcseUxyQHmkESSrxnJ187XNJRAbs15hRaD54Z0Yu%2Fuetd5CJKIe%2Br%2B%2FQLgS9IV%2B3t%2FfQeq6Dgh5hmeIWAaysOF4AbxGy3vqhcL8SkbqReHWrkpL3E3t2NWULjnZg36hjSAdjW7EMIrAkcUGOqUBfLGWg5CkvpXXZGeA7Sejho9j%2BA4E5ZDi93t4OyL53PpCezt9QIEWIzPzZ6kFQJJakm0sdIj%2FIA83MaXBQGtLHGPngK5ntmDqQDQBBg%2FL6G7RsKsgBp6r%2Bvd0tV%2Bqj9aqb3etKREzxHevqPbAFF6fV1phZW0emlHHS7Fan7N%2BfR9yqJao2F9EgFabIuzOVmctvzYB5rtCJan3Vmnp5Vet6rQzGQuF&X-Amz-Signature=6c975765b0fe480202fa23b6b8dd37491e2fc97d345a3e4ca6856a39ca455355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
            "expiry_time": "2025-08-19T13:27:46.800Z"
          }
        }
      },
      {
        "object": "block",
        "id": "929bf453-12e0-400f-9c66-6059b1731b28",
        "parent": {
          "type": "page_id",
          "page_id": "77790b2b-f14a-4b62-ac1c-75faa334578f"
        },
        "created_time": "2023-02-09T23:18:00.000Z",
        "last_edited_time": "2023-02-10T20:37:00.000Z",
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
                "content": "Performance was key, so the experience was extensively tested on a variety of mobile devices. We were constantly checking frame rate, animation speeds, hit boxes, and more to ensure a consistent and enjoyable browsing experience.",
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
              "plain_text": "Performance was key, so the experience was extensively tested on a variety of mobile devices. We were constantly checking frame rate, animation speeds, hit boxes, and more to ensure a consistent and enjoyable browsing experience.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
      {
        "object": "block",
        "id": "c752d24e-367d-40e9-a258-da0ab49c1c67",
        "parent": {
          "type": "page_id",
          "page_id": "77790b2b-f14a-4b62-ac1c-75faa334578f"
        },
        "created_time": "2023-02-10T20:27:00.000Z",
        "last_edited_time": "2023-02-10T20:41:00.000Z",
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
                "content": "The final component provided for a robust and navigable user experience that allowed visitors to quickly find what was relevant to them. By implementing this system, Deerfield has improved the overall user experience for their visitors and increased the discoverability of their content.",
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
              "plain_text": "The final component provided for a robust and navigable user experience that allowed visitors to quickly find what was relevant to them. By implementing this system, Deerfield has improved the overall user experience for their visitors and increased the discoverability of their content.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
      {
        "object": "block",
        "id": "dc4ce300-b04a-48b3-8d86-8e4ea33bb3da",
        "parent": {
          "type": "page_id",
          "page_id": "77790b2b-f14a-4b62-ac1c-75faa334578f"
        },
        "created_time": "2023-02-09T23:26:00.000Z",
        "last_edited_time": "2023-02-10T20:27:00.000Z",
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
        "type": "quote",
        "quote": {
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": "This is awesome! Nice work!! Thank you so much, we appreciate your help pulling this together.",
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
              "plain_text": "This is awesome! Nice work!! Thank you so much, we appreciate your help pulling this together.",
              "href": null
            }
          ],
          "color": "default"
        }
      },
      {
        "object": "block",
        "id": "77cba0b1-ebcb-4cea-9dc7-c740af4d3d86",
        "parent": {
          "type": "page_id",
          "page_id": "77790b2b-f14a-4b62-ac1c-75faa334578f"
        },
        "created_time": "2023-02-09T23:26:00.000Z",
        "last_edited_time": "2023-02-09T23:26:00.000Z",
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
  },]

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
  const updatePosition = () => {
    if (!isInteracting) { // Only update position if user is not interacting
      const currentX = parseFloat(gsap.getProperty(proxy, "x")) || 0;
      const newX = currentX - (40 / 60);

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
  animation: slider-rotation 12s ease-in-out infinite alternate;

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
