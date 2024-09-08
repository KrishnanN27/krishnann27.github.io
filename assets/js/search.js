var seachOpnBtn = null;
var closeBtn = null;
var searchCntr = null;
var resultCntr = null;
var searchBtn = null;
var searchTxt = null;
var isSearchOpen = false;
var isJsonIndexed = false;
var isResEmpty = true;
var fuse;

// Function to fetch JSON data (search index)
function fetchJSON(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
        if (callback) callback(data);
      }
    }
  };
  httpRequest.open("GET", path);
  httpRequest.send();
}

// Function to build Fuse.js index from JSON
function buildIndex() {
  var baseURL = searchCntr.getAttribute("data-url");
  baseURL = baseURL.replace(/\/?$/, '/');
  fetchJSON(baseURL + "index.json", function (data) {
    var options = {
      shouldSort: true,
      ignoreLocation: true,
      threshold: 0.3, // Increase threshold to allow for more flexible matching
      minMatchCharLength: 2, // Match after 2 characters
      includeMatches: true,
      keys: [
        { name: "title", weight: 0.8 },
        { name: "section", weight: 0.2 },
        { name: "summary", weight: 0.6 },
        { name: "content", weight: 0.4 },
      ],
    };
    fuse = new Fuse(data, options);
    isJsonIndexed = true;
  });
}

// Function to open the search overlay
function openSearch() {
  if (!isJsonIndexed) {
    buildIndex();
  }
  if (!isSearchOpen) {
    searchCntr.style.display = "flex";
    document.body.style.overflow = "hidden";
    isSearchOpen = true;
    searchTxt.focus();
  }
}

// Function to close the search overlay
function closeSearch() {
  if (isSearchOpen) {
    searchCntr.style.display = "none";
    document.body.style.overflow = "";
    isSearchOpen = false;
  }
}

// Function to execute the search query and display results
function executeQuery(query) {
  if (!query) {
    resultCntr.innerHTML = ""; // Clear the results when no query is entered
    document.getElementById('no-results').style.display = 'none'; // Hide "No results" message
    return;
  }

  let results = fuse.search(query);
  document.getElementById('search-loading').style.display = 'none'; // Hide loading spinner

  let resultsHtml = "";

  if (results.length > 0) {
    results.forEach(function (value, key) {
      var meta = value.item.section + " | ";
      meta = meta + (value.item.date ? value.item.date + " | " : "");
      meta = meta + `<span class="srch-link">${value.item.permalink}</span>`;

      resultsHtml += `
        <li>
          <a href="${value.item.permalink}">
            <p class="srch-title">${value.item.title}</p>
            <p class="srch-meta">${meta}</p>
            <p class="srch-smry">${value.item.summary}</p>
          </a>
        </li>`;
    });

    document.getElementById('no-results').style.display = 'none'; // Hide "No results" message if results are found
    isResEmpty = false;
  } else {
    resultsHtml = "<li>No results found</li>"; // Display "No results" message if no results are found
    // document.getElementById('no-results').style.display = 'block'; // Show "No results" message
    isResEmpty = true;
  }

  resultCntr.innerHTML = resultsHtml;
}


// DOMContentLoaded event to set up event listeners for search functionality
window.addEventListener("DOMContentLoaded", (event) => {
  seachOpnBtn = document.getElementById("search-open");
  searchBtn = document.getElementById("search-btn");
  closeBtn = document.getElementById("search-close");
  searchCntr = document.getElementById("search-container");
  resultCntr = document.getElementById("search-results");
  searchTxt = document.getElementById("search-query");

  // Event listeners for opening and closing search
  seachOpnBtn.addEventListener("click", openSearch);
  closeBtn.addEventListener("click", closeSearch);

  // Keyup event listener to handle search query
  searchTxt.onkeyup = function (event) {
    executeQuery(this.value);
  };

  // Handle Enter key to focus first search result
  searchTxt.onkeydown = function (event) {
    if ((event.key == "Enter") && (!isResEmpty)) {
      resultCntr.firstChild.firstElementChild.focus();
      event.preventDefault();
    }
  };
});

// Keyboard shortcuts to open/close search or navigate search results
document.addEventListener("keydown", function (event) {
  if (event.key == "/") {
    event.preventDefault();
    openSearch();
  }

  if (isSearchOpen) {
    if (event.key == "Escape") {
      event.preventDefault();
      closeSearch();
    } else if ((event.key == "ArrowDown") && (!isResEmpty)) {
      if (document.activeElement == searchTxt) {
        resultCntr.firstChild.firstElementChild.focus();
      } else if (document.activeElement == resultCntr.lastChild.firstElementChild) {
        searchTxt.focus();
      } else {
        document.activeElement.parentElement.nextSibling.firstElementChild.focus();
      }
      event.preventDefault();
    } else if ((event.key == "ArrowUp") && (!isResEmpty)) {
      if (document.activeElement == searchTxt) {
        resultCntr.lastChild.firstElementChild.focus();
      } else if (document.activeElement == resultCntr.firstChild.firstElementChild) {
        searchTxt.focus();
      } else {
        document.activeElement.parentElement.previousSibling.firstElementChild.focus();
      }
      event.preventDefault();
    }
  }
});
