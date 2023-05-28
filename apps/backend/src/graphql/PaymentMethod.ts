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

    t.list.field('searchPaymentMethodById', {
      type: 'PaymentMethod',
      args: {
        paymentMethodId: stringArg()
      },
      resolve(parent, args, context: Context, info) {
        return context.prisma.paymentMethod.findMany({
          where : {paymentMethodId : {contains : args.paymentMethodId}}
        });
      }
    });

  }
});

export const PaymentMethodMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field('addPaymentMethods', {
      type: 'PaymentMethod',
      args: {
        paymentMethodId: nonNull(stringArg()),
        paymentMethodName: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.paymentMethod.create({
          data: {
            paymentMethodId: args.paymentMethodId,
            paymentMethodName: args.paymentMethodName
          }
        });
      }
    });

    // Delete
    t.nonNull.field('deletePaymentMethods', {
      type: 'PaymentMethod',
      args: {
        paymentMethodId: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.paymentMethod.delete({
          where: {
            paymentMethodId: args.paymentMethodId
          }
        });
      }
    });

    // Update
    t.nonNull.field('updatePaymentMethods', {
      type: 'PaymentMethod',
      args: {
        paymentMethodId: nonNull(stringArg()),
        paymentMethodName: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.paymentMethod.update({
          data: {
            paymentMethodName: args.paymentMethodName
          },
          where: {
            paymentMethodId: args.paymentMethodId,
          }
        });
      }
    });

  }
});
