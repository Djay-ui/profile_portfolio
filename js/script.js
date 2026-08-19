/* =========================================================
   EDIT ME — your real profile links
   (everything else on the page is generated from the arrays below)
========================================================= */
const PROFILE = {
  linkedin: "https://www.linkedin.com/in/dhananjay-tupe", // TODO: paste your real LinkedIn URL
  github:   "https://github.com/Djay-ui",
  medium:   "https://medium.com/@dhananjaytupe748",         // TODO: paste your real Medium URL
};

const ARSENAL = [
  { title: "VAPT Tools", icon: "VA", tools: ["OWASP ZAP", "Burp Suite", "Nessus", "Nikto", "Nmap", "Trivy"] },
  { title: "Static / Dynamic Analysis", icon: "SA", tools: ["SonarQube"] },
  { title: "Security Monitoring", icon: "SM", tools: ["OSSEC", "Splunk", "Grafana"] },
  { title: "Container Security", icon: "CS", tools: ["Docker", "Kubernetes", "GKE"] },
  { title: "CI/CD Security Integration", icon: "CI", tools: ["Git", "Jenkins", "Grafana", "Prometheus", "Bash"] },
  { title: "Protocols & Network Security", icon: "NS", tools: ["TCP/IP", "HTTP/HTTPS", "SSL/TLS", "IPsec"] },
  { title: "Cloud Platforms", icon: "CL", tools: ["AWS", "GCP"] },
];

const REPORTS = [
  {
    id: "ENG-01",
    title: "Web Application VAPT — DVWA",
    severity: "Critical",
    scope: "Full-scope penetration test targeting the OWASP Top 10 on a deliberately vulnerable web app.",
    approach: [
      "Simulated real-world attack paths across injection, XSS and broken authentication",
      "Integrated OSSEC for intrusion detection, alerting and log analysis during testing",
      "Documented risk severity, exploitation steps and remediation for every finding",
    ],
    tools: ["DVWA", "Burp Suite", "OWASP ZAP", "OSSEC", "Ubuntu", "Kali", "Metaspolite"],
    status: "Report delivered",
  },
  {
    id: "ENG-02",
    title: "DevSecOps Pipeline Security — Netflix Clone",
    severity: "High",
    scope: "Designed and secured a CI/CD pipeline end-to-end, from commit to production monitoring.",
    approach: [
      "Built a Jenkins pipeline with SAST (SonarQube) and container scanning (Trivy) as required gates",
      "Deployed hardened builds to AWS and Kubernetes with live monitoring in Grafana",
      "Added email alerting on build and vulnerability events to speed up incident response",
    ],
    tools: ["AWS", "Jenkins", "SonarQube", "Docker", "Kubernetes", "Trivy", "Grafana"],
    status: "Live write-up",
    link: https://medium.com/@dhananjaytupe748/devsecops-netflix-clone-ci-cd-with-monitoring-email-part-1-36e2fe9bbb6f, // TODO: paste your Medium article URL here, e.g. "https://medium.com/@you/netflix-clone-secure-ci-cd-pipeline"
    linkLabel: "Read the write-up",
  },
];

const CERTS = [
  { title: "Offensive Security & Ethical Hacking", meta: "Blackhat", icon: "①" },
  { title: "CompTIA Ethical Hacking", meta: "CompTIA", icon: "②" },
  { title: "Certified Ethical Hacker — CEH (Master)", meta: "Pursuing", icon: "③" },
  { title: "TryHackMe · Hack The Box · Bugcrowd", meta: "Active challenge participant", icon: "④" },
];

