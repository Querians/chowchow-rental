import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
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
  },
});
