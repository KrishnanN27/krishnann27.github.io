---
title: "Home"
date: 2024-09-01
description: "Code & Canvas of Krish."
---

<div style="display: flex; align-items: center; gap: 20px; margin-top: 20px; flex-wrap: wrap; position: relative;">
    <!-- Left: Image -->
    <div style="flex: 1 1 250px; max-width: 250px;">
        <img src="/images/p.jpeg" alt="Profile Image" style="width: 100%; height: auto; border-radius: 12px; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);">
    </div>
    <!-- Right: Content -->
    <div style="flex: 2 1 500px; padding: 10px;">
        <p style="line-height: 1.8; margin-bottom: 1rem; margin-top: 0;">
            Here, you'll find my thoughts, experiences, and projects across various areas of interest. Feel free to explore the different sections below to learn more about my work and writings, or
            <a href="/connect/" style="color: #007acc; text-decoration: none; font-weight: bold;">
                connect with me
            </a>
            <i class="fas fa-phone" style="color: red; margin-left: 5px;"></i>
        </p>
        <!-- Recruiter Section with border and dropdown links -->
        <div id="recruiterText" style="cursor: pointer; padding: 10px; border-radius: 10px; margin-top: 10px; border: 2px solid #007acc;">
            <p style="margin: 0; font-size: 1em; color: #007acc; font-weight: bold;">
                <i class="fas fa-caret-right" style="margin-right: 5px;"></i> Click here to quickly check my qualifications
            </p>
        </div>
        <!-- Dropdown links with height animation -->
        <div id="recruiterLinks" style="height: 0; overflow: hidden; transition: height 0.3s ease; margin-top: 5px;">
            <ul style="list-style-type: none; padding: 0; margin-left: 20px;">
                <li style="margin-bottom: 10px;">
                    <a href="/portfolio" style="color: #007acc; text-decoration: none;">Check My Portfolio</a>
                </li>
                <li style="margin-bottom: 10px;">
                    <a href="/CV_Sowndarya_Krishnan.pdf" style="color: #007acc; text-decoration: none;">Download My Resume</a>
                </li>
                <li style="margin-bottom: 10px;">
                    <a href="/research" style="color: #007acc; text-decoration: none;">View My Research</a>
                </li>
                <li style="margin-bottom: 10px;">
                    <a href="/connect/" style="color: #007acc; text-decoration: none;">Contact Information</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<!-- Toggle script for dropdown -->
<script>
    document.getElementById('recruiterText').addEventListener('click', function () {
        var links = document.getElementById('recruiterLinks');
        var icon = this.querySelector('i');
        if (links.style.height === '0px' || links.style.height === '') {
            links.style.height = '150px'; // Adjust height to fit all links
            icon.classList.replace('fa-caret-right', 'fa-caret-down');
        } else {
            links.style.height = '0px'; // Collapse
            icon.classList.replace('fa-caret-down', 'fa-caret-right');
        }
    });
</script>
