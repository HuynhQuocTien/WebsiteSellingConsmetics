// let Accounts = localStorage.getItem('Accounts') ? JSON.parse(localStorage.getItem('Accounts')) : [];
document.getElementById("login-btn").onclick = function () {
    document.getElementById('login').innerHTML= `
    <div class="background-color-login" id="background-color-login">
        <div class="background-login" id="background-login">
      <form id="signup_form" class="form" method="POST">
          <div class="heading">
          <a href="TrangChu.html">
              <img src="img/LOGO.png" alt="Trang chủ ICY"
                   style="border-radius: 100px; ; max-block-size: 7rem; margin: 30px auto 20px 40px;" title="Trang chủ ICY">
          </a>
              <div class="heading-space"></div>
          <h1 >Đăng nhập</h1>
          <hr>
          </div>
        <div  class="txt_field">
          <input onblur="usernameCheck()" id="username" type="text" required>
          <span></span>
          <label for="username">Tên đăng nhập</label>
        </div>
        <span id="username-err"></span>
         <div class="txt_field">
          <input onblur="passCheck()" id="password" type="password" name="password" required>
          <span></span>
          <label for="password">Mật khẩu</label>
        </div>
        <span id="password-err"></span>
        <span id="incorectPass"></span>
      </form>
      <a class="forget-pass" href="">Quên mật khẩu</a>
      <input onclick="signinCheck()" type="submit" value="Đăng nhập">
        <div class="signup_link">
          Chưa có tài khoản? <a href="signup.html">Đăng ký</a>
        </div>
     </div>
    </div>
`
    let UnDo = document.getElementById("background-color-login");
    UnDo.onclick = function(e) {
        if (e.target.matches("#background-color-login")) {
            UnDo.remove();
        }
    }
}