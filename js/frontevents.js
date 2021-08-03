db.collection("Events").onSnapshot((docs) => {
  let html = "";
  docs.forEach((doc) => {
    const event = doc.data();
    const postId = doc.id;

    html += `
      <div class="col-12 col-md-4 col-sm-6">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="${event.photo}"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title"> ${event.title}</h5>
                    <p class="card-text">
                      ${event.detail.substring(0, 50) + "..."}
                    </p>
                    <button href="#" onclick="onePost('${postId}')" class="btn btn-outline-primary">Read more</button>
                    <small id="emailHelp" class="form-text text-muted"
                    >${new Date(event.date).toDateString()}</small
                  >
                  </div>
                
                </div>
                
              </div>
      `;
    document.querySelector(".Events").innerHTML = html;
  });
});

function deletePost(postId) {
  const result = confirm("Want to delete?");
  if (result) {
    db.collection("Events")
      .doc(postId)
      .delete()
      .catch((err) => {
        console.log(err);
      });
  }
}

function onePost(postId) {
  window.location.href = "readone.html?postuid=" + postId;
}
