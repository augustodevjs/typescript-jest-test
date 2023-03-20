import {
  EnterpriseCustomer,
  NoDiscount,
  Order,
  Product,
  ShoppingCart,
} from './classes';
import { Messaging, Persistency } from './services';

const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const enterpriseCustomer = new EnterpriseCustomer(
  'Empresa Gigante',
  '2222222222222222',
);

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
