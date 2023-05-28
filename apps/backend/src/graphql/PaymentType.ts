import { extendType, floatArg, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
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

    t.list.field('searchPaymentTypeById', {
      type: 'PaymentType',
      args: {
        paymentTypeId: stringArg()
      },
      resolve(parent, args, context: Context, info) {
        return context.prisma.paymentType.findMany({
          where : {paymentTypeId : args.paymentTypeId}
        });
      }
    });

  },
});

export const PaymentTypeMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field('addPaymentType', {
      type: 'PaymentType',
      args: {
        paymentTypeId: nonNull(stringArg()),
        paymentTypeName: nonNull(stringArg()),
        interest: nonNull(floatArg()),
        times: nonNull(intArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.paymentType.create({
          data: {
            paymentTypeId: args.paymentTypeId,
            paymentTypeName: args.paymentTypeName,
            interest: args.interest,
            times: args.times,
          }
        });
      }
    });

    // Delete
    t.nonNull.field('deletePaymentType', {
      type: 'PaymentType',
      args: {
        paymentTypeId: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.paymentType.delete({
          where: {
            paymentTypeId: args.paymentTypeId
          }
        });
      }
    });

    // Update
    t.nonNull.field('updatePaymentType', {
      type: 'PaymentType',
      args: {
        paymentTypeId: nonNull(stringArg()),
        paymentTypeName: nonNull(stringArg()),
        interest: nonNull(floatArg()),
        times: nonNull(intArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.paymentType.update({
          data: {
            paymentTypeName: args.paymentTypeName,
            interest: args.interest,
            times: args.times,
          },
          where: {
            paymentTypeId: args.paymentTypeId
          }
        });
      }
    });

  }
});
