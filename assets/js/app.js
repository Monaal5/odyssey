// Mock Database for Odyssey Platform
const SKILL_DATABASE = {
  "web development": {
    category: "Education & Tech",
    duration: "12 Weeks",
    description: "Master React, Node.js, and modern CSS/HTML to construct advanced, responsive web applications.",
    roadmap: [
      { num: 1, title: "Foundations of Web & CSS", duration: "Week 1-2", desc: "Learn semantical HTML5 structure, advanced CSS flexbox/grid layout systems, and responsive web principles.", tasks: ["Build a semantic HTML portfolio page", "Design a glassmorphic landing page using Flexbox", "Deploy layout to Netlify or GitHub Pages"] },
      { num: 2, title: "JavaScript ES6+ Essentials", duration: "Week 3-5", desc: "Understand modern JavaScript structures: promises, async/await, API data fetching, scope, and closures.", tasks: ["Create an interactive dashboard with custom JS events", "Consume external JSON API using fetch", "Create a task tracking application"] },
      { num: 3, title: "React Component Architecture", duration: "Week 6-9", desc: "Build modular interfaces using React hooks (useState, useEffect), custom context, and routing principles.", tasks: ["Configure a single-page app with React Router", "Manage global state using Context API", "Build a reusable table component with sorting"] },
      { num: 4, title: "Node.js Back-End Integration", duration: "Week 10-12", desc: "Configure RESTful APIs with Express, hook up to Supabase or PostgreSQL databases, and build auth checkpoints.", tasks: ["Initialize Express server with custom middleware", "Create Supabase database tables and schemas", "Deploy integrated API to Render or fly.io"] }
    ]
  },
  "classical guitar": {
    category: "Education & Music",
    duration: "16 Weeks",
    description: "Develop classical fingerstyle technique, master sheet music reading, and build a repertoire of classical guitar pieces.",
    roadmap: [
      { num: 1, title: "Posture & Left/Right Hand Basics", duration: "Week 1-3", desc: "Master proper playing posture, rest stroke (apoyando), free stroke (tirando), and basic notation.", tasks: ["Set up correct stool height and leg position", "Perform rest stroke exercises on open strings", "Read and play basic single-note classical exercises"] },
      { num: 2, title: "Reading Sheet Music & Arpeggios", duration: "Week 4-7", desc: "Learn key signatures, standard notation in first position, and practice classical arpeggio patterns (Giuliani 120).", tasks: ["Perform Giuliani Arpeggio exercises 1 to 10", "Sight-read a basic melody in C Major", "Memorize notes on the first four frets"] },
      { num: 3, title: "Repertoire Foundations", duration: "Week 8-12", desc: "Begin playing student pieces by Carulli, Sor, and Aguado. Focus on dynamic control and tone production.", tasks: ["Learn Fernando Sor's Study in C Major", "Practice Mauro Giuliani's Allegro in A Minor", "Record yourself playing to review tone and tempo"] },
      { num: 4, title: "Advanced Performance & Polyphony", duration: "Week 13-16", desc: "Explore polyphonic voice separation, control tone color (sul tasto vs ponticello), and prepare for a performance.", tasks: ["Master J.S. Bach's Bourrée in E Minor", "Perform piece for a mentor to get tone feedback", "Record a clean 3-minute performance run"] }
    ]
  },
  "professional driving": {
    category: "Career & Vocational",
    duration: "6 Weeks",
    description: "Learn advanced defensive driving techniques, commercial transport rules, vehicle maintenance, and prepare for license certifications.",
    roadmap: [
      { num: 1, title: "Traffic Regulations & Laws", duration: "Week 1", desc: "Learn local traffic rules, transport regulations, road signs, and legal responsibilities.", tasks: ["Study the commercial driving handbook chapters 1-5", "Take a mock practice test on regulations", "Review legal load limits and documentation"] },
      { num: 2, title: "Vehicle Mechanics & Inspection", duration: "Week 2", desc: "Understand standard vehicle engines, braking systems, and perform complete pre-trip safety inspections.", tasks: ["Identify major engine bay components", "Complete a mock 15-point safety inspection checklist", "Test and inspect air brake systems"] },
      { num: 3, title: "Defensive Driving & Maneuvers", duration: "Week 3-4", desc: "Learn control maneuvers: parallel parking, reverse backing, lane management, and defensive driving under poor weather.", tasks: ["Practice backing up a commercial vehicle in a straight line", "Complete 5 hours of defensive driving runs", "Practice lane merging and space management"] },
      { num: 4, title: "Highway Navigation & Test Prep", duration: "Week 5-6", desc: "Drive on high-speed expressways, master fuel-efficient driving, and perform simulated practical road tests.", tasks: ["Complete a 50-mile highway driving run", "Practice hill starts and engine downshifting", "Pass a mock practical road test with an instructor"] }
    ]
  }
};

const MOCK_MENTORS = [
  { id: "m1", name: "Rohan Sharma", skill: "web development", location: "Sector 14, Chandigarh", status: "online", rate: "$25/hr", distance: "0.8 km", level: "Pro" },
  { id: "m2", name: "Ananya Goel", skill: "web development", location: "Sector 35, Chandigarh", status: "offline", rate: "$30/hr", distance: "2.4 km", level: "Intermediate" },
  { id: "m3", name: "David Miller", skill: "web development", location: "Online / California", status: "online", rate: "$45/hr", distance: "Online", level: "Pro" },
  { id: "m4", name: "Vikram Jeet", skill: "classical guitar", location: "Sector 15, Chandigarh", status: "online", rate: "$20/hr", distance: "1.1 km", level: "Pro" },
  { id: "m5", name: "Sarah Jenkins", skill: "classical guitar", location: "Online / London", status: "online", rate: "$35/hr", distance: "Online", level: "Pro" },
  { id: "m6", name: "Gurpreet Singh", skill: "professional driving", location: "Sector 22, Chandigarh", status: "online", rate: "$15/hr", distance: "1.5 km", level: "Intermediate" },
  { id: "m7", name: "Ram Kumar", skill: "professional driving", location: "Sector 43, Chandigarh", status: "offline", rate: "$18/hr", distance: "3.2 km", level: "Pro" }
];

const MOCK_PEERS = [
  { id: "p1", name: "Amit Patel", skill: "web development", level: "Beginner", location: "Sector 14, Chandigarh", status: "online", role: "learner" },
  { id: "p2", name: "Sanya Sen", skill: "web development", level: "Intermediate", location: "Sector 15, Chandigarh", status: "offline", role: "learner" },
  { id: "p3", name: "Kunal Gupta", skill: "web development", level: "Beginner", location: "Sector 22, Chandigarh", status: "online", role: "learner" },
  { id: "p4", name: "Rahul Varma", skill: "classical guitar", level: "Beginner", location: "Sector 12, Chandigarh", status: "online", role: "learner" },
  { id: "p5", name: "Kriti Sharma", skill: "classical guitar", level: "Intermediate", location: "Sector 35, Chandigarh", status: "offline", role: "learner" },
  { id: "p6", name: "Priya Das", skill: "classical guitar", level: "Beginner", location: "Sector 8, Chandigarh", status: "online", role: "learner" },
  { id: "p7", name: "Jaspreet Singh", skill: "professional driving", level: "Beginner", location: "Sector 22, Chandigarh", status: "online", role: "learner" },
  { id: "p8", name: "Mohit Gupta", skill: "professional driving", level: "Intermediate", location: "Sector 19, Chandigarh", status: "offline", role: "learner" }
];


const MOCK_INSTITUTIONS = [
  { id: "i1", name: "Chandigarh Coding Academy", skill: "web development", type: "offline", location: "Sector 34, Chandigarh", info: "Offers intensive physical bootcamps with job placement help.", fee: "$400 total" },
  { id: "i2", name: "EduTech Online University", skill: "web development", type: "online", location: "Global / Online", info: "Self-paced React specialization courses with verified certificates.", fee: "$29/mo" },
  { id: "i3", name: "Chandigarh Music School", skill: "classical guitar", type: "offline", location: "Sector 8, Chandigarh", info: "One-on-one classical guitar lessons for Trinity / ABRSM certifications.", fee: "$60/mo" },
  { id: "i4", name: "Guitar Masterclass Online", skill: "classical guitar", type: "online", location: "Global / Online", info: "HD video library with sheet music downloads and interactive tabs.", fee: "$19/mo" },
  { id: "i5", name: "PU Driving Academy", skill: "professional driving", type: "offline", location: "Sector 25, Chandigarh", info: "Government-approved commercial driving course with license prep.", fee: "$150 total" },
  { id: "i6", name: "DriveSafe Virtual Academy", skill: "professional driving", type: "online", location: "Global / Online", info: "Interactive driving simulations and safety theory certification.", fee: "$49 total" }
];

