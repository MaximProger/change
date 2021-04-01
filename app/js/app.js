document.addEventListener("DOMContentLoaded", function () {
  // Поиск родителя
  function findAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
  }

  // Селект
  function closeSelects() {
    const selects = document.querySelectorAll(".exchange__select");
    selects.forEach((select) => {
      select.classList.remove("exchange__select--active");
    });
  }

  const selectsHead = document.querySelectorAll(".exchange__select__head");
  if (selectsHead) {
    selectsHead.forEach((selectHead) => {
      selectHead.addEventListener("click", () => {
        const currSelect = selectHead.parentNode;

        if (currSelect.classList.contains("exchange__select--active")) {
          currSelect.classList.remove("exchange__select--active");
        } else {
          closeSelects();
          currSelect.classList.add("exchange__select--active");
        }
      });
    });
  }

  if (selectsHead) {
    document.onclick = function (evt) {
      if (
        evt.target.className != "exchange__select" &&
        !findAncestor(evt.target, "exchange__select")
      ) {
        closeSelects();
      }
    };
  }

  const selectItems = document.querySelectorAll(".exchange__select__item");
  if (selectItems) {
    selectItems.forEach((selectItem) => {
      selectItem.addEventListener("click", () => {
        const currSelect = findAncestor(selectItem, "exchange__select");
        const currSelectTitle = currSelect.querySelector(
          ".exchange__select__title"
        );
        currSelectTitle.innerHTML = selectItem.innerHTML;
        currSelect.classList.remove("exchange__select--active");
      });
    });
  }

  const openSelect = document.querySelector("#openSelect");
  if (openSelect) {
    openSelect.addEventListener("click", (evt) => {
      evt.preventDefault();
      openSelect.parentNode.classList.toggle("exchange__inner__choose--active");
    });
  }

  // News List Slider
  if (document.querySelector("#newsListSlider")) {
    new Glider(document.querySelector("#newsListSlider"), {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      dots: false,
      arrows: {
        prev: ".news__list__arrow--prev",
        next: ".news__list__arrow--next",
      },
    });
  }

  // Фильтр
  const filterBtn = document.querySelector("#openFilter");
  if (filterBtn) {
    filterBtn.addEventListener("click", (evt) => {
      evt.preventDefault();

      filterBtn.classList.toggle("tabs__btn--filter--active");

      const tabsFilter = document.querySelector(".tabs__filter");
      slideToggle(tabsFilter, 500);
    });
  }

  // Трейд избранное
  const tradeFaivoriteBtns = document.querySelectorAll(
    ".trade__body__item__btn--faivorite"
  );
  if (tradeFaivoriteBtns) {
    tradeFaivoriteBtns.forEach((tradeFaivoriteBtn) => {
      tradeFaivoriteBtn.addEventListener("click", (evt) => {
        evt.preventDefault();
        tradeFaivoriteBtn.classList.toggle(
          "trade__body__item__btn--faivorite--active"
        );
      });
    });
  }

  // Трейд Инфо
  const tradePopups = document.querySelectorAll(".trade__popup");
  const tradeInfoBtns = document.querySelectorAll(
    ".trade__body__item__btn--info"
  );

  function closeTrades() {
    tradePopups.forEach((tradePopup) => {
      tradePopup.classList.remove("trade__popup--active");
    });

    tradeInfoBtns.forEach((tradeInfoBtn) => {
      tradeInfoBtn.classList.remove("trade__body__item__btn--info--active");
    });
  }

  if (tradeInfoBtns) {
    tradeInfoBtns.forEach((tradeInfoBtn) => {
      tradeInfoBtn.addEventListener("click", (evt) => {
        evt.preventDefault();

        const currTradeItem = findAncestor(
          tradeInfoBtn,
          "trade__body__item--exchanger"
        );
        const currPopup = currTradeItem.querySelector(".trade__popup");

        if (
          tradeInfoBtn.classList.contains(
            "trade__body__item__btn--info--active"
          )
        ) {
          tradeInfoBtn.classList.remove("trade__body__item__btn--info--active");
          currPopup.classList.remove("trade__popup--active");
        } else {
          closeTrades();
          tradeInfoBtn.classList.add("trade__body__item__btn--info--active");
          currPopup.classList.add("trade__popup--active");
        }
      });
    });

    document.onclick = function (evt) {
      let hasActive = false;

      let isPopup;

      tradePopups.forEach((tradePopup) => {
        if (tradePopup.classList.contains("trade__popup--active")) {
          hasActive = true;
        }

        isPopup = evt.target == tradePopup || tradePopup.contains(evt.target);

        if (
          !isPopup &&
          hasActive &&
          !evt.target.classList.contains("trade__body__item__btn--info") &&
          !evt.target.classList.contains("trade__body__info__icon")
        ) {
          closeTrades();
        }
      });
    };
  }

  // Трейд сортировка
  const tradeIconBtns = document.querySelectorAll(".trade__head__item--icon");
  if (tradeIconBtns) {
    tradeIconBtns.forEach((tradeIconBtn) => {
      tradeIconBtn.addEventListener("click", (evt) => {
        evt.preventDefault();
        tradeIconBtn.classList.toggle("trade__head__item--icon--active");
      });
    });
  }

  // Попапы
  const acceptCookieBtn = document.querySelector("#cookieAccept");
  const menuBtn = document.querySelector("#menuToggle");
  const menu = document.querySelector(".header__center");

  if (acceptCookieBtn) {
    acceptCookieBtn.addEventListener("click", (evt) => {
      evt.preventDefault();
      const popupCookie = document.querySelector(".popup--cookie");
      slideUp(popupCookie, 250);
    });
  }

  const popupCloseBtns = document.querySelectorAll(".popup__close");
  const popups = document.querySelectorAll(".popup");
  const mask = document.querySelector(".mask");
  const body = document.querySelector("body");

  function closeAll() {
    mask.classList.remove("mask--active");
    body.classList.remove("fixed");
    popups.forEach((popup) => {
      slideUp(popup, 200);
      popup.classList.remove("popup--active");
    });
    menuBtn.classList.remove("header__burger--active");
    menu.classList.remove("header__center--active");
  }

  function openPopup(popup) {
    slideDown(popup, 200);
    popup.classList.add("popup--active");
    mask.classList.add("mask--active");
    body.classList.add("fixed");
  }

  if (popups) {
    popupCloseBtns.forEach((popupCloseBtn) => {
      popupCloseBtn.addEventListener("click", closeAll);
    });

    mask.addEventListener("click", closeAll);
  }

  const openSettingsBtn = document.querySelector("#openSettings");
  if (openSettingsBtn) {
    openSettingsBtn.addEventListener("click", (evt) => {
      evt.preventDefault();
      const popupSetting = document.querySelector("#popupSettings");
      openPopup(popupSetting);
    });
  }

  // Меню
  if (menuBtn) {
    menuBtn.addEventListener("click", (evt) => {
      evt.preventDefault();
      menuBtn.classList.toggle("header__burger--active");
      menu.classList.toggle("header__center--active");
      mask.classList.toggle("mask--active");
      body.classList.toggle("fixed");
    });
  }

  // Развернуть
  const textOpenLinks = document.querySelectorAll(".tabs__open__text");
  if (textOpenLinks) {
    textOpenLinks.forEach((textOpenLink) => {
      textOpenLink.addEventListener("click", (evt) => {
        evt.preventDefault();
        const textParent = findAncestor(textOpenLink, "tabs__bot");
        const hiddenText = textParent.querySelector(".tabs__text.no-md");
        hiddenText.classList.remove("no-md");
        textOpenLink.classList.add("tabs__open__text--active");
      });
    });
  }

  // Трейд табы дабл
  const doubleTabs = document.querySelectorAll(".trade__line--action");
  if (doubleTabs) {
    doubleTabs.forEach((doubleTab) => {
      doubleTab.addEventListener("click", () => {
        const wrapperDoubleTab = findAncestor(doubleTab, "trade__tab__wrapper");
        wrapperDoubleTab.classList.toggle("trade__tab__wrapper--active");
      });
    });
  }

  const doubleTabBtns = document.querySelectorAll(".trade__tab__inner__btn");
  if (doubleTabBtns) {
    doubleTabBtns.forEach((doubleTabBtn) => {
      doubleTabBtn.addEventListener("click", () => {
        const currentWrapperDoubleTab = findAncestor(
          doubleTabBtn,
          "trade__tab__wrapper"
        );
        currentWrapperDoubleTab.classList.toggle("trade__tab__wrapper--active");
      });
    });
  }

  // Диаграмма
  const captionsList = document.querySelectorAll(".caption-item");
  const unitsList = document.querySelectorAll(".unit");
  if (captionsList) {
    captionsList.forEach(function (item, index) {
      item.addEventListener("mouseover", function () {
        unitsList[index].classList.add("hovered");
      });

      item.addEventListener("mouseout", function () {
        unitsList[index].classList.remove("hovered");
      });
    });
  }
});
