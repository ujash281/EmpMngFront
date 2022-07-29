const url = "http://localhost:9091/api/auth/login";

window.onload = () => {
  if (localStorage.getItem("token")) window.location.href = "category.html";
  document.getElementById("login").onclick = () => {
    console.log("Hi");
    let username = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          window.location.href = "category.html";
        } else {
          document.getElementById("error").innerHTML = "Failed to Login.";
          document.getElementById("error").style = "color: red;";
        }
      })
      .catch((err) => {
        document.getElementById("error").innerHTML = "Failed to Login.";
        document.getElementById("error").style = "color: red;";
        console.log(err);
      });
  };
};
