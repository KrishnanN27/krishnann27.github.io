---
title: "Home"
date: 2024-09-01
description: "Code & Canvas of Krish."
---

<style>
  .home-wrap {
    max-width: 760px;
    margin: 72px auto;
    padding: 0 20px;
    text-align: center;
    color: var(--text-color, inherit);
  }

  .home-img  {
    width: 200px;
    max-width: 55%;
    display: block;
    margin: 0 auto 28px auto;
    border-radius: 50%;
    box-shadow: 0 8px 20px rgba(0,0,0,.12);
  }

  .home-title{
    font-size: 1.6rem;
    line-height: 1.2;
    margin: 0;
    color: var(--primary, #006699);
  }

  .home-sub  {
    font-size: 1.05rem;
    line-height: 1.8;
    margin: 14px 0 0 0;
  }

  .pillbar   {
    margin: 22px auto 0;
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .pill      {
    font-size: .9rem;
    padding: 6px 12px;
    border-radius: 999px;
    border: 1px solid var(--primary, #006699);
    color: var(--primary, #006699);
    background: transparent;
  }

  .link      {
    color: var(--primary, #006699);
    text-decoration: none;
    font-weight: 500;
  }

  .link:hover{
    text-decoration: underline;
  }

  .home-recent {
    max-width: 760px;
    margin: 48px auto 0;
    padding: 0 20px;
    text-align: left;
  }

  .home-recent h2 {
    margin: 0 0 12px 0;
    font-size: 1.4rem;
    color: var(--primary, #006699);
  }
</style>

<div class="home-wrap">
  <!-- use your existing image to keep assets simple -->
  <img src="/images/prof/dp.png" alt="Krish profile" class="home-img">

  <h1 class="home-title">Hi, I’m Krish 👋</h1>
  <p class="home-sub">
    I’m a first-year PhD student in Computer Science at
    <a href="https://www.mines.edu/" target="_blank" rel="noopener" class="link">Colorado School of Mines</a>.
    My research focuses on <strong>AI applications</strong> and <strong>quantum computing</strong>.
  </p>

  <div class="pillbar">
    <span class="pill">AI Applications</span>
    <span class="pill">Quantum Computing</span>
  </div>

</div>
