let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let publisher = document.getElementById("publisher").value;
  let content = document.getElementById("content").value;
  let image = document.getElementById("image").value;

  content = content.replace(/\n/g, "<br>");

  let blogContainer = document.createElement("div");
  let blogTitle = document.createElement("h2");
  let blogPublisher = document.createElement("h4");
  let blogContent = document.createElement("p");
  let blogImage = document.createElement("img");
  let deleteButton = document.createElement("button");
  blogContent.classList.add("notexpand");

  blogTitle.textContent = title;
  blogContent.innerHTML = content;
  blogImage.src = image;
  blogPublisher.textContent = "By: " + publisher;
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", deleteBlog);

  blogContainer.appendChild(blogTitle);
  blogContainer.appendChild(blogImage);
  blogContainer.appendChild(blogContent);
  blogContainer.appendChild(blogPublisher);
  blogContainer.appendChild(deleteButton);

  let blogs = document.querySelector("#blogs");

  let icon = document.querySelector("span.material-symbols-outlined");
  let activeCard = null;

  blogContainer.addEventListener("click", view);

  icon.addEventListener("click", noview);

  function view() {
    if (activeCard !== null) {
      activeCard.classList.remove("expand");
      blogContent.classList.toggle("notexpand");
    }
    this.classList.add("expand");
    blogContent.classList.toggle("notexpand");
    icon.classList.add("cut-icon");
    activeCard = this;
  }

  function noview() {
    if (activeCard !== null) {
      activeCard.classList.remove("expand");
      blogContent.classList.toggle("notexpand");
      activeCard = null;
    }
    icon.classList.remove("cut-icon");
  }

  function deleteBlog() {
    blogs.removeChild(blogContainer);
    icon.classList.remove("cut-icon");
  }

  blogs.appendChild(blogContainer);

  form.reset();
});
