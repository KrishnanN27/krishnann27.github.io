---
title: "Sowndarya Krishnan Navaneetha Kannan"
---

<style>
  :root {
    --primary: var(--primary-color, #006699);
    --text: var(--primary-color, #292929);
    --bg: var(--secondary-color, #ffffff);
  }

  /* Hero */
  .hero {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
  }

.hero img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: 24px; /* round ALL corners */
  z-index: 0;
}

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
  border-radius: 24px; /* match the image corners */
  z-index: 1;
}

:root[data-color="light"] .hero::after {
  background: linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(0,0,0,0.3));
}
  .hero-content {
    position: relative;
    z-index: 2;
    animation: fadeUp 1.5s ease forwards;
    max-width: 800px;
    padding: 0 1rem;
    color: #fff;
  }

  .hero h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: bold;
    color: var(--primary);
  }

  .hero p {
    margin-top: 1rem;
    font-size: clamp(1rem, 2.5vw, 1.3rem);
    line-height: 1.6;
  }

  /* Sections */
  section {
    padding: 4rem 1rem;
  }
  section h2 {
    text-align: center;
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin-bottom: 2rem;
    color: var(--primary);
  }

  /* Timeline */
  .timeline {
    position: relative;
    max-width: 900px;
    margin: 4rem auto;
  }
  .timeline::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--primary);
    transform: translateX(-50%);
  }
  .timeline-item {
    position: relative;
    width: 50%;
    padding: 1rem 2rem;
    box-sizing: border-box;
    background: var(--secondary-color);
    color: var(--primary-color);
    border-radius: 12px;
    margin-bottom: 2rem;
    box-shadow: var(--box-shadow2, 0 4px 10px rgba(0,0,0,0.05));
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .timeline-item:hover {
    transform: translateY(-4px);
    box-shadow: var(--box-shadow, 0 6px 16px rgba(0,0,0,0.1));
  }
  .timeline-item h3 {
    margin: 0;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    font-weight: bold;
    color: var(--primary);
  }
  .timeline-item h4 {
    margin: 0.3rem 0 0;
    font-size: clamp(0.9rem, 2vw, 1rem);
    font-weight: normal;
    opacity: 0.85;
  }
  .timeline-item a {
    color: var(--primary);
    text-decoration: none;
    border-bottom: 1px dashed transparent;
    transition: border-color .3s;
  }
  .timeline-item a:hover {
    border-color: var(--primary);
  }

  /* alternating layout */
  .timeline-item.left {
    left: 0;
    text-align: right;
  }
  .timeline-item.right {
    left: 50%;
    text-align: left;
  }

  .timeline-item::before {
    content: "";
    position: absolute;
    top: 10px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--primary);
    border: 3px solid var(--secondary-color);
    z-index: 1;
  }
  .timeline-item.left::before {
    right: -9px;
  }
  .timeline-item.right::before {
    left: -9px;
  }

  /* Closing */
  .closing {
    background: var(--secondary-color);
    color: var(--primary-color);
    text-align: center;
    padding: 4rem 2rem;
    border: 2px solid var(--primary);
    border-radius: 16px;
    max-width: 900px;
    margin: 0 auto 4rem auto;
    transition: background .3s, color .3s;
  }
  .closing h2 {
    color: var(--primary);
  }
  .closing p {
    max-width: 700px;
    margin: 1rem auto 0;
    line-height: 1.6;
    font-size: clamp(0.95rem, 2.5vw, 1rem);
  }
  .closing a.button {
    display: inline-block;
    margin-top: 1.5rem;
    padding: 0.8rem 1.6rem;
    border-radius: 999px;
    background: var(--primary);
    color: var(--secondary-color);
    text-decoration: none;
    transition: background 0.3s;
  }
  .closing a.button:hover {
    background: var(--tertiary-color, #e0002d);
  }

  /* Animation */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px);}
    to   { opacity: 1; transform: translateY(0);}
  }

  /* Responsive timeline */
  @media (max-width: 992px) {
    .timeline::before {
      left: 12px;
    }
    .timeline-item {
      width: 100%;
      padding: 1.5rem 2rem 1.5rem 2.5rem;
      text-align: left !important;
    }
    .timeline-item.left,
    .timeline-item.right {
      left: 0;
    }
    .timeline-item::before {
      left: 0;
      right: auto;
    }
  }

  /* Smooth theme transitions */
  html, body, .hero, .timeline-item, .closing {
    transition: background-color 0.4s ease, color 0.4s ease;
  }
</style>

<!-- Hero Section -->
<section class="hero">
  <img src="/images/aboutme.jpeg" alt="Portrait of Sowndarya Krishnan Navaneetha Kannan" />
  <div class="hero-content">
    <h1>Hi, I’m Sowndarya Krishnan</h1>
    <p>
      Most friends call me Krish or Chris.<br/>
      If you’d like to pronounce my full name: <em>(Sown-dar-yeh Krish-nun)</em>.<br/>
      I’m a curious learner, an explorer of ideas, and someone who loves connecting with people and cultures across the world.
    </p>
  </div>
</section>

<!-- Timeline Section -->
<section>
  <h2>My Journey</h2>
  <div class="timeline">
    <div class="timeline-item left">
      <h3>Bachelor of Engineering in Electronics & Communication</h3>
      <h4>Anna University</h4>
    </div>
    <div class="timeline-item right">
      <h3>Software Developer</h3>
      <h4>NCompass Tech Studio</h4>
    </div>
    <div class="timeline-item left">
      <h3>Master of Science in Computer Science</h3>
      <h4>Under <a href="https://gtf.fyi/" target="_blank">Dr. Gabe Fierro</a> — Colorado School of Mines</h4>
    </div>
    <div class="timeline-item right">
      <h3>Doctor of Philosophy in Computer Science</h3>
      <h4>Under <a href="https://petroleum.mines.edu/project/tahmasebi-pejman/" target="_blank">Dr. Pejman Tahmasebi</a> — Colorado School of Mines</h4>
    </div>
  </div>
</section>

<!-- Closing Section -->
<section class="closing">
  <h2>Thanks for stopping by</h2>
<p>
  I’m building, learning, and teaching — but mostly, I’m just trying to grow a little every day.<br/>
  Feel free to reach out if you’d like to connect or learn more about what I do.
</p>

<a href="/connect" class="button">Get in Touch</a>

</section>
