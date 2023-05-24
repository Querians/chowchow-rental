import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const PaymentMethod = objectType({
  name: 'PaymentMethod',
  definition(t) {
    t.nonNull.string('paymentMethodId');
    t.nonNull.string('paymentMethodName');
    t.list.field('billings', {
      type: 'Billing',
      resolve(parent, args, context: Context) {
        return context.prisma.paymentMethod.findUnique({
          where: {
            paymentMethodId: parent.paymentMethodId
          }
        }).billings();
      }
    });
  }
});

export const PaymentMethodQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allPaymentMethods', {
      type: 'PaymentMethod',
      resolve(parent, args, context: Context, info) {
        return context.prisma.paymentMethod.findMany();
      }
    });
  }
});
