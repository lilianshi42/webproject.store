/* eslint-disable no-undef */
/* Add any JavaScript you need to this file. */
window.onload = function() {
  document.querySelector('#all-items').onclick = function listAll() {
    ui.clear();
    let summary = document.createElement('h3');
    summary.innerHTML = 'Shop All Items';
    document.querySelector('#summary').appendChild(summary);
    ui.productsToContent(window.productsData);
    openPop();
    closePop();
  };

  document.querySelector('#earrings').onclick = function listEarrings() {
    ui.clear();
    let summary = document.createElement('h3');
    summary.innerHTML = 'Earrings';
    document.querySelector('#summary').appendChild(summary);
    ui.productsToContent(util.productsByCategory('earring'));
    openPop();
    closePop();
  };

  document.querySelector('#necklaces').onclick = function listNecklaces() {
    ui.clear();
    let summary = document.createElement('h3');
    summary.innerHTML = 'Necklaces';
    document.querySelector('#summary').appendChild(summary);
    ui.productsToContent(util.productsByCategory('necklace'));
    openPop();
    closePop();
  };

  document.querySelector('#rings').onclick = function listNecklaces() {
    ui.clear();
    let summary = document.createElement('h3');
    summary.innerHTML = 'Rings';
    document.querySelector('#summary').appendChild(summary);
    ui.productsToContent(util.productsByCategory('ring'));
    openPop();
    closePop();
  };

  document.querySelector('#others').onclick = function listNecklaces() {
    ui.clear();
    let summary = document.createElement('h3');
    summary.innerHTML = 'Other Accessories';
    document.querySelector('#summary').appendChild(summary);
    ui.productsToContent(util.productsByCategory('other'));
    openPop();
    closePop();
  };

  document.querySelector('#sort-desc').onclick = function highToLow() {
    ui.clear();
    let summary = document.createElement('h3');
    summary.innerHTML = 'Price From High to Low';
    document.querySelector('#summary').appendChild(summary);
    ui.productsToContent(util.sortDesc());
    openPop();
    closePop();
  };

  document.querySelector('#sort-asc').onclick = function lowToHigh() {
    ui.clear();
    let summary = document.createElement('h3');
    summary.innerHTML = 'Price From Low to High';
    document.querySelector('#summary').appendChild(summary);
    ui.productsToContent(util.sortAsc());
    openPop();
    closePop();
  };
  //POPUP WINDOW view and close functions
  // let content = document.querySelector('#content');
  function openPop() {
    let popupWindow = document.querySelector('#popupWindow');
    let images = document.querySelectorAll('figure > img');
    images.forEach(element => {
      element.onclick = function imageView() {
        document.querySelector('#popupImage').src = element.src;
        popupWindow.style.display = 'block';
        document.querySelector('#popupbg').style.visibility = 'visible';
      };
    });
  }

  function closePop() {
    popupWindow.querySelector('.close').onclick = function closeView() {
      popupWindow.style.display = 'none';
      document.querySelector('#popupbg').style.visibility = 'hidden';
    };
  }
};
