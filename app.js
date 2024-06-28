const languages = [
  {
    es: {
      titleCover: "Películas y series ilimitadas y mucho más",
      buttonStartSession: "Iniciar sesion",
      subtitleDisfruta: "Disfruta donde quieras. Cancela cuando quieras.",
      subtitleWathNow:
        "¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.",
      buttonStart: "Comenzar",
      titleEnjoyTv: "Disfruta en tu TV",
      subtitleEnjoyTv:
        "Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.",
      titleDownloadOffline: "Descarga tus series para verlas offline",
      subtitleDownloadOffline:
        "Guarda tu contenido favorito y tendrás siempre algo para ver.",
      miniTitleDownloading: "Descargando...",
      titleEnjoyPlace: "Disfruta donde quieras",
      subtitleEnjoyPlace:
        "Películas y series ilimitadas en tu teléfono, tablet, laptop y TV.",
      titleMakeProfile: "Crea perfiles para niños",
      subtitleMakeProfile:
        "Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.",
      titleQuestionFrecuently: "Preguntas frecuentes",
      titleWhatIsNetflix: "¿Qué es Netflix?",
      titleHowCostNetflix: "¿Cuánto cuesta Netflix?",
      titleWhereCanWatch: "¿Dónde puedo ver Netflix?",
      titleCancel: "¿Cómo cancelo?",
      titleCanWatchNetflix: "¿Qué puedo ver en Netflix?",
      titleIsGoodNetflix: "¿Es bueno Netflix para los niños?",
      titleCanYouWatchNetflix:
        "¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.",
      titleHaveQuestion: "¿Preguntas? Llama al 012345",
      link1: "Preguntas frecuentes",
      link2: "Privacidad",
      link3: "Centro de ayuda",
      link4: "Preferencias de cookies",
      link5: "Cuenta",
      link6: "Informacion corporativa",
      link7: "Prensa",
      link8: "Contactanos",
      link9: "Relaciones con inversionistas",
      link10: "Prueba de velocidad",
      link11: "Empleo",
      link12: "Avisos legales",
      link13: "Formas de ver",
      link14: "Solo en netflix",
      link15: "Terminos de uso",
      dev: "Copia desarrollado por Fabio Sosa",
    },
  },
  {
    en: {
      titleCover: "Unlimited movies, TV shows, and more.",
      buttonStartSession: "Log in",
      subtitleDisfruta: "Watch anywhere. Cancel anytime.",
      subtitleWathNow:
        "Ready to watch Netflix? Enter your email to create or restart your membership.",
      buttonStart: "Start",
      titleEnjoyTv: "Watch on your TV",
      subtitleEnjoyTv:
        "Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      titleDownloadOffline: "Download your shows to watch offline.",
      subtitleDownloadOffline:
        "Save your favorites easily and always have something to watch.",
      miniTitleDownloading: "Downloading...",
      titleEnjoyPlace: "Watch everywhere.",
      subtitleEnjoyPlace:
        "Unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      titleMakeProfile: "Create profiles for children.",
      subtitleMakeProfile:
        "Kids profiles come with their own curated content and parental controls.",
      titleQuestionFrecuently: "Frequently Asked Questions",
      titleWhatIsNetflix: "What is Netflix?",
      titleHowCostNetflix: "How much does Netflix cost?",
      titleWhereCanWatch: "Where can I watch?",
      titleCancel: "How do I cancel?",
      titleCanWatchNetflix: "What can I watch on Netflix?",
      titleIsGoodNetflix: "Is Netflix good for kids?",
      titleCanYouWatchNetflix:
        "Ready to watch Netflix? Enter your email to create or restart your membership.",
      titleHaveQuestion: "Questions? Call 012345",
      link1: "FAQ",
      link2: "Privacy",
      link3: "Help Center",
      link4: "Cookie Preferences",
      link5: "Account",
      link6: "Corporate Information",
      link7: "Press",
      link8: "Contact Us",
      link9: "Investor Relations",
      link10: "Speed Test",
      link11: "Jobs",
      link12: "Legal Notices",
      link13: "Ways to Watch",
      link14: "Only on Netflix",
      link15: "Terms of Use",
      dev: "Developed by Fabio Sosa",
    },
  },
];

const listId = [
  "titleCover",
  "subtitleDisfruta",
  "subtitleWathNow",
  "buttonStart",
  "titleEnjoyTv",
  "subtitleEnjoyTv",
  "titleDownloadOffline",
  "subtitleDownloadOffline",
  "miniTitleDownloading",
  "titleEnjoyPlace",
  "subtitleEnjoyPlace",
  "titleMakeProfile",
  "subtitleMakeProfile",
  "titleQuestionFrecuently",
  "titleWhatIsNetflix",
  "titleHowCostNetflix",
  "titleWhereCanWatch",
  "titleCancel",
  "titleCanWatchNetflix",
  "titleIsGoodNetflix",
  "titleCanYouWatchNetflix",
  "titleHaveQuestion",
  "link1",
  "link2",
  "link3",
  "link4",
  "link5",
  "link6",
  "link7",
  "link8",
  "link9",
  "link10",
  "link11",
  "link12",
  "link13",
  "link14",
  "link15",
  "dev",
];

const select = document.getElementById("select");
const select2 = document.getElementById("select2");
const btnLogin = document.getElementById("buttonStartSession");
const btnStart = document.getElementById("buttonStart");
let language;
const nodes = listId.map((item) => document.getElementById(item));

const messageIndicator = document.getElementById("messageIndicator");

const handleChangeLanguage = () => {
  const englishListOptions = ["en-US", "en", "English"];
  if (englishListOptions.includes(language)) {
    nodes.forEach((node) => {
      node.textContent = languages[1].en[node.getAttribute("id")];
    });
    select.value = "en";
    select2.value = "en";
  } else if (["es-ES", "es"].includes(language)) {
    nodes.forEach((node) => {
      node.textContent = languages[0].es[node.getAttribute("id")];
    });
    select.value = "es";
    select2.value = "es";
  }

  return;
};

const addMessageOnBuilding = () => {
  const paragraph = document.createElement("h2");
  paragraph.setAttribute("id", "temp");
  paragraph.textContent = ["es", "es-ES"].includes(language)
    ? "Esto esta en construccion"
    : "Oops, this is under construction";

  messageIndicator.appendChild(paragraph);
  messageIndicator.classList.add("messageIndicator");

  setTimeout(() => {
    messageIndicator.classList.remove("messageIndicator");
    document.getElementById("temp").remove();
  }, 4000);
};

window.document.addEventListener("DOMContentLoaded", () => {
  language = navigator.language;
  handleChangeLanguage();
});

select.addEventListener("change", (e) => {
  language = e.target.value;
  handleChangeLanguage();
});

select2.addEventListener("change", (e) => {
  language = e.target.value;
  handleChangeLanguage();
});

btnLogin.addEventListener("click", (e) => {
  addMessageOnBuilding();
});

btnStart.addEventListener("click", (e) => {
  addMessageOnBuilding();
});
