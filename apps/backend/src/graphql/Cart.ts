import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const Cart = objectType({
  name: 'Cart',
  definition(t) {
    t.nonNull.string('cartNo');             // PK1
    // t.nonNull.string('customerId');         // PK2, FK1 from Customer
    t.nonNull.field('customer',{
      type: 'Customer',
      resolve(parent, args, context: Context){
        return context.prisma.cart.findUnique({
          where: {
            cartNo_customerId_productId :
            {
              cartNo  : parent.cartNo,
              customerId  : parent.customerId,
              productId  : parent.productId,
            }
          }
        }).customer();
      }
    });
    // t.nonNull.string('productId');          // PK3, FK2 from Product
    t.nonNull.field('product',{
      type: 'Product',
      resolve(parent, args, context: Context){
        return context.prisma.cart.findUnique({
          where: {
            cartNo_customerId_productId :
            {
              cartNo  : parent.cartNo,
              customerId  : parent.customerId,
              productId  : parent.productId,
            }
          }
        }).product();
      }
    });
    t.nonNull.int('quantity');
    t.nonNull.int('status');
    t.nonNull.dateTime('timestamp');        // (timestamp)
  },
});

export const CartQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allCart', {
      type: 'Cart',
      resolve(parent, args, context: Context, info) {
        return context.prisma.cart.findMany();
      }
    });
  }
});
