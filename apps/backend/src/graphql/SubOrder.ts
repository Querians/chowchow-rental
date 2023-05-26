import { extendType, idArg, intArg, nonNull, nullable, objectType, stringArg } from 'nexus';
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

export const SubOrderMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field('addSubOrder', {
      type: 'SubOrder',
      args: {
        orderId: nonNull(stringArg()),
        itemId: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.subOrder.create({
          data: {
            orderId: args.orderId,
            itemId: args.itemId,
          }
        });
      }
    });

    // Delete
    t.nonNull.field('deleteSubOrder', {
      type: 'SubOrder',
      args: {
        orderId: nonNull(stringArg()),
        itemId: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context, info) {
        const retval = context.prisma.subOrder.delete({
          where: {
            orderId_itemId: {
                orderId: args.orderId,
                itemId: args.itemId
            },
          }
        })
        return retval;
        // data wont return back ;-;
      }
    });

  }
});
