import { examplesList } from "./examples.js";

const table = document.querySelector("table");

function createExample(rowIndex) {
  return `<td colspan='4' class='injected-row'><pre><code class='language-javascript'>${examplesList[rowIndex]}</code></pre></td>`;
}

// Add a single event listener to the table
table.addEventListener("click", (event) => {
  // Check if the clicked element is a table row (tr)
  let target = event.target;

  // Traverse to the closest 'tr' if the target is a child (like a 'td')
  while (target && target.nodeName !== "TR") {
    target = target.parentNode;
  }

  if (target.classList.contains("clicked")) {
    target.classList.remove("clicked");
    table.deleteRow(target.rowIndex + 1);
  } else {
    // If a valid row is clicked, handle the event
    if (
      target &&
      target.nodeName === "TR" &&
      target.parentNode.tagName === "TBODY" &&
      target.classList.contains("keep-row")
    ) {
      target.classList.add("clicked");
      table.insertRow(target.rowIndex + 1).innerHTML = createExample(
        target.rowIndex - 1
      );
    }
    Prism.highlightAll();
  }
});
