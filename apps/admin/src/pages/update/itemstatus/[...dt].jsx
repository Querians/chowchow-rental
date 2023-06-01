import { Sidebar, Breadcrumb, TextInput, Dropdown, Button } from 'ui';
import Link from 'next/link';
import { SideBar } from '@/components/SideBar';
import { useRouter } from 'next/router'
import ClientOnly from '@/components/ClientOnly';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

const EDIT_STATUS = gql`
  mutation Mutation(
    $itemId: String!,
    $itemStatusId: String!)
    {
    updateItemstatusInItem(
      itemId: $itemId,
      itemStatusId:
      $itemStatusId) {
        itemId
    }
  }
`

const item_status = {
  A: "Available",
  O: "Out of order",
  U: "Unavailable",
}

const ItemStatus = () => {

  const router = useRouter()
  const { dt } = router.query

  const [status, setStatus] = useState('U');
  const [itemId, setItemId] = useState('');

  const [updateItemstatusInItem] = useMutation(EDIT_STATUS, {
    variables: {
    'itemId': itemId,
    'itemStatusId': status,
    },
    onCompleted: () => {
      alert('Edit Success');
      router.push('/items', { shallow: false });
    }
  })

  const onSubmit = (e) => {
    e.preventDefault();
    updateItemstatusInItem().catch((err) => alert(err))
  }

  useEffect(()=>{
    setStatus(router.query.dt?.[0])
    setItemId(router.query.dt?.[1])
  }, [router]);

    const item = {
        item_id: 23000121,
        item_status: "A",
    }

    return (
        <>
            <aside>
                <SideBar showStock="true" />
            </aside>

            <main className="container mx-auto lg:ml-64 px-10">
                <form action="">
                    <Breadcrumb first_name="Stock Inventory" second_name="Items" second="/items" current="Update Item Status" />
                    <h1 className="text-4xl font-bold py-6">Update Item Status</h1>
                    <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <TextInput type="readOnly" value={itemId} label="Item ID" />
                                <Dropdown
                                  options={item_status}
                                  label='Item Status'
                                  value={status}
                                  onChange={(e)=>{ setStatus(e.target.value) }}
                                />
                            </div>
                            <div class="grid justify-items-center">
                                    <Link href="/items">
                                        <Button type="submit" text="UPDATE" onClick={onSubmit} />
                                    </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
};

export default ItemStatus;
