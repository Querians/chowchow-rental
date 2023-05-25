import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const Invoice = objectType({
  name: 'Invoice',
  definition(t) {
    t.nonNull.string('invoiceId');        // PK
    // t.nonNull.string('paymentTypeId');    // FK1 from PaymentType
    t.nonNull.field('paymentType', {
      type:'PaymentType',
      resolve(parent, args, context: Context){
        return context.prisma.invoice.findUnique({
          where: {invoiceId: parent.invoiceId}
        }).paymentType();
      }
    })
    // t.nonNull.string('orderId');          // FK2 from Order
    t.nonNull.field('order', {
      type:'Order',
      resolve(parent, args, context: Context){
        return context.prisma.invoice.findUnique({
          where: {invoiceId: parent.invoiceId}
        }).order();
      }
    })
    t.nonNull.float('costAmount');        // (double)
    t.nonNull.dateTime('deadlineDate');   // (timestamp)

    t.list.field('billings', {
      type: 'Billing',
      resolve(parent, args, context: Context){
        return context.prisma.invoice.findUnique({
          where: {invoiceId: parent.invoiceId}
        }).billings();
      }
    })
  },
});

export const InvoiceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allInvoice', {
      type: 'Invoice',
      resolve(parent, args, context: Context, info){
        return context.prisma.invoice.findMany();
      }
    })
  }
})