/* =========================================================
   RENDERERS
========================================================= */
function renderArsenal(){
  const grid = document.getElementById("arsenalGrid");
  grid.innerHTML = ARSENAL.map(group => `
    <div class="arsenal-card">
      <div class="arsenal-card__head">
        <span class="arsenal-card__icon">${group.icon}</span>
        <span class="arsenal-card__title">${group.title}</span>
      </div>
      <div class="arsenal-card__tools">
        ${group.tools.map(t => `<span class="tool-pill">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderReports(){
  const grid = document.getElementById("reportGrid");
  grid.innerHTML = REPORTS.map(r => `
    <article class="report-card">
      <div class="report-card__head">
        <div>
          <span class="report-card__id">${r.id}</span>
          <h3 class="report-card__title">${r.title}</h3>
        </div>
        <span class="sev sev--${r.severity.toLowerCase()}">${r.severity} impact</span>
      </div>
      <div class="report-card__body">
        <div class="report-card__row">
          <span class="report-card__label">SCOPE</span>
          <p class="report-card__text">${r.scope}</p>
        </div>
        <div class="report-card__row">
          <span class="report-card__label">APPROACH</span>
          <ul class="report-card__text">
            ${r.approach.map(a => `<li>${a}</li>`).join("")}
          </ul>
        </div>
        <div class="report-card__row">
          <span class="report-card__label">TOOLING</span>
          <div class="report-card__tools">
            ${r.tools.map(t => `<span class="tool-pill">${t}</span>`).join("")}
          </div>
        </div>
        <div class="report-card__footer">
          ${r.link
            ? `<a class="report-card__link" href="${r.link}" target="_blank" rel="noopener">${r.linkLabel || "View details"} →</a>`
            : `<span class="report-card__status">${r.status}</span>`
          }
          ${r.link ? `<span class="report-card__status">${r.status}</span>` : ""}
        </div>
      </div>
    </article>
  `).join("");
}

function renderCerts(){
  const grid = document.getElementById("certGrid");
  grid.innerHTML = CERTS.map(c => `
    <div class="cert-card">
      <span class="cert-card__icon">${c.icon}</span>
      <div>
        <p class="cert-card__title">${c.title}</p>
        <p class="cert-card__meta">${c.meta}</p>
      </div>
    </div>
  `).join("");
}

function wireContactLinks(){
  document.getElementById("linkedinLink").href = PROFILE.linkedin;
  document.getElementById("githubLink").href = PROFILE.github;
  document.getElementById("mediumLink").href = PROFILE.medium;
}

/* =========================================================
   BOOT SEQUENCE
========================================================= */
function runBoot(){
  const overlay = document.getElementById("boot-overlay");
  if (!overlay) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion){ overlay.classList.add("is-done"); return; }

  const lines = overlay.querySelectorAll(".boot-line");
  let delay = 150;
  lines.forEach((line, i) => {
    const text = line.dataset.text || "";
    const duration = Math.max(500, text.length * 28);
    line.style.transitionProperty = "width";
    line.style.transitionDuration = duration + "ms";
    line.style.transitionTimingFunction = "steps(" + text.length + ")";
    setTimeout(() => { line.style.width = "100%"; }, delay);
    delay += duration + 180;
  });

  setTimeout(() => overlay.classList.add("is-done"), delay + 400);
}

/* =========================================================
   SCROLL REVEAL
========================================================= */
function setupReveal(){
  const targets = document.querySelectorAll(
    ".section__head, .section__body, .arsenal-card, .timeline__item, .report-card, .cert-card, .edu-block, .contact-panel"
  );
  targets.forEach(el => el.classList.add("reveal"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  targets.forEach(el => io.observe(el));
}

/* =========================================================
   NAV: mobile burger menu
========================================================= */
function setupNav(){
  const burger = document.getElementById("navBurger");
  const menu = document.getElementById("navMenu");
  if (!burger || !menu) return;

  const closeMenu = () => {
    menu.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  };

  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });

  // Close the mobile menu after tapping any link/button inside it
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

/* =========================================================
   HERO MATRIX RAIN (subtle, respects reduced motion)
========================================================= */
function setupMatrixRain(){
  const canvas = document.getElementById("matrixRain");
  if (!canvas) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  const chars = "01{}<>/#$%&[]=+;:*^~".split("");
  const fontSize = 15;
  let columns = 0;
  let drops = [];
  let width = 0, height = 0;
  let rafId = null;

  function resize(){
    const hero = canvas.closest(".hero");
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
    columns = Math.floor(width / fontSize);
    drops = new Array(columns).fill(0).map(() => Math.floor(Math.random() * -40));
  }

  function draw(){
    ctx.fillStyle = "rgba(10,13,18,0.14)";
    ctx.fillRect(0, 0, width, height);
    ctx.font = fontSize + "px 'JetBrains Mono', monospace";

    for (let i = 0; i < columns; i++){
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      const fade = Math.max(0, 1 - y / height);
      ctx.fillStyle = `rgba(70, 214, 201, ${0.22 * fade + 0.04})`;
      ctx.fillText(char, x, y);

      if (y > height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
    rafId = requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", () => { resize(); });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden){ cancelAnimationFrame(rafId); }
    else { rafId = requestAnimationFrame(draw); }
  });
}

/* =========================================================
   ONE-SHOT GLITCH ON HERO ACCENT LINE
========================================================= */
function setupGlitch(){
  const el = document.querySelector("[data-glitch]");
  if (!el) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const fire = () => {
    el.classList.remove("glitching");
    void el.offsetWidth; // restart animation
    el.classList.add("glitching");
  };
  setTimeout(fire, 1600);
};

/* =========================================================
   INIT
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderArsenal();
  renderReports();
  renderCerts();
  wireContactLinks();
  setupReveal();
  setupNav();
  setupMatrixRain();
  setupGlitch();
  runBoot();
  document.getElementById("year").textContent = new Date().getFullYear();
});
