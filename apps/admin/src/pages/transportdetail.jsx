import { DelivererOrderInput, DelivererVehicleForThisOrderID,Breadcrumb } from 'ui';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import ClientOnly from '@/components/ClientOnly';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { SideBar } from '@/components/SideBar';

const STAFF_ROLE = gql`
query StaffProfile {
StaffProfile {
  position {
    positionId
  }
}
}
`

const Transportdetail = () => {
  const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
  const [role, setRole] = useState('');
  useEffect(() => {
    console.log(staff?.StaffProfile[0].position.positionId);
    setRole(staff?.StaffProfile[0].position.positionId);
  }, [staff])

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
        <SideBar showDeli="true"/>
        <main className="container mx-auto lg:ml-64 px-10 space-y-4">
          <Breadcrumb first_name="Delivery" first="/deliverer" current="Transport Detail" />
          <h1 className="text-4xl font-bold py-6">Order to send Transport Details</h1>
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

