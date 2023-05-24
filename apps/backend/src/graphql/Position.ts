import { arg, extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const Position = objectType({
  name: 'Position',
  definition(t) {
    t.nonNull.string('positionId'); // PK
    t.nonNull.string('positionN');
    t.list.field('staffInfos', {
      type: 'StaffInfo',
      resolve(parent, args, context: Context) {
        return context.prisma.position
          .findUnique({
            where: { positionId: parent.positionId },
          })
          .staffInfos();
      },
    });
    t.list.field('categoryProblems', {
      type: 'CategoryProblem',
      resolve(parent, args, context: Context) {
        return context.prisma.position
          .findUnique({
            where: { positionId: parent.positionId },
          })
          .categoryProblems();
      },
    });
  },
});

export const PositionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allPosition', {
      type: 'Position',
      resolve(parent, args, context: Context, info){
        return context.prisma.position.findMany();
      }
    });
  },
})
