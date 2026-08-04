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
    problemLabel: string;
    solutionLabel: string;
    techLabel: string;
    resultLabel: string;
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
      systems: "RAG · Tools · Applications",
    },
  },
  about: {
    title: "About",
    paragraph1:
      "I am a senior full-stack engineer building web applications, developer tools, and AI systems. I started building web applications and digital products through professional software work and freelance projects, and have since grown into full-stack product engineering and AI systems design.",
    paragraph2:
      "I build products end to end. From data models and API design to the interfaces users actually touch. I work across TypeScript, React, Node.js, Laravel, and mobile platforms. I also design and operate AI inference infrastructure — local and cloud-agnostic systems for retrieval, tool calling, and agent workflows.",
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
      "From product architecture to inference infrastructure — the systems I build and the problems I solve.",
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
          "Metrics, tracing, and evaluation frameworks for AI systems. Understanding latency, accuracy, cost, and drift — because an AI system you cannot measure is a system you cannot trust.",
      },
    ],
  },
  work: {
    title: "Selected Work",
    subtitle:
      "Products, systems, and infrastructure — from concept to production.",
    projects: [
      {
        title: "Full-Stack Web Products",
        type: "Client Work",
        problem:
          "Clients need reliable, scalable web applications that work across devices and serve real business needs — not demos.",
        solution:
          "Built complete web products with React and TypeScript frontends, Node.js and Laravel backends, GraphQL and REST APIs, PostgreSQL databases, authentication systems, and data-driven interfaces.",
        technologies:
          "React · TypeScript · Node.js · Laravel · GraphQL · PostgreSQL",
        result:
          "Production-grade web applications with scalable architecture and maintainable codebases.",
      },
      {
        title: "AI Inference Laboratory",
        type: "Personal Lab",
        problem:
          'Running AI inference locally requires careful orchestration of hardware, software, and network layers — most tutorials stop at "hello world".',
        solution:
          "Built a dual-GPU inference server with standard inference APIs, model-agnostic routing, GPU-aware resource management, and Docker-based service orchestration. Applications connect seamlessly whether the model runs locally or in the cloud.",
        technologies:
          "CUDA · Docker · GPU Orchestration · Inference APIs · Model Routing",
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
          "Vector Databases · Document Processing · Web Search · Hybrid Retrieval",
        result:
          "Knowledge-grounded AI applications with source attribution and verifiable outputs.",
      },
      {
        title: "Creative AI Infrastructure",
        type: "Personal Lab",
        problem:
          "Creative AI workflows span image, video, audio, and narration — each with its own tools, formats, and resource requirements.",
        solution:
          "Orchestrated a local creative AI studio with ComfyUI-style workflows, Docker service management, GPU resource coordination, and modular pipeline design. Everything runs on a single GPU server.",
        technologies: "ComfyUI · Docker · GPU Orchestration · Media Pipelines",
        result:
          "A unified local creative studio for multi-modal AI workflows without cloud dependencies.",
      },
      {
        title: "Mobile Applications",
        type: "Private Project",
        problem:
          "Users need reliable mobile experiences with real-time features, authentication, and social interaction — built with modern tooling.",
        solution:
          "Developed cross-platform mobile applications with React Native and Expo, backed by GraphQL APIs, PostgreSQL databases, authentication systems, and real-time messaging.",
        technologies: "React Native · Expo · GraphQL · Apollo · TypeScript",
        result:
          "Production mobile applications with real-time features and cross-platform consistency.",
      },
      {
        title: "Developer Tools",
        type: "Personal Lab",
        problem:
          "Engineering teams need tools that reduce friction — from local development environments to automated testing and deployment pipelines.",
        solution:
          "Built developer tooling including local AI-powered coding assistants, automated engineering loops, CI/CD pipeline design, and infrastructure-as-code workflows.",
        technologies: "TypeScript · Docker · CI/CD · AI-Assisted Development",
        result:
          "Developer tools that reduce friction and accelerate the path from idea to deployment.",
      },
    ],
    viewDetails: "View Details",
    closeDetails: "Close",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    techLabel: "Technologies",
    resultLabel: "Result",
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
        company: "Boranka Yazılım & Freelancer",
        role: "Software Developer",
        period: "2015–2020",
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
    emailPlaceholder: "akmanserkan65@gmail.com",
  },
  footer: {
    name: "Serkan Akman",
    tagline: "Full-Stack Engineering · AI Systems · Inference Infrastructure",
    built: "Built by innodigi.",
    copyright: "© {year} Serkan Akman. All rights reserved.",
    linkedin: "LinkedIn",
  },
  languageSwitcher: {
    en: "İngilizce",
    tr: "Türkçe",
    de: "Almanca",
    sr: "Sırpça",
    fr: "Fransızca",
    it: "İtalyanca",
    ar: "Arapça",
    he: "İbranice",
  },
} as const;

