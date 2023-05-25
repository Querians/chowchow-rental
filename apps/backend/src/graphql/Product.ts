import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const Product = objectType({
  name: 'Product',
  definition(t) {
    t.nonNull.string('productId');     // PK
    t.nonNull.string('productName');
    // t.nonNull.string('categoryId');    // FK from Category
    t.nonNull.field('category', {
      type: 'Category',
      resolve(parent, args, context :Context){
        return context.prisma.product.findUnique({
          where: { productId: parent.productId }
        }).category();
      }
    });
    t.nonNull.string('pictureUrl');    // (text)
    t.nonNull.float('pricePerDay');    // (double)
    t.nonNull.float('weight');         // (double)
    t.nonNull.float('height');         // (double)
    t.nonNull.float('width');          // (double)
    t.nonNull.float('depth');          // (double)
    t.nonNull.string('color');
    t.nonNull.string('material');
    t.string('description');    // (text)

    t.list.field('carts', {
      type: 'Cart',
      resolve(parent, args, context: Context){
        return context.prisma.product.findUnique({
          where: { productId: parent.productId }
        }).carts();
      }
    });
    t.list.field('items', {
      type: 'Item',
      resolve(parent, args, context: Context){
        return context.prisma.product.findUnique({
          where: { productId: parent.productId }
        }).items();
      }
    });
  }
});

export const ProductQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allProduct', {
      type: 'Product',
      resolve(parent, args, context: Context, info) {
        return context.prisma.product.findMany();
      }
    });
  },
});
