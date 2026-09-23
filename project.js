const imageMedia = (src, es, en, position = "50% 50%", layout = "") => ({ type: "image", src, position, layout, alt: { es, en } });
const videoMedia = (src, es, en, mime = "video/mp4") => ({ type: "video", src, mime, alt: { es, en } });

const projects = {
  ceniza: {
    number: "01", title: "Ceniza", monogram: "C",
    website: "https://www.cenizaproducciones.com/",
    media: [
      imageMedia("./assets/project-media/ceniza/cover-portrait-hq.png", "Retrato de estudio con iluminación cálida para una producción de Ceniza", "Warm studio portrait for a Ceniza production", "50% 12%"),
      imageMedia("./assets/project-media/ceniza/04.jpg", "Retrato iluminado en azul durante una producción de Ceniza", "Blue-lit portrait during a Ceniza production"),
      imageMedia("./assets/project-media/ceniza/01.jpg", "Preparación del set para una producción de Ceniza", "Set preparation for a Ceniza production"),
      imageMedia("./assets/project-media/ceniza/gallery-atmosferas-minimal-hq.png", "Luz, diseño, experiencia y atmósferas", "Light, design, experience and atmospheres", "0% 50%", "compact"),
    ],
    es: {
      category: "Producción audiovisual",
      lead: "Producción técnica e iluminación para llevar una idea desde la planeación hasta la entrega final.",
      role: "Cofundador · Producción técnica e iluminación",
      description: "Ceniza es una productora especializada en iluminación profesional y producción técnica para contenido audiovisual.",
      scope: ["Preproducción", "Iluminación", "Producción técnica", "Entrega audiovisual"],
      websiteLabel: "Visitar Ceniza Producciones",
    },
    en: {
      category: "Audiovisual production",
      lead: "Technical production and lighting that take an idea from planning through final delivery.",
      role: "Co-founder · Technical production and lighting",
      description: "Ceniza is a production company specializing in professional lighting and technical production for audiovisual content.",
      scope: ["Pre-production", "Lighting", "Technical production", "Audiovisual delivery"],
      websiteLabel: "Visit Ceniza Producciones",
    },
  },
  "super-rayo": {
    number: "02", title: "Super Rayo", monogram: "SR",
    media: [
      imageMedia("./assets/project-media/super-rayo/hero-bateria-centrada-hq.png", "Batería de Super Rayo centrada entre luces rojas y azules", "Super Rayo drum kit centered between red and blue lights"),
      imageMedia("./assets/project-media/super-rayo/02.jpg", "Montaje de una banda de jazz en Super Rayo", "Jazz band setup at Super Rayo"),
      imageMedia("./assets/project-media/super-rayo/03.jpg", "Cabina técnica de Super Rayo", "Super Rayo technical booth"),
    ],
    es: {
      category: "Música y cultura",
      lead: "Operación técnica, montaje y puesta en escena para música en vivo y cultura independiente.",
      role: "Jefe de cabina · Productor técnico",
      description: "Super Rayo es un espacio alternativo y experimental donde convergen música, arte, fiestas y cultura del vinilo.",
      scope: ["Jefatura de cabina", "Montaje de escenario", "Producción técnica", "Operación en vivo"],
    },
    en: {
      category: "Music and culture",
      lead: "Technical operation, setup and staging for live music and independent culture.",
      role: "Booth manager · Technical producer",
      description: "Super Rayo is an alternative and experimental venue where music, art, nightlife and vinyl culture meet.",
      scope: ["Booth management", "Stage setup", "Technical production", "Live operation"],
    },
  },
  culebras: {
    number: "03", title: "Todas las culebras son serpientes", monogram: "TC",
    media: [
      imageMedia("./assets/project-media/culebras/hero-neon-hq.png", "Letrero de neón de Todas las culebras son serpientes entre vegetación", "Todas las culebras son serpientes neon sign among tropical plants"),
      imageMedia("./assets/project-media/culebras/gallery-vegetacion-hq.png", "Vegetación iluminada alrededor de las escaleras de la instalación", "Illuminated plants surrounding the installation staircase"),
      imageMedia("./assets/project-media/culebras/gallery-serpiente-hq.png", "Serpiente de mosaico iluminada sobre la escalera", "Illuminated mosaic serpent above the staircase"),
    ],
    es: {
      category: "Instalación escénica",
      lead: "Una atmósfera construida con vegetación, neón y color como lenguaje escénico.",
      role: "Asistente de producción y arte",
      description: "El proyecto articula construcción espacial, montaje e interpretación visual para transformar el lugar en una experiencia envolvente.",
      scope: ["Dirección de arte", "Montaje", "Producción", "Interpretación visual"],
    },
    en: {
      category: "Stage installation",
      lead: "An atmosphere built through plants, neon and color as a scenic language.",
      role: "Production and art assistant",
      description: "The project brings together spatial construction, setup and visual interpretation to turn the venue into an immersive experience.",
      scope: ["Art direction", "Setup", "Production", "Visual interpretation"],
    },
  },
  "amigos-vinilos": {
    number: "04", title: "Amigos y Vinilos", monogram: "AV",
    media: [
      imageMedia("./assets/project-media/amigos-vinilos/01.jpg", "Conversación en el set de Amigos y Vinilos", "Conversation on the Amigos y Vinilos set"),
      imageMedia("./assets/project-media/amigos-vinilos/02.jpg", "Retrato editorial de Amigos y Vinilos", "Editorial portrait for Amigos y Vinilos"),
      imageMedia("./assets/project-media/amigos-vinilos/03.jpg", "Dirección artística del formato Amigos y Vinilos", "Art direction for Amigos y Vinilos"),
      imageMedia("./assets/project-media/amigos-vinilos/04.jpg", "Detalle del montaje para Amigos y Vinilos", "Setup detail for Amigos y Vinilos"),
    ],
    es: {
      category: "Formato editorial",
      lead: "Un formato híbrido que combina sesión musical, conversación y cultura del vinilo.",
      role: "Producción · Dirección artística y montaje",
      description: "Amigos y Vinilos propone una sesión de DJ de treinta minutos seguida de una conversación alrededor de la música y los discos.",
      scope: ["Producción", "Dirección artística", "Montaje", "Iluminación de set"],
    },
    en: {
      category: "Editorial format",
      lead: "A hybrid format combining a music session, conversation and vinyl culture.",
      role: "Production · Art direction and setup",
      description: "Amigos y Vinilos pairs a thirty-minute DJ session with a conversation around music and records.",
      scope: ["Production", "Art direction", "Setup", "Set lighting"],
    },
  },
  agendavacialmallena: {
    number: "05", title: "Agendavaciaalmallena", monogram: "A",
    media: [
      videoMedia("./assets/project-media/agendavacialmallena/01.m4v", "Video de emprendimientos para Agendavaciaalmallena", "Entrepreneurship video for Agendavaciaalmallena", "video/x-m4v"),
      videoMedia("./assets/project-media/agendavacialmallena/02.m4v", "Reel de reflexión para Agendavaciaalmallena", "Reflection reel for Agendavaciaalmallena", "video/x-m4v"),
    ],
    es: {
      category: "Contenido digital",
      lead: "Contenido audiovisual para una comunidad que entiende la madurez como una etapa de propósito y libertad.",
      role: "Producción · Edición",
      description: "Una propuesta digital dirigida a personas retiradas que buscan nuevos proyectos, bienestar y maneras de disfrutar su tiempo.",
      scope: ["Producción", "Edición", "Dirección", "Grabación"],
    },
    en: {
      category: "Digital content",
      lead: "Audiovisual content for a community that sees maturity as a stage of purpose and freedom.",
      role: "Production · Editing",
      description: "A digital project for retired people looking for new projects, well-being and meaningful ways to enjoy their time.",
      scope: ["Production", "Editing", "Direction", "Recording"],
    },
  },
  "tu-plon-stereo": {
    number: "06", title: "Tu Plon Stereo", monogram: "TP",
    media: [
      imageMedia("./assets/project-media/tu-plon-stereo/01.jpg", "Entrevista en el set de Tu Plon Stereo", "Interview on the Tu Plon Stereo set"),
      imageMedia("./assets/project-media/tu-plon-stereo/02.jpg", "Producción audiovisual de Tu Plon Stereo", "Tu Plon Stereo audiovisual production"),
      imageMedia("./assets/project-media/tu-plon-stereo/03.jpg", "Detalle del set de Tu Plon Stereo", "Tu Plon Stereo set detail"),
    ],
    es: {
      category: "Contenido digital",
      lead: "Entrevistas, videoblogs, podcasts y formatos ágiles pensados para conectar con audiencias digitales.",
      role: "Producción · Edición",
      description: "Un ecosistema de contenido que reúne conversaciones, piezas breves y formatos virales con una producción visual consistente.",
      scope: ["Producción", "Edición", "Dirección", "Iluminación"],
    },
    en: {
      category: "Digital content",
      lead: "Interviews, video blogs, podcasts and agile formats designed to connect with digital audiences.",
      role: "Production · Editing",
      description: "A content ecosystem bringing together conversations, short-form pieces and viral formats through consistent visual production.",
      scope: ["Production", "Editing", "Direction", "Lighting"],
    },
  },
  "podcast-introcrea": {
    number: "07", title: "Podcast Introcrea", monogram: "PI",
    media: [
      imageMedia("./assets/project-media/podcast-introcrea/landing-cover-hq.png", "Set de Podcast Introcrea con dos participantes e iluminación rosa y verde", "Podcast Introcrea set with two participants and pink and green lighting", "50% 50%"),
      imageMedia("./assets/project-media/podcast-introcrea/02.jpg", "Cámara y participantes durante la grabación de Podcast Introcrea", "Camera and participants during the Podcast Introcrea recording", "50% 55%"),
      imageMedia("./assets/project-media/podcast-introcrea/03.jpg", "Montaje de cámara e iluminación para Podcast Introcrea", "Camera and lighting setup for Podcast Introcrea", "50% 52%"),
      imageMedia("./assets/project-media/podcast-introcrea/04.jpg", "Producción audiovisual de Podcast Introcrea en estudio", "Podcast Introcrea audiovisual production in the studio", "50% 52%"),
    ],
    es: {
      category: "Podcast · Producción audiovisual",
      lead: "Producción técnica y puesta en escena para una conversación en formato podcast.",
      role: "Producción técnica · Iluminación · Montaje",
      description: "Un set de entrevista construido con iluminación de color, operación de cámara y una composición sobria para acompañar la conversación.",
      scope: ["Producción técnica", "Iluminación de set", "Montaje", "Operación audiovisual"],
    },
    en: {
      category: "Podcast · Audiovisual production",
      lead: "Technical production and staging for a conversation in podcast format.",
      role: "Technical production · Lighting · Setup",
      description: "An interview set built with colored lighting, camera operation and a restrained composition designed to support the conversation.",
      scope: ["Technical production", "Set lighting", "Setup", "Audiovisual operation"],
    },
  },
};

