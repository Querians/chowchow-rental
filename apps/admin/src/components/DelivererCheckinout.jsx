import { Dropdown, Button, TextInput } from 'ui';
import Link from 'next/link';

import ClientOnly from '@/components/ClientOnly';
import { gql, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const EDIT_CHECKIN = gql`
    mutation Mutation(
      $orderId: String!,
      $timeAssign: String!,
      $timeBack: String!) {
  editTimeback(
    orderId: $orderId,
    timeAssign: $timeAssign,
    timeBack: $timeBack) {
      timeBack
  }
}
`;

const EDIT_CHECKOUT = gql`
    mutation Mutation(
      $orderId: String!,
      $timeAssign: String!,
      $timeGo: String!) {
  editTimego(
    orderId: $orderId,
    timeAssign: $timeAssign,
    timeGo: $timeGo) {
      timeGo
  }
}
`;

const ORDER_STATUS = gql`
mutation Mutation($orderId: String!, $statusCode: Int!) {
  updateStatusinOrder(orderId: $orderId, statusCode: $statusCode) {
    orderId
  }
}
`;




export const DelivererCheckinout = () => {
  const [returnData, setReturnData] = useState({
    order_id: '',
    order_status: '',
    time_go: '',
    time_back: '',
    assigndate: ''
  })

  const [editTimego] = useMutation(EDIT_CHECKOUT, {
    variables: {
    'orderId': returnData.order_id,
    'timeGo': new Date(),
    'timeAssign': new Date(returnData.assigndate)
    },
    onCompleted: () => {
      alert('success change time go')
    }
  })

  const [editTimeback] = useMutation(EDIT_CHECKIN, {
    variables: {
    'orderId': returnData.order_id,
    'timeBack': new Date(),
    'timeAssign': new Date(returnData.assigndate)
    },
    onCompleted: () => {
      alert('success change time back')
    }
  })

  const [updateStatusinOrder] = useMutation(ORDER_STATUS, {
    variables: {
    'orderId': returnData.order_id,
    'statusCode': (returnData.order_status)
    },
    onCompleted: () => {
      alert('success change order status')
    }
  })

  console.log(returnData)

  return <>
    <form onSubmit={e => e.preventDefault()}>
      <div className="w-full rounded-lg border border-2 border-black p-4 bg-white">
        <div className="text-2xl font-bold m-0">CheckOut-CheckIn</div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            <TextInput  label={'Order ID'} value={returnData.order_id} onChange={e => setReturnData({ ...returnData, ['order_id']: e.target.value })}/>
            <TextInput  label={'Assign Date'} value={returnData.assigndate} onChange={e => setReturnData({ ...returnData, ['assigndate']: e.target.value })}/>
            <Button type="submit" text="Check Out"
              onClick={e => {
                e.preventDefault();
                setReturnData({ ...returnData, ['time_go']: new Date(), ['order_status']: 231 })
                editTimego().catch((err) => alert(err));
                updateStatusinOrder().catch((err)=>alert(err))
              }} />
            <Button type="submit" text="Check In"
              onClick={e =>
                {
                  e.preventDefault();
                  setReturnData({ ...returnData, ['time_back']: new Date(), ['order_status']: 232 })
                  editTimeback().catch((err) => alert(err));
                  updateStatusinOrder().catch((err)=>alert(err))
                }
              }
              />
          </div>
        </div>
      </div>
    </form>
  </>;
};
