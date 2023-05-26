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

export const ItemStatusMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field('addItemStatus', {
      type: 'ItemStatus',
      args: {
        itemStatusId: nonNull(stringArg()),
        itemStatusName: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.itemStatus.create({
          data: {
            itemStatusId: args.itemStatusId,
            itemStatusName: args.itemStatusName,
          }
        });
      }
    });

    // Delete
    t.nonNull.field('deleteItemStatus', {
      type: 'ItemStatus',
      args: {
        itemStatusId: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.itemStatus.delete({
          where:{
            itemStatusId: args.itemStatusId
          }
        });
      }
    });

    // Update
    t.nonNull.field('updateItemStatus', {
      type: 'ItemStatus',
      args: {
        itemStatusId: nonNull(stringArg()),
        itemStatusName: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.itemStatus.update({
          data: {
            itemStatusName: args.itemStatusName
          },
          where: {
            itemStatusId: args.itemStatusId
          }
        });
      }
    });


  }
});
