import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const SubOrder = objectType({
  name: 'SubOrder',
  definition(t) {
    t.nonNull.field('order', {
      type: 'Order',
      resolve(parent, args, context: Context){
        return context.prisma.subOrder.findUnique({
          where:
          { orderId_itemId: {
              orderId: parent.orderId,
              itemId: parent.itemId
            }
          }
        }).order();
      }
    });
    t.nonNull.field('item', {
      type: 'Item',
      resolve(parent, args, context: Context){
        return context.prisma.subOrder.findUnique({
          where:
          { orderId_itemId: {
              orderId: parent.orderId,
              itemId: parent.itemId
            }
          }
        }).item();
      }
    })
  },
});

export const SubOrderQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allSubOrder', {
      type: 'SubOrder',
      resolve(parent, args, context: Context, info){
        return context.prisma.subOrder.findMany();
      }
    })
  }
})
