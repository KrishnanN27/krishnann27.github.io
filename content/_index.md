---
title: "Home"
date: 2024-09-01
description: "Code & Canvas of Krish."
---

<div style="display: flex; align-items: center; gap: 20px; margin-top: 40px; flex-wrap: wrap;">
    <!-- Left: Image -->
    <div style="flex: 1 1 250px; max-width: 250px;">
        <img src="/images/p.jpeg" alt="Profile Image" style="width: 100%; height: auto; border-radius: 12px; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);">
    </div>
    <!-- Right: Content -->
    <div style="flex: 2 1 500px; padding: 10px;">
        <p style="line-height: 1.8; margin-bottom: 1rem;">
            Here, you'll find my thoughts, experiences, and projects across various areas of interest. Feel free to explore the different sections below to learn more about my work and writings, or 
            <a href="/connect/" style="color: #007acc; text-decoration: none; font-weight: bold;">
                connect with me
            </a>
            <i class="fas fa-phone" style="color: red; margin-left: 5px;"></i>
        </p>
        <div id="recruiterText" style="cursor: pointer; padding: 10px; border-radius: 10px; background-color: rgba(255, 255, 0, 0.2); margin-top: 20px; border-left: 5px solid #007acc;">
            <p style="margin: 0; font-size: 0.9em; color: var(--primary-color);">
                Click here for quick access to research and qualifications <i class="fas fa-arrow-right"></i>.
            </p>
        </div>
        <div id="recruiterLinks" style="display: none; margin-top: 15px;">
            <ul style="list-style-type: none; padding: 0;">
                <li><a href="/portfolio" style="color: #007acc; text-decoration: none; font-weight: bold;">Check My Portfolio</a></li>
                <li><a href="/CV_Sowndarya_Krishnan.pdf" style="color: #007acc; text-decoration: none; font-weight: bold;">Download My Resume</a></li>
                <li><a href="/research" style="color: #007acc; text-decoration: none; font-weight: bold;">View My Research</a></li>
                <li><a href="/connect/" style="color: #007acc; text-decoration: none; font-weight: bold;">Contact Information</a></li>
            </ul>
        </div>
    </div>
</div>

<script>
    const recruiterText = document.getElementById("recruiterText");
    const recruiterLinks = document.getElementById("recruiterLinks");

    recruiterText.addEventListener("click", function() {
        recruiterLinks.style.display = recruiterLinks.style.display === "none" ? "block" : "none";
    });
</script>
