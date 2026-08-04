(() => {
  "use strict";

  document.documentElement.classList.add("js");

  const translations = {
    es: {
      metaTitle: "Gabriel Ivan Ferreyra | IT Operations & Microsoft 365",
      metaDescription: "Portfolio profesional de Gabriel Ivan Ferreyra: IT Operations, administración de Microsoft 365, Entra ID, Jira Service Management y soporte corporativo L2/L3.",
      skipLink: "Saltar al contenido principal",
      brandHomeLabel: "Ir al inicio",
      navLabel: "Navegación principal",
      languageLabel: "Seleccionar idioma",
      menuOpenLabel: "Abrir menú",
      menuCloseLabel: "Cerrar menú",
      navAbout: "Sobre mí",
      navSkills: "Habilidades",
      navExperience: "Experiencia",
      navHighlights: "Implementaciones",
      navEducation: "Formación",
      navProjects: "Proyectos",
      navContact: "Contacto",
      heroAvailability: "Disponible para nuevas oportunidades",
      heroEyebrow: "IT OPERATIONS · SYSTEMS ADMINISTRATION",
      heroTitle: "Operación IT confiable con foco en <span>Microsoft 365, usuarios y continuidad.</span>",
      heroLead: "Profesional hands-on con más de 7 años en soporte corporativo, administración de plataformas y resolución de incidentes. Experiencia como referente IT para más de 100 colaboradores.",
      downloadCv: "Descargar CV",
      viewLinkedIn: "Ver LinkedIn",
      viewExperience: "Ver experiencia",
      profileEyebrow: "PERFIL ACTUAL",
      profileTitle: "IT Operations / SysAdmin",
      location: "Córdoba, Argentina",
      metricYears: "años de experiencia",
      metricUsers: "usuarios asistidos",
      metricSupport: "soporte y troubleshooting",
      metricM365: "administración end-to-end",
      profileFocusLabel: "Enfoque",
      profileFocusValue: "Continuidad · ITSM · usuarios",
      profileModesLabel: "Modalidad",
      profileModesValue: "Remoto · híbrido · presencial",
      profileLanguagesLabel: "Idiomas",
      profileLanguagesValue: "ES nativo · EN B1 · PT A2 · IT A2",
      aboutEyebrow: "PERFIL PROFESIONAL",
      aboutTitle: "Soporte, administración y mejora operativa.",
      aboutIntro: "Combino soporte técnico, administración de servicios corporativos y documentación para sostener una operación IT ordenada, segura y cercana al usuario.",
      aboutParagraph1: "En mi experiencia más reciente fui el principal punto de contacto tecnológico para más de 100 colaboradores. Gestioné Microsoft 365 y Entra ID, Jira Service Management, endpoints, accesos, onboarding/offboarding, inventario, proveedores e incidentes diarios.",
      aboutParagraph2: "Mi forma de trabajo prioriza diagnóstico claro, seguimiento hasta el cierre, documentación reutilizable y decisiones prácticas que reduzcan fricción y recurrencia.",
      principle1Title: "Ownership operativo",
      principle1Text: "Tomo responsabilidad por el problema, coordino dependencias y acompaño hasta la resolución.",
      principle2Title: "Documentación útil",
      principle2Text: "Convierto soluciones repetibles en procedimientos, guías y bases de conocimiento claras.",
      principle3Title: "Experiencia de usuario",
      principle3Text: "Explico lo técnico con claridad y cuido la continuidad del trabajo de cada persona.",
      skillsEyebrow: "CAPACIDADES",
      skillsTitle: "Stack técnico y competencias operativas.",
      skillsIntro: "Herramientas y áreas donde tengo experiencia práctica en entornos corporativos.",
      skillM365Title: "Administración y colaboración",
      skillM365_1: "Admin Center, licencias, grupos y permisos",
      skillM365_3: "Firma corporativa y gobernanza operativa",
      skillIdentityTitle: "Entra ID y ciclo de usuario",
      skillIdentity_1: "Altas, bajas y modificaciones",
      skillIdentity_3: "Onboarding y offboarding",
      skillIdentity_4: "Trazabilidad y control operativo de accesos",
      skillItsmTitle: "Jira Service Management",
      skillItsm_1: "Tickets, triage y seguimiento",
      skillItsm_2: "Formularios, workflows, tableros y permisos",
      skillItsm_3: "SOPs, runbooks y base de conocimiento",
      skillItsm_4: "Inventario y operación sobre Odoo",
      skillEndpointTitle: "Soporte L2/L3 y dispositivos",
      skillEndpoint_2: "Hardware, impresoras y conectividad LAN/Wi-Fi",
      skillEndpoint_4: "Baseline, drivers y troubleshooting avanzado",
      skillSecurityTitle: "Seguridad operativa",
      skillSecurity_2: "MFA, buenas prácticas y respuesta a incidentes",
      skillSecurity_3: "Soporte documental ISO 27001 / 9001",
      basicLevel: "básico",
      skillDevicesTitle: "Hardware e integraciones",
      skillDevices_1: "Lectores biométricos ZKTeco",
      skillDevices_2: "Lectores industriales GS1-128 / UDI",
      skillDevices_3: "Firmware, flasheo y documentación técnica",
      skillDevices_4: "Integración con servidores y Odoo",
      experienceEyebrow: "TRAYECTORIA",
      experienceTitle: "Experiencia profesional.",
      experienceIntro: "Recorrido en soporte corporativo, operación de plataformas, hardware y atención a usuarios.",
      companyContextTitle: "Contexto Vippinn + Aerobyte",
      companyContextText: "Empresas hermanas con servicios diferentes: Vippinn orientada a consultoría y servicios profesionales; Aerobyte enfocada en hardware, software y soporte a clientes. Mi trabajo cubrió necesidades diferenciadas dentro del mismo ecosistema empresarial.",
      recentRole: "EXPERIENCIA RECIENTE",
      vippinnRole: "IT Operations / Administrador de Sistemas · Vippinn",
      vippinnMeta: "Ene 2025 – Abr 2026 · Córdoba, Argentina",
      vippinnService: "Consultoría",
      vippinnSummary: "Referente end-to-end de la operación IT y principal punto de contacto para más de 100 colaboradores, asegurando continuidad, soporte diario y coordinación con proveedores.",
      vippinn_1: "Administración de Microsoft 365 y Entra ID: usuarios, licencias, MFA, Exchange Online, Teams, SharePoint y OneDrive.",
      vippinn_2: "Operación ITSM en Jira/JSM: formularios, workflows, tableros, permisos, triage, documentación y mejora continua.",
      vippinn_3: "Soporte L2/L3 sobre endpoints Windows/macOS, hardware, software, impresoras, conectividad y asistencia remota.",
      vippinn_4: "Seguridad operativa con Wazuh, Tailscale, KeePassXC, MFA y seguimiento de incidentes.",
      vippinn_5: "Integraciones con Odoo, biometría, lectoras GS1-128/UDI, firma corporativa y estandarización de equipos.",
      vippinn_6: "Participación en documentación y evidencias para procesos ISO 27001 / 9001.",
      sisterCompany: "EMPRESA HERMANA",
      aerobyteRole: "Soporte IT / Operación técnica · Aerobyte",
      aerobyteMeta: "Ene 2025 – Abr 2026 · Córdoba, Argentina",
      aerobyteService: "Hardware / Software",
      aerobyteSummary: "Soporte técnico para equipos internos y clientes, con foco en diagnóstico, resolución, seguimiento por tickets y continuidad de servicio.",
      aerobyte_1: "Incidentes y requerimientos sobre endpoints, impresoras, redes y conectividad.",
      aerobyte_2: "Apoyo en Microsoft 365, Jira, Odoo, inventario y configuración de correo.",
      aerobyte_3: "Implementación y soporte de lectores biométricos y lectores de códigos.",
      freelanceRole: "Soporte IT independiente",
      freelanceMeta: "Ene 2022 – Actualidad · Córdoba, Argentina",
      freelanceSummary: "Instalación, mantenimiento y soporte para usuarios particulares y pequeños entornos, incluyendo Windows, macOS y Linux, asistencia remota, migraciones, reparación de hardware y recuperación de datos.",
      earlierTitle: "Experiencia anterior",
      newBoundRole: "Sales Development Representative · remoto",
      oneClickRole: "Soporte técnico especializado en ecosistema Apple",
      armyName: "Contaduría General del Ejército",
      armyRole: "Soporte a usuarios, equipos, impresoras y red LAN/Wi-Fi",
      pascalRole: "Soporte multimarca, ticketing, redes y contención de ransomware",
      highlightsEyebrow: "IMPLEMENTACIONES",
      highlightsTitle: "Proyectos técnicos destacados.",
      highlightsIntro: "Trabajos donde combiné administración, soporte, pruebas y documentación.",
      highlight1Title: "Migración desde Google Workspace",
      highlight1Text: "Relevamiento de cuentas, creación de usuarios, licenciamiento y validación de acceso en Outlook y Teams para acompañar una transición ordenada.",
      userAdoption: "Adopción de usuarios",
      accessControl: "CONTROL DE ACCESO",
      highlight2Title: "Biometría multisitio",
      highlight2Text: "Instalación, configuración y documentación de más de 15 lectores biométricos, integrados a plataforma de gestión para centralizar usuarios y seguimiento.",
      integration: "Integración",
      specialDevices: "DISPOSITIVOS ESPECIALES",
      highlight3Title: "Lectores industriales GS1-128 / UDI",
      highlight3Text: "Pruebas técnicas, actualización de firmware y guías de flasheo/configuración para aumentar la autonomía interna y reducir la dependencia del fabricante.",
      documentation: "Documentación",
      educationEyebrow: "FORMACIÓN",
      educationTitle: "Cursos y aprendizaje continuo.",
      m365CourseTitle: "Microsoft 365 Administrator · Avanzado",
      m365CourseText: "Formación en aprovisionamiento de usuarios, sincronización de identidades, Exchange Online, Teams, SharePoint, OneDrive, seguridad, cumplimiento, migraciones y monitoreo.",
      viewCertificate: "Ver certificado",
      certificatePreviewLabel: "Ampliar certificado Microsoft 365",
      certificateAlt: "Certificación Microsoft 365 Administrator de Gabriel Ivan Ferreyra",
      programmingTitle: "Programación · Udemy",
      programmingText: "HTML, CSS, JavaScript y Python aplicados a prácticas y proyectos web.",
      repairTitle: "Armado y reparación de PC",
      repairText: "I.P.E.M. N.º 39 Don Bosco · Ministerio de Educación de Córdoba y UNC.",
      secondaryTitle: "Educación secundaria",
      secondaryText: "I.P.E.M. N.º 39 Don Bosco · orientación en Economía.",
      projectsEyebrow: "TRABAJOS PROPIOS",
      projectsTitle: "Proyectos web.",
      projectsIntro: "Proyectos personales donde aplico estructura, diseño responsive y desarrollo frontend.",
      familyBusiness: "EMPRENDIMIENTO FAMILIAR",
      luisaText: "Sitio web para un emprendimiento de pastelería, con catálogo de productos, servicios y contacto directo por WhatsApp e Instagram.",
      portfolioProjectTitle: "Portfolio profesional bilingüe",
      portfolioProjectText: "Diseño y desarrollo en HTML, CSS y JavaScript puro, con neumorfismo, accesibilidad, SEO, responsive e interfaz ES/EN.",
      viewCode: "Ver código",
      contactEyebrow: "CONTACTO",
      contactTitle: "Conversemos sobre la próxima oportunidad.",
      contactText: "Disponible para posiciones de IT Support, Microsoft 365 Administration, Systems Administration e IT Operations.",
      workModes: "Remoto · híbrido · presencial",
      sendEmail: "Enviar email",
      footerRole: "IT Operations · Microsoft 365 · Soporte corporativo",
      lastUpdate: "Última actualización: agosto de 2026",
      certificateDialogTitle: "Certificación y formación",
      closeCertificateLabel: "Cerrar certificado"
    },
    en: {
      metaTitle: "Gabriel Ivan Ferreyra | IT Operations & Microsoft 365",
      metaDescription: "Professional portfolio of Gabriel Ivan Ferreyra: IT Operations, Microsoft 365 administration, Entra ID, Jira Service Management and L2/L3 corporate IT support.",
      skipLink: "Skip to main content",
      brandHomeLabel: "Go to home",
      navLabel: "Primary navigation",
      languageLabel: "Select language",
      menuOpenLabel: "Open menu",
      menuCloseLabel: "Close menu",
      navAbout: "About",
      navSkills: "Skills",
      navExperience: "Experience",
      navHighlights: "Implementations",
      navEducation: "Education",
      navProjects: "Projects",
      navContact: "Contact",
      heroAvailability: "Open to new opportunities",
      heroEyebrow: "IT OPERATIONS · SYSTEMS ADMINISTRATION",
      heroTitle: "Reliable IT operations focused on <span>Microsoft 365, users and continuity.</span>",
      heroLead: "Hands-on professional with 7+ years in corporate IT support, platform administration and incident resolution. Experience as the main IT point of contact for 100+ employees.",
      downloadCv: "Download résumé",
      viewLinkedIn: "View LinkedIn",
      viewExperience: "View experience",
      profileEyebrow: "CURRENT PROFILE",
      profileTitle: "IT Operations / SysAdmin",
      location: "Córdoba, Argentina",
      metricYears: "years of experience",
      metricUsers: "users supported",
      metricSupport: "support and troubleshooting",
      metricM365: "end-to-end administration",
      profileFocusLabel: "Focus",
      profileFocusValue: "Continuity · ITSM · users",
      profileModesLabel: "Work model",
      profileModesValue: "Remote · hybrid · on-site",
      profileLanguagesLabel: "Languages",
      profileLanguagesValue: "ES native · EN B1 · PT A2 · IT A2",
      aboutEyebrow: "PROFESSIONAL PROFILE",
      aboutTitle: "Support, administration and operational improvement.",
      aboutIntro: "I combine technical support, corporate service administration and documentation to maintain an organized, secure and user-centered IT operation.",
      aboutParagraph1: "In my most recent experience, I was the main technology point of contact for more than 100 employees. I managed Microsoft 365 and Entra ID, Jira Service Management, endpoints, access, onboarding/offboarding, inventory, vendors and daily incidents.",
      aboutParagraph2: "My working approach prioritizes clear diagnosis, ownership through closure, reusable documentation and practical decisions that reduce friction and recurring issues.",
      principle1Title: "Operational ownership",
      principle1Text: "I take responsibility for the issue, coordinate dependencies and follow through until it is resolved.",
      principle2Title: "Useful documentation",
      principle2Text: "I turn repeatable solutions into clear procedures, guides and knowledge-base content.",
      principle3Title: "User experience",
      principle3Text: "I explain technical matters clearly and protect each user's ability to keep working.",
      skillsEyebrow: "CAPABILITIES",
      skillsTitle: "Technical stack and operational skills.",
      skillsIntro: "Tools and areas where I have hands-on experience in corporate environments.",
      skillM365Title: "Administration and collaboration",
      skillM365_1: "Admin Center, licensing, groups and permissions",
      skillM365_3: "Corporate signatures and operational governance",
      skillIdentityTitle: "Entra ID and user lifecycle",
      skillIdentity_1: "Joiners, movers and leavers",
      skillIdentity_3: "Onboarding and offboarding",
      skillIdentity_4: "Access traceability and operational control",
      skillItsmTitle: "Jira Service Management",
      skillItsm_1: "Tickets, triage and follow-up",
      skillItsm_2: "Forms, workflows, boards and permissions",
      skillItsm_3: "SOPs, runbooks and knowledge base",
      skillItsm_4: "Inventory and operational support in Odoo",
      skillEndpointTitle: "L2/L3 support and devices",
      skillEndpoint_2: "Hardware, printers and LAN/Wi-Fi connectivity",
      skillEndpoint_4: "Baselines, drivers and advanced troubleshooting",
      skillSecurityTitle: "Security operations",
      skillSecurity_2: "MFA, best practices and incident response",
      skillSecurity_3: "Documentation support for ISO 27001 / 9001",
      basicLevel: "basic",
      skillDevicesTitle: "Hardware and integrations",
      skillDevices_1: "ZKTeco biometric readers",
      skillDevices_2: "GS1-128 / UDI industrial scanners",
      skillDevices_3: "Firmware, flashing and technical documentation",
      skillDevices_4: "Server and Odoo integrations",
      experienceEyebrow: "CAREER",
      experienceTitle: "Professional experience.",
      experienceIntro: "Background in corporate support, platform operations, hardware and end-user assistance.",
      companyContextTitle: "Vippinn + Aerobyte context",
      companyContextText: "Sister companies with different service lines: Vippinn focused on consulting and professional services; Aerobyte focused on hardware, software and customer support. My role covered distinct needs across the same business ecosystem.",
      recentRole: "RECENT EXPERIENCE",
      vippinnRole: "IT Operations / Systems Administrator · Vippinn",
      vippinnMeta: "Jan 2025 – Apr 2026 · Córdoba, Argentina",
      vippinnService: "Consulting",
      vippinnSummary: "End-to-end owner of IT operations and main point of contact for more than 100 employees, ensuring continuity, daily support and vendor coordination.",
      vippinn_1: "Microsoft 365 and Entra ID administration: users, licensing, MFA, Exchange Online, Teams, SharePoint and OneDrive.",
      vippinn_2: "ITSM operations in Jira/JSM: forms, workflows, boards, permissions, triage, documentation and continuous improvement.",
      vippinn_3: "L2/L3 support for Windows/macOS endpoints, hardware, software, printers, connectivity and remote assistance.",
      vippinn_4: "Security operations with Wazuh, Tailscale, KeePassXC, MFA and incident follow-up.",
      vippinn_5: "Integrations with Odoo, biometrics, GS1-128/UDI scanners, corporate signatures and endpoint standardization.",
      vippinn_6: "Documentation and evidence support for ISO 27001 / 9001 processes.",
      sisterCompany: "SISTER COMPANY",
      aerobyteRole: "IT Support / Technical Operations · Aerobyte",
      aerobyteMeta: "Jan 2025 – Apr 2026 · Córdoba, Argentina",
      aerobyteService: "Hardware / Software",
      aerobyteSummary: "Technical support for internal teams and customers, focused on diagnosis, resolution, ticket follow-up and service continuity.",
      aerobyte_1: "Incidents and requests involving endpoints, printers, networks and connectivity.",
      aerobyte_2: "Support for Microsoft 365, Jira, Odoo, inventory and email configuration.",
      aerobyte_3: "Implementation and support of biometric readers and barcode scanners.",
      freelanceRole: "Independent IT Support",
      freelanceMeta: "Jan 2022 – Present · Córdoba, Argentina",
      freelanceSummary: "Installation, maintenance and support for individual users and small environments, including Windows, macOS and Linux, remote assistance, migrations, hardware repair and data recovery.",
      earlierTitle: "Earlier experience",
      newBoundRole: "Sales Development Representative · remote",
      oneClickRole: "Technical support specialist for the Apple ecosystem",
      armyName: "Army General Accounting Office",
      armyRole: "Support for users, computers, printers and LAN/Wi-Fi networks",
      pascalRole: "Multi-brand support, ticketing, networking and ransomware containment",
      highlightsEyebrow: "IMPLEMENTATIONS",
      highlightsTitle: "Selected technical projects.",
      highlightsIntro: "Work where I combined administration, support, testing and documentation.",
      highlight1Title: "Migration from Google Workspace",
      highlight1Text: "Account assessment, user creation, licensing and access validation in Outlook and Teams to support an orderly transition.",
      userAdoption: "User adoption",
      accessControl: "ACCESS CONTROL",
      highlight2Title: "Multi-site biometrics",
      highlight2Text: "Installation, configuration and documentation of 15+ biometric readers, integrated with a management platform to centralize users and tracking.",
      integration: "Integration",
      specialDevices: "SPECIAL DEVICES",
      highlight3Title: "GS1-128 / UDI industrial scanners",
      highlight3Text: "Technical testing, firmware updates and flashing/configuration guides to improve internal autonomy and reduce vendor dependency.",
      documentation: "Documentation",
      educationEyebrow: "EDUCATION",
      educationTitle: "Courses and continuous learning.",
      m365CourseTitle: "Microsoft 365 Administrator · Advanced",
      m365CourseText: "Training in user provisioning, identity synchronization, Exchange Online, Teams, SharePoint, OneDrive, security, compliance, migrations and monitoring.",
      viewCertificate: "View certificate",
      certificatePreviewLabel: "Enlarge Microsoft 365 certificate",
      certificateAlt: "Gabriel Ivan Ferreyra's Microsoft 365 Administrator certification",
      programmingTitle: "Programming · Udemy",
      programmingText: "HTML, CSS, JavaScript and Python applied to practice and web projects.",
      repairTitle: "PC assembly and repair",
      repairText: "I.P.E.M. No. 39 Don Bosco · Córdoba Ministry of Education and UNC.",
      secondaryTitle: "Secondary education",
      secondaryText: "I.P.E.M. No. 39 Don Bosco · Economics track.",
      projectsEyebrow: "PERSONAL WORK",
      projectsTitle: "Web projects.",
      projectsIntro: "Personal projects where I apply structure, responsive design and frontend development.",
      familyBusiness: "FAMILY BUSINESS",
      luisaText: "Website for a pastry business, including a product catalog, service information and direct contact through WhatsApp and Instagram.",
      portfolioProjectTitle: "Bilingual professional portfolio",
      portfolioProjectText: "Designed and developed with vanilla HTML, CSS and JavaScript, featuring neumorphism, accessibility, SEO, responsive behavior and an ES/EN interface.",
      viewCode: "View code",
      contactEyebrow: "CONTACT",
      contactTitle: "Let's discuss the next opportunity.",
      contactText: "Available for IT Support, Microsoft 365 Administration, Systems Administration and IT Operations roles.",
      workModes: "Remote · hybrid · on-site",
      sendEmail: "Send email",
      footerRole: "IT Operations · Microsoft 365 · Corporate IT Support",
      lastUpdate: "Last updated: August 2026",
      certificateDialogTitle: "Certification and training",
      closeCertificateLabel: "Close certificate"
    }
  };

  const selectors = {
    text: "[data-i18n]",
    html: "[data-i18n-html]",
    aria: "[data-i18n-aria-label]",
    alt: "[data-i18n-alt]"
  };

  const languageButtons = [...document.querySelectorAll("[data-language]")];
  const menuButton = document.getElementById("menu-button");
  const primaryNavigation = document.getElementById("primary-navigation");
  const metaDescription = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  const certificateDialog = document.getElementById("certificate-dialog");
  const openCertificateButtons = [
    document.getElementById("open-certificate"),
    document.getElementById("open-certificate-preview")
  ].filter(Boolean);
  const closeCertificateButton = document.getElementById("close-certificate");

  let currentLanguage = "es";

  function getPreferredLanguage() {
    try {
      const saved = localStorage.getItem("portfolio-language");
      if (saved === "es" || saved === "en") return saved;
    } catch (error) {
      console.warn("Language preference could not be read.", error);
    }
    return navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
  }

  function translateElements(selector, attribute, language) {
    document.querySelectorAll(selector).forEach((element) => {
      const key = element.dataset[attribute];
      const value = translations[language][key];
      if (typeof value !== "string") return;

      if (attribute === "i18nHtml") element.innerHTML = value;
      else if (attribute === "i18nAriaLabel") element.setAttribute("aria-label", value);
      else if (attribute === "i18nAlt") element.setAttribute("alt", value);
      else element.textContent = value;
    });
  }

  function setLanguage(language) {
    if (!translations[language]) return;
    currentLanguage = language;
    document.documentElement.lang = language;
    try {
      localStorage.setItem("portfolio-language", language);
    } catch (error) {
      console.warn("Language preference could not be saved.", error);
    }

    translateElements(selectors.text, "i18n", language);
    translateElements(selectors.html, "i18nHtml", language);
    translateElements(selectors.aria, "i18nAriaLabel", language);
    translateElements(selectors.alt, "i18nAlt", language);

    document.title = translations[language].metaTitle;
    metaDescription?.setAttribute("content", translations[language].metaDescription);
    ogTitle?.setAttribute("content", translations[language].metaTitle);
    ogDescription?.setAttribute("content", translations[language].metaDescription);
    ogLocale?.setAttribute("content", language === "es" ? "es_AR" : "en_US");
    twitterTitle?.setAttribute("content", translations[language].metaTitle);
    twitterDescription?.setAttribute("content", translations[language].metaDescription);

    languageButtons.forEach((button) => {
      const isActive = button.dataset.language === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    updateMenuLabel();
  }

  function isMenuOpen() {
    return menuButton?.getAttribute("aria-expanded") === "true";
  }

  function updateMenuLabel() {
    if (!menuButton) return;
    const key = isMenuOpen() ? "menuCloseLabel" : "menuOpenLabel";
    menuButton.setAttribute("aria-label", translations[currentLanguage][key]);
  }

  function setMenu(open) {
    if (!menuButton || !primaryNavigation) return;
    menuButton.setAttribute("aria-expanded", String(open));
    primaryNavigation.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open && window.innerWidth <= 1080);
    updateMenuLabel();
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  menuButton?.addEventListener("click", () => setMenu(!isMenuOpen()));

  primaryNavigation?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isMenuOpen()) setMenu(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1080) setMenu(false);
  });

  openCertificateButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (typeof certificateDialog?.showModal === "function") certificateDialog.showModal();
    });
  });

  closeCertificateButton?.addEventListener("click", () => certificateDialog?.close());

  certificateDialog?.addEventListener("click", (event) => {
    const rect = certificateDialog.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) certificateDialog.close();
  });

  const revealElements = [...document.querySelectorAll(".reveal")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    revealElements.forEach((element) => revealObserver.observe(element));
  }

  const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${visible.target.id}`;
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.25, 0.5] });

    sections.forEach((section) => sectionObserver.observe(section));
  }

  const progressBar = document.getElementById("scroll-progress-bar");
  function updateScrollProgress() {
    if (!progressBar) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  updateScrollProgress();

  const yearElement = document.getElementById("current-year");
  if (yearElement) yearElement.textContent = String(new Date().getFullYear());

  setLanguage(getPreferredLanguage());
})();
