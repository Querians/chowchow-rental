import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const StaffInfo = objectType({
  name: 'StaffInfo',
  definition(t) {
    t.nonNull.string('staffId');        // PK
    t.nonNull.string('prefix');
    t.nonNull.string('staffFirstName');
    t.nonNull.string('staffLastName');
    // t.nonNull.string('positionId');     // FK from Postion
    t.nonNull.field('position', {
      type: 'Position',
      resolve(parent, args, context: Context){
        return context.prisma.staffInfo
              .findUnique({
                where: { staffId: parent.staffId }
        }).position();
      }
    })
    t.nonNull.string('tel');
    t.nonNull.dateTime('startDate');    // (date)
    t.nonNull.dateTime('dob');          // (date)
    t.nonNull.float('salary');          // (double)
    t.nonNull.string('password');

    t.list.field('issues', {
      type: 'Issue',
      resolve(parent, args, context: Context){
        return context.prisma.staffInfo
              .findUnique({
                where: { staffId: parent.staffId }
        }).issues();
      }
    });
    t.list.field('orderTransports', {
      type: 'OrderTransport',
      resolve(parent, args, context: Context){
        return context.prisma.staffInfo
              .findUnique({
                where: { staffId: parent.staffId }
        }).orderTransports();
      }
    });
  },
});

export const StaffInfoQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allStaffInfo', {
      type: 'StaffInfo',
      resolve(parent, args, context: Context, info){
        return context.prisma.staffInfo.findMany();
      }
    })
  }
})
