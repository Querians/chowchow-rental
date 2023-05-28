import { booleanArg, extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
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
    });

    t.list.field('searchOrderTransportByOrderId', {
      type: 'OrderTransport',
      args: {
        orderId: stringArg()
      },
      resolve(parent, args, context: Context, info) {
        return context.prisma.orderTransport.findMany({
          where : {orderId : args.orderId}
        });
      }
    });

    t.list.field('searchOrderTransportByTimeAssign', {
      type: 'OrderTransport',
      args: {
        timeAssign: stringArg()
      },
      resolve(parent, args, context: Context, info) {
        return context.prisma.orderTransport.findMany({
          where : {timeAssign : new Date(args.timeAssign)}
        });
      }
    });
  }
})

export const OrderTransportMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field('addOrderTransport', {
      type: 'OrderTransport',
      args: {
        orderId: nonNull(stringArg()),
        timeAssign: nonNull(stringArg()),
        vehicleLicense: nonNull(stringArg()),
        staffId: nonNull(stringArg()),
        isReturn: nonNull(booleanArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.orderTransport.create({
          data: {
            orderId: args.orderId,
            timeAssign: new Date(args.timeAssign),
            vehicleLicense: args.vehicleLicense,
            staffId: args.staffId,
            isReturn: args.isReturn,
          }
        });
      }
    });

    // Delete
    t.nonNull.field('deleteOrderTransport', {
      type: 'OrderTransport',
      args: {
        orderId: nonNull(stringArg()),
        timeAssign: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.orderTransport.delete({
          where: {
            orderId_timeAssign : {
              orderId: args.orderId,
              timeAssign: new Date(args.timeAssign)
          }
          }
        });
      }
    });

    // Update
    t.nonNull.field('updateOrderTransport', {
      type: 'OrderTransport',
      args: {
        orderId: nonNull(stringArg()),
        timeAssign: nonNull(stringArg()),
        vehicleLicense: nonNull(stringArg()),
        staffId: nonNull(stringArg()),
        isReturn: nonNull(booleanArg()),
        timeGo: nonNull(stringArg()),
        timeBack: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.orderTransport.update({
          data: {
            vehicleLicense: args.vehicleLicense,
            staffId: args.staffId,
            isReturn: args.isReturn,
            timeGo: new Date(args.timeGo),
            timeBack: new Date(args.timeBack)
          },
          where: {
            orderId_timeAssign : {
              orderId: args.orderId,
              timeAssign: new Date(args.timeAssign)
          }
        }
        });
      }
    });


  }
});
