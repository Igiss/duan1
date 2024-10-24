document.addEventListener("DOMContentLoaded", () => {
  const tabModa = document.getElementById("tab-ivy-moda-NEWARRIVAL");
  const tabMen = document.getElementById("tab-ivy-men-NEWARRIVAL");
  const contentModa = document.getElementById("content-ivy-moda-NEWARRIVAL");
  const contentMen = document.getElementById("content-ivy-men-NEWARRIVAL");

  function setActiveTab(tab) {
    tabModa.classList.remove("tab-active-arrival-tab");
    tabMen.classList.remove("tab-active-arrival-tab");

    contentModa.style.display = "none";
    contentMen.style.display = "none";

    if (tab === "IVY moda") {
      tabModa.classList.add("tab-active-arrival-tab");
      contentModa.style.display = "block";
    } else if (tab === "IVY men") {
      tabMen.classList.add("tab-active-arrival-tab");
      contentMen.style.display = "block";
    }
  }

  tabModa.addEventListener("click", () => setActiveTab("IVY moda"));
  tabMen.addEventListener("click", () => setActiveTab("IVY men"));

  setActiveTab("IVY moda"); // Khởi tạo với IVY moda là tab mặc định
});

document.addEventListener("DOMContentLoaded", () => {
  const tabModa = document.getElementById("tab-ivy-moda-FALL");
  const tabMen = document.getElementById("tab-ivy-men-FALL");
  const contentModa = document.getElementById("content-ivy-moda-FALL");
  const contentMen = document.getElementById("content-ivy-men-FALL");

  function setActiveTab(tab) {
    tabModa.classList.remove("tab-active-arrival-tab");
    tabMen.classList.remove("tab-active-arrival-tab");

    contentModa.style.display = "none";
    contentMen.style.display = "none";

    if (tab === "IVY moda") {
      tabModa.classList.add("tab-active-arrival-tab");
      contentModa.style.display = "block";
    } else if (tab === "IVY men") {
      tabMen.classList.add("tab-active-arrival-tab");
      contentMen.style.display = "block";
    }
  }

  tabModa.addEventListener("click", () => setActiveTab("IVY moda"));
  tabMen.addEventListener("click", () => setActiveTab("IVY men"));

  setActiveTab("IVY moda"); // Khởi tạo với IVY moda là tab mặc định
});