// Active State Management
let currentSkillKey = "web development";
let selectedRole = "learner";
let pdfFilename = "odyssey_blueprint.pdf";
let currentUserProfile = {
  name: "Guest User",
  role: "learner",
  email: "guest@odyssey.com",
  location: "Sector 14, Chandigarh",
  roll_no: "PU-1029",
  skills: []
};
let userProgress = {};

// DOM Elements
const engineInput = document.getElementById("engine-input");
const engineSubmit = document.getElementById("engine-submit");
const appViews = document.querySelectorAll(".app-view");
const tabBtns = document.querySelectorAll(".tab-btn");
const sampleTags = document.querySelectorAll(".sample-tag");

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  // Load profile from localStorage if exists
  const cachedProfile = localStorage.getItem("odyssey_profile");
  if (cachedProfile) {
    currentUserProfile = JSON.parse(cachedProfile);
    updateProfileUI();
  }

  // Load progress state
  loadProgress();

  // Setup tab routing
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetView = btn.dataset.view;
      switchView(targetView);
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      // Clear active drawer item states
      document.querySelectorAll(".drawer-item").forEach(b => b.classList.remove("active"));
      
      if (targetView === "peers-view") {
        renderPeers(currentSkillKey);
      } else if (targetView === "progress-view") {
        renderProgressPage(currentSkillKey);
      }
    });
  });

  // Setup sample query clicks
  sampleTags.forEach(tag => {
    tag.addEventListener("click", () => {
      engineInput.value = tag.dataset.query;
      generateJourney(tag.dataset.query.toLowerCase());
    });
  });

  // Setup submit action
  if (engineSubmit) {
    engineSubmit.addEventListener("click", () => {
      const query = engineInput.value.trim().toLowerCase();
      if (query) {
        generateJourney(query);
      }
    });
  }

  if (engineInput) {
    engineInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const query = engineInput.value.trim().toLowerCase();
        if (query) {
          generateJourney(query);
        }
      }
    });
  }

  // Setup registration triggers
  const registerBtn = document.getElementById("register-btn");
  if (registerBtn) {
    registerBtn.addEventListener("click", handleProfileRegistration);
  }

  // Setup role switcher inside registration
  const roleOptions = document.querySelectorAll(".role-option");
  roleOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      roleOptions.forEach(o => o.classList.remove("selected"));
      opt.classList.add("selected");
      selectedRole = opt.dataset.role;
    });
  });

  // Setup Institution Submission form handler
  const instForm = document.getElementById("institution-form");
  if (instForm) {
    instForm.addEventListener("submit", handleInstitutionSubmission);
  }

  // Initial UI setups
  updateStatsCounters();
  generateJourney("web development");
  
  // Start on Home Landing page
  switchView("home-view");
  tabBtns.forEach(b => {
    if (b.dataset.view === "home-view") {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });
});

// View Switcher
function switchView(viewId) {
  appViews.forEach(view => {
    if (view.id === viewId) {
      view.classList.add("active");
    } else {
      view.classList.remove("active");
    }
  });
}

