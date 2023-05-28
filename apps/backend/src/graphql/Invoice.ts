import { extendType, floatArg, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
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
    });


    // query invoice by invoice & order id
    t.list.field('searchInvoiceByInvoiceId', {
      type: 'Invoice',
      args: {
        invoiceId: stringArg(),
        orderId: stringArg()
      },
      resolve(parent, args, context: Context, info) {
        return context.prisma.invoice.findMany({
          where : {OR: [args.invoiceId, args.orderId]} ? {
            AND: [
              { invoiceId: args.invoiceId},
              { orderId: args.orderId }
            ]
          } : {}
        });

      }
    });

    // query cost_amount
    t.list.field('searchInvoiceByCostAmount', {
      type: 'Invoice',
      args: {
        minimum: floatArg(),
        maximum: floatArg()
      },
      resolve(parent, args, context: Context, info) {
        return context.prisma.invoice.findMany({
          where : {OR: [args.minimum, args.maximum]} ? {
            AND: [
              { costAmount: { lte? : args.maximum } },
              { costAmount: { gte? : args.minimum } }
            ]
          } : {}
        });

      }
    });

  }
})

export const InvoiceMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field('addInvoice', {
      type: 'Invoice',
      args: {
        paymentTypeId: nonNull(stringArg()),
        orderId: nonNull(stringArg()),
        costAmount: nonNull(floatArg()),
        deadlineDate: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.invoice.create({
          data: {
            paymentTypeId: args.paymentTypeId,
            orderId: args.orderId,
            costAmount: args.costAmount,
            deadlineDate: new Date(args.deadlineDate),
          }
        });
      }
    });

    // Delete
    t.nonNull.field('deleteInvoice', {
      type: 'Invoice',
      args: {
        invoiceId: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.invoice.delete({
          where: {
            invoiceId: args.invoiceId
          }
        });
      }
    });

    // Update
    t.nonNull.field('updateInvoice', {
      type: 'Invoice',
      args: {
        invoiceId: nonNull(stringArg()),
        paymentTypeId: nonNull(stringArg()),
        orderId: nonNull(stringArg()),
        costAmount: nonNull(floatArg()),
        deadlineDate: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.invoice.update({
          data: {
            paymentTypeId: args.paymentTypeId,
            orderId: args.orderId,
            costAmount: args.costAmount,
            deadlineDate: new Date(args.deadlineDate),
          },
          where: {
            invoiceId: args.invoiceId
          }
        });
      }
    });


  }
});
