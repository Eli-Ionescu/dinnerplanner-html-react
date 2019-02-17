import ObservableModel from "./ObservableModel";
import API_KEY from "./apiKey";

const BASE_URL = "http://sunset.nada.kth.se:8080/iprog/group/45";
const httpOptions = {
  headers: { "X-Mashape-Key": API_KEY }
};

class DinnerModel extends ObservableModel {
  constructor() {
    super();
    this._numberOfGuests = 4;
    this.getNumberOfGuests();

    this._selectedDishes = [];
    this.getSelectedDishes();
  }

  /**
   * Get the number of guests
   * @returns {number}
   */
  getNumberOfGuests() {
    return this._numberOfGuests;
  }

  /**
   * Set number of guests
   * @param {number} num
   */
  setNumberOfGuests(num) {
    this._numberOfGuests = num;
    this.notifyObservers();
  }

  // API methods

  /**
   * Do an API call to the search API endpoint.
   * @returns {Promise<any>}
   */
  getAllDishes() {
    const url = `${BASE_URL}/recipes/search`;
    return fetch(url, httpOptions).then(this.processResponse);
  }

  getAllDishTypes() {
    return dishTypes;
  }

  getDish(id) {
    const url = `${BASE_URL}/recipes/${id}/information`;
    return fetch(url, httpOptions).then(this.processResponse);
  }

  getSelectedDishes() {
      return this._selectedDishes;
  }

  addDishToMenu(id) {
    this.getDish(id).then(dish => {
        this._selectedDishes.push(dish);
        this.notifyObservers("addDishToMenu");
    }).catch(error => {
        console.log(error);
    });
  }


  processResponse(response) {
    if (response.ok) {
      return response.json();
    }
    throw response;
  }


}

const dishTypes = ["main course", "side dish", "dessert", "appetizer", "salad", "bread",
    "breakfast", "soup", "beverage", "sauce", "drink"];

// Export an instance of DinnerModel
const modelInstance = new DinnerModel();
export default modelInstance;