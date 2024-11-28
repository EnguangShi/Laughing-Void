// Static arrays for movies and songs
export const movieList = [
  "<span>Satoshi Kon's <em>Tokyo Godfathers</em></span>",
  "<span>Christopher Nolan's <em>Inception</em></span>",
  "<span>Hayao Miyazaki's <em>Spirited Away</em></span>",
];

export const songList = [
  '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1qN7LUXE85z2Zkqqlb5pcp?utm_source=generator" width="100%" height="175" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
  '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4LUIbOglt9ySU8BzL5a0yx?utm_source=generator" width="100%" height="175" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
  '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5ZBeML7Lf3FMEVviTyvi8l?utm_source=generator" width="100%" height="175" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
];

// Helper function to select a random item
export function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to set up reusable components
export function setupReusableComponents() {
  const components = document.querySelectorAll(".reusable-component");

  components.forEach(component => {
    const toggleLink = component.querySelector(".toggle-link");
    const details = component.querySelector(".details");

    // Set button text
    toggleLink.textContent = toggleLink.getAttribute("data-button-text");

    toggleLink.addEventListener("click", () => {
      toggleLink.style.display = "none"; // Hide button
      details.style.display = "block"; // Show details

      // Dynamic content handlers
      const ageContent = details.querySelector(
        "[data-details-content='age-calculation']"
      );
      const movieContent = details.querySelector(
        "[data-details-content='movie-recommendation']"
      );
      const songContent = details.querySelector(
        "[data-details-content='song-recommendation']"
      );

      if (ageContent) {
        ageContent.textContent = "Calculating age..."; // Initial buffer message
        setTimeout(() => {
          setInterval(() => {
            const birthDate = new Date("1996-06-20T11:05:00");
            const now = new Date();
            const diff = now - birthDate;

            const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
            const days = Math.floor(
              (diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24)
            );
            const hours = Math.floor(
              (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            ageContent.innerHTML = `
                <span>I am ${years} years, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds old.</span>
              `;
          }, 1000);
        }, 500); // Simulate a short delay
      }

      if (movieContent) {
        movieContent.innerHTML = getRandomItem(movieList); // Randomly select a movie
      }

      if (songContent) {
        songContent.innerHTML = getRandomItem(songList); // Randomly select a song
      }
    });
  });
}
