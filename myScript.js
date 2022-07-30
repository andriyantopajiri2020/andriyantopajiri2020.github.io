var contentLogin = '<div class="content card">';
contentLogin +=
  '<div class="card-header bg-primary text-white">Halaman Login</div>';
contentLogin += '<div class="card-body">';
contentLogin += "<center>";
contentLogin += '<h6 class="card-title">';
contentLogin += "Masukkan Informasi Login Anda</h6></center>";
contentLogin += "<form>";
contentLogin += '<div class="mb-2 row">';
contentLogin += '<div class="input-contet col-12">';
contentLogin +=
  '<input type="text"class="form-control rounded-pill"id="username" placeholder="username" />';
contentLogin +=
  '<span id="user-alert" class="text-alert text-primary"></span></div></div>';
contentLogin += '<div class="mb-2 row">';
contentLogin += '<div class="input-contet col-12">';
contentLogin +=
  '<input type="password" class="form-control rounded-pill" id="password" placeholder="password" />';
contentLogin +=
  '<span id="pass-alert" class="text-alert text-primary"></span></div></div>';
contentLogin += '<div class="row">';
contentLogin += '<div class="col-12">';
contentLogin +=
  '<button type="button" onclick="submitLogin()" class="btn btn-primary rounded-pill btn-login">LOGIN</button>';
contentLogin += "</div></div></form></div></div></div>";

$("#body").html(contentLogin);
$("#username").focus();

function submitLogin() {
  // UserData untuk data login terdiri dari 6 users
  var usersData = [
    {
      nickname: "Miftakhul Khoirul Anam",
      username: "anam",
      password: "1234",
    },
    {
      nickname: "Andriyanto Pajiri",
      username: "andry",
      password: "2143",
    },
    {
      nickname: "Serlin S. Ahmad",
      username: "serlin",
      password: "4321",
    },
    {
      nickname: "Beyby Dewi Wulandari Korban",
      username: "bey",
      password: "3214",
    },
    {
      nickname: "Abdul Rasyid Rauf",
      username: "rasyid",
      password: "1423",
    },
    {
      nickname: "Arfian Widya Mukti",
      username: "widya",
      password: "2341",
    },
  ];

  // usernameInput dan passwordInput mengambil isi yg diinputkan user
  var usernameInput = $("#username").val();
  var passwordInput = $("#password").val();

  // Fungsi untuk mengecek kecocokan dari user input dan user data
  function checkUsers(data) {
    return data.username === usernameInput;
  }

  if (usernameInput == "") {
    // Feedback jika user input kosong
    $("#user-alert").html("Username tidak boleh kosong!");
    $("#username").focus();
  } else {
    if (usersData.find(checkUsers)) {
      console.log(usersData.find(checkUsers));
      // Feedback jika user input tidak kosong
      $("#user-alert").html("");

      if (passwordInput == "") {
        // Feedback jika password input kosong
        $("#pass-alert").html("Password tidak boleh kosong!");
        $("#password").focus();
      } else {
        // Feedback jika password input tidak kosong
        if (usersData.find(checkUsers).password != passwordInput) {
          // Feedback jika password input tidak cocok dengan password data
          $("#pass-alert").html("Password tidak cocok!");
          $("#password").focus();
        } else {
          // Feedback jika password input cocok dengan password data (Berhasil login)
          $("#pass-alert").html("");
          $(".body").html(
            '<center><h3 style="margin-top:60px">Selamat datang &nbsp;<span class="text-primary"><i><u>' +
              usersData.find(checkUsers).nickname +
              "</u></i></span></h3></center>"
          );

          $("#body").removeClass("body");

          $("#btn-nav").html(
            '<button onclick="logOut()" class="btn btn-info text-white rounded-pill" type="button">KELUAR</button>'
          );
        }
      }
    } else {
      // Feedback jika user input tidak cocok dengan user data
      $("#user-alert").html("Username tidak cocok!");
      $("#username").focus();
    }
  }
}

// Fungsi logout/keluar
function logOut() {
  var logout = confirm("Apakah yakin akan keluar?");
  if (logout) {
    alert("Anda telah keluar.");
    $("#btn-nav").html(
      '<button class="btn btn-info text-white rounded-pill" type="button">DAFTAR</button>'
    );
    $("#body").addClass("body");
    $("#body").html(contentLogin);
  } else {
    alert("Anda masih di halaman ini.");
  }
}
