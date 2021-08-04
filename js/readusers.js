let catUser = sessionStorage.getItem("category");

if (catUser === "admin") {
  db.collection("Users").onSnapshot((docs) => {
    let htmlAll = "";

    let childCounts = docs.size;

    let t = 0;
    let i = childCounts + 1;
    docs.forEach((doc) => {
      const user = doc.data();
      const uid = doc.id;

      if (t == 0) {
        htmlAll = "";
      }
      t++;
      i--;
      let html = "";
      html = `
    <tr>
    <th scope="row">${i}</th>
    <td>${user.fullname}</td>
    <td>${user.email}</td>
    <td>${user.category}</td>
    <td class="text-center">
      <a href="#" onclick="deleteUser('${uid}')"><i class="fas fa-trash-alt text-danger"></i></a>
    </td>
  </tr>
        
        `;
      htmlAll = html + htmlAll;
      if (t == childCounts) {
        document.querySelector("#users").innerHTML = htmlAll;
      }
    });
  });
} else {
  db.collection("Users")
    .where("category", "==", catUser)
    .onSnapshot((docs) => {
      let htmlAll = "";

      let childCounts = docs.size;

      let t = 0;
      let i = childCounts + 1;
      docs.forEach((doc) => {
        const user = doc.data();
        const uid = doc.id;

        if (t == 0) {
          htmlAll = "";
        }
        t++;
        i--;
        let html = "";
        html = `
    <tr>
    <th scope="row">${i}</th>
    <td>${user.fullname}</td>
    <td>${user.email}</td>
    <td>${user.category}</td>
  </tr>
        
        `;
        htmlAll = html + htmlAll;
        if (t == childCounts) {
          document.querySelector("#users").innerHTML = htmlAll;
        }
      });
    });
}

function deleteUser(uid) {
  const result = confirm("Want to delete?");
  if (result) {
    db.collection("Users")
      .doc(uid)
      .delete()
      .catch((err) => {
        console.log(err);
      });
  }
}
