import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const OrderCart = objectType({
  name: 'OrderCart',
  definition(t) {
    // t.nonNull.string('orderId');        // PK1, FK1 from Order
    t.nonNull.field('order', {
      type: 'Order',
      resolve(parent, args, context: Context){
        return context.prisma.orderCart.findUnique({
          where:
          { orderId_cartNo: {
              orderId: parent.orderId,
              cartNo: parent.cartNo
            }
          }
        }).order();
      }
    });
    // t.nonNull.string('cartNo');         // PK2, FK2 from Cart ***<1:1>
    t.nonNull.field('cart', {
      type: 'Cart',
      resolve(parent, args, context: Context){
        return context.prisma.orderCart.findUnique({
          where:
          { orderId_cartNo: {
              orderId: parent.orderId,
              cartNo: parent.cartNo
            }
          }
        }).cart();
      }
    });
  },
});

export const OrderCartQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allOrderCart', {
      type: 'OrderCart',
      resolve(parent, args, context: Context, info){
        return context.prisma.orderCart.findMany();
      }
    });

    t.list.field('searchOrderCartByPKs', {
      type: 'OrderCart',
      args: {
        orderId: stringArg(),
        cartNo: stringArg()
      },
      resolve(parent, args, context: Context, info) {
        return context.prisma.orderCart.findMany({
          where : {OR: [args.orderId, args.cartNo]} ? {
            AND: [
              { orderId:  args.orderId},
              { cartNo:  args.cartNo}
            ]
          } : {}
        });
      }
    });


  }
})

export const OrderCartMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field('addOrderCart', {
      type: 'OrderCart',
      args: {
        orderId: nonNull(stringArg()),
        cartNo: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.orderCart.create({
          data: {
            orderId: args.orderId,
            cartNo: args.cartNo,
          }
        });
      }
    });

    // Delete
    t.nonNull.field('deleteOrderCart', {
      type: 'OrderCart',
      args: {
        orderId: nonNull(stringArg()),
        cartNo: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.orderCart.delete({
          where: {
            orderId_cartNo: {
              orderId: args.orderId,
              cartNo: args.cartNo
            }
          }
        });
      }
    });


    // No Update required


  }
});
