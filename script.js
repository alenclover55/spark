// const languageSelect = new Choices(".language-select", {
//   searchEnabled: false,
//   placeholder: true,
//   itemSelectText: "",
// });
// const currencySelect = new Choices(".currency-select", {
//   searchEnabled: false,
//   placeholder: true,
//   placeholderValue: "Выберите опцию",
//   itemSelectText: "",
//   classNames: {
//     button: ["choices__button"],
//   },
// });

$(document).ready(function () {
  $("#menuBody").hide();
  $("#menuDropdown").click(function () {
    $("#menuBody").toggle();
    $(".dropdown-wrapper").toggleClass("active");
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".dropdown-wrapper").length) {
      $("#menuBody").hide();
      $(".dropdown-wrapper").removeClass("active");
    }
  });

  $("#menuBody li").click(function () {
    const selectedValue = $(this).text();
    const selectedId = $(this).attr("tab-id");
    $(".menu-value").text(selectedValue);
    $("#menuBody").hide();
    $(".dropdown-wrapper").removeClass("active");
    $(".referal-tab").removeClass("active");
    $("#" + selectedId).addClass("active");
  });
});

const tabs = document.querySelectorAll(".referals-menu button");

const referalTabs = document.querySelectorAll(".referal-tab");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));

    tab.classList.add("active");

    referalTabs.forEach((t) => t.classList.remove("active"));

    referalTabs[index].classList.add("active");
  });
});

// document.querySelector(".menu-dropdown").addEventListener("click", () => {
//   document.querySelector(".menu-body").classList.toggle("active");
// });

document.querySelectorAll(".menu-body li").forEach((item, index) => {
  item.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));

    tabs[index].classList.add("active");

    referalTabs.forEach((t) => t.classList.remove("active"));

    referalTabs[index].classList.add("active");

    document.querySelector(".menu-body").classList.remove("active");
  });
});

$(".menu-open-btn").click(() => {
  $(".sidebar").toggleClass("active");
});

$(document).ready(function () {
  $(".currency-select-item").on("click", function () {
    const currency = $(this).data("currency");
    const imageSrc = $(this).data("image");
    const value = $(this).find("p").text().trim();

    $(".currency-field input").val(value);

    $(".currency-field svg").replaceWith(
      `<img src="${imageSrc}" alt="${currency}" class="currency-icon" />`
    );

    $(".currency-select-list").hide();
  });

  $(".dropdown-icon").on("click", function () {
    $(".dropdown-icon").toggleClass("rotated-180");
    $(".currency-select-list").fadeToggle();
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".currency-field, .currency-select-list").length) {
      $(".currency-select-list").hide();
    }
  });
});

$(".profile-menu-btn").click(() => {
  $(".profile-menu-wrapper").fadeToggle();
});

$(document).ready(function () {
  const $languageSelect = $(".language-select");
  const $languageSelectHeader = $(".language-select-header");
  const $languageSelectInput = $languageSelect.find("input");
  const $languageSelectWrapper = $languageSelect.find(
    ".language-select-wrapper"
  );
  const $languageItems = $languageSelect.find(".language-select-item");

  $languageSelectHeader.on("click", function (e) {
    e.stopPropagation();
    $languageSelectWrapper.fadeToggle();
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".language-select").length) {
      $languageSelectWrapper.hide();
    }
  });

  $languageItems.on("click", function () {
    const selectedLanguage = $(this).text();
    $languageSelectInput.val(selectedLanguage);
    $languageSelectWrapper.hide();
  });
});

$(document).ready(function () {
  const $currencySelect = $(".currency-select");
  const $currencySelectHeader = $(".currency-select-header");
  const $currencySelectInput = $currencySelect.find("input");
  const $currencySelectWrapper = $currencySelect.find(
    ".currency-select-wrapper"
  );
  const $currencyItems = $currencySelect.find(".currency-select-item");

  $currencySelectHeader.on("click", function (e) {
    e.stopPropagation();
    $currencySelectWrapper.fadeToggle();
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".currency-select").length) {
      $currencySelectWrapper.hide();
    }
  });

  $currencyItems.on("click", function () {
    const selectedCurrency = $(this).text();
    $currencySelectInput.val(selectedCurrency);
    $currencySelectWrapper.hide();
  });
});

