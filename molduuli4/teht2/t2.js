document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("searchForm");
  const input = document.getElementById("query");

  form.addEventListener("submit", event => {
    event.preventDefault(); // Stop the browser from navigating away

    const query = input.value.trim(); // Use the actual input field
    if (!query) {
      console.log("Please enter a TV show name.");
      return;
    }

    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error("Network error");
        return response.json();
      })
      .then(data => {
        console.log("Search results:", data);
      })
      .catch(error => {
        console.error("Fetch failed:", error);
      });
  });
});



