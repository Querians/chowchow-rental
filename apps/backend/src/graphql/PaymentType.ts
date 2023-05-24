import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const PaymentType = objectType({
  name: 'PaymentType',
  definition(t) {
    t.nonNull.id('paymentTypeId');
    t.nonNull.string('paymentTypeName');
    t.nonNull.float('interest');
    t.nonNull.int('times');
    t.list.field('invoices', {
      type: 'Invoice',
      resolve(parent, args, context: Context) {
        return context.prisma.paymentType
          .findUnique({
            where: { paymentTypeId: parent.paymentTypeId },
          })
          .invoices();
      },
    });
  },
});

export const PaymentTypeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allPaymentType', {
      type: 'PaymentType',
      resolve(parent, args, context: Context, info) {
        return context.prisma.paymentType.findMany();
      },
    });
  },
});
