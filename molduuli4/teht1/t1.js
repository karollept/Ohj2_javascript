document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("searchForm");
  const input = document.getElementById("query");

  form.addEventListener("submit", event => {
    event.preventDefault();

    const query = prompt("Please ener a TV show's name");

    const site = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    fetch(site)
      .then(response => {
        if (!response.ok) throw new Error("Network error");
        return response.json();
      })
  });
});