const menuItems = document.querySelectorAll(".selectable-menu-item");
const vipTabs = document.querySelectorAll(".vip-tabs");

// Add event listeners to the menu items
menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener("click", () => {
    // Remove the active class from all menu items
    menuItems.forEach((item) => item.classList.remove("active"));

    // Add the active class to the clicked menu item
    menuItem.classList.add("active");

    // Hide all tabs
    vipTabs.forEach((tab) => tab.classList.remove("active"));

    // Show the corresponding tab
    vipTabs[index].classList.add("active");
  });
});

$(document).ready(function () {
  // Показываем ручной режим при загрузке страницы
  $(".hand-mode").fadeIn();

  $(".game-mode-btn").click(function () {
    // Убираем активный класс у всех кнопок
    $(".game-mode-btn").removeClass("active");
    // Добавляем активный класс к нажатой кнопке
    $(this).addClass("active");

    // Получаем режим из атрибута data-mode
    var mode = $(this).data("mode");

    // Анимация переключения режимов
    if (mode === "hand") {
      $(".auto-mode").fadeOut(function () {
        $(".hand-mode").fadeIn();
      });
    } else if (mode === "auto") {
      $(".hand-mode").fadeOut(function () {
        $(".auto-mode").fadeIn();
      });
    }
  });
});
$(document).ready(function () {
  $(".select-header").click(function () {
    $(".select-body").fadeToggle();
  });

  $(".select-body li").click(function () {
    var selectedValue = $(this).text();
    $(".select-header input").val(selectedValue);
    $(".select-body").hide();
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".select-block").length) {
      $(".select-body").hide();
    }
  });
});

$(document).ready(function () {
  // Обработчик клика на заголовок
  $(".wallet-select-header").on("click", function (e) {
    e.stopPropagation(); // Предотвращаем всплытие события
    const $walletSelectBody = $(this).siblings(".wallet-select-body");
    if ($walletSelectBody.is(":visible")) {
      $walletSelectBody.fadeOut();
    } else {
      $walletSelectBody.fadeIn();
    }
  });

  // Обработчик клика на элемент списка
  $(".wallet-select-item").on("click", function () {
    const selectedValue = $(this).data("value");
    const selectedText = $(this).find("h3").text();
    const selectedSubtext = $(this).find("p").text();
    const selectedIcon = $(this).find("img").attr("src");

    // Обновляем заголовок
    $(".wallet-select-header .left-group img").attr("src", selectedIcon);
    $(".wallet-select-header .left-group h3").text(selectedText);
    $(".wallet-select-header .left-group p").text(selectedSubtext);

    // Закрываем выпадающий список
    $(this).closest(".wallet-select-body").fadeOut();
  });

  // Закрытие выпадающего списка при клике вне его области
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".wallet-select").length) {
      $(".wallet-select-body").fadeOut();
    }
  });
});
function showPopup(selector) {
  $(".modal-layout").fadeIn();
  $(selector).fadeIn();
}

$(".close-btn").click(() => {
  $(".modal-layout").fadeOut();
  $(".popup").fadeOut();
});
$("#wallet-btn").click((e) => {
  e.preventDefault();
  showPopup(".wallet-modal");
});

$("#deposite-btn").click((e) => {
  e.preventDefault();
  $(".modal-layout").fadeOut();
  $(".popup").fadeOut();
  showPopup(".deposite-modal");
});

$("#withdraw-btn").click((e) => {
  e.preventDefault();
  $(".modal-layout").fadeOut();
  $(".popup").fadeOut();
  showPopup(".withdraw-modal");
});

$("#transfer-btn").click((e) => {
  e.preventDefault();
  $(".modal-layout").fadeOut();
  $(".popup").fadeOut();
  showPopup(".transfer-modal");
});
$(".mobile-menu-btn").click((e) => {
  $(".menu-opened").fadeToggle();
});
$("#deposite-btn").click((e) => {
  e.preventDefault();
  $(".modal-layout").fadeOut();
  $(".popup").fadeOut();
  showPopup(".deposite-modal");
});
