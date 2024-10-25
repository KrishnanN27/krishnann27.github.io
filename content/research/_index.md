---
title: "Current Thesis Work and Projects"
date: 2024-09-01
description: "Overview of my thesis work and research projects at Colorado School of Mines and beyond."
---

<!-- DATA-DRIVEN CPS LAB -->
<details class="work-details" open style="margin-top: 20px;">
  <summary class="work-summary">
    <span style="font-style: italic;">DATA-DRIVEN CPS LAB, Research Assistant</span> | Golden, CO | Aug 2023 – Present 
    <a href="https://datadrivencps.github.io/website/" target="_blank" class="work-link" style="color: inherit; text-decoration: none;">
      <i class="fas fa-external-link-alt"></i>
    </a>
  </summary>
  <div class="work-content">
    <p><i class="fas fa-user-tie"></i> <strong>Role:</strong> Research Assistant</p>
    <ul>
      <li>Working under <a href="https://gtf.fyi/" style="color: #007acc; text-decoration: none;">Dr. Gabe Fierro</a>, focusing on SHACL validation and inference in RDF graphs.</li>
      <li>Developing novel algebra for SHACL validation to streamline and optimize data manipulation.</li>
    </ul>
    <div id="abstract-container" style="background-color: var(--note-bg-light); border: 1px solid var(--note-color-light); border-radius: 10px; padding: 20px 25px; margin-top: 20px; margin-right: 20px; cursor: pointer;" onclick="toggleAbstract()">
  <h4 id="abstract-title" style="margin: 0; font-size: 1rem; color: inherit; font-weight: 400;">
    Thesis Abstract: Flow-SHACL (click to expand) 
    <i id="toggle-icon" class="fas fa-chevron-down" style="font-size: 0.9rem; color: inherit;"></i>
  </h4>
</div>
    <div id="abstract-content" style="height: 0; overflow: hidden; transition: height 0.3s ease; margin-top: 10px; padding-left: 10px;">
      <p><strong>Flow-SHACL</strong> addresses the limitations of existing SHACL validators. SHACL (Shapes Constraint Language) is a W3C standard used to validate RDF (Resource Description Framework) data against a set of conditions or "shapes."</p>
      <p>Traditional SHACL validators face performance challenges, especially as <a href="https://www.ontotext.com/knowledgehub/fundamentals/what-is-a-knowledge-graph/" target="_blank" style="color: #007acc; text-decoration: none;">knowledge graphs</a> scale to millions or billions of nodes. <strong>Flow-SHACL</strong> tackles this issue with a dataflow-based approach, constructing an optimized data structure that maps SHACL operations as a dataflow graph.</p>
      <p>This novel approach not only improves performance but also enables inference capabilities, providing deeper insights into the validation process and offering a more scalable solution for handling large knowledge graphs.</p>
    </div>
    <!-- Images Section -->
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 20px;">
      <div style="flex: 1; min-width: 280px;">
        <div style="position: relative; padding-bottom: 66.66%; height: 0; overflow: hidden; border-radius: 12px; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);">
          <img src="/images/research/r1.jpg" alt="Poster Presentation at Mines" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
        </div>
        <p style="text-align: center; font-size: 0.9em; color: inherit; margin-top: 10px;">Presenting research poster at Mines</p>
      </div>
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
    
    if (content.style.height === "0px" || content.style.height === "") {
      content.style.height = content.scrollHeight + "px"; // Set height to scrollHeight for smooth expansion
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
      title.innerHTML = 'Thesis Abstract: Flow-SHACL (click to collapse) <i id="toggle-icon" class="fas fa-chevron-up" style="font-size: 0.9rem;"></i>';
    } else {
      content.style.height = "0px"; // Collapse
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
      title.innerHTML = 'Thesis Abstract: Flow-SHACL (click to expand) <i id="toggle-icon" class="fas fa-chevron-down" style="font-size: 0.9rem;"></i>';
    }
  }
</script>

<!-- CSS for uniform image sizes -->
<style>
/* Styling the container holding the images */
/* Styling the container holding the images */
.award-images {
  display: flex;
  gap: 20px; /* Increase the gap between images for better spacing */
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 15px; /* Add spacing between text and images */
  margin-bottom: 30px; /* Add more space below the image container */
  margin-right: 30px; /* Add more space below the image container */
  padding: 10px; /* Add padding around the container */
  border-radius: 10px; /* Add rounded corners to the image container */
  /* background-color: rgba(240, 240, 240, 0.5); Light background for image container */
}

/* Make all images uniform in size */
.uniform-img {
  width: 45%;
  height: 250px; /* Set a fixed height for uniformity */
  object-fit: cover;
  border-radius: 8px; /* Keep images rounded */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow for depth */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .uniform-img {
    width: 100%; /* Make the images take full width on mobile */
    height: auto; /* Allow height to adjust with the aspect ratio */
  }
}


</style>
<div class="section-spacing"></div>

<!-- SLOAN PROJECT Frontend Developer -->
<details class="work-details" open>
  <summary class="work-summary">
    <span style="font-style: italic;">SLOAN PROJECT, Frontend Developer</span> | Leadville, CO | May 2024 – Present
  </summary>
  <div>
    <p>Developed a community energy dashboard for residents to monitor and compare energy usage with peers.</p>
    <p style="position: relative; font-size: 1rem; color: var(--primary-color); padding-bottom: 5px; margin-bottom: 15px; font-weight: bold; margin-right: 15px;">
      Features I Am Proud Of:
      <span style="position: absolute; bottom: 0; left: 0; width: 100%; height: 2px; background-color: var(--primary-color);"></span>
    </p>
    <ul>
      <li><strong>Real-time comparison:</strong> Users can track their energy usage against neighbors.</li>
      <li><strong>Accessibility:</strong> Dark/light mode and language toggle for better UX.</li>
      <li><strong>Feedback system:</strong> Built a system where residents (non-admins) can submit feedback, and admins can view and manage it.</li>
      <li><strong>Admin control:</strong> Admins can refresh the webpage for non-admin users and add announcements.</li>
      <li><strong>Real-time notifications (In Progress):</strong> Building an Amazon SNS real-time texting system for announcements and updates.</li>
    </ul>
  </div>
  
  <!-- Confidential Block with Balanced Margins and Note Colors -->
  <div style="padding: 20px; border-radius: 10px; background-color: var(--note-bg-light); margin: 20px; border-left: 5px solid var(--note-color-light); text-align: center;">
    <p style="margin: 0; font-size: 1em; color: var(--primary-color);">
      The frontend system webpage is <span style="color: red;">confidential</span>.
    </p>
  </div>
</details>

<div class="section-spacing"></div>

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
      <li>Helped optimize backend architecture for efficient data processing and retrieval.</li>
      <li>Collaborated closely with engineers and professors from various departments to meet interdisciplinary project needs.</li>
      <li>Ensured seamless integration between frontend and backend components.</li>
    </ul>
  </div>
</details>


<div class="section-spacing"></div>


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
