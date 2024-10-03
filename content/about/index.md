---
title: "Get to Know More"
date: 2024-09-01
hidden: false
externalURL: false
showComments: false
---

<div style="max-width: 720px; margin: 0 auto; padding: 30px 0;">
    <!-- Image Loader -->
    <div id="image-loader" style="width: 100%; display: flex; justify-content: center; align-items: center; height: 400px;">
        <div class="spinner" style="border: 4px solid #f3f3f3; border-radius: 50%; border-top: 4px solid #007acc; width: 40px; height: 40px; animation: spin 2s linear infinite;"></div>
    </div>
    <div id="image-container" style="display: none; width: 100%; max-height: 400px; margin-bottom: 20px;">
        <img id="profile-image" src="/images/d.jpeg" alt="Sowndarya Krishnan" style="width: 100%; height: auto; object-fit: cover; object-position: center; border-radius: 12px; box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);">
    </div>
    <div style="padding: 0 20px;">
        <p style="font-size: 1.05rem; line-height: 1.8em; margin: 0 0 15px 0;">
    I'm <strong>Sowndarya Krishnan</strong><span style="display: inline-block; margin-left: 10px; font-style: italic; color: #666;">(pronounced: Sown-dar-yeh Krish-nun)</span> — short name: <em>Krish</em> or <em>Chris</em>, currently pursuing a <em>Master’s Thesis</em> in <strong>Computer Science</strong> at the <a href="https://www.mines.edu/" style="color: #007acc; text-decoration: none;">Colorado School of Mines</a>.
</p>
        <p style="font-size: 1.05rem; line-height: 1.8em; margin: 0 0 15px 0;">
            I hold a <strong>B.E. in Electronics and Communication Engineering</strong> from <a href="https://www.annauniv.edu/" target="_blank" style="color: #007acc; text-decoration: none;">Anna University</a>.
        </p>
        <p style="font-size: 1.05rem; line-height: 1.8em; margin: 0 0 15px 0;">
    I am also a <strong>Research Assistant</strong>, working under the guidance of <a href="https://gtf.fyi/" style="color: #007acc; text-decoration: none;">Dr. Gabe Fierro</a> at the <a href="https://datadrivencps.github.io/website/" style="color: #007acc; text-decoration: none;">DataDrivenCPS lab</a>. Learn more about my research <a href="/research/" style="color: #007acc; text-decoration: none;">here</a>.
</p>
        <p style="font-size: 1.05rem; line-height: 1.8em; margin: 0 0 15px 0;">
            Former <strong style="color: #007acc;">Mobile</strong>, <strong style="color: #007acc;">Frontend</strong>, and <strong style="color: #007acc;">Cloud Engineer</strong> at <a href="https://ncompass.inc/" target="_blank" style="color: #007acc; text-decoration: none;">NCompass Tech Studio</a>.
        </p>
        <div style="font-size: 1.05rem; line-height: 1.8em; margin-top: 20px;">
            <strong>Outside of work, I enjoy:</strong>
            <ul style="list-style-type: none; padding-left: 0;">
                <li>💪 Working out</li>
                <li>💃 Salsa</li>
                <li>🏊‍♀️ Swimming</li>
                <li>📷 Photography (check out my <a href="/gallery/" style="color: #007acc; text-decoration: none;">gallery</a>)</li>
                <li>👩‍🏫 Teaching and sharing knowledge</li>
                <li>🙏 Appreciating God throughout everything I do</li>
            </ul>
        </div>
        <div style="margin-top: 30px; padding: 15px; border: 1px solid #007acc; border-radius: 10px;">
            <p style="font-size: 1.05rem; line-height: 1.8em; color: #007acc; margin: 0;">
                PS: One day you will see pictures of me doing all the above activities.
            </p>
        </div>
    </div>
</div>



<!-- JavaScript to handle image loading -->
<!-- JavaScript to handle image loading properly -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
      const image = document.getElementById('profile-image');
      const loader = document.getElementById('image-loader');
      const container = document.getElementById('image-container');

      // Check if the image is cached and fully loaded already
      if (image.complete) {
          loader.style.display = 'none';
          container.style.display = 'block';
      } else {
          // If the image is not yet loaded
          image.onload = function() {
              loader.style.display = 'none'; // Hide the loader
              container.style.display = 'block'; // Show the image container
          };
      }
  });
</script>

<!-- Loader animation style -->
<style>
  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }
  
  /* Ensure image is responsive and maintains proper aspect ratio */
  @media (max-width: 768px) {
    div[style*="max-width: 720px"] {
      padding: 0 10px; /* Slightly reduce padding on smaller screens */
    }

    div[style*="max-height: 400px"] {
      max-height: 250px; /* Adjust image height for smaller screens */
    }

    img {
      border-radius: 12px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Slightly reduced shadow on smaller screens */
    }

    div[style*="padding: 0 20px"] {
      padding: 0 15px; /* Slightly reduce padding for text */
    }
  }
</style>