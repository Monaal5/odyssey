# Odyssey — Universal Goal & Skill Execution Platform

Odyssey is an interactive single-page application built on the **"One Engine, Every Goal"** architecture. It processes user goals, dynamically generates personalized step-by-step roadmaps, matches local/online mentors holding those skills, identifies offline/online academies in the area, enables user profile registration, supports live chat simulations, and allows exporting/printing the custom roadmap blueprint.

---

## 🚀 Key Features

1. **AI Goal Engine Search**: Type any skill (e.g., *"classical guitar"*, *"web development"*, *"professional driving"*, or any custom query like *"learn photography"*). The app classifies the intent and instantly renders a customized learning timeline.
2. **Interactive Architecture Analyzer**: A visual explorer demonstrating the unified processor layers, RLS policies, template layers, and connection loops.
3. **Connection Layer (Marketplace)**: Shows matched mentors with active online/offline status, pricing, and distance metrics.
4. **Institutions Directory**: Displays online academies and nearby offline academies, complete with tuition details and coordinates.
5. **PDF Roadmap Exporter**: A clean, print-ready modal simulating a downloadable roadmap blueprint containing matched schools and mentors.
6. **Chat Simulation**: Start a live chat dialogue with matched mentors to discuss offline classes or online meet sessions.
7. **Role-Based Profiles**: Register as a *Learner* or *Expert/Mentor*. Seamlessly switches dashboards and header badges.

---

## 📁 Project Structure

```
odyssey-platform/
├── index.html            # Main markup and SPA structure
├── assets/
│   ├── css/
│   │   └── style.css     # Premium dark mode and glassmorphism styling
│   └── js/
│       └── app.js        # Intent classification, state, and UI binding logic
└── README.md             # This document
```

---

## 💻 How to Run

Since the application is a self-contained single-page app utilizing vanilla technologies, you can run it instantly:

1. Double-click `index.html` to open it directly in any browser.
2. Alternatively, run a local development server using Python:
   ```bash
   python -m http.server 8000
   ```
   and navigate to `http://localhost:8000`.
