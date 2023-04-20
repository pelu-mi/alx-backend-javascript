import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and Setter for amount
  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // Getter and Setter for currency
  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be a Currency');
    }
  }

  // displayFullPrice - Return attributes in a format
  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  // convertPrice - Static method to return converted price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
