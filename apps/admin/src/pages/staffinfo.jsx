import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button } from 'ui';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ClientOnly from '@/components/ClientOnly';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { SideBar } from '@/components/SideBar';

const STAFFSELF_QUERY = gql`
query Query {
    StaffProfile {
      staffId
      prefix
      staffFirstName
      staffLastName
      dob
      tel
      position {
        positionId
      }
      salary
      startDate
    }
  }
`

const STAFF_ROLE = gql`
query StaffProfile {
StaffProfile {
  position {
    positionId
  }
}
}
`

const Staffinfo = () => {
    const [executeSearch, { data, loading, error }] = useLazyQuery(STAFFSELF_QUERY, {pollInterval: 1000});
    // const [productlist, setProductList] = useState('');
    const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
    const [role, setRole] = useState('');
    useEffect(() => {
        executeSearch()
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

    const onSubmit = () => {

    }


    return (
        <>
        <ClientOnly>
            <aside>
                <SideBar role={staff.StaffProfile[0].position.positionId} />
            </aside>

            <main className="container mx-auto lg:ml-64 px-10">
                <form action="">
                    <Breadcrumb current="Staff" />
                    <h1 className="text-4xl font-bold py-6">Staff Info</h1>
                    <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <TextInput type='readOnly' placeholder="" value={data.StaffProfile[0].staffId} label="Staff ID" />
                                <TextInput type='readOnly' placeholder="" value={data.StaffProfile[0].prefix} label="Prefix" />
                                <TextInput type='readOnly' placeholder="" value={data.StaffProfile[0].staffFirstName} label="Firstname" />
                                <TextInput type='readOnly' placeholder="" value={data.StaffProfile[0].staffLastName} label="Lastname" />
                                <TextInput type='readOnly' placeholder="" value={data.StaffProfile[0].dob.split('T')[0]} label="Date of Birth" />
                                <TextInput type='readOnly' placeholder="" value={data.StaffProfile[0].tel} label="Tel." />
                                <TextInput type='readOnly' placeholder="" value={data.StaffProfile[0].position.positionId} label="Position ID" />
                                <TextInput type='readOnly' placeholder="" value={data.StaffProfile[0].salary} label="Salary per month" />
                                <TextInput type='readOnly' placeholder="" value={data.StaffProfile[0].startDate.split('T')[0]} label="Start Date" />
                            </div>
                        </div>
                    </div>
                </form>
            </main>
            </ClientOnly>
        </>
    );
};

export default Staffinfo;
