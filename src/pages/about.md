---
layout: ../layouts/AboutLayout.astro
title: "About Me"
---

<img src="../../src/assets/images/me.png" alt="Me" style="width: 20%;"/>

**Hello there, I am Enguang Shi. Welcome to my personal website.**

As a software developer, I enjoy coding because it allows me to turn my ideas into reality. For example, I created <a href="https://gemexplore.xyz" target="_blank" rel="noopener noreferrer">GemExplore</a>, a platform where my friends and I can share interesting locations on a map.

I am always learning and growing as a developer. I’m dedicated to expanding my full-stack skill set and improving my ability to write cleaner, more efficient code. I document my progress here on this website, where my study notes are organized and easy to follow. If you’re also on a learning journey, feel free to check them out <a href="/posts/">here</a>!

Playing music is my way of meditating, and I also write songs. Here’s one I made—have a listen:

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1qN7LUXE85z2Zkqqlb5pcp?utm_source=generator" width="100%" height="175" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

![MePlayingGuitar](../../src/assets/images/guitar.jpg)

**Meet Jerry**

Jerry is my rescue cat and a clever, gentle companion. He loves playing hide-and-seek (he’s surprisingly good at it), enjoying his favorite tuna-flavored cat sticks, and joining me on occasional walks to explore the world by my side.

![Jerry](../../src/assets/images/jerry.jpg)

**More info about me**

<div class="reusable-component">
  <a href="javascript:void(0)" class="toggle-link" data-button-text="My current age to the second">My current age to the second</a>
  <div class="details" style="display: none;">
    <div data-details-content="age-calculation"></div>
  </div>
</div>

<div class="reusable-component">
  <a href="javascript:void(0)" class="toggle-link" data-button-text="My MBTI">My MBTI</a>
  <div class="details" style="display: none;">
    <a href="https://www.16personalities.com/entp-personality" target="_blank" rel="noopener noreferrer">ENTP-A</span>
  </div>
</div>

<div class="reusable-component">
  <a href="javascript:void(0)" class="toggle-link" data-button-text="Some Good Songs">Some Good Songs</a>
  <div class="details" style="display: none;">
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37J2wXmbOrOSdUJ91fiAiy?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>
</div>

<script>
  // 通用展开/显示逻辑
  function setupReusableComponents() {
    const components = document.querySelectorAll(".reusable-component");

    components.forEach((component) => {
      const toggleLink = component.querySelector(".toggle-link");
      const details = component.querySelector(".details");

      // 设置初始文本
      toggleLink.textContent = toggleLink.getAttribute("data-button-text");

      // 点击按钮显示内容
      toggleLink.addEventListener("click", () => {
        toggleLink.style.display = "none"; // 隐藏按钮
        details.style.display = "block"; // 显示详细内容

        // 如果需要动态内容更新
        const dynamicContent = details.querySelector("[data-details-content='age-calculation']");
        if (dynamicContent) {
          dynamicContent.textContent = "Calculating age..."; // Initial buffer message
          setTimeout(() => {
            setInterval(() => {
                const birthDate = new Date("1996-06-20T11:05:00");
                const now = new Date();
                const diff = now - birthDate;

                const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
                const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                dynamicContent.innerHTML = `
                <span>I am ${years} years, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds old.</span>
                `;
            }, 1000);
          }, 500); // Simulate a short delay
        }
      });
    });
  }

  // 初始化所有可复用组件
  setupReusableComponents();
</script>
