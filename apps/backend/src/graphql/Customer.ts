import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const Customer = objectType({
  name: 'Customer',
  definition(t) {
    t.nonNull.string('customerId'); // PK
    t.nonNull.string('firstName');
    t.nonNull.string('lastName');
    t.nonNull.dateTime('dob'); // (Date)
    t.nonNull.string('tel');
    t.nonNull.string('email');
    t.nonNull.string('password');

    t.list.field('orders', {
      type: 'Order',
      resolve(parent, args, context: Context) {
        return context.prisma.customer
          .findUnique({
            where: { customerId: parent.customerId },
          })
          .orders();
      },
    });
    t.list.field('carts', {
      type: 'Cart',
      resolve(parent, args, context: Context) {
        return context.prisma.customer
          .findUnique({
            where: { customerId: parent.customerId },
          })
          .carts();
      },
    });
    t.list.field('issues', {
      type: 'Issue',
      resolve(parent, args, context: Context) {
        return context.prisma.customer
          .findUnique({
            where: { customerId: parent.customerId },
          })
          .issues();
      },
    });
  },
});

export const CustomerQuery = extendType({
  type: 'Query',
  definition(t) {
    // All Customer
    t.list.field('allCustomer', {
      type: 'Customer',
      resolve(parent, args, context: Context, info){
        return context.prisma.customer.findMany();
      }
    });

    // Their Profile
    t.list.field('Profile', {
      type: 'Customer',
      // args: {
      //   customerId: nonNull(stringArg())
      // },
      resolve(parent, args, context: Context, info){

        if(!context.userId){
          throw new Error('Cannot add cart without login');
        }

        return context.prisma.customer.findMany({
          where: { customerId: context.userId }
        });
      }
    });

  }
})

export const CustomerMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field('addCustomer', {
      type: 'Customer',
      args: {
        firstName: nonNull(stringArg()),
        lastName: nonNull(stringArg()),
        dob: nonNull(stringArg()),
        tel: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.customer.create({
          data: {
            firstName: args.firstName,
            lastName: args.lastName,
            dob: new Date(args.dob),
            tel: args.tel,
            email: args.email,
            password: args.password,
          }
        });
      }
    });

    // Delete
    t.nonNull.field('deleteCustomer', {
      type: 'Customer',
      args: {
        customerId: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.customer.delete({
          where: {
            customerId:args.customerId
          }
        });
      }
    });

    // Update
    t.nonNull.field('updateCustomer', {
      type: 'Customer',
      args: {
        customerId: nonNull(stringArg()),
        firstName: nonNull(stringArg()),
        lastName: nonNull(stringArg()),
        dob: nonNull(stringArg()),
        tel: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.customer.update({
          data: {
            firstName: args.firstName,
            lastName: args.lastName,
            dob: new Date(args.dob),
            tel: args.tel,
            email: args.email,
            password: args.password,
          },
          where: {
            customerId: args.customerId
          }
        });
      }
    });

  }
});
