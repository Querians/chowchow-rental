import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button } from 'ui';
import Link from 'next/link';
import ClientOnly from '@/components/ClientOnly';
import { gql, useMutation } from '@apollo/client';
import { SideBar } from '@/components/SideBar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ADD_CATEPROB = gql`
    mutation Mutation(
        $categoryProblemId: String!,
        $categoryProblemN: String!,
        $positionId: String!) {
        addCategoryProblem(
            categoryProblemId: $categoryProblemId,
            categoryProblemN: $categoryProblemN,
            positionId: $positionId) {
                categoryProblemId
            }
        }
`;

const cateposition = {
  category_prob_id: "DP",
  position_id: "DL",
}
const category_prob_id = {
  Application_error: "AE",
  Feedback: "FB",
  Improper_service: "IS",
  Late_delivery: "LD",
  Payment_problem: "PP",
  Question_answer: "QA",
  }
  const posi_id = {
      DL: "Deliverer",
      MA: "Manager",
      INV: "Inventory Management",
      SA: "Sale",
  }


const CateprobForm = () => {

    const router = useRouter();

    const [data, setData] = useState({
      'categoryProblemId': '',
      'categoryProblemN': '',
      'positionId': ''
    });

    useEffect(()=>{
      console.log(data)
    }, [data])

    const role = "inventory"

    const [addCateProb] = useMutation(ADD_CATEPROB, {
        variables: {
        'categoryProblemId': data.productId,
        'categoryProblemN': data.productName,
        'positionId': data.categoryId
        },
        onCompleted: () => {
          router.push('/categoryproblem')
        }
      })

    const onSubmit = (e) => {
      e.preventDefault();
      addCateProb().catch((err) => alert(err))
    }

    return (
        <>
          <ClientOnly>
              <SideBar />

            <main className="container mx-auto lg:ml-64 px-10">
                <form action="">
                    <Breadcrumb first_name="Issue" second_name="Category Problem" second="/categoryproblem" current="Add Category Problem" />
                    <h1 className="text-4xl font-bold py-6">Add category problem</h1>
                    <div className="w-full rounded-lg border border-2 border-black p-4">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <TextInput placeholder="" label="Category Problem ID" onChange={e => setData({ ...data, ['categoryProblemId']: e.target.value })} />
                                <TextInput placeholder="" label="Category Problem Name" onChange={e => setData({ ...data, ['categoryProblemN']: e.target.value })} />
                                <Dropdown options={posi_id} placeholder="Select Position" label="Position Name" onChange={e => setData({ ...data, ['positionId']: e.target.value })}/>
                            </div>
                            <div class="grid justify-items-center">
                                    <Link href="/categoryproblem">
                                        <Button type="submit" text="ADD" onClick={onSubmit} />
                                    </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
            </ClientOnly>
        </>
    );
};

export default CateprobForm;
