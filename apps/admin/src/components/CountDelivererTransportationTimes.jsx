import { useState, useEffect } from 'react';
import ClientOnly from '@/components/ClientOnly';
import { gql, useQuery, useLazyQuery } from '@apollo/client';

// query staff role DL ทั้งหมดมาก่อน แล้ว filterby staffID แล้วนับ length
const ALL_STAFF = gql`
  query SearchStaffInfoByPostionId($positionId: String) {
    searchStaffInfoByPostionId(positionId: $positionId) {
      staffLastName
      staffFirstName
      orderTransports {
        timeGo
      }
    }
  }
`
// use filter get rid of where ordertransport is null
// these nulls occured because vehicles that have never be used

const STAFF_ROLE = gql`
query StaffProfile {
StaffProfile {
  position {
    positionId
  }
}
}
`

export const CountDelivererTransportationTimes = () => {

  const [executeSearch, { data, loading, error }] = useLazyQuery(ALL_STAFF, {pollInterval: 1000});
  // const [productlist, setProductList] = useState('');
  const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
  const [role, setRole] = useState('');

  useEffect(() => {
    console.log(staff?.StaffProfile[0].position.positionId);
    setRole(staff?.StaffProfile[0].position.positionId);
  }, [staff])

  useEffect(() => {
    executeSearch({
      variables: { positionId: "DL" }
    })
  }, [executeSearch])

  useEffect(() => {
    console.log(data)
  }, [data])

  if (loadingposition) {
    return (
      <h2>Loading Data...</h2>
    );
  };

  if (errorposition) {
    console.error(errorposition);
    return (
      <h2>Sorry, {errorposition}...</h2>
    );
  };

  console.log(staff)

  if (loading) {
    return (
      <h2>Loading Data...</h2>
    );
  };

  if (error) {
    console.error(error);
    return (
      <h2>Sorry, there&apos;s been an error...</h2>
    );
  };

  return (
    <>
    <div>
      <div className="w-full rounded-lg border-2 border-black p-4 mb-10 bg-white">
        <div className="text-2xl font-bold py-2">{"Number of deliverers' transportation times"}</div>
        <div className="p-4">
          <div class="relative overflow-x-auto overflow-y-auto h-48 rounded-lg">
            <table class="w-full text-sm text-center text-gray-500">
                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                          Deliverer
                        </th>
                        <th scope="col" class="px-6 py-3">
                          {new Date().getFullYear()}
                        </th>
                        <th scope="col" class="px-6 py-3">
                         {new Date().getFullYear() - 1 }
                        </th>
                        <th scope="col" class="px-6 py-3">
                        {new Date().getFullYear() - 2 }
                        </th>
                    </tr>
                </thead>
                <tbody>
                  {data && data.searchStaffInfoByPostionId?.map((st, i) => (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" class="bg-[#E1E1E1] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {st.staffFirstName + ' ' + st.staffLastName}
                        </td>
                        <td scope="row" class="px-6 py-4">
                          {st.orderTransports.length > 0 ?
                            st.orderTransports.filter((time)=>{
                              return (
                                new Date(time.timeGo) < new Date(new Date().getFullYear()+1, 0, 1)
                                &&
                                new Date(time.timeGo) > new Date(new Date().getFullYear(), 0, 1)
                              )
                            }).length
                            :
                             0
                          }
                        </td>
                        <td class="px-6 py-4">
                        {st.orderTransports.length > 0 ?
                            st.orderTransports.filter((time)=>{
                              return (
                                new Date(time.timeGo) < new Date(new Date().getFullYear(), 0, 1)
                                &&
                                new Date(time.timeGo) > new Date(new Date().getFullYear()-1, 0, 1)
                              )
                            }).length
                            :
                             0
                          }
                        </td>
                        <td class="px-6 py-4">
                        {st.orderTransports.length > 0 ?
                            st.orderTransports.filter((time)=>{
                              return (
                                new Date(time.timeGo) < new Date(new Date().getFullYear()-1, 0, 1)
                                &&
                                new Date(time.timeGo) > new Date(new Date().getFullYear()-2, 0, 1)
                              )
                            }).length
                            :
                             0
                          }
                        </td>
                      </tr>
                  ))}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
