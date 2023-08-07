import { OrderProductWithId } from './order.product';
export interface OrderByCustomer {
  products: OrderProductWithId[];
  customerId: string;
}
