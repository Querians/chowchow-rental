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
    t.field('orderCarts', {
      type: 'OrderCart',
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
        }).orderCarts();
      }
    })
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

  // Query by Search cart status
  t.list.field('searchCartByStatus', {
    type: 'Cart',
    args: {
      status: intArg()
    },
    resolve(parent, args, context: Context, info) {
      return context.prisma.cart.findMany({
        where : {status: args.status}
      });
    }
  });

  ////

  // Query by customerId
  t.list.field('searchCartByCustomerId', {
    type: 'Cart',
    args: {
      customerId: stringArg()
    },
    resolve(parent, args, context: Context, info) {
      return context.prisma.cart.findMany({
        where : {customerId : args.customerId}
      });
    }
    });

  // Query by cartNo
  t.list.field('searchCartByCartNo', {
    type: 'Cart',
    args: {
      cartNo: stringArg()
    },
    resolve(parent, args, context: Context, info) {
      return context.prisma.cart.findMany({
        where : { cartNo : args.cartNo}
      });
    }
    });


  // Query by productId
  t.list.field('searchCartByproductId', {
    type: 'Cart',
    args: {
      productId: stringArg()
    },
    resolve(parent, args, context: Context, info) {
      return context.prisma.cart.findMany({
        where : {productId : args.productId}
      });
    }
    });

  }
});



export const CartMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field('addCart', {
      type: 'Cart',
      args: {
        customerId: nonNull(stringArg()),
        productId: nonNull(stringArg()),
        quantity: nonNull(intArg()),
        status: nonNull(intArg()),
        timestamp: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.cart.create({
          data: {
            customerId: args.customerId,
            productId: args.productId,
            quantity: args.quantity,
            status: args.status,
            timestamp: new Date(args.timestamp)
          }
        });
      }
    });

    // Add For User Only
    t.nonNull.field('addUserCart', {
      type: 'Cart',
      args: {
        // customerId: nonNull(stringArg()),
        productId: nonNull(stringArg()),
        quantity: nonNull(intArg()),
        status: nonNull(intArg()),
        timestamp: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {

        if(!context.userId){
          throw new Error('Cannot add cart without login');
        }

        return context.prisma.cart.create({
          data: {
            customerId: context.userId,
            productId: args.productId,
            quantity: args.quantity,
            status: args.status,
            timestamp: new Date(args.timestamp)
          }
        });
      }
    });

    // Delete
    t.nonNull.field('deleteCart', {
      type: 'Cart',
      args: {
        cartNo: nonNull(stringArg()),
        customerId: nonNull(stringArg()),
        productId: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.cart.delete({
          where: {
            cartNo_customerId_productId :
            {
              cartNo  : args.cartNo,
              customerId  : args.customerId,
              productId  : args.productId
            }
          }
        });
      }
    });


    // Update
    t.nonNull.field('updateCart', {
      type: 'Cart',
      args: {
        cartNo: nonNull(stringArg()),
        customerId: nonNull(stringArg()),
        productId: nonNull(stringArg()),
        quantity: nonNull(intArg()),
        status: nonNull(intArg()),
        timestamp: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.cart.update({
          data: {
            quantity: args.quantity,
            status: args.status,
            timestamp: new Date(args.timestamp)
          },
          where: {
            cartNo_customerId_productId :
            {
              cartNo  : args.cartNo,
              customerId  : args.customerId,
              productId  : args.productId
            }
          }
        });
      }
    });



  }
});
