import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const CategoryProblem = objectType({
  name: 'CategoryProblem',
  definition(t) {
    t.nonNull.string('categoryProblemId');  // PK
    t.nonNull.string('categoryProblemN');       // (text)
    // t.nonNull.string('positionId');         // FK from Position
    t.nonNull.field('position', {
      type: 'Position',
      resolve(parent, args, context: Context){
        return context.prisma.categoryProblem.findUnique({
          where: { categoryProblemId: parent.categoryProblemId }
        }).position();
      }
    });

    t.nonNull.list.field('issues', {
      type: 'Issue',
      resolve(parent, args, context: Context){
        return context.prisma.categoryProblem.findUnique({
          where: { categoryProblemId: parent.categoryProblemId }
        }).issues();
      }
    })
  },
});

export const CategoryProblemQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allCategoryProblem', {
      type: 'CategoryProblem',
      resolve(parent, args, context: Context, info) {
        return context.prisma.categoryProblem.findMany();
      }
    });
  }
});

export const CategoryProblemMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field('addCategoryProblem', {
      type: 'CategoryProblem',
      args: {
        categoryProblemId: nonNull(stringArg()),
        categoryProblemN: nonNull(stringArg()),
        positionId: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.categoryProblem.create({
          data: {
            categoryProblemId: args.categoryProblemId,
            categoryProblemN: args.categoryProblemN,
            positionId: args.positionId,
          }
        });
      }
    });

    // Delete
    t.nonNull.field('deleteCategoryProblem', {
      type: 'CategoryProblem',
      args: {
        categoryProblemId: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.categoryProblem.delete({
          where: {
            categoryProblemId: args.categoryProblemId
          }
        });
      }
    });

    // Update
    t.nonNull.field('updateCategoryProblem', {
      type: 'CategoryProblem',
      args: {
        categoryProblemId: nonNull(stringArg()),
        categoryProblemN: nonNull(stringArg()),
        positionId: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.categoryProblem.update({
          data: {
            categoryProblemN: args.categoryProblemN,
            positionId: args.positionId
          },
          where: {
            categoryProblemId: args.categoryProblemId
          }
        });
      }
    });
  }
});
