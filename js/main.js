// Добавление классов для Бургера
function activenav() {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__navbar, .content__head').toggleClass('active');
  });
}

// Скролл наверх
function scrollToTop() {
  if ($("#back-to-top").length) {
    var scrollTrigger = 100,
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $("#back-to-top").addClass("show");
      } else {
        $("#back-to-top").removeClass("show");
      }
    };
    backToTop();
    $(window).on("scroll", function () {
      backToTop();
    });
    $("#back-to-top").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate (
        {
          scrollTop: 0,
        },
        400
      );
    });
  }
}

// Избранное
function favoriteAct() {
  $('.product__favorite').click(function (event) {
    $(this).toggleClass('product__favorite_active');
  });
}

$(document).ready(function() {
  activenav();
  scrollToTop();
  favoriteAct();
});

// Сортировка по цене
window.onload = function () {

  function sortPriceDesc() {
    var items = document.querySelectorAll('.catalog__item');
    var parent = document.querySelector('.catalog__list');
    var array = new Array();
    var SortElements = new Object();
    items.forEach(function(item, indx){
      var id = parseInt(item.querySelector('.product').getAttribute('id'));
      var itemValue = parseInt(item.querySelector('.product__price').textContent.replace('руб.', '').replace(/\s+/g, ''));
      SortElements[id] = {'value': itemValue, 'element': item, 'index': id} ;
    });

    for (key in SortElements) {
      array.push(SortElements[key]);
    }

    function compareNumeric(a, b) {
      a = parseInt(a.value);
      b = parseInt(b.value);
      if (a < b) return 1;
      if (a > b) return -1;
    }

    array.sort(compareNumeric);

    array.map(function(indx){
      parent.insertAdjacentElement('beforeend', SortElements[indx.index]['element']);
    });
  }

  function sortPriceAsc() {
    var items = document.querySelectorAll('.catalog__item');
    var parent = document.querySelector('.catalog__list');
    var array = new Array();
    var SortElements = new Object();
    items.forEach(function(item, indx){
      var id = parseInt(item.querySelector('.product').getAttribute('id'));
      var itemValue = parseInt(item.querySelector('.product__price').textContent.replace('руб.', '').replace(/\s+/g, ''));
      SortElements[id] = {'value': itemValue, 'element': item, 'index': id} ;
    });

    for (key in SortElements) {
      array.push(SortElements[key]);
    }

    function compareNumeric(a, b) {
      a = parseInt(a.value);
      b = parseInt(b.value);
      if (a > b) return 1;
      if (a < b) return -1;
    }

    array.sort(compareNumeric);

    array.map(function(indx){
      parent.insertAdjacentElement('beforeend', SortElements[indx.index]['element']);
    });
  }

  document.querySelector('.js-filter-price').addEventListener('click', function (e) {
    e.preventDefault();
    if (!this.classList.contains('filter__item_desc')) {
      sortPriceDesc();
      this.classList.add('filter__item_desc');
      this.classList.remove('filter__item_asc');
    } else {
      sortPriceAsc();
      this.classList.remove('filter__item_desc');
      this.classList.add('filter__item_asc');
    }
  });

  // Сортировка по возрасту
  function sortAgeDesc() {
    var items = document.querySelectorAll('.catalog__item');
    var parent = document.querySelector('.catalog__list');
    var array = new Array();
    var SortElements = new Object();
    items.forEach(function(item, indx){
      var id = parseInt(item.querySelector('.product').getAttribute('id'));
      var itemValue = parseInt(item.querySelector('.characteristics__item-value_age').textContent.replace('парсек', '').replace(/\s+/g, ''));
      SortElements[id] = {'value': itemValue, 'element': item, 'index': id} ;
    });

    for (key in SortElements) {
      array.push(SortElements[key]);
    }

    function compareNumeric(a, b) {
      a = parseInt(a.value);
      b = parseInt(b.value);
      if (a > b) return 1;
      if (a < b) return -1;
    }

    array.sort(compareNumeric);

    array.map(function(indx){
      parent.insertAdjacentElement('beforeend', SortElements[indx.index]['element']);
    });
  }

  function sortAgeAsc() {
    var items = document.querySelectorAll('.catalog__item');
    var parent = document.querySelector('.catalog__list');
    var array = new Array();
    var SortElements = new Object();
    items.forEach(function(item, indx){
      var id = parseInt(item.querySelector('.product').getAttribute('id'));
      var itemValue = parseInt(item.querySelector('.characteristics__item-value_age').textContent.replace('парсек', '').replace(/\s+/g, ''));
      SortElements[id] = {'value': itemValue, 'element': item, 'index': id} ;
    });

    for (key in SortElements) {
      array.push(SortElements[key]);
    }

    function compareNumeric(a, b) {
      a = parseInt(a.value);
      b = parseInt(b.value);
      if (a < b) return 1;
      if (a > b) return -1;
    }

    array.sort(compareNumeric);

    array.map(function(indx){
      parent.insertAdjacentElement('beforeend', SortElements[indx.index]['element']);
    });
  }

  document.querySelector('.js-filter-age').addEventListener('click', function (e) {
    e.preventDefault();
    if (!this.classList.contains('filter__item_desc')) {
      sortAgeAsc();
      this.classList.add('filter__item_desc');
      this.classList.remove('filter__item_asc');
    } else {
      sortAgeDesc();
      this.classList.remove('filter__item_desc');
      this.classList.add('filter__item_asc');
    }
  });
}
