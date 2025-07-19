window.onload = function () {
  const name = document.getElementById("name");
  const website = document.getElementById("website");
  const textArea = document.getElementById("comment-box");
  const button = document.getElementById("button");

  const ul = document.getElementById("comments");

  function addComment() {
    const nameValue = name.value;
    const websiteValue = website.value;
    const textAreaValue = textArea.value;

    if (!nameValue || !textAreaValue) {
      alert("Please fill out all the fields");
      return;
    }

    // Comment Post
    ul.classList.add("comments");

    const li = document.createElement("li");
    li.classList.add("comment");

    // H1
    const h3 = document.createElement("h3");
    h3.textContent = nameValue;

    // Website
    const small = document.createElement("small");
    small.textContent = websiteValue;

    // PARAGRAPH
    const p = document.createElement("p");
    p.textContent = textAreaValue;

    li.append(h3);
    li.append(small);
    li.append(p);
    ul.append(li);

    // Clear inputs
    nameValue = "";
    websiteValue = ""; 
    textAreaValue = "";  



  }

  button.addEventListener("click", function () {
    addComment();
  });
};
