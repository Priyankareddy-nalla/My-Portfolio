// Translations
const translations = {
    en: {
      nav: { home: "Home", about: "About", work: "Work", contact: "Contact" },
      homeIntro: "Welcome to my portfolio! I am a Software Test Engineer with over 4 years of experience in software quality assurance, functional testing, regression testing, defect management, and API testing. I am passionate about delivering high-quality software and continuously expanding my skills in test automation and modern web technologies. Explore my projects, skills, and experience, and feel free to get in touch."
      // Add more keys for About, Projects, buttons...
    },
    de: {
      nav: { home: "Startseite", about: "Über mich", work: "Projekte", contact: "Kontakt" },
      homeIntro: "Willkommen in meinem Portfolio! Ich bin Software-Testingenieurin mit über 4 Jahren Erfahrung in der Software-Qualitätssicherung, im Funktionstesting, Regressionstesting, im Fehlermanagement sowie im API-Testing. Ich bin leidenschaftlich daran interessiert, hochwertige Software bereitzustellen und meine Fähigkeiten im Bereich Testautomatisierung und moderner Webtechnologien kontinuierlich weiterzuentwickeln. Entdecken Sie meine Projekte, Fähigkeiten und Erfahrungen – und nehmen Sie gerne Kontakt mit mir auf."
    }
  };
  
  // Function to update texts
  function updateTexts(lang) {
    // Update nav buttons
    document.querySelectorAll(".button-link").forEach((button) => {
      const key = button.getAttribute("data-key");
      if (translations[lang].nav[key]) {
        button.textContent = translations[lang].nav[key];
      }
    });
  
    // Update home intro
    document.querySelectorAll("[data-key='homeIntro']").forEach((el) => {
      el.textContent = translations[lang].homeIntro;
    });
  
    // Extend About section, Projects, etc.
  }
  
  // Function to change language
  function changeLanguage(lang) {
    localStorage.setItem("lang", lang); // save selection
    updateTexts(lang);
  }
  
  // On page load, apply stored language or default to English
  window.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "en";
    updateTexts(lang);
  });
  