import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button } from 'ui';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import ClientOnly from '@/components/ClientOnly';
import { gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';

const EDIT_ISSUE = gql`
mutation UpdateStatusOfIssue($issueId: String!, $status: Int!) {
    updateStatusOfIssue(issueId: $issueId, status: $status) {
      issueId
    }
  }
`

const ISSUE_QUERY = gql`
query Query($issueId: String) {
    searchIssueByIssueId(issueId: $issueId) {
      customer {
        firstName
        lastName
        tel
        email
      }
      order {
        orderId
      }
      description
      categoryProblem {
        categoryProblemN
      }
      staff {
        position {
          positionN
          categoryProblems {
            categoryProblemN
          }
        }
        prefix
        staffFirstName
        staffLastName
      }
      issueId
      status
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

const EditCateprob = () => {
    const router = useRouter()


    const [isCheck, setIsChecked] = useState(-1);

    const [executeEdit] = useMutation(EDIT_ISSUE, {
        variables:{
          "issueId": router.query.dt?.[0],
          "status": isCheck ? 1 : 0,
        },
        onCompleted: () => {
          router.push('/issue', { shallow: false })
        }
      });
      console.log('type isCheck:', typeof(isCheck))
      console.log('isCheck:', isCheck)

      const [executeSearch, { data, loading, error }] = useLazyQuery(ISSUE_QUERY);
      const { data: staff, loading: loadingposition, error: errorposition } = useQuery(STAFF_ROLE);
      const [role, setRole] = useState('');

      useEffect(() => {
        setIsChecked(router.query.dt?.[1])
      }, [router])

      useEffect(() => {
        executeSearch({
          variables: { issueId: router.query.dt?.[0] }
        })
      }, [executeSearch, router.query.dt])

      useEffect(() => {
        console.log(data)
      }, [data])

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

    const issue_data = {
        customer_name: "DP",
        issue_id: "ad1snf8w56s",
        order_id: "nvjdk415fg5",
        description: "who threw MY PACKAGE",
        position_name: "Deliverer",
        category_prob_n: "missing order",
        branch_id: "Deliverer",
        staff_name: "Luv Cocoa",
        customer_tel: "0XXXXXXXXX",
        email: "LetusSleep@gmail.com",
        status: true,
    }

    const onSubmit = (e) => {
        e.preventDefault();
        executeEdit().catch((err) => alert(err))
    }

    return (
        <>
            <aside>
                <Sidebar role={role} showIssue={true}/>
            </aside>

            <main className="container mx-auto lg:ml-64 px-10">
                <form action="">
                    <Breadcrumb first_name="Issue" second_name="Issue" second="/issue" current="Edit Issue" />
                    <h1 className="text-4xl font-bold py-6">Edit Issue and Update status</h1>
                    <div className="w-full rounded-lg border-2 border-black p-4">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <TextInput type='readOnly' placeholder="" value={data?.searchIssueByIssueId[0].customer.firstName + ' ' + data?.searchIssueByIssueId[0].customer.lastName} label="Customer Name" />
                                <TextInput type='readOnly' placeholder="" value={data?.searchIssueByIssueId[0].issueId} label="Issue ID" />
                                <TextInput type='readOnly' placeholder="" value={data?.searchIssueByIssueId[0].order.orderId} label="Order ID" />
                                <TextInput type='readOnly' placeholder="" value={data?.searchIssueByIssueId[0].description} label="Description" />
                                <TextInput type='readOnly' placeholder="" value={data?.searchIssueByIssueId[0].staff.position.positionN} label="Position Name" />
                                <TextInput type='readOnly' placeholder="" value={data?.searchIssueByIssueId[0].categoryProblem.categoryProblemN} label="Category Problem Name" />
                                <TextInput type='readOnly' placeholder="" value={data?.searchIssueByIssueId[0].staff.prefix + data?.searchIssueByIssueId[0].staff.staffFirstName + ' ' + data?.searchIssueByIssueId[0].staff.staffLastName} label="Staff Name" />
                                <TextInput type='readOnly' placeholder="" value={data?.searchIssueByIssueId[0].customer.tel} label="Customer Tel." />
                                <TextInput type='readOnly' placeholder="" value={data?.searchIssueByIssueId[0].customer.email} label="Email" />
                            </div>
                            <div>
                            <text> Issue Status </text>
                                <input onChange={e => setIsChecked(e.target.checked)} defaultChecked={data?.searchIssueByIssueId[0].status} type= "checkbox" value="" class="ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "/>
                            </div>
                            <div class="grid justify-items-center">
                                    <Link href="/issue">
                                        <Button type="submit" text="EDIT" onClick={onSubmit} />
                                    </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
};

export default EditCateprob;
