export type Language = "en" | "tr" | "de" | "sr" | "fr" | "it" | "ar" | "he";

export interface TranslationContent {
  nav: {
    about: string;
    expertise: string;
    aiSystems: string;
    work: string;
    experience: string;
    principles: string;
    contact: string;
  };
  hero: {
    headline: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statusLabel: string;
    infraCard: {
      client: string;
      middleware: string;
      inference: string;
      systems: string;
    };
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    stats: {
      years: string;
      yearsDesc: string;
      fullstack: string;
      fullstackDesc: string;
      aiLab: string;
      aiLabDesc: string;
      remote: string;
      remoteDesc: string;
    };
  };
  expertise: {
    title: string;
    subtitle: string;
    cards: readonly {
      title: string;
      description: string;
      tags: readonly string[];
      icon: string;
    }[];
  };
  aiSystems: {
    title: string;
    subtitle: string;
    pipeline: {
      data: string;
      retrieval: string;
      reasoning: string;
      tools: string;
      verification: string;
      experience: string;
    };
    sections: readonly {
      title: string;
      description: string;
    }[];
  };
  work: {
    title: string;
    subtitle: string;
    projects: readonly {
      title: string;
      type: string;
      problem: string;
      solution: string;
      technologies: string;
      result: string;
    }[];
    viewDetails: string;
    closeDetails: string;
  };
  experience: {
    title: string;
    roles: readonly {
      company: string;
      role: string;
      period: string;
      description: string;
    }[];
  };
  principles: {
    title: string;
    items: readonly { text: string; icon: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    linkedin: string;
    email: string;
    emailPlaceholder: string;
  };
  footer: {
    name: string;
    tagline: string;
    built: string;
    copyright: string;
    linkedin: string;
  };
  languageSwitcher: {
    en: string;
    tr: string;
    de: string;
    sr: string;
    fr: string;
    it: string;
    ar: string;
    he: string;
  };
}

export const en = {
  nav: {
    about: "About",
    expertise: "Capabilities",
    aiSystems: "AI Systems",
    work: "Work",
    experience: "Experience",
    principles: "Principles",
    contact: "Contact",
  },
  hero: {
    headline:
      "I build digital products and intelligent systems where software, data, and infrastructure meet.",
    subtitle:
      "Senior full-stack engineer and AI systems builder. I turn ideas into working products and complex infrastructure into reliable experiences. Building remotely.",
    ctaPrimary: "Explore the Work",
    ctaSecondary: "Start a Conversation",
    statusLabel: "Available for collaboration",
    infraCard: {
      client: "Development Environment",
      middleware: "API Layer",
      inference: "Inference Engine",
      systems: "RAG Â· Tools Â· Applications",
    },
  },
  about: {
    title: "About",
    paragraph1:
      "I am a senior full-stack engineer building web applications, developer tools, and AI systems. I started building web applications and digital products through professional software work and freelance projects, and have since grown into full-stack product engineering and AI systems design.",
    paragraph2:
      "I build products end to end. From data models and API design to the interfaces users actually touch. I work across TypeScript, React, Node.js, Laravel, and mobile platforms. I also design and operate AI inference infrastructure â€” local and cloud-agnostic systems for retrieval, tool calling, and agent workflows.",
    paragraph3:
      "I currently work remotely as a Full Stack JavaScript Developer at nmi.com and am the founder of innodigi.net. I run a personal GPU-powered AI laboratory where I experiment with inference optimization, RAG pipelines, and intelligent agent systems.",
    stats: {
      years: "Senior",
      yearsDesc: "Full-Stack Engineer",
      fullstack: "Full-Stack",
      fullstackDesc: "Product Engineering",
      aiLab: "GPU-Powered",
      aiLabDesc: "AI Laboratory",
      remote: "Remote",
      remoteDesc: "International Teams",
    },
  },
  expertise: {
    title: "Capabilities",
    subtitle:
      "From product architecture to inference infrastructure â€” the systems I build and the problems I solve.",
    cards: [
      {
        title: "Full-Stack Product Engineering",
        description:
          "Complete web products from data layer to deployed interface. TypeScript, React, Next.js, Node.js, NestJS, Laravel, GraphQL, and REST APIs.",
        tags: [
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "NestJS",
          "Laravel",
          "GraphQL",
        ],
        icon: "code",
      },
      {
        title: "AI Inference & Agent Systems",
        description:
          "Model-agnostic inference infrastructure, tool calling frameworks, agent workflows with verification loops, and GPU-optimized local deployment.",
        tags: [
          "Inference APIs",
          "Tool Calling",
          "Agent Loops",
          "GPU Optimization",
        ],
        icon: "cpu",
      },
      {
        title: "RAG & Knowledge Systems",
        description:
          "Retrieval-augmented generation pipelines, vector databases, document processing, web search integration, and grounded AI responses with source attribution.",
        tags: [
          "Vector Stores",
          "Document Processing",
          "Web Search",
          "Grounded Answers",
        ],
        icon: "database",
      },
      {
        title: "Developer Tools & Infrastructure",
        description:
          "Developer tooling, Docker orchestration, CI/CD pipelines, GPU-aware resource management, and remote server infrastructure for AI workloads.",
        tags: ["Docker", "CI/CD", "GPU Orchestration", "Server Management"],
        icon: "terminal",
      },
      {
        title: "Mobile Applications",
        description:
          "Cross-platform mobile products with React Native and Expo. API-driven architectures, authentication, real-time features, and reusable design systems.",
        tags: ["React Native", "Expo", "TypeScript", "API-Driven"],
        icon: "smartphone",
      },
      {
        title: "Creative AI Infrastructure",
        description:
          "Orchestrated workflows for image, video, audio, and narration generation. Docker-based service orchestration and modular AI pipeline design.",
        tags: ["Media Pipelines", "Service Orchestration", "Modular Design"],
        icon: "server",
      },
    ],
  },
  aiSystems: {
    title: "AI Systems",
    subtitle:
      "I design artificial intelligence not as a chat layer, but as a decision-making and production mechanism embedded into the product itself.",
    pipeline: {
      data: "Data",
      retrieval: "Retrieval",
      reasoning: "Reasoning",
      tools: "Tools",
      verification: "Verification",
      experience: "User Experience",
    },
    sections: [
      {
        title: "Inference Infrastructure",
        description:
          "Local and cloud-agnostic inference systems. Multi-GPU tensor parallelism, optimized model loading, and standard inference API interfaces that let applications switch between providers without code changes.",
      },
      {
        title: "Retrieval-Augmented Generation",
        description:
          "RAG pipelines that connect applications to their own knowledge bases. Vector embeddings, document chunking strategies, hybrid search, and source-aware responses that ground AI output in verified data.",
      },
      {
        title: "Tool Calling & Agent Workflows",
        description:
          "AI systems that can call tools, execute functions, search the web, and reason through multi-step tasks. Verification loops that check outputs before presenting them to users.",
      },
      {
        title: "Evaluation & Observability",
        description:
          "Metrics, tracing, and evaluation frameworks for AI systems. Understanding latency, accuracy, cost, and drift â€” because an AI system you cannot measure is a system you cannot trust.",
      },
    ],
  },
  work: {
    title: "Selected Work",
    subtitle:
      "Products, systems, and infrastructure â€” from concept to production.",
    projects: [
      {
        title: "Full-Stack Web Products",
        type: "Client Work",
        problem:
          "Clients need reliable, scalable web applications that work across devices and serve real business needs â€” not demos.",
        solution:
          "Built complete web products with React and TypeScript frontends, Node.js and Laravel backends, GraphQL and REST APIs, PostgreSQL databases, authentication systems, and data-driven interfaces.",
        technologies:
          "React Â· TypeScript Â· Node.js Â· Laravel Â· GraphQL Â· PostgreSQL",
        result:
          "Production-grade web applications with scalable architecture and maintainable codebases.",
      },
      {
        title: "AI Inference Laboratory",
        type: "Personal Lab",
        problem:
          'Running AI inference locally requires careful orchestration of hardware, software, and network layers â€” most tutorials stop at "hello world".',
        solution:
          "Built a dual-GPU inference server with standard inference APIs, model-agnostic routing, GPU-aware resource management, and Docker-based service orchestration. Applications connect seamlessly whether the model runs locally or in the cloud.",
        technologies:
          "CUDA Â· Docker Â· GPU Orchestration Â· Inference APIs Â· Model Routing",
        result:
          "A production-ready local inference infrastructure supporting multiple models and concurrent workloads.",
      },
      {
        title: "RAG & Knowledge Applications",
        type: "Personal Lab",
        problem:
          "AI systems need to answer from verified sources, not generate plausible fiction. Knowledge grounding is the difference between a toy and a tool.",
        solution:
          "Designed RAG pipelines with vector databases, document processing workflows, web search integration, and hybrid retrieval strategies. Applications produce grounded, source-attributed responses.",
        technologies:
          "Vector Databases Â· Document Processing Â· Web Search Â· Hybrid Retrieval",
        result:
          "Knowledge-grounded AI applications with source attribution and verifiable outputs.",
      },
      {
        title: "Creative AI Infrastructure",
        type: "Personal Lab",
        problem:
          "Creative AI workflows span image, video, audio, and narration â€” each with its own tools, formats, and resource requirements.",
        solution:
          "Orchestrated a local creative AI studio with ComfyUI-style workflows, Docker service management, GPU resource coordination, and modular pipeline design. Everything runs on a single GPU server.",
        technologies:
          "ComfyUI Â· Docker Â· GPU Orchestration Â· Media Pipelines",
        result:
          "A unified local creative studio for multi-modal AI workflows without cloud dependencies.",
      },
      {
        title: "Mobile Applications",
        type: "Private Project",
        problem:
          "Users need reliable mobile experiences with real-time features, authentication, and social interaction â€” built with modern tooling.",
        solution:
          "Developed cross-platform mobile applications with React Native and Expo, backed by GraphQL APIs, PostgreSQL databases, authentication systems, and real-time messaging.",
        technologies: "React Native Â· Expo Â· GraphQL Â· Apollo Â· TypeScript",
        result:
          "Production mobile applications with real-time features and cross-platform consistency.",
      },
      {
        title: "Developer Tools",
        type: "Personal Lab",
        problem:
          "Engineering teams need tools that reduce friction â€” from local development environments to automated testing and deployment pipelines.",
        solution:
          "Built developer tooling including local AI-powered coding assistants, automated engineering loops, CI/CD pipeline design, and infrastructure-as-code workflows.",
        technologies:
          "TypeScript Â· Docker Â· CI/CD Â· AI-Assisted Development",
        result:
          "Developer tools that reduce friction and accelerate the path from idea to deployment.",
      },
    ],
    viewDetails: "View Details",
    closeDetails: "Close",
  },
  experience: {
    title: "Experience",
    roles: [
      {
        company: "NMI",
        role: "Full Stack JavaScript Developer",
        period: "Present",
        description:
          "Remote full-stack engineering with JavaScript and TypeScript. Product development, API design, and system architecture.",
      },
      {
        company: "innodigi.net",
        role: "Founder",
        period: "Present",
        description:
          "Founded and operate a digital product studio. Full-stack development, AI systems, and product engineering.",
      },
      {
        company: "WESROM Corporation",
        role: "JavaScript Developer",
        period: "Past",
        description:
          "JavaScript development for web applications. Frontend and backend engineering.",
      },
      {
        company: "GOBITO Digital Solutions",
        role: "Frontend Developer",
        period: "Past",
        description:
          "Frontend engineering with modern frameworks. Component architecture and user interfaces.",
      },
      {
        company: "Upwork",
        role: "Part-Time Developer",
        period: "Past",
        description:
          "Freelance engineering across web, mobile, and AI domains. Diverse technology stack.",
      },
      {
        company: "Boranka YazÄ±lÄ±m & Freelancer",
        role: "Software Developer",
        period: "2015â€“2020",
        description:
          "Started building web applications and digital products through professional software work and freelance projects.",
      },
    ],
  },
  principles: {
    title: "Engineering Principles",
    items: [
      { text: "Build systems that can be verified", icon: "rocket" },
      { text: "Make complexity observable", icon: "eye" },
      { text: "Design the loop, not only the prompt", icon: "refresh-cw" },
      {
        text: "Keep interfaces simple and infrastructure honest",
        icon: "minimize-2",
      },
      { text: "Turn experiments into reusable systems", icon: "brain" },
      { text: "Ship software that works", icon: "check-circle" },
    ],
  },
  contact: {
    title: "Let's Build Something",
    subtitle:
      "I collaborate on full-stack products, AI systems, and engineering challenges that require deep technical thinking. If you have a project that needs someone who ships, let's talk.",
    linkedin: "LinkedIn",
    email: "Get in Touch",
    emailPlaceholder: "hello@serkanakman.dev",
  },
  footer: {
    name: "Serkan Akman",
    tagline: "Full-Stack Engineering Â· AI Systems Â· Inference Infrastructure",
    built: "Built by innodigi.",
    copyright: "Â© {year} Serkan Akman. All rights reserved.",
    linkedin: "LinkedIn",
  },
  languageSwitcher: {
    en: "Ä°ngilizce",
    tr: "TÃ¼rkÃ§e",
    de: "Almanca",
    sr: "SÄ±rpÃ§a",
    fr: "FransÄ±zca",
    it: "Ä°talyanca",
    ar: "ArapÃ§a",
    he: "Ä°branice",
  },
} as const;

export const tr = {
  nav: {
    about: "HakkÄ±mda",
    expertise: "Yetkinlikler",
    aiSystems: "AI Sistemleri",
    work: "Projeler",
    experience: "Deneyim",
    principles: "Ä°lkeler",
    contact: "Ä°letiÅŸim",
  },
  hero: {
    headline:
      "YazÄ±lÄ±mÄ±n, verinin ve altyapÄ±nÄ±n kesiÅŸtiÄŸi noktada dijital Ã¼rÃ¼nler ve akÄ±llÄ± sistemler geliÅŸtiriyorum.",
    subtitle:
      "KÄ±demli full-stack mÃ¼hendisi ve AI sistemleri geliÅŸtiricisiyim. Fikirleri Ã§alÄ±ÅŸan Ã¼rÃ¼nlere, karmaÅŸÄ±k altyapÄ±larÄ± ise gÃ¼venilir deneyimlere dÃ¶nÃ¼ÅŸtÃ¼rÃ¼yorum. Uzaktan Ã§alÄ±ÅŸÄ±yorum.",
    ctaPrimary: "Projeleri Ä°ncele",
    ctaSecondary: "Ä°letiÅŸime GeÃ§",
    statusLabel: "Ä°ÅŸ birliklerine aÃ§Ä±ÄŸÄ±m",
    infraCard: {
      client: "GeliÅŸtirme OrtamÄ±",
      middleware: "API KatmanÄ±",
      inference: "Ã‡Ä±karÄ±m Motoru",
      systems: "RAG Â· AraÃ§lar Â· Uygulamalar",
    },
  },
  about: {
    title: "HakkÄ±mda",
    paragraph1:
      "Web uygulamalarÄ±, geliÅŸtirici araÃ§larÄ± ve AI sistemleri geliÅŸtiren kÄ±demli bir full-stack mÃ¼hendisim. YazÄ±lÄ±m yolculuÄŸuma profesyonel Ã§alÄ±ÅŸmalar ve freelance projelerle baÅŸladÄ±m; bugÃ¼n odaÄŸÄ±m, uÃ§tan uca Ã¼rÃ¼n mÃ¼hendisliÄŸi ve gÃ¼venilir AI sistemleri tasarlamak.",
    paragraph2:
      "ÃœrÃ¼nleri uÃ§tan uca geliÅŸtiririm: veri modellerinden ve API tasarÄ±mÄ±ndan, kullanÄ±cÄ±larÄ±n her gÃ¼n etkileÅŸim kurduÄŸu arayÃ¼zlere kadar. TypeScript, React, Node.js, Laravel ve mobil platformlarla Ã§alÄ±ÅŸÄ±yor; bilgi eriÅŸimi, araÃ§ kullanÄ±mÄ± ve akÄ±llÄ± iÅŸ akÄ±ÅŸlarÄ± iÃ§in yerel ve buluttan baÄŸÄ±msÄ±z AI Ã§Ä±karÄ±m altyapÄ±larÄ± tasarlÄ±yorum.",
    paragraph3:
      "Åžu anda nmi.com'de uzaktan Full Stack JavaScript Developer olarak Ã§alÄ±ÅŸÄ±yor, aynÄ± zamanda innodigi.net'i yÃ¶netiyorum. KiÅŸisel GPU destekli AI laboratuvarÄ±mda Ã§Ä±karÄ±m optimizasyonu, RAG pipeline'larÄ± ve akÄ±llÄ± agent sistemleri Ã¼zerine Ã§alÄ±ÅŸÄ±yorum.",
    stats: {
      years: "Senior",
      yearsDesc: "Full-Stack MÃ¼hendis",
      fullstack: "Full-Stack",
      fullstackDesc: "ÃœrÃ¼n MÃ¼hendisliÄŸi",
      aiLab: "GPU Destekli",
      aiLabDesc: "AI LaboratuvarÄ±",
      remote: "Uzaktan",
      remoteDesc: "UluslararasÄ± TakÄ±mlar",
    },
  },
  expertise: {
    title: "Yetkinlikler",
    subtitle:
      "ÃœrÃ¼n mimarisinden Ã§Ä±karÄ±m altyapÄ±sÄ±na â€” geliÅŸtirdiÄŸim sistemler ve Ã§Ã¶zdÃ¼ÄŸÃ¼m gerÃ§ek problemler.",
    cards: [
      {
        title: "Full-Stack ÃœrÃ¼n MÃ¼hendisliÄŸi",
        description:
          "Veri katmanÄ±ndan daÄŸÄ±tÄ±lmÄ±ÅŸ arayÃ¼ze kadar uÃ§tan uca web Ã¼rÃ¼nleri. TypeScript, React, Next.js, Node.js, NestJS, Laravel, GraphQL ve REST API'leri.",
        tags: [
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "NestJS",
          "Laravel",
          "GraphQL",
        ],
        icon: "code",
      },
      {
        title: "AI Ã‡Ä±karÄ±m ve Agent Sistemleri",
        description:
          "Model-agnostik Ã§Ä±karÄ±m altyapÄ±sÄ±, araÃ§ Ã§aÄŸÄ±rma framework'leri, doÄŸrulama dÃ¶ngÃ¼lÃ¼ agent iÅŸ akÄ±ÅŸlarÄ± ve GPU optimize yerel daÄŸÄ±tÄ±m.",
        tags: [
          "Ã‡Ä±karÄ±m API'leri",
          "AraÃ§ Ã‡aÄŸÄ±rma",
          "Agent DÃ¶ngÃ¼leri",
          "GPU Optimizasyonu",
        ],
        icon: "cpu",
      },
      {
        title: "RAG ve Bilgi Sistemleri",
        description:
          "Bilgi eriÅŸimiyle zenginleÅŸtirilmiÅŸ Ã¼retim pipeline'larÄ±, vektÃ¶r veritabanlarÄ±, belge iÅŸleme, web aramasÄ± entegrasyonu ve kaynaklara dayalÄ± AI yanÄ±tlarÄ±.",
        tags: [
          "VektÃ¶r Depolar",
          "Belge Ä°ÅŸleme",
          "Web AramasÄ±",
          "Kaynaklara DayalÄ± YanÄ±tlar",
        ],
        icon: "database",
      },
      {
        title: "GeliÅŸtirici AraÃ§larÄ± ve AltyapÄ±",
        description:
          "GeliÅŸtirici araÃ§larÄ±, Docker orkestrasyonu, CI/CD pipeline'larÄ±, GPU-farkÄ±ndalÄ±k kaynak yÃ¶netimi ve AI iÅŸ yÃ¼kleri iÃ§in uzaktan sunucu altyapÄ±sÄ±.",
        tags: ["Docker", "CI/CD", "GPU Orkestrasyonu", "Sunucu YÃ¶netimi"],
        icon: "terminal",
      },
      {
        title: "Mobil Uygulamalar",
        description:
          "React Native ve Expo ile Ã§apraz platform mobil Ã¼rÃ¼nler. API odaklÄ± mimariler, kimlik doÄŸrulama, gerÃ§ek zamanlÄ± Ã¶zellikler ve yeniden kullanÄ±labilir tasarÄ±m sistemleri.",
        tags: ["React Native", "Expo", "TypeScript", "API OdaklÄ±"],
        icon: "smartphone",
      },
      {
        title: "YaratÄ±cÄ± AI AltyapÄ±sÄ±",
        description:
          "GÃ¶rÃ¼ntÃ¼, video, ses ve anlatÄ±m Ã¼retimi iÃ§in orkestra edilmiÅŸ iÅŸ akÄ±ÅŸlarÄ±. Docker tabanlÄ± servis orkestrasyonu ve modÃ¼ler AI pipeline tasarÄ±mÄ±.",
        tags: [
          "Medya Pipeline'larÄ±",
          "Servis Orkestrasyonu",
          "ModÃ¼ler TasarÄ±m",
        ],
        icon: "server",
      },
    ],
  },
  aiSystems: {
    title: "AI Sistemleri",
    subtitle:
      "Yapay zekÃ¢yÄ± yalnÄ±zca bir sohbet katmanÄ± olarak deÄŸil, Ã¼rÃ¼nÃ¼n karar alma ve Ã¼retim mekanizmasÄ±na doÄŸrudan entegre olan bir sistem olarak tasarlÄ±yorum.",
    pipeline: {
      data: "Veri",
      retrieval: "Geri Ã‡aÄŸÄ±rma",
      reasoning: "Muhakeme",
      tools: "AraÃ§lar",
      verification: "DoÄŸrulama",
      experience: "KullanÄ±cÄ± Deneyimi",
    },
    sections: [
      {
        title: "Ã‡Ä±karÄ±m AltyapÄ±sÄ±",
        description:
          "Yerel ve buluttan baÄŸÄ±msÄ±z Ã§Ä±karÄ±m sistemleri. Ã‡oklu GPU tensor paralelliÄŸi, optimize model yÃ¼kleme ve standart Ã§Ä±karÄ±m API'leri sayesinde uygulamalar kod deÄŸiÅŸikliÄŸi olmadan farklÄ± saÄŸlayÄ±cÄ±lar arasÄ±nda geÃ§iÅŸ yapabilir.",
      },
      {
        title: "Geri Ã‡aÄŸÄ±rma Destekli Ãœretim",
        description:
          "UygulamalarÄ± kendi bilgi tabanlarÄ±na baÄŸlayan RAG pipeline'larÄ±. VektÃ¶r gÃ¶mme, belge parÃ§alama stratejileri, hibrit arama ve doÄŸrulanmÄ±ÅŸ veride kÃ¶klenmiÅŸ AI Ã§Ä±ktÄ±larÄ±.",
      },
      {
        title: "AraÃ§ Ã‡aÄŸÄ±rma ve Agent Ä°ÅŸ AkÄ±ÅŸlarÄ±",
        description:
          "AraÃ§ Ã§aÄŸÄ±rabilen, fonksiyon yÃ¼rÃ¼tebilen, web'de arayabilen ve Ã§ok adÄ±mlÄ± gÃ¶revler Ã¼zerinden akÄ±l yÃ¼rÃ¼tebilen AI sistemleri. KullanÄ±cÄ±ya sunmadan Ã¶nce Ã§Ä±ktÄ±larÄ± kontrol eden doÄŸrulama dÃ¶ngÃ¼leri.",
      },
      {
        title: "DeÄŸerlendirme ve GÃ¶zlemlenebilirlik",
        description:
          "AI sistemleri iÃ§in metrikler, izleme ve deÄŸerlendirme framework'leri. Gecikme, doÄŸruluk, maliyet ve sapmayÄ± anlamak â€” Ã§Ã¼nkÃ¼ Ã¶lÃ§emediÄŸiniz bir AI sistemine gÃ¼venemezsiniz.",
      },
    ],
  },
  work: {
    title: "SeÃ§ili Ã‡alÄ±ÅŸmalar",
    subtitle: "ÃœrÃ¼nler, sistemler ve altyapÄ± â€” fikirden Ã¼retime.",
    projects: [
      {
        title: "Full-Stack Web ÃœrÃ¼nleri",
        type: "MÃ¼ÅŸteri Projesi",
        problem:
          "MÃ¼ÅŸteriler, cihazlar arasÄ±nda Ã§alÄ±ÅŸan ve gerÃ§ek iÅŸ ihtiyaÃ§larÄ±na hitap eden gÃ¼venilir, Ã¶lÃ§eklenebilir web uygulamalarÄ± gerekiyor â€” demolar deÄŸil.",
        solution:
          "React ve TypeScript Ã¶n uÃ§lar, Node.js ve Laravel arka uÃ§lar, GraphQL ve REST API'leri, PostgreSQL veritabanlarÄ±, kimlik doÄŸrulama sistemleri ve veri odaklÄ± arayÃ¼zlerle tam web Ã¼rÃ¼nleri inÅŸa ettim.",
        technologies:
          "React Â· TypeScript Â· Node.js Â· Laravel Â· GraphQL Â· PostgreSQL",
        result:
          "Ã–lÃ§eklenebilir mimari ve sÃ¼rdÃ¼rÃ¼lebilir kod tabanÄ±na sahip Ã¼retim dÃ¼zeyi web uygulamalarÄ±.",
      },
      {
        title: "AI Ã‡Ä±karÄ±m LaboratuvarÄ±",
        type: "KiÅŸisel Laboratuvar",
        problem:
          'AI Ã§Ä±karÄ±mÄ±nÄ± yerel olarak Ã§alÄ±ÅŸtÄ±rmak donanÄ±m, yazÄ±lÄ±m ve aÄŸ katmanlarÄ±nÄ±n dikkatli orkestrasyonunu gerektirir â€” Ã§oÄŸu kÄ±lavuz "merhaba dÃ¼nya"da durur.',
        solution:
          "Standart Ã§Ä±karÄ±m API'leriyle, model-agnostik yÃ¶nlendirme, GPU-farkÄ±ndalÄ±k kaynak yÃ¶netimi ve Docker tabanlÄ± servis orkestrasyonu iÃ§eren Ã§ift GPU'lu bir Ã§Ä±karÄ±m sunucusu kurdum. Uygulamalar model yerelde mi yoksa bulutta mÄ± Ã§alÄ±ÅŸÄ±r farketmeden sorunsuz baÄŸlanÄ±r.",
        technologies:
          "CUDA Â· Docker Â· GPU Orkestrasyonu Â· Ã‡Ä±karÄ±m API'leri Â· Model YÃ¶nlendirme",
        result:
          "Birden fazla model ve eÅŸzamanlÄ± iÅŸ yÃ¼klerini destekleyen Ã¼retim hazÄ±r yerel Ã§Ä±karÄ±m altyapÄ±sÄ±.",
      },
      {
        title: "RAG ve Bilgi UygulamalarÄ±",
        type: "KiÅŸisel Laboratuvar",
        problem:
          "AI sistemleri kulaÄŸa makul gelen kurgu Ã¼retmek yerine doÄŸrulanmÄ±ÅŸ kaynaklara dayanarak yanÄ±t vermelidir. GÃ¼venilir bilgi temeli, oyuncak ile gerÃ§ek araÃ§ arasÄ±ndaki farktÄ±r.",
        solution:
          "VektÃ¶r veritabanlarÄ±, belge iÅŸleme iÅŸ akÄ±ÅŸlarÄ±, web aramasÄ± entegrasyonu ve hibrit geri Ã§aÄŸÄ±rma stratejileri ile RAG pipeline'larÄ± tasarladÄ±m. Uygulamalar kaynak nitelikli, doÄŸrulanabilir yanÄ±tlar Ã¼retir.",
        technologies:
          "VektÃ¶r VeritabanlarÄ± Â· Belge Ä°ÅŸleme Â· Web AramasÄ± Â· Hibrit Geri Ã‡aÄŸÄ±rma",
        result:
          "Kaynak nitelendirmeli ve doÄŸrulanabilir Ã§Ä±ktÄ±larÄ± olan bilgi-kÃ¶klenmiÅŸ AI uygulamalarÄ±.",
      },
      {
        title: "YaratÄ±cÄ± AI AltyapÄ±sÄ±",
        type: "KiÅŸisel Laboratuvar",
        problem:
          "YaratÄ±cÄ± AI iÅŸ akÄ±ÅŸlarÄ± gÃ¶rÃ¼ntÃ¼, video, ses ve anlatÄ±mÄ± kapsar â€” her birinin kendi araÃ§larÄ±, formatlarÄ± ve kaynak gereksinimleri var.",
        solution:
          "ComfyUI tarzÄ± iÅŸ akÄ±ÅŸlarÄ±, Docker servis yÃ¶netimi, GPU kaynak koordinasyonu ve modÃ¼ler pipeline tasarÄ±mÄ± ile yerel bir yaratÄ±cÄ± AI stÃ¼dyosu orkestre ettim. Her ÅŸey tek bir GPU sunucusunda Ã§alÄ±ÅŸÄ±r.",
        technologies:
          "ComfyUI Â· Docker Â· GPU Orkestrasyonu Â· Medya Pipeline'larÄ±",
        result:
          "Bulut baÄŸÄ±mlÄ±lÄ±ÄŸÄ± olmadan Ã§ok modlu AI iÅŸ akÄ±ÅŸlarÄ± iÃ§in birleÅŸik yerel stÃ¼dyo.",
      },
      {
        title: "Mobil Uygulamalar",
        type: "Ã–zel Proje",
        problem:
          "KullanÄ±cÄ±lar gerÃ§ek zamanlÄ± Ã¶zellikler, kimlik doÄŸrulama ve sosyal etkileÅŸim iÃ§eren gÃ¼venilir mobil deneyimler bekliyor â€” modern araÃ§larla inÅŸa edilmiÅŸ.",
        solution:
          "React Native ve Expo ile Ã§apraz platform mobil uygulamalar geliÅŸtirdim; GraphQL API'leri, PostgreSQL veritabanlarÄ±, kimlik doÄŸrulama sistemleri ve gerÃ§ek zamanlÄ± mesajlaÅŸma ile desteklenmiÅŸ.",
        technologies: "React Native Â· Expo Â· GraphQL Â· Apollo Â· TypeScript",
        result:
          "GerÃ§ek zamanlÄ± Ã¶zellikler ve Ã§apraz platform tutarlÄ±lÄ±ÄŸa sahip Ã¼retim mobil uygulamalar.",
      },
      {
        title: "GeliÅŸtirici AraÃ§larÄ±",
        type: "KiÅŸisel Laboratuvar",
        problem:
          "MÃ¼hendislik ekipleri, yerel geliÅŸtirme ortamlarÄ±ndan otomatik test ve daÄŸÄ±tÄ±m pipeline'larÄ±na kadar, Ã¼retim sÃ¼recindeki sÃ¼rtÃ¼nmeyi azaltan araÃ§lara ihtiyaÃ§ duyar.",
        solution:
          "Yerel AI destekli kodlama asistanlarÄ±, otomatik mÃ¼hendislik dÃ¶ngÃ¼leri, CI/CD pipeline tasarÄ±mlarÄ± ve altyapÄ± kodu iÅŸ akÄ±ÅŸlarÄ± iÃ§eren geliÅŸtirici araÃ§larÄ± geliÅŸtirdim.",
        technologies:
          "TypeScript Â· Docker Â· CI/CD Â· AI Destekli GeliÅŸtirme",
        result:
          "SÃ¼rtÃ¼nmeyi azaltan ve fikirden daÄŸÄ±tÄ±ma giden yolu hÄ±zlandÄ±ran geliÅŸtirici araÃ§larÄ±.",
      },
    ],
    viewDetails: "DetaylarÄ± GÃ¶r",
    closeDetails: "Kapat",
  },
  experience: {
    title: "Deneyim",
    roles: [
      {
        company: "NMI",
        role: "Full Stack JavaScript Developer",
        period: "GÃ¼nÃ¼mÃ¼z",
        description:
          "JavaScript ve TypeScript ile uzaktan full-stack mÃ¼hendislik. ÃœrÃ¼n geliÅŸtirme, API tasarÄ±mÄ± ve sistem mimarisi.",
      },
      {
        company: "innodigi.net",
        role: "Kurucu",
        period: "GÃ¼nÃ¼mÃ¼z",
        description:
          "Dijital Ã¼rÃ¼n stÃ¼dyosu kurdum ve yÃ¶netiyorum. Full-stack geliÅŸtirme, AI sistemleri ve Ã¼rÃ¼n mÃ¼hendisliÄŸi.",
      },
      {
        company: "WESROM Corporation",
        role: "JavaScript Developer",
        period: "Ã–nceki dÃ¶nem",
        description:
          "Web uygulamalarÄ± iÃ§in JavaScript geliÅŸtirme. Ã–n uÃ§ ve arka uÃ§ mÃ¼hendisliÄŸi.",
      },
      {
        company: "GOBITO Digital Solutions",
        role: "Frontend Developer",
        period: "Ã–nceki dÃ¶nem",
        description:
          "Modern framework'lerle Ã¶n uÃ§ mÃ¼hendisliÄŸi. BileÅŸen mimarisi ve kullanÄ±cÄ± arayÃ¼zleri.",
      },
      {
        company: "Upwork",
        role: "YarÄ± ZamanlÄ± Developer",
        period: "Ã–nceki dÃ¶nem",
        description:
          "Web, mobil ve AI alanlarÄ±nda freelance mÃ¼hendislik. Ã‡eÅŸitli teknoloji yÄ±ÄŸÄ±nÄ±.",
      },
      {
        company: "Boranka YazÄ±lÄ±m ve Freelancer",
        role: "YazÄ±lÄ±m GeliÅŸtirici",
        period: "2015â€“2020",
        description:
          "Profesyonel yazÄ±lÄ±m Ã§alÄ±ÅŸmalarÄ± ve freelance projelerle web uygulamalarÄ± ve dijital Ã¼rÃ¼nler geliÅŸtirmeye baÅŸladÄ±.",
      },
    ],
  },
  principles: {
    title: "MÃ¼hendislik Ä°lkeleri",
    items: [
      { text: "DoÄŸrulanabilir sistemler inÅŸa et", icon: "rocket" },
      { text: "KarmaÅŸayÄ± gÃ¶zlemlenebilir yap", icon: "eye" },
      { text: "Sadece prompt deÄŸil, dÃ¶ngÃ¼yÃ¼ tasarla", icon: "refresh-cw" },
      {
        text: "ArayÃ¼zleri basit, altyapÄ±yÄ± dÃ¼rÃ¼st tut",
        icon: "minimize-2",
      },
      {
        text: "Deneyimleri yeniden kullanÄ±labilir sistemlere dÃ¶nÃ¼ÅŸtÃ¼r",
        icon: "brain",
      },
      { text: "Ã‡alÄ±ÅŸan yazÄ±lÄ±m daÄŸÄ±t", icon: "check-circle" },
    ],
  },
  contact: {
    title: "Bir Åžeyler Ä°nÅŸa Edelim",
    subtitle:
      "Derin teknik dÃ¼ÅŸÃ¼nce gerektiren full-stack Ã¼rÃ¼nler, AI sistemleri ve mÃ¼hendislik zorluklarÄ± Ã¼zerinde iÅŸbirliÄŸi yapÄ±yorum. Ä°htiyacÄ±n olan biri teslim eden bir mÃ¼hendisse, konuÅŸalÄ±m.",
    linkedin: "LinkedIn",
    email: "Ä°letiÅŸime GeÃ§",
    emailPlaceholder: "hello@serkanakman.dev",
  },
  footer: {
    name: "Serkan Akman",
    tagline:
      "Full-Stack MÃ¼hendislik Â· AI Sistemleri Â· Ã‡Ä±karÄ±m AltyapÄ±sÄ±",
    built: "innodigi tarafÄ±ndan geliÅŸtirildi.",
    copyright: "Â© {year} Serkan Akman. TÃ¼m haklarÄ± saklÄ±dÄ±r.",
    linkedin: "LinkedIn",
  },
  languageSwitcher: {
    en: "English",
    tr: "TÃ¼rkÃ§e",
    de: "Deutsch",
    sr: "Srpski",
    fr: "FranÃ§ais",
    it: "Italiano",
    ar: "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
    he: "×¢×‘×¨×™×ª",
  },
} as const;

export const de: TranslationContent = {
  nav: {
    about: "Ãœber mich",
    expertise: "Kompetenzen",
    aiSystems: "KI-Systeme",
    work: "Projekte",
    experience: "Erfahrung",
    principles: "GrundsÃ¤tze",
    contact: "Kontakt",
  },
  hero: {
    headline:
      "Ich entwickle digitale Produkte und intelligente Systeme an der Schnittstelle von Software, Daten und Infrastruktur.",
    subtitle:
      "Senior Full-Stack Engineer und Entwickler von KI-Systemen. Ich verwandle Ideen in funktionierende Produkte und komplexe Infrastrukturen in zuverlÃ¤ssige Nutzererlebnisse. Remote.",
    ctaPrimary: "Projekte ansehen",
    ctaSecondary: "GesprÃ¤ch beginnen",
    statusLabel: "Offen fÃ¼r Zusammenarbeit",
    infraCard: {
      client: "Entwicklungsumgebung",
      middleware: "API-Schicht",
      inference: "Inferenz-Engine",
      systems: "RAG Â· Tools Â· Anwendungen",
    },
  },
  about: {
    title: "Ãœber mich",
    paragraph1:
      "Ich bin Senior Full-Stack Engineer und entwickle Webanwendungen, Entwicklertools und KI-Systeme. Ãœber professionelle Softwarearbeit und freiberufliche Projekte habe ich zunÃ¤chst Webanwendungen und digitale Produkte entwickelt und mich anschlieÃŸend auf ganzheitliche Produktentwicklung und das Design von KI-Systemen spezialisiert.",
    paragraph2:
      "Ich entwickle Produkte von Grund auf â€” von Datenmodellen und API-Design bis zu den OberflÃ¤chen, mit denen Menschen tatsÃ¤chlich arbeiten. Ich arbeite mit TypeScript, React, Node.js, Laravel und mobilen Plattformen. AuÃŸerdem entwerfe und betreibe ich anbieterunabhÃ¤ngige Inferenzinfrastrukturen fÃ¼r Wissensabruf, Tool-Aufrufe und agentische Workflows.",
    paragraph3:
      "Derzeit arbeite ich remote als Full Stack JavaScript Developer bei nmi.com und bin GrÃ¼nder von innodigi.net. In meinem persÃ¶nlichen, GPU-gestÃ¼tzten KI-Labor erforsche ich Inferenzoptimierung, RAG-Pipelines und intelligente Agentensysteme erforsche.",
    stats: {
      years: "Senior",
      yearsDesc: "Full-Stack Engineer",
      fullstack: "Full-Stack",
      fullstackDesc: "Produktentwicklung",
      aiLab: "GPU-gestÃ¼tzt",
      aiLabDesc: "KI-Labor",
      remote: "Remote",
      remoteDesc: "Internationale Teams",
    },
  },
  expertise: {
    title: "Kompetenzen",
    subtitle:
      "Von der Produktarchitektur bis zur Inferenzinfrastruktur â€” die Systeme, die ich entwickle, und die Probleme, die ich lÃ¶se.",
    cards: [
      {
        title: "Full-Stack-Produktentwicklung",
        description:
          "Ganzheitliche Webprodukte von der Datenschicht bis zur bereitgestellten OberflÃ¤che. TypeScript, React, Next.js, Node.js, NestJS, Laravel, GraphQL und REST-APIs.",
        tags: [
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "NestJS",
          "Laravel",
          "GraphQL",
        ],
        icon: "code",
      },
      {
        title: "KI-Inferenz und Agentensysteme",
        description:
          "ModellunabhÃ¤ngige Inferenzinfrastruktur, Frameworks fÃ¼r Tool-Aufrufe, Agenten-Workflows mit Verifikationsschleifen und GPU-optimierte lokale Bereitstellung.",
        tags: [
          "Inferenz-APIs",
          "Tool-Aufrufe",
          "Agenten-Workflows",
          "GPU-Optimierung",
        ],
        icon: "cpu",
      },
      {
        title: "RAG und Wissenssysteme",
        description:
          "RAG-Pipelines, Vektordatenbanken, Dokumentenverarbeitung, Websuche und quellenbasierte KI-Antworten, die auf Ã¼berprÃ¼fbaren Informationen aufbauen.",
        tags: [
          "Vektorspeicher",
          "Dokumentenverarbeitung",
          "Websuche",
          "Fundierte Antworten",
        ],
        icon: "database",
      },
      {
        title: "Entwicklertools und Infrastruktur",
        description:
          "Entwicklertools, Docker-Orchestrierung, CI/CD-Pipelines, GPU-bewusstes Ressourcenmanagement und Remote-Serverinfrastruktur fÃ¼r KI-Workloads.",
        tags: ["Docker", "CI/CD", "GPU-Orchestrierung", "Servermanagement"],
        icon: "terminal",
      },
      {
        title: "Mobile Anwendungen",
        description:
          "PlattformÃ¼bergreifende mobile Produkte mit React Native und Expo. API-orientierte Architekturen, Authentifizierung, Echtzeitfunktionen und wiederverwendbare Designsysteme.",
        tags: ["React Native", "Expo", "TypeScript", "API-orientiert"],
        icon: "smartphone",
      },
      {
        title: "Kreative KI-Infrastruktur",
        description:
          "Orchestrierte Workflows fÃ¼r die Erzeugung von Bildern, Videos, Audio und Narration. Docker-basierte Services und modular konzipierte KI-Pipelines.",
        tags: [
          "Medien-Pipelines",
          "Service-Orchestrierung",
          "Modulares Design",
        ],
        icon: "server",
      },
    ],
  },
  aiSystems: {
    title: "KI-Systeme",
    subtitle:
      "Ich konzipiere kÃ¼nstliche Intelligenz nicht als reine Chat-Schicht, sondern als Entscheidungs- und Produktionsmechanismus, der fest im Produkt verankert ist.",
    pipeline: {
      data: "Daten",
      retrieval: "Abruf",
      reasoning: "Schlussfolgern",
      tools: "Tools",
      verification: "Verifikation",
      experience: "Nutzererlebnis",
    },
    sections: [
      {
        title: "Inferenzinfrastruktur",
        description:
          "Lokale und anbieterunabhÃ¤ngige Inferenzsysteme. Multi-GPU-TensorparallelitÃ¤t, optimiertes Laden von Modellen und standardisierte Inferenz-APIs ermÃ¶glichen den Wechsel zwischen Anbietern ohne Ã„nderungen am Anwendungscode.",
      },
      {
        title: "Retrieval-Augmented Generation",
        description:
          "RAG-Pipelines, die Anwendungen mit ihren eigenen Wissensbasen verbinden. Vektoreinbettungen, Strategien zur Dokumentsegmentierung, hybride Suche und quellenbewusste Antworten auf Basis Ã¼berprÃ¼fter Daten.",
      },
      {
        title: "Tool-Aufrufe und Agenten-Workflows",
        description:
          "KI-Systeme, die Tools aufrufen, Funktionen ausfÃ¼hren, im Web suchen und mehrstufige Aufgaben bearbeiten kÃ¶nnen. Verifikationsschleifen prÃ¼fen die Ergebnisse, bevor sie Nutzern angezeigt werden.",
      },
      {
        title: "Evaluation und Beobachtbarkeit",
        description:
          "Metriken, Tracing und Evaluationsframeworks fÃ¼r KI-Systeme. Latenz, Genauigkeit, Kosten und Drift mÃ¼ssen messbar sein â€” denn ein System, das sich nicht messen lÃ¤sst, verdient kein blindes Vertrauen.",
      },
    ],
  },
  work: {
    title: "AusgewÃ¤hlte Projekte",
    subtitle:
      "Produkte, Systeme und Infrastruktur â€” vom Konzept bis zum produktiven Einsatz.",
    projects: [
      {
        title: "Full-Stack-Webprodukte",
        type: "Kundenprojekt",
        problem:
          "Kunden brauchen zuverlÃ¤ssige, skalierbare Webanwendungen, die auf allen GerÃ¤ten funktionieren und echte GeschÃ¤ftsanforderungen erfÃ¼llen â€” keine Demos.",
        solution:
          "Ich habe vollstÃ¤ndige Webprodukte mit React- und TypeScript-Frontends, Node.js- und Laravel-Backends, GraphQL- und REST-APIs, PostgreSQL-Datenbanken, Authentifizierung und datengetriebenen OberflÃ¤chen entwickelt.",
        technologies:
          "React Â· TypeScript Â· Node.js Â· Laravel Â· GraphQL Â· PostgreSQL",
        result:
          "Produktionsreife Webanwendungen mit skalierbarer Architektur und wartbaren Codebasen.",
      },
      {
        title: "KI-Inferenzlabor",
        type: "PersÃ¶nliches Labor",
        problem:
          "Lokale KI-Inferenz erfordert eine sorgfÃ¤ltige Abstimmung von Hardware, Software und Netzwerk â€” die meisten Anleitungen enden bei â€šHello Worldâ€˜.",
        solution:
          "Ich habe einen Dual-GPU-Inferenzserver mit standardisierten APIs, modellunabhÃ¤ngigem Routing, GPU-bewusstem Ressourcenmanagement und Docker-basierter Service-Orchestrierung aufgebaut. Anwendungen verbinden sich nahtlos, unabhÃ¤ngig davon, ob ein Modell lokal oder in der Cloud lÃ¤uft.",
        technologies:
          "CUDA Â· Docker Â· GPU-Orchestrierung Â· Inferenz-APIs Â· Modell-Routing",
        result:
          "Eine produktionsbereite lokale Inferenzinfrastruktur fÃ¼r mehrere Modelle und parallele Workloads.",
      },
      {
        title: "RAG- und Wissensanwendungen",
        type: "PersÃ¶nliches Labor",
        problem:
          "KI-Systeme sollten aus Ã¼berprÃ¼ften Quellen antworten, statt plausibel klingende Fiktion zu erzeugen. Verankertes Wissen trennt ein Spielzeug von einem Werkzeug.",
        solution:
          "Ich habe RAG-Pipelines mit Vektordatenbanken, Dokumentenverarbeitung, Websuche und hybriden Abrufstrategien entworfen. Die Anwendungen erzeugen fundierte Antworten mit Quellenangaben.",
        technologies:
          "Vektordatenbanken Â· Dokumentenverarbeitung Â· Websuche Â· Hybrider Abruf",
        result:
          "Wissensbasierte KI-Anwendungen mit Quellenangaben und Ã¼berprÃ¼fbaren Ergebnissen.",
      },
      {
        title: "Kreative KI-Infrastruktur",
        type: "PersÃ¶nliches Labor",
        problem:
          "Kreative KI-Workflows umfassen Bild, Video, Audio und Narration â€” jeweils mit eigenen Tools, Formaten und Ressourcenanforderungen.",
        solution:
          "Ich habe ein lokales kreatives KI-Studio mit ComfyUI-Workflows, Docker-Serviceverwaltung, GPU-Ressourcenkoordination und modularer Pipeline-Architektur orchestriert. Alles lÃ¤uft auf einem einzigen GPU-Server.",
        technologies:
          "ComfyUI Â· Docker Â· GPU-Orchestrierung Â· Medien-Pipelines",
        result:
          "Ein einheitliches lokales Studio fÃ¼r multimodale KI-Workflows ohne Cloud-AbhÃ¤ngigkeit.",
      },
      {
        title: "Mobile Anwendungen",
        type: "Privates Projekt",
        problem:
          "Nutzer erwarten zuverlÃ¤ssige mobile Erlebnisse mit Echtzeitfunktionen, Authentifizierung und sozialer Interaktion â€” auf Basis moderner Werkzeuge.",
        solution:
          "Ich habe plattformÃ¼bergreifende mobile Anwendungen mit React Native und Expo entwickelt, unterstÃ¼tzt durch GraphQL-APIs, PostgreSQL-Datenbanken, Authentifizierung und Echtzeitnachrichten.",
        technologies: "React Native Â· Expo Â· GraphQL Â· Apollo Â· TypeScript",
        result:
          "Produktionsreife mobile Anwendungen mit Echtzeitfunktionen und konsistentem plattformÃ¼bergreifendem Verhalten.",
      },
      {
        title: "Entwicklertools",
        type: "PersÃ¶nliches Labor",
        problem:
          "Engineering-Teams brauchen Werkzeuge, die Reibung reduzieren â€” von lokalen Entwicklungsumgebungen bis zu automatisierten Test- und Deployment-Pipelines.",
        solution:
          "Ich habe Entwicklertools entwickelt, darunter lokale KI-gestÃ¼tzte Coding-Assistenten, automatisierte Engineering-Loops, CI/CD-Pipelines und Infrastructure-as-Code-Workflows.",
        technologies:
          "TypeScript Â· Docker Â· CI/CD Â· KI-gestÃ¼tzte Entwicklung",
        result:
          "Werkzeuge, die Reibung reduzieren und den Weg von der Idee bis zum Deployment beschleunigen.",
      },
    ],
    viewDetails: "Details ansehen",
    closeDetails: "SchlieÃŸen",
  },
  experience: {
    title: "Erfahrung",
    roles: [
      {
        company: "NMI",
        role: "Full Stack JavaScript Developer",
        period: "Heute",
        description:
          "Remote Full-Stack-Engineering mit JavaScript und TypeScript. Produktentwicklung, API-Design und Systemarchitektur.",
      },
      {
        company: "innodigi.net",
        role: "GrÃ¼nder",
        period: "Heute",
        description:
          "GrÃ¼ndung und Leitung eines Studios fÃ¼r digitale Produkte. Full-Stack-Entwicklung, KI-Systeme und Produktengineering.",
      },
      {
        company: "WESROM Corporation",
        role: "JavaScript Developer",
        period: "FrÃ¼her",
        description:
          "JavaScript-Entwicklung fÃ¼r Webanwendungen. Frontend- und Backend-Engineering.",
      },
      {
        company: "GOBITO Digital Solutions",
        role: "Frontend Developer",
        period: "FrÃ¼her",
        description:
          "Frontend-Engineering mit modernen Frameworks. Komponentenarchitektur und BenutzeroberflÃ¤chen.",
      },
      {
        company: "Upwork",
        role: "Teilzeit-Entwickler",
        period: "FrÃ¼her",
        description:
          "Freiberufliches Engineering in den Bereichen Web, Mobile und KI. VielfÃ¤ltiger Technologiestack.",
      },
      {
        company: "Boranka YazÄ±lÄ±m & Freelancer",
        role: "Softwareentwickler",
        period: "2015â€“2020",
        description:
          "Entwicklung von Webanwendungen und digitalen Produkten im Rahmen professioneller Softwarearbeit und freiberuflicher Projekte.",
      },
    ],
  },
  principles: {
    title: "Engineering-GrundsÃ¤tze",
    items: [
      { text: "Systeme bauen, die sich verifizieren lassen", icon: "rocket" },
      { text: "KomplexitÃ¤t beobachtbar machen", icon: "eye" },
      { text: "Den Loop gestalten, nicht nur den Prompt", icon: "refresh-cw" },
      {
        text: "Schnittstellen einfach und Infrastruktur ehrlich halten",
        icon: "minimize-2",
      },
      {
        text: "Experimente in wiederverwendbare Systeme verwandeln",
        icon: "brain",
      },
      { text: "Software ausliefern, die funktioniert", icon: "check-circle" },
    ],
  },
  contact: {
    title: "Lass uns etwas bauen",
    subtitle:
      "Ich arbeite an Full-Stack-Produkten, KI-Systemen und technischen Herausforderungen, die tiefes Denken erfordern. Wenn dein Projekt jemanden braucht, der liefert, lass uns sprechen.",
    linkedin: "LinkedIn",
    email: "Kontakt aufnehmen",
    emailPlaceholder: "hello@serkanakman.dev",
  },
  footer: {
    name: "Serkan Akman",
    tagline: "Full-Stack-Engineering Â· KI-Systeme Â· Inferenzinfrastruktur",
    built: "Entwickelt von innodigi.",
    copyright: "Â© {year} Serkan Akman. Alle Rechte vorbehalten.",
    linkedin: "LinkedIn",
  },
  languageSwitcher: {
    en: "Englisch",
    tr: "TÃ¼rkisch",
    de: "Deutsch",
    sr: "Serbisch",
    fr: "FranzÃ¶sisch",
    it: "Italienisch",
    ar: "Arabisch",
    he: "HebrÃ¤isch",
  },
};

export const sr: TranslationContent = {
  ...en,
  nav: {
    about: "O meni",
    expertise: "VeÅ¡tine",
    aiSystems: "AI sistemi",
    work: "Projekti",
    experience: "Iskustvo",
    principles: "Principi",
    contact: "Kontakt",
  },
  hero: {
    ...en.hero,
    headline:
      "Gradim digitalne proizvode i inteligentne sisteme na raskrÅ¡Ä‡u softvera, podataka i infrastrukture.",
    subtitle:
      "Senior full-stack inÅ¾enjer i kreator AI sistema. Ideje pretvaram u funkcionalne proizvode, a sloÅ¾enu infrastrukturu u pouzdana iskustva. Radim na daljinu.",
    ctaPrimary: "Pogledaj projekte",
    ctaSecondary: "ZapoÄnimo razgovor",
    statusLabel: "Otvoren za saradnju",
    infraCard: {
      client: "Razvojno okruÅ¾enje",
      middleware: "API sloj",
      inference: "Inferentni mehanizam",
      systems: "RAG Â· Alati Â· Aplikacije",
    },
  },
  about: {
    ...en.about,
    title: "O meni",
    paragraph1:
      "Senior sam full-stack inÅ¾enjer koji razvija web aplikacije, alate za programere i AI sisteme. Kroz profesionalni softverski rad i freelance projekte poÄeo sam da razvijam web aplikacije i digitalne proizvode, a danas se bavim celokupnim razvojem proizvoda i dizajnom AI sistema.",
    paragraph2:
      "Proizvode razvijam od poÄetka do kraja â€” od modela podataka i API dizajna do interfejsa sa kojima korisnici rade. Radim sa TypeScriptom, Reactom, Node.js-om, Laravelom i mobilnim platformama. TakoÄ‘e projektujem infrastrukturu za lokalnu, od provajdera nezavisnu AI inferenciju, pretragu znanja, pozivanje alata i agentske tokove.",
    paragraph3:
      "Trenutno radim na daljinu kao Full Stack JavaScript Developer u kompaniji nmi.com i osnivaÄ sam innodigi.net-a. U svojoj liÄnoj GPU laboratoriji za AI, gde istraÅ¾ujem optimizaciju inferencije, RAG tokove i inteligentne agentske sisteme.",
    stats: {
      years: "Senior",
      yearsDesc: "Full-Stack inÅ¾enjer",
      fullstack: "Full-Stack",
      fullstackDesc: "Razvoj proizvoda",
      aiLab: "GPU podrÅ¡ka",
      aiLabDesc: "AI laboratorija",
      remote: "Na daljinu",
      remoteDesc: "MeÄ‘unarodni timovi",
    },
  },
  expertise: {
    ...en.expertise,
    title: "VeÅ¡tine",
    subtitle:
      "Od arhitekture proizvoda do infrastrukture za inferenciju â€” sistemi koje gradim i problemi koje reÅ¡avam.",
    cards: en.expertise.cards.map((c, i) => ({
      ...c,
      title: [
        "Full-Stack razvoj proizvoda",
        "AI inferencija i agentski sistemi",
        "RAG i sistemi znanja",
        "Alati za programere i infrastruktura",
        "Mobilne aplikacije",
        "Kreativna AI infrastruktura",
      ][i],
      description: [
        "Kompletni web proizvodi od sloja podataka do produkcionog interfejsa.",
        "Infrastruktura za inferenciju nezavisna od modela, pozivanje alata i agentski tokovi sa proverom rezultata.",
        "RAG tokovi, vektorske baze, obrada dokumenata, web pretraga i odgovori zasnovani na izvorima.",
        "Razvojni alati, Docker orkestracija, CI/CD i upravljanje GPU resursima.",
        "Mobilni proizvodi za viÅ¡e platformi uz React Native i Expo.",
        "Orkestrirani tokovi za generisanje slike, videa, zvuka i naracije.",
      ][i],
      tags: ["TypeScript", "React", "Next.js", "Node.js"],
    })),
  },
  aiSystems: {
    ...en.aiSystems,
    title: "AI sistemi",
    subtitle:
      "VeÅ¡taÄku inteligenciju projektujem ne kao obiÄan Äet sloj, veÄ‡ kao mehanizam odluÄivanja i proizvodnje ugraÄ‘en u sam proizvod.",
    pipeline: {
      data: "Podaci",
      retrieval: "Pretraga",
      reasoning: "ZakljuÄivanje",
      tools: "Alati",
      verification: "Provera",
      experience: "KorisniÄko iskustvo",
    },
    sections: en.aiSystems.sections.map((s, i) => ({
      ...s,
      title: [
        "Infrastruktura za inferenciju",
        "Retrieval-Augmented Generation",
        "Pozivanje alata i agentski tokovi",
        "Evaluacija i vidljivost sistema",
      ][i],
    })),
  },
  work: {
    ...en.work,
    title: "Odabrani projekti",
    subtitle:
      "Proizvodi, sistemi i infrastruktura â€” od koncepta do produkcije.",
    projects: en.work.projects.map((p, i) => ({
      ...p,
      title: [
        "Full-Stack web proizvodi",
        "AI inferenciona laboratorija",
        "RAG i aplikacije znanja",
        "Kreativna AI infrastruktura",
        "Mobilne aplikacije",
        "Alati za programere",
      ][i],
      type: [
        "Rad za klijenta",
        "LiÄna laboratorija",
        "LiÄna laboratorija",
        "LiÄna laboratorija",
        "Privatni projekat",
        "LiÄna laboratorija",
      ][i],
    })),
    viewDetails: "Pogledaj detalje",
    closeDetails: "Zatvori",
  },
  experience: {
    ...en.experience,
    title: "Iskustvo",
    roles: en.experience.roles.map((r, i) => ({
      ...r,
      period: i < 2 ? "Danas" : i === 5 ? "2015â€“2020" : "Ranije",
      role: [
        "Full Stack JavaScript Developer",
        "OsnivaÄ",
        "JavaScript Developer",
        "Frontend Developer",
        "Developer sa nepunim radnim vremenom",
        "Softverski developer",
      ][i],
    })),
  },
  principles: {
    ...en.principles,
    title: "InÅ¾enjerski principi",
    items: en.principles.items.map((x, i) => ({
      ...x,
      text: [
        "Graditi sisteme koji mogu da se provere",
        "UÄiniti sloÅ¾enost vidljivom",
        "Projektovati tok, ne samo prompt",
        "Interfejse drÅ¾ati jednostavnim, infrastrukturu iskrenom",
        "Pretvoriti eksperimente u sisteme za ponovnu upotrebu",
        "IsporuÄiti softver koji radi",
      ][i],
    })),
  },
  contact: {
    ...en.contact,
    title: "Hajde da izgradimo neÅ¡to",
    subtitle:
      "SuraÄ‘ujem na full-stack proizvodima, AI sistemima i inÅ¾enjerskim izazovima koji zahtevaju duboko tehniÄko razmiÅ¡ljanje. Ako vam treba neko ko isporuÄuje, razgovarajmo.",
    email: "Javite se",
  },
  footer: {
    ...en.footer,
    tagline:
      "Full-Stack inÅ¾enjering Â· AI sistemi Â· Infrastruktura za inferenciju",
    built: "IzgraÄ‘eno od strane innodigi.",
    copyright: "Â© {year} Serkan Akman. Sva prava zadrÅ¾ana.",
  },
  languageSwitcher: {
    en: "Engleski",
    tr: "Turski",
    de: "NemaÄki",
    sr: "Srpski",
    fr: "Francuski",
    it: "Italijanski",
    ar: "Arapski",
    he: "Hebrejski",
  },
};

export const fr: TranslationContent = {
  ...en,
  nav: {
    about: "Ã€ propos",
    expertise: "CompÃ©tences",
    aiSystems: "SystÃ¨mes d'IA",
    work: "Projets",
    experience: "ExpÃ©rience",
    principles: "Principes",
    contact: "Contact",
  },
  hero: {
    ...en.hero,
    headline:
      "Je conÃ§ois des produits numÃ©riques et des systÃ¨mes intelligents Ã  la rencontre du logiciel, des donnÃ©es et de l'infrastructure.",
    subtitle:
      "IngÃ©nieur full-stack senior et concepteur de systÃ¨mes d'IA. Je transforme les idÃ©es en produits fonctionnels et les infrastructures complexes en expÃ©riences fiables. Je travaille Ã  distance.",
    ctaPrimary: "Voir les projets",
    ctaSecondary: "Ã‰changeons",
    statusLabel: "Ouvert aux collaborations",
    infraCard: {
      client: "Environnement de dÃ©veloppement",
      middleware: "Couche API",
      inference: "Moteur d'infÃ©rence",
      systems: "RAG Â· Outils Â· Applications",
    },
  },
  about: {
    ...en.about,
    title: "Ã€ propos",
    paragraph1:
      "Je suis ingÃ©nieur full-stack senior. Je conÃ§ois des applications web, des outils pour dÃ©veloppeurs et des systÃ¨mes d'IA. J'ai commencÃ© par dÃ©velopper des applications web et des produits numÃ©riques dans le cadre de missions professionnelles et freelance, avant de me spÃ©cialiser dans l'ingÃ©nierie produit de bout en bout et la conception de systÃ¨mes d'IA.",
    paragraph2:
      "Je construis les produits de bout en bout : des modÃ¨les de donnÃ©es et des API jusqu'aux interfaces utilisÃ©es au quotidien. Je travaille avec TypeScript, React, Node.js, Laravel et les plateformes mobiles. Je conÃ§ois Ã©galement des infrastructures d'infÃ©rence locales et indÃ©pendantes du cloud pour la recherche, l'appel d'outils et les workflows agentiques.",
    paragraph3:
      "Je travaille actuellement Ã  distance comme Full Stack JavaScript Developer chez nmi.com et je suis le fondateur d'innodigi.net. Dans mon laboratoire d'IA personnel Ã©quipÃ© de GPU, j'expÃ©rimente l'optimisation de l'infÃ©rence, les pipelines RAG et les systÃ¨mes d'agents intelligents.",
    stats: {
      years: "Senior",
      yearsDesc: "IngÃ©nieur full-stack",
      fullstack: "Full-stack",
      fullstackDesc: "IngÃ©nierie produit",
      aiLab: "GPU",
      aiLabDesc: "Laboratoire d'IA",
      remote: "Ã€ distance",
      remoteDesc: "Ã‰quipes internationales",
    },
  },
  expertise: {
    ...en.expertise,
    title: "CompÃ©tences",
    subtitle:
      "De l'architecture produit Ã  l'infrastructure d'infÃ©rence â€” les systÃ¨mes que je construis et les problÃ¨mes que je rÃ©sous.",
    cards: en.expertise.cards.map((c, i) => ({
      ...c,
      title: [
        "IngÃ©nierie produit full-stack",
        "InfÃ©rence IA et systÃ¨mes d'agents",
        "RAG et systÃ¨mes de connaissance",
        "Outils dÃ©veloppeur et infrastructure",
        "Applications mobiles",
        "Infrastructure IA crÃ©ative",
      ][i],
      description: [
        "Des produits web complets, de la couche de donnÃ©es Ã  l'interface en production.",
        "Une infrastructure d'infÃ©rence indÃ©pendante des modÃ¨les, l'appel d'outils et des workflows d'agents vÃ©rifiables.",
        "Des pipelines RAG, bases vectorielles, traitement documentaire, recherche web et rÃ©ponses sourcÃ©es.",
        "Des outils dÃ©veloppeur, l'orchestration Docker, le CI/CD et la gestion des ressources GPU.",
        "Des produits mobiles multiplateformes avec React Native et Expo.",
        "Des workflows orchestrÃ©s pour gÃ©nÃ©rer images, vidÃ©os, audio et narration.",
      ][i],
    })),
  },
  aiSystems: {
    ...en.aiSystems,
    title: "SystÃ¨mes d'IA",
    subtitle:
      "Je conÃ§ois l'intelligence artificielle non comme une simple couche conversationnelle, mais comme un mÃ©canisme de dÃ©cision et de production intÃ©grÃ© au produit.",
    pipeline: {
      data: "DonnÃ©es",
      retrieval: "Recherche",
      reasoning: "Raisonnement",
      tools: "Outils",
      verification: "VÃ©rification",
      experience: "ExpÃ©rience utilisateur",
    },
    sections: en.aiSystems.sections.map((s, i) => ({
      ...s,
      title: [
        "Infrastructure d'infÃ©rence",
        "Retrieval-Augmented Generation",
        "Appel d'outils et workflows d'agents",
        "Ã‰valuation et observabilitÃ©",
      ][i],
    })),
  },
  work: {
    ...en.work,
    title: "Projets sÃ©lectionnÃ©s",
    subtitle:
      "Produits, systÃ¨mes et infrastructure â€” du concept Ã  la production.",
    projects: en.work.projects.map((p, i) => ({
      ...p,
      title: [
        "Produits web full-stack",
        "Laboratoire d'infÃ©rence IA",
        "Applications RAG et connaissance",
        "Infrastructure IA crÃ©ative",
        "Applications mobiles",
        "Outils dÃ©veloppeur",
      ][i],
      type: [
        "Mission client",
        "Laboratoire personnel",
        "Laboratoire personnel",
        "Laboratoire personnel",
        "Projet privÃ©",
        "Laboratoire personnel",
      ][i],
    })),
    viewDetails: "Voir les dÃ©tails",
    closeDetails: "Fermer",
  },
  experience: {
    ...en.experience,
    title: "ExpÃ©rience",
    roles: en.experience.roles.map((r, i) => ({
      ...r,
      period: i < 2 ? "Aujourd'hui" : i === 5 ? "2015â€“2020" : "Auparavant",
      role: [
        "Full Stack JavaScript Developer",
        "Fondateur",
        "JavaScript Developer",
        "Frontend Developer",
        "DÃ©veloppeur Ã  temps partiel",
        "DÃ©veloppeur logiciel",
      ][i],
    })),
  },
  principles: {
    ...en.principles,
    title: "Principes d'ingÃ©nierie",
    items: en.principles.items.map((x, i) => ({
      ...x,
      text: [
        "Construire des systÃ¨mes vÃ©rifiables",
        "Rendre la complexitÃ© observable",
        "Concevoir la boucle, pas seulement le prompt",
        "Garder des interfaces simples et une infrastructure honnÃªte",
        "Transformer les expÃ©riences en systÃ¨mes rÃ©utilisables",
        "Livrer un logiciel qui fonctionne",
      ][i],
    })),
  },
  contact: {
    ...en.contact,
    title: "Construisons quelque chose",
    subtitle:
      "Je collabore sur des produits full-stack, des systÃ¨mes d'IA et des dÃ©fis d'ingÃ©nierie qui exigent une rÃ©flexion technique approfondie. Si votre projet a besoin de quelqu'un qui livre, parlons-en.",
    email: "Me contacter",
  },
  footer: {
    ...en.footer,
    tagline:
      "IngÃ©nierie full-stack Â· SystÃ¨mes d'IA Â· Infrastructure d'infÃ©rence",
    built: "ConÃ§u par innodigi.",
    copyright: "Â© {year} Serkan Akman. Tous droits rÃ©servÃ©s.",
  },
  languageSwitcher: {
    en: "Anglais",
    tr: "Turc",
    de: "Allemand",
    sr: "Serbe",
    fr: "FranÃ§ais",
    it: "Italien",
    ar: "Arabe",
    he: "HÃ©breu",
  },
};

export const it: TranslationContent = {
  ...en,
  nav: {
    about: "Chi sono",
    expertise: "Competenze",
    aiSystems: "Sistemi di IA",
    work: "Progetti",
    experience: "Esperienza",
    principles: "Principi",
    contact: "Contatti",
  },
  hero: {
    ...en.hero,
    headline:
      "Costruisco prodotti digitali e sistemi intelligenti all'incrocio tra software, dati e infrastruttura.",
    subtitle:
      "Senior full-stack engineer e progettista di sistemi di IA. Trasformo le idee in prodotti funzionanti e le infrastrutture complesse in esperienze affidabili. Lavoro da remoto.",
    ctaPrimary: "Scopri i progetti",
    ctaSecondary: "Iniziamo una conversazione",
    statusLabel: "Disponibile per collaborazioni",
    infraCard: {
      client: "Ambiente di sviluppo",
      middleware: "Livello API",
      inference: "Motore di inferenza",
      systems: "RAG Â· Strumenti Â· Applicazioni",
    },
  },
  about: {
    ...en.about,
    title: "Chi sono",
    paragraph1:
      "Sono un senior full-stack engineer e sviluppo applicazioni web, strumenti per sviluppatori e sistemi di IA. Ho iniziato a creare applicazioni web e prodotti digitali attraverso attivitÃ  professionali e progetti freelance, specializzandomi poi nell'ingegneria di prodotto end-to-end e nella progettazione di sistemi di IA.",
    paragraph2:
      "Costruisco prodotti dall'inizio alla fine: dai modelli dati e dalle API alle interfacce che le persone usano ogni giorno. Lavoro con TypeScript, React, Node.js, Laravel e piattaforme mobile. Progetto inoltre infrastrutture di inferenza locali e indipendenti dal cloud per ricerca, chiamate agli strumenti e workflow agentici.",
    paragraph3:
      "Attualmente lavoro da remoto come Full Stack JavaScript Developer presso nmi.com e sono il fondatore di innodigi.net. Nel mio laboratorio personale di IA con GPU, dove sperimento con l'ottimizzazione dell'inferenza, le pipeline RAG e i sistemi ad agenti intelligenti.",
    stats: {
      years: "Senior",
      yearsDesc: "Full-stack engineer",
      fullstack: "Full-stack",
      fullstackDesc: "Ingegneria di prodotto",
      aiLab: "Con GPU",
      aiLabDesc: "Laboratorio di IA",
      remote: "Da remoto",
      remoteDesc: "Team internazionali",
    },
  },
  expertise: {
    ...en.expertise,
    title: "Competenze",
    subtitle:
      "Dall'architettura del prodotto all'infrastruttura di inferenza â€” i sistemi che costruisco e i problemi che risolvo.",
    cards: en.expertise.cards.map((c, i) => ({
      ...c,
      title: [
        "Ingegneria di prodotto full-stack",
        "Inferenza IA e sistemi ad agenti",
        "RAG e sistemi della conoscenza",
        "Strumenti per sviluppatori e infrastruttura",
        "Applicazioni mobile",
        "Infrastruttura IA creativa",
      ][i],
      description: [
        "Prodotti web completi, dal livello dati all'interfaccia in produzione.",
        "Infrastruttura di inferenza indipendente dal modello, chiamate agli strumenti e workflow ad agenti verificabili.",
        "Pipeline RAG, database vettoriali, elaborazione documenti, ricerca web e risposte basate sulle fonti.",
        "Strumenti per sviluppatori, orchestrazione Docker, CI/CD e gestione delle risorse GPU.",
        "Prodotti mobile multipiattaforma con React Native ed Expo.",
        "Workflow orchestrati per generare immagini, video, audio e narrazione.",
      ][i],
    })),
  },
  aiSystems: {
    ...en.aiSystems,
    title: "Sistemi di IA",
    subtitle:
      "Progetto l'intelligenza artificiale non come un semplice livello conversazionale, ma come un meccanismo decisionale e produttivo integrato nel prodotto.",
    pipeline: {
      data: "Dati",
      retrieval: "Ricerca",
      reasoning: "Ragionamento",
      tools: "Strumenti",
      verification: "Verifica",
      experience: "Esperienza utente",
    },
    sections: en.aiSystems.sections.map((s, i) => ({
      ...s,
      title: [
        "Infrastruttura di inferenza",
        "Retrieval-Augmented Generation",
        "Chiamate agli strumenti e workflow ad agenti",
        "Valutazione e osservabilitÃ ",
      ][i],
    })),
  },
  work: {
    ...en.work,
    title: "Progetti selezionati",
    subtitle:
      "Prodotti, sistemi e infrastruttura â€” dal concetto alla produzione.",
    projects: en.work.projects.map((p, i) => ({
      ...p,
      title: [
        "Prodotti web full-stack",
        "Laboratorio di inferenza IA",
        "Applicazioni RAG e della conoscenza",
        "Infrastruttura IA creativa",
        "Applicazioni mobile",
        "Strumenti per sviluppatori",
      ][i],
      type: [
        "Progetto cliente",
        "Laboratorio personale",
        "Laboratorio personale",
        "Laboratorio personale",
        "Progetto privato",
        "Laboratorio personale",
      ][i],
    })),
    viewDetails: "Vedi dettagli",
    closeDetails: "Chiudi",
  },
  experience: {
    ...en.experience,
    title: "Esperienza",
    roles: en.experience.roles.map((r, i) => ({
      ...r,
      period: i < 2 ? "Oggi" : i === 5 ? "2015â€“2020" : "In precedenza",
      role: [
        "Full Stack JavaScript Developer",
        "Fondatore",
        "JavaScript Developer",
        "Frontend Developer",
        "Sviluppatore part-time",
        "Sviluppatore software",
      ][i],
    })),
  },
  principles: {
    ...en.principles,
    title: "Principi di ingegneria",
    items: en.principles.items.map((x, i) => ({
      ...x,
      text: [
        "Costruire sistemi verificabili",
        "Rendere osservabile la complessitÃ ",
        "Progettare il ciclo, non solo il prompt",
        "Mantenere semplici le interfacce e onesta l'infrastruttura",
        "Trasformare gli esperimenti in sistemi riutilizzabili",
        "Distribuire software che funziona",
      ][i],
    })),
  },
  contact: {
    ...en.contact,
    title: "Costruiamo qualcosa",
    subtitle:
      "Collaboro a prodotti full-stack, sistemi di IA e sfide ingegneristiche che richiedono una profonda riflessione tecnica. Se il tuo progetto ha bisogno di qualcuno che sappia consegnare, parliamone.",
    email: "Contattami",
  },
  footer: {
    ...en.footer,
    tagline:
      "Ingegneria full-stack Â· Sistemi di IA Â· Infrastruttura di inferenza",
    built: "Realizzato da innodigi.",
    copyright: "Â© {year} Serkan Akman. Tutti i diritti riservati.",
  },
  languageSwitcher: {
    en: "Inglese",
    tr: "Turco",
    de: "Tedesco",
    sr: "Serbo",
    fr: "Francese",
    it: "Italiano",
    ar: "Arabo",
    he: "Ebraico",
  },
};

export const ar: TranslationContent = {
  ...en,
  nav: {
    about: "Ù†Ø¨Ø°Ø© Ø¹Ù†ÙŠ",
    expertise: "Ø§Ù„Ø®Ø¨Ø±Ø§Øª",
    aiSystems: "Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ",
    work: "Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹",
    experience: "Ø§Ù„Ø®Ø¨Ø±Ø©",
    principles: "Ø§Ù„Ù…Ø¨Ø§Ø¯Ø¦",
    contact: "ØªÙˆØ§ØµÙ„ Ù…Ø¹ÙŠ",
  },
  hero: {
    ...en.hero,
    headline:
      "Ø£Ø¨Ù†ÙŠ Ù…Ù†ØªØ¬Ø§Øª Ø±Ù‚Ù…ÙŠØ© ÙˆØ£Ù†Ø¸Ù…Ø© Ø°ÙƒÙŠØ© Ø¹Ù†Ø¯ ØªÙ‚Ø§Ø·Ø¹ Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ§Øª ÙˆØ§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ§Ù„Ø¨Ù†ÙŠØ© Ø§Ù„ØªØ­ØªÙŠØ©.",
    subtitle:
      "Ù…Ù‡Ù†Ø¯Ø³ Full-Stack Ø£ÙˆÙ„ ÙˆÙ…Ø·ÙˆÙ‘Ø± Ù„Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ. Ø£Ø­ÙˆÙ‘Ù„ Ø§Ù„Ø£ÙÙƒØ§Ø± Ø¥Ù„Ù‰ Ù…Ù†ØªØ¬Ø§Øª ØªØ¹Ù…Ù„ ÙØ¹Ù„ÙŠØ§Ù‹ØŒ ÙˆØ§Ù„Ø¨Ù†Ù‰ Ø§Ù„ØªØ­ØªÙŠØ© Ø§Ù„Ù…Ø¹Ù‚Ø¯Ø© Ø¥Ù„Ù‰ ØªØ¬Ø§Ø±Ø¨ Ù…ÙˆØ«ÙˆÙ‚Ø©. Ø£Ø¹Ù…Ù„ Ø¹Ù† Ø¨ÙØ¹Ø¯.",
    ctaPrimary: "Ø§Ø³ØªÙƒØ´Ù Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹",
    ctaSecondary: "Ù„Ù†Ø¨Ø¯Ø£ Ù…Ø­Ø§Ø¯Ø«Ø©",
    statusLabel: "Ù…ØªØ§Ø­ Ù„Ù„ØªØ¹Ø§ÙˆÙ†",
    infraCard: {
      client: "Ø¨ÙŠØ¦Ø© Ø§Ù„ØªØ·ÙˆÙŠØ±",
      middleware: "Ø·Ø¨Ù‚Ø© API",
      inference: "Ù…Ø­Ø±Ùƒ Ø§Ù„Ø§Ø³ØªØ¯Ù„Ø§Ù„",
      systems: "RAG Â· Ø§Ù„Ø£Ø¯ÙˆØ§Øª Â· Ø§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª",
    },
  },
  about: {
    ...en.about,
    title: "Ù†Ø¨Ø°Ø© Ø¹Ù†ÙŠ",
    paragraph1:
      "Ø£Ù†Ø§ Ù…Ù‡Ù†Ø¯Ø³ Full-Stack Ø£ÙˆÙ„ Ø£Ø¹Ù…Ù„ Ø¹Ù„Ù‰ ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„ÙˆÙŠØ¨ ÙˆØ£Ø¯ÙˆØ§Øª Ø§Ù„Ù…Ø·ÙˆØ±ÙŠÙ† ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ. Ø¨Ø¯Ø£Øª Ø¨Ø¨Ù†Ø§Ø¡ Ø§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª ÙˆØ§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„Ø±Ù‚Ù…ÙŠØ© Ù…Ù† Ø®Ù„Ø§Ù„ Ø§Ù„Ø¹Ù…Ù„ Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠ Ø§Ù„Ø§Ø­ØªØ±Ø§ÙÙŠ ÙˆØ§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ Ø§Ù„Ù…Ø³ØªÙ‚Ù„Ø©ØŒ Ø«Ù… ØªØ·ÙˆØ±Øª Ø®Ø¨Ø±ØªÙŠ Ù„ØªØ´Ù…Ù„ Ù‡Ù†Ø¯Ø³Ø© Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ù…Ù† Ø§Ù„Ø¨Ø¯Ø§ÙŠØ© Ø¥Ù„Ù‰ Ø§Ù„Ù†Ù‡Ø§ÙŠØ© ÙˆØªØµÙ…ÙŠÙ… Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ.",
    paragraph2:
      "Ø£Ø¨Ù†ÙŠ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ù…Ù† Ø§Ù„Ø¨Ø¯Ø§ÙŠØ© Ø¥Ù„Ù‰ Ø§Ù„Ù†Ù‡Ø§ÙŠØ©: Ù…Ù† Ù†Ù…Ø§Ø°Ø¬ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØªØµÙ…ÙŠÙ… ÙˆØ§Ø¬Ù‡Ø§Øª API Ø¥Ù„Ù‰ Ø§Ù„ÙˆØ§Ø¬Ù‡Ø§Øª Ø§Ù„ØªÙŠ ÙŠØ³ØªØ®Ø¯Ù…Ù‡Ø§ Ø§Ù„Ù†Ø§Ø³ ÙØ¹Ù„ÙŠØ§Ù‹. Ø£Ø¹Ù…Ù„ Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… TypeScript ÙˆReact ÙˆNode.js ÙˆLaravel ÙˆÙ…Ù†ØµØ§Øª Ø§Ù„Ù‡Ø§ØªÙ Ø§Ù„Ù…Ø­Ù…ÙˆÙ„. ÙƒÙ…Ø§ Ø£ØµÙ…Ù… ÙˆØ£Ø¯ÙŠØ± Ø¨Ù†Ù‰ ØªØ­ØªÙŠØ© Ù„Ù„Ø§Ø³ØªØ¯Ù„Ø§Ù„ Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠØŒ Ù…Ø­Ù„ÙŠØ© ÙˆÙ…Ø³ØªÙ‚Ù„Ø© Ø¹Ù† Ù…Ø²ÙˆÙ‘Ø¯ Ø³Ø­Ø§Ø¨ÙŠØŒ Ù„Ù„Ø¨Ø­Ø« ÙˆØ§Ø³ØªØ¯Ø¹Ø§Ø¡ Ø§Ù„Ø£Ø¯ÙˆØ§Øª ÙˆØ³ÙŠØ± Ø¹Ù…Ù„ Ø§Ù„ÙˆÙƒÙ„Ø§Ø¡.",
    paragraph3:
      "Ø£Ø¹Ù…Ù„ Ø­Ø§Ù„ÙŠØ§Ù‹ Ø¹Ù† Ø¨ÙØ¹Ø¯ Ø¨ÙˆØµÙÙ€ÙŠ Full Stack JavaScript Developer Ù„Ø¯Ù‰ nmi.comØŒ ÙƒÙ…Ø§ Ø£Ù†Ù†ÙŠ Ù…Ø¤Ø³Ø³ innodigi.net. ÙˆØ£Ø¯ÙŠØ± Ù…Ø®ØªØ¨Ø±Ø§Ù‹ Ø´Ø®ØµÙŠØ§Ù‹ Ù„Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ù…Ø²ÙˆØ¯Ø§Ù‹ Ø¨ÙˆØ­Ø¯Ø§Øª GPUØŒ Ø£Ø¬Ø±Ù‘Ø¨ ÙÙŠÙ‡ ØªØ­Ø³ÙŠÙ† Ø§Ù„Ø§Ø³ØªØ¯Ù„Ø§Ù„ ÙˆØ®Ø·ÙˆØ· RAG ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„ÙˆÙƒÙ„Ø§Ø¡ Ø§Ù„Ø°ÙƒÙŠØ©.",
    stats: {
      years: "Senior",
      yearsDesc: "Ù…Ù‡Ù†Ø¯Ø³ Full-Stack",
      fullstack: "Full-Stack",
      fullstackDesc: "Ù‡Ù†Ø¯Ø³Ø© Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª",
      aiLab: "Ù…Ø¯Ø¹ÙˆÙ… Ø¨Ù€ GPU",
      aiLabDesc: "Ù…Ø®ØªØ¨Ø± Ø°ÙƒØ§Ø¡ Ø§ØµØ·Ù†Ø§Ø¹ÙŠ",
      remote: "Ø¹Ù† Ø¨ÙØ¹Ø¯",
      remoteDesc: "ÙØ±Ù‚ Ø¯ÙˆÙ„ÙŠØ©",
    },
  },
  expertise: {
    ...en.expertise,
    title: "Ø§Ù„Ø®Ø¨Ø±Ø§Øª",
    subtitle:
      "Ù…Ù† Ù‡Ù†Ø¯Ø³Ø© Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø¥Ù„Ù‰ Ø¨Ù†ÙŠØ© Ø§Ù„Ø§Ø³ØªØ¯Ù„Ø§Ù„ Ø§Ù„ØªØ­ØªÙŠØ© â€” Ø§Ù„Ø£Ù†Ø¸Ù…Ø© Ø§Ù„ØªÙŠ Ø£Ø¨Ù†ÙŠÙ‡Ø§ ÙˆØ§Ù„Ù…Ø´ÙƒÙ„Ø§Øª Ø§Ù„ØªÙŠ Ø£Ø­Ù„Ù‡Ø§.",
    cards: en.expertise.cards.map((c, i) => ({
      ...c,
      title: [
        "Ù‡Ù†Ø¯Ø³Ø© Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Full-Stack",
        "Ø§Ù„Ø§Ø³ØªØ¯Ù„Ø§Ù„ ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„ÙˆÙƒÙ„Ø§Ø¡",
        "RAG ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„Ù…Ø¹Ø±ÙØ©",
        "Ø£Ø¯ÙˆØ§Øª Ø§Ù„Ù…Ø·ÙˆØ±ÙŠÙ† ÙˆØ§Ù„Ø¨Ù†ÙŠØ© Ø§Ù„ØªØ­ØªÙŠØ©",
        "ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ù‡Ø§ØªÙ Ø§Ù„Ù…Ø­Ù…ÙˆÙ„",
        "Ø§Ù„Ø¨Ù†ÙŠØ© Ø§Ù„ØªØ­ØªÙŠØ© Ø§Ù„Ø¥Ø¨Ø¯Ø§Ø¹ÙŠØ© Ù„Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ",
      ][i],
      description: [
        "Ù…Ù†ØªØ¬Ø§Øª ÙˆÙŠØ¨ Ù…ØªÙƒØ§Ù…Ù„Ø© ØªØ¨Ø¯Ø£ Ù…Ù† Ø·Ø¨Ù‚Ø© Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØªÙ†ØªÙ‡ÙŠ Ø¨ÙˆØ§Ø¬Ù‡Ø© Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ø¥Ù†ØªØ§Ø¬ØŒ Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… TypeScript ÙˆReact ÙˆNext.js ÙˆNode.js ÙˆNestJS ÙˆLaravel ÙˆGraphQL ÙˆREST.",
        "Ø¨Ù†ÙŠØ© Ø§Ø³ØªØ¯Ù„Ø§Ù„ Ù…Ø³ØªÙ‚Ù„Ø© Ø¹Ù† Ø§Ù„Ù†Ù…ÙˆØ°Ø¬ØŒ ÙˆØ£Ø·Ø± Ù„Ø§Ø³ØªØ¯Ø¹Ø§Ø¡ Ø§Ù„Ø£Ø¯ÙˆØ§ØªØŒ ÙˆØ³ÙŠØ± Ø¹Ù…Ù„ Ù„Ù„ÙˆÙƒÙ„Ø§Ø¡ Ù…Ø²ÙˆÙ‘Ø¯ Ø¨Ø­Ù„Ù‚Ø§Øª ØªØ­Ù‚Ù‚ØŒ ÙˆÙ†Ø´Ø± Ù…Ø­Ù„ÙŠ Ù…Ø­Ø³Ù‘Ù† Ù„ÙˆØ­Ø¯Ø§Øª GPU.",
        "Ø®Ø·ÙˆØ· RAG ÙˆÙ‚ÙˆØ§Ø¹Ø¯ Ø¨ÙŠØ§Ù†Ø§Øª Ù…ØªØ¬Ù‡ÙŠØ© ÙˆÙ…Ø¹Ø§Ù„Ø¬Ø© Ù…Ø³ØªÙ†Ø¯Ø§Øª ÙˆØªÙƒØ§Ù…Ù„ Ù…Ø¹ Ø§Ù„Ø¨Ø­Ø« Ø¹Ù„Ù‰ Ø§Ù„ÙˆÙŠØ¨ ÙˆØ¥Ø¬Ø§Ø¨Ø§Øª Ø°ÙƒØ§Ø¡ Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ØªØ³ØªÙ†Ø¯ Ø¥Ù„Ù‰ Ù…ØµØ§Ø¯Ø± Ù…ÙˆØ«ÙˆÙ‚Ø©.",
        "Ø£Ø¯ÙˆØ§Øª Ù„Ù„Ù…Ø·ÙˆØ±ÙŠÙ†ØŒ ÙˆØªÙ†Ø³ÙŠÙ‚ DockerØŒ ÙˆØ®Ø·ÙˆØ· CI/CDØŒ ÙˆØ¥Ø¯Ø§Ø±Ø© ÙˆØ§Ø¹ÙŠØ© Ø¨Ù…ÙˆØ§Ø±Ø¯ GPUØŒ ÙˆØ¨Ù†ÙŠØ© Ø®ÙˆØ§Ø¯Ù… Ù„Ø£Ø­Ù…Ø§Ù„ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ.",
        "Ù…Ù†ØªØ¬Ø§Øª Ù…Ø­Ù…ÙˆÙ„Ø© Ù…ØªØ¹Ø¯Ø¯Ø© Ø§Ù„Ù…Ù†ØµØ§Øª Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… React Native ÙˆExpoØŒ Ù…Ø¹ Ø¨Ù†Ù‰ ØªØ¹ØªÙ…Ø¯ Ø¹Ù„Ù‰ API ÙˆÙ…ØµØ§Ø¯Ù‚Ø© ÙˆÙ…ÙŠØ²Ø§Øª Ù„Ø­Ø¸ÙŠØ©.",
        "Ø³ÙŠØ± Ø¹Ù…Ù„ Ù…Ù†Ø³Ù‘Ù‚ Ù„ØªÙˆÙ„ÙŠØ¯ Ø§Ù„ØµÙˆØ± ÙˆØ§Ù„ÙÙŠØ¯ÙŠÙˆ ÙˆØ§Ù„ØµÙˆØª ÙˆØ§Ù„ØªØ¹Ù„ÙŠÙ‚ Ø§Ù„ØµÙˆØªÙŠØŒ Ù…Ø¹ ØªÙ†Ø³ÙŠÙ‚ Ø®Ø¯Ù…Ø§Øª Ù‚Ø§Ø¦Ù… Ø¹Ù„Ù‰ Docker ÙˆØªØµÙ…ÙŠÙ… Ø®Ø·ÙˆØ· AI Ù…Ø¹ÙŠØ§Ø±ÙŠØ©.",
      ][i],
      tags: [
        [
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "NestJS",
          "Laravel",
          "GraphQL",
        ],
        [
          "ÙˆØ§Ø¬Ù‡Ø§Øª Ø§Ù„Ø§Ø³ØªØ¯Ù„Ø§Ù„",
          "Ø§Ø³ØªØ¯Ø¹Ø§Ø¡ Ø§Ù„Ø£Ø¯ÙˆØ§Øª",
          "Ø­Ù„Ù‚Ø§Øª Ø§Ù„ÙˆÙƒÙ„Ø§Ø¡",
          "ØªØ­Ø³ÙŠÙ† GPU",
        ],
        [
          "Ù…Ø®Ø§Ø²Ù† Ø§Ù„Ù…ØªØ¬Ù‡Ø§Øª",
          "Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ù…Ø³ØªÙ†Ø¯Ø§Øª",
          "Ø§Ù„Ø¨Ø­Ø« Ø¹Ù„Ù‰ Ø§Ù„ÙˆÙŠØ¨",
          "Ø¥Ø¬Ø§Ø¨Ø§Øª Ù…ÙˆØ«Ù‚Ø©",
        ],
        ["Docker", "CI/CD", "ØªÙ†Ø³ÙŠÙ‚ GPU", "Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø®ÙˆØ§Ø¯Ù…"],
        ["React Native", "Expo", "TypeScript", "Ù…Ø¯ÙÙˆØ¹ Ø¨Ù€ API"],
        [
          "Ø®Ø·ÙˆØ· Ø§Ù„ÙˆØ³Ø§Ø¦Ø·",
          "ØªÙ†Ø³ÙŠÙ‚ Ø§Ù„Ø®Ø¯Ù…Ø§Øª",
          "ØªØµÙ…ÙŠÙ… Ù…Ø¹ÙŠØ§Ø±ÙŠ",
        ],
      ][i],
    })),
  },
  aiSystems: {
    ...en.aiSystems,
    title: "Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ",
    subtitle:
      "Ø£ØµÙ…Ù… Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ù„Ø§ Ø¨ÙˆØµÙÙ‡ Ø·Ø¨Ù‚Ø© Ù…Ø­Ø§Ø¯Ø«Ø© ÙØ­Ø³Ø¨ØŒ Ø¨Ù„ ÙƒØ¢Ù„ÙŠØ© Ù„Ø§ØªØ®Ø§Ø° Ø§Ù„Ù‚Ø±Ø§Ø± ÙˆØ§Ù„Ø¥Ù†ØªØ§Ø¬ Ù…Ø¯Ù…Ø¬Ø© ÙÙŠ Ø§Ù„Ù…Ù†ØªØ¬ Ù†ÙØ³Ù‡.",
    pipeline: {
      data: "Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª",
      retrieval: "Ø§Ù„Ø§Ø³ØªØ±Ø¬Ø§Ø¹",
      reasoning: "Ø§Ù„Ø§Ø³ØªØ¯Ù„Ø§Ù„",
      tools: "Ø§Ù„Ø£Ø¯ÙˆØ§Øª",
      verification: "Ø§Ù„ØªØ­Ù‚Ù‚",
      experience: "ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…",
    },
    sections: en.aiSystems.sections.map((s, i) => ({
      ...s,
      title: [
        "Ø¨Ù†ÙŠØ© Ø§Ù„Ø§Ø³ØªØ¯Ù„Ø§Ù„ Ø§Ù„ØªØ­ØªÙŠØ©",
        "Ø§Ù„ØªÙˆÙ„ÙŠØ¯ Ø§Ù„Ù…Ø¯Ø¹ÙˆÙ… Ø¨Ø§Ù„Ø§Ø³ØªØ±Ø¬Ø§Ø¹",
        "Ø§Ø³ØªØ¯Ø¹Ø§Ø¡ Ø§Ù„Ø£Ø¯ÙˆØ§Øª ÙˆØ³ÙŠØ± Ø¹Ù…Ù„ Ø§Ù„ÙˆÙƒÙ„Ø§Ø¡",
        "Ø§Ù„ØªÙ‚ÙŠÙŠÙ… ÙˆÙ‚Ø§Ø¨Ù„ÙŠØ© Ø§Ù„Ù…Ø±Ø§Ù‚Ø¨Ø©",
      ][i],
      description: [
        "Ø£Ù†Ø¸Ù…Ø© Ø§Ø³ØªØ¯Ù„Ø§Ù„ Ù…Ø­Ù„ÙŠØ© ÙˆÙ…Ø³ØªÙ‚Ù„Ø© Ø¹Ù† Ø§Ù„Ø³Ø­Ø§Ø¨Ø©ØŒ Ù…Ø¹ ØªÙˆØ§Ø²Ù Ù„Ù„Ù…ÙˆØªØ± Ø¹Ø¨Ø± ÙˆØ­Ø¯Ø§Øª GPU Ù…ØªØ¹Ø¯Ø¯Ø©ØŒ ÙˆØªØ­Ù…ÙŠÙ„ Ù…Ø­Ø³Ù‘Ù† Ù„Ù„Ù†Ù…Ø§Ø°Ø¬ØŒ ÙˆÙˆØ§Ø¬Ù‡Ø§Øª API Ù‚ÙŠØ§Ø³ÙŠØ© ØªØªÙŠØ­ Ù„Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„ØªØ¨Ø¯ÙŠÙ„ Ø¨ÙŠÙ† Ø§Ù„Ù…Ø²ÙˆÙ‘Ø¯ÙŠÙ† Ø¯ÙˆÙ† ØªØºÙŠÙŠØ± Ø§Ù„ÙƒÙˆØ¯.",
        "Ø®Ø·ÙˆØ· RAG ØªØ±Ø¨Ø· Ø§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø¨Ù‚ÙˆØ§Ø¹Ø¯ Ù…Ø¹Ø§Ø±ÙÙ‡Ø§ Ø§Ù„Ø®Ø§ØµØ©ØŒ Ù…Ø¹ ØªØ¶Ù…ÙŠÙ†Ø§Øª Ù…ØªØ¬Ù‡ÙŠØ© ÙˆØ§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ§Øª Ù„ØªÙ‚Ø³ÙŠÙ… Ø§Ù„Ù…Ø³ØªÙ†Ø¯Ø§Øª ÙˆØ¨Ø­Ø« Ù‡Ø¬ÙŠÙ† ÙˆØ¥Ø¬Ø§Ø¨Ø§Øª Ù…Ø±ØªØ¨Ø·Ø© Ø¨Ù…ØµØ§Ø¯Ø± ÙˆØ¨ÙŠØ§Ù†Ø§Øª Ù…ÙˆØ«ÙˆÙ‚Ø©.",
        "Ø£Ù†Ø¸Ù…Ø© Ø°ÙƒØ§Ø¡ Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ØªØ³ØªØ·ÙŠØ¹ Ø§Ø³ØªØ¯Ø¹Ø§Ø¡ Ø§Ù„Ø£Ø¯ÙˆØ§Øª ÙˆØªÙ†ÙÙŠØ° Ø§Ù„ÙˆØ¸Ø§Ø¦Ù ÙˆØ§Ù„Ø¨Ø­Ø« Ø¹Ù„Ù‰ Ø§Ù„ÙˆÙŠØ¨ ÙˆØ§Ù„ØªØ¹Ø§Ù…Ù„ Ù…Ø¹ Ø§Ù„Ù…Ù‡Ø§Ù… Ù…ØªØ¹Ø¯Ø¯Ø© Ø§Ù„Ø®Ø·ÙˆØ§ØªØŒ Ù…Ø¹ Ø­Ù„Ù‚Ø§Øª ØªØ­Ù‚Ù‚ ØªØ±Ø§Ø¬Ø¹ Ø§Ù„Ù†ØªØ§Ø¦Ø¬ Ù‚Ø¨Ù„ Ø¹Ø±Ø¶Ù‡Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù….",
        "Ù…Ù‚Ø§ÙŠÙŠØ³ ÙˆØªØªØ¨Ø¹ ÙˆØ£Ø·Ø± ØªÙ‚ÙŠÙŠÙ… Ù„Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ. Ø£ÙÙ‡Ù… Ø²Ù…Ù† Ø§Ù„Ø§Ø³ØªØ¬Ø§Ø¨Ø© ÙˆØ§Ù„Ø¯Ù‚Ø© ÙˆØ§Ù„ØªÙƒÙ„ÙØ© ÙˆØ§Ù„Ø§Ù†Ø­Ø±Ø§ÙØŒ Ù„Ø£Ù† Ø§Ù„Ù†Ø¸Ø§Ù… Ø§Ù„Ø°ÙŠ Ù„Ø§ ÙŠÙ…ÙƒÙ†Ùƒ Ù‚ÙŠØ§Ø³Ù‡ Ù„ÙŠØ³ Ù†Ø¸Ø§Ù…Ø§Ù‹ ÙŠÙ…ÙƒÙ†Ùƒ Ø§Ù„ÙˆØ«ÙˆÙ‚ Ø¨Ù‡.",
      ][i],
    })),
  },
  work: {
    ...en.work,
    title: "Ù…Ø´Ø§Ø±ÙŠØ¹ Ù…Ø®ØªØ§Ø±Ø©",
    subtitle:
      "Ù…Ù†ØªØ¬Ø§Øª ÙˆØ£Ù†Ø¸Ù…Ø© ÙˆØ¨Ù†Ù‰ ØªØ­ØªÙŠØ© â€” Ù…Ù† Ø§Ù„ÙÙƒØ±Ø© Ø¥Ù„Ù‰ Ø§Ù„Ø¥Ù†ØªØ§Ø¬.",
    projects: en.work.projects.map((p, i) => ({
      ...p,
      title: [
        "Ù…Ù†ØªØ¬Ø§Øª ÙˆÙŠØ¨ Full-Stack",
        "Ù…Ø®ØªØ¨Ø± Ø§Ø³ØªØ¯Ù„Ø§Ù„ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ",
        "ØªØ·Ø¨ÙŠÙ‚Ø§Øª RAG ÙˆØ§Ù„Ù…Ø¹Ø±ÙØ©",
        "Ø§Ù„Ø¨Ù†ÙŠØ© Ø§Ù„ØªØ­ØªÙŠØ© Ø§Ù„Ø¥Ø¨Ø¯Ø§Ø¹ÙŠØ© Ù„Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ",
        "ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ù‡Ø§ØªÙ Ø§Ù„Ù…Ø­Ù…ÙˆÙ„",
        "Ø£Ø¯ÙˆØ§Øª Ø§Ù„Ù…Ø·ÙˆØ±ÙŠÙ†",
      ][i],
      type: [
        "Ø¹Ù…Ù„Ø§Ø¡",
        "Ù…Ø®ØªØ¨Ø± Ø´Ø®ØµÙŠ",
        "Ù…Ø®ØªØ¨Ø± Ø´Ø®ØµÙŠ",
        "Ù…Ø®ØªØ¨Ø± Ø´Ø®ØµÙŠ",
        "Ù…Ø´Ø±ÙˆØ¹ Ø®Ø§Øµ",
        "Ù…Ø®ØªØ¨Ø± Ø´Ø®ØµÙŠ",
      ][i],
      problem: [
        "ÙŠØ­ØªØ§Ø¬ Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ Ø¥Ù„Ù‰ ØªØ·Ø¨ÙŠÙ‚Ø§Øª ÙˆÙŠØ¨ Ù…ÙˆØ«ÙˆÙ‚Ø© ÙˆÙ‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªÙˆØ³Ø¹ØŒ ØªØ¹Ù…Ù„ Ø¹Ù„Ù‰ Ù…Ø®ØªÙ„Ù Ø§Ù„Ø£Ø¬Ù‡Ø²Ø© ÙˆØªØ®Ø¯Ù… Ø§Ø­ØªÙŠØ§Ø¬Ø§Øª Ø§Ù„Ø£Ø¹Ù…Ø§Ù„ Ø§Ù„Ø­Ù‚ÙŠÙ‚ÙŠØ©ØŒ Ù„Ø§ Ù…Ø¬Ø±Ø¯ Ø¹Ø±ÙˆØ¶ ØªØ¬Ø±ÙŠØ¨ÙŠØ©.",
        "ÙŠØªØ·Ù„Ø¨ ØªØ´ØºÙŠÙ„ Ø§Ù„Ø§Ø³ØªØ¯Ù„Ø§Ù„ Ù…Ø­Ù„ÙŠØ§Ù‹ ØªÙ†Ø³ÙŠÙ‚Ø§Ù‹ Ø¯Ù‚ÙŠÙ‚Ø§Ù‹ Ø¨ÙŠÙ† Ø§Ù„Ø¹ØªØ§Ø¯ ÙˆØ§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ§Øª ÙˆØ§Ù„Ø´Ø¨ÙƒØ©ØŒ Ø¨ÙŠÙ†Ù…Ø§ ØªØªÙˆÙ‚Ù Ù…Ø¹Ø¸Ù… Ø§Ù„Ø´Ø±ÙˆØ­Ø§Øª Ø¹Ù†Ø¯ ØªØ¬Ø±Ø¨Ø© Ø¨Ø³ÙŠØ·Ø©.",
        "ÙŠØ¬Ø¨ Ø£Ù† ØªØ¬ÙŠØ¨ Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ù…Ù† Ù…ØµØ§Ø¯Ø± Ù…ÙˆØ«ÙˆÙ‚Ø©ØŒ Ù„Ø§ Ø£Ù† ØªÙ†ØªØ¬ ÙƒÙ„Ø§Ù…Ø§Ù‹ ÙŠØ¨Ø¯Ùˆ Ù…Ù‚Ù†Ø¹Ø§Ù‹ ÙØ­Ø³Ø¨. ØªØ£ØµÙŠÙ„ Ø§Ù„Ù…Ø¹Ø±ÙØ© Ù‡Ùˆ Ø§Ù„ÙØ§Ø±Ù‚ Ø¨ÙŠÙ† Ù„Ø¹Ø¨Ø© ÙˆØ£Ø¯Ø§Ø©.",
        "ØªÙ…ØªØ¯ Ø³ÙŠØ± Ø¹Ù…Ù„ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø§Ù„Ø¥Ø¨Ø¯Ø§Ø¹ÙŠ Ø¹Ø¨Ø± Ø§Ù„ØµÙˆØ± ÙˆØ§Ù„ÙÙŠØ¯ÙŠÙˆ ÙˆØ§Ù„ØµÙˆØª ÙˆØ§Ù„ØªØ¹Ù„ÙŠÙ‚ØŒ ÙˆÙ„ÙƒÙ„ Ù…Ù†Ù‡Ø§ Ø£Ø¯ÙˆØ§Øª ÙˆØµÙŠØº ÙˆÙ…ØªØ·Ù„Ø¨Ø§Øª Ù…ÙˆØ§Ø±Ø¯ Ù…Ø®ØªÙ„ÙØ©.",
        "ÙŠØ­ØªØ§Ø¬ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙˆÙ† Ø¥Ù„Ù‰ ØªØ¬Ø§Ø±Ø¨ Ù…Ø­Ù…ÙˆÙ„Ø© Ù…ÙˆØ«ÙˆÙ‚Ø© Ø¨Ù…ÙŠØ²Ø§Øª Ù„Ø­Ø¸ÙŠØ© ÙˆÙ…ØµØ§Ø¯Ù‚Ø© ÙˆØªÙØ§Ø¹Ù„ Ø§Ø¬ØªÙ…Ø§Ø¹ÙŠØŒ Ù…Ø¨Ù†ÙŠØ© Ø¨Ø£Ø¯ÙˆØ§Øª Ø­Ø¯ÙŠØ«Ø©.",
        "ØªØ­ØªØ§Ø¬ ÙØ±Ù‚ Ø§Ù„Ù‡Ù†Ø¯Ø³Ø© Ø¥Ù„Ù‰ Ø£Ø¯ÙˆØ§Øª ØªÙ‚Ù„Ù„ Ø§Ù„Ø§Ø­ØªÙƒØ§ÙƒØŒ Ù…Ù† Ø¨ÙŠØ¦Ø§Øª Ø§Ù„ØªØ·ÙˆÙŠØ± Ø§Ù„Ù…Ø­Ù„ÙŠØ© Ø¥Ù„Ù‰ Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª Ø§Ù„Ø¢Ù„ÙŠØ© ÙˆØ®Ø·ÙˆØ· Ø§Ù„Ù†Ø´Ø±.",
      ][i],
      solution: [
        "Ø¨Ù†ÙŠØª Ù…Ù†ØªØ¬Ø§Øª ÙˆÙŠØ¨ Ù…ØªÙƒØ§Ù…Ù„Ø© Ø¨ÙˆØ§Ø¬Ù‡Ø§Øª React ÙˆTypeScriptØŒ ÙˆØ®Ù„ÙÙŠØ§Øª Node.js ÙˆLaravelØŒ ÙˆÙˆØ§Ø¬Ù‡Ø§Øª GraphQL ÙˆRESTØŒ ÙˆÙ‚ÙˆØ§Ø¹Ø¯ PostgreSQLØŒ ÙˆØ£Ù†Ø¸Ù…Ø© Ù…ØµØ§Ø¯Ù‚Ø© ÙˆÙˆØ§Ø¬Ù‡Ø§Øª Ù…Ø¯ÙÙˆØ¹Ø© Ø¨Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª.",
        "Ø¨Ù†ÙŠØª Ø®Ø§Ø¯Ù…Ø§Ù‹ Ù„Ù„Ø§Ø³ØªØ¯Ù„Ø§Ù„ Ø¨ÙˆØ­Ø¯ØªÙŠ GPUØŒ Ù…Ø¹ ÙˆØ§Ø¬Ù‡Ø§Øª API Ù‚ÙŠØ§Ø³ÙŠØ© ÙˆØªÙˆØ¬ÙŠÙ‡ Ù…Ø³ØªÙ‚Ù„ Ø¹Ù† Ø§Ù„Ù†Ù…ÙˆØ°Ø¬ ÙˆØ¥Ø¯Ø§Ø±Ø© Ù„Ù„Ù…ÙˆØ§Ø±Ø¯ ÙˆØªÙ†Ø³ÙŠÙ‚ Ù„Ù„Ø®Ø¯Ù…Ø§Øª Ø¹Ø¨Ø± Docker. ÙˆØªØªØµÙ„ Ø§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø¨Ù‡ Ø¨Ø³Ù„Ø§Ø³Ø© Ø³ÙˆØ§Ø¡ Ø¹Ù…Ù„ Ø§Ù„Ù†Ù…ÙˆØ°Ø¬ Ù…Ø­Ù„ÙŠØ§Ù‹ Ø£Ùˆ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø­Ø§Ø¨Ø©.",
        "ØµÙ…Ù…Øª Ø®Ø·ÙˆØ· RAG ØªØ¶Ù… Ù‚ÙˆØ§Ø¹Ø¯ Ø¨ÙŠØ§Ù†Ø§Øª Ù…ØªØ¬Ù‡ÙŠØ© ÙˆÙ…Ø¹Ø§Ù„Ø¬Ø© Ù…Ø³ØªÙ†Ø¯Ø§Øª ÙˆØªÙƒØ§Ù…Ù„Ø§Ù‹ Ù…Ø¹ Ø§Ù„Ø¨Ø­Ø« Ø¹Ù„Ù‰ Ø§Ù„ÙˆÙŠØ¨ ÙˆØ§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ§Øª Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ù‡Ø¬ÙŠÙ†Ø©ØŒ Ù„ØªÙ†ØªØ¬ Ø§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø¥Ø¬Ø§Ø¨Ø§Øª Ù…ÙˆØ«Ù‚Ø© Ù…Ø±ØªØ¨Ø·Ø© Ø¨Ù…ØµØ§Ø¯Ø±.",
        "Ù†Ø³Ù‘Ù‚Øª Ø§Ø³ØªÙˆØ¯ÙŠÙˆ Ù…Ø­Ù„ÙŠØ§Ù‹ Ù„Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø§Ù„Ø¥Ø¨Ø¯Ø§Ø¹ÙŠ Ù…Ø¹ Ø³ÙŠØ± Ø¹Ù…Ù„ Ø´Ø¨ÙŠÙ‡ Ø¨Ù€ ComfyUI ÙˆØ¥Ø¯Ø§Ø±Ø© Ø®Ø¯Ù…Ø§Øª Docker ÙˆØªÙ†Ø³ÙŠÙ‚ Ù…ÙˆØ§Ø±Ø¯ GPU ÙˆØªØµÙ…ÙŠÙ… Ù…Ø¹ÙŠØ§Ø±ÙŠ Ù„Ù„Ø®Ø·ÙˆØ·ØŒ ÙˆÙƒÙ„ Ø°Ù„Ùƒ Ø¹Ù„Ù‰ Ø®Ø§Ø¯Ù… GPU ÙˆØ§Ø­Ø¯.",
        "Ø·ÙˆØ±Øª ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ù…Ø­Ù…ÙˆÙ„Ø© Ù…ØªØ¹Ø¯Ø¯Ø© Ø§Ù„Ù…Ù†ØµØ§Øª Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… React Native ÙˆExpoØŒ Ù…Ø¯Ø¹ÙˆÙ…Ø© Ø¨ÙˆØ§Ø¬Ù‡Ø§Øª GraphQL ÙˆÙ‚ÙˆØ§Ø¹Ø¯ PostgreSQL ÙˆØ§Ù„Ù…ØµØ§Ø¯Ù‚Ø© ÙˆØ§Ù„Ø±Ø³Ø§Ø¦Ù„ Ø§Ù„Ù„Ø­Ø¸ÙŠØ©.",
        "Ø¨Ù†ÙŠØª Ø£Ø¯ÙˆØ§Øª Ù„Ù„Ù…Ø·ÙˆØ±ÙŠÙ† ØªØ´Ù…Ù„ Ù…Ø³Ø§Ø¹Ø¯ÙŠÙ† Ù…Ø­Ù„ÙŠÙŠÙ† Ù„Ù„Ø¨Ø±Ù…Ø¬Ø© Ù…Ø¯Ø¹ÙˆÙ…ÙŠÙ† Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠØŒ ÙˆØ­Ù„Ù‚Ø§Øª Ù‡Ù†Ø¯Ø³ÙŠØ© Ø¢Ù„ÙŠØ©ØŒ ÙˆØªØµÙ…ÙŠÙ… Ø®Ø·ÙˆØ· CI/CDØŒ ÙˆØ³ÙŠØ± Ø¹Ù…Ù„ Ù„Ù„Ø¨Ù†ÙŠØ© Ø§Ù„ØªØ­ØªÙŠØ© ÙƒÙƒÙˆØ¯.",
      ][i],
      result: [
        "ØªØ·Ø¨ÙŠÙ‚Ø§Øª ÙˆÙŠØ¨ Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ø¥Ù†ØªØ§Ø¬ØŒ Ø¨Ù‡Ù†Ø¯Ø³Ø© Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªÙˆØ³Ø¹ ÙˆÙ‚ÙˆØ§Ø¹Ø¯ ÙƒÙˆØ¯ Ø³Ù‡Ù„Ø© Ø§Ù„ØµÙŠØ§Ù†Ø©.",
        "Ø¨Ù†ÙŠØ© Ø§Ø³ØªØ¯Ù„Ø§Ù„ Ù…Ø­Ù„ÙŠØ© Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ø¥Ù†ØªØ§Ø¬ØŒ ØªØ¯Ø¹Ù… Ù†Ù…Ø§Ø°Ø¬ Ù…ØªØ¹Ø¯Ø¯Ø© ÙˆØ£Ø­Ù…Ø§Ù„Ø§Ù‹ Ù…ØªØ²Ø§Ù…Ù†Ø©.",
        "ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø°ÙƒØ§Ø¡ Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ù…Ø¤Ø³Ù‘Ø³Ø© Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø¹Ø±ÙØ©ØŒ Ù…Ø¹ Ø¥Ø³Ù†Ø§Ø¯ Ù„Ù„Ù…ØµØ§Ø¯Ø± ÙˆÙ…Ø®Ø±Ø¬Ø§Øª Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªØ­Ù‚Ù‚.",
        "Ø§Ø³ØªÙˆØ¯ÙŠÙˆ Ø¥Ø¨Ø¯Ø§Ø¹ÙŠ Ù…Ø­Ù„ÙŠ Ù…ÙˆØ­Ù‘Ø¯ Ù„Ø³ÙŠØ± Ø¹Ù…Ù„ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ù…ØªØ¹Ø¯Ø¯ Ø§Ù„ÙˆØ³Ø§Ø¦Ø· Ø¯ÙˆÙ† Ø§Ø¹ØªÙ…Ø§Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø­Ø§Ø¨Ø©.",
        "ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ù…Ø­Ù…ÙˆÙ„Ø© Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ø¥Ù†ØªØ§Ø¬ØŒ Ø¨Ù…ÙŠØ²Ø§Øª Ù„Ø­Ø¸ÙŠØ© ÙˆØ§ØªØ³Ø§Ù‚ Ø¹Ø¨Ø± Ø§Ù„Ù…Ù†ØµØ§Øª.",
        "Ø£Ø¯ÙˆØ§Øª ØªÙ‚Ù„Ù„ Ø§Ù„Ø§Ø­ØªÙƒØ§Ùƒ ÙˆØªØ³Ø±Ù‘Ø¹ Ø§Ù„Ø§Ù†ØªÙ‚Ø§Ù„ Ù…Ù† Ø§Ù„ÙÙƒØ±Ø© Ø¥Ù„Ù‰ Ø§Ù„Ù†Ø´Ø±.",
      ][i],
    })),
    viewDetails: "Ø¹Ø±Ø¶ Ø§Ù„ØªÙØ§ØµÙŠÙ„",
    closeDetails: "Ø¥ØºÙ„Ø§Ù‚",
  },
  experience: {
    ...en.experience,
    title: "Ø§Ù„Ø®Ø¨Ø±Ø©",
    roles: en.experience.roles.map((r, i) => ({
      ...r,
      period:
        i < 2 ? "Ø­ØªÙ‰ Ø§Ù„Ø¢Ù†" : i === 5 ? "2015â€“2020" : "Ø³Ø§Ø¨Ù‚Ø§Ù‹",
      role: [
        "Ù…Ø·ÙˆØ± JavaScript Full-Stack",
        "Ø§Ù„Ù…Ø¤Ø³Ø³",
        "Ù…Ø·ÙˆØ± JavaScript",
        "Ù…Ø·ÙˆØ± Frontend",
        "Ù…Ø·ÙˆØ± Ø¨Ø¯ÙˆØ§Ù… Ø¬Ø²Ø¦ÙŠ",
        "Ù…Ø·ÙˆØ± Ø¨Ø±Ù…Ø¬ÙŠØ§Øª",
      ][i],
      description: [
        "Ù‡Ù†Ø¯Ø³Ø© Full-Stack Ø¹Ù† Ø¨ÙØ¹Ø¯ Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… JavaScript ÙˆTypeScriptØŒ ÙˆØªØ·ÙˆÙŠØ± Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª ÙˆØªØµÙ…ÙŠÙ… ÙˆØ§Ø¬Ù‡Ø§Øª API ÙˆÙ‡Ù†Ø¯Ø³Ø© Ø§Ù„Ø£Ù†Ø¸Ù…Ø©.",
        "ØªØ£Ø³ÙŠØ³ ÙˆØ¥Ø¯Ø§Ø±Ø© Ø§Ø³ØªÙˆØ¯ÙŠÙˆ Ù„Ù„Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„Ø±Ù‚Ù…ÙŠØ©ØŒ Ù…Ø¹ Ø§Ù„Ø¹Ù…Ù„ ÙÙŠ Ø§Ù„ØªØ·ÙˆÙŠØ± Full-Stack ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ÙˆÙ‡Ù†Ø¯Ø³Ø© Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª.",
        "ØªØ·ÙˆÙŠØ± JavaScript Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„ÙˆÙŠØ¨ØŒ Ù…Ø¹ Ø§Ù„Ø¹Ù…Ù„ Ø¹Ù„Ù‰ Ø§Ù„ÙˆØ§Ø¬Ù‡Ø§Øª Ø§Ù„Ø£Ù…Ø§Ù…ÙŠØ© ÙˆØ§Ù„Ø®Ù„ÙÙŠØ§Øª.",
        "Ù‡Ù†Ø¯Ø³Ø© Ø§Ù„ÙˆØ§Ø¬Ù‡Ø§Øª Ø§Ù„Ø£Ù…Ø§Ù…ÙŠØ© Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø£Ø·Ø± Ø­Ø¯ÙŠØ«Ø©ØŒ Ù…Ø¹ ØªØµÙ…ÙŠÙ… Ø§Ù„Ù…ÙƒÙˆÙ†Ø§Øª ÙˆÙˆØ§Ø¬Ù‡Ø§Øª Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù….",
        "Ù‡Ù†Ø¯Ø³Ø© Ù…Ø³ØªÙ‚Ù„Ø© ÙÙŠ Ù…Ø¬Ø§Ù„Ø§Øª Ø§Ù„ÙˆÙŠØ¨ ÙˆØ§Ù„Ù‡Ø§ØªÙ Ø§Ù„Ù…Ø­Ù…ÙˆÙ„ ÙˆØ§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠØŒ Ø¹Ø¨Ø± Ù…Ø¬Ù…ÙˆØ¹Ø© Ù…ØªÙ†ÙˆØ¹Ø© Ù…Ù† Ø§Ù„ØªÙ‚Ù†ÙŠØ§Øª.",
        "Ø¨Ø¯Ø£Øª Ø¨Ø¨Ù†Ø§Ø¡ ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„ÙˆÙŠØ¨ ÙˆØ§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„Ø±Ù‚Ù…ÙŠØ© Ù…Ù† Ø®Ù„Ø§Ù„ Ø§Ù„Ø¹Ù…Ù„ Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠ Ø§Ù„Ø§Ø­ØªØ±Ø§ÙÙŠ ÙˆØ§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ Ø§Ù„Ù…Ø³ØªÙ‚Ù„Ø©.",
      ][i],
    })),
  },
  principles: {
    ...en.principles,
    title: "Ù…Ø¨Ø§Ø¯Ø¦ Ø§Ù„Ù‡Ù†Ø¯Ø³Ø©",
    items: en.principles.items.map((x, i) => ({
      ...x,
      text: [
        "Ø§Ø¨Ù†Ù Ø£Ù†Ø¸Ù…Ø© ÙŠÙ…ÙƒÙ† Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù†Ù‡Ø§",
        "Ø§Ø¬Ø¹Ù„ Ø§Ù„ØªØ¹Ù‚ÙŠØ¯ Ù‚Ø§Ø¨Ù„Ø§Ù‹ Ù„Ù„Ù…Ø±Ø§Ù‚Ø¨Ø©",
        "ØµÙ…Ù‘Ù… Ø§Ù„Ø­Ù„Ù‚Ø©ØŒ Ù„Ø§ Ø§Ù„Ù…ÙˆØ¬Ù‘Ù‡ ÙˆØ­Ø¯Ù‡",
        "Ø£Ø¨Ù‚Ù Ø§Ù„ÙˆØ§Ø¬Ù‡Ø§Øª Ø¨Ø³ÙŠØ·Ø© ÙˆØ§Ù„Ø¨Ù†ÙŠØ© Ø§Ù„ØªØ­ØªÙŠØ© ØµØ§Ø¯Ù‚Ø©",
        "Ø­ÙˆÙ‘Ù„ Ø§Ù„ØªØ¬Ø§Ø±Ø¨ Ø¥Ù„Ù‰ Ø£Ù†Ø¸Ù…Ø© Ù‚Ø§Ø¨Ù„Ø© Ù„Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù…",
        "Ø§Ø´Ø­Ù† Ø¨Ø±Ù…Ø¬ÙŠØ§Øª ØªØ¹Ù…Ù„ ÙØ¹Ù„Ø§Ù‹",
      ][i],
    })),
  },
  contact: {
    ...en.contact,
    title: "Ù„Ù†Ø¨Ù†Ù Ø´ÙŠØ¦Ø§Ù‹ Ù…Ø¹Ø§Ù‹",
    subtitle:
      "Ø£ØªØ¹Ø§ÙˆÙ† ÙÙŠ Ù…Ù†ØªØ¬Ø§Øª Full-Stack ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ÙˆØ§Ù„ØªØ­Ø¯ÙŠØ§Øª Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠØ© Ø§Ù„ØªÙŠ ØªØªØ·Ù„Ø¨ ØªÙÙƒÙŠØ±Ø§Ù‹ ØªÙ‚Ù†ÙŠØ§Ù‹ Ø¹Ù…ÙŠÙ‚Ø§Ù‹. Ø¥Ø°Ø§ ÙƒØ§Ù† Ù…Ø´Ø±ÙˆØ¹Ùƒ ÙŠØ­ØªØ§Ø¬ Ø¥Ù„Ù‰ Ø´Ø®Øµ ÙŠÙ†Ø¬Ø² Ø§Ù„Ø¹Ù…Ù„ØŒ ÙÙ„Ù†ØªØ­Ø¯Ø«.",
    email: "ØªÙˆØ§ØµÙ„ Ù…Ø¹ÙŠ",
    emailPlaceholder: "hello@serkanakman.dev",
  },
  footer: {
    ...en.footer,
    tagline:
      "Ù‡Ù†Ø¯Ø³Ø© Full-Stack Â· Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Â· Ø¨Ù†ÙŠØ© Ø§Ù„Ø§Ø³ØªØ¯Ù„Ø§Ù„ Ø§Ù„ØªØ­ØªÙŠØ©",
    built: "Ø¨ÙÙ†ÙŠ Ø¨ÙˆØ§Ø³Ø·Ø© innodigi.",
    copyright: "Â© {year} Serkan Akman. Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø­Ù‚ÙˆÙ‚ Ù…Ø­ÙÙˆØ¸Ø©.",
  },
  languageSwitcher: {
    en: "Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ©",
    tr: "Ø§Ù„ØªØ±ÙƒÙŠØ©",
    de: "Ø§Ù„Ø£Ù„Ù…Ø§Ù†ÙŠØ©",
    sr: "Ø§Ù„ØµØ±Ø¨ÙŠØ©",
    fr: "Ø§Ù„ÙØ±Ù†Ø³ÙŠØ©",
    it: "Ø§Ù„Ø¥ÙŠØ·Ø§Ù„ÙŠØ©",
    ar: "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
    he: "Ø§Ù„Ø¹Ø¨Ø±ÙŠØ©",
  },
};

export const he: TranslationContent = {
  ...en,
  nav: {
    about: "××•×“×•×ª",
    expertise: "×™×›×•×œ×•×ª",
    aiSystems: "×ž×¢×¨×›×•×ª AI",
    work: "×¤×¨×•×™×§×˜×™×",
    experience: "× ×™×¡×™×•×Ÿ",
    principles: "×¢×§×¨×•× ×•×ª",
    contact: "×™×¦×™×¨×ª ×§×©×¨",
  },
  hero: {
    ...en.hero,
    headline:
      "×× ×™ ×‘×•× ×” ×ž×•×¦×¨×™× ×“×™×’×™×˜×œ×™×™× ×•×ž×¢×¨×›×•×ª ×—×›×ž×•×ª ×‘×ž×¤×’×© ×©×‘×™×Ÿ ×ª×•×›× ×”, × ×ª×•× ×™× ×•×ª×©×ª×™×•×ª.",
    subtitle:
      "×ž×”× ×“×¡ Full-Stack ×‘×›×™×¨ ×•×‘×•× ×” ×ž×¢×¨×›×•×ª AI. ×× ×™ ×”×•×¤×š ×¨×¢×™×•× ×•×ª ×œ×ž×•×¦×¨×™× ×¢×•×‘×“×™× ×•×ª×©×ª×™×•×ª ×ž×•×¨×›×‘×•×ª ×œ×—×•×•×™×•×ª ××ž×™× ×•×ª. ×¢×•×‘×“ ×ž×¨×—×•×§.",
    ctaPrimary: "×œ×¦×¤×™×™×” ×‘×¤×¨×•×™×§×˜×™×",
    ctaSecondary: "×‘×•××• × ×“×‘×¨",
    statusLabel: "×–×ž×™×Ÿ ×œ×©×™×ª×•×¤×™ ×¤×¢×•×œ×”",
    infraCard: {
      client: "×¡×‘×™×‘×ª ×¤×™×ª×•×—",
      middleware: "×©×›×‘×ª API",
      inference: "×ž× ×•×¢ ×”×¡×§×”",
      systems: "RAG Â· ×›×œ×™× Â· ×™×™×©×•×ž×™×",
    },
  },
  about: {
    ...en.about,
    title: "××•×“×•×ª",
    paragraph1:
      "×× ×™ ×ž×”× ×“×¡ Full-Stack ×‘×›×™×¨ ×©×‘×•× ×” ×™×™×©×•×ž×™ ×•×•×‘, ×›×œ×™ ×¤×™×ª×•×— ×•×ž×¢×¨×›×•×ª AI. ×”×ª×—×œ×ª×™ ×œ×‘× ×•×ª ×™×™×©×•×ž×™× ×•×ž×•×¦×¨×™× ×“×™×’×™×˜×œ×™×™× ×‘×ž×¡×’×¨×ª ×¢×‘×•×“×” ×ž×§×¦×•×¢×™×ª ×•×¤×¨×•×™×§×˜×™× ×¢×¦×ž××™×™×, ×•×‘×”×ž×©×š ×”×ª×ž×—×™×ª×™ ×‘×”× ×“×¡×ª ×ž×•×¦×¨×™× ×ž×§×¦×” ×œ×§×¦×” ×•×‘×ª×›× ×•×Ÿ ×ž×¢×¨×›×•×ª AI.",
    paragraph2:
      "×× ×™ ×‘×•× ×” ×ž×•×¦×¨×™× ×ž×§×¦×” ×œ×§×¦×” â€” ×ž×ž×•×“×œ×™ × ×ª×•× ×™× ×•×ª×›× ×•×Ÿ API ×•×¢×“ ×œ×ž×ž×©×§×™× ×©×× ×©×™× ×ž×©×ª×ž×©×™× ×‘×”× ×ž×“×™ ×™×•×. ×× ×™ ×¢×•×‘×“ ×¢× TypeScript, React, Node.js, Laravel ×•×¤×œ×˜×¤×•×¨×ž×•×ª ×ž×•×‘×™×™×œ. ×‘× ×•×¡×£ ×× ×™ ×ž×ª×›× ×Ÿ ×•×ž×¤×¢×™×œ ×ª×©×ª×™×•×ª ×”×¡×§×” ×ž×§×•×ž×™×•×ª ×•×‘×œ×ª×™ ×ª×œ×•×™×•×ª ×‘×¢× ×Ÿ ×¢×‘×•×¨ ××—×–×•×¨ ×ž×™×“×¢, ×§×¨×™××•×ª ×œ×›×œ×™× ×•×ª×”×œ×™×›×™ ×¢×‘×•×“×” ×©×œ ×¡×•×›× ×™×.",
    paragraph3:
      "×›×™×•× ×× ×™ ×¢×•×‘×“ ×ž×¨×—×•×§ ×›-Full Stack JavaScript Developer ×‘-nmi.com ×•×ž×™×™×¡×“ ××ª innodigi.net. ×× ×™ ×ž×¤×¢×™×œ ×ž×¢×‘×“×ª AI ××™×©×™×ª ×”×ž×‘×•×¡×¡×ª ×¢×œ GPU, ×©×‘×” ×× ×™ ×ž×ª× ×¡×” ×‘××•×¤×˜×™×ž×™×–×¦×™×” ×©×œ ×”×¡×§×”, ×‘×¦×™× ×•×¨×•×ª RAG ×•×‘×ž×¢×¨×›×•×ª ×¡×•×›× ×™× ×—×›×ž×•×ª.",
    stats: {
      years: "Senior",
      yearsDesc: "×ž×”× ×“×¡ Full-Stack",
      fullstack: "Full-Stack",
      fullstackDesc: "×”× ×“×¡×ª ×ž×•×¦×¨",
      aiLab: "×ž×‘×•×¡×¡ GPU",
      aiLabDesc: "×ž×¢×‘×“×ª AI",
      remote: "×ž×¨×—×•×§",
      remoteDesc: "×¦×•×•×ª×™× ×‘×™× ×œ××•×ž×™×™×",
    },
  },
  expertise: {
    ...en.expertise,
    title: "×™×›×•×œ×•×ª",
    subtitle:
      "×ž××¨×›×™×˜×§×˜×•×¨×ª ×ž×•×¦×¨ ×•×¢×“ ×ª×©×ª×™×•×ª ×”×¡×§×” â€” ×”×ž×¢×¨×›×•×ª ×©×× ×™ ×‘×•× ×” ×•×”×‘×¢×™×•×ª ×©×× ×™ ×¤×•×ª×¨.",
    cards: en.expertise.cards.map((c, i) => ({
      ...c,
      title: [
        "×”× ×“×¡×ª ×ž×•×¦×¨ Full-Stack",
        "×”×¡×§×ª AI ×•×ž×¢×¨×›×•×ª ×¡×•×›× ×™×",
        "RAG ×•×ž×¢×¨×›×•×ª ×™×“×¢",
        "×›×œ×™ ×¤×™×ª×•×— ×•×ª×©×ª×™×•×ª",
        "×™×™×©×•×ž×™ ×ž×•×‘×™×™×œ",
        "×ª×©×ª×™×•×ª AI ×™×¦×™×¨×ª×™×•×ª",
      ][i],
      description: [
        "×ž×•×¦×¨×™ ×•×•×‘ ×ž×œ××™× ×ž×©×›×‘×ª ×”× ×ª×•× ×™× ×•×¢×“ ×œ×ž×ž×©×§ ×‘×¤×¨×•×“×§×©×Ÿ, ×‘××ž×¦×¢×•×ª TypeScript, React, Next.js, Node.js, NestJS, Laravel, GraphQL ×•-REST.",
        "×ª×©×ª×™×•×ª ×”×¡×§×” ×‘×œ×ª×™ ×ª×œ×•×™×•×ª ×‘×ž×•×“×œ, ×ž×¡×’×¨×•×ª ×œ×§×¨×™××•×ª ×œ×›×œ×™×, ×ª×”×œ×™×›×™ ×¢×‘×•×“×” ×©×œ ×¡×•×›× ×™× ×¢× ×œ×•×œ××•×ª ××™×ž×•×ª ×•×¤×¨×™×¡×” ×ž×§×•×ž×™×ª ×”×ž×•×ª××ž×ª ×œ-GPU.",
        "×¦×™× ×•×¨×•×ª RAG, ×ž×¡×“×™ × ×ª×•× ×™× ×•×§×˜×•×¨×™×™×, ×¢×™×‘×•×“ ×ž×¡×ž×›×™×, ×©×™×œ×•×‘ ×—×™×¤×•×© ×‘×¨×©×ª ×•×ª×©×•×‘×•×ª AI ×”×ž×‘×•×¡×¡×•×ª ×¢×œ ×ž×§×•×¨×•×ª.",
        "×›×œ×™ ×¤×™×ª×•×—, ×ª×–×ž×•×¨ Docker, ×¦×™× ×•×¨×•×ª CI/CD, × ×™×”×•×œ ×ž×©××‘×™× ×ž×•×“×¢ ×œ-GPU ×•×ª×©×ª×™×•×ª ×©×¨×ª×™× ×œ×¢×•×ž×¡×™ AI.",
        "×ž×•×¦×¨×™ ×ž×•×‘×™×™×œ ×—×•×¦×™ ×¤×œ×˜×¤×•×¨×ž×•×ª ×¢× React Native ×•-Expo, ××¨×›×™×˜×§×˜×•×¨×•×ª ×ž×‘×•×¡×¡×•×ª API, ××™×ž×•×ª ×•×ª×›×•× ×•×ª ×‘×–×ž×Ÿ ××ž×ª.",
        "×ª×”×œ×™×›×™ ×¢×‘×•×“×” ×ž×ª×•×–×ž×¨×™× ×œ×™×¦×™×¨×ª ×ª×ž×•× ×•×ª, ×•×™×“××•, ××•×“×™×• ×•×§×¨×™×™× ×•×ª, ×¢× ×ª×–×ž×•×¨ ×©×™×¨×•×ª×™× ×ž×‘×•×¡×¡ Docker ×•×ª×›× ×•×Ÿ ×ž×•×“×•×œ×¨×™.",
      ][i],
      tags: [
        [
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "NestJS",
          "Laravel",
          "GraphQL",
        ],
        [
          "×ž×ž×©×§×™ ×”×¡×§×”",
          "×§×¨×™××•×ª ×œ×›×œ×™×",
          "×œ×•×œ××•×ª ×¡×•×›× ×™×",
          "××•×¤×˜×™×ž×™×–×¦×™×™×ª GPU",
        ],
        [
          "×ž××’×¨×™ ×•×§×˜×•×¨×™×",
          "×¢×™×‘×•×“ ×ž×¡×ž×›×™×",
          "×—×™×¤×•×© ×‘×¨×©×ª",
          "×ª×©×•×‘×•×ª ×ž×‘×•×¡×¡×•×ª ×ž×§×•×¨",
        ],
        ["Docker", "CI/CD", "×ª×–×ž×•×¨ GPU", "× ×™×”×•×œ ×©×¨×ª×™×"],
        ["React Native", "Expo", "TypeScript", "×ž×‘×•×¡×¡ API"],
        [
          "×¦×™× ×•×¨×•×ª ×ž×“×™×”",
          "×ª×–×ž×•×¨ ×©×™×¨×•×ª×™×",
          "×ª×›× ×•×Ÿ ×ž×•×“×•×œ×¨×™",
        ],
      ][i],
    })),
  },
  aiSystems: {
    ...en.aiSystems,
    title: "×ž×¢×¨×›×•×ª AI",
    subtitle:
      "×× ×™ ×ž×ª×›× ×Ÿ ×‘×™× ×” ×ž×œ××›×•×ª×™×ª ×œ× ×¨×§ ×›×©×›×‘×ª ×¦'××˜, ××œ× ×›×ž× ×’× ×•×Ÿ ×§×‘×œ×ª ×”×—×œ×˜×•×ª ×•×™×™×¦×•×¨ ×”×ž×©×•×œ×‘ ×‘×ž×•×¦×¨ ×¢×¦×ž×•.",
    pipeline: {
      data: "× ×ª×•× ×™×",
      retrieval: "××—×–×•×¨",
      reasoning: "×”×¡×§×”",
      tools: "×›×œ×™×",
      verification: "××™×ž×•×ª",
      experience: "×—×•×•×™×™×ª ×ž×©×ª×ž×©",
    },
    sections: en.aiSystems.sections.map((s, i) => ({
      ...s,
      title: [
        "×ª×©×ª×™×•×ª ×”×¡×§×”",
        "×™×¦×™×¨×” ×ž×‘×•×¡×¡×ª ××—×–×•×¨",
        "×§×¨×™××•×ª ×œ×›×œ×™× ×•×ª×”×œ×™×›×™ ×¡×•×›× ×™×",
        "×”×¢×¨×›×” ×•× ×™×˜×•×¨",
      ][i],
      description: [
        "×ž×¢×¨×›×•×ª ×”×¡×§×” ×ž×§×•×ž×™×•×ª ×•×‘×œ×ª×™ ×ª×œ×•×™×•×ª ×‘×¢× ×Ÿ, ×¢× ×ž×§×‘×™×œ×™×•×ª ×˜× ×–×•×¨×™× ×¢×œ ×¤× ×™ ×›×ž×” ×ž×¢×‘×“×™ GPU, ×˜×¢×™× ×ª ×ž×•×“×œ×™× ××•×¤×˜×™×ž×œ×™×ª ×•×ž×ž×©×§×™ API ×¡×˜× ×“×¨×˜×™×™× ×”×ž××¤×©×¨×™× ×œ×”×—×œ×™×£ ×¡×¤×§×™× ×œ×œ× ×©×™× ×•×™×™ ×§×•×“.",
        "×¦×™× ×•×¨×•×ª RAG ×”×ž×—×‘×¨×™× ×™×™×©×•×ž×™× ×œ×ž××’×¨×™ ×”×™×“×¢ ×©×œ×”×, ×¢× ×”×˜×ž×¢×•×ª ×•×§×˜×•×¨×™×•×ª, ××¡×˜×¨×˜×’×™×•×ª ×œ×—×œ×•×§×ª ×ž×¡×ž×›×™×, ×—×™×¤×•×© ×”×™×‘×¨×™×“×™ ×•×ª×©×•×‘×•×ª ×”×ž×¢×•×’× ×•×ª ×‘×ž×§×•×¨×•×ª ×ž××•×ž×ª×™×.",
        "×ž×¢×¨×›×•×ª AI ×©×™×›×•×œ×•×ª ×œ×§×¨×•× ×œ×›×œ×™×, ×œ×”×¤×¢×™×œ ×¤×•× ×§×¦×™×•×ª, ×œ×—×¤×© ×‘×¨×©×ª ×•×œ×¤×ª×•×¨ ×ž×©×™×ž×•×ª ×ž×¨×•×‘×•×ª ×©×œ×‘×™×, ×¢× ×œ×•×œ××•×ª ××™×ž×•×ª ×©×‘×•×“×§×•×ª ××ª ×”×ª×•×¦××•×ª ×œ×¤× ×™ ×”×¦×’×ª×Ÿ ×œ×ž×©×ª×ž×©.",
        "×ž×“×“×™×, ×ž×¢×§×‘ ×•×ž×¡×’×¨×•×ª ×”×¢×¨×›×” ×œ×ž×¢×¨×›×•×ª AI. ×”×‘× ×ª ×–×ž× ×™ ×ª×’×•×‘×”, ×“×™×•×§, ×¢×œ×•×ª ×•×¡×—×™×¤×” â€” ×›×™ ×ž×¢×¨×›×ª ×©××™ ××¤×©×¨ ×œ×ž×“×•×“ ×”×™× ×ž×¢×¨×›×ª ×©××™ ××¤×©×¨ ×œ×¡×ž×•×š ×¢×œ×™×”.",
      ][i],
    })),
  },
  work: {
    ...en.work,
    title: "×¤×¨×•×™×§×˜×™× × ×‘×—×¨×™×",
    subtitle:
      "×ž×•×¦×¨×™×, ×ž×¢×¨×›×•×ª ×•×ª×©×ª×™×•×ª â€” ×ž×”×¨×¢×™×•×Ÿ ×•×¢×“ ×œ×¤×¨×•×“×§×©×Ÿ.",
    projects: en.work.projects.map((p, i) => ({
      ...p,
      title: [
        "×ž×•×¦×¨×™ ×•×•×‘ Full-Stack",
        "×ž×¢×‘×“×ª ×”×¡×§×ª AI",
        "×™×™×©×•×ž×™ RAG ×•×™×“×¢",
        "×ª×©×ª×™×•×ª AI ×™×¦×™×¨×ª×™×•×ª",
        "×™×™×©×•×ž×™ ×ž×•×‘×™×™×œ",
        "×›×œ×™ ×¤×™×ª×•×—",
      ][i],
      type: [
        "×¢×‘×•×“×ª ×œ×§×•×—",
        "×ž×¢×‘×“×” ××™×©×™×ª",
        "×ž×¢×‘×“×” ××™×©×™×ª",
        "×ž×¢×‘×“×” ××™×©×™×ª",
        "×¤×¨×•×™×§×˜ ×¤×¨×˜×™",
        "×ž×¢×‘×“×” ××™×©×™×ª",
      ][i],
      problem: [
        "×œ×§×•×—×•×ª ×–×§×•×§×™× ×œ×™×™×©×•×ž×™ ×•×•×‘ ××ž×™× ×™× ×•× ×™×ª× ×™× ×œ×”×¨×—×‘×”, ×©×¢×•×‘×“×™× ×‘×›×œ ×ž×›×©×™×¨ ×•×ž×©×¨×ª×™× ×¦×¨×›×™× ×¢×¡×§×™×™× ××ž×™×ª×™×™× â€” ×œ× ×¨×§ ×”×“×’×ž×•×ª.",
        "×”×¤×¢×œ×ª ×”×¡×§×” ×ž×§×•×ž×™×ª ×“×•×¨×©×ª ×ª×™××•× ×ž×“×•×™×§ ×‘×™×Ÿ ×©×›×‘×•×ª ×”×—×•×ž×¨×”, ×”×ª×•×›× ×” ×•×”×¨×©×ª â€” ×‘×¢×•×“ ×©×¨×•×‘ ×”×ž×“×¨×™×›×™× × ×¢×¦×¨×™× ×‘'×©×œ×•× ×¢×•×œ×'.",
        "×ž×¢×¨×›×•×ª AI ×¦×¨×™×›×•×ª ×œ×¢× ×•×ª ×ž×ž×§×•×¨×•×ª ×ž××•×ž×ª×™×, ×œ× ×œ×™×™×¦×¨ ×˜×§×¡×˜ ×©× ×©×ž×¢ ×ž×©×›× ×¢. ×¢×™×’×•×Ÿ ×‘×™×“×¢ ×”×•× ×”×”×‘×“×œ ×‘×™×Ÿ ×¦×¢×¦×•×¢ ×œ×›×œ×™.",
        "×ª×”×œ×™×›×™ AI ×™×¦×™×¨×ª×™×™× ×›×•×œ×œ×™× ×ª×ž×•× ×•×ª, ×•×™×“××•, ××•×“×™×• ×•×§×¨×™×™× ×•×ª â€” ×•×œ×›×œ ×ª×—×•× ×›×œ×™×, ×¤×•×¨×ž×˜×™× ×•×“×¨×™×©×•×ª ×ž×©××‘×™× ×ž×©×œ×•.",
        "×ž×©×ª×ž×©×™× ×–×§×•×§×™× ×œ×—×•×•×™×•×ª ×ž×•×‘×™×™×œ ××ž×™× ×•×ª ×¢× ×ª×›×•× ×•×ª ×‘×–×ž×Ÿ ××ž×ª, ××™×ž×•×ª ×•××™× ×˜×¨××§×¦×™×” ×—×‘×¨×ª×™×ª, ×”×ž×‘×•×¡×¡×•×ª ×¢×œ ×›×œ×™× ×ž×•×“×¨× ×™×™×.",
        "×¦×•×•×ª×™ ×”× ×“×¡×” ×–×§×•×§×™× ×œ×›×œ×™× ×©×ž×¤×—×™×ª×™× ×—×™×›×•×š â€” ×ž×¡×‘×™×‘×•×ª ×¤×™×ª×•×— ×ž×§×•×ž×™×•×ª ×•×¢×“ ×‘×“×™×§×•×ª ××•×˜×•×ž×˜×™×•×ª ×•×¦×™× ×•×¨×•×ª ×¤×¨×™×¡×”.",
      ][i],
      solution: [
        "×‘× ×™×™×ª×™ ×ž×•×¦×¨×™ ×•×•×‘ ×ž×œ××™× ×¢× ×ž×ž×©×§×™ React ×•-TypeScript, ×©×¨×ª×™ Node.js ×•-Laravel, ×ž×ž×©×§×™ GraphQL ×•-REST, ×ž×¡×“×™ PostgreSQL, ×ž×¢×¨×›×•×ª ××™×ž×•×ª ×•×ž×ž×©×§×™× ×ž×‘×•×¡×¡×™ × ×ª×•× ×™×.",
        "×‘× ×™×™×ª×™ ×©×¨×ª ×”×¡×§×” ×›×¤×•×œ-GPU ×¢× ×ž×ž×©×§×™ API ×¡×˜× ×“×¨×˜×™×™×, × ×™×ª×•×‘ ×‘×œ×ª×™ ×ª×œ×•×™ ×‘×ž×•×“×œ, × ×™×”×•×œ ×ž×©××‘×™× ×•×ª×–×ž×•×¨ ×©×™×¨×•×ª×™× ×ž×‘×•×¡×¡ Docker. ×”×™×™×©×•×ž×™× ×ž×ª×—×‘×¨×™× ××œ×™×• ×‘×¦×•×¨×” ××—×™×“×”, ×ž×§×•×ž×™×ª ××• ×‘×¢× ×Ÿ.",
        "×ª×›× × ×ª×™ ×¦×™× ×•×¨×•×ª RAG ×¢× ×ž×¡×“×™ × ×ª×•× ×™× ×•×§×˜×•×¨×™×™×, ×¢×™×‘×•×“ ×ž×¡×ž×›×™×, ×—×™×¤×•×© ×‘×¨×©×ª ×•××¡×˜×¨×˜×’×™×•×ª ××—×–×•×¨ ×”×™×‘×¨×™×“×™×•×ª, ×›×š ×©×”×™×™×©×•×ž×™× ×ž×¤×™×§×™× ×ª×©×•×‘×•×ª ×ž×‘×•×¡×¡×•×ª ×ž×§×•×¨×•×ª.",
        "×ª×–×ž×¨×ª×™ ×¡×˜×•×“×™×• AI ×™×¦×™×¨×ª×™ ×ž×§×•×ž×™ ×¢× ×ª×”×œ×™×›×™ ×¢×‘×•×“×” ×‘×¡×’× ×•×Ÿ ComfyUI, × ×™×”×•×œ ×©×™×¨×•×ª×™ Docker, ×ª×™××•× ×ž×©××‘×™ GPU ×•×ª×›× ×•×Ÿ ×ž×•×“×•×œ×¨×™ â€” ×¢×œ ×©×¨×ª GPU ×™×—×™×“.",
        "×¤×™×ª×—×ª×™ ×™×™×©×•×ž×™ ×ž×•×‘×™×™×œ ×—×•×¦×™ ×¤×œ×˜×¤×•×¨×ž×•×ª ×¢× React Native ×•-Expo, ×ž×’×•×‘×™× ×‘-GraphQL, PostgreSQL, ×ž×¢×¨×›×•×ª ××™×ž×•×ª ×•×”×•×“×¢×•×ª ×‘×–×ž×Ÿ ××ž×ª.",
        "×‘× ×™×™×ª×™ ×›×œ×™ ×¤×™×ª×•×— ×”×›×•×œ×œ×™× ×¢×•×–×¨×™ ×§×•×“ ×ž×§×•×ž×™×™× ×ž×‘×•×¡×¡×™ AI, ×œ×•×œ××•×ª ×”× ×“×¡×™×•×ª ××•×˜×•×ž×˜×™×•×ª, ×ª×›× ×•×Ÿ CI/CD ×•×ª×”×œ×™×›×™ ×ª×©×ª×™×ª ×›×§×•×“.",
      ][i],
      result: [
        "×™×™×©×•×ž×™ ×•×•×‘ ×‘×¨×ž×ª ×¤×¨×•×“×§×©×Ÿ, ×¢× ××¨×›×™×˜×§×˜×•×¨×” × ×™×ª× ×ª ×œ×”×¨×—×‘×” ×•×‘×¡×™×¡ ×§×•×“ ×‘×¨-×ª×—×–×•×§×”.",
        "×ª×©×ª×™×ª ×”×¡×§×” ×ž×§×•×ž×™×ª ×ž×•×›× ×” ×œ×¤×¨×•×“×§×©×Ÿ, ×”×ª×•×ž×›×ª ×‘×ž×•×“×œ×™× ×ž×¨×•×‘×™× ×•×‘×¢×•×ž×¡×™ ×¢×‘×•×“×” ×ž×§×‘×™×œ×™×.",
        "×™×™×©×•×ž×™ AI ×ž×‘×•×¡×¡×™ ×™×“×¢, ×¢× ×™×™×—×•×¡ ×œ×ž×§×•×¨×•×ª ×•×ª×•×¦×¨×™× ×”× ×™×ª× ×™× ×œ××™×ž×•×ª.",
        "×¡×˜×•×“×™×• ×™×¦×™×¨×ª×™ ×ž×§×•×ž×™ ×•×ž××•×—×“ ×œ×ª×”×œ×™×›×™ AI ×¨×‘-×ž×•×“××œ×™×™×, ×œ×œ× ×ª×œ×•×ª ×‘×¢× ×Ÿ.",
        "×™×™×©×•×ž×™ ×ž×•×‘×™×™×œ ×‘×¨×ž×ª ×¤×¨×•×“×§×©×Ÿ ×¢× ×ª×›×•× ×•×ª ×‘×–×ž×Ÿ ××ž×ª ×•×¢×§×‘×™×•×ª ×‘×™×Ÿ ×¤×œ×˜×¤×•×¨×ž×•×ª.",
        "×›×œ×™ ×¤×™×ª×•×— ×©×ž×¤×—×™×ª×™× ×—×™×›×•×š ×•×ž××™×¦×™× ××ª ×”×“×¨×š ×ž×¨×¢×™×•×Ÿ ×œ×¤×¨×™×¡×”.",
      ][i],
    })),
    viewDetails: "×œ×¤×¨×˜×™×",
    closeDetails: "×¡×’×™×¨×”",
  },
  experience: {
    ...en.experience,
    title: "× ×™×¡×™×•×Ÿ",
    roles: en.experience.roles.map((r, i) => ({
      ...r,
      period: i < 2 ? "×”×™×•×" : i === 5 ? "2015â€“2020" : "×‘×¢×‘×¨",
      role: [
        "×ž×¤×ª×— Full Stack JavaScript",
        "×ž×™×™×¡×“",
        "×ž×¤×ª×— JavaScript",
        "×ž×¤×ª×— Frontend",
        "×ž×¤×ª×— ×‘×ž×©×¨×” ×—×œ×§×™×ª",
        "×ž×¤×ª×— ×ª×•×›× ×”",
      ][i],
      description: [
        "×”× ×“×¡×ª Full-Stack ×ž×¨×—×•×§ ×¢× JavaScript ×•-TypeScript, ×¤×™×ª×•×— ×ž×•×¦×¨×™×, ×ª×›× ×•×Ÿ API ×•××¨×›×™×˜×§×˜×•×¨×ª ×ž×¢×¨×›×•×ª.",
        "×”×§×ž×” ×•× ×™×”×•×œ ×©×œ ×¡×˜×•×“×™×• ×œ×ž×•×¦×¨×™× ×“×™×’×™×˜×œ×™×™×, ×¢× ×¤×™×ª×•×— Full-Stack, ×ž×¢×¨×›×•×ª AI ×•×”× ×“×¡×ª ×ž×•×¦×¨.",
        "×¤×™×ª×•×— JavaScript ×œ×™×™×©×•×ž×™ ×•×•×‘, ×›×•×œ×œ ×”× ×“×¡×ª Frontend ×•-Backend.",
        "×”× ×“×¡×ª Frontend ×¢× ×¤×¨×™×™×ž×•×•×¨×§×™× ×ž×•×“×¨× ×™×™×, ××¨×›×™×˜×§×˜×•×¨×ª ×¨×›×™×‘×™× ×•×ž×ž×©×§×™ ×ž×©×ª×ž×©.",
        "×¤×™×ª×•×— ×¢×¦×ž××™ ×‘×ª×—×•×ž×™ ×”×•×•×‘, ×”×ž×•×‘×™×™×œ ×•×”-AI, ×¢× ×ž×’×•×•×Ÿ ×¨×—×‘ ×©×œ ×˜×›× ×•×œ×•×’×™×•×ª.",
        "×”×ª×—×œ×ª×™ ×œ×‘× ×•×ª ×™×™×©×•×ž×™ ×•×•×‘ ×•×ž×•×¦×¨×™× ×“×™×’×™×˜×œ×™×™× ×‘×ž×¡×’×¨×ª ×¢×‘×•×“×” ×ž×§×¦×•×¢×™×ª ×•×¤×¨×•×™×§×˜×™× ×¢×¦×ž××™×™×.",
      ][i],
    })),
  },
  principles: {
    ...en.principles,
    title: "×¢×§×¨×•× ×•×ª ×”× ×“×¡×™×™×",
    items: en.principles.items.map((x, i) => ({
      ...x,
      text: [
        "×œ×‘× ×•×ª ×ž×¢×¨×›×•×ª ×©× ×™×ª×Ÿ ×œ××ž×ª",
        "×œ×”×¤×•×š ××ª ×”×ž×•×¨×›×‘×•×ª ×œ× ×¦×¤×™×ª",
        "×œ×ª×›× ×Ÿ ××ª ×”×œ×•×œ××”, ×œ× ×¨×§ ××ª ×”×¤×¨×•×ž×¤×˜",
        "×œ×©×ž×•×¨ ×¢×œ ×ž×ž×©×§×™× ×¤×©×•×˜×™× ×•×ª×©×ª×™×•×ª ×›× ×•×ª",
        "×œ×”×¤×•×š × ×™×¡×•×™×™× ×œ×ž×¢×¨×›×•×ª ×œ×©×™×ž×•×© ×—×•×–×¨",
        "×œ×¡×¤×§ ×ª×•×›× ×” ×©×¢×•×‘×“×ª",
      ][i],
    })),
  },
  contact: {
    ...en.contact,
    title: "×‘×•××• × ×‘× ×” ×ž×©×”×• ×™×—×“",
    subtitle:
      "×× ×™ ×ž×©×ª×£ ×¤×¢×•×œ×” ×‘×‘× ×™×™×ª ×ž×•×¦×¨×™ Full-Stack, ×ž×¢×¨×›×•×ª AI ×•××ª×’×¨×™× ×”× ×“×¡×™×™× ×©×“×•×¨×©×™× ×—×©×™×‘×” ×˜×›× ×™×ª ×¢×ž×•×§×”. ×× ×”×¤×¨×•×™×§×˜ ×©×œ×›× ×–×§×•×§ ×œ×ž×™×©×”×• ×©×ž×‘×™× ×ª×•×¦××•×ª, ×“×‘×¨×• ××™×ª×™.",
    email: "×™×¦×™×¨×ª ×§×©×¨",
    emailPlaceholder: "hello@serkanakman.dev",
  },
  footer: {
    ...en.footer,
    tagline:
      "×”× ×“×¡×ª Full-Stack Â· ×ž×¢×¨×›×•×ª AI Â· ×ª×©×ª×™×•×ª ×”×¡×§×”",
    built: "× ×‘× ×” ×¢×œ ×™×“×™ innodigi.",
    copyright: "Â© {year} Serkan Akman. ×›×œ ×”×–×›×•×™×•×ª ×©×ž×•×¨×•×ª.",
  },
  languageSwitcher: {
    en: "×× ×’×œ×™×ª",
    tr: "×˜×•×¨×§×™×ª",
    de: "×’×¨×ž× ×™×ª",
    sr: "×¡×¨×‘×™×ª",
    fr: "×¦×¨×¤×ª×™×ª",
    it: "××™×˜×œ×§×™×ª",
    ar: "×¢×¨×‘×™×ª",
    he: "×¢×‘×¨×™×ª",
  },
};

export const translations: Record<Language, TranslationContent> = {
  en,
  tr,
  de,
  sr,
  fr,
  it,
  ar,
  he,
};
