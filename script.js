let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let publisher = document.getElementById("publisher").value;

  let content = document.getElementById("content").value;
  let image = document.getElementById("image").value;

  let blogContainer = document.createElement("div");
  let blogTitle = document.createElement("h2");
  let blogpublisher = document.createElement("h4");
  let blogContent = document.createElement("p");
  let blogImage = document.createElement("img");
  blogContent.classList.add("notexpand");

  blogTitle.textContent = title;
  blogContent.textContent = content;
  blogImage.src = image;
  blogpublisher.textContent = "By: " + publisher;

  blogContainer.appendChild(blogTitle);
  blogContainer.appendChild(blogImage);

  blogContainer.appendChild(blogContent);
  blogContainer.appendChild(blogpublisher);

  let blogs = document.querySelector("#blogs");
  blogContainer.classList.toggle("abc");

  blogs.appendChild(blogContainer);

  form.reset();
});
let cards = document.querySelectorAll("#blogs div");
let icon = document.querySelector(".material-symbols-outlined");
let blogContent = document.querySelectorAll("#blogs p");
let activeCard = null;

cards.forEach((card) => {
  card.addEventListener("click", view);
});

icon.addEventListener("click", noview);

function view() {
  if (activeCard !== null) {
    activeCard.classList.remove("expand");
    blogContent.forEach((p) => {
      p.classList.toggle("notexpand");
    });
  }
  this.classList.add("expand");
  blogContent.forEach((p) => {
    p.classList.toggle("notexpand");
  });
  icon.classList.add("cut-icon");
  activeCard = this;
}

function noview() {
  if (activeCard !== null) {
    activeCard.classList.remove("expand");
    blogContent.forEach((p) => {
      p.classList.toggle("notexpand");
    });
    activeCard = null;
  }
  icon.classList.remove("cut-icon");
}
