/* eslint-disable no-unused-vars */
/**
 * Helper functions for building and working with UI elements.
 */
const ui = {
  /**
   * Clears (any) existing products listing from the main #content.
   * Also clears any summary title for the content page
   */
  clear: function() {
    document.querySelector('#summary').innerHTML = '';
    document.querySelector('#content').innerHTML = '';
  },

  /**
   * receive one product object make an image tag with image url
   * @param {Object} product
   */
  prodToImage: function(product) {
    let imgElem = document.createElement('img');
    imgElem.src = product.imageUrl;
    imgElem.alt = product.name;
    return imgElem;
  },

  /**
   * receive one product object make a figcaption tag with products name and description
   * showing as "name - description" format
   * @param {Object} product
   */
  prodToFigcaption: function(product) {
    let figcap = document.createElement('figcaption');
    let captions = document.createTextNode(`${product.name} - ${product.description}`);
    figcap.appendChild(captions);
    return figcap;
  },

  /**
   * receive a number and returns a formatted currency in CAD.
   * using Intl.NumberFormat
   * @param {number} price
   */
  priceFormat: function(price) {
    let newPrice = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(
      price
    );
    return newPrice;
  },

  /**
   * receive one product object make a paragraph tag with formatted currency
   * showing as <p class="price">CAD $99.99</p> format
   * @param {Object} product
   */
  prodToPtag: function(product) {
    let pElem = document.createElement('p');
    pElem.className = 'price';
    let captions = document.createTextNode(`CAD ${this.priceFormat(product.price)}`);
    pElem.appendChild(captions);
    return pElem;
  },

  /**
   * receive one product object make a complete figure tag with all required elements
   * showing as below format 
   * <figure>
            <img src="./images/earring001.jpg" alt="name" />
            <figcaption>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </figcaption>
            <p class="price">CAD $99.99</p>
            <button class="like"><i class="material-icons">favorite</i></button>
            <button class="addCart">Add to Cart</button>
          </figure>
   * @param {Object} product
   */
  prodToFigure: function(product) {
    let figureElem = document.createElement('figure');
    figureElem.appendChild(this.prodToImage(product));
    figureElem.appendChild(this.prodToFigcaption(product));
    figureElem.appendChild(this.prodToPtag(product));
    let button1 = document.createElement('button');
    let button2 = document.createElement('button');
    button1.className = 'like';
    button2.className = 'addCart';
    button1.innerHTML = `<i class="material-icons">favorite</i>`;
    button2.innerHTML = `Add to Cart`;
    figureElem.appendChild(button1);
    figureElem.appendChild(button2);

    return figureElem;
  },

  /**
   * receive products object array and list all products in the #content
   * @param {array} products
   */
  productsToContent: function(products) {
    products.forEach(element => {
      document.querySelector('#content').appendChild(this.prodToFigure(element));
    });
  }
};
