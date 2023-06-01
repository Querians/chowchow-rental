import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Sidebar } from 'ui';

const STAFF_ROLE = gql`
  query StaffProfile {
    StaffProfile {
      position {
        positionId
      }
    }
  }
`

export const SideBar = (prop) => {
  const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
  const [role, setRole] = useState('');

  useEffect(() => {
    console.log(staff?.StaffProfile[0].position.positionId);
    setRole(staff?.StaffProfile[0].position.positionId);
  }, [staff])

  return (
      <aside>
        <Sidebar
          role={role}
          fullName={prop?.fullName}
          staffID={prop?.staffID}
          showStock={prop?.showStock}
          showOrder={prop?.showOrder}
          showFinance={prop?.showFinance}
          showIssue={prop?.showIssue}
          showDeli={prop?.showDeli}
          showPromo={prop?.showPromo}
        />
      </aside>
  )
}
