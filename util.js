/* eslint-disable no-unused-vars */
/**
 * Helper functions for working with products  data and extracting information.
 */
const util = {
  /**
   * Given a select category and return array of products with same category
   * NOTE: do not modify the original objects.  Create and return a new one.
   * @param {String} category - the category name to use
   */
  productsByCategory: function(category) {
    let newProdsArr = [];
    window.productsData.forEach(element => {
      if (element.category === category) newProdsArr.push(element);
    });
    return newProdsArr;
  },

  /**
   * Sort products by price, ascending
   * NOTE: do not modify the original objects.  Create and return a new one.
   * @param {array} products
   */
  sortAsc: function() {
    let newProdsArr = window.productsData;
    newProdsArr.sort(function(a, b) {
      return a.price - b.price;
    });
    return newProdsArr;
  },

  /**
   * Sort products by price, ascending
   * NOTE: do not modify the original objects.  Create and return a new one.
   */
  sortDesc: function() {
    let newProdsArr = window.productsData;
    newProdsArr.sort(function(a, b) {
      return b.price - a.price;
    });
    return newProdsArr;
  }
};
