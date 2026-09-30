<p align="center"><a href="https://bernardofrancoe.com/"><img src="assets/readme-hero.svg" alt="Bernardo Franco portfolio overview" width="100%"></a></p>

Bernardo Franco's portfolio is a responsive creative website built to present audiovisual work through a strong visual hierarchy, project-led navigation and immersive media. The project focuses on translating a personal creative identity into a lightweight, production-ready web experience that works consistently across desktop and mobile.

The implementation intentionally stays close to the browser platform: semantic HTML, custom CSS and JavaScript are used to keep the experience fast, easy to maintain and fully controlled without introducing unnecessary framework overhead.

### Core stack
![HTML5](https://img.shields.io/badge/HTML5-252824?style=flat-square&logo=html5&logoColor=74CDA7) ![CSS](https://img.shields.io/badge/CSS-252824?style=flat-square&logo=css&logoColor=74CDA7) ![JavaScript](https://img.shields.io/badge/JavaScript-252824?style=flat-square&logo=javascript&logoColor=74CDA7) ![Vercel](https://img.shields.io/badge/Vercel-252824?style=flat-square&logo=vercel&logoColor=74CDA7)

### What this project demonstrates

- Responsive UI composition for image- and video-heavy content
- Custom interaction patterns without a frontend framework
- Reusable project presentation structure
- Visual hierarchy designed around creative work rather than application chrome
- Production deployment with a minimal runtime footprint

### Architecture
~~~mermaid
flowchart LR
    V[Visitor] --> HOME[Portfolio home]
    HOME --> PROJECTS[Project selection]
    PROJECTS --> PAGE[Project experience]
    PAGE --> MEDIA[Photography + video]
    PAGE --> UI[Custom interactions]
    UI --> RESPONSIVE[Responsive layout]
    HOME --> CONTACT[Contact / external links]
    HOME --> DEPLOY[Vercel deployment]
~~~

The site is intentionally structured as a small, maintainable frontend system. Shared styling and JavaScript behavior support the main portfolio and individual project experiences, while media assets remain separated from presentation logic. This keeps the project easy to extend with new work without changing the overall interaction model.

### Selected work
CENIZA · Amigos Vinilos · Super Rayo · Tu Plon Stereo · Podcast Introcrea

### Technical notes

The project was built around direct control of layout, typography and motion. Instead of relying on a component framework, the interface uses browser-native primitives and custom styling, which keeps bundle complexity low and makes the visual system easier to tune for a portfolio where presentation quality is the main requirement.

Responsive behavior is handled directly in CSS, while JavaScript is used for interaction and project-level behaviors. The result is a compact frontend architecture that prioritizes clarity, performance and visual consistency.

<details><summary><strong>Repository structure</strong></summary>

~~~text
index.html       Main portfolio
styles.css       Responsive UI and layout system
script.js        Main interactions
project.html     Reusable project experience
project.css      Project-level styling
project.js       Project interactions
assets/          Brand and project media
~~~
</details>

<p align="center"><strong>Production:</strong> https://bernardofrancoe.com/</p>
<p align="center">Design and development by <strong>Diego Franco</strong>.</p>
