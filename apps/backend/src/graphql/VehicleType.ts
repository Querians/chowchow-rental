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
    })
  }
})
