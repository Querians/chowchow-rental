import { Sidebar, Breadcrumb } from 'ui';
import { DelivererCheckinout } from '@/components/DelivererCheckinout';
import { DelivererTransport } from '@/components/DelivererTransport';
import { useState, useEffect } from 'react';
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

const EDIT_STATUS=1;
const EDIT_ORDERTR = gql

const Transport = () => {
  const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
  const [role, setRole] = useState('');

  useEffect(() => {
    console.log(staff?.StaffProfile[0].position.positionId);
    setRole(staff?.StaffProfile[0].position.positionId);
  }, [staff])

  // const role = 'DL'
  return (

      <>
      <ClientOnly>
        <aside>
            <SideBar role={role} showDeli="true" />
        </aside>
        <main className="container mx-auto lg:ml-64 px-10 space-y-4">
          <Breadcrumb first_name="Logistic" current="Transport Update" />
          <h1 className="text-4xl font-bold py-6">Transport Update</h1>
          <DelivererTransport />
          {
            role == 'DL' || 'DEV' && <DelivererCheckinout />
          }
        </main>
        </ClientOnly>
      </>
    );
};

export default Transport;
