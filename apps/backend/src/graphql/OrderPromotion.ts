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
