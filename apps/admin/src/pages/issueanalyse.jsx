import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Sidebar, Breadcrumb, Button, SearchBar } from 'ui';
import Link from 'next/link';
import ClientOnly from '@/components/ClientOnly';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { SideBar } from '@/components/SideBar';

const ITEM_QUERY = gql`
  query Query {
  allStaffInfo {
    staffId
    issues {
      categoryProblem {
        categoryProblemId
        }
      }
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


const IssueAnalyse = () => {

  const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
  const { data, loading, error } = useQuery(ITEM_QUERY, {pollInterval: 1000});
  const [role, setRole] = useState('');

  const [isShow, setShow] = useState(false);
  const popup = () => {
      setShow(!isShow);
  };
  const drop = () => {
      popup();
      // code for drop row
  }

  useEffect(() => {
    console.log(staff?.StaffProfile[0].position.positionId);
    setRole(staff?.StaffProfile[0].position.positionId);
  }, [staff])

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

  console.log(data)


    return (
        <>
          <ClientOnly>
            <aside>
                <SideBar role={role} showIssue="true" />
            </aside>
            <main className="container mx-auto lg:ml-64 px-10 space-y-4 pb-8">
                <Breadcrumb first_name="Order Management" first="/order" current="Order" />
                <h1 className="text-4xl font-bold pt-6 pb-4">Issue Analysis</h1>
                <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
                    <h1 className="text-xl font-bold">{"Number Of Issue's category problem that handle by each staff "}</h1>
                    <p className="pt-2 pl-4">{"Summary of Issue's category problem that was handle by each staff"}</p>
                    <div className="p-4">
                        <div class="relative overflow-x-auto rounded-lg h-[60vh]">
                            <table class="w-full text-sm text-center text-gray-500 ">
                                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Staff ID
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Application Error
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Feedback
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Improper Service
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Late Delivery
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Payment Problem
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Question  Answer
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Unauthorized access
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.allStaffInfo?.map((staff) => (
                                        <tr class="bg-white border-b">
                                            <th scope="row" class="px-6 py-4 font-normal bg-[#E1E1E1]">
                                            {staff.staffId}
                                            </th>
                                            <td class="px-6 py-4">
                                            {staff.issues != 0 ? staff.issues?.filter((e)=>{
                                                  return e.categoryProblem.categoryProblemId == 'AE'
                                                 })?.length : 0}
                                            </td>
                                            <td class="px-6 py-4">
                                            {staff.issues != 0 ? staff.issues?.filter((e)=>{
                                                  return e.categoryProblem.categoryProblemId == 'FB'
                                                 })?.length : 0}
                                            </td>
                                            <td class="px-6 py-4">
                                            {staff.issues != 0 ? staff.issues?.filter((e)=>{
                                                  return e.categoryProblem.categoryProblemId == 'IS'
                                                 })?.length : 0}
                                            </td>
                                            <td class="px-6 py-4">
                                            {staff.issues != 0 ? staff.issues?.filter((e)=>{
                                                  return e.categoryProblem.categoryProblemId == 'LD'
                                                 })?.length : 0}
                                            </td>
                                            <td class="px-6 py-4">
                                            {staff.issues != 0 ? staff.issues?.filter((e)=>{
                                                  return e.categoryProblem.categoryProblemId == 'PP'
                                                 })?.length : 0}
                                            </td>
                                            <td class="px-6 py-4">
                                            {staff.issues != 0 ? staff.issues?.filter((e)=>{
                                                  return e.categoryProblem.categoryProblemId == 'QA'
                                                 })?.length : 0}
                                            </td>
                                            <td class="px-6 py-4">
                                            {staff.issues != 0 ? staff.issues?.filter((e)=>{
                                                  return e.categoryProblem.categoryProblemId == 'UA'
                                                 })?.length : 0}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
          </ClientOnly>
        </>
    );
};

export default IssueAnalyse;