const projectOrder = Object.keys(projects);
const requestedProject = new URLSearchParams(window.location.search).get("project");
const projectKey = projects[requestedProject] ? requestedProject : projectOrder[0];
const project = projects[projectKey];
const languageStorageKey = "bernardo-portfolio-language";
let projectMotion = null;

const interfaceCopy = {
  es: { back: "Volver a proyectos", roleLabel: "Rol", nextLabel: "Siguiente proyecto", contact: "Contacto", infoLabel: "Información del proyecto", galleryLabel: "Galería del proyecto", nextNavLabel: "Siguiente proyecto" },
  en: { back: "Back to projects", roleLabel: "Role", nextLabel: "Next project", contact: "Contact", infoLabel: "Project information", galleryLabel: "Project gallery", nextNavLabel: "Next project" },
};

const getStoredLanguage = () => {
  const urlLanguage = new URLSearchParams(window.location.search).get("lang");
  if (urlLanguage === "en" || urlLanguage === "es") return urlLanguage;

  try {
    return localStorage.getItem(languageStorageKey) === "en" ? "en" : "es";
  } catch {
    return "es";
  }
};

const syncLanguageNavigation = (language, nextKey) => {
  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set("lang", language);
  window.history.replaceState(null, "", currentUrl.href);

  const homeUrl = `./index.html?lang=${language}`;
  const brandLink = document.querySelector(".project-topbar .brand");
  const backLink = document.querySelector(".project-back");
  const contactLink = document.querySelector(".project-footer a");
  if (brandLink) brandLink.href = `${homeUrl}#inicio`;
  if (backLink) backLink.href = `${homeUrl}#proyectos`;
  if (contactLink) contactLink.href = `${homeUrl}#contacto`;

  const nextLink = document.querySelector("[data-next-link]");
  if (nextLink) nextLink.href = `./project.html?project=${nextKey}&lang=${language}`;
};

