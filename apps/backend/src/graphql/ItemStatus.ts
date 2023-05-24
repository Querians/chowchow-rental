import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const ItemStatus = objectType({
  name: 'ItemStatus',
  definition(t) {
    t.nonNull.string('itemStatusId');           // PK
    t.nonNull.string('itemStatusName');
    t.list.field('items', {
      type: 'Item',
      resolve(parent, args, context: Context){
        return context.prisma.itemStatus
        .findUnique({
          where: { itemStatusId: parent.itemStatusId }
        })
        .items()
      }
    })
  },
});

export const ItemStatusQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allItemStatus', {
      type: 'ItemStatus',
      resolve(parent, args, context: Context, info) {
        return context.prisma.itemStatus.findMany();
      }
    });
  }
});

