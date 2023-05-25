import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const Customer = objectType({
  name: 'Customer',
  definition(t) {
    t.nonNull.string('customerId'); // PK
    t.nonNull.string('firstName');
    t.nonNull.string('lastName');
    t.nonNull.dateTime('dob'); // (Date)
    t.nonNull.string('tel');
    t.nonNull.string('email');
    t.nonNull.string('password');

    t.list.field('orders', {
      type: 'Order',
      resolve(parent, args, context: Context) {
        return context.prisma.customer
          .findUnique({
            where: { customerId: parent.customerId },
          })
          .orders();
      },
    });
    t.list.field('carts', {
      type: 'Cart',
      resolve(parent, args, context: Context) {
        return context.prisma.customer
          .findUnique({
            where: { customerId: parent.customerId },
          })
          .carts();
      },
    });
    t.list.field('issues', {
      type: 'Issue',
      resolve(parent, args, context: Context) {
        return context.prisma.customer
          .findUnique({
            where: { customerId: parent.customerId },
          })
          .issues();
      },
    });
  },
});

export const CustomerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allCustomer', {
      type: 'Customer',
      resolve(parent, args, context: Context, info){
        return context.prisma.customer.findMany();
      }
    })
  }
})