const getProjectTitle = (item, language) => typeof item.title === "string" ? item.title : item.title[language];
const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

const createMediaElement = (item, language, { cover = false } = {}) => {
  if (item.type === "video") {
    const video = document.createElement("video");
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute("aria-label", item.alt[language]);
    if (cover) {
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
    } else {
      video.controls = true;
    }
    const source = document.createElement("source");
    source.src = item.src;
    source.type = item.mime;
    video.append(source);
    return video;
  }

  const image = document.createElement("img");
  image.src = item.src;
  image.alt = item.alt[language];
  image.style.objectPosition = item.position;
  image.decoding = "async";
  image.loading = cover ? "eager" : "lazy";
  return image;
};

const renderMedia = (language) => {
  const [cover, ...galleryItems] = project.media;
  const mediaHost = document.querySelector("[data-project-media]");
  const gallery = document.querySelector("[data-project-gallery]");
  const galleryList = document.querySelector("[data-project-gallery-list]");
  mediaHost?.replaceChildren(createMediaElement(cover, language, { cover: true }));

  if (gallery && galleryList) {
    gallery.hidden = galleryItems.length === 0;
    galleryList.replaceChildren(...galleryItems.map((item) => {
      const figure = document.createElement("figure");
      figure.className = `project-gallery__item project-gallery__item--${item.type}${item.layout ? ` project-gallery__item--${item.layout}` : ""}`;
      figure.append(createMediaElement(item, language));
      return figure;
    }));
  }
};

