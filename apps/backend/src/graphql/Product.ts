import { extendType, floatArg, idArg, intArg, nonNull, nullable, objectType, stringArg } from 'nexus';
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
    // Query all Product
    t.list.field('allProduct', {
      type: 'Product',
      resolve(parent, args, context: Context, info) {
        return context.prisma.product.findMany();
      }
    });

    // Query by Search name
    t.list.field('searchProduct', {
      type: 'Product',
      args: {
        filter: stringArg()
      },
      resolve(parent, args, context: Context, info) {
        return context.prisma.product.findMany({
          where : args.filter ? {
            OR: [
              { productName: { contains: args.filter } },
              { description: { contains: args.filter } }
            ]
          } : {}
        });
      }
    });

  },
});

export const ProductMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field('addProduct', {
      type: 'Product',
      args: {
        productId: nonNull(stringArg()),
        productName: nonNull(stringArg()),
        categoryName: nonNull(stringArg()),
        pictureUrl: nonNull(stringArg()),
        pricePerDay: nonNull(floatArg()),
        weight: nonNull(floatArg()),
        height: nonNull(floatArg()),
        width: nonNull(floatArg()),
        depth: nonNull(floatArg()),
        color: nonNull(stringArg()),
        material: nonNull(stringArg()),
        description: nullable(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.product.create({
          data: args.description ? {
            productId: args.productId,
            productName: args.productName,
            categoryName: args.categoryName,
            pictureUrl: args.pictureUrl,
            pricePerDay: args.pricePerDay,
            weight: args.weight,
            height: args.height,
            width: args.width,
            depth: args.depth,
            color: args.color,
            material: args.material,
            description: args.description,
          } : {
            productId: args.productId,
            productName: args.productName,
            categoryName: args.categoryName,
            pictureUrl: args.pictureUrl,
            pricePerDay: args.pricePerDay,
            weight: args.weight,
            height: args.height,
            width: args.width,
            depth: args.depth,
            color: args.color,
            material: args.material,
          }
        });
      }
    });

    // Delete
    t.nonNull.field('deleteProduct', {
      type: 'Product',
      args: {
        productId: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.product.delete({
          where: {
            productId: args.productId
          }
        });
      }
    });

    // Update
    t.nonNull.field('updateProduct', {
      type: 'Product',
      args: {
        productId: nonNull(stringArg()),
        productName: nonNull(stringArg()),
        categoryName: nonNull(stringArg()),
        pictureUrl: nonNull(stringArg()),
        pricePerDay: nonNull(floatArg()),
        weight: nonNull(floatArg()),
        height: nonNull(floatArg()),
        width: nonNull(floatArg()),
        depth: nonNull(floatArg()),
        color: nonNull(stringArg()),
        material: nonNull(stringArg()),
        description: nullable(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.product.update({
          data:{
            description: args.description,
            productName: args.productName,
            categoryName: args.categoryName,
            pictureUrl: args.pictureUrl,
            pricePerDay: args.pricePerDay,
            weight: args.weight,
            height: args.height,
            width: args.width,
            depth: args.depth,
            color: args.color,
            material: args.material,
          },
          where:{
            productId: args.productId
          }
        });
      }
    });

  }
});
