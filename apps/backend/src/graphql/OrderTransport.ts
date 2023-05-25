import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const OrderTransport = objectType({
  name: 'OrderTransport',
  definition(t) {
    t.nonNull.field('order', {
      type: 'Order',
      resolve(parent, args, context: Context) {
        return context.prisma.orderTransport
          .findUnique({
            where: {
              orderId_timeAssign : {
                orderId: parent.orderId,
                timeAssign: parent.timeAssign
              }
            },
          })
          .order();
      },
    });
    t.nonNull.dateTime('timeAssign');
    t.nonNull.field('license', {
      type: 'VehicleInfo',
      resolve(parent, args, context: Context) {
        return context.prisma.orderTransport
          .findUnique({
            where: {
              orderId_timeAssign : {
                orderId: parent.orderId,
                timeAssign: parent.timeAssign
              }
            },
          })
          .license();
      },
    });
    t.nonNull.field('staff', {
      type: 'StaffInfo',
      resolve(parent, args, context: Context) {
        return context.prisma.orderTransport
          .findUnique({
            where: {
              orderId_timeAssign : {
                orderId: parent.orderId,
                timeAssign: parent.timeAssign
              }
            },
          })
          .staff();
      },
    });
    t.nonNull.boolean('isReturn');
    t.dateTime('timeGo');
    t.dateTime('timeBack');
  },
});

export const OrderTransportQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allOrderTransport', {
      type: 'OrderTransport',
      resolve(parent, args, context: Context, info){
        return context.prisma.orderTransport.findMany();
      }
    })
  }
})
