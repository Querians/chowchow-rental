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
