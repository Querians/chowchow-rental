import { extendType, idArg, intArg, nonNull, nullable, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const Issue = objectType({
  name: 'Issue',
  definition(t) {
    t.nonNull.string('issueId'); // PK
    // t.nonNull.string('customerId');         // FK1 from Customer
    t.nonNull.field('customer', {
      type: 'Customer',
      resolve(parent, args, context: Context) {
        return context.prisma.issue
          .findUnique({
            where: { issueId: parent.issueId },
          })
          .customer();
      },
    });
    // t.string('orderId');                    // FK2 from Order
    t.field('order', {
      type: 'Order',
      resolve(parent, args, context: Context) {
        return context.prisma.issue
          .findUnique({
            where: { issueId: parent.issueId },
          })
          .order();
      },
    });
    t.nonNull.string('description'); // (text)
    // t.nonNull.string('staffId');            // FK3 from Staff
    t.nonNull.field('staff', {
      type: 'StaffInfo',
      resolve(parent, args, context: Context) {
        return context.prisma.issue
          .findUnique({
            where: { issueId: parent.issueId },
          })
          .staff();
      },
    });
    t.nonNull.dateTime('timestamp'); // (timestamp)
    t.nonNull.boolean('status'); // (tinyint)
    // t.string('categoryProblemId');          // FK4 from CategoryProblem
    t.nonNull.field('categoryProblem', {
      type: 'CategoryProblem',
      resolve(parent, args, context: Context) {
        return context.prisma.issue
          .findUnique({
            where: { issueId: parent.issueId },
          })
          .categoryProblem();
      },
    });
  },
});

export const IssueQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allIssue', {
      type: 'Issue',
      resolve(parent, args, context: Context, info) {
        return context.prisma.issue.findMany();
      },
    });

    t.list.field('searchIssueByIssueId_Status', {
      type: 'Issue',
      args: {
        issueId: stringArg(),
        status: intArg()
      },
      resolve(parent, args, context: Context, info) {
        return context.prisma.issue.findMany({
          where : {OR: [args.issueId, args.status]} ? {
            AND: [
              { issueId: { contains : args.issueId}},
              { status: args.status }
            ]
          } : {}
        });
      }
    });

      t.list.field('searchIssueByCategoryProblemId', {
        type: 'Issue',
        args: {
          categoryProblemId: stringArg(),
        },
        resolve(parent, args, context: Context, info) {
          return context.prisma.issue.findMany({
            where : { categoryProblemId : args.categoryProblemId}
          });
        },
      });

      t.list.field('searchIssueByStaffId', {
        type: 'Issue',
        args: {
          staffId: stringArg(),
        },
        resolve(parent, args, context: Context, info) {
          return context.prisma.issue.findMany({
            where : { staffId : args.staffId}
          });
        },
      });

    }
  });

export const IssueMutation = extendType({
  type: 'Mutation',
  definition(t) {
    // Add
    t.nonNull.field('addIssue', {
      type: 'Issue',
      args: {
        customerId: nonNull(stringArg()),
        orderId: (stringArg()),
        description: nonNull(stringArg()),
        staffId: nonNull(stringArg()),
        timestamp: nonNull(stringArg()),
        status: nonNull(intArg()),
        categoryProblemId: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.issue.create({
          data: {
            customerId: args.customerId,
            orderId: args.orderId ? args.orderId : null,
            description: args.description,
            staffId: args.staffId,
            timestamp: new Date(args.timestamp),
            status: args.status,
            categoryProblemId: args.categoryProblemId,
          },
        });
      },
    });

    // Delete
    t.nonNull.field('deleteIssue', {
      type: 'Issue',
      args: {
        issueId: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.issue.delete({
          where: {
            issueId: args.issueId,
          },
        });
      },
    });

    // Update
    t.nonNull.field('updateIssue', {
      type: 'Issue',
      args: {
        issueId: nonNull(stringArg()),
        customerId: nonNull(stringArg()),
        orderId: stringArg(),
        description: nonNull(stringArg()),
        staffId: nonNull(stringArg()),
        timestamp: nonNull(stringArg()),
        status: nonNull(intArg()),
        categoryProblemId: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.issue.update({
          where: {
            issueId: args.issueId,
          },
          data: {
            customerId: args.customerId,
            orderId: args.orderId ? args.orderId : null,
            description: args.description,
            staffId: args.staffId,
            timestamp: new Date(args.timestamp),
            status: args.status,
            categoryProblemId: args.categoryProblemId,
          },
        });
      },
    });
  },
});
