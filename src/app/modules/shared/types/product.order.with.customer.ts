import { OrderProductWithId } from "./order.product";
export interface OrderByCustomerDto{
    products:OrderProductWithId[];
    customerId:string;
}