document.addEventListener("DOMContentLoaded", () => {
  const tabintroduce = document.getElementById("introduce");
  const tabProductdetails = document.getElementById("Product-details");
  const contentintroduce = document.getElementById("introduce-tab");
  const contentProductdetails = document.getElementById("Product-details-tab");

  function setActiveTab(tab) {
    // Bỏ lớp "active" khỏi tất cả các tab và ẩn nội dung của cả hai tab
    tabintroduce.classList.remove("Product-detail");
    tabProductdetails.classList.remove("Product-detail");

    contentintroduce.style.display = "none";
    contentProductdetails.style.display = "none";

    // Thêm lớp "active" cho tab được chọn và hiển thị nội dung của tab đó
    if (tab === "introduce") {
      tabintroduce.classList.add("Product-detail");
      contentintroduce.style.display = "block";
    } else if (tab === "Product-details") {
      tabProductdetails.classList.add("Product-detail");
      contentProductdetails.style.display = "block";
    }
  }

  // Thêm sự kiện cho các tab để kích hoạt nội dung
  tabintroduce.addEventListener("click", () => setActiveTab("introduce"));
  tabProductdetails.addEventListener("click", () =>
    setActiveTab("Product-details")
  );

  // Khởi tạo tab "introduce" làm mặc định
  setActiveTab("introduce");
});
// Hiệu ứng nhấn vào kích cỡ sản phẩm
const sizeButtons = document.querySelectorAll(".button-sizes span");

sizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Bỏ chọn tất cả các kích cỡ khác
    sizeButtons.forEach((btn) => btn.classList.remove("selected"));
    // Chọn kích cỡ hiện tại
    button.classList.add("selected");
  });
});

// Thêm thông báo khi nhấn "Thêm giỏ hàng" và "Thích"
const addToCartButton = document.querySelector(".add");
const likeButton = document.querySelector(".like");

addToCartButton.addEventListener("click", () => {
  alert("Sản phẩm đã được thêm vào giỏ hàng!");
});

likeButton.addEventListener("click", () => {
  const heartIcon = likeButton.querySelector("span");
  // Đổi trạng thái "Thích"
  if (heartIcon.textContent === "♡") {
    heartIcon.textContent = "❤️";
  } else {
    heartIcon.textContent = "♡";
  }
});
sizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Bỏ chọn tất cả các kích cỡ khác
    sizeButtons.forEach((btn) => btn.classList.remove("selected"));
    // Chọn kích cỡ hiện tại và giữ nền đen
    button.classList.add("selected");
  });
});
