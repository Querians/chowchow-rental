import { booleanArg, extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const VehicleInfo = objectType({
  name: 'VehicleInfo',
  definition(t) {
    t.nonNull.id('vehicleLicence');
    t.field('vehicleType', {
      type: 'VehicleType',
      resolve(parent, args, context: Context) {
        return context.prisma.vehicleInfo
          .findUnique({
            where: { vehicleLicence: parent.vehicleLicence },
          })
          .vehicleType();
      },
    });
    t.nonNull.string('brand');
    t.nonNull.string('model');
    t.nonNull.dateTime('registerDate');
    t.nonNull.boolean('status');
    t.list.field('orderTransports', {
      type: 'OrderTransport',
      resolve(parent, args, context: Context) {
        return context.prisma.vehicleInfo
          .findUnique({
            where: { vehicleLicence: parent.vehicleLicence },
          })
          .orderTransports();
      },
    });
  },
});

export const VehicleInfoQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allVehicleInfo', {
      type: 'VehicleInfo',
      resolve(parent, args, context: Context, info) {
        return context.prisma.vehicleInfo.findMany();
      },
    });

 // Query vehicle by search licence
 t.list.field('searchVehicleInfoVehicleLicence', {
  type: 'VehicleInfo',
  args: {
    vehicleLicence: stringArg()
  },
  resolve(parent, args, context: Context, info) {
    return context.prisma.vehicleInfo.findMany({
      where : {vehicleLicence : args.vehicleLicence}
    });
  }
});

// Query vehicle by search brand & model
t.list.field('searchVehicleInfoByBrand_Model', {
  type: 'VehicleInfo',
  args: {
    brand: stringArg(),
    model: stringArg()
  },
  resolve(parent, args, context: Context, info) {
    return context.prisma.vehicleInfo.findMany({
      where : {OR : [args.brand, args.model]} ? {
        AND: [
          { brand: {contains :args.brand} },
          { model: {contains : args.model} }
        ]
      } : {}
    });
  }
});

// Query vehicle by search status
t.list.field('searchVehicleInfoByStatus', {
  type: 'VehicleInfo',
  args: {
    status: booleanArg()
  },
  resolve(parent, args, context: Context, info) {
    return context.prisma.vehicleInfo.findMany({
      where : {status : args.status}
    });
  }
});

  },
});

export const VehicleInfoMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field('addVehicleInfo', {
      type: 'VehicleInfo',
      args: {
        vehicleLicence: nonNull(stringArg()),
        vehicleTypeId: nonNull(stringArg()),
        brand: nonNull(stringArg()),
        model: nonNull(stringArg()),
        registerDate: nonNull(stringArg()),
        status: nonNull(booleanArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.vehicleInfo.create({
          data: {
            vehicleLicence: args.vehicleLicence,
            vehicleTypeId: args.vehicleTypeId,
            brand: args.brand,
            model: args.model,
            registerDate: new Date(args.registerDate),
            status: args.status,
          }
        });
      }
    });

    // Delete
    t.nonNull.field('deleteVehicleInfo', {
      type: 'VehicleInfo',
      args: {
        vehicleLicence: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.vehicleInfo.delete({
          where: {
            vehicleLicence: args.vehicleLicence
          }
        });
      }
    });

    // Update
    t.nonNull.field('updateVehicleInfo', {
      type: 'VehicleInfo',
      args: {
        vehicleLicence: nonNull(stringArg()),
        vehicleTypeId: nonNull(stringArg()),
        brand: nonNull(stringArg()),
        model: nonNull(stringArg()),
        registerDate: nonNull(stringArg()),
        status: nonNull(booleanArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.vehicleInfo.update({
          data: {
            vehicleTypeId: args.vehicleTypeId,
            brand: args.brand,
            model: args.model,
            registerDate: new Date(args.registerDate),
            status: args.status,
          },
          where: {
            vehicleLicence: args.vehicleLicence
          }
        });
      }
    });


  }
});
