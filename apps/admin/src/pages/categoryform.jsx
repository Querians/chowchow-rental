import { Sidebar, Breadcrumb, TextInput, Button } from 'ui';
import Link from 'next/link';

import ClientOnly from '@/components/ClientOnly';
import { gql, useMutation } from '@apollo/client';
import { SideBar } from '@/components/SideBar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ADD_CATEGORY = gql`
    mutation Mutation(
        $categoryId: String!,
        $categoryName: String!) {
        addCategory(
            categoryId: $categoryId,
            categoryName: $categoryName) {
                categoryId
                categoryName
            }
        }
`;

const CategoryForm = () => {

    const router = useRouter();

    const [data, setData] = useState({
      'categoryId': String(Math.floor(Math.random() * 9999)).padStart(4, '0'),
      'categoryName': ''
    });

    useEffect(()=>{
      console.log(data)
    }, [data])

    // const role = "INV"

    const [addCategory] = useMutation(ADD_CATEGORY, {
        variables: {
          'categoryId': data.categoryId,
          'categoryName': data.categoryName
        },
        onCompleted: () => {
          router.push('/category')
        }
      })

    const onSubmit = (e) => {
      e.preventDefault();
      addCategory().catch((err) => alert(err))
    }

    return (
        <>
          <ClientOnly>
              <SideBar />

            <main className="container mx-auto lg:ml-64 px-10 space-y-4">
                <form action="">
                <Breadcrumb first_name="Stock Inventory" second_name="Category" second="/category" current="Add New Category" />
                    <h1 className="text-4xl font-bold py-6">Add New Category</h1>
                    <div className="w-full rounded-lg border-2 border-black p-4">
                        <div className="grid">
                            {/* <TextInput type="readOnly" placeholder="" label="Category ID" /> */}
                            <TextInput placeholder="" label="Category Name" onChange={e => setData({ ...data, ['categoryName']: e.target.value })}/>
                        </div>
                        <div className='grid justify-items-center'>
                            <Link href="/category">
                                <Button type="submit" text="ADD" onClick={onSubmit} />
                            </Link>
                        </div>
                    </div>
                </form>
            </main>
            </ClientOnly>

        </>
    );
};

export default CategoryForm;
