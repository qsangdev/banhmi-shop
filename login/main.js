// SIGN UP

function signup(e) {
  let username = document.getElementById("username").value,
    email = document.getElementById("email").value,
    password = document.getElementById("password").value;
  passwordcomfirm = document.getElementById("password-comfirm").value;

  let userData = JSON.parse(localStorage.getItem("userData")) || [];

  let exist =
    userData.length &&
    JSON.parse(localStorage.getItem("userData")).some(
      (data) => data.username.toLowerCase() == username.toLowerCase()
    );

  if (
    username == "" ||
    email == "" ||
    password == "" ||
    passwordcomfirm == ""
  ) {
    alert("Vui lòng nhập đầy đủ thông tin đăng kí.");
  } else if (password != passwordcomfirm) {
    alert("Vui lòng nhập đúng mật khẩu xác nhận!");
  } else if (!exist) {
    userData.push({ username, email, password });
    localStorage.setItem("userData", JSON.stringify(userData));
    document.getElementById("username").focus();
    alert("Đăng kí thành công!");
    window.location.href = "/demo/login/login.html";
  } else {
    alert("Tài khoản đã tồn tại!");
  }
  event.preventDefault();
}

// LOG IN

function login(e) {
  let username = document.getElementById("username").value,
    email = document.getElementById("email").value,
    password = document.getElementById("password").value;

  let userData = JSON.parse(localStorage.getItem("userData")) || [];

  let exist =
    userData.length &&
    JSON.parse(localStorage.getItem("userData")).some(
      (data) =>
        data.email.toLowerCase() == email &&
        data.username.toLowerCase() == username &&
        data.password == password
    );
  if (username == "" || email == "" || password == "") {
    alert("Vui lòng nhập đầy đủ thông tin đăng nhập.");
  } else if (!exist) {
    alert("Thông tin sai hoặc tài khoản chưa được đăng kí.");
  } else {
    alert("Đăng nhập thành công!");
    window.location.href = "/demo/index.html";
  }
  event.preventDefault();
}

// function signup(e) {
//   event.preventDefault();
//   var username = document.getElementById("username").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//   var passwordcomfirm = document.getElementById("password-comfirm").value;

//   if (username == "" || email == "" || password == "") {
//     alert("Vui lòng nhập tên đăng kí và mật khẩu.");
//   } else if (
//     username == "" ||
//     email == "" ||
//     password == "" ||
//     password !== passwordcomfirm
//   ) {
//     alert("Vui lòng nhập đúng mật khẩu xác nhận!");
//   } else {
//     var user = {
//       username: username,
//       email: email,
//       password: password,
//     };
//     var json = JSON.stringify(user);
//     localStorage.setItem(username, json);
//     alert("Đăng kí thành công!");
//   }
// }
// function login(e) {
//   event.preventDefault();
//   var username = document.getElementById("username").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//   var user = localStorage.getItem(username);
//   var data = JSON.parse(user);
//   if (username == "" || email == "" || password == "") {
//     alert("Vui lòng nhập tên đăng nhập và mật khẩu.");
//   } else if (
//     username !== data.username ||
//     email !== data.email ||
//     password !== data.password
//   ) {
//     alert("Thông tin sai hoặc tài khoản chưa được đăng kí.");
//   } else {
//     alert("Đăng nhập thành công!");
//     window.location.href = "/demo/index.html";
//   }
// }
