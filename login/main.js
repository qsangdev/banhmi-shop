function signup(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var passwordcomfirm = document.getElementById("password-comfirm").value;

  if (username == "" || email == "" || password == "") {
    alert("Vui lòng nhập tên đăng kí và mật khẩu.");
  } else if (
    username == "" ||
    email == "" ||
    password == "" ||
    password !== passwordcomfirm
  ) {
    alert("Vui lòng nhập đúng mật khẩu xác nhận!");
  } else {
    var user = {
      username: username,
      email: email,
      password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Đăng kí thành công!");
  }
}
function login(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var user = localStorage.getItem(username);
  var data = JSON.parse(user);

  // console.log();

  if (username == "" || email == "" || password == "") {
    alert("Vui lòng nhập tên đăng nhập và mật khẩu.");
  } else if (
    username == data.username ||
    email == data.email ||
    password == data.password
  ) {
    alert("Đăng nhập thành công!");
    window.location.href = "/demo/index.html";
  } else {
    alert("Thông tin sai hoặc tài khoản chưa được đăng kí.");
  }
}
