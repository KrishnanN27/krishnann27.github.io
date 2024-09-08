---
title: "Home"
date: 2024-09-01
description: "This is a brief description of the content."
---

<div style="display: flex; align-items: center; gap: 20px; margin-top: 40px; flex-wrap: wrap;">
    <!-- Left: Image -->
    <div style="flex: 1 1 250px; max-width: 250px;">
        <img src="/images/p.jpeg" alt="Profile Image" style="width: 100%; height: auto; border-radius: 12px; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);">
    </div>
    <!-- Right: Content -->
    <div style="flex: 2 1 500px; padding: 10px;">
        <h1 style="margin-top: 0;">Welcome to my personal website</h1>
        <p style="line-height: 1.8;">
            Here, you'll find my thoughts, experiences, and projects across various areas of interest. Feel free to explore the different sections below to learn more about my work and writings, or get in touch if you'd like to connect.
        </p>
    </div>
</div>

<style>
  @media (max-width: 768px) {
    div[style*="display: flex"] {
      flex-direction: column; /* Stack vertically on mobile */
      align-items: center; /* Center the content */
      text-align: center;
    }

    div[style*="flex: 1 1 250px;"] {
      max-width: 80%; /* Image will take up 80% of screen width on mobile */
      margin: 0 auto; /* Center the image */
    }

    div[style*="flex: 2 1 500px;"] {
      width: 90%; /* Content will take up 90% of screen width on mobile */
      padding: 0;
    }
  }
</style>
