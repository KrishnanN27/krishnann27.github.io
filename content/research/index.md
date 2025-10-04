---
title: "Research"
showToc: false
---

<style>
  /* Clean structure – respects existing theme */
  .research-container {
    margin: 0;
    padding: 3rem 2rem 4rem;
    font-family: inherit;
    line-height: 1.7;
    text-align: justify;
  }

  .research-img {
    display: block;
    margin: 0 auto 1.5rem;
    border-radius: 14px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    width: 85%;
    max-width: 780px;
    height: auto;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .research-img:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
  }

  .research-caption {
    text-align: center;
    font-style: italic;
    font-size: 1.05rem;
    margin: 1.5rem auto 3rem;
    line-height: 1.6;
    opacity: 0.9;
  }

  .research-container h2 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-top: 3rem;
    margin-bottom: 1rem;
    text-align: left;
  }

  .research-container h2::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background: currentColor;
    opacity: 0.2;
    margin-top: 0.4rem;
  }

  /* Subtle fade-in effect */
  [data-fade] {
    opacity: 0;
    transform: translateY(25px);
    animation: fadeInUp 0.9s ease forwards;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsive image handling */
  @media (max-width: 1000px) {
    .research-img {
      width: 90%;
      max-width: 650px;
    }
  }

  @media (max-width: 700px) {
    .research-img {
      width: 100%;
      max-width: 100%;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
    }

    .research-caption {
      font-size: 1rem;
      margin: 1rem auto 2rem;
    }
  }
</style>

<div class="research-container">

  <!-- Start with caption and image -->
  <div class="research-hero" data-fade>
    <p class="research-caption">
      If I had to explain my research in one picture: it’s like giving a fast plane the vast capacity of a ship.
    </p>
    <img src="/images/research/research.png"
         alt="Ship on a plane"
         loading="lazy"
         class="research-img">
  </div>

  <!-- Then your explanation -->
  <div data-fade>
    <p>
      AI and machine learning are already fast and powerful, like a plane.
      Quantum computing doesn’t replace them—it expands their capabilities, like adding the depth and capacity of a ship to something that already flies.<br>
      Together, they can reach destinations that classical methods alone could never access.
    </p>
  </div>

  <!-- Sections -->
  <section data-fade>
    <h2>What I Do</h2>
    <p>
      My research in <strong>quantum computing</strong> focuses on designing algorithms to tackle scientific problems governed by <strong>partial differential equations (PDEs)</strong>.
      These equations describe the behavior of complex physical systems—from fluid flow in porous media to the dynamics of large-scale engineering processes—that are often too demanding for classical computers.
    </p>
  </section>

  <section data-fade>
    <h2>Hybrid Quantum–AI</h2>
    <p>
      I am developing <strong>hybrid quantum–AI methods</strong>, with a strong emphasis on machine learning, that combine the strengths of both paradigms.
      The goal is to achieve <strong>efficiency, scalability, and accuracy</strong> beyond what either quantum algorithms or AI techniques can deliver on their own.
    </p>
  </section>

  <section data-fade>
    <h2>Why It Matters</h2>
    <p>
      By reformulating PDE-based models for quantum hardware, my goal is to simulate <strong>multiscale, multiphysics processes</strong> in science and engineering.
      This opens the door to breakthroughs in modeling, prediction, and discovery—pushing science and engineering beyond the limits of classical approaches.
    </p>
  </section>

</div>
