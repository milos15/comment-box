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
      alert("Please fill out the required fields");
      return;
    }

    // Comment Post
    ul.classList.add("comments");

    const li = document.createElement("li");
    li.classList.add("comment");

    // H3
    const h3 = document.createElement("h3");
    h3.textContent = nameValue;

    // Website
    const small = document.createElement("small");
    small.textContent = websiteValue;

    // Paragraph
    const p = document.createElement("p");
    p.textContent = textAreaValue;

    // Reply
    const replyBtn = document.createElement("button");
    replyBtn.textContent = "Reply";
    replyBtn.classList.add("reply-btn");

    replyBtn.addEventListener("click", function () {
      // Remove reply Button because the user will click the new submit button bellow
      replyBtn.style.display = "none";

      // Reply container
      const replyContainer = document.createElement("div");
      replyContainer.classList.add("reply-container");

      // Input Name
      const replyName = document.createElement("input");
      replyName.placeholder = "Enter Your Name";
      replyName.classList.add("reply-name");

      // Textarea Reply
      const replyTextarea = document.createElement("textarea");
      replyTextarea.placeholder = "Enter Your Reply";
      replyTextarea.classList.add("reply-textarea");

      // Submit comment
      const submitComment = document.createElement("button");
      submitComment.textContent = "Submit";
      submitComment.classList.add("submit-comment");

      submitComment.addEventListener("click", function () {
        const replyNameValue = replyName.value;
        const replyTextAreaValue = replyTextarea.value;

        if (!replyNameValue || !replyTextAreaValue) {
          alert("Please fill out the reply fields");
          return;
        }

        const reply = document.createElement("div");
        reply.classList.add("reply");

        const replyAuthor = document.createElement("h4");
        replyAuthor.textContent = replyNameValue;

        const replyContent = document.createElement("p");
        replyContent.textContent = replyTextAreaValue;

        reply.append(replyAuthor, replyContent);
        replyContainer.append(reply);

        replyName.remove();
        replyTextarea.remove();
        submitComment.remove();
      });

      replyContainer.append(replyName);
      replyContainer.append(replyTextarea);
      replyContainer.append(submitComment);

      li.append(replyContainer);
    });

    // Comment
    li.append(h3);
    li.append(small);
    li.append(p);
    li.append(replyBtn);

    ul.append(li);

    // Clear inputs
    name.value = "";
    website.value = "";
    textArea.value = "";
  }

  button.addEventListener("click", function () {
    addComment();
  });
};
