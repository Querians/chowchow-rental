import { extendType, floatArg, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const Billing = objectType({
  name: 'Billing',
  definition(t) {
    t.nonNull.string('billingId');          // PK1
    t.nonNull.dateTime('billTimestamp');    // PK2 (timestamp)
    // t.nonNull.string('invoiceId');          // FK1 from Invoice
    t.field('invoice', {
      type: 'Invoice',
      resolve(parent, args, context: Context){
        return context.prisma.billing
        .findUnique({
          where: {
            billingId_billTimestamp: {
              billingId: parent.billingId,
              billTimestamp: parent.billTimestamp
            }
           }
        })
        .invoice();
      }
    })
    // t.nonNull.string('paymentMethodId');    // FK2 from PaymentMethod
    t.nonNull.field('paymentMethod', {
      type: 'PaymentMethod',
      resolve(parent, args, context: Context){
        return context.prisma.billing
        .findUnique({
          where: {
            billingId_billTimestamp: {
              billingId: parent.billingId,
              billTimestamp: parent.billTimestamp
            }
           }
        })
        .paymentMethod();
      }
    })
    t.nonNull.float('paidAmount');          // (double)
    t.nonNull.string('firstName');
    t.nonNull.string('lastName');
    t.nonNull.string('tel');
    t.nonNull.string('paymentSlipUrl')      // (text)
  },
});

export const BillingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allBilling', {
      type: 'Billing',
      resolve(parent, args, context: Context, info){
        return context.prisma.billing.findMany();
      }
    });

    // Query by Search payer name
  t.list.field('searchBillingByPayerName', {
    type: 'Billing',
    args: {
      firstName: stringArg(),
      lastName: stringArg()
    },
    resolve(parent, args, context: Context, info) {
      return context.prisma.billing.findMany({
        where : {OR: [args.firstName, args.lastName]} ? {
          AND: [
            { firstName: { contains: args.firstName } },
            { lastName: { contains: args.lastName } }
          ]
        } : {}
      });
    }
  });

  // query by billing id
  t.list.field('searchBillingByBillingId', {
    type: 'Billing',
    args: {
      billingId: stringArg()
    },
    resolve(parent, args, context: Context, info) {
      return context.prisma.billing.findMany({
        where : { billingId : args.billingId}
      });
    }
  });

  }
})

export const BillingMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field('addBilling', {
      type: 'Billing',
      args: {
        billTimestamp: nonNull(stringArg()),
        invoiceId: nonNull(stringArg()),
        paymentMethodId: nonNull(stringArg()),
        paidAmount: nonNull(floatArg()),
        firstName: nonNull(stringArg()),
        lastName: nonNull(stringArg()),
        tel: nonNull(stringArg()),
        paymentSlipUrl: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.billing.create({
          data: {
            billTimestamp: new Date(args.billTimestamp),
            invoiceId: args.invoiceId,
            paymentMethodId: args.paymentMethodId,
            paidAmount: args.paidAmount,
            firstName: args.firstName,
            lastName: args.lastName,
            tel: args.lastName,
            paymentSlipUrl: args.lastName,
          }
        });
      }
    });

    // Delete
    t.nonNull.field('deleteBilling', {
      type: 'Billing',
      args: {
        billTimestamp: nonNull(stringArg()),
        billingId: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.billing.delete({
          where: {
            billingId_billTimestamp: {
              billingId: args.billingId,
              billTimestamp: new Date (args.billTimestamp)
            }
          }
        });
      }
    });

    // Update
    t.nonNull.field('updateBilling', {
      type: 'Billing',
      args: {
        billingId: nonNull(stringArg()),
        billTimestamp: nonNull(stringArg()),
        invoiceId: nonNull(stringArg()),
        paymentMethodId: nonNull(stringArg()),
        paidAmount: nonNull(floatArg()),
        firstName: nonNull(stringArg()),
        lastName: nonNull(stringArg()),
        tel: nonNull(stringArg()),
        paymentSlipUrl: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.billing.update({
          data: {
            invoiceId: args.invoiceId,
            paymentMethodId: args.paymentMethodId,
            paidAmount: args.paidAmount,
            firstName: args.firstName,
            lastName: args.lastName,
            tel: args.lastName,
            paymentSlipUrl: args.lastName,
          },
          where:{
            billingId_billTimestamp: {
              billingId: args.billingId,
              billTimestamp: new Date(args.billTimestamp)
            }
          }
        });
      }
    });


  }
});
