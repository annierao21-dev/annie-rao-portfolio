const topButton = document.querySelector(".top-button");
const langToggle = document.querySelector(".lang-toggle");

const content = {
  en: {
    title: "Annie Rao | IT Project Manager",
    nav: ["Strengths", "Experience", "Projects", "Contact"],
    resume: "Resume",
    langButton: "中文",
    heroRole: "IT Project Manager",
    summary:
      "Eight years of IT project management experience across enterprise digital transformation, system integration, business-finance alignment, supply chain, CRM, OMS, ERP, data platforms, and AI-enabled workflow improvement.",
    heroActions: ["View Projects", "Contact"],
    mapTitle: "Enterprise Integration Focus",
    mapGrid: ["Business", "Finance", "IT", "Vendor"],
    mapCore: "Project Delivery",
    metrics: [
      ["8+", "years in IT project management"],
      ["10+", "projects delivered annually"],
      ["80%", "vendor collaboration complaint reduction"],
      ["100+", "automated workflows delivered through RPA"],
    ],
    strengthsTitle: "Core Strengths",
    strengthsIntro:
      "A project manager who connects business processes, financial rules, system boundaries, data flows, and AI-enabled execution.",
    strengths: [
      ["End-to-End Delivery", "Project initiation, scope planning, resource coordination, development tracking, SIT, UAT, go-live, issue tracking, and post-launch review."],
      ["System Integration", "Hands-on experience across OMS, ERP, CRM, WMS, PIM, data platform, reconciliation center, and external channel integrations."],
      ["Business-Finance Integration", "Connects business processes with financial rules across orders, settlement, cost, reconciliation, write-off, reporting logic, and system workflows."],
      ["Vendor & Stakeholder Management", "Long-term coordination with finance, procurement, operations, customer service, IT, testing, external platforms, and vendors."],
      ["AI First Workflow", "Uses tools and AI for status sync, progress collection, meeting notes, reports, Agent workflows, and office automation exploration."],
    ],
    skillsTitle: "Skills & Certifications",
    skills: [
      ["Project Management", "PMBOK, Agile, risk management, change control, UAT, go-live, post-launch review, vendor governance"],
      ["Systems", "ERP, EAS, ECC, OMS, CRM, PIM, WMS, BI, data platform, reconciliation center, API platform, RPA, external platforms"],
      ["Tools", "Jira, Confluence, ZenTao, Visio, Axure, SQL, BI tools, AI workflow tools, Agent and office automation exploration"],
      ["Credentials", "ACP certification, CET-6, Shanghai Jiao Tong University MEM (thesis stage), B.E. Communication Engineering"],
    ],
    experienceTitle: "Work Experience",
    experienceIntro:
      "Built from healthcare supply chain information management, enterprise systems, PMO governance, customer-facing delivery, and digital platform transformation.",
    timeline: [
      ["2025.09 - Present", "Small Medical Device Company", "IT Information Manager (Part-time)", "Supports information management, data analysis, lightweight system setup, and AI-enabled efficiency exploration. Mapped medical device supply chain collaboration across manufacturers, distributors, logistics, inventory, end customers, service, and settlement."],
      ["2021.11 - 2025.09", "NET-A-PORTER", "IT Project Manager", "Managed digital platform projects across finance ERP, OMS, CRM, data platform, channel integration, membership operations, and AI innovation. Coordinated six-plus functional teams and external vendors."],
      ["2020.11 - 2021.11", "Shanghai Cyclone Robotics", "Project Manager", "Managed RPA project delivery for banking, manufacturing, and retail clients. Supported requirement analysis, delivery monitoring, customer success, and renewal opportunities."],
      ["2019.03 - 2020.11", "OpenText Covisint", "Product Owner", "Standardized project processes, tracked milestones, managed risk and quality, and led supplier data sharing and jewelry supply chain collaboration platforms."],
      ["2017.07 - 2019.03", "Tianma Microelectronics", "Project Manager / Requirement Analyst", "Managed CRM requirements for China and Germany users, including user research, requirement documentation, prototyping, priority management, agile iterations, testing, and training."],
    ],
    projectsTitle: "Representative Projects",
    projectsIntro: "Selected work from the final resume, ordered by project start date from newest to earliest.",
    projectToplines: [
      ["AI Innovation", "2024.07 - 2024.11"],
      ["Finance & Business Integration", "2023.01 - 2024.08"],
      ["Channel Integration", "2022.01 - 2022.06"],
      ["RPA Delivery", "2020.05 - 2021.11"],
      ["API Platform", "2020.03 - 2020.10"],
    ],
    projects: [
      ["AI Personal Stylist", "Managed an LLM-based conversational search and recommendation project with multimodal models, product tagging, API integration, testing, and performance optimization.", ["Coordinated algorithm, product, data, backend, testing, and operations teams.", "Managed 17 interfaces, 1,018 Chinese/English test cases, and 147 defects.", "Improved response time from about 60 seconds to 3 seconds and intent accuracy to 95%."]],
      ["NAP Finance Integration Platform", "Rebuilt purchase, order, reconciliation, settlement, ERP, WMS, and data platform collaboration for multi-channel and multi-procurement operations.", ["Delivered in phases across master data, procurement, reconciliation, ERP-HUB, and VMI settlement.", "Clarified OMS and ERP system boundaries for standardized financial data.", "Enabled 100% online handling for four procurement models and reduced reconciliation errors by about 95%."]],
      ["Douyin Sales Channel Launch", "Led a zero-to-one external platform integration covering store setup, product mapping, inventory sync, order processing, after-sales, customer service, CRM, and finance.", ["Used phased SOW and agile delivery to reduce delivery risk.", "Prioritized core transaction workflows for faster launch.", "Shortened core process delivery cycle by about 30%."]],
      ["RPA Project Portfolio", "Managed 12 RPA projects across 5 banks, 6 manufacturing companies, and 1 retail client, including customer visits, requirement research, delivery management, and customer success.", ["Covered project initiation, planning, execution, monitoring, risk tracking, and acceptance.", "Supported RPA workflows integrating NLP and CV for finance and business teams.", "Delivered 100+ automated workflows and developed 6 follow-on cooperation opportunities."]],
      ["SGM Integrated API Platform", "Built a supplier-facing application and data-sharing platform on GM's DEEP middle platform, covering master data, planning, ordering, delivery, inventory, supplier risk, and supply chain management.", ["Led zero-to-one product design and supplier collaboration scenario analysis.", "Managed 40+ functional modules and 150+ API interfaces.", "Supported production launch and adoption by nearly 20 suppliers within four months."]],
    ],
    divider: ["System Delivery Foundation", "Channel launch, automation portfolio, and supplier-facing API platform delivery."],
    contactTitle: "Let us Connect",
    contactIntro:
      "Available for IT project management, enterprise digital transformation, system integration, healthcare supply chain information management, and AI-enabled delivery roles.",
    downloads: ["Chinese CV", "English CV"],
  },
  zh: {
    title: "Annie Rao / 饶莹 | IT项目经理",
    nav: ["核心能力", "工作经历", "代表项目", "联系我"],
    resume: "简历",
    langButton: "EN",
    heroRole: "IT项目经理",
    summary:
      "8年IT项目管理经验，聚焦企业数字化转型、系统集成、业财融合、供应链、CRM、OMS、ERP、数据平台与AI提效应用。",
    heroActions: ["查看项目", "联系我"],
    mapTitle: "企业系统集成重点",
    mapGrid: ["业务", "财务", "IT", "供应商"],
    mapCore: "项目交付",
    metrics: [
      ["8+", "IT项目管理经验"],
      ["10+", "年均交付项目"],
      ["80%", "供应商协作投诉降低"],
      ["100+", "RPA自动化流程落地"],
    ],
    strengthsTitle: "核心能力",
    strengthsIntro:
      "连接业务流程、财务规则、系统边界、数据流与AI提效执行的项目经理。",
    strengths: [
      ["端到端项目交付", "覆盖立项、范围与计划、资源协调、开发跟踪、SIT/UAT、上线窗口、问题跟踪与复盘归档。"],
      ["复杂系统集成", "熟悉OMS、ERP、CRM、WMS、PIM、数据中台、对账中心、外部渠道与接口集成的数据流和业务边界。"],
      ["业财融合", "能够把订单、结算、成本、对账、核销、报表口径与系统流程中的财务规则连接起来。"],
      ["供应商与干系人管理", "长期协调财务、采购、运营、客服、IT、测试、外部平台和供应商，沉淀PRD规范、SOP和交付标准。"],
      ["AI First工作方式", "将状态同步、进度采集、会议纪要、报告生成等重复性工作交给工具和AI，并探索Agent与办公自动化流程。"],
    ],
    skillsTitle: "技能与证书",
    skills: [
      ["项目管理", "PMBOK、敏捷管理、风险管理、变更控制、UAT、上线复盘、供应商治理"],
      ["业务系统", "ERP、EAS、ECC、OMS、CRM、PIM、WMS、BI、数据平台、对账中心、API平台、RPA、外部渠道平台"],
      ["工具能力", "Jira、Confluence、禅道、Visio、Axure、SQL、BI工具、AI工作流工具、Agent与办公自动化探索"],
      ["教育与证书", "ACP敏捷管理认证、英语六级、上海交通大学MEM论文阶段、通信工程本科"],
    ],
    experienceTitle: "工作经历",
    experienceIntro:
      "经历覆盖医疗器械供应链信息化、企业系统建设、PMO治理、客户交付和数字化平台转型。",
    timeline: [
      ["2025.09 - 至今", "小型医疗器械公司", "IT信息管理者（兼职）", "负责企业信息化管理、数据分析、轻量化系统搭建与AI应用提效探索，梳理医疗器械供应链中厂家、代理/经销、物流、库存、终端客户、服务和结算的协作关系。"],
      ["2021.11 - 2025.09", "NET-A-PORTER", "项目经理", "负责财务ERP、OMS、CRM、数据中台、渠道接入、会员运营与AI创新等数字化平台项目，协调6+职能团队和外部供应商。"],
      ["2020.11 - 2021.11", "上海弘玑信息技术有限公司", "项目经理", "负责银行、制造、零售等行业RPA项目交付，推进需求调研、交付跟踪、客户成功和续约机会挖掘。"],
      ["2019.03 - 2020.11", "OpenText Covisint", "产品负责人", "负责项目流程规范、里程碑跟踪、风险质量管理，并主导供应商数据共享平台和珠宝供应链协同平台。"],
      ["2017.07 - 2019.03", "上海天马微电子有限公司", "项目经理 / 需求分析", "负责中德CRM系统需求迭代，覆盖用户调研、需求文档、原型设计、优先级管理、敏捷迭代、测试和培训。"],
    ],
    projectsTitle: "代表项目",
    projectsIntro: "根据终版简历整理，按项目开始时间倒序展示。",
    projectToplines: [
      ["AI创新", "2024.07 - 2024.11"],
      ["业财融合", "2023.01 - 2024.08"],
      ["渠道集成", "2022.01 - 2022.06"],
      ["RPA交付", "2020.05 - 2021.11"],
      ["API平台", "2020.03 - 2020.10"],
    ],
    projects: [
      ["AI Personal Stylist智能搭配建议项目", "基于LLM、多模态模型和推荐算法，为用户提供对话式搜索、场景化穿搭建议和个性化商品推荐。", ["协调算法、产品、数据、后端、测试和运维团队。", "推动17个接口联调、1018条中英文测试用例执行和147个缺陷关闭。", "AI回复速度由约60秒提升至3秒，意图理解准确率提升至95%。"]],
      ["NAP业财一体化建设项目", "重构采购、订单、对账、结算、ERP、WMS和数据平台协同链路，支撑多渠道、多采购模式下的业财协同。", ["分阶段交付主数据、采购、对账、ERP-HUB和VMI结算能力。", "明确OMS与ERP系统边界，沉淀标准化财务数据。", "四大采购模式线上化率100%，核销错误下降约95%。"]],
      ["抖音第三方平台售卖渠道拓展", "主导抖音电商渠道0-1接入，覆盖开店、商品、库存、订单、售后、客服、CRM和财务链路。", ["采用分期SOW和敏捷交付降低项目风险。", "优先打通核心交易闭环，支持业务快速上线。", "核心流程上线周期缩短约30%。"]],
      ["上海弘玑RPA项目集", "管理12个RPA项目，覆盖5个银行、6个制造公司和1个零售行业客户，负责客户拜访、需求调研、交付管理和客户成功。", ["覆盖项目启动、计划、执行、监控、风险跟踪和验收。", "支持结合NLP、CV的RPA流程在财务和业务部门落地。", "完成100+工作流程落地，并发展6个后续合作机会。"]],
      ["SGM上海通用一体化API应用平台", "基于通用DEEP中台，为供应商建设统一应用功能和数据共享平台，覆盖主数据、计划、订货、交付、库存、供应商风险和供应链管理。", ["负责0-1产品设计和供应商协同场景分析。", "管理40+功能模块和150+ API接口。", "产品上线4个月内接入近20家供应商。"]],
    ],
    divider: ["系统交付基础", "渠道上线、自动化项目集与供应商API平台交付能力。"],
    contactTitle: "联系我",
    contactIntro:
      "关注IT项目管理、企业数字化转型、系统集成、医疗器械供应链信息化与AI提效交付机会。",
    downloads: ["中文简历", "英文简历"],
  },
};

