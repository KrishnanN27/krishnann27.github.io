---
title: "Professional Photos"
date: 2024-09-01
description: "Download professional photos for events or invitations."
---

<div class="note">
  <span class="note-icon"><i class="fas fa-info-circle"></i></span> <!-- Info circle icon -->
  <div>
    <div class="note-content">Thank You!</div>
    <div class="note-text">
      Thank you for thinking of inviting me! Below are professional headshot images of me, you can download for use in events or invitations. Feel free to reach out if you need different formats or additional photos.
    </div>
  </div>
</div>

<div class="section-spacing"></div>

<div id="image-gallery" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 30px;">
    <!-- Image 1 -->
    <div style="flex: 1 1 300px; max-width: 320px;">
        <div class="image-container">
            <img src="/images/prof/con1.jpeg" alt="Professional Photo 1" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15); transition: transform 0.3s ease-in-out;" onload="hideLoader(this)">
            <div class="loader"></div>
        </div>
        <p style="text-align: center; margin: 15px 0;">
            <a href="/images/prof/con1.jpeg" download style="color: #007acc; text-decoration: none; font-weight: bold;">Download Photo 1</a>
        </p>
    </div>
    <div style="flex: 1 1 300px; max-width: 320px;">
        <div class="image-container">
            <img src="/images/prof/con2.jpg" alt="Professional Photo 2" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15); transition: transform 0.3s ease-in-out;" onload="hideLoader(this)">
            <div class="loader"></div>
        </div>
        <p style="text-align: center; margin: 15px 0;">
            <a href="/images/prof/con2.jpg" download style="color: #007acc; text-decoration: none; font-weight: bold;">Download Photo 2</a>
        </p>
    </div>
    <div style="flex: 1 1 300px; max-width: 320px;">
        <div class="image-container">
            <img src="/images/prof/con3.png" alt="Professional Photo 3" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15); transition: transform 0.3s ease-in-out;" onload="hideLoader(this)">
            <div class="loader"></div>
        </div>
        <p style="text-align: center; margin: 15px 0;">
            <a href="/images/prof/con3.png" download style="color: #007acc; text-decoration: none; font-weight: bold;">Download Photo 3</a>
        </p>
    </div>
</div>

<style>
    img:hover {
        transform: scale(1.05); /* Slight zoom on hover */
    }

    .image-container {
        position: relative;
        width: 100%;
        height: 300px; /* Same height for all images */
    }

    .loader {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2em;
        color: #007acc;
    }

    .loader::before {
        content: "Loading...";
    }

    img {
        display: none;
    }

    .image-container img.loaded {
        display: block;
    }
</style>

<script>
    function hideLoader(img) {
        img.classList.add('loaded');
        img.nextElementSibling.style.display = 'none'; // Hide loader after image loads
    }
</script>