export const tr = {
  nav: {
    about: "Hakkımda",
    expertise: "Yetkinlikler",
    aiSystems: "AI Sistemleri",
    work: "Projeler",
    experience: "Deneyim",
    principles: "İlkeler",
    contact: "İletişim",
  },
  hero: {
    headline:
      "Yazılımın, verinin ve altyapının kesiştiği noktada dijital ürünler ve akıllı sistemler geliştiriyorum.",
    subtitle:
      "Kıdemli full-stack mühendisi ve AI sistemleri geliştiricisiyim. Fikirleri çalışan ürünlere, karmaşık altyapıları ise güvenilir deneyimlere dönüştürüyorum. Remote çalışıyorum.",
    ctaPrimary: "Projeleri İncele",
    ctaSecondary: "İletişime Geç",
    statusLabel: "İş birliklerine açığım",
    infraCard: {
      client: "Geliştirme Ortamı",
      middleware: "API Katmanı",
      inference: "Çıkarım Motoru",
      systems: "RAG · Araçlar · Uygulamalar",
    },
  },
  about: {
    title: "Hakkımda",
    paragraph1:
      "Web uygulamaları, geliştirici araçları ve AI sistemleri geliştiren kıdemli bir full-stack mühendisim. Yazılım yolculuğuma profesyonel çalışmalar ve freelance projelerle başladım; bugün odağım, uçtan uca ürün mühendisliği ve güvenilir AI sistemleri tasarlamak.",
    paragraph2:
      "Ürünleri uçtan uca geliştiririm: veri modellerinden ve API tasarımından, kullanıcıların her gün etkileşim kurduğu arayüzlere kadar. TypeScript, React, Node.js, Laravel ve mobil platformlarla çalışıyor; bilgi erişimi, araç kullanımı ve akıllı iş akışları için yerel ve buluttan bağımsız AI çıkarım altyapıları tasarlıyorum.",
    paragraph3:
      "Şu anda nmi.com'da remote Full Stack JavaScript Developer olarak çalışıyor, aynı zamanda innodigi.net'i yönetiyorum. Kişisel GPU destekli AI laboratuvarımda çıkarım optimizasyonu, RAG pipeline'ları ve akıllı agent sistemleri üzerine çalışıyorum.",
    stats: {
      years: "Senior",
      yearsDesc: "Full-Stack Developer",
      fullstack: "Full-Stack",
      fullstackDesc: "Ürün Geliştirme",
      aiLab: "GPU Powered",
      aiLabDesc: "AI Laboratuvarı",
      remote: "Remote",
      remoteDesc: "Uluslararası Takımlar",
    },
  },
  expertise: {
    title: "Yetkinlikler",
    subtitle:
      "Ürün mimarisinden çıkarım altyapısına — geliştirdiğim sistemler ve çözdüğüm gerçek problemler.",
    cards: [
      {
        title: "Full-Stack Ürün Mühendisliği",
        description:
          "Veri katmanından dağıtılmış arayüze kadar uçtan uca web ürünleri. TypeScript, React, Next.js, Node.js, NestJS, Laravel, GraphQL ve REST API'leri.",
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
        title: "AI Çıkarım ve Agent Sistemleri",
        description:
          "Model-agnostik çıkarım altyapısı, araç çağırma framework'leri, doğrulama döngülü agent iş akışları ve GPU optimize yerel dağıtım.",
        tags: [
          "Çıkarım API'leri",
          "Araç Çağırma",
          "Agent Döngüleri",
          "GPU Optimizasyonu",
        ],
        icon: "cpu",
      },
      {
        title: "RAG ve Bilgi Sistemleri",
        description:
          "Bilgi erişimiyle zenginleştirilmiş üretim pipeline'ları, vektör veritabanları, belge işleme, web araması entegrasyonu ve kaynaklara dayalı AI yanıtları.",
        tags: [
          "Vektör Depolar",
          "Belge İşleme",
          "Web Araması",
          "Kaynaklara Dayalı Yanıtlar",
        ],
        icon: "database",
      },
      {
        title: "Geliştirici Araçları ve Altyapı",
        description:
          "Geliştirici araçları, Docker orkestrasyonu, CI/CD pipeline'ları, GPU-farkındalık kaynak yönetimi ve AI iş yükleri için remote sunucu altyapısı.",
        tags: ["Docker", "CI/CD", "GPU Orkestrasyonu", "Sunucu Yönetimi"],
        icon: "terminal",
      },
      {
        title: "Mobil Uygulamalar",
        description:
          "React Native ve Expo ile çapraz platform mobil ürünler. API odaklı mimariler, kimlik doğrulama, gerçek zamanlı özellikler ve yeniden kullanılabilir tasarım sistemleri.",
        tags: ["React Native", "Expo", "TypeScript", "API Odaklı"],
        icon: "smartphone",
      },
      {
        title: "Yaratıcı AI Altyapısı",
        description:
          "Görüntü, video, ses ve anlatım üretimi için orkestra edilmiş iş akışları. Docker tabanlı servis orkestrasyonu ve modüler AI pipeline tasarımı.",
        tags: [
          "Medya Pipeline'ları",
          "Servis Orkestrasyonu",
          "Modüler Tasarım",
        ],
        icon: "server",
      },
    ],
  },
  aiSystems: {
    title: "AI Sistemleri",
    subtitle:
      "Yapay zekâyı yalnızca bir sohbet katmanı olarak değil, ürünün karar alma ve üretim mekanizmasına doğrudan entegre olan bir sistem olarak tasarlıyorum.",
    pipeline: {
      data: "Veri",
      retrieval: "Geri Çağırma",
      reasoning: "Muhakeme",
      tools: "Araçlar",
      verification: "Doğrulama",
      experience: "Kullanıcı Deneyimi",
    },
    sections: [
      {
        title: "Çıkarım Altyapısı",
        description:
          "Yerel ve buluttan bağımsız çıkarım sistemleri. Çoklu GPU tensor paralelliği, optimize model yükleme ve standart çıkarım API'leri sayesinde uygulamalar kod değişikliği olmadan farklı sağlayıcılar arasında geçiş yapabilir.",
      },
      {
        title: "Geri Çağırma Destekli Üretim",
        description:
          "Uygulamaları kendi bilgi tabanlarına bağlayan RAG pipeline'ları. Vektör gömme, belge parçalama stratejileri, hibrit arama ve doğrulanmış veride köklenmiş AI çıktıları.",
      },
      {
        title: "Araç Çağırma ve Agent İş Akışları",
        description:
          "Araç çağırabilen, fonksiyon yürütebilen, web'de arayabilen ve çok adımlı görevler üzerinden akıl yürütebilen AI sistemleri. Kullanıcıya sunmadan önce çıktıları kontrol eden doğrulama döngüleri.",
      },
      {
        title: "Değerlendirme ve Gözlemlenebilirlik",
        description:
          "AI sistemleri için metrikler, izleme ve değerlendirme framework'leri. Gecikme, doğruluk, maliyet ve sapmayı anlamak — çünkü ölçemediğiniz bir AI sistemine güvenemezsiniz.",
      },
    ],
  },
  work: {
    title: "Seçili Çalışmalar",
    subtitle: "Ürünler, sistemler ve altyapı — fikirden üretime.",
    projects: [
      {
        title: "Full-Stack Web Ürünleri",
        type: "Müşteri Projesi",
        problem:
          "Müşteriler, cihazlar arasında çalışan ve gerçek iş ihtiyaçlarına hitap eden güvenilir, ölçeklenebilir web uygulamaları gerekiyor — demolar değil.",
        solution:
          "React ve TypeScript ön uçlar, Node.js ve Laravel arka uçlar, GraphQL ve REST API'leri, PostgreSQL veritabanları, kimlik doğrulama sistemleri ve veri odaklı arayüzlerle tam web ürünleri inşa ettim.",
        technologies:
          "React · TypeScript · Node.js · Laravel · GraphQL · PostgreSQL",
        result:
          "Ölçeklenebilir mimari ve sürdürülebilir kod tabanına sahip üretim düzeyi web uygulamaları.",
      },
      {
        title: "AI Çıkarım Laboratuvarı",
        type: "Kişisel Laboratuvar",
        problem:
          'AI çıkarımını yerel olarak çalıştırmak donanım, yazılım ve ağ katmanlarının dikkatli orkestrasyonunu gerektirir — çoğu kılavuz "merhaba dünya"da durur.',
        solution:
          "Standart çıkarım API'leriyle, model-agnostik yönlendirme, GPU-farkındalık kaynak yönetimi ve Docker tabanlı servis orkestrasyonu içeren çift GPU'lu bir çıkarım sunucusu kurdum. Uygulamalar model yerelde mi yoksa bulutta mı çalışır farketmeden sorunsuz bağlanır.",
        technologies:
          "CUDA · Docker · GPU Orkestrasyonu · Çıkarım API'leri · Model Yönlendirme",
        result:
          "Birden fazla model ve eşzamanlı iş yüklerini destekleyen üretim hazır yerel çıkarım altyapısı.",
      },
      {
        title: "RAG ve Bilgi Uygulamaları",
        type: "Kişisel Laboratuvar",
        problem:
          "AI sistemleri kulağa makul gelen kurgu üretmek yerine doğrulanmış kaynaklara dayanarak yanıt vermelidir. Güvenilir bilgi temeli, oyuncak ile gerçek araç arasındaki farktır.",
        solution:
          "Vektör veritabanları, belge işleme iş akışları, web araması entegrasyonu ve hibrit geri çağırma stratejileri ile RAG pipeline'ları tasarladım. Uygulamalar kaynak nitelikli, doğrulanabilir yanıtlar üretir.",
        technologies:
          "Vektör Veritabanları · Belge İşleme · Web Araması · Hibrit Geri Çağırma",
        result:
          "Kaynak nitelendirmeli ve doğrulanabilir çıktıları olan bilgi-köklenmiş AI uygulamaları.",
      },
      {
        title: "Yaratıcı AI Altyapısı",
        type: "Kişisel Laboratuvar",
        problem:
          "Yaratıcı AI iş akışları görüntü, video, ses ve anlatımı kapsar — her birinin kendi araçları, formatları ve kaynak gereksinimleri var.",
        solution:
          "ComfyUI tarzı iş akışları, Docker servis yönetimi, GPU kaynak koordinasyonu ve modüler pipeline tasarımı ile yerel bir yaratıcı AI stüdyosu orkestre ettim. Her şey tek bir GPU sunucusunda çalışır.",
        technologies:
          "ComfyUI · Docker · GPU Orkestrasyonu · Medya Pipeline'ları",
        result:
          "Bulut bağımlılığı olmadan çok modlu AI iş akışları için birleşik yerel stüdyo.",
      },
      {
        title: "Mobil Uygulamalar",
        type: "Özel Proje",
        problem:
          "Kullanıcılar gerçek zamanlı özellikler, kimlik doğrulama ve sosyal etkileşim içeren güvenilir mobil deneyimler bekliyor — modern araçlarla inşa edilmiş.",
        solution:
          "React Native ve Expo ile çapraz platform mobil uygulamalar geliştirdim; GraphQL API'leri, PostgreSQL veritabanları, kimlik doğrulama sistemleri ve gerçek zamanlı mesajlaşma ile desteklenmiş.",
        technologies: "React Native · Expo · GraphQL · Apollo · TypeScript",
        result:
          "Gerçek zamanlı özellikler ve çapraz platform tutarlılığa sahip üretim mobil uygulamalar.",
      },
      {
        title: "Geliştirici Araçları",
        type: "Kişisel Laboratuvar",
        problem:
          "Mühendislik ekipleri, yerel geliştirme ortamlarından otomatik test ve dağıtım pipeline'larına kadar, üretim sürecindeki sürtünmeyi azaltan araçlara ihtiyaç duyar.",
        solution:
          "Yerel AI destekli kodlama asistanları, otomatik mühendislik döngüleri, CI/CD pipeline tasarımları ve altyapı kodu iş akışları içeren geliştirici araçları geliştirdim.",
        technologies: "TypeScript · Docker · CI/CD · AI Destekli Geliştirme",
        result:
          "Sürtünmeyi azaltan ve fikirden dağıtıma giden yolu hızlandıran geliştirici araçları.",
      },
    ],
    viewDetails: "Detayları Gör",
    closeDetails: "Kapat",
    problemLabel: "Problem",
    solutionLabel: "Çözüm",
    techLabel: "Teknolojiler",
    resultLabel: "Sonuç",
  },
  experience: {
    title: "Deneyim",
    roles: [
      {
        company: "NMI",
        role: "Full Stack JavaScript Developer",
        period: "Günümüz",
        description:
          "JavaScript ve TypeScript ile remote full-stack mühendislik. Ürün geliştirme, API tasarımı ve sistem mimarisi.",
      },
      {
        company: "innodigi.net",
        role: "Kurucu",
        period: "Günümüz",
        description:
          "Dijital ürün stüdyosu kurdum ve yönetiyorum. Full-stack geliştirme, AI sistemleri ve ürün mühendisliği.",
      },
      {
        company: "WESROM Corporation",
        role: "JavaScript Developer",
        period: "Önceki dönem",
        description:
          "Web uygulamaları için JavaScript geliştirme. Ön uç ve arka uç mühendisliği.",
      },
      {
        company: "GOBITO Digital Solutions",
        role: "Frontend Developer",
        period: "Önceki dönem",
        description:
          "Modern framework'lerle ön uç mühendisliği. Bileşen mimarisi ve kullanıcı arayüzleri.",
      },
      {
        company: "Upwork",
        role: "Yarı Zamanlı Developer",
        period: "Önceki dönem",
        description:
          "Web, mobil ve AI alanlarında freelance mühendislik. Çeşitli teknoloji yığını.",
      },
      {
        company: "Boranka Yazılım ve Freelancer",
        role: "Yazılım Geliştirici",
        period: "2015–2020",
        description:
          "Profesyonel yazılım çalışmaları ve freelance projelerle web uygulamaları ve dijital ürünler geliştirmeye başladı.",
      },
    ],
  },
  principles: {
    title: "Mühendislik İlkeleri",
    items: [
      { text: "Doğrulanabilir sistemler inşa et", icon: "rocket" },
      { text: "Karmaşayı gözlemlenebilir yap", icon: "eye" },
      { text: "Sadece prompt değil, döngüyü tasarla", icon: "refresh-cw" },
      {
        text: "Arayüzleri basit, altyapıyı dürüst tut",
        icon: "minimize-2",
      },
      {
        text: "Deneyimleri yeniden kullanılabilir sistemlere dönüştür",
        icon: "brain",
      },
      { text: "Çalışan yazılım dağıt", icon: "check-circle" },
    ],
  },
  contact: {
    title: "Bir Şeyler İnşa Edelim",
    subtitle:
      "Derin teknik düşünce gerektiren full-stack ürünler, AI sistemleri ve mühendislik zorlukları üzerinde işbirliği yapıyorum. İhtiyacın olan biri teslim eden bir mühendisse, konuşalım.",
    linkedin: "LinkedIn",
    email: "İletişime Geç",
    emailPlaceholder: "akmanserkan65@gmail.com",
  },
  footer: {
    name: "Serkan Akman",
    tagline: "Full-Stack Mühendislik · AI Sistemleri · Çıkarım Altyapısı",
    built: "innodigi tarafından geliştirildi.",
    copyright: "© {year} Serkan Akman. Tüm hakları saklıdır.",
    linkedin: "LinkedIn",
  },
  languageSwitcher: {
    en: "English",
    tr: "Türkçe",
    de: "Deutsch",
    sr: "Srpski",
    fr: "Français",
    it: "Italiano",
    ar: "العربية",
    he: "עברית",
  },
} as const;