const setupProjectMotion = () => {
  if (!window.gsap || !window.ScrollTrigger) return;
  projectMotion?.revert();
  gsap.registerPlugin(ScrollTrigger);
  projectMotion = gsap.matchMedia();

  projectMotion.add("(prefers-reduced-motion: no-preference)", () => {
    const ease = "power3.out";
    const heroMedia = document.querySelector("[data-project-media] > *");
    const galleryItems = gsap.utils.toArray(".project-gallery__item");

    gsap.timeline({ defaults: { ease } })
      .fromTo(".project-detail__eyebrow", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.65 })
      .fromTo(".project-detail__hero h1", { autoAlpha: 0, y: 48 }, { autoAlpha: 1, y: 0, duration: 0.95 }, 0.12)
      .fromTo(".project-detail__hero > p", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.32)
      .fromTo(".project-detail__visual", { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.15 }, 0.22)
      .fromTo(heroMedia, { scale: 1.08 }, { scale: 1.02, duration: 1.35 }, 0.22);

    gsap.fromTo(heroMedia, { yPercent: -1.5 }, { yPercent: 2.5, ease: "none", scrollTrigger: { trigger: ".project-detail__visual", start: "top bottom", end: "bottom top", scrub: 1.35 } });

    galleryItems.forEach((item, index) => {
      const media = item.querySelector("img, video");
      gsap.timeline({ delay: index % 2 ? 0.08 : 0, defaults: { ease }, scrollTrigger: { trigger: item, start: "top 86%", toggleActions: "play none none reverse" } })
        .fromTo(item, { autoAlpha: 0, y: 58, clipPath: "inset(0 0 16% 0)" }, { autoAlpha: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 0.95 })
        .fromTo(media, { scale: 1.09 }, { scale: 1.02, duration: 1.15 }, 0);
      gsap.fromTo(media, { yPercent: -2 }, { yPercent: 2, ease: "none", scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: 1.4 } });
    });

    gsap.fromTo(".project-detail__info > *", { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12, ease, scrollTrigger: { trigger: ".project-detail__info", start: "top 78%", toggleActions: "play none none reverse" } });
    gsap.fromTo(".project-next > *", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1, ease, scrollTrigger: { trigger: ".project-next", start: "top 82%", toggleActions: "play none none reverse" } });
    const refresh = () => ScrollTrigger.refresh();
    document.querySelectorAll("video").forEach((video) => video.addEventListener("loadedmetadata", refresh, { once: true }));
  });

  projectMotion.add("(prefers-reduced-motion: reduce)", () => {
    gsap.set(".project-detail__hero > *, .project-detail__visual, .project-gallery__item, .project-gallery__item > *, .project-detail__info > *, .project-next > *", { autoAlpha: 1, clearProps: "transform,clipPath,visibility,opacity" });
    document.querySelectorAll("video[autoplay]").forEach((video) => video.pause());
  });
};

