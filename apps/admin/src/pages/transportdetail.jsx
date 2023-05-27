import { DelivererOrderInput, DelivererVehicleForThisOrderID, Breadcrumb } from 'ui';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

const Transportdetail = () => {
  const role = 'deliverer';
  // ดึงมา
  const receieveData_currentAddress = { lat: 13.736988050394881, lng: 100.52436590194702 };

  // ไม่ได้ดึง map มาเพราะใช้ useContext ใน map ไปแล้ว ;-;
  // load script for google map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    // libraries: ["places"],
  });
  if (!isLoaded) return <div>Loading....</div>;

  return (
      <>
        <main className="container mx-auto px-10 pb-8 space-y-4">
          <Breadcrumb first_name="Delivery" first="/deliverer" current="transportdetail" />
          <h1 className="text-4xl font-bold py-6">Order ID Details</h1>
          <DelivererVehicleForThisOrderID />
          <DelivererOrderInput role={role}/>
          <div className="relative flex flex-col items-center justify-center gap-3">
            <GoogleMap
              zoom={16}
              center={receieveData_currentAddress}
              mapContainerClassName="map"
              mapContainerStyle={{ width: '100%', height: '600px', margin: 'auto' }}
            >
              {receieveData_currentAddress && <MarkerF position={receieveData_currentAddress} />}
            </GoogleMap>
          </div>
        </main>
      </>
    );
};

export default Transportdetail;

