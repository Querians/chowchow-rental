import { objectType, extendType, nonNull, stringArg } from 'nexus';
import { default as bcrypt }  from 'bcryptjs';
import { default as jwt }  from 'jsonwebtoken';
import { Context } from '../context.ts';
import 'dotenv/config';

const APP_SECRET = process.env.APP_SECRET;

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.nonNull.string('token');
    t.nonNull.field('customer', {
      type: 'Customer',
    });
  },
});

export const AuthMutation = extendType({
  type: 'Mutation',
  definition(t) {
    // Sign Up
    t.nonNull.field('signup', {
      type: 'AuthPayload',
      args: {
        firstName: nonNull(stringArg()),
        lastName: nonNull(stringArg()),
        dob: nonNull(stringArg()),
        tel: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(parent, args, context: Context) {
        const customer = await context.prisma.customer.create({
          data: {
            firstName: args.firstName,
            lastName: args.lastName,
            dob: new Date(args.dob),
            tel: args.tel,
            email: args.email,
            password: await bcrypt.hash(args.password, 10),
          },
        });

        const token = jwt.sign({ userId: customer.customerId }, APP_SECRET);
        return { token, customer };
      },
    });
    // Log In
    t.nonNull.field('login', {
      type: 'AuthPayload',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(parent, args, context: Context) {
        const customer = await context.prisma.customer.findUnique({
          where: { email: args.email },
        });

        if (!customer) throw new Error('No such user found');

        const valid = await bcrypt.compare(args.password, customer.password);

        if (!valid) throw new Error('No such user found');

        const token = jwt.sign({ userId: customer.customerId }, APP_SECRET);
        return { token, customer };
      },
    });
  },
});
