import Image from 'next/image';
import { Navbar, Breadcrumb, Dropdown, Textarea, Button } from 'ui';
import { gql, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ClientOnly from '@/components/ClientOnly';


const SEND_ISSUE = gql`
    mutation AddIssue(
      $description: String!,
      $staffId: String!,
      $categoryProblemId: String!)
      {
  addIssueByCustomer(
    description: $description,
    staffId: $staffId,
    categoryProblemId: $categoryProblemId
    ) {
    issueId
  }
}
`;


const Issue = () => {

  const router = useRouter();

  const [data, setData] = useState({
    'description': '',
    'categoryProblemId': '',
  });

  const [addIssue] = useMutation(SEND_ISSUE, {
    variables: {
    'description': data.description,
    'staffId': "5fe43fa1-a720-4db0-97c7-2d04ea52a6af",
    'categoryProblemId': data.categoryProblemId,
    },
    onCompleted: () => {
      alert('Success Sending Issue');
      router.push('/profile');
    }
  })

  const issue_cate = {
    AE: "Application error",
    FB: "Feedback",
    IS: "Improper service",
    LD: "Late delivery",
    PP: "Payment problem",
    QA: "Question answer",
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addIssue().catch((err) => alert(err))
  }

  return (
    <>
      <ClientOnly>
        <Navbar />
        <main className="container pt-24 md:pt-24 mx-auto px-4">
          <div className="grid grid-cols-5">
            <div></div>
            <div className="col-span-3">
              <div className="pb-6">
                <Breadcrumb first_name="Home" first="/" current="Issues" />
              </div>
              <form action="">
                <div className="w-full flex flex-col justify-center">
                  <h1 className="text-4xl font-bold pb-4 ">Issue Report</h1>
                  <Dropdown options={issue_cate} placeholder='Select issue type' label="Issue Category" onChange={e => setData({ ...data, ['categoryProblemId']: e.target.value })} />
                  <Textarea label="Description" isRequire={true} onChange={e => setData({ ...data, ['description']: e.target.value })} />
                </div>
                <div className="grid justify-end">
                  <Button type="submit" text="SEND" onClick={onSubmit} />
                </div>
              </form>
            </div>
          </div>
        </main >
      </ClientOnly>
    </>
  );
};

export default Issue;
