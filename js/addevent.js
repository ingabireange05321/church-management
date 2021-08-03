const events = document.querySelector("#eventsform");
const previewImage = events.querySelector(".img-preview");

let photo = "";

let functionphoto = document.querySelector("#inputfile");

functionphoto.addEventListener("change", function (input) {
  file = input.target.files[0];

  let path = window.URL.createObjectURL(file);

  document.querySelector(".img-preview").src = path;
  storage
    .ref("Photo")
    .child(file.name)
    .put(file)
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .then((link) => {
      // alert(link);
      photo = link;
      console.log("successfull Uploaded");
    });
});

events.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = events["title"].value;
  const detail = events["detail"].value;
  let inputcategory = document.getElementById("category");
  const category = inputcategory.options[inputcategory.selectedIndex].text;

  db.collection("Events")
    .add({
      title,
      detail,
      category,
      photo,
      date: new Date().getTime(),
    })
    .then((result) => {
      events.reset();
      alert("Successfull added");
    });
});
