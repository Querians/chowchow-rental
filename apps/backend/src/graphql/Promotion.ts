import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const Promotion = objectType({
  name: 'Promotion',
  definition(t) {
    t.nonNull.id('promotionCode'),
    t.nonNull.float('discountPercent'),
    t.nonNull.float('maximumDiscount'),
    t.nonNull.float('minimumPrice'),
    t.nonNull.dateTime('startDate'),
    t.nonNull.dateTime('endDate')
    t.nonNull.list.field('orderPromotions', {
      type: "OrderPromotion",
      resolve(parent, args, context: Context){
        return context.prisma.promotion.findUnique({
          where: { promotionCode: parent.promotionCode }
        }).orderPromotions();
      }
    })
  },
});

export const PromotionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allPromotion', {
      type: 'Promotion',
      resolve(parent, args, context: Context, info){
        return context.prisma.promotion.findMany();
      }
    })
  }
})