export const de: TranslationContent = {
  nav: {
    about: "Über mich",
    expertise: "Kompetenzen",
    aiSystems: "KI-Systeme",
    work: "Projekte",
    experience: "Erfahrung",
    principles: "Grundsätze",
    contact: "Kontakt",
  },
  hero: {
    headline:
      "Ich entwickle digitale Produkte und intelligente Systeme an der Schnittstelle von Software, Daten und Infrastruktur.",
    subtitle:
      "Senior Full-Stack Engineer und Entwickler von KI-Systemen. Ich verwandle Ideen in funktionierende Produkte und komplexe Infrastrukturen in zuverlässige Nutzererlebnisse. Remote.",
    ctaPrimary: "Projekte ansehen",
    ctaSecondary: "Gespräch beginnen",
    statusLabel: "Offen für Zusammenarbeit",
    infraCard: {
      client: "Entwicklungsumgebung",
      middleware: "API-Schicht",
      inference: "Inferenz-Engine",
      systems: "RAG · Tools · Anwendungen",
    },
  },
  about: {
    title: "Über mich",
    paragraph1:
      "Ich bin Senior Full-Stack Engineer und entwickle Webanwendungen, Entwicklertools und KI-Systeme. Über professionelle Softwarearbeit und freiberufliche Projekte habe ich zunächst Webanwendungen und digitale Produkte entwickelt und mich anschließend auf ganzheitliche Produktentwicklung und das Design von KI-Systemen spezialisiert.",
    paragraph2:
      "Ich entwickle Produkte von Grund auf — von Datenmodellen und API-Design bis zu den Oberflächen, mit denen Menschen tatsächlich arbeiten. Ich arbeite mit TypeScript, React, Node.js, Laravel und mobilen Plattformen. Außerdem entwerfe und betreibe ich anbieterunabhängige Inferenzinfrastrukturen für Wissensabruf, Tool-Aufrufe und agentische Workflows.",
    paragraph3:
      "Derzeit arbeite ich remote als Full Stack JavaScript Developer bei nmi.com und bin Gründer von innodigi.net. In meinem persönlichen, GPU-gestützten KI-Labor erforsche ich Inferenzoptimierung, RAG-Pipelines und intelligente Agentensysteme erforsche.",
    stats: {
      years: "Senior",
      yearsDesc: "Full-Stack Engineer",
      fullstack: "Full-Stack",
      fullstackDesc: "Produktentwicklung",
      aiLab: "GPU-gestützt",
      aiLabDesc: "KI-Labor",
      remote: "Remote",
      remoteDesc: "Internationale Teams",
    },
  },
  expertise: {
    title: "Kompetenzen",
    subtitle:
      "Von der Produktarchitektur bis zur Inferenzinfrastruktur — die Systeme, die ich entwickle, und die Probleme, die ich löse.",
    cards: [
      {
        title: "Full-Stack-Produktentwicklung",
        description:
          "Ganzheitliche Webprodukte von der Datenschicht bis zur bereitgestellten Oberfläche. TypeScript, React, Next.js, Node.js, NestJS, Laravel, GraphQL und REST-APIs.",
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
          "Modellunabhängige Inferenzinfrastruktur, Frameworks für Tool-Aufrufe, Agenten-Workflows mit Verifikationsschleifen und GPU-optimierte lokale Bereitstellung.",
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
          "RAG-Pipelines, Vektordatenbanken, Dokumentenverarbeitung, Websuche und quellenbasierte KI-Antworten, die auf überprüfbaren Informationen aufbauen.",
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
          "Entwicklertools, Docker-Orchestrierung, CI/CD-Pipelines, GPU-bewusstes Ressourcenmanagement und Remote-Serverinfrastruktur für KI-Workloads.",
        tags: ["Docker", "CI/CD", "GPU-Orchestrierung", "Servermanagement"],
        icon: "terminal",
      },
      {
        title: "Mobile Anwendungen",
        description:
          "Plattformübergreifende mobile Produkte mit React Native und Expo. API-orientierte Architekturen, Authentifizierung, Echtzeitfunktionen und wiederverwendbare Designsysteme.",
        tags: ["React Native", "Expo", "TypeScript", "API-orientiert"],
        icon: "smartphone",
      },
      {
        title: "Kreative KI-Infrastruktur",
        description:
          "Orchestrierte Workflows für die Erzeugung von Bildern, Videos, Audio und Narration. Docker-basierte Services und modular konzipierte KI-Pipelines.",
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
      "Ich konzipiere künstliche Intelligenz nicht als reine Chat-Schicht, sondern als Entscheidungs- und Produktionsmechanismus, der fest im Produkt verankert ist.",
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
          "Lokale und anbieterunabhängige Inferenzsysteme. Multi-GPU-Tensorparallelität, optimiertes Laden von Modellen und standardisierte Inferenz-APIs ermöglichen den Wechsel zwischen Anbietern ohne Änderungen am Anwendungscode.",
      },
      {
        title: "Retrieval-Augmented Generation",
        description:
          "RAG-Pipelines, die Anwendungen mit ihren eigenen Wissensbasen verbinden. Vektoreinbettungen, Strategien zur Dokumentsegmentierung, hybride Suche und quellenbewusste Antworten auf Basis überprüfter Daten.",
      },
      {
        title: "Tool-Aufrufe und Agenten-Workflows",
        description:
          "KI-Systeme, die Tools aufrufen, Funktionen ausführen, im Web suchen und mehrstufige Aufgaben bearbeiten können. Verifikationsschleifen prüfen die Ergebnisse, bevor sie Nutzern angezeigt werden.",
      },
      {
        title: "Evaluation und Beobachtbarkeit",
        description:
          "Metriken, Tracing und Evaluationsframeworks für KI-Systeme. Latenz, Genauigkeit, Kosten und Drift müssen messbar sein — denn ein System, das sich nicht messen lässt, verdient kein blindes Vertrauen.",
      },
    ],
  },
  work: {
    title: "Ausgewählte Projekte",
    subtitle:
      "Produkte, Systeme und Infrastruktur — vom Konzept bis zum produktiven Einsatz.",
    projects: [
      {
        title: "Full-Stack-Webprodukte",
        type: "Kundenprojekt",
        problem:
          "Kunden brauchen zuverlässige, skalierbare Webanwendungen, die auf allen Geräten funktionieren und echte Geschäftsanforderungen erfüllen — keine Demos.",
        solution:
          "Ich habe vollständige Webprodukte mit React- und TypeScript-Frontends, Node.js- und Laravel-Backends, GraphQL- und REST-APIs, PostgreSQL-Datenbanken, Authentifizierung und datengetriebenen Oberflächen entwickelt.",
        technologies:
          "React · TypeScript · Node.js · Laravel · GraphQL · PostgreSQL",
        result:
          "Produktionsreife Webanwendungen mit skalierbarer Architektur und wartbaren Codebasen.",
      },
      {
        title: "KI-Inferenzlabor",
        type: "Persönliches Labor",
        problem:
          "Lokale KI-Inferenz erfordert eine sorgfältige Abstimmung von Hardware, Software und Netzwerk — die meisten Anleitungen enden bei ‚Hello World‘.",
        solution:
          "Ich habe einen Dual-GPU-Inferenzserver mit standardisierten APIs, modellunabhängigem Routing, GPU-bewusstem Ressourcenmanagement und Docker-basierter Service-Orchestrierung aufgebaut. Anwendungen verbinden sich nahtlos, unabhängig davon, ob ein Modell lokal oder in der Cloud läuft.",
        technologies:
          "CUDA · Docker · GPU-Orchestrierung · Inferenz-APIs · Modell-Routing",
        result:
          "Eine produktionsbereite lokale Inferenzinfrastruktur für mehrere Modelle und parallele Workloads.",
      },
      {
        title: "RAG- und Wissensanwendungen",
        type: "Persönliches Labor",
        problem:
          "KI-Systeme sollten aus überprüften Quellen antworten, statt plausibel klingende Fiktion zu erzeugen. Verankertes Wissen trennt ein Spielzeug von einem Werkzeug.",
        solution:
          "Ich habe RAG-Pipelines mit Vektordatenbanken, Dokumentenverarbeitung, Websuche und hybriden Abrufstrategien entworfen. Die Anwendungen erzeugen fundierte Antworten mit Quellenangaben.",
        technologies:
          "Vektordatenbanken · Dokumentenverarbeitung · Websuche · Hybrider Abruf",
        result:
          "Wissensbasierte KI-Anwendungen mit Quellenangaben und überprüfbaren Ergebnissen.",
      },
      {
        title: "Kreative KI-Infrastruktur",
        type: "Persönliches Labor",
        problem:
          "Kreative KI-Workflows umfassen Bild, Video, Audio und Narration — jeweils mit eigenen Tools, Formaten und Ressourcenanforderungen.",
        solution:
          "Ich habe ein lokales kreatives KI-Studio mit ComfyUI-Workflows, Docker-Serviceverwaltung, GPU-Ressourcenkoordination und modularer Pipeline-Architektur orchestriert. Alles läuft auf einem einzigen GPU-Server.",
        technologies:
          "ComfyUI · Docker · GPU-Orchestrierung · Medien-Pipelines",
        result:
          "Ein einheitliches lokales Studio für multimodale KI-Workflows ohne Cloud-Abhängigkeit.",
      },
      {
        title: "Mobile Anwendungen",
        type: "Privates Projekt",
        problem:
          "Nutzer erwarten zuverlässige mobile Erlebnisse mit Echtzeitfunktionen, Authentifizierung und sozialer Interaktion — auf Basis moderner Werkzeuge.",
        solution:
          "Ich habe plattformübergreifende mobile Anwendungen mit React Native und Expo entwickelt, unterstützt durch GraphQL-APIs, PostgreSQL-Datenbanken, Authentifizierung und Echtzeitnachrichten.",
        technologies: "React Native · Expo · GraphQL · Apollo · TypeScript",
        result:
          "Produktionsreife mobile Anwendungen mit Echtzeitfunktionen und konsistentem plattformübergreifendem Verhalten.",
      },
      {
        title: "Entwicklertools",
        type: "Persönliches Labor",
        problem:
          "Engineering-Teams brauchen Werkzeuge, die Reibung reduzieren — von lokalen Entwicklungsumgebungen bis zu automatisierten Test- und Deployment-Pipelines.",
        solution:
          "Ich habe Entwicklertools entwickelt, darunter lokale KI-gestützte Coding-Assistenten, automatisierte Engineering-Loops, CI/CD-Pipelines und Infrastructure-as-Code-Workflows.",
        technologies: "TypeScript · Docker · CI/CD · KI-gestützte Entwicklung",
        result:
          "Werkzeuge, die Reibung reduzieren und den Weg von der Idee bis zum Deployment beschleunigen.",
      },
    ],
    viewDetails: "Details ansehen",
    closeDetails: "Schließen",
    problemLabel: "Problem",
    solutionLabel: "Lösung",
    techLabel: "Technologien",
    resultLabel: "Ergebnis",
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
        role: "Gründer",
        period: "Heute",
        description:
          "Gründung und Leitung eines Studios für digitale Produkte. Full-Stack-Entwicklung, KI-Systeme und Produktengineering.",
      },
      {
        company: "WESROM Corporation",
        role: "JavaScript Developer",
        period: "Früher",
        description:
          "JavaScript-Entwicklung für Webanwendungen. Frontend- und Backend-Engineering.",
      },
      {
        company: "GOBITO Digital Solutions",
        role: "Frontend Developer",
        period: "Früher",
        description:
          "Frontend-Engineering mit modernen Frameworks. Komponentenarchitektur und Benutzeroberflächen.",
      },
      {
        company: "Upwork",
        role: "Teilzeit-Entwickler",
        period: "Früher",
        description:
          "Freiberufliches Engineering in den Bereichen Web, Mobile und KI. Vielfältiger Technologiestack.",
      },
      {
        company: "Boranka Yazılım & Freelancer",
        role: "Softwareentwickler",
        period: "2015–2020",
        description:
          "Entwicklung von Webanwendungen und digitalen Produkten im Rahmen professioneller Softwarearbeit und freiberuflicher Projekte.",
      },
    ],
  },
  principles: {
    title: "Engineering-Grundsätze",
    items: [
      { text: "Systeme bauen, die sich verifizieren lassen", icon: "rocket" },
      { text: "Komplexität beobachtbar machen", icon: "eye" },
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
    emailPlaceholder: "akmanserkan65@gmail.com",
  },
  footer: {
    name: "Serkan Akman",
    tagline: "Full-Stack-Engineering · KI-Systeme · Inferenzinfrastruktur",
    built: "Entwickelt von innodigi.",
    copyright: "© {year} Serkan Akman. Alle Rechte vorbehalten.",
    linkedin: "LinkedIn",
  },
  languageSwitcher: {
    en: "Englisch",
    tr: "Türkisch",
    de: "Deutsch",
    sr: "Serbisch",
    fr: "Französisch",
    it: "Italienisch",
    ar: "Arabisch",
    he: "Hebräisch",
  },
};

