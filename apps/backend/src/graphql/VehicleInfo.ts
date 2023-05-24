import { extendType, idArg, intArg, nonNull, objectType, stringArg } from 'nexus';
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
  },
});
