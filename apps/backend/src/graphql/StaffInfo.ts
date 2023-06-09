import { extendType, floatArg, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
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
    });

    // Their Profile
    t.list.field('StaffProfile', {
      type: 'StaffInfo',
      // args: {
      //   staffId: nonNull(stringArg())
      // },
      resolve(parent, args, context: Context, info){

        if(!context.userId){
          throw new Error('Cannot see without login');
        }

        return context.prisma.staffInfo.findMany({
          where: { staffId: context.userId }
        });
      }
    });

// Query by Search staffId
t.list.field('searchStaffInfoByStaffId', {
  type: 'StaffInfo',
  args: {
    staffId: stringArg()
  },
  resolve(parent, args, context: Context, info) {
    return context.prisma.staffInfo.findMany({
      where : {staffId: args.staffId}
    });
  }
});

// Query by Search first and last name
t.list.field('searchStaffInfoByName', {
  type: 'StaffInfo',
  args: {
    staffFirstName: stringArg(),
    staffLastName: stringArg()
  },
  resolve(parent, args, context: Context, info) {
    return context.prisma.staffInfo.findMany({
      where : {OR : [args.staffFirstName, args.staffLastName]} ? {
        AND: [
          { staffFirstName: { contains: args.staffFirstName } },
          { staffLastName: { contains: args.staffLastName } }
        ]
      } : {}
    });
  }
});

// Query by Search positionId
t.list.field('searchStaffInfoByPostionId', {
  type: 'StaffInfo',
  args: {
    positionId: stringArg()
  },
  resolve(parent, args, context: Context, info) {
    return context.prisma.staffInfo.findMany({
      where : {positionId: args.positionId}
    });
  }
});

  }
})

export const StaffInfoMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field('addStaffInfo', {
      type: 'StaffInfo',
      args: {
        prefix: nonNull(stringArg()),
        staffFirstName: nonNull(stringArg()),
        staffLastName: nonNull(stringArg()),
        positionId: nonNull(stringArg()),
        tel: nonNull(stringArg()),
        startDate: nonNull(stringArg()),
        dob: nonNull(stringArg()),
        salary: nonNull(floatArg()),
        password: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.staffInfo.create({
          data: {
            prefix: args.prefix,
            staffFirstName: args.staffFirstName,
            staffLastName: args.staffLastName,
            positionId: args.positionId,
            tel: args.tel,
            startDate: new Date(args.startDate),
            dob: new Date(args.dob),
            salary: args.salary,
            password: args.password
          }
        });
      }
    });

    // Delete
    t.nonNull.field('deleteStaffInfo', {
      type: 'StaffInfo',
      args: {
        staffId: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.staffInfo.delete({
          where: {
            staffId:args.staffId
          }
        });
      }
    });

    // Update
    t.nonNull.field('updateStaffInfo', {
      type: 'StaffInfo',
      args: {
        staffId: nonNull(stringArg()),
        prefix: nonNull(stringArg()),
        staffFirstName: nonNull(stringArg()),
        staffLastName: nonNull(stringArg()),
        positionId: nonNull(stringArg()),
        tel: nonNull(stringArg()),
        startDate: nonNull(stringArg()),
        dob: nonNull(stringArg()),
        salary: nonNull(floatArg()),
        password: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.staffInfo.update({
          data: {
            prefix: args.prefix,
            staffFirstName: args.staffFirstName,
            staffLastName: args.staffLastName,
            positionId: args.positionId,
            tel: args.tel,
            startDate: new Date(args.startDate),
            dob: new Date(args.dob),
            salary: args.salary,
            password: args.password
          },
          where:{
            staffId:args.staffId
          }
        });
      }
    });

  }
});
