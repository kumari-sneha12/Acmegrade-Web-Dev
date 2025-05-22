const IMDB = [
  { name: "Thor", lead: "Thor", collection: "90" },
  { name: "Hulk", lead: "Banner", collection: "95" },
  { name: "DR. Strange", lead: "Strange", collection: "100" },
  { name: "Superman", lead: "Kent Clerk", collection: "120" },
  { name: "Iron Man", lead: "Tony Junior", collection: "130" },
];

const movieContainerRef = document.getElementById("movieContainer");

// form section
const nameObj = document.getElementById("name");
const leadObj = document.getElementById("lead");
const collectionObj = document.getElementById("collection");
const formBtn = document.querySelector("#addmovie");
const errorBox = document.querySelector(".error-box");

// pop-up section
const overlay = document.getElementById("overlay");
const popUp = document.querySelector(".pop-up-container");
const popUpCloseBtn = document.querySelector(".close-btn-container");

// edit form
const editMovieName = document.querySelector(".edit-movie-name");
const editLeadRole = document.querySelector(".edit-lead-role");
const editTotalCollection = document.querySelector(".edit-total-collections");

// edit form btn
const editFormSubmitBtn = document.querySelector(".edit-form-submit");
const editFormCancelBtn = document.querySelector(".edit-form-cancel");
const editFormErrorBox = document.querySelector(".edit-from-error");

// main area
function renderMovie() {
  movieContainerRef.innerHTML = "";

  if (IMDB.length > 1) {
    IMDB.map((movie, idx) => {
      movieContainerRef.innerHTML += `
    <div class="movieParent">
      <section class="head"></section>
      <section class="body">
        <p class="name">${movie.name}</p>
        <p class="lead">${movie.lead}</p>
        <p class="collection">$${movie.collection} M</p>
      </section>
      <section class="action">
        <button class="actionBtn" onClick="editCard(${idx})">
          Edit
        </button>
        <button class="actionBtn" onClick="deleteMovie(${idx})">
          Delete
        </button>
      </section>
    </div>

            `;
    });
  } else {
    movieContainerRef.innerHTML = "Data not available";
  }
}

function deleteMovie(index) {
  userSelection = confirm(`are u sure want to delete '${IMDB[index].name}'?`);
  if (userSelection) {
    IMDB.splice(index, 1);
    renderMovie();
  }
}

function addNewMovie() {
  if (nameObj.value && leadObj.value && collectionObj.value) {
    const newMovie = {
      name: nameObj.value,
      lead: leadObj.value,
      collection: collectionObj.value,
    };
    IMDB.unshift(newMovie);
    // clear form
    nameObj.value = "";
    leadObj.value = "";
    collectionObj.value = "";
    renderMovie();
  } else {
    errorBox.style.display = "block";
    errorBox.textContent = "All fields are required!";
  }
}

let currentEditIndex = null;

const editCard = (idx) => {
  currentEditIndex = idx;
  overlay.classList.add("active");
  popUp.style.display = "block";
  editMovieName.value = IMDB[idx].name;
  editLeadRole.value = IMDB[idx].lead;
  editTotalCollection.value = IMDB[idx].collection;
};

editFormSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    editMovieName.value &&
    editLeadRole.value &&
    editTotalCollection.value
  ) {
    IMDB[currentEditIndex] = {
      name: editMovieName.value,
      lead: editLeadRole.value,
      collection: editTotalCollection.value,
    };
    popUp.style.display = "none";
    overlay.classList.remove("active");
    renderMovie();
  } else {
    editFormErrorBox.style.display = "block";
    editFormErrorBox.textContent = `All fields are required!`;
  }
});

editFormCancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  editMovieName.value = "";
  editLeadRole.value = "";
  editTotalCollection.value = "";
});


formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addNewMovie();
});

popUpCloseBtn.addEventListener("click", () => {
  popUp.style.display = "none";
  overlay.classList.remove("active");
});

overlay.addEventListener("click", (e) => {
  if (!popUp.contains(e.target)) {
    popUp.style.display = "none";
    overlay.classList.remove("active");
  }
});

renderMovie();