const setText = (selector, text) => {
  const node = document.querySelector(selector);
  if (node) node.textContent = text;
};

function applyLanguage(lang) {
  const copy = content[lang] || content.en;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = copy.title;
  langToggle.textContent = copy.langButton;

  document.querySelectorAll(".nav a").forEach((node, index) => {
    node.textContent = copy.nav[index];
  });
  setText(".nav-action span", copy.resume);
  setText(".role", copy.heroRole);
  setText(".summary", copy.summary);
  document.querySelectorAll(".hero-actions a").forEach((node, index) => {
    node.textContent = copy.heroActions[index];
  });
  setText(".map-title", copy.mapTitle);
  document.querySelectorAll(".map-grid span").forEach((node, index) => {
    node.textContent = copy.mapGrid[index];
  });
  setText(".map-core", copy.mapCore);

  document.querySelectorAll(".metrics div").forEach((node, index) => {
    const [value, label] = copy.metrics[index];
    node.querySelector("strong").textContent = value;
    node.querySelector("span").textContent = label;
  });

  setText("#strengths h2", copy.strengthsTitle);
  setText("#strengths .section-heading p", copy.strengthsIntro);
  document.querySelectorAll(".strength-grid article").forEach((node, index) => {
    const [title, body] = copy.strengths[index];
    node.querySelector("h3").textContent = title;
    node.querySelector("p").textContent = body;
  });

  setText(".skills-section h2", copy.skillsTitle);
  document.querySelectorAll(".skill-columns > div").forEach((node, index) => {
    const [title, body] = copy.skills[index];
    node.querySelector("h3").textContent = title;
    node.querySelector("p").textContent = body;
  });

  setText("#experience h2", copy.experienceTitle);
  setText("#experience .section-heading p", copy.experienceIntro);
  document.querySelectorAll(".timeline-item").forEach((node, index) => {
    const [date, company, role, body] = copy.timeline[index];
    node.querySelector(".timeline-date").textContent = date;
    node.querySelector("h3").textContent = company;
    node.querySelector(".item-role").textContent = role;
    node.querySelector("p:not(.item-role)").textContent = body;
  });

  setText("#projects h2", copy.projectsTitle);
  setText("#projects .section-heading p", copy.projectsIntro);
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((node, index) => {
    const [type, date] = copy.projectToplines[index];
    const [title, body, bullets] = copy.projects[index];
    const topline = node.querySelectorAll(".project-topline span");
    topline[0].textContent = type;
    topline[1].textContent = date;
    node.querySelector("h3").textContent = title;
    node.querySelector("p").textContent = body;
    node.querySelectorAll("li").forEach((li, bulletIndex) => {
      li.textContent = bullets[bulletIndex];
    });
  });
  setText(".project-divider span", copy.divider[0]);
  setText(".project-divider p", copy.divider[1]);

  setText(".contact-section h2", copy.contactTitle);
  setText(".contact-section p", copy.contactIntro);
  document.querySelectorAll(".resume-actions .nav-action span").forEach((node, index) => {
    node.textContent = copy.downloads[index];
  });
  const contactLinks = document.querySelectorAll(".contact-actions a");
  contactLinks[1].textContent = copy.downloads[0];
  contactLinks[2].textContent = copy.downloads[1];
  localStorage.setItem("portfolioLanguage", lang);
}

window.addEventListener("scroll", () => {
  topButton.classList.toggle("is-visible", window.scrollY > 600);
});

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

langToggle.addEventListener("click", () => {
  const nextLang = document.documentElement.lang === "zh-CN" ? "en" : "zh";
  applyLanguage(nextLang);
});

applyLanguage(localStorage.getItem("portfolioLanguage") || "en");
