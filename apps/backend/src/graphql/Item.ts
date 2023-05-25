import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const Item = objectType({
  name: 'Item',
  definition(t) {
    t.nonNull.string('itemId');              // PK
    // t.nonNull.string('productId');           // FK1 from Product
    t.nonNull.field('product', {
      type: 'Product',
      resolve(parent, args, context: Context){
        return context.prisma.item.findUnique({
          where: { itemId: parent.itemId }
        }).product();
      }
    });
    t.nonNull.dateTime('itemRegisterDate');  // (timestamp)
    t.nonNull.string('stockAddress');
    // t.nonNull.string('itemStatusId');        // FK2 from ItemStatus
    t.nonNull.field('itemStatus', {
      type: 'ItemStatus',
      resolve(parent, args, context: Context){
        return context.prisma.item.findUnique({
          where: { itemId: parent.itemId }
        }).itemStatus();
      }
    });

    t.list.field('subOrders', {
      type: 'SubOrder',
      resolve(parent, args, context: Context){
        return context.prisma.item.findUnique({
          where: { itemId: parent.itemId }
        }).subOrders();
      }
    });
  }
});

export const ItemQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allItem', {
      type: 'Item',
      resolve(parent, args, context: Context, info) {
        return context.prisma.item.findMany();
      }
    });
  }
});
