import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const Issue = objectType({
  name: 'Issue',
  definition(t) {
    t.nonNull.string('issueId');            // PK
    // t.nonNull.string('customerId');         // FK1 from Customer
    t.nonNull.field('customer', {
      type: 'Customer',
      resolve(parent, args, context: Context){
        return context.prisma.issue.findUnique({
          where: { issueId: parent.issueId }
        }).customer()
      }
    })
    // t.string('orderId');                    // FK2 from Order
    t.field('order', {
      type: 'Order',
      resolve(parent, args, context: Context){
        return context.prisma.issue.findUnique({
          where: { issueId: parent.issueId }
        }).order()
      }
    })
    t.nonNull.string('description');        // (text)
    // t.nonNull.string('staffId');            // FK3 from Staff
    t.nonNull.field('staff', {
      type: 'StaffInfo',
      resolve(parent, args, context: Context){
        return context.prisma.issue.findUnique({
          where: { issueId: parent.issueId }
        }).staff()
      }
    })
    t.nonNull.dateTime('timestamp');        // (timestamp)
    t.nonNull.boolean('status');            // (tinyint)
    // t.string('categoryProblemId');          // FK4 from CategoryProblem
    t.nonNull.field('categoryProblem', {
      type: 'CategoryProblem',
      resolve(parent, args, context: Context){
        return context.prisma.issue.findUnique({
          where: { issueId: parent.issueId }
        }).categoryProblem()
      }
    })
  },
});

export const IssueQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allIssue', {
      type: 'Issue',
      resolve(parent, args, context: Context, info){
        return context.prisma.issue.findMany();
      }
    })
  }
})
