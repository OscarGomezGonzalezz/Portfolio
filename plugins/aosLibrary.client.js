import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  nuxtApp.AOS = new AOS.init({
    offset: -100,
    duration: 800,
    easing: 'ease-in-out-cubic',
    once: true,
    // Forzar animación en móviles aunque no haya scroll
    startEvent: isMobile ? 'load' : 'DOMContentLoaded'
  });

  // Para móviles, forzar refresh después de load
  if (isMobile) {
    window.addEventListener('load', () => {
      AOS.refresh();
    });
  }
});
