import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
import { Context } from 'vm';

export const VehicleType = objectType({
  name: 'VehicleType',
  definition(t) {
    t.nonNull.id('vehicleTypeId');
    t.nonNull.string('vehicleTypeN');
    t.list.field('vehicleInfos', {
      type: 'VehicleInfo',
      resolve(parent, args, context: Context) {
        return context.prisma.vehicleType.findUnique({
          where: { vehicleTypeId: parent.vehicleTypeId },
        }).vehicleInfos();
      },
    });
  },
});

export const VehicleTypeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allVehicleType', {
      type: 'VehicleType',
      resolve(parent, args, context: Context, info){
        return context.prisma.vehicleType.findMany();
      }
    });

// Query vehicleType by search vehicle type name
t.list.field('searchVehicleTypeByVehicleTypeName', {
  type: 'VehicleType',
  args: {
    vehicleTypeN: stringArg()
  },
  resolve(parent, args, context: Context, info) {
    return context.prisma.vehicleType.findMany({
      where : {vehicleTypeN : {contains : args.vehicleTypeN}}
    });
  }
});

  }
})

export const VehicleTypeMutation = extendType({
  type: 'Mutation',
  definition(t) {

    // Add
    t.nonNull.field("addVehicleType", {
      type: 'VehicleType',
      args: {
        vehicleTypeId: nonNull(stringArg()),
        vehicleTypeN: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.vehicleType.create({
          data: {
            vehicleTypeId: args.vehicleTypeId,
            vehicleTypeN: args.vehicleTypeN,
          }
        });
      }
    });

    // Delete
    t.nonNull.field("deleteVehicleType", {
      type: 'VehicleType',
      args: {
        vehicleTypeId: nonNull(stringArg()),
      },
      resolve(parent, args, context: Context) {
        return context.prisma.vehicleType.delete({
          where: {
            vehicleTypeId: args.vehicleTypeId,
          }
        });
      }
    });

    // Update
    t.nonNull.field("updateVehicleType", {
      type: 'VehicleType',
      args: {
        vehicleTypeId: nonNull(stringArg()),
        vehicleTypeN: nonNull(stringArg())
      },
      resolve(parent, args, context: Context) {
        return context.prisma.vehicleType.update({
          where: {
            vehicleTypeId: args.vehicleTypeId,
          },
          data: {
            vehicleTypeN: args.vehicleTypeN
          }
        });
      }
    });
  }
});
