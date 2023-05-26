import { extendType, floatArg, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';
import { dateTimeArg } from './scalars/Date';

export const Promotion = objectType({
  name: 'Promotion',
  definition(t) {
    t.nonNull.id('promotionCode');
    t.nonNull.float('discountPercent');
    t.nonNull.float('maximumDiscount');
    t.nonNull.float('minimumPrice');
    t.nonNull.dateTime('startDate');
    t.nonNull.dateTime('endDate');
    t.nonNull.list.field('orderPromotions', {
      type: "OrderPromotion",
      resolve(parent, args, context: Context){
        return context.prisma.promotion.findUnique({
          where: { promotionCode: parent.promotionCode }
        }).orderPromotions();
      }
    });
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

export const PromotionMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field("addPromotion", {
      type: 'Promotion',
      args: {
        discountPercent: nonNull(floatArg()),
        maximumDiscount: nonNull(floatArg()),
        minimumPrice: nonNull(floatArg()),
        startDate: nonNull(stringArg()),
        endDate: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.promotion.create({
          data: {
            discountPercent: args.discountPercent,
            maximumDiscount: args.maximumDiscount,
            minimumPrice: args.minimumPrice,
            startDate: new Date(args.startDate),
            endDate: new Date(args.endDate),
          }
        });
      }
    });

    // Delete
    t.nonNull.field("deletePromotion", {
      type: 'Promotion',
      args:{
        promotionCode: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.promotion.delete({
          where: {
            promotionCode: args.promotionCode
          }
        });
      }
    });

    // Update
    t.nonNull.field("updatePromotion", {
      type: 'Promotion',
      args: {
        promotionCode: nonNull(stringArg()),
        discountPercent: nonNull(floatArg()),
        maximumDiscount: nonNull(floatArg()),
        minimumPrice: nonNull(floatArg()),
        startDate: nonNull(stringArg()),
        endDate: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.promotion.update({
          where:{
            promotionCode: args.promotionCode
          },
          data: {
            discountPercent: args.discountPercent,
            maximumDiscount: args.maximumDiscount,
            minimumPrice: args.minimumPrice,
            startDate: new Date(args.startDate),
            endDate: new Date(args.endDate),
          }
        });
      }
    });


  }
});
