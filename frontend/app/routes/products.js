import Route from '@ember/routing/route';
import axios from 'axios';

export default class ProductsRoute extends Route {
  async model() {
    try {
      const { data } = await axios.get('http://localhost:3000/product');
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
