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
  },
});

// export const OrderStatusMutation = extendType({
//   type: 'Mutation',
//   definition(t) {
//     t.nonNull.field("addStage", {
//       type: 'OrderStatus',
//       args: {
//         statusCode: nonNull(intArg()),
//         statusDef: nonNull(stringArg())
//       },
//       resolve(parent, args: any, context: Context){
//         const newStage = context.prisma.orderStatus.create({
//           data: {
//             statusCode: args.statusCode,
//             statusDef: args.statusDef
//           }
//         })
//         return newStage;
//       }
//     })
//   }
// });
