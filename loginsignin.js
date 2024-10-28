function handleSignup(event) {
  event.preventDefault(); // Ngăn form submit mặc định

  // Lấy giá trị của các input trong form signup
  const email = document.querySelector('.signup input[type="email"]').value;
  const username = document.querySelector('.signup input[type="text"]').value;
  const password = document.querySelector(
    '.signup input[type="password"]'
  ).value;

  // Kiểm tra xem các giá trị có trống không
  if (!email || !username || !password) {
    alert("Vui lòng điền đầy đủ thông tin (Email, Username, Password).");
    return;
  }

  // Kiểm tra email có hợp lệ không
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Vui lòng nhập một email hợp lệ.");
    return;
  }

  if (password.length < 6) {
    alert("Mật khẩu phải có ít nhất 6 ký tự.");
    return;
  }

  // Kiểm tra độ phức tạp của mật khẩu (tùy chọn)
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!passwordRegex.test(password)) {
    alert("Mật khẩu phải bao gồm cả chữ cái và số.");
    return;
  }

  // Nếu hợp lệ thì xử lý đăng ký (ở đây chỉ là ví dụ)
  alert(`Đăng ký thành công!\nEmail: ${email}\nUsername: ${username}`);
}

// Function to handle login
function handleLogin(event) {
  event.preventDefault(); // Ngăn form submit mặc định

  // Lấy giá trị của các input trong form login
  const username = document.querySelector('.login input[type="text"]').value;
  const password = document.querySelector(
    '.login input[type="password"]'
  ).value;

  // Kiểm tra xem username và password có trống không
  if (!username || !password) {
    alert("Vui lòng nhập cả Username và Password để đăng nhập.");
    return;
  }

  if (password.length < 6) {
    alert("Mật khẩu phải có ít nhất 6 ký tự.");
    return;
  }

  // Kiểm tra độ phức tạp của mật khẩu (tùy chọn)
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!passwordRegex.test(password)) {
    alert("Mật khẩu phải bao gồm cả chữ cái và số.");
    return;
  }

  // Nếu hợp lệ thì xử lý đăng nhập (ở đây chỉ là ví dụ)
  alert(`Đăng nhập thành công!\nUsername: ${username}`);
}

// Gắn sự kiện click vào nút Signup
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".signup button").addEventListener("click", handleSignup);
  
// Gắn sự kiện click vào nút Login
document.querySelector(".login button").addEventListener("click", handleLogin);
