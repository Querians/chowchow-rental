import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button } from 'ui';
import Link from 'next/link';
import ClientOnly from '@/components/ClientOnly';
import { gql, useMutation } from '@apollo/client';
import { SideBar } from '@/components/SideBar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ADD_ITEM = gql`
    mutation Mutation(
        $itemId: String!,
        $productId: String!,
        $itemRegisterDate: String!,
        $stockAddress: String!,
        $itemStatusId: String!) {
            addItem(
            itemId: $itemId,
            productId: $productId,
            itemRegisterDate: $itemRegisterDate,
            stockAddress: $stockAddress,
            itemStatusId: $itemStatusId) {
                itemId
            }
        }
`;

const ItemForm = () => {

    // const role = "INV"
    // const item = {
    //     item_id: 23000121,
    //     product_id: 230030,
    //     item_register_date: "2023-01-01 13:30:44",
    //     stock_address: "A1-023-122",
    //     item_status: "A",
    // }

    const router = useRouter();

    const [data, setData] = useState({
      'itemId': String(Math.floor(Math.random() * 99999999)).padStart(8, '0'),
      'productId': '',
      'itemRegisterDate': '',
      'stockAddress': '',
      'itemStatusId': 'A',
    });

    useEffect(()=>{
      console.log(data)
    }, [data])

    const [addItem] = useMutation(ADD_ITEM, {
      variables: {
      'itemId': data.itemId,
      'productId': data.productId,
      'itemRegisterDate': (new Date()).toString(),
      'stockAddress': data.stockAddress,
      'itemStatusId': data.itemStatusId
      },
      onCompleted: () => {
        router.push('/items')
      }
    })

    const onSubmit = (e) => {
      e.preventDefault();
      addItem().catch((err) => alert(err))
    }

    return (
        <>
          <ClientOnly>
              <SideBar />

            <main className="container mx-auto lg:ml-64 px-10">
                <form action="">
                    <Breadcrumb first_name="Stock Inventory" second_name="Items" second="/items" current="Add New Item" />
                    <h1 className="text-4xl font-bold py-6">Add New Item</h1>
                    <div className="w-full rounded-lg border border-2 border-black p-4">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <TextInput placeholder="" label="Product ID" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$" onChange={e => setData({ ...data, ['productId']: e.target.value })} />
                                <TextInput placeholder="id_floor_row_loc"label="Stock address" onChange={e => setData({ ...data, ['stockAddress']: e.target.value })} />
                            </div>
                            <div class="grid justify-items-center">
                                    <Link href="/items">
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

export default ItemForm;
