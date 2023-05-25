import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const Billing = objectType({
  name: 'Billing',
  definition(t) {
    t.nonNull.string('billingId');          // PK1
    t.nonNull.dateTime('billTimestamp');    // PK2 (timestamp)
    // t.nonNull.string('invoiceId');          // FK1 from Invoice
    t.nonNull.field('invoice', {
      type: 'Invoice',
      resolve(parent, args, context: Context){
        return context.prisma.billing.findUnique({
          where: { billpk: {
            billingId: parent.billingId,
            billTimestamp: parent.billTimestamp
          } }
        }).invoice();
      }
    })
    // t.nonNull.string('paymentMethodId');    // FK2 from PaymentMethod
    t.nonNull.field('paymentMethod', {
      type: 'PaymentMethod',
      resolve(parent, args, context: Context){
        return context.prisma.billing.findUnique({
          where: { billpk: {
            billingId: parent.billingId,
            billTimestamp: parent.billTimestamp
          } }
        }).paymentMethod();
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
    })
  }
})
