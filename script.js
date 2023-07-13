let form = document.querySelector("form");
let icon = document.querySelector("#blogs .material-symbols-outlined");

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

  blogContainer.appendChild(blogTitle);
  blogContainer.appendChild(blogImage);
  blogContainer.appendChild(blogContent);
  blogContainer.appendChild(blogPublisher);
  blogContainer.appendChild(deleteButton);

  let blogs = document.querySelector("#blogs");
  let activeCard = null;

  blogContainer.addEventListener("click", view);
  deleteButton.addEventListener("click", deleteBlog);

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

  function deleteBlog() {
    blogs.removeChild(blogContainer);
    icon.classList.remove("cut-icon");
    if (activeCard === blogContainer) {
      activeCard = null;
    }
  }

  blogs.appendChild(blogContainer);

  form.reset();

  saveData(title, publisher, content, image);
});

icon.addEventListener("click", noview);

function noview() {
  let activeCard = document.querySelector(".expand");
  if (activeCard !== null) {
    activeCard.classList.remove("expand");
    activeCard.querySelector("p").classList.toggle("notexpand");
  }
  icon.classList.remove("cut-icon");
}

function saveData(title, publisher, content, image) {
  let blogsData = localStorage.getItem("blogsData");

  if (blogsData) {
    blogsData = JSON.parse(blogsData);
  } else {
    blogsData = [];
  }

  let blogData = {
    title: title,
    publisher: publisher,
    content: content,
    image: image,
  };

  blogsData.push(blogData);
  localStorage.setItem("blogsData", JSON.stringify(blogsData));
}

window.addEventListener("load", () => {
  let blogsData = localStorage.getItem("blogsData");

  if (blogsData) {
    blogsData = JSON.parse(blogsData);

    blogsData.forEach((blogData) => {
      let { title, publisher, content, image } = blogData;

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

      blogContainer.appendChild(blogTitle);
      blogContainer.appendChild(blogImage);
      blogContainer.appendChild(blogContent);
      blogContainer.appendChild(blogPublisher);
      blogContainer.appendChild(deleteButton);

      let blogs = document.querySelector("#blogs");
      let activeCard = null;

      blogContainer.addEventListener("click", view);
      deleteButton.addEventListener("click", deleteBlog);

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

      function deleteBlog() {
        blogs.removeChild(blogContainer);
        icon.classList.remove("cut-icon");
        if (activeCard === blogContainer) {
          activeCard = null;
        }
      }

      blogs.appendChild(blogContainer);
    });
  }
});
