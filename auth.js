const url = "http://localhost:9091/getAllCategories";

window.onload = () => {
  if (!localStorage.getItem("token")) window.location.href = "index.html";
  else {
    let token = localStorage.getItem("token");
    fetch(url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Authorization": "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("My data", data);
      });
  }
  document.getElementById("logout").onclick = () => {
    localStorage.clear();
    window.location.href = "index.html";
  };
};
