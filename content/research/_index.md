---
title: "Current Thesis Work and Projects"
date: 2024-09-01
description: "Overview of my thesis work and research projects at Colorado School of Mines and beyond."
---

<!-- DATA-DRIVEN CPS LAB -->
<details class="work-details" open style="margin-top: 20px;">
  <summary class="work-summary">
    <span style="font-style: italic;">DATA-DRIVEN CPS LAB, Research Assistant</span> | Golden, CO | Aug 2023 – Present 
    <a href="https://datadrivencps.github.io/website/" target="_blank" class="work-link">
      <i class="fas fa-external-link-alt"></i>
    </a>
  </summary>
  <div>
    <p><i class="fas fa-user-tie"></i> <strong>Role:</strong> Research Assistant</p>
    <ul>
      <li>Working under <a href="https://gtf.fyi/" style="color: #007acc; text-decoration: none;">Dr. Gabe Fierro</a>, focusing on SHACL validation and inference in RDF graphs.</li>
      <li>Developing novel algebra for SHACL validation to streamline and optimize data manipulation.</li>
    </ul>
    <div id="abstract-container" style="border: 1px solid #007acc; border-radius: 10px; padding: 10px 15px; margin-top: 20px; cursor: pointer;" onclick="toggleAbstract()">
  <h4 id="abstract-title" style="margin: 0; font-size: 1rem; color: #007acc; font-weight: 400;">
    Thesis Abstract: Flow-SHACL (click to expand) <i id="toggle-icon" class="fas fa-chevron-down" style="font-size: 0.9rem;"></i>
  </h4>
</div>
    <div id="abstract-content" style="display: none; margin-top: 10px; padding-left: 10px;">
  <p><strong>Flow-SHACL</strong> addresses the limitations of existing SHACL validators. SHACL (Shapes Constraint Language) is a W3C standard used to validate RDF (Resource Description Framework) data against a set of conditions or "shapes."</p>

  <p>Traditional SHACL validators face performance challenges, especially as <a href="https://www.ontotext.com/knowledgehub/fundamentals/what-is-a-knowledge-graph/" target="_blank" style="color: #007acc; text-decoration: none;">knowledge graphs</a> scale to millions or billions of nodes. <strong>Flow-SHACL</strong> tackles this issue with a dataflow-based approach, constructing an optimized data structure that maps SHACL operations as a dataflow graph.</p>

  <p>This novel approach not only improves performance but also enables inference capabilities, providing deeper insights into the validation process and offering a more scalable solution for handling large knowledge graphs.</p>
</div>
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 20px;">
      <!-- First image (r1) -->
      <div style="flex: 1; min-width: 280px;">
        <div style="position: relative; padding-bottom: 66.66%; height: 0; overflow: hidden; border-radius: 12px; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);">
          <img src="/images/research/r1.jpg" alt="Poster Presentation at Mines" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
        </div>
        <p style="text-align: center; font-size: 0.9em; color: inherit; margin-top: 10px;">Presenting research poster at Mines</p>
      </div>
      <!-- Second image (r2) -->
      <div style="flex: 1; min-width: 280px;">
        <div style="position: relative; padding-bottom: 66.66%; height: 0; overflow: hidden; border-radius: 12px; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);">
          <img src="/images/research/r2.jpg" alt="Discussing research findings with peers" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
        </div>
        <p style="text-align: center; font-size: 0.9em; color: inherit; margin-top: 10px;">Discussing research findings with peers</p>
      </div>
    </div>
  </div>
</details>

<script>
  function toggleAbstract() {
    var content = document.getElementById('abstract-content');
    var icon = document.getElementById('toggle-icon');
    var title = document.getElementById('abstract-title');
    
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
      title.innerHTML = 'Thesis Abstract: Flow-SHACL (click to collapse) <i id="toggle-icon" class="fas fa-chevron-up" style="font-size: 0.9rem;"></i>';
    } else {
      content.style.display = "none";
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
      title.innerHTML = 'Thesis Abstract: Flow-SHACL (click to expand) <i id="toggle-icon" class="fas fa-chevron-down" style="font-size: 0.9rem;"></i>';
    }
  }
</script>

<!-- CSS for consistent image sizes and dropdown -->
<style>
  /* Image styling */
  .award-images {
      display: flex;
      gap: 20px;
      justify-content: space-between;
      flex-wrap: wrap;
  }

  /* Styling for images to maintain uniformity */
  .uniform-img {
      width: 45%;
      height: 250px;
      object-fit: cover;
      border-radius: 8px;
  }

  /* Responsive design for smaller screens */
  @media (max-width: 768px) {
      .uniform-img {
          width: 100%;
          height: auto;
      }
  }

  /* Smooth transition for dropdown content */
  #abstract-content {
    transition: max-height 0.3s ease;
  }
</style>



<!-- SLOAN PROJECT Frontend Developer -->
<details class="work-details" open>
  <summary class="work-summary">
    <span style="font-style: italic;">SLOAN PROJECT, Frontend Developer</span> | Leadville, CO | May 2024 – Present
  </summary>
  <div>
    <p>Developed a community energy dashboard for residents to monitor and compare energy usage with peers.</p>
    <h3><strong>Features I Am Proud Of:</strong></h3>
    <ul>
      <li><strong>Real-time comparison:</strong> Users can track their energy usage against neighbors.</li>
      <li><strong>Accessibility:</strong> Dark/light mode and language toggle for better UX.</li>
      <li><strong>Feedback system:</strong> Built a system where residents (non-admins) can submit feedback, and admins can view and manage it.</li>
      <li><strong>Admin control:</strong> Admins can refresh the webpage for non-admin users and add announcements.</li>
      <li><strong>Real-time notifications (In Progress):</strong> Building an Amazon SNS real-time texting system for announcements and updates.</li>
    </ul>
  </div>
  
  <div style="padding: 15px; border-radius: 10px; background-color: rgba(255, 255, 0, 0.2); margin-top: 20px; border-left: 5px solid #007acc; text-align: center;">
    <p style="margin: 0; font-size: 1em; color: var(--primary-color);">
      The frontend system webpage is <span style="color: red;">confidential</span>.
    </p>
  </div>
</details>



<!-- SLOAN PROJECT Backend Engineer -->
<details class="work-details">
  <summary class="work-summary">
    <span style="font-style: italic;">SLOAN PROJECT, Backend Engineer</span> | Leadville, CO | Jan 2023 – Present 
    <a href="https://www.nrel.gov/" target="_blank" class="work-link">
      <!-- <i class="fas fa-external-link-alt"></i> -->
    </a>
  </summary>
  <div>
    <p><i class="fas fa-user-tie"></i> <strong>Role:</strong> Backend Engineer</p>
    <ul>
      <li>Leading backend architecture for handling large data volumes and customizable data retrieval.</li>
      <li>Collaborating with engineers, professors, and scientists from <a href="https://www.nrel.gov/" style="color: #007acc; text-decoration: none;">NREL</a>.</li>
    </ul>
  </div>
</details>





<!-- RDF Toolkit -->
<details class="work-details">
  <summary class="work-summary">
    <span style="font-style: italic;">RDF Toolkit, Contributor</span> | Remote | June 2024
    <a href="https://ontology.brickschema.org/" target="_blank" class="work-link">
      <i class="fas fa-external-link-alt"></i>
    </a>
  </summary>
  <div>
    <p><i class="fas fa-user-tie"></i> <strong>Role:</strong> Contributor</p>
    <ul>
      <li>Built search functionality using Fuse.js for RDF Toolkit, a TypeScript library for RDF data manipulation.</li>
    </ul>
  </div>
</details>
