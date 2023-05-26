import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const Category = objectType({
  name: 'Category',
  definition(t) {
    // PK categoryID
    t.nonNull.string('categoryId');
    t.nonNull.string('categoryName');
    // Host Reference Product
    t.list.field('products', {
      type: 'Product',
      resolve(parent, args, context){
        return context.prisma.category.findUnique({
          where: { categoryId: parent.categoryId }
        }).products()
      }
    });
  },
});

export const CategoryQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allCategory', {
      type: 'Category',
      resolve(parent, args, context: Context, info){
        return context.prisma.category.findMany();
      }
    })
  }
})

export const CategoryMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field('addCategory', {
      type: 'Category',
      args: {
        categoryId: nonNull(stringArg()),
        categoryName: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.category.create({
          data: {
            categoryId: args.categoryId,
            categoryName: args.categoryName,
          }
        });
      }
    });

    // Delete
    t.nonNull.field('deleteCategory', {
      type: 'Category',
      args: {
        categoryId: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.category.delete({
          where: {
            categoryId: args.categoryId
          }
        });
      }
    });

    // Update
    t.nonNull.field('updateCategory', {
      type: 'Category',
      args: {
        categoryId: nonNull(stringArg()),
        categoryName: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.category.update({
          where: {
            categoryId: args.categoryId
          },
          data: {
            categoryName: args.categoryName
          }
        });
      }
    });


  }
});
