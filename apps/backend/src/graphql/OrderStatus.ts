import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const OrderStatus = objectType({
  name: 'OrderStatus',
  definition(t) {
    t.nonNull.int('statusCode');
    t.nonNull.string('statusDef');
    t.list.field('orders', {
      type: 'Order',
      resolve(parent, args, context: Context){
        return context.prisma.orderStatus.findUnique({
          where: { statusCode: parent.statusCode }
        }).orders();
      }
    })
  },
});

export const OrderStatusQuery = extendType({
  type: "Query",
  definition(t) {
      t.list.field("allOrderStatus", {
          type: "OrderStatus",
          resolve(parent, args, context, info) {
              return context.prisma.orderStatus.findMany();
          }
      });

      t.list.field('searchOrderStatusByStatusDef', {
        type: 'OrderStatus',
        args: {
          statusDef: stringArg()
        },
        resolve(parent, args, context: Context, info) {
          return context.prisma.orderStatus.findMany({
            where : {statusDef : {contains : args.statusDef}}
          });
        }
      });

      t.list.field('searchOrderStatusByStatusCode', {
        type: 'OrderStatus',
        args: {
          statusCode: intArg()
        },
        resolve(parent, args, context: Context, info) {
          return context.prisma.orderStatus.findMany({
            where : {statusCode : args.statusCode}
          });
        }
      });


  },
});

export const OrderStatusMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field("addOrderStatus", {
      type: 'OrderStatus',
      args: {
        statusCode: nonNull(intArg()),
        statusDef: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.orderStatus.create({
          data: {
            statusCode: args.statusCode,
            statusDef: args.statusDef
          }
        });
      }
    });

    // Delete
    t.nonNull.field("deleteOrderStatus", {
      type: 'OrderStatus',
      args: {
        statusCode: nonNull(intArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.orderStatus.delete({
          where: {
            statusCode: args.statusCode
          }
        });
      }
    });

    // Update
    t.nonNull.field("updateOrderStatus", {
      type: 'OrderStatus',
      args: {
        statusCode: nonNull(intArg()),
        statusDef: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.orderStatus.update({
          where: {
            statusCode: args.statusCode
          },
          data: {
            statusDef: args.statusDef
          }
        });
      }
    });
  }
});
