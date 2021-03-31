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
      slideUp(tradePopup, 250);
    });

    tradeInfoBtns.forEach((tradeInfoBtn) => {
      tradeInfoBtn.classList.remove("trade__body__item__btn--info--active");
    });
  }

  if (tradeInfoBtns) {
    tradeInfoBtns.forEach((tradeInfoBtn) => {
      tradeInfoBtn.addEventListener("click", (evt) => {
        evt.preventDefault();

        tradeInfoBtn.classList.toggle("trade__body__item__btn--info--active");

        const currTradeItem = findAncestor(
          tradeInfoBtn,
          "trade__body__item--exchanger"
        );
        const currPopup = currTradeItem.querySelector(".trade__popup");
        slideToggle(currPopup, 250);
      });
    });
  }
});