// Generate Personalized Journey
function generateJourney(query) {
  // Simple intent classification mockup
  let matchedKey = "web development"; // default fallback
  
  if (query.includes("guitar") || query.includes("music") || query.includes("instrument")) {
    matchedKey = "classical guitar";
  } else if (query.includes("drive") || query.includes("driving") || query.includes("license") || query.includes("car")) {
    matchedKey = "professional driving";
  } else if (query.includes("web") || query.includes("code") || query.includes("react") || query.includes("developer")) {
    matchedKey = "web development";
  } else {
    // Generate a dynamic mockup template for unlisted skills
    matchedKey = createDynamicTemplate(query);
  }

  currentSkillKey = matchedKey;
  
  // Render Roadmap Markup
  renderRoadmap(matchedKey);
  
  // Render Connected Experts
  renderExperts(matchedKey);
  
  // Render Connected Institutions
  renderInstitutions(matchedKey);

  // Render Connected Study Peers
  renderPeers(matchedKey);

  // Sync progress data and bar values
  updateOverallProgress(matchedKey);

  // Sync the Directory tab selects as well
  const dirSelect = document.getElementById("dir-skill-select");
  if (dirSelect) {
    dirSelect.value = matchedKey;
  }

  // Switch to explorer tab
  switchView("journey-view");
  tabBtns.forEach(b => {
    if (b.dataset.view === "journey-view") {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });
}

// Create Dynamic Template for any custom skill user inputs
function createDynamicTemplate(skillName) {
  const formattedName = skillName.charAt(0).toUpperCase() + skillName.slice(1);
  const keyName = skillName.toLowerCase();
  
  SKILL_DATABASE[keyName] = {
    category: "Specialized Skill Journey",
    duration: "8 Weeks",
    description: `A custom step-by-step roadmap to master ${formattedName} tailored to your current location and level.`,
    roadmap: [
      { num: 1, title: `${formattedName} Foundations`, duration: "Week 1-2", desc: `Grasp core setup, basic concepts, safety rules, and terminology for ${formattedName}.`, tasks: [`Study introductory documentation on ${formattedName}`, `Set up practice tools and gear`, `Complete basics quiz`] },
      { num: 2, title: `Intermediate Mechanics`, duration: "Week 3-4", desc: `Practice routine scenarios, core procedures, and build coordination or technical speed.`, tasks: [`Complete 5 practical exercises`, `Connect with a mentor for first feedback`, `Audit standard process flows`] },
      { num: 3, title: `Advanced Projects`, duration: "Week 5-6", desc: `Apply skill to complex, self-guided work or scenarios with real-world constraints.`, tasks: [`Build a complete showcase project`, `Identify core bottlenecks and debug`, `Perform peer review session`] },
      { num: 4, title: `Certification & Delivery`, duration: "Week 7-8", desc: `Finalize assessments, test readiness under pressure, and prepare for license or professional matches.`, tasks: [`Pass a comprehensive mock exam`, `Optimize speed and efficiency metrics`, `Publish output portfolio / certification request`] }
    ]
  };

  // Add dummy dynamic mentors
  MOCK_MENTORS.push(
    { id: `dm_${Date.now()}_1`, name: "Suresh Kumar", skill: keyName, location: "Sector 15, Chandigarh", status: "online", rate: "$18/hr", distance: "1.2 km", level: "Pro" },
    { id: `dm_${Date.now()}_2`, name: "Emma Watson", skill: keyName, location: "Online / London", status: "online", rate: "$32/hr", distance: "Online", level: "Pro" }
  );

  // Add dummy dynamic peers
  MOCK_PEERS.push(
    { id: `dp_${Date.now()}_1`, name: "Kushal Arora", skill: keyName, level: "Beginner", location: "Sector 15, Chandigarh", status: "online", role: "learner" },
    { id: `dp_${Date.now()}_2`, name: "Ridhi Sen", skill: keyName, level: "Intermediate", location: "Sector 22, Chandigarh", status: "offline", role: "learner" }
  );

  // Add dummy dynamic institutions
  MOCK_INSTITUTIONS.push(
    { id: `di_${Date.now()}_1`, name: `Chandigarh ${formattedName} Center`, skill: keyName, type: "offline", location: "Sector 22, Chandigarh", info: `Specialized local workshops and bootcamps for ${formattedName}.`, fee: "$120 total" },
    { id: `di_${Date.now()}_2`, name: `Global ${formattedName} Online School`, skill: keyName, type: "online", location: "Global / Online", info: `Online tutorials, virtual simulations, and forum discussions.`, fee: "$15/mo" }
  );

  updateStatsCounters();
  return keyName;
}

// Render Step-by-Step Roadmap
function renderRoadmap(skillKey) {
  const skill = SKILL_DATABASE[skillKey];
  const container = document.getElementById("roadmap-container");
  
  document.getElementById("journey-skill-name").innerText = skillKey.toUpperCase();
  document.getElementById("journey-meta").innerText = `${skill.category} · ${skill.duration}`;
  
  let html = "";
  skill.roadmap.forEach((step, idx) => {
    const isActive = idx === 0 ? "active" : "";
    html += `
      <div class="roadmap-step ${isActive}" id="step-${step.num}">
        <div class="step-number-node">${step.num}</div>
        <div class="step-header">
          <div class="step-title">${step.title}</div>
          <div class="step-duration">${step.duration}</div>
        </div>
        <div class="step-desc">${step.desc}</div>
        <div class="step-tasks">
          ${step.tasks.map((task, tIdx) => {
            const taskKey = `${skillKey}_${step.num}_${tIdx}`;
            const isDone = userProgress[taskKey] ? "checked" : "";
            const doneClass = userProgress[taskKey] ? "done" : "";
            return `
              <label class="task-item ${doneClass}">
                <input type="checkbox" data-task-key="${taskKey}" onchange="handleTaskChange(this, '${skillKey}', ${step.num}, ${tIdx})" ${isDone}>
                <span>${task}</span>
              </label>
            `;
          }).join("")}
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

// Render Mentors
function renderExperts(skillKey, filter = "all") {
  const listContainers = [document.getElementById("experts-list"), document.getElementById("dir-experts-list")];
  let filtered = MOCK_MENTORS.filter(m => m.skill === skillKey);
  
  if (filter === "online") {
    filtered = filtered.filter(m => m.status === "online");
  } else if (filter === "local") {
    filtered = filtered.filter(m => m.distance !== "Online");
  }

  listContainers.forEach(container => {
    if (!container) return;
    if (filtered.length === 0) {
      container.innerHTML = `<div style="font-size:12px; color:var(--text-faint); padding:10px 0;">No matching mentors available in this filter.</div>`;
      return;
    }

    container.innerHTML = filtered.map(m => `
      <div class="expert-card">
        <div class="expert-av">
          ${m.name.split(" ").map(n => n[0]).join("")}
          <div class="status-dot ${m.status}"></div>
        </div>
        <div class="expert-details">
          <div class="expert-name">
            <span class="level-prefix ${(m.level || 'Pro').toLowerCase()}">${m.level || 'Pro'}</span>
            ${m.name}
          </div>
          <div class="expert-sub">Mentor · ${m.location}</div>
          <div class="expert-meta">
            <span>💰 ${m.rate}</span>
            <span>📍 ${m.distance}</span>
          </div>
        </div>
        <button class="expert-connect" onclick="openChatWith('${m.name}')">Connect</button>
      </div>
    `).join("");
  });
}

// Render Institutions
function renderInstitutions(skillKey, filter = "all") {
  const listContainers = [document.getElementById("institutions-list"), document.getElementById("dir-institutions-list")];
  let filtered = MOCK_INSTITUTIONS.filter(i => i.skill === skillKey);
  
  if (filter === "online") {
    filtered = filtered.filter(i => i.type === "online");
  } else if (filter === "offline") {
    filtered = filtered.filter(i => i.type === "offline");
  }

  listContainers.forEach(container => {
    if (!container) return;
    if (filtered.length === 0) {
      container.innerHTML = `<div style="font-size:12px; color:var(--text-faint); padding:10px 0;">No institutions available in this filter.</div>`;
      return;
    }

    container.innerHTML = filtered.map(i => `
      <div class="inst-card">
        <div class="inst-header">
          <div class="inst-name">${i.name}</div>
          <span class="inst-type-badge ${i.type}">${i.type}</span>
        </div>
        <div class="inst-desc">${i.info}</div>
        <div class="inst-meta">
          <span>📍 ${i.location}</span>
          <span>💵 Fee: ${i.fee}</span>
        </div>
      </div>
    `).join("");
  });
}

// Render Connect Peers Network
function renderPeers(skillKey, filterLevel = "all") {
  const container = document.getElementById("peers-list-container");
  if (!container) return;
  
  // Set Active Learning Plan Badge
  const activePlanBadge = document.getElementById("peer-active-plan-badge");
  if (activePlanBadge) {
    activePlanBadge.innerText = skillKey.toUpperCase();
  }

  let filtered = MOCK_PEERS.filter(p => p.skill === skillKey);
  if (filterLevel !== "all") {
    filtered = filtered.filter(p => p.level === filterLevel);
  }

  if (filtered.length === 0) {
    container.innerHTML = `<div style="font-size:12px; color:var(--text-faint); padding:20px 0;">No active study buddies found for "${skillKey}" with "${filterLevel}" level.</div>`;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="expert-card">
      <div class="expert-av" style="background:rgba(var(--accent-color-rgb), 0.05); color:var(--accent-color); font-weight:800;">
        ${p.name.split(" ").map(n => n[0]).join("")}
        <div class="status-dot ${p.status}"></div>
      </div>
      <div class="expert-details">
        <div class="expert-name">
          <span class="level-prefix ${p.level.toLowerCase()}">${p.level}</span>
          ${p.name}
        </div>
        <div class="expert-sub">Learner · ${p.location}</div>
        <div class="expert-meta">
          <span>🎯 Plan: Active Study Buddy</span>
        </div>
      </div>
      <button class="expert-connect" onclick="openChatWith('${p.name}')">Connect</button>
    </div>
  `).join("");
}

// Peer Level Selector Filter Handler
function filterPeersByLevel(level) {
  renderPeers(currentSkillKey, level);
}

// Trigger Sidebar Filters
function filterExperts(type, btn) {
  const pills = btn.parentNode.querySelectorAll(".pill-btn");
  pills.forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
  renderExperts(currentSkillKey, type);
}

function filterInstitutions(type, btn) {
  const pills = btn.parentNode.querySelectorAll(".pill-btn");
  pills.forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
  renderInstitutions(currentSkillKey, type);
}

// Progress & Locking Mechanics State Handler
function loadProgress() {
  const cachedProgress = localStorage.getItem("odyssey_progress");
  if (cachedProgress) {
    userProgress = JSON.parse(cachedProgress);
  } else {
    userProgress = {};
  }
}

function saveProgress() {
  localStorage.setItem("odyssey_progress", JSON.stringify(userProgress));
}

function handleTaskChange(checkbox, skillKey, stepNum, taskIdx) {
  const isChecked = checkbox.checked;
  const taskKey = `${skillKey}_${stepNum}_${taskIdx}`;
  userProgress[taskKey] = isChecked;
  saveProgress();
  
  // Synchronize visual states of checkboxes across views
  syncCheckboxState(taskKey, isChecked);
  
  // Update progress calculations
  updateOverallProgress(skillKey);
  
  // Dynamically update Progress timeline UI if active
  const progressView = document.getElementById("progress-view");
  if (progressView && progressView.classList.contains("active")) {
    renderProgressPage(skillKey);
  }
  
  checkNudgeTrigger();
}

function syncCheckboxState(taskKey, isChecked) {
  const checkboxes = document.querySelectorAll(`input[data-task-key="${taskKey}"]`);
  checkboxes.forEach(cb => {
    cb.checked = isChecked;
    const label = cb.closest('.task-item');
    if (label) {
      if (isChecked) {
        label.classList.add("done");
      } else {
        label.classList.remove("done");
      }
    }
  });
}

function updateOverallProgress(skillKey) {
  const skill = SKILL_DATABASE[skillKey];
  if (!skill) return;
  
  let totalTasks = 0;
  let checkedTasks = 0;
  
  skill.roadmap.forEach(step => {
    step.tasks.forEach((task, tIdx) => {
      totalTasks++;
      const taskKey = `${skillKey}_${step.num}_${tIdx}`;
      if (userProgress[taskKey]) {
        checkedTasks++;
      }
    });
  });
  
  const percent = totalTasks > 0 ? Math.round((checkedTasks / totalTasks) * 100) : 0;
  
  const fillBar = document.getElementById("progress-fill-bar");
  const percentLbl = document.getElementById("progress-percent-lbl");
  const planTitle = document.getElementById("progress-plan-title");
  
  const displayName = skillKey.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  if (fillBar) fillBar.style.width = `${percent}%`;
  if (percentLbl) percentLbl.innerText = `${percent}% Completed`;
  if (planTitle) planTitle.innerText = `Active Plan: ${displayName}`;
  
  updateDashboardProgress(skillKey);
}

function updateDashboardProgress(skillKey) {
  const skill = SKILL_DATABASE[skillKey];
  if (!skill) return;

  const displayName = skillKey.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const dashActiveSkillEl = document.getElementById("dash-active-skill");
  if (dashActiveSkillEl) {
    dashActiveSkillEl.innerText = displayName + " Certification";
  }

  let completedStepsCount = 0;
  let totalTasks = 0;
  let checkedTasks = 0;

  skill.roadmap.forEach(step => {
    let stepTasks = step.tasks.length;
    let stepChecked = 0;
    step.tasks.forEach((task, tIdx) => {
      totalTasks++;
      const taskKey = `${skillKey}_${step.num}_${tIdx}`;
      if (userProgress[taskKey]) {
        stepChecked++;
        checkedTasks++;
      }
    });
    if (stepChecked === stepTasks) {
      completedStepsCount++;
    }
  });

  const percent = totalTasks > 0 ? Math.round((checkedTasks / totalTasks) * 100) : 0;

  const dashStepStatusEl = document.getElementById("dash-step-status");
  if (dashStepStatusEl) {
    dashStepStatusEl.innerText = `Current Step: ${completedStepsCount}/${skill.roadmap.length} Completed`;
  }

  const dashPercentStatusEl = document.getElementById("dash-percent-status");
  if (dashPercentStatusEl) {
    dashPercentStatusEl.innerText = `${percent}% Done`;
  }
}

function renderProgressPage(skillKey) {
  const skill = SKILL_DATABASE[skillKey];
  const container = document.getElementById("progress-phases-container");
  if (!container || !skill) return;
  
  updateOverallProgress(skillKey);
  
  let html = "";
  let previousStepCompleted = true;
  
  skill.roadmap.forEach((step, idx) => {
    const isUnlocked = idx === 0 || previousStepCompleted;
    
    let stepTasksCount = step.tasks.length;
    let stepCheckedCount = 0;
    step.tasks.forEach((task, tIdx) => {
      const taskKey = `${skillKey}_${step.num}_${tIdx}`;
      if (userProgress[taskKey]) {
        stepCheckedCount++;
      }
    });
    
    const isCompleted = stepCheckedCount === stepTasksCount;
    
    let statusClass = "locked";
    let statusText = "Locked";
    if (isUnlocked) {
      if (isCompleted) {
        statusClass = "complete";
        statusText = "Completed";
      } else {
        statusClass = "active";
        statusText = "In Progress";
      }
    }
    
    if (isUnlocked) {
      html += `
        <div class="phase-card" id="progress-phase-${step.num}">
          <div class="phase-header">
            <div class="phase-title">Phase ${step.num}: ${step.title}</div>
            <span class="phase-status-tag ${statusClass}">${statusText}</span>
          </div>
          <div class="phase-card-body">
            <p class="step-desc">${step.desc}</p>
            <div class="step-tasks">
              ${step.tasks.map((task, tIdx) => {
                const taskKey = `${skillKey}_${step.num}_${tIdx}`;
                const isDone = userProgress[taskKey] ? "checked" : "";
                const doneClass = userProgress[taskKey] ? "done" : "";
                return `
                  <label class="task-item ${doneClass}">
                    <input type="checkbox" data-task-key="${taskKey}" onchange="handleTaskChange(this, '${skillKey}', ${step.num}, ${tIdx})" ${isDone}>
                    <span>${task}</span>
                  </label>
                `;
              }).join("")}
            </div>
          </div>
        </div>
      `;
    } else {
      html += `
        <div class="phase-card locked" id="progress-phase-${step.num}">
          <div class="lock-overlay">
            <div class="lock-badge">
              <span>🔒</span> Phase ${step.num} Locked
            </div>
            <p style="font-size: 12px; color: var(--text-muted); margin-top: 8px;">Complete all tasks in Phase ${step.num - 1} to unlock</p>
          </div>
          <div class="phase-header">
            <div class="phase-title">Phase ${step.num}: ${step.title}</div>
            <span class="phase-status-tag locked">Locked</span>
          </div>
          <div class="phase-card-body">
            <p class="step-desc">${step.desc}</p>
            <div class="step-tasks">
              ${step.tasks.map((task, tIdx) => {
                const taskKey = `${skillKey}_${step.num}_${tIdx}`;
                return `
                  <label class="task-item">
                    <input type="checkbox" disabled>
                    <span>${task}</span>
                  </label>
                `;
              }).join("")}
            </div>
          </div>
        </div>
      `;
    }
    
    previousStepCompleted = isCompleted && isUnlocked;
  });
  
  container.innerHTML = html;
}

// Agentic Blocker check-ins logic
function checkNudgeTrigger() {
  const totalCheckboxes = document.querySelectorAll(".roadmap-timeline input[type='checkbox']");
  const checkedCheckboxes = document.querySelectorAll(".roadmap-timeline input[type='checkbox']:checked");
  
  const nudgeBanner = document.getElementById("nudge-banner");
  if (checkedCheckboxes.length > 0 && checkedCheckboxes.length < totalCheckboxes.length) {
    const matchedMentor = MOCK_MENTORS.find(m => m.skill === currentSkillKey && m.status === "online");
    const mentorName = matchedMentor ? matchedMentor.name : "Rohan Sharma";
    
    nudgeBanner.innerHTML = `
      <div class="agent-avatar">🤖</div>
      <div class="agent-text">
        <h4>Odyssey Agent Check-In</h4>
        <p>I noticed you are working on Step 1. If you run into blockers, <strong>${mentorName}</strong> is online and can help you immediately.</p>
      </div>
      <button class="btn primary" style="padding: 6px 14px; font-size:11px;" onclick="openChatWith('${mentorName}')">Nudge Chat</button>
    `;
    nudgeBanner.style.display = "flex";
  }
}

// Interactive chat mockup
function openChatWith(mentorName) {
  const chatWindow = document.getElementById("chat-window");
  document.getElementById("chat-recipient-name").innerText = mentorName;
  
  const chatBody = document.getElementById("chat-body");
  chatBody.innerHTML = `
    <div class="chat-bubble recipient">
      Hello! I saw you are learning about ${currentSkillKey.toUpperCase()} on Odyssey. How can I assist you with your current step?
    </div>
  `;
  
  chatWindow.classList.add("show");
}

function closeChat() {
  document.getElementById("chat-window").classList.remove("show");
}

function sendMessage() {
  const input = document.getElementById("chat-input-text");
  const msg = input.value.trim();
  if (!msg) return;

  const chatBody = document.getElementById("chat-body");
  chatBody.innerHTML += `<div class="chat-bubble sender">${msg}</div>`;
  
  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;

  setTimeout(() => {
    chatBody.innerHTML += `
      <div class="chat-bubble recipient">
        That sounds interesting! Let's set up a quick 15-minute call to go over this step. Would you prefer offline in Sector 14 or an online Meet session?
      </div>
    `;
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 1200);
}

// Handle Profile Creation
function handleProfileRegistration() {
  const name = document.getElementById("reg-name").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const location = document.getElementById("reg-location").value.trim();
  const rollNo = document.getElementById("reg-roll").value.trim();

  if (!name || !email) {
    alert("Please fill in Name and Email!");
    return;
  }

  currentUserProfile = {
    name: name,
    email: email,
    location: location || "Sector 14, Chandigarh",
    roll_no: rollNo || "N/A",
    role: selectedRole
  };

  localStorage.setItem("odyssey_profile", JSON.stringify(currentUserProfile));
  updateProfileUI();

  alert(`Profile registered successfully as a ${selectedRole.toUpperCase()}!`);
  
  switchView("dashboard-view");
  tabBtns.forEach(b => {
    if (b.dataset.view === "dashboard-view") {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });
}

function updateProfileUI() {
  document.getElementById("user-name-tag").innerText = currentUserProfile.name;
  document.getElementById("user-role-tag").innerText = currentUserProfile.role;
  
  document.getElementById("dash-profile-name").innerText = currentUserProfile.name;
  document.getElementById("dash-profile-role").innerText = currentUserProfile.role.toUpperCase();
  document.getElementById("dash-profile-email").innerText = currentUserProfile.email;
  document.getElementById("dash-profile-location").innerText = currentUserProfile.location;
  document.getElementById("dash-profile-extra").innerText = currentUserProfile.role === "learner" ? `Roll No: ${currentUserProfile.roll_no}` : "Teaching: Active";

  document.getElementById("reg-name").value = currentUserProfile.name;
  document.getElementById("reg-email").value = currentUserProfile.email;
  document.getElementById("reg-location").value = currentUserProfile.location;
  document.getElementById("reg-roll").value = currentUserProfile.roll_no;

  updateDashboardProgress(currentSkillKey);
}

// Handle Institution Submissions (Adds to mock database!)
function handleInstitutionSubmission(e) {
  e.preventDefault();
  
  const name = document.getElementById("submit-inst-name").value.trim();
  const skill = document.getElementById("submit-inst-skill").value.trim().toLowerCase();
  const type = document.getElementById("submit-inst-type").value;
  const location = document.getElementById("submit-inst-loc").value.trim();
  const fee = document.getElementById("submit-inst-fee").value.trim();
  const desc = document.getElementById("submit-inst-desc").value.trim();

  if (!name || !skill || !location) {
    alert("Please fill in the Institution Name, Target Skill, and Location!");
    return;
  }

  // Create new institution record
  const newInst = {
    id: `inst_${Date.now()}`,
    name: name,
    skill: skill,
    type: type,
    location: location,
    info: desc || "Professional training and instruction programs available.",
    fee: fee || "Flexible pricing"
  };

  MOCK_INSTITUTIONS.push(newInst);
  
  // Register skill to dropdown if not present
  const dirSelect = document.getElementById("dir-skill-select");
  let exists = false;
  for (let i = 0; i < dirSelect.options.length; i++) {
    if (dirSelect.options[i].value === skill) exists = true;
  }
  if (!exists) {
    const opt = document.createElement("option");
    opt.value = skill;
    opt.innerText = skill.charAt(0).toUpperCase() + skill.slice(1);
    dirSelect.appendChild(opt);
  }

  // Update lists and counts
  updateStatsCounters();
  renderInstitutions(currentSkillKey);
  
  alert("Your institution has been successfully submitted and integrated into the global directory map!");
  
  // Redirect to Directory
  document.getElementById("institution-form").reset();
  switchView("directory-view");
  tabBtns.forEach(b => {
    if (b.dataset.view === "directory-view") {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });
}

// Update live landing stats
function updateStatsCounters() {
  const distinctSkills = Object.keys(SKILL_DATABASE).length;
  const totalMentors = MOCK_MENTORS.length;
  const totalInsts = MOCK_INSTITUTIONS.length;

  const statSkills = document.getElementById("stat-skills-count");
  const statMentors = document.getElementById("stat-mentors-count");
  const statSchools = document.getElementById("stat-schools-count");

  if (statSkills) statSkills.innerText = distinctSkills + "+";
  if (statMentors) statMentors.innerText = totalMentors + "+";
  if (statSchools) statSchools.innerText = totalInsts + "+";
}

// PDF Exporter Logic
function openPdfModal() {
  const backdrop = document.getElementById("pdf-backdrop");
  const sheet = document.getElementById("pdf-sheet-content");
  const skill = SKILL_DATABASE[currentSkillKey];
  
  pdfFilename = `odyssey_${currentSkillKey.toLowerCase().replace(/[^a-z0-9]+/g, '_')}_blueprint.pdf`;
  
  const matchedMentors = MOCK_MENTORS.filter(m => m.skill === currentSkillKey).slice(0, 2);
  const matchedInst = MOCK_INSTITUTIONS.filter(i => i.skill === currentSkillKey).slice(0, 2);

  let html = `
    <div class="pdf-logo">ODYSSEY <span>GOAL MAP</span></div>
    <div class="pdf-meta-info">
      <div><strong>Owner:</strong> ${currentUserProfile.name} (${currentUserProfile.role})</div>
      <div><strong>Date:</strong> ${new Date().toLocaleDateString()}</div>
      <div><strong>Status:</strong> Draft Blueprint</div>
    </div>
    
    <div class="pdf-title">${currentSkillKey.toUpperCase()} BLUEPRINT</div>
    <div class="pdf-subtitle">A highly customized learning roadmap created by the Odyssey AI Goal Engine. Contains step-by-step milestones, verified offline/online academic centers, and matched technical experts.</div>
    
    <div class="pdf-section-title">Step-by-Step Learning Timeline</div>
  `;

  skill.roadmap.forEach(step => {
    html += `
      <div class="pdf-step-card">
        <div class="pdf-step-title">Step ${step.num}: ${step.title} (${step.duration})</div>
        <div class="pdf-step-desc">${step.desc}</div>
        <div style="font-size:10px; margin-top:6px; color:#555555;">
          <strong>Target Outcomes:</strong> ${step.tasks.join(" | ")}
        </div>
      </div>
    `;
  });

  html += `<div class="pdf-section-title">Matched Mentors & Experts</div><div class="pdf-matched-grid">`;
  matchedMentors.forEach(m => {
    html += `
      <div class="pdf-matched-item">
        <div class="pdf-matched-name">${m.name}</div>
        <div class="pdf-matched-detail">Location: ${m.location} | Rate: ${m.rate} | Dist: ${m.distance}</div>
      </div>
    `;
  });
  html += `</div>`;

  html += `<div class="pdf-section-title">Recommended Institutions (Online & Offline)</div><div class="pdf-matched-grid">`;
  matchedInst.forEach(i => {
    html += `
      <div class="pdf-matched-item">
        <div class="pdf-matched-name">${i.name} [${i.type.toUpperCase()}]</div>
        <div class="pdf-matched-detail">Location: ${i.location} | Tuition: ${i.fee}</div>
      </div>
    `;
  });
  html += `</div>`;

  html += `
    <div class="pdf-footer">
      Odyssey Platform · One Engine. Every Goal. · https://odyssey.com/verify
    </div>
  `;

  sheet.innerHTML = html;
  backdrop.classList.add("show");
}

function closePdfModal() {
  document.getElementById("pdf-backdrop").classList.remove("show");
}

function downloadPdf() {
  const element = document.getElementById("pdf-sheet-content");
  if (!element) return;

  // Add export mode class to strip decorative CSS
  element.classList.add("pdf-export-mode");

  // Strip problematic inline styles from SVGs (padding, box-shadow cause clipping)
  const svgs = element.querySelectorAll("svg");
  const savedStyles = [];
  svgs.forEach((svg) => {
    savedStyles.push(svg.getAttribute("style") || "");
    // Remove padding and box-shadow from inline styles; keep the rest
    let s = svg.getAttribute("style") || "";
    s = s.replace(/padding\s*:\s*[^;]+;?/gi, "");
    s = s.replace(/box-shadow\s*:\s*[^;]+;?/gi, "");
    s = s.replace(/border-radius\s*:\s*[^;]+;?/gi, "border-radius:4px;");
    svg.setAttribute("style", s);
    svg.setAttribute("overflow", "visible");
  });

  const opt = {
    margin:       [8, 8, 8, 8],
    filename:     pdfFilename,
    image:        { type: 'jpeg', quality: 0.95 },
    html2canvas:  { scale: 2, useCORS: true, logging: false, windowWidth: 800 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak:    { mode: ['avoid-all', 'css'], avoid: '.pdf-section-title' }
  };

  const downloadBtn = document.querySelector(".pdf-header-bar button.primary");
  const originalText = downloadBtn ? downloadBtn.innerText : "Download PDF";
  if (downloadBtn) {
    downloadBtn.innerText = "Generating...";
    downloadBtn.disabled = true;
  }

  html2pdf().set(opt).from(element).save().then(() => {
    // Restore everything
    element.classList.remove("pdf-export-mode");
    svgs.forEach((svg, i) => {
      svg.setAttribute("style", savedStyles[i]);
      svg.removeAttribute("overflow");
    });
    if (downloadBtn) {
      downloadBtn.innerText = originalText;
      downloadBtn.disabled = false;
    }
  }).catch(err => {
    console.error("PDF generation failed:", err);
    element.classList.remove("pdf-export-mode");
    svgs.forEach((svg, i) => {
      svg.setAttribute("style", savedStyles[i]);
      svg.removeAttribute("overflow");
    });
    if (downloadBtn) {
      downloadBtn.innerText = originalText;
      downloadBtn.disabled = false;
    }
    alert("Failed to generate PDF. Please try again.");
  });
}

// Download local mockup resources
function triggerResourceDownload(resourceName) {
  alert(`Successfully generated and downloaded PDF draft template: "${resourceName}" to your local machine!`);
}

// Interactive Architecture Click Highlight Helper
function selectArchStep(stepNum, el) {
  const cards = document.querySelectorAll(".arch-step-card");
  cards.forEach(c => c.classList.remove("active"));
  el.classList.add("active");

  const icon = el.dataset.icon;
  const title = el.dataset.title;
  const desc = el.dataset.desc;
  
  document.getElementById("arch-detail-icon").innerText = icon;
  document.getElementById("arch-detail-title").innerText = title;
  document.getElementById("arch-detail-desc").innerText = desc;

  let features = [];
  if (stepNum === 0) {
    features = [
      { t: "Goal Intent Parsing", d: "User types natural language; engine parses subject, budget, time, and locations." },
      { t: "Interactive Prompts", d: "Dynamic AI conversation requests missing attributes (like experience level)." }
    ];
  } else if (stepNum === 1) {
    features = [
      { t: "Personalization Loop", d: "Matches template variables with user constraints to build path." },
      { t: "Timeline Optimizer", d: "Adjusts durations and structures dynamically depending on goals." }
    ];
  } else if (stepNum === 2) {
    features = [
      { t: "Vast Templates library", d: "Predefined standard paths for Real Estate, Music, Career, Coding, Vocations." },
      { t: "Dynamic Enrichment", d: "Merges standard checklists with local resources and mentors." }
    ];
  } else if (stepNum === 3) {
    features = [
      { t: "Task Checklist", d: "Interactive checkable tasks that trace user progress in real-time." },
      { t: "Blocker Alert", d: "Agentic monitoring checks if a user is stuck and schedules helpers." }
    ];
  } else if (stepNum === 4) {
    features = [
      { t: "Expert Directory", d: "Shows online and offline mentors in the area holding matching skills." },
      { t: "Schools & Academies", d: "Online directories combined with offline physical map addresses." }
    ];
  }

  const container = document.getElementById("arch-features-grid");
  if (container) {
    container.innerHTML = features.map(f => `
      <div class="arch-feat-item">
        <div class="arch-feat-title"><span>✦</span> ${f.t}</div>
        <div class="arch-feat-desc">${f.d}</div>
      </div>
    `).join("");
  }
}

// Dynamically trigger custom roadmap from homepage card clicks
function executeSelectedCourse(skillKey) {
  const engineInput = document.getElementById("engine-input");
  if (engineInput) {
    const displayVal = skillKey.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    engineInput.value = displayVal;
  }
  generateJourney(skillKey);
}

// Sidebar Drawer Open/Close Handler
function toggleSidebar(isOpen) {
  const drawer = document.getElementById("sidebar-drawer");
  const overlay = document.getElementById("drawer-overlay");
  
  if (drawer && overlay) {
    if (isOpen) {
      drawer.classList.add("open");
      overlay.classList.add("show");
    } else {
      drawer.classList.remove("open");
      overlay.classList.remove("show");
    }
  }
}

// Sidebar Drawer Link Selection Handler
function handleDrawerClick(btn) {
  const targetView = btn.dataset.view;
  switchView(targetView);
  
  // Update active state inside drawer items
  const drawerItems = document.querySelectorAll(".drawer-item");
  drawerItems.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  
  // Clear header tab active states
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(b => b.classList.remove("active"));
  
  // Render specific views dynamically
  if (targetView === "peers-view") {
    renderPeers(currentSkillKey);
} else if (targetView === "progress-view") {
    renderProgressPage(currentSkillKey);
  }
  
  // Automatically close sidebar drawer
  toggleSidebar(false);
}

// Open Operational User Manual in Print Preview Modal
function openManualPdf() {
  const backdrop = document.getElementById("pdf-backdrop");
  const sheet = document.getElementById("pdf-sheet-content");
  if (!backdrop || !sheet) return;
  
  pdfFilename = "odyssey_system_manual.pdf";
  
  // Close the sidebar menu drawer first
  toggleSidebar(false);
  
  sheet.innerHTML = `
    <!-- PAGE 1 OF MANUAL -->
    <div class="pdf-page">
      <div class="pdf-logo">ODYSSEY <span>SYSTEM MANUAL · PAGE 1</span></div>
      <div class="pdf-meta-info">
        <div><strong>Document:</strong> Platform Architecture Blueprint</div>
        <div><strong>Platform:</strong> Odyssey Goal Engine v1.2</div>
        <div><strong>Status:</strong> Approved Specification</div>
      </div>
      
      <div class="pdf-title" style="margin-top:10px; font-size: 24px; font-weight: 800; font-family:'Syne', sans-serif;">1. Core Architecture & Flowchart</div>
      <p class="pdf-subtitle" style="font-size:11px; margin-bottom: 15px; color:#57534E;">This section details the navigation drawer layout, centered logomark, and intent-guided journey builder, mapped across our operational flowchart.</p>
      
      <!-- Flowchart SVG (Fixed Text inside Boxes) -->
      <div style="font-weight:bold; font-size:10px; margin-bottom:6px; font-family:'Syne', sans-serif;">System Operation Flowchart</div>
      <svg viewBox="0 0 540 180" style="width:100%; border:2px solid #1C1917; border-radius:12px; background:#F7F5F0; padding:10px; margin-bottom:20px; box-shadow:3px 3px 0px #1C1917;">
        <!-- Row 1 Nodes -->
        <rect x="10" y="20" width="110" height="42" rx="6" fill="#FFF" stroke="#1C1917" stroke-width="1.5" />
        <text x="65" y="37" font-size="7.5" font-family="'Syne', sans-serif" font-weight="800" text-anchor="middle">
          <tspan x="65" dy="0">1. GOAL</tspan>
          <tspan x="65" dy="10">INPUT</tspan>
        </text>
        
        <rect x="140" y="20" width="110" height="42" rx="6" fill="#FFF" stroke="#1C1917" stroke-width="1.5" />
        <text x="195" y="37" font-size="7.5" font-family="'Syne', sans-serif" font-weight="800" text-anchor="middle">
          <tspan x="195" dy="0">2. INTENT</tspan>
          <tspan x="195" dy="10">PARSE</tspan>
        </text>

        <rect x="270" y="20" width="110" height="42" rx="6" fill="#FFF" stroke="#1C1917" stroke-width="1.5" />
        <text x="325" y="37" font-size="7.5" font-family="'Syne', sans-serif" font-weight="800" text-anchor="middle">
          <tspan x="325" dy="0">3. ROADMAP</tspan>
          <tspan x="325" dy="10">GENERATION</tspan>
        </text>

        <rect x="400" y="20" width="125" height="42" rx="6" fill="#FFF" stroke="#1C1917" stroke-width="1.5" />
        <text x="462" y="37" font-size="7.5" font-family="'Syne', sans-serif" font-weight="800" text-anchor="middle">
          <tspan x="462" dy="0">4. HYBRID</tspan>
          <tspan x="462" dy="10">MATCHMAKING</tspan>
        </text>

        <!-- Row 2 Nodes -->
        <rect x="10" y="110" width="110" height="42" rx="6" fill="#FFF" stroke="#1C1917" stroke-width="1.5" />
        <text x="65" y="127" font-size="7.5" font-family="'Syne', sans-serif" font-weight="800" text-anchor="middle">
          <tspan x="65" dy="0">5. CHECKLIST</tspan>
          <tspan x="65" dy="10">PERSISTENCE</tspan>
        </text>

        <rect x="140" y="110" width="110" height="42" rx="6" fill="#FFF" stroke="#1C1917" stroke-width="1.5" />
        <text x="195" y="127" font-size="7.5" font-family="'Syne', sans-serif" font-weight="800" text-anchor="middle">
          <tspan x="195" dy="0">6. PHASE</tspan>
          <tspan x="195" dy="10">LOCKING</tspan>
        </text>

        <rect x="270" y="110" width="110" height="42" rx="6" fill="#FFF" stroke="#1C1917" stroke-width="1.5" />
        <text x="325" y="127" font-size="7.5" font-family="'Syne', sans-serif" font-weight="800" text-anchor="middle">
          <tspan x="325" dy="0">7. BLOCKER</tspan>
          <tspan x="325" dy="10">NUDGES</tspan>
        </text>

        <rect x="400" y="110" width="125" height="42" rx="6" fill="#FFF" stroke="#1C1917" stroke-width="1.5" />
        <text x="462" y="127" font-size="7.5" font-family="'Syne', sans-serif" font-weight="800" text-anchor="middle">
          <tspan x="462" dy="0">8. PEERS &</tspan>
          <tspan x="462" dy="10">CHAT SYSTEM</tspan>
        </text>

        <!-- Arrows -->
        <path d="M 120 41 L 140 41" stroke="#EA580C" stroke-width="1.5" fill="none" />
        <polygon points="140,41 134,37.5 134,44.5" fill="#EA580C" />
        
        <path d="M 250 41 L 270 41" stroke="#EA580C" stroke-width="1.5" fill="none" />
        <polygon points="270,41 264,37.5 264,44.5" fill="#EA580C" />

        <path d="M 380 41 L 400 41" stroke="#EA580C" stroke-width="1.5" fill="none" />
        <polygon points="400,41 394,37.5 394,44.5" fill="#EA580C" />

        <!-- Down and Loop Arrow -->
        <path d="M 525 41 L 533 41 L 533 85 L 5 85 L 5 131 L 10 131" stroke="#1C1917" stroke-width="1.5" stroke-dasharray="3 3" fill="none" />
        <polygon points="10,131 4,127.5 4,134.5" fill="#1C1917" />

        <path d="M 120 131 L 140 131" stroke="#EA580C" stroke-width="1.5" fill="none" />
        <polygon points="140,131 134,127.5 134,134.5" fill="#EA580C" />

        <path d="M 250 131 L 270 131" stroke="#EA580C" stroke-width="1.5" fill="none" />
        <polygon points="270,131 264,127.5 264,134.5" fill="#EA580C" />

        <path d="M 380 131 L 400 131" stroke="#EA580C" stroke-width="1.5" fill="none" />
        <polygon points="400,131 394,127.5 394,134.5" fill="#EA580C" />
      </svg>

      <div class="pdf-section-title">2. Centered Header & Sidebar Drawer Layout</div>
      <p style="font-size:11px; margin-bottom:12px; line-height:1.4;">The navigation bar positions the logomark <strong>ODYSSEY</strong> precisely in the center, flanked by the hamburger drawer toggle on the left and online resources/profile widgets on the right. The left toggle slides out a 300px side panel mapping the platform's core functional views.</p>
      
      <!-- Vector header mockup -->
      <svg viewBox="0 0 540 80" style="width:100%; border:2px solid #1C1917; border-radius:10px; background:#FFFFFF; margin-bottom:15px; box-shadow:3px 3px 0px #1C1917;">
        <rect x="0" y="0" width="540" height="30" fill="#F7F5F0" stroke="#1C1917" stroke-width="1.5" />
        <!-- Left Hamburger -->
        <rect x="10" y="7" width="16" height="16" rx="3" fill="none" stroke="#1C1917" stroke-width="1" />
        <line x1="13" y1="12" x2="23" y2="12" stroke="#1C1917" stroke-width="1" />
        <line x1="13" y1="15" x2="23" y2="15" stroke="#1C1917" stroke-width="1" />
        <line x1="13" y1="18" x2="23" y2="18" stroke="#1C1917" stroke-width="1" />

        <!-- Center Logo -->
        <text x="270" y="20" font-size="11" font-family="'Syne', sans-serif" font-weight="900" letter-spacing="2px" text-anchor="middle" fill="#1C1917">ODYSSEY</text>

        <!-- Right buttons -->
        <text x="440" y="19" font-size="7" font-family="'Outfit', sans-serif" font-weight="bold" fill="#1C1917">Online Resources</text>
        <rect x="500" y="7" width="30" height="16" rx="4" fill="#3B82F6" stroke="#1C1917" stroke-width="1" />
        <text x="515" y="17" font-size="6" font-family="'Outfit', sans-serif" font-weight="bold" text-anchor="middle" fill="#FFF">Login</text>
        
        <!-- Sidebar drawer projection -->
        <line x1="120" y1="30" x2="120" y2="80" stroke="#1C1917" stroke-width="1.5" stroke-dasharray="2 2" />
        <rect x="0" y="30" width="120" height="50" fill="#FAF9F6" stroke="#1C1917" stroke-width="1.5" />
        <text x="10" y="42" font-size="6" font-family="'Syne', sans-serif" font-weight="800">MENU</text>
        <text x="15" y="52" font-size="5" font-family="'Outfit', sans-serif" fill="#57534E">Offline Resources</text>
        <text x="15" y="62" font-size="5" font-family="'Outfit', sans-serif" fill="#57534E">Courses</text>
        <text x="15" y="72" font-size="5" font-family="'Outfit', sans-serif" fill="#57534E">My Progress</text>
      </svg>
      
      <div class="pdf-section-title">3. Intent-Guided Goal Explorer Page</div>
      <p style="font-size:11px; margin-bottom:12px; line-height:1.4;">Goal Explorer handles unstructured natural language goals (e.g. guitar, driving, code) to extract target parameters, generating customizable milestones and matches.</p>
      
      <!-- Goal Explorer mockup -->
      <svg viewBox="0 0 540 100" style="width:100%; border:2px solid #1C1917; border-radius:12px; background:#FDBA74; margin-bottom:10px; box-shadow:3px 3px 0px #1C1917;">
        <text x="270" y="24" font-size="11" font-family="'Syne', sans-serif" font-weight="800" text-anchor="middle" fill="#1C1917">Map Your Path to Any Skill or Goal</text>
        <rect x="80" y="42" width="380" height="26" rx="13" fill="#FFF" stroke="#1C1917" stroke-width="1.5" />
        <text x="95" y="58" font-size="8" fill="#57534E">Try typing 'classical guitar' or 'web development'...</text>
        <rect x="395" y="45" width="60" height="20" rx="10" fill="#EA580C" stroke="#1C1917" stroke-width="1.2" />
        <text x="425" y="58" font-size="7" font-family="'Syne', sans-serif" font-weight="bold" text-anchor="middle" fill="#FFF">EXECUTE</text>
        <!-- Suggestions -->
        <rect x="190" y="78" width="75" height="15" rx="7" fill="#FFF" stroke="#1C1917" stroke-width="1" />
        <text x="227.5" y="88" font-size="6" font-family="'Outfit', sans-serif" text-anchor="middle">🎸 Classical Guitar</text>
        <rect x="275" y="78" width="75" height="15" rx="7" fill="#FFF" stroke="#1C1917" stroke-width="1" />
        <text x="312.5" y="88" font-size="6" font-family="'Outfit', sans-serif" text-anchor="middle">💻 Web Development</text>
      </svg>
      <div style="font-size:9px; text-align:right; color:#888888; margin-top:20px;">Odyssey Platform User Manual · Page 1 of 3</div>
    </div>

    <!-- PAGE 2 OF MANUAL -->
    <div class="pdf-page">
      <div class="pdf-logo">ODYSSEY <span>SYSTEM MANUAL · PAGE 2</span></div>
      <div class="pdf-meta-info">
        <div><strong>Document:</strong> Technical Engine Specifications</div>
        <div><strong>Platform:</strong> Odyssey Goal Engine v1.2</div>
        <div><strong>Status:</strong> Approved Specification</div>
      </div>
      
      <div class="pdf-title" style="margin-top:10px; font-size: 24px; font-weight: 800; font-family:'Syne', sans-serif;">2. Execution Engine & Algorithmic Heuristics</div>
      <p class="pdf-subtitle" style="font-size:11px; margin-bottom: 15px; color:#57534E;">Details of Odyssey's locking state checklists, study buddy matching levels, and dynamic mentor coordinates matcher algorithms.</p>
      
      <div class="pdf-section-title">4. Gamified Progress Locking (My Progress Page)</div>
      <p style="font-size:11px; margin-bottom:12px; line-height:1.4;">Checks are saved to localStorage and mapped to the active plan. To enforce sequential learning, Phase N+1 checklist items are strictly disabled and overlaid with a padlock graphic. The overlay slides out and unlocks Phase N+1 only when all tasks in Phase N are 100% completed.</p>
      
      <!-- Lock progress mockup -->
      <svg viewBox="0 0 540 80" style="width:100%; border:2px solid #1C1917; border-radius:12px; background:#FFFFFF; margin-bottom:20px; box-shadow:3px 3px 0px #1C1917;">
        <rect x="15" y="10" width="240" height="60" rx="8" fill="#FFF" stroke="#1C1917" stroke-width="1.5" />
        <text x="25" y="28" font-size="9" font-family="'Syne', sans-serif" font-weight="bold" fill="#059669">PHASE 1: FOUNDATIONS (COMPLETE)</text>
        <circle cx="30" cy="48" r="5" fill="#059669" stroke="#1C1917" stroke-width="1" />
        <text x="42" y="51" font-size="8" font-family="'Outfit', sans-serif">HTML & CSS markup structures</text>
 
        <rect x="285" y="10" width="240" height="60" rx="8" fill="#F3F4F6" stroke="#A8A29E" stroke-width="1.5" stroke-dasharray="3 3" />
        <text x="295" y="28" font-size="9" font-family="'Syne', sans-serif" font-weight="bold" fill="#78716C">PHASE 2: JAVASCRIPT (LOCKED)</text>
        <!-- Lock overlay projection -->
        <rect x="360" y="32" width="90" height="22" rx="11" fill="#FFF" stroke="#1C1917" stroke-width="1.5" />
        <text x="405" y="46" font-size="8" font-family="'Syne', sans-serif" font-weight="bold" text-anchor="middle">🔒 LOCKED</text>
      </svg>

      <div class="pdf-section-title">5. Study Peer Network (Connect Peers Page)</div>
      <p style="font-size:11px; margin-bottom:12px; line-height:1.4;">The Peer Finder lists other students following the same plan. Identities are color-coded in front of names to signify expertise levels: [Beginner] in yellow, [Intermediate] in blue, and [Pro] in green.</p>
      
      <!-- Peer connector card mockup -->
      <svg viewBox="0 0 540 60" style="width:100%; border:2px solid #1C1917; border-radius:12px; background:#F7F5F0; margin-bottom:20px; box-shadow:3px 3px 0px #1C1917;">
        <rect x="15" y="10" width="510" height="40" rx="8" fill="#FFF" stroke="#1C1917" stroke-width="1.5" />
        <circle cx="35" cy="30" r="12" fill="#FEF3C7" stroke="#1C1917" stroke-width="1" />
        <text x="35" y="33" font-size="8" font-family="'Syne', sans-serif" font-weight="bold" text-anchor="middle" fill="#D97706">AP</text>
        <rect x="60" y="18" width="45" height="11" rx="3" fill="#FEF3C7" stroke="#1C1917" stroke-width="0.8" />
        <text x="82.5" y="26" font-size="6" font-family="'Syne', sans-serif" font-weight="bold" text-anchor="middle" fill="#D97706">BEGINNER</text>
        <text x="115" y="27" font-size="9" font-family="'Outfit', sans-serif" font-weight="bold">Amit Patel</text>
        <rect x="440" y="15" width="70" height="20" rx="6" fill="#EA580C" stroke="#1C1917" stroke-width="1" />
        <text x="475" y="27" font-size="7" font-family="'Syne', sans-serif" font-weight="bold" text-anchor="middle" fill="#FFF">CONNECT</text>
      </svg>

      <div class="pdf-section-title">6. Blocker Check-in & Chat Functionality</div>
      <p style="font-size:11px; margin-bottom:12px; line-height:1.4;">When learning checkpoints stall, an agent loop flags the step state as blocked and inserts a check-in banner. Clicking "Nudge Chat" opens a real-time overlay dialogue panel to schedule sessions with qualified mentors or arrange offline lessons.</p>

      <!-- Chat overlay mockup -->
      <svg viewBox="0 0 540 80" style="width:100%; border:2px solid #1C1917; border-radius:12px; background:#FFFFFF; margin-bottom:20px; box-shadow:3px 3px 0px #1C1917;">
        <rect x="0" y="0" width="540" height="20" fill="#F7F5F0" stroke="#1C1917" stroke-width="1.2" />
        <text x="15" y="13" font-size="8" font-family="'Outfit', sans-serif" font-weight="bold">Chat with Rohan Sharma (Mentor)</text>
        <rect x="15" y="28" width="220" height="18" rx="6" fill="#F3F4F6" stroke="#1C1917" stroke-width="0.8" />
        <text x="25" y="40" font-size="7">Hello! How can I assist you with your current step?</text>
        <rect x="305" y="52" width="220" height="18" rx="6" fill="#EA580C" stroke="#1C1917" stroke-width="0.8" />
        <text x="315" y="64" font-size="7" fill="#FFF">I am having trouble with advanced CSS grid layouts.</text>
      </svg>

      <div class="pdf-section-title">7. Geolocation Match Heuristics & Locking Algorithms</div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; font-size:9px; line-height:1.4; color:#222;">
        <div>
          <strong>A. Proximity Match Heuristic</strong><br>
          For any user coordinates $U(x, y)$ and institution/mentor coordinates $M_i(x_i, y_i)$, the distance matrix is calculated via:
          $$d(U, M_i) = \sqrt{(x - x_i)^2 + (y - y_i)^2}$$
          Items are dynamically filtered inside radius $R$:
          $$\text{Matches} = \{ M_i \mid d(U, M_i) \le R \}$$
          Sorting places the closest online/offline resources first.
        </div>
        <div>
          <strong>B. Phase State Locking Heuristic</strong><br>
          Let checklist tasks in Phase $N$ be represented by set $T_N$. The lock state $L_N \in \{0, 1\}$ is governed by:
          $$L_1 = 0 \text{ (Always Unlocked)}$$
          $$L_N = \begin{cases} 0 & \text{if } \forall t \in T_{N-1}, t.\text{checked} = \text{true} \\ 1 & \text{otherwise} \end{cases}$$
          Upon unlock, inputs enable and local storage syncs.
        </div>
      </div>
      <div style="font-size:9px; text-align:right; color:#888888; margin-top:20px;">Odyssey Platform User Manual · Page 2 of 3</div>
    </div>

    <!-- PAGE 3 OF MANUAL -->
    <div class="pdf-page">
      <div class="pdf-logo">ODYSSEY <span>SYSTEM MANUAL · PAGE 3</span></div>
      <div class="pdf-meta-info">
        <div><strong>Document:</strong> Mission Motives & Future Horizons</div>
        <div><strong>Platform:</strong> Odyssey Goal Engine v1.2</div>
        <div><strong>Status:</strong> Approved Specification</div>
      </div>
      
      <div class="pdf-title" style="margin-top:10px; font-size: 24px; font-weight: 800; font-family:'Syne', sans-serif;">3. Motive, Portals & Future Scope</div>
      <p class="pdf-subtitle" style="font-size:11px; margin-bottom: 15px; color:#57534E;">Details on submitting academies, downloading materials, saving profiles, our platform core motive, and future horizons.</p>
      
      <div style="display:grid; grid-template-columns:1fr 1.2fr; gap:20px; margin-bottom:15px;">
        <!-- Column 1: Mockups -->
        <div>
          <div class="pdf-section-title" style="margin-top:0;">8. Submit Institution</div>
          <!-- Submit Form mock -->
          <svg viewBox="0 0 220 70" style="width:100%; border:1.5px solid #1C1917; border-radius:8px; background:#FAF9F6; padding:6px; box-shadow:2px 2px 0px #1C1917;">
            <rect x="5" y="5" width="210" height="60" rx="4" fill="#F7F5F0" stroke="#1C1917" stroke-width="0.8" />
            <text x="12" y="17" font-size="7" font-family="'Syne', sans-serif" font-weight="bold">Submit Academy Form</text>
            <rect x="12" y="24" width="90" height="11" rx="2" fill="#FFF" stroke="#1C1917" stroke-width="0.5" />
            <text x="16" y="32" font-size="5" fill="#A8A29E">Academy Name</text>
            <rect x="110" y="24" width="90" height="11" rx="2" fill="#FFF" stroke="#1C1917" stroke-width="0.5" />
            <text x="114" y="32" font-size="5" fill="#A8A29E">Skill Category</text>
            <rect x="12" y="42" width="188" height="14" rx="4" fill="#EA580C" stroke="#1C1917" stroke-width="0.8" />
            <text x="106" y="51" font-size="6" font-family="'Syne', sans-serif" font-weight="bold" fill="#FFF" text-anchor="middle">REGISTER INSTITUTION</text>
          </svg>

          <div class="pdf-section-title">9. Resource downloads</div>
          <!-- Download mockup -->
          <svg viewBox="0 0 220 60" style="width:100%; border:1.5px solid #1C1917; border-radius:8px; background:#FFFFFF; padding:6px; box-shadow:2px 2px 0px #1C1917;">
            <rect x="10" y="10" width="90" height="40" rx="4" fill="#F7F5F0" stroke="#1C1917" stroke-width="1" />
            <text x="15" y="22" font-size="6" font-family="'Syne', sans-serif" font-weight="bold" fill="#EA580C">SYLLABUS PDF</text>
            <text x="15" y="32" font-size="5" font-weight="bold">Web Dev Blueprint</text>
            <rect x="15" y="37" width="80" height="9" rx="2" fill="#1C1917" />
            <text x="55" y="44" font-size="4" fill="#FFF" text-anchor="middle">Download PDF</text>

            <rect x="120" y="10" width="90" height="40" rx="4" fill="#F7F5F0" stroke="#1C1917" stroke-width="1" />
            <text x="125" y="22" font-size="6" font-family="'Syne', sans-serif" font-weight="bold" fill="#EA580C">SCOREBOOK PDF</text>
            <text x="125" y="32" font-size="5" font-weight="bold">Guitar Scale Sheet</text>
            <rect x="125" y="37" width="80" height="9" rx="2" fill="#1C1917" />
            <text x="165" y="44" font-size="4" fill="#FFF" text-anchor="middle">Download PDF</text>
          </svg>
          
          <div class="pdf-section-title">10. User Dashboard</div>
          <!-- Dashboard mockup -->
          <svg viewBox="0 0 220 50" style="width:100%; border:2px solid #1C1917; border-radius:8px; background:#D1FAE5; padding:5px; box-shadow:2px 2px 0px #1C1917;">
            <rect x="5" y="5" width="210" height="40" rx="4" fill="#FFF" stroke="#1C1917" stroke-width="1" />
            <text x="15" y="17" font-size="7" font-weight="bold">Guest User (Learner)</text>
            <rect x="15" y="23" width="180" height="6" rx="3" fill="#F3F4F6" stroke="#1C1917" stroke-width="0.5" />
            <rect x="15" y="23" width="90" height="6" rx="3" fill="#EA580C" />
            <text x="15" y="38" font-size="6" font-weight="bold" fill="#EA580C">Progress: 50% Completed</text>
          </svg>
        </div>

        <!-- Column 2: Motives & Scopes -->
        <div style="font-size:11px; line-height:1.4;">
          <div class="pdf-section-title" style="margin-top:0;">11. Core Motive & "Dabai Hui" Mission</div>
          <p style="color:#57534E; margin-bottom:10px;">
            Odyssey was conceptualized to address fragmentation in self-guided learning. While internet resources provide the syllabus ("Roadmaps"), they fail to deliver real-world validation, structures, and hands-on guidance.
          </p>
          <p style="color:#57534E; margin-bottom:10px;">
            Our <strong>"Dabai Hui" motive</strong> combines structured online timelines with physical, localized educational support. Students acquire a tailored learning plan, then instantly match with local academies and certified experts in their immediate sectors to verify their skills face-to-face. This prevents learners from getting discouraged, keeps them accountable, and supports local community instruction centers.
          </p>
          
          <div class="pdf-section-title">12. Future Horizon & Expansion Scopes</div>
          <p style="color:#57534E; margin-bottom:10px;">
            <strong>A. Dynamic Multi-Agent Check-Ins:</strong> Integrating secondary agents that monitor active tasks. By analyzing the time elapsed since a task checkbox was rendered, the agent predicts when a student is stuck and prompts specialized local mentors to open a chat.
          </p>
          <p style="color:#57534E; margin-bottom:10px;">
            <strong>B. Blockchain-Backed Ledgers:</strong> Transforming the checklist milestone completions into decentralized micro-credentials, allowing student portfolios to be verified cryptographically by partner institutions.
          </p>
          <p style="color:#57534E;">
            <strong>C. Cooperative VR Workshops:</strong> Launching virtual reality spaces inside our chat functionality, enabling mentors to teach physical trades or musical techniques remotely with real-time feedback.
          </p>
        </div>
      </div>
      
      <div class="pdf-footer" style="margin-top: 30px; border-top:1px solid #1C1917; padding-top:10px; font-size:9px; text-align:center; color:#57534E;">
        Odyssey Platform · System Documentation · Page 3 of 3
      </div>
    </div>
  `;
  
  backdrop.classList.add("show");
}
