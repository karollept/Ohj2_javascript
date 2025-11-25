document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("searchForm");
  const input = document.getElementById("query");
  const resultsDiv = document.getElementById("results");

  form.addEventListener("submit", event => {
    event.preventDefault();

    const query = input.value.trim();
    if (!query) {
      console.log("Please enter a TV show name.");
      return;
    }

    const linkki = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    fetch(linkki)
      .then(response => {
        if (!response.ok) throw new Error("Network error");
        return response.json();
      })
      .then(data => {
        console.clear();
        console.log(data);

        resultsDiv.innerHTML = "";

        data.forEach(tvShow => {
          const show = tvShow.show;

          const article = document.createElement("article");

          const heading = document.createElement("h2");
          heading.textContent = show.name;

          const link = document.createElement("a");
          link.href = show.url;
          link.textContent = "More info";
          link.target = "_blank";

          const image = document.createElement("img");
          image.src = show.image?.medium || "";
          image.alt = show.name;

          const summary = document.createElement("div");
          summary.innerHTML = show.summary || "<p>No summary available.</p>";

          article.appendChild(heading);
          article.appendChild(link);
          if (show.image?.medium) article.appendChild(image);
          article.appendChild(summary);

          resultsDiv.appendChild(article);
        });
      })
      .catch(error => {
        resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
      });
  });
});
