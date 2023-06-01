import { extendType, floatArg, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const Order = objectType({
  name: 'Order',
  definition(t) {
    t.nonNull.id('orderId');                // PK
    // t.nonNull.string('customerId');      // FK1 from Customer
    t.nonNull.field('customer', {
      type: 'Customer',
      resolve(parent, args, context: Context){
        return context.prisma.order.findUnique({
          where: { orderId: parent.orderId }
        }).customer();
      }
    });
    t.nonNull.string('addressDetail');      // (text)
    t.nonNull.string('street');             // (text)
    t.nonNull.string('subdistrict');        // (text)
    t.nonNull.string('zipcode');

    // t.nonNull.point('location');         // (point)
    t.nonNull.float('latitude');
    t.nonNull.float('longitude');

    t.nonNull.string('receiverTel');
    t.nonNull.float('totalPrice');          // (double)
    t.nonNull.dateTime('orderDate');        // (timestamp)
    t.dateTime('sendingDate');              // (timestamp)
    t.dateTime('returnDate');               // (timestamp)
    t.string('receiver');
    // t.nonNull.int('statusCode');         // FK2 from OrderStatus
    t.nonNull.field('status', {
      type: 'OrderStatus',
      resolve(parent, args, context: Context){
        return context.prisma.order.findUnique({
          where: { orderId: parent.orderId }
        }).status();
      }
    });

    // Host Table
    t.list.field('orderPromotions', {
      type: 'OrderPromotion',
      resolve(parent, args, context: Context){
        return context.prisma.order.findUnique({
          where: { orderId: parent.orderId }
        }).orderPromotions();
      }
    });
    t.list.field('orderTransports', {
      type: 'OrderTransport',
      resolve(parent, args, context: Context){
        return context.prisma.order.findUnique({
          where: { orderId: parent.orderId }
        }).orderTransports();
      }
    });
    t.list.field('invoices', {
      type: 'Invoice',
      resolve(parent, args, context: Context){
        return context.prisma.order.findUnique({
          where: { orderId: parent.orderId }
        }).invoices();
      }
    });
    t.list.field('subOrders', {
      type: 'SubOrder',
      resolve(parent, args, context: Context){
        return context.prisma.order.findUnique({
          where: { orderId: parent.orderId }
        }).subOrders();
      }
    });
    t.list.field('orderCarts', {
      type: 'OrderCart',
      resolve(parent, args, context: Context){
        return context.prisma.order.findUnique({
          where: { orderId: parent.orderId }
        }).orderCarts();
      }
    });
    t.list.field('issues', {
      type: 'Issue',
      resolve(parent, args, context: Context){
        return context.prisma.order.findUnique({
          where: { orderId: parent.orderId }
        }).issues();
      }
    });
  },
});

export const OrderQuery = extendType({
  type: 'Query',
  definition(t) {
      t.list.field('allOrder', {
          type: 'Order',
          resolve(parent, args, context: Context, info) {
              return context.prisma.order.findMany();
          }
      });

      t.list.field('searchOrderByOrderId', {
        type: 'Order',
        args: {
          orderId: stringArg()
        },
        resolve(parent, args, context: Context, info) {
          return context.prisma.order.findMany({
            where : {orderId : args.orderId}
          });
        }
      });

      t.list.field('searchOrderBySenidingDate', {
        type: 'Order',
        args: {
          sendingDate: stringArg()
        },
        resolve(parent, args, context: Context, info) {
          return context.prisma.order.findMany({
            where : {sendingDate : new Date(args.sendingDate)}
          });
        }
      });

      t.list.field('searchOrderByCustomerId', {
        type: 'Order',
        args: {
          customerId: stringArg()
        },
        resolve(parent, args, context: Context, info) {
          return context.prisma.order.findMany({
            where : {customerId : args.customerId}
          });
        }
      });

      t.list.field('searchOrderByStatusCode', {
        type: 'Order',
        args: {
          statusCode: intArg()
        },
        resolve(parent, args, context: Context, info) {
          return context.prisma.order.findMany({
            where : {statusCode : args.statusCode}
          });
        }
      });


  },
});

export const OrderMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field('addOrder', {
      type: 'Order',
      args: {
        customerId: nonNull(stringArg()),
        addressDetail: nonNull(stringArg()),
        street: nonNull(stringArg()),
        subdistrict: nonNull(stringArg()),
        zipcode: nonNull(stringArg()),
        latitude: nonNull(floatArg()),
        longitude: nonNull(floatArg()),
        receiverTel: nonNull(stringArg()),
        totalPrice: nonNull(floatArg()),
        sendingDate: nonNull(stringArg()),///
        returnDate: nonNull(stringArg()),///
        statusCode: nonNull(intArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.order.create({
          data: {
            customerId: args.customerId,
            addressDetail: args.addressDetail,
            street: args.street,
            subdistrict: args.subdistrict,
            zipcode: args.zipcode,
            latitude: args.latitude,
            longitude: args.longitude,
            receiverTel: args.receiverTel,
            totalPrice: args.totalPrice,
            sendingDate: new Date(args.sendingDate),
            returnDate: new Date(args.returnDate),
            statusCode: args.statusCode,
          }
        });
      }
    });

    // Add For User Only
    t.nonNull.field('addUserOrder', {
      type: 'Order',
      args: {
        // customerId: nonNull(stringArg()),
        addressDetail: nonNull(stringArg()),
        street: nonNull(stringArg()),
        subdistrict: nonNull(stringArg()),
        zipcode: nonNull(stringArg()),
        latitude: nonNull(floatArg()),
        longitude: nonNull(floatArg()),
        receiverTel: nonNull(stringArg()),
        totalPrice: nonNull(floatArg()),
        sendingDate: nonNull(stringArg()),///
        returnDate: nonNull(stringArg()),///
        statusCode: nonNull(intArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.order.create({
          data: {
            customerId: context.userId,
            addressDetail: args.addressDetail,
            street: args.street,
            subdistrict: args.subdistrict,
            zipcode: args.zipcode,
            latitude: args.latitude,
            longitude: args.longitude,
            receiverTel: args.receiverTel,
            totalPrice: args.totalPrice,
            sendingDate: new Date(args.sendingDate),
            returnDate: new Date(args.returnDate),
            statusCode: args.statusCode,
          }
        });
      }
    });

    // Delete
    t.nonNull.field('deleteOrder', {
      type: 'Order',
      args: {
        orderId : nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.order.delete({
          where: {
            orderId: args.orderId
          }
        });
      }
    });


    // Update
    t.nonNull.field('updateOrder', {
      type: 'Order',
      args: {
        orderId : nonNull(stringArg()),
        customerId: nonNull(stringArg()),
        addressDetail: nonNull(stringArg()),
        street: nonNull(stringArg()),
        subdistrict: nonNull(stringArg()),
        zipcode: nonNull(stringArg()),
        latitude: nonNull(floatArg()),
        longitude: nonNull(floatArg()),
        receiverTel: nonNull(stringArg()),
        totalPrice: nonNull(floatArg()),
        sendingDate: nonNull(stringArg()),///
        returnDate: nonNull(stringArg()),///
        reciever: nonNull(stringArg()),
        statusCode: nonNull(intArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.order.update({
          data: {
            customerId: args.customerId,
            addressDetail: args.addressDetail,
            street: args.street,
            subdistrict: args.subdistrict,
            zipcode: args.zipcode,
            latitude: args.latitude,
            longitude: args.longitude,
            receiverTel: args.receiverTel,
            totalPrice: args.totalPrice,
            sendingDate: new Date(args.sendingDate),
            returnDate: new Date(args.returnDate),
            receiver: args.reciever,
            statusCode: args.statusCode,
          },
          where: {
            orderId: args.orderId
          }
        });
      }
    });

    // Update status
    t.nonNull.field('updateStatusinOrder', {
      type: 'Order',
      args: {
        orderId : nonNull(stringArg()),
        statusCode: nonNull(intArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.order.update({
          data: {
            statusCode: args.statusCode,
          },
          where: {
            orderId: args.orderId
          }
        });
      }
    });

  }
});
