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

    t.list.field('searchItemByItemId_ProductId', {
      type: 'Item',
      args: {
        itemId: stringArg(),
        productId: stringArg()
      },
      resolve(parent, args, context: Context, info) {
        return context.prisma.item.findMany({
          where : {OR: [args.itemId, args.productId]} ? {
            AND: [
              { itemId: { contains : args.itemId}},
              { productId: { contains : args.productId}}
            ]
          } : {}
        });
      }
    });

    t.list.field('searchItemByItemId', {
      type: 'Item',
      args: {
        itemId: stringArg()
      },
      resolve(parent, args, context: Context, info) {
        return context.prisma.item.findMany({
          where : { itemId : {contains : args.itemId}}
        });
      }
    });

    t.list.field('searchItemByItemStatusId', {
      type: 'Item',
      args: {
        itemStatusId: stringArg()
      },
      resolve(parent, args, context: Context, info) {
        return context.prisma.item.findMany({
          where : {itemStatusId : args.itemStatusId}
        });
      }
    });


  }
});

export const ItemMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field('addItem', {
      type: 'Item',
      args: {
        itemId: nonNull(stringArg()),
        productId: nonNull(stringArg()),
        itemRegisterDate: nonNull(stringArg()),
        stockAddress: nonNull(stringArg()),
        itemStatusId: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.item.create({
          data: {
            itemId: args.itemId,
            productId: args.productId,
            itemRegisterDate: new Date(args.itemRegisterDate),
            stockAddress: args.stockAddress,
            itemStatusId: args.itemStatusId,
          }
        });
      }
    });

    // Delete
    t.nonNull.field('deleteItem', {
      type: 'Item',
      args: {
        itemId: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.item.delete({
          where: {
            itemId: args.itemId
          }
        });
      }
    });

    // Update
    t.nonNull.field('updateItem', {
      type: 'Item',
      args: {
        itemId: nonNull(stringArg()),
        productId: nonNull(stringArg()),
        itemRegisterDate: nonNull(stringArg()),
        stockAddress: nonNull(stringArg()),
        itemStatusId: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.item.update({
          where: {
            itemId: args.itemId
          },
          data: {
            productId: args.productId,
            itemRegisterDate: new Date(args.itemRegisterDate),
            stockAddress: args.stockAddress,
            itemStatusId: args.itemStatusId,
          }
        });
      }
    });

    // Update
    t.nonNull.field('updateItemstatusInItem', {
      type: 'Item',
      args: {
        itemId: nonNull(stringArg()),
        itemStatusId: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.item.update({
          where: {
            itemId: args.itemId
          },
          data: {
            itemStatusId: args.itemStatusId,
          }
        });
      }
    });


  }
});
