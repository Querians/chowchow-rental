import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const OrderPromotion = objectType({
  name: 'OrderPromotion',
  definition(t) {
    t.nonNull.field('promotion', {
      type: 'Promotion',
      resolve(parent, args, context: Context){
        return context.prisma.orderPromotion.findUnique({
          where:
          { promotionCode_orderId: {
              promotionCode: parent.promotionCode,
              orderId: parent.orderId
            }
          }
        }).promotion();
      }
    });
    t.nonNull.field('order', {
      type: 'Order',
      resolve(parent, args, context: Context){
        return context.prisma.orderPromotion.findUnique({
          where:
          { promotionCode_orderId: {
              promotionCode: parent.promotionCode,
              orderId: parent.orderId
            }
          }
        }).order();
      }
    });
  },
});

export const OrderPromotionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allOrderPromotion', {
      type: 'OrderPromotion',
      resolve(parent, args, context: Context, info){
        return context.prisma.orderPromotion.findMany();
      }
    })
  }
})

export const OrderPromotionMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field('addOrderPromotion', {
      type: 'OrderPromotion',
      args: {
        promotionCode: nonNull(stringArg()),
        orderId: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.orderPromotion.create({
          data: {
            promotionCode: args.promotionCode,
            orderId: args.orderId,
          }
        });
      }
    });

    // Delete
    t.nonNull.field('deleteOrderPromotion', {
      type: 'OrderPromotion',
      args: {
        promotionCode: nonNull(stringArg()),
        orderId: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.orderPromotion.delete({
          where: {
            promotionCode_orderId: {
              promotionCode: args.promotionCode,
              orderId: args.orderId
          }
        }
        });
      }
    });

    // Update
    // No update required

  }
});
