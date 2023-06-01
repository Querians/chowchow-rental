import { Sidebar, Breadcrumb, TextInput, Dropdown, Button } from 'ui';
import Link from 'next/link';
import { SideBar } from '@/components/SideBar';
import { useRouter } from 'next/router'
import ClientOnly from '@/components/ClientOnly';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

const EDIT_STATUS = gql`
  mutation UpdateStatusinOrder(
    $orderId: String!,
    $statusCode: Int!) {
    updateStatusinOrder(
      orderId: $orderId,
      statusCode: $statusCode) {
      status {
        statusCode
      }
    }
  }
`

const order_status = {
  110: 'payment waiting',
  120: 'pack waiting',
  130: 'logistic waiting',
  131: 'send waiting',
  132: 'revieve waiting',
  210: 'payment in progress',
  220: 'pack in progress',
  230: 'logistic in progress',
  231: 'send in progress',
  232: 'receive in progress',
  310: 'payment problems',
  320: 'pack problem',
  330: 'logistic problem',
  331: 'receive problem',
  400: 'finish overall',
}

const OrderStatus = () => {
  const router = useRouter()
  const { dt } = router.query

  const [status, setStatus] = useState(110);
  const [orderId, setOrderId] = useState('');

  const [updateStatusinOrder] = useMutation(EDIT_STATUS, {
    variables: {
    'orderId': orderId,
    'statusCode': Number(status),
    },
    onCompleted: () => {
      alert('Edit Success');
      // router.push('/order');
    }
  })

  const onSubmit = (e) => {
    e.preventDefault();
    updateStatusinOrder().catch((err) => alert(err))
  }



  useEffect(()=>{
    setStatus(router.query.dt?.[0])
    setOrderId(router.query.dt?.[1])
  }, [router]);


  console.log(dt)

  const role = "MA"
  const order = {
    order_id: 23000121,
    order_status: "pack waiting",
  }

  return (
    <>
      <aside>
        <SideBar role={role} showStock="true" />
      </aside>

      <main className="container mx-auto lg:ml-64 px-10">
        <form action="">
          <Breadcrumb first_name="Order Management" second_name="Order" second="/order" current="Update Order Status" />
          <h1 className="text-4xl font-bold py-6">Update Order Status</h1>
          <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                <TextInput type="readOnly" value={router.query.dt?.[1]} label="Order ID" />
                <Dropdown options={order_status} label='Order Status' value={status} onChange={(e)=>{ setStatus(e.target.value) }} />
              </div>
              <div class="grid justify-items-center">
                <Link href="/order">
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

export default OrderStatus;
