function login() {
  var uName = document.getElementById('username').value;
  var password = document.getElementById('password').value;

if (uName==password) {
  document.location.href="Navigation.htm";

  document.forms['loginForm'].reset();
}else {
  showAlert("Invalid username or password");

}

}

function showAlert(msg) {
  window.alert(msg);
}

function runScript(e) {
  if (e.keyCode==13) {
    login();
  }
}

function showDate() {
var d = new Date();

  document.getElementById('foot').innerHTML=d.toDateString();
}