const renderProject = (language) => {
  const localized = project[language];
  const copy = interfaceCopy[language];
  const title = getProjectTitle(project, language);
  const nextIndex = (projectOrder.indexOf(projectKey) + 1) % projectOrder.length;
  const nextKey = projectOrder[nextIndex];
  const nextProject = projects[nextKey];

  document.documentElement.lang = language;
  document.title = `${title} — Bernardo Franco`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", localized.lead);
  document.querySelectorAll("[data-copy]").forEach((element) => { element.textContent = copy[element.dataset.copy]; });
  document.querySelector(".project-detail__info")?.setAttribute("aria-label", copy.infoLabel);
  document.querySelector(".project-detail__gallery")?.setAttribute("aria-label", copy.galleryLabel);
  document.querySelector(".project-next")?.setAttribute("aria-label", copy.nextNavLabel);
  document.querySelector(".language-switcher")?.setAttribute("aria-label", language === "es" ? "Idioma" : "Language");
  document.querySelectorAll("[data-project-number]").forEach((element) => { element.textContent = project.number; });
  setText("[data-project-category]", localized.category);
  setText("[data-project-title]", title);
  setText("[data-project-lead]", localized.lead);
  setText("[data-project-role]", localized.role);
  setText("[data-project-description]", localized.description);
  setText("[data-project-monogram]", project.monogram);
  renderMedia(language);

  const scope = document.querySelector("[data-project-scope]");
  if (scope) {
    scope.replaceChildren(...localized.scope.map((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      return listItem;
    }));
  }

  const websiteLink = document.querySelector("[data-project-website]");
  if (websiteLink) {
    websiteLink.hidden = !project.website;
    if (project.website) {
      websiteLink.href = project.website;
      websiteLink.setAttribute("aria-label", localized.websiteLabel);
      setText("[data-project-website-label]", localized.websiteLabel);
    } else {
      websiteLink.removeAttribute("href");
      websiteLink.removeAttribute("aria-label");
    }
  }

  syncLanguageNavigation(language, nextKey);
  setText("[data-next-title]", getProjectTitle(nextProject, language));
  document.querySelectorAll("[data-language]").forEach((button) => { button.setAttribute("aria-pressed", String(button.dataset.language === language)); });
  try { localStorage.setItem(languageStorageKey, language); } catch { /* Keep the current visit language. */ }
  requestAnimationFrame(setupProjectMotion);
};

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => renderProject(button.dataset.language));
});
window.addEventListener("pagehide", () => projectMotion?.revert(), { once: true });
renderProject(getStoredLanguage());
