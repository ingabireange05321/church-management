function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

let postId = getUrlParameter("postuid");

db.collection("Events")
  .doc(postId)
  .get()
  .then(function (doc) {
    let html = "";

    const event = doc.data();

    html = `
    <div class="col-12">
    <div style="background-color: gray; height: 300px; background-image: url('${event.photo}');  
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    "></div>
    <h3>${event.title}</h3>
    <p>
    ${event.detail}
    </p>
  </div>
    `;
    document.querySelector("#event").innerHTML = html;
  });