export const sr: TranslationContent = {
  ...en,
  nav: {
    about: "O meni",
    expertise: "Veštine",
    aiSystems: "AI sistemi",
    work: "Projekti",
    experience: "Iskustvo",
    principles: "Principi",
    contact: "Kontakt",
  },
  hero: {
    ...en.hero,
    headline:
      "Gradim digitalne proizvode i inteligentne sisteme na raskršću softvera, podataka i infrastrukture.",
    subtitle:
      "Senior full-stack inženjer i kreator AI sistema. Ideje pretvaram u funkcionalne proizvode, a složenu infrastrukturu u pouzdana iskustva. Radim na daljinu.",
    ctaPrimary: "Pogledaj projekte",
    ctaSecondary: "ZapoÄnimo razgovor",
    statusLabel: "Otvoren za saradnju",
    infraCard: {
      client: "Razvojno okruženje",
      middleware: "API sloj",
      inference: "Inferentni mehanizam",
      systems: "RAG · Alati · Aplikacije",
    },
  },
  about: {
    ...en.about,
    title: "O meni",
    paragraph1:
      "Senior sam full-stack inÅ¾enjer koji razvija web aplikacije, alate za programere i AI sisteme. Kroz profesionalni softverski rad i freelance projekte poÄeo sam da razvijam web aplikacije i digitalne proizvode, a danas se bavim celokupnim razvojem proizvoda i dizajnom AI sistema.",
    paragraph2:
      "Proizvode razvijam od poÄetka do kraja — od modela podataka i API dizajna do interfejsa sa kojima korisnici rade. Radim sa TypeScriptom, Reactom, Node.js-om, Laravelom i mobilnim platformama. TakoÄ‘e projektujem infrastrukturu za lokalnu, od provajdera nezavisnu AI inferenciju, pretragu znanja, pozivanje alata i agentske tokove.",
    paragraph3:
      "Trenutno radim na daljinu kao Full Stack JavaScript Developer u kompaniji nmi.com i osnivaÄ sam innodigi.net-a. U svojoj liÄnoj GPU laboratoriji za AI, gde istraÅ¾ujem optimizaciju inferencije, RAG tokove i inteligentne agentske sisteme.",
    stats: {
      years: "Senior",
      yearsDesc: "Full-Stack inženjer",
      fullstack: "Full-Stack",
      fullstackDesc: "Razvoj proizvoda",
      aiLab: "GPU podrška",
      aiLabDesc: "AI laboratorija",
      remote: "Na daljinu",
      remoteDesc: "Međunarodni timovi",
    },
  },
  expertise: {
    ...en.expertise,
    title: "Veštine",
    subtitle:
      "Od arhitekture proizvoda do infrastrukture za inferenciju — sistemi koje gradim i problemi koje rešavam.",
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
        "Mobilni proizvodi za više platformi uz React Native i Expo.",
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
      "Proizvodi, sistemi i infrastruktura — od koncepta do produkcije.",
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
    problemLabel: "Problem",
    solutionLabel: "Rešenje",
    techLabel: "Tehnologije",
    resultLabel: "Rezultat",
  },
  experience: {
    ...en.experience,
    title: "Iskustvo",
    roles: en.experience.roles.map((r, i) => ({
      ...r,
      period: i < 2 ? "Danas" : i === 5 ? "2015–2020" : "Ranije",
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
    title: "Inženjerski principi",
    items: en.principles.items.map((x, i) => ({
      ...x,
      text: [
        "Graditi sisteme koji mogu da se provere",
        "UÄiniti sloÅ¾enost vidljivom",
        "Projektovati tok, ne samo prompt",
        "Interfejse držati jednostavnim, infrastrukturu iskrenom",
        "Pretvoriti eksperimente u sisteme za ponovnu upotrebu",
        "IsporuÄiti softver koji radi",
      ][i],
    })),
  },
  contact: {
    ...en.contact,
    title: "Hajde da izgradimo nešto",
    subtitle:
      "SuraÄ‘ujem na full-stack proizvodima, AI sistemima i inÅ¾enjerskim izazovima koji zahtevaju duboko tehniÄko razmiÅ¡ljanje. Ako vam treba neko ko isporuÄuje, razgovarajmo.",
    email: "Javite se",
  },
  footer: {
    ...en.footer,
    tagline:
      "Full-Stack inženjering · AI sistemi · Infrastruktura za inferenciju",
    built: "Izgrađeno od strane innodigi.",
    copyright: "© {year} Serkan Akman. Sva prava zadržana.",
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
    about: "À propos",
    expertise: "Compétences",
    aiSystems: "Systèmes d'IA",
    work: "Projets",
    experience: "Expérience",
    principles: "Principes",
    contact: "Contact",
  },
  hero: {
    ...en.hero,
    headline:
      "Je conçois des produits numériques et des systèmes intelligents à la rencontre du logiciel, des données et de l'infrastructure.",
    subtitle:
      "Ingénieur full-stack senior et concepteur de systèmes d'IA. Je transforme les idées en produits fonctionnels et les infrastructures complexes en expériences fiables. Je travaille à distance.",
    ctaPrimary: "Voir les projets",
    ctaSecondary: "Échangeons",
    statusLabel: "Ouvert aux collaborations",
    infraCard: {
      client: "Environnement de développement",
      middleware: "Couche API",
      inference: "Moteur d'inférence",
      systems: "RAG · Outils · Applications",
    },
  },
  about: {
    ...en.about,
    title: "À propos",
    paragraph1:
      "Je suis ingénieur full-stack senior. Je conçois des applications web, des outils pour développeurs et des systèmes d'IA. J'ai commencé par développer des applications web et des produits numériques dans le cadre de missions professionnelles et freelance, avant de me spécialiser dans l'ingénierie produit de bout en bout et la conception de systèmes d'IA.",
    paragraph2:
      "Je construis les produits de bout en bout : des modèles de données et des API jusqu'aux interfaces utilisées au quotidien. Je travaille avec TypeScript, React, Node.js, Laravel et les plateformes mobiles. Je conçois également des infrastructures d'inférence locales et indépendantes du cloud pour la recherche, l'appel d'outils et les workflows agentiques.",
    paragraph3:
      "Je travaille actuellement à distance comme Full Stack JavaScript Developer chez nmi.com et je suis le fondateur d'innodigi.net. Dans mon laboratoire d'IA personnel équipé de GPU, j'expérimente l'optimisation de l'inférence, les pipelines RAG et les systèmes d'agents intelligents.",
    stats: {
      years: "Senior",
      yearsDesc: "Ingénieur full-stack",
      fullstack: "Full-stack",
      fullstackDesc: "Ingénierie produit",
      aiLab: "GPU",
      aiLabDesc: "Laboratoire d'IA",
      remote: "À distance",
      remoteDesc: "Équipes internationales",
    },
  },
  expertise: {
    ...en.expertise,
    title: "Compétences",
    subtitle:
      "De l'architecture produit à l'infrastructure d'inférence — les systèmes que je construis et les problèmes que je résous.",
    cards: en.expertise.cards.map((c, i) => ({
      ...c,
      title: [
        "Ingénierie produit full-stack",
        "Inférence IA et systèmes d'agents",
        "RAG et systèmes de connaissance",
        "Outils développeur et infrastructure",
        "Applications mobiles",
        "Infrastructure IA créative",
      ][i],
      description: [
        "Des produits web complets, de la couche de données à l'interface en production.",
        "Une infrastructure d'inférence indépendante des modèles, l'appel d'outils et des workflows d'agents vérifiables.",
        "Des pipelines RAG, bases vectorielles, traitement documentaire, recherche web et réponses sourcées.",
        "Des outils développeur, l'orchestration Docker, le CI/CD et la gestion des ressources GPU.",
        "Des produits mobiles multiplateformes avec React Native et Expo.",
        "Des workflows orchestrés pour générer images, vidéos, audio et narration.",
      ][i],
    })),
  },
  aiSystems: {
    ...en.aiSystems,
    title: "Systèmes d'IA",
    subtitle:
      "Je conçois l'intelligence artificielle non comme une simple couche conversationnelle, mais comme un mécanisme de décision et de production intégré au produit.",
    pipeline: {
      data: "Données",
      retrieval: "Recherche",
      reasoning: "Raisonnement",
      tools: "Outils",
      verification: "Vérification",
      experience: "Expérience utilisateur",
    },
    sections: en.aiSystems.sections.map((s, i) => ({
      ...s,
      title: [
        "Infrastructure d'inférence",
        "Retrieval-Augmented Generation",
        "Appel d'outils et workflows d'agents",
        "Évaluation et observabilité",
      ][i],
    })),
  },
  work: {
    ...en.work,
    title: "Projets sélectionnés",
    subtitle:
      "Produits, systèmes et infrastructure — du concept à la production.",
    projects: en.work.projects.map((p, i) => ({
      ...p,
      title: [
        "Produits web full-stack",
        "Laboratoire d'inférence IA",
        "Applications RAG et connaissance",
        "Infrastructure IA créative",
        "Applications mobiles",
        "Outils développeur",
      ][i],
      type: [
        "Mission client",
        "Laboratoire personnel",
        "Laboratoire personnel",
        "Laboratoire personnel",
        "Projet privé",
        "Laboratoire personnel",
      ][i],
    })),
    viewDetails: "Voir les détails",
    closeDetails: "Fermer",
    problemLabel: "Problème",
    solutionLabel: "Solution",
    techLabel: "Technologies",
    resultLabel: "Résultat",
  },
  experience: {
    ...en.experience,
    title: "Expérience",
    roles: en.experience.roles.map((r, i) => ({
      ...r,
      period: i < 2 ? "Aujourd'hui" : i === 5 ? "2015–2020" : "Auparavant",
      role: [
        "Full Stack JavaScript Developer",
        "Fondateur",
        "JavaScript Developer",
        "Frontend Developer",
        "Développeur à temps partiel",
        "Développeur logiciel",
      ][i],
    })),
  },
  principles: {
    ...en.principles,
    title: "Principes d'ingénierie",
    items: en.principles.items.map((x, i) => ({
      ...x,
      text: [
        "Construire des systèmes vérifiables",
        "Rendre la complexité observable",
        "Concevoir la boucle, pas seulement le prompt",
        "Garder des interfaces simples et une infrastructure honnête",
        "Transformer les expériences en systèmes réutilisables",
        "Livrer un logiciel qui fonctionne",
      ][i],
    })),
  },
  contact: {
    ...en.contact,
    title: "Construisons quelque chose",
    subtitle:
      "Je collabore sur des produits full-stack, des systèmes d'IA et des défis d'ingénierie qui exigent une réflexion technique approfondie. Si votre projet a besoin de quelqu'un qui livre, parlons-en.",
    email: "Me contacter",
  },
  footer: {
    ...en.footer,
    tagline:
      "Ingénierie full-stack · Systèmes d'IA · Infrastructure d'inférence",
    built: "Conçu par innodigi.",
    copyright: "© {year} Serkan Akman. Tous droits réservés.",
  },
  languageSwitcher: {
    en: "Anglais",
    tr: "Turc",
    de: "Allemand",
    sr: "Serbe",
    fr: "Français",
    it: "Italien",
    ar: "Arabe",
    he: "Hébreu",
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
      systems: "RAG · Strumenti · Applicazioni",
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
      "Dall'architettura del prodotto all'infrastruttura di inferenza — i sistemi che costruisco e i problemi che risolvo.",
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
      "Prodotti, sistemi e infrastruttura — dal concetto alla produzione.",
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
    problemLabel: "Problema",
    solutionLabel: "Soluzione",
    techLabel: "Tecnologie",
    resultLabel: "Risultato",
  },
  experience: {
    ...en.experience,
    title: "Esperienza",
    roles: en.experience.roles.map((r, i) => ({
      ...r,
      period: i < 2 ? "Oggi" : i === 5 ? "2015–2020" : "In precedenza",
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
      "Ingegneria full-stack · Sistemi di IA · Infrastruttura di inferenza",
    built: "Realizzato da innodigi.",
    copyright: "© {year} Serkan Akman. Tutti i diritti riservati.",
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
    about: "نبذة عني",
    expertise: "الخبرات",
    aiSystems: "أنظمة الذكاء الاصطناعي",
    work: "المشاريع",
    experience: "الخبرة",
    principles: "المبادئ",
    contact: "تواصل معي",
  },
  hero: {
    ...en.hero,
    headline:
      "أبني منتجات رقمية وأنظمة ذكية عند تقاطع البرمجيات والبيانات والبنية التحتية.",
    subtitle:
      "مهندس Full-Stack أول ومطوّر لأنظمة الذكاء الاصطناعي. أحوّل الأفكار إلى منتجات تعمل فعلياً، والبنى التحتية المعقدة إلى تجارب موثوقة. أعمل عن بÙعد.",
    ctaPrimary: "استكشف المشاريع",
    ctaSecondary: "لنبدأ محادثة",
    statusLabel: "متاح للتعاون",
    infraCard: {
      client: "بيئة التطوير",
      middleware: "طبقة API",
      inference: "محرك الاستدلال",
      systems: "RAG · الأدوات · التطبيقات",
    },
  },
  about: {
    ...en.about,
    title: "نبذة عني",
    paragraph1:
      "أنا مهندس Full-Stack أول أعمل على تطبيقات الويب وأدوات المطورين وأنظمة الذكاء الاصطناعي. بدأت ببناء التطبيقات والمنتجات الرقمية من خلال العمل البرمجي الاحترافي والمشاريع المستقلة، ثم تطورت خبرتي لتشمل هندسة المنتجات من البداية إلى النهاية وتصميم أنظمة الذكاء الاصطناعي.",
    paragraph2:
      "أبني المنتجات من البداية إلى النهاية: من نماذج البيانات وتصميم واجهات API إلى الواجهات التي يستخدمها الناس فعلياً. أعمل باستخدام TypeScript وReact وNode.js وLaravel ومنصات الهاتف المحمول. كما أصمم وأدير بنى تحتية للاستدلال بالذكاء الاصطناعي، محلية ومستقلة عن مزوّد سحابي، للبحث واستدعاء الأدوات وسير عمل الوكلاء.",
    paragraph3:
      "أعمل حالياً عن بÙعد بوصفـي Full Stack JavaScript Developer لدى nmi.com، كما أنني مؤسس innodigi.net. وأدير مختبراً شخصياً للذكاء الاصطناعي مزوداً بوحدات GPU، أجرّب فيه تحسين الاستدلال وخطوط RAG وأنظمة الوكلاء الذكية.",
    stats: {
      years: "Senior",
      yearsDesc: "مهندس Full-Stack",
      fullstack: "Full-Stack",
      fullstackDesc: "هندسة المنتجات",
      aiLab: "مدعوم بـ GPU",
      aiLabDesc: "مختبر ذكاء اصطناعي",
      remote: "عن بÙعد",
      remoteDesc: "فرق دولية",
    },
  },
  expertise: {
    ...en.expertise,
    title: "الخبرات",
    subtitle:
      "من هندسة المنتجات إلى بنية الاستدلال التحتية — الأنظمة التي أبنيها والمشكلات التي أحلها.",
    cards: en.expertise.cards.map((c, i) => ({
      ...c,
      title: [
        "هندسة المنتجات Full-Stack",
        "الاستدلال وأنظمة الوكلاء",
        "RAG وأنظمة المعرفة",
        "أدوات المطورين والبنية التحتية",
        "تطبيقات الهاتف المحمول",
        "البنية التحتية الإبداعية للذكاء الاصطناعي",
      ][i],
      description: [
        "منتجات ويب متكاملة تبدأ من طبقة البيانات وتنتهي بواجهة جاهزة للإنتاج، باستخدام TypeScript وReact وNext.js وNode.js وNestJS وLaravel وGraphQL وREST.",
        "بنية استدلال مستقلة عن النموذج، وأطر لاستدعاء الأدوات، وسير عمل للوكلاء مزوّد بحلقات تحقق، ونشر محلي محسّن لوحدات GPU.",
        "خطوط RAG وقواعد بيانات متجهية ومعالجة مستندات وتكامل مع البحث على الويب وإجابات ذكاء اصطناعي تستند إلى مصادر موثوقة.",
        "أدوات للمطورين، وتنسيق Docker، وخطوط CI/CD، وإدارة واعية بموارد GPU، وبنية خوادم لأحمال الذكاء الاصطناعي.",
        "منتجات محمولة متعددة المنصات باستخدام React Native وExpo، مع بنى تعتمد على API ومصادقة وميزات لحظية.",
        "سير عمل منسّق لتوليد الصور والفيديو والصوت والتعليق الصوتي، مع تنسيق خدمات قائم على Docker وتصميم خطوط AI معيارية.",
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
        ["واجهات الاستدلال", "استدعاء الأدوات", "حلقات الوكلاء", "تحسين GPU"],
        [
          "مخازن المتجهات",
          "معالجة المستندات",
          "البحث على الويب",
          "إجابات موثقة",
        ],
        ["Docker", "CI/CD", "تنسيق GPU", "إدارة الخوادم"],
        ["React Native", "Expo", "TypeScript", "مدفوع بـ API"],
        ["خطوط الوسائط", "تنسيق الخدمات", "تصميم معياري"],
      ][i],
    })),
  },
  aiSystems: {
    ...en.aiSystems,
    title: "أنظمة الذكاء الاصطناعي",
    subtitle:
      "أصمم الذكاء الاصطناعي لا بوصفه طبقة محادثة فحسب، بل كآلية لاتخاذ القرار والإنتاج مدمجة في المنتج نفسه.",
    pipeline: {
      data: "البيانات",
      retrieval: "الاسترجاع",
      reasoning: "الاستدلال",
      tools: "الأدوات",
      verification: "التحقق",
      experience: "تجربة المستخدم",
    },
    sections: en.aiSystems.sections.map((s, i) => ({
      ...s,
      title: [
        "بنية الاستدلال التحتية",
        "التوليد المدعوم بالاسترجاع",
        "استدعاء الأدوات وسير عمل الوكلاء",
        "التقييم وقابلية المراقبة",
      ][i],
      description: [
        "أنظمة استدلال محلية ومستقلة عن السحابة، مع توازٍ للموتر عبر وحدات GPU متعددة، وتحميل محسّن للنماذج، وواجهات API قياسية تتيح للتطبيقات التبديل بين المزوّدين دون تغيير الكود.",
        "خطوط RAG تربط التطبيقات بقواعد معارفها الخاصة، مع تضمينات متجهية واستراتيجيات لتقسيم المستندات وبحث هجين وإجابات مرتبطة بمصادر وبيانات موثوقة.",
        "أنظمة ذكاء اصطناعي تستطيع استدعاء الأدوات وتنفيذ الوظائف والبحث على الويب والتعامل مع المهام متعددة الخطوات، مع حلقات تحقق تراجع النتائج قبل عرضها على المستخدم.",
        "مقاييس وتتبع وأطر تقييم لأنظمة الذكاء الاصطناعي. أفهم زمن الاستجابة والدقة والتكلفة والانحراف، لأن النظام الذي لا يمكنك قياسه ليس نظاماً يمكنك الوثوق به.",
      ][i],
    })),
  },
  work: {
    ...en.work,
    title: "مشاريع مختارة",
    subtitle: "منتجات وأنظمة وبنى تحتية — من الفكرة إلى الإنتاج.",
    projects: en.work.projects.map((p, i) => ({
      ...p,
      title: [
        "منتجات ويب Full-Stack",
        "مختبر استدلال الذكاء الاصطناعي",
        "تطبيقات RAG والمعرفة",
        "البنية التحتية الإبداعية للذكاء الاصطناعي",
        "تطبيقات الهاتف المحمول",
        "أدوات المطورين",
      ][i],
      type: [
        "عملاء",
        "مختبر شخصي",
        "مختبر شخصي",
        "مختبر شخصي",
        "مشروع خاص",
        "مختبر شخصي",
      ][i],
      problem: [
        "يحتاج العملاء إلى تطبيقات ويب موثوقة وقابلة للتوسع، تعمل على مختلف الأجهزة وتخدم احتياجات الأعمال الحقيقية، لا مجرد عروض تجريبية.",
        "يتطلب تشغيل الاستدلال محلياً تنسيقاً دقيقاً بين العتاد والبرمجيات والشبكة، بينما تتوقف معظم الشروحات عند تجربة بسيطة.",
        "يجب أن تجيب أنظمة الذكاء الاصطناعي من مصادر موثوقة، لا أن تنتج كلاماً يبدو مقنعاً فحسب. تأصيل المعرفة هو الفارق بين لعبة وأداة.",
        "تمتد سير عمل الذكاء الاصطناعي الإبداعي عبر الصور والفيديو والصوت والتعليق، ولكل منها أدوات وصيغ ومتطلبات موارد مختلفة.",
        "يحتاج المستخدمون إلى تجارب محمولة موثوقة بميزات لحظية ومصادقة وتفاعل اجتماعي، مبنية بأدوات حديثة.",
        "تحتاج فرق الهندسة إلى أدوات تقلل الاحتكاك، من بيئات التطوير المحلية إلى الاختبارات الآلية وخطوط النشر.",
      ][i],
      solution: [
        "بنيت منتجات ويب متكاملة بواجهات React وTypeScript، وخلفيات Node.js وLaravel، وواجهات GraphQL وREST، وقواعد PostgreSQL، وأنظمة مصادقة وواجهات مدفوعة بالبيانات.",
        "بنيت خادماً للاستدلال بوحدتي GPU، مع واجهات API قياسية وتوجيه مستقل عن النموذج وإدارة للموارد وتنسيق للخدمات عبر Docker. وتتصل التطبيقات به بسلاسة سواء عمل النموذج محلياً أو على السحابة.",
        "صممت خطوط RAG تضم قواعد بيانات متجهية ومعالجة مستندات وتكاملاً مع البحث على الويب واستراتيجيات استرجاع هجينة، لتنتج التطبيقات إجابات موثقة مرتبطة بمصادر.",
        "نسّقت استوديو محلياً للذكاء الاصطناعي الإبداعي مع سير عمل شبيه بـ ComfyUI وإدارة خدمات Docker وتنسيق موارد GPU وتصميم معياري للخطوط، وكل ذلك على خادم GPU واحد.",
        "طورت تطبيقات محمولة متعددة المنصات باستخدام React Native وExpo، مدعومة بواجهات GraphQL وقواعد PostgreSQL والمصادقة والرسائل اللحظية.",
        "بنيت أدوات للمطورين تشمل مساعدين محليين للبرمجة مدعومين بالذكاء الاصطناعي، وحلقات هندسية آلية، وتصميم خطوط CI/CD، وسير عمل للبنية التحتية ككود.",
      ][i],
      result: [
        "تطبيقات ويب جاهزة للإنتاج، بهندسة قابلة للتوسع وقواعد كود سهلة الصيانة.",
        "بنية استدلال محلية جاهزة للإنتاج، تدعم نماذج متعددة وأحمالاً متزامنة.",
        "تطبيقات ذكاء اصطناعي مؤسّسة على المعرفة، مع إسناد للمصادر ومخرجات قابلة للتحقق.",
        "استوديو إبداعي محلي موحّد لسير عمل الذكاء الاصطناعي متعدد الوسائط دون اعتماد على السحابة.",
        "تطبيقات محمولة جاهزة للإنتاج، بميزات لحظية واتساق عبر المنصات.",
        "أدوات تقلل الاحتكاك وتسرّع الانتقال من الفكرة إلى النشر.",
      ][i],
    })),
    viewDetails: "عرض التفاصيل",
    closeDetails: "إغلاق",
    problemLabel: "المشكلة",
    solutionLabel: "الحل",
    techLabel: "التقنيات",
    resultLabel: "النتيجة",
  },
  experience: {
    ...en.experience,
    title: "الخبرة",
    roles: en.experience.roles.map((r, i) => ({
      ...r,
      period: i < 2 ? "حتى الآن" : i === 5 ? "2015–2020" : "سابقاً",
      role: [
        "مطور JavaScript Full-Stack",
        "المؤسس",
        "مطور JavaScript",
        "مطور Frontend",
        "مطور بدوام جزئي",
        "مطور برمجيات",
      ][i],
      description: [
        "هندسة Full-Stack عن بÙعد باستخدام JavaScript وTypeScript، وتطوير المنتجات وتصميم واجهات API وهندسة الأنظمة.",
        "تأسيس وإدارة استوديو للمنتجات الرقمية، مع العمل في التطوير Full-Stack وأنظمة الذكاء الاصطناعي وهندسة المنتجات.",
        "تطوير JavaScript لتطبيقات الويب، مع العمل على الواجهات الأمامية والخلفيات.",
        "هندسة الواجهات الأمامية باستخدام أطر حديثة، مع تصميم المكونات وواجهات المستخدم.",
        "هندسة مستقلة في مجالات الويب والهاتف المحمول والذكاء الاصطناعي، عبر مجموعة متنوعة من التقنيات.",
        "بدأت ببناء تطبيقات الويب والمنتجات الرقمية من خلال العمل البرمجي الاحترافي والمشاريع المستقلة.",
      ][i],
    })),
  },
  principles: {
    ...en.principles,
    title: "مبادئ الهندسة",
    items: en.principles.items.map((x, i) => ({
      ...x,
      text: [
        "ابنِ أنظمة يمكن التحقق منها",
        "اجعل التعقيد قابلاً للمراقبة",
        "صمّم الحلقة، لا الموجّه وحده",
        "أبقِ الواجهات بسيطة والبنية التحتية صادقة",
        "حوّل التجارب إلى أنظمة قابلة لإعادة الاستخدام",
        "اشحن برمجيات تعمل فعلاً",
      ][i],
    })),
  },
  contact: {
    ...en.contact,
    title: "لنبنِ شيئاً معاً",
    subtitle:
      "أتعاون في منتجات Full-Stack وأنظمة الذكاء الاصطناعي والتحديات الهندسية التي تتطلب تفكيراً تقنياً عميقاً. إذا كان مشروعك يحتاج إلى شخص ينجز العمل، فلنتحدث.",
    email: "تواصل معي",
    emailPlaceholder: "akmanserkan65@gmail.com",
  },
  footer: {
    ...en.footer,
    tagline:
      "هندسة Full-Stack · أنظمة الذكاء الاصطناعي · بنية الاستدلال التحتية",
    built: "بÙني بواسطة innodigi.",
    copyright: "Â© {year} Serkan Akman. جميع الحقوق محفوظة.",
  },
  languageSwitcher: {
    en: "الإنجليزية",
    tr: "التركية",
    de: "الألمانية",
    sr: "الصربية",
    fr: "الفرنسية",
    it: "الإيطالية",
    ar: "العربية",
    he: "العبرية",
  },
};

export const he: TranslationContent = {
  ...en,
  nav: {
    about: "אודות",
    expertise: "יכולות",
    aiSystems: "מערכות AI",
    work: "פרויקטים",
    experience: "ניסיון",
    principles: "עקרונות",
    contact: "יצירת קשר",
  },
  hero: {
    ...en.hero,
    headline:
      "אני בונה מוצרים דיגיטליים ומערכות חכמות במפגש שבין תוכנה, נתונים ותשתיות.",
    subtitle:
      "מהנדס Full-Stack בכיר ובונה מערכות AI. אני הופך רעיונות למוצרים עובדים ותשתיות מורכבות לחוויות אמינות. עובד מרחוק.",
    ctaPrimary: "לצפייה בפרויקטים",
    ctaSecondary: "בואו נדבר",
    statusLabel: "זמין לשיתופי פעולה",
    infraCard: {
      client: "סביבת פיתוח",
      middleware: "שכבת API",
      inference: "מנוע הסקה",
      systems: "RAG Â· כלים Â· יישומים",
    },
  },
  about: {
    ...en.about,
    title: "אודות",
    paragraph1:
      "אני מהנדס Full-Stack בכיר שבונה יישומי ווב, כלי פיתוח ומערכות AI. התחלתי לבנות יישומים ומוצרים דיגיטליים במסגרת עבודה מקצועית ופרויקטים עצמאיים, ובהמשך התמחיתי בהנדסת מוצרים מקצה לקצה ובתכנון מערכות AI.",
    paragraph2:
      "אני בונה מוצרים מקצה לקצה — ממודלי נתונים ותכנון API ועד לממשקים שאנשים משתמשים בהם מדי יום. אני עובד עם TypeScript, React, Node.js, Laravel ופלטפורמות מובייל. בנוסף אני מתכנן ומפעיל תשתיות הסקה מקומיות ובלתי תלויות בענן עבור אחזור מידע, קריאות לכלים ותהליכי עבודה של סוכנים.",
    paragraph3:
      "כיום אני עובד מרחוק כ-Full Stack JavaScript Developer ב-nmi.com ומייסד את innodigi.net. אני מפעיל מעבדת AI אישית המבוססת על GPU, שבה אני מתנסה באופטימיזציה של הסקה, בצינורות RAG ובמערכות סוכנים חכמות.",
    stats: {
      years: "Senior",
      yearsDesc: "מהנדס Full-Stack",
      fullstack: "Full-Stack",
      fullstackDesc: "הנדסת מוצר",
      aiLab: "מבוסס GPU",
      aiLabDesc: "מעבדת AI",
      remote: "מרחוק",
      remoteDesc: "צוותים בינלאומיים",
    },
  },
  expertise: {
    ...en.expertise,
    title: "יכולות",
    subtitle:
      "מארכיטקטורת מוצר ועד תשתיות הסקה — המערכות שאני בונה והבעיות שאני פותר.",
    cards: en.expertise.cards.map((c, i) => ({
      ...c,
      title: [
        "הנדסת מוצר Full-Stack",
        "הסקת AI ומערכות סוכנים",
        "RAG ומערכות ידע",
        "כלי פיתוח ותשתיות",
        "יישומי מובייל",
        "תשתיות AI יצירתיות",
      ][i],
      description: [
        "מוצרי ווב מלאים משכבת הנתונים ועד לממשק בפרודקשן, באמצעות TypeScript, React, Next.js, Node.js, NestJS, Laravel, GraphQL ו-REST.",
        "תשתיות הסקה בלתי תלויות במודל, מסגרות לקריאות לכלים, תהליכי עבודה של סוכנים עם לולאות אימות ופריסה מקומית המותאמת ל-GPU.",
        "צינורות RAG, מסדי נתונים וקטוריים, עיבוד מסמכים, שילוב חיפוש ברשת ותשובות AI המבוססות על מקורות.",
        "כלי פיתוח, תזמור Docker, צינורות CI/CD, ניהול משאבים מודע ל-GPU ותשתיות שרתים לעומסי AI.",
        "מוצרי מובייל חוצי פלטפורמות עם React Native ו-Expo, ארכיטקטורות מבוססות API, אימות ותכונות בזמן אמת.",
        "תהליכי עבודה מתוזמרים ליצירת תמונות, וידאו, אודיו וקריינות, עם תזמור שירותים מבוסס Docker ותכנון מודולרי.",
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
        ["ממשקי הסקה", "קריאות לכלים", "לולאות סוכנים", "אופטימיזציית GPU"],
        ["מאגרי וקטורים", "עיבוד מסמכים", "חיפוש ברשת", "תשובות מבוססות מקור"],
        ["Docker", "CI/CD", "תזמור GPU", "ניהול שרתים"],
        ["React Native", "Expo", "TypeScript", "מבוסס API"],
        ["צינורות מדיה", "תזמור שירותים", "תכנון מודולרי"],
      ][i],
    })),
  },
  aiSystems: {
    ...en.aiSystems,
    title: "מערכות AI",
    subtitle:
      "אני מתכנן בינה מלאכותית לא רק כשכבת צ'אט, אלא כמנגנון קבלת החלטות וייצור המשולב במוצר עצמו.",
    pipeline: {
      data: "נתונים",
      retrieval: "אחזור",
      reasoning: "הסקה",
      tools: "כלים",
      verification: "אימות",
      experience: "חוויית משתמש",
    },
    sections: en.aiSystems.sections.map((s, i) => ({
      ...s,
      title: [
        "תשתיות הסקה",
        "יצירה מבוססת אחזור",
        "קריאות לכלים ותהליכי סוכנים",
        "הערכה וניטור",
      ][i],
      description: [
        "מערכות הסקה מקומיות ובלתי תלויות בענן, עם מקביליות טנזורים על פני כמה מעבדי GPU, טעינת מודלים אופטימלית וממשקי API סטנדרטיים המאפשרים להחליף ספקים ללא שינויי קוד.",
        "צינורות RAG המחברים יישומים למאגרי הידע שלהם, עם הטמעות וקטוריות, אסטרטגיות לחלוקת מסמכים, חיפוש היברידי ותשובות המעוגנות במקורות מאומתים.",
        "מערכות AI שיכולות לקרוא לכלים, להפעיל פונקציות, לחפש ברשת ולפתור משימות מרובות שלבים, עם לולאות אימות שבודקות את התוצאות לפני הצגתן למשתמש.",
        "מדדים, מעקב ומסגרות הערכה למערכות AI. הבנת זמני תגובה, דיוק, עלות וסחיפה — כי מערכת שאי אפשר למדוד היא מערכת שאי אפשר לסמוך עליה.",
      ][i],
    })),
  },
  work: {
    ...en.work,
    title: "פרויקטים נבחרים",
    subtitle: "מוצרים, מערכות ותשתיות — מהרעיון ועד לפרודקשן.",
    projects: en.work.projects.map((p, i) => ({
      ...p,
      title: [
        "מוצרי ווב Full-Stack",
        "מעבדת הסקת AI",
        "יישומי RAG וידע",
        "תשתיות AI יצירתיות",
        "יישומי מובייל",
        "כלי פיתוח",
      ][i],
      type: [
        "עבודת לקוח",
        "מעבדה אישית",
        "מעבדה אישית",
        "מעבדה אישית",
        "פרויקט פרטי",
        "מעבדה אישית",
      ][i],
      problem: [
        "לקוחות זקוקים ליישומי ווב אמינים וניתנים להרחבה, שעובדים בכל מכשיר ומשרתים צרכים עסקיים אמיתיים — לא רק הדגמות.",
        "הפעלת הסקה מקומית דורשת תיאום מדויק בין שכבות החומרה, התוכנה והרשת — בעוד שרוב המדריכים נעצרים ב'שלום עולם'.",
        "מערכות AI צריכות לענות ממקורות מאומתים, לא לייצר טקסט שנשמע משכנע. עיגון בידע הוא ההבדל בין צעצוע לכלי.",
        "תהליכי AI יצירתיים כוללים תמונות, וידאו, אודיו וקריינות — ולכל תחום כלים, פורמטים ודרישות משאבים משלו.",
        "משתמשים זקוקים לחוויות מובייל אמינות עם תכונות בזמן אמת, אימות ואינטראקציה חברתית, המבוססות על כלים מודרניים.",
        "צוותי הנדסה זקוקים לכלים שמפחיתים חיכוך — מסביבות פיתוח מקומיות ועד בדיקות אוטומטיות וצינורות פריסה.",
      ][i],
      solution: [
        "בנייתי מוצרי ווב מלאים עם ממשקי React ו-TypeScript, שרתי Node.js ו-Laravel, ממשקי GraphQL ו-REST, מסדי PostgreSQL, מערכות אימות וממשקים מבוססי נתונים.",
        "בנייתי שרת הסקה כפול-GPU עם ממשקי API סטנדרטיים, ניתוב בלתי תלוי במודל, ניהול משאבים ותזמור שירותים מבוסס Docker. היישומים מתחברים אליו בצורה אחידה, מקומית או בענן.",
        "תכננתי צינורות RAG עם מסדי נתונים וקטוריים, עיבוד מסמכים, חיפוש ברשת ואסטרטגיות אחזור היברידיות, כך שהיישומים מפיקים תשובות מבוססות מקורות.",
        "תזמרתי סטודיו AI יצירתי מקומי עם תהליכי עבודה בסגנון ComfyUI, ניהול שירותי Docker, תיאום משאבי GPU ותכנון מודולרי — על שרת GPU יחיד.",
        "פיתחתי יישומי מובייל חוצי פלטפורמות עם React Native ו-Expo, מגובים ב-GraphQL, PostgreSQL, מערכות אימות והודעות בזמן אמת.",
        "בנייתי כלי פיתוח הכוללים עוזרי קוד מקומיים מבוססי AI, לולאות הנדסיות אוטומטיות, תכנון CI/CD ותהליכי תשתית כקוד.",
      ][i],
      technologies: [
        "React · TypeScript · Node.js · Laravel · GraphQL · PostgreSQL",
        "CUDA · Docker · GPU Orchestration · Inference APIs · Model Routing",
        "Vector Databases · Document Processing · Web Search · Hybrid Retrieval",
        "ComfyUI · Docker · GPU Orchestration · Media Pipelines",
        "React Native · Expo · GraphQL · Apollo · TypeScript",
        "TypeScript · Docker · CI/CD · AI-Assisted Development",
      ][i],
      result: [
        "יישומי ווב ברמת פרודקשן, עם ארכיטקטורה ניתנת להרחבה ובסיס קוד בר-תחזוקה.",
        "תשתית הסקה מקומית מוכנה לפרודקשן, התומכת במודלים מרובים ובעומסי עבודה מקבילים.",
        "יישומי AI מבוססי ידע, עם ייחוס למקורות ותוצרים הניתנים לאימות.",
        "סטודיו יצירתי מקומי ומאוחד לתהליכי AI רב-מודאליים, ללא תלות בענן.",
        "יישומי מובייל ברמת פרודקשן עם תכונות בזמן אמת ועקביות בין פלטפורמות.",
        "כלי פיתוח שמפחיתים חיכוך ומאיצים את הדרך מרעיון לפריסה.",
      ][i],
    })),
    viewDetails: "לפרטים",
    closeDetails: "סגירה",
    problemLabel: "בעיה",
    solutionLabel: "פתרון",
    techLabel: "טכנולוגיות",
    resultLabel: "תוצאה",
  },
  experience: {
    ...en.experience,
    title: "ניסיון",
    roles: en.experience.roles.map((r, i) => ({
      ...r,
      period: i < 2 ? "היום" : i === 5 ? "2015â€“2020" : "בעבר",
      role: [
        "מפתח Full Stack JavaScript",
        "מייסד",
        "מפתח JavaScript",
        "מפתח Frontend",
        "מפתח במשרה חלקית",
        "מפתח תוכנה",
      ][i],
      description: [
        "הנדסת Full-Stack מרחוק עם JavaScript ו-TypeScript, פיתוח מוצרים, תכנון API וארכיטקטורת מערכות.",
        "הקמה וניהול של סטודיו למוצרים דיגיטליים, עם פיתוח Full-Stack, מערכות AI והנדסת מוצר.",
        "פיתוח JavaScript ליישומי ווב, כולל הנדסת Frontend ו-Backend.",
        "הנדסת Frontend עם פריימוורקים מודרניים, ארכיטקטורת רכיבים וממשקי משתמש.",
        "פיתוח עצמאי בתחומי הווב, המובייל וה-AI, עם מגוון רחב של טכנולוגיות.",
        "התחלתי לבנות יישומי ווב ומוצרים דיגיטליים במסגרת עבודה מקצועית ופרויקטים עצמאיים.",
      ][i],
    })),
  },
  principles: {
    ...en.principles,
    title: "עקרונות הנדסיים",
    items: en.principles.items.map((x, i) => ({
      ...x,
      text: [
        "לבנות מערכות שניתן לאמת",
        "להפוך את המורכבות לנצפית",
        "לתכנן את הלולאה, לא רק את הפרומפט",
        "לשמור על ממשקים פשוטים ותשתיות כנות",
        "להפוך ניסויים למערכות לשימוש חוזר",
        "לספק תוכנה שעובדת",
      ][i],
    })),
  },
  contact: {
    ...en.contact,
    title: "בואו נבנה משהו יחד",
    subtitle:
      "אני משתף פעולה בבניית מוצרי Full-Stack, מערכות AI ואתגרים הנדסיים שדורשים חשיבה טכנית עמוקה. אם הפרויקט שלכם זקוק למישהו שמביא תוצאות, דברו איתי.",
    email: "יצירת קשר",
    emailPlaceholder: "akmanserkan65@gmail.com",
  },
  footer: {
    ...en.footer,
    tagline: "הנדסת Full-Stack Â· מערכות AI Â· תשתיות הסקה",
    built: "נבנה על ידי innodigi.",
    copyright: "© {year} Serkan Akman. כל הזכויות שמורות.",
  },
  languageSwitcher: {
    en: "אנגלית",
    tr: "טורקית",
    de: "גרמנית",
    sr: "סרבית",
    fr: "צרפתית",
    it: "איטלקית",
    ar: "ערבית",
    he: "עברית",
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
