import { useState, useEffect } from 'react';
import { Sidebar, Button, Breadcrumb,SearchBar } from 'ui';
import Link from 'next/link';
import Image from 'next/image';
import ClientOnly from '@/components/ClientOnly';
import { gql, useQuery, useLazyQuery } from '@apollo/client';

const ISSUE_PROBLEM = gql`
query Query($issueId: String) {
    searchIssueByIssueId(issueId: $issueId) {
      customer {
        firstName
        lastName
        tel
        email
      }
      issueId
      categoryProblem {
        categoryProblemN
      }
      status
      timestamp
      order {
        orderId
      }
      description
      staff {
        position {
          positionN
        }
        prefix
        staffFirstName
        staffLastName
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



const Issue = () => {

    // const role = "sales"
    const [isShow, setShow] = useState(false);
    const [searchFilter, setSearchFilter] = useState('');
    const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
    // const { data, loading, error } = useQuery(ISSUE_PROBLEM);
    const [executeSearch, { data, loading, error }] = useLazyQuery(ISSUE_PROBLEM, {pollInterval: 1000});
    const [role, setRole] = useState('');

    useEffect(() => {
      console.log(staff?.StaffProfile[0].position.positionId);
      setRole(staff?.StaffProfile[0].position.positionId);
    }, [staff])

    useEffect(() => {
        executeSearch()
      }, [executeSearch])

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

    const itemList = {
        1: {
            issue_id: '1abdb585-2c32-4776-8965-a507358723d2',
            customer_name: "98dc25dd-8c27-4007-bfc4-61f67579d0b7",
            tel: '0754896313',
            category_prob_name: "Payment Problem",
            status: true,
            timestamp:"2023-01-01 13:30:44",
        },
        2: {
            issue_id: '1b3ebe29-b0d3-4874-8844-9fbefce7241f',
            customer_name: "c0a94f1d-7b14-4806-916d-b89b6a3b18a4",
            tel: '0463218597',
            category_prob_name: "Feedback",
            status: false,
            timestamp:"2023-01-01 13:30:44",
        },
        3: {
            issue_id: '6b8e4c8b-0c7d-4338-96ab-0b83f02563b8',
            customer_name: "98dc25dd-8c27-4007-bfc4-61f67579d0b7",
            tel: '0346521978',
            category_prob_name: "Late Delivery",
            status: false,
            timestamp:"2023-01-01 13:30:44",
        },
        4: {
            issue_id: '880fd842-92ef-424b-82de-d8868ffd1ea8',
            customer_name: "9c51e05b-160b-44a8-909e-cb04a69e60ce",
            tel: '0159326478',
            category_prob_name: "Feedback",
            status: true,
            timestamp:"2023-01-01 13:30:44",
        },
        5: {
            issue_id: '8dced197-185a-4cf1-9adb-c830a8d0a1b8',
            customer_name: "d4423a1d-54cb-4878-80e0-d09a0dad1e7a",
            tel: '0241563877',
            category_prob_name: "Feedback",
            status: true,
            timestamp:"2023-01-01 13:30:44",
        },
        6: {
            issue_id: '903bdef6-74fd-4dc1-85c0-87fa3ece6b07',
            customer_name: "98dc25dd-8c27-4007-bfc4-61f67579d0b7",
            tel: '0123456789',
            category_prob_name: "Improper Service",
            status: false,
            timestamp:"2023-01-01 13:30:44",
        },
    };

    const popup = () => {
        setShow(!isShow);
    };
    const drop = () => {
        popup();
        // code for drop row
    };

    return (
        <>
            <aside>
                <Sidebar role={role} showIssue="true" />
            </aside>
            <main className="container mx-auto lg:ml-64 px-10 space-y-4">
                <Breadcrumb first_name= "Issue" current= "Issue"  />
                <h1 className="text-4xl font-bold py-6">Issue</h1>
                {isShow && (
                    <div id="alert-additional-content-2" class="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                        <div class="flex items-center">
                            <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Info</span>
                            <h3 class="text-lg font-medium">This is a danger alert</h3>
                        </div>
                        <div class="mt-2 mb-4 text-sm">
                            {'Are you sure to delete this row. If not please click "Exit" and if you want to delete please click "Delete".'}
                        </div>
                        <div class="flex">
                            <button type="button" onClick={popup} class="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                Exit
                            </button>
                            <button type="button" onClick={drop} class="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800" data-dismiss-target="#alert-additional-content-2" aria-label="Close">
                                Delete
                            </button>
                        </div>
                    </div>
                )}
                <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
                <h1 className="text-xl font-bold">Issue ID</h1>
                <span className="text-red-300 p-4">You can search by some part of issue ID</span>
                    <div className="pt-2 px-4">
                            <SearchBar
                            onSubmit={(e) => {
                                e.preventDefault(true);
                                executeSearch({
                                  variables: { issueId: searchFilter }
                                })
                              }}
                               onChange={e=>setSearchFilter(e.target.value)}
                            placeholder="Search by Issue ID" />
                        </div>
                    <div className="p-4">
                        <div class="relative overflow-x-auto overflow-y-auto h-96 rounded-lg">
                            <table class="w-full text-sm text-center text-gray-500">
                                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Issue ID
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Customer Name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Tel.
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Category Problem Name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Timestamp
                                        </th>
                                        {role == 'SA' || 'DEV'? (
                                            <th scope="col" class="px-6 py-3">
                                                Edit
                                            </th>) : (
                                            <></>
                                        )}
                                        {/* {role == 'SA' || 'DEV'? (
                                            <th scope="col" class="px-6 py-3">
                                                Delete
                                            </th>) : (
                                            <></>
                                        )} */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.searchIssueByIssueId?.map((issue) => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {issue.issueId}
                                            </th>
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {issue.customer.firstName + ' ' + issue.customer.lastName}
                                            </th>
                                            <td scope="row" class="px-6 py-4 font-normal">
                                                {issue.customer.tel}
                                            </td>
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {issue.categoryProblem.categoryProblemN}
                                            </th>
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {issue.status
                                                ?
                                                <input disabled checked id="disabled-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "/>
                                                :
                                                <input disabled id="disabled-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "/>
                                            }
                                            </th>
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {issue.timestamp.split('T')[0] + ' ' + issue.timestamp.split('T')[1]}
                                            </th>
                                            {role == 'SA'|| 'DEV'? (
                                                <td class="px-6 py-4">

                                                    <a href={`/update/issue/${issue.issueId}/${issue.status}`} class="font-medium text-blue-600 hover:underline">Edit</a>
                                                </td>) : (
                                                <></>
                                            )}
                                            {/* {role == 'SA' || 'DEV'? (
                                                <td class="px-6 py-4">
                                                    <a class="font-medium text-red-600 hover:underline" onClick={popup}>Delete</a>
                                                </td>) : (
                                                <></>
                                            )} */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Issue;
