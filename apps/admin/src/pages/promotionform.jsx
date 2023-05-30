import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button } from 'ui';
import Link from 'next/link';

import ClientOnly from '@/components/ClientOnly';
import { gql, useMutation } from '@apollo/client';
import { SideBar } from '@/components/SideBar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ADD_PROMOTION= gql`
    mutation Mutation(
        $discountPercent: Float!,
        $maximumDiscount: Float!,
        $minimumPrice: Float!,
        $startDate: String!,
        $endDate: String!) {
        addPromotion(
            discountPercent: $discountPercent,
            maximumDiscount: $maximumDiscount,
            minimumPrice: $minimumPrice,
            startDate: $startDate,
            endDate: $endDate) {
                promotionCode
            }
        }
`;

const PromotionForm = () => {

    const router = useRouter();

    const [data, setData] = useState({
      'discountPercent': '',
      'maximumDiscount': '',
      'minimumPrice': '',
      'startDate': '',
      'endDate': ''
    });

    useEffect(()=>{
      console.log(data)
    }, [data])

    const [addPromotion] = useMutation(ADD_PROMOTION, {
        variables: {
        'discountPercent': Number(data.discountPercent),
        'maximumDiscount': Number(data.maximumDiscount),
        'minimumPrice': Number(data.minimumPrice),
        'startDate': (new Date(data.startDate)).toString(),
        'endDate': (new Date(data.endDate)).toString(),
        },
        onCompleted: () => {
          router.push('/promotiondetails')
        }
      })

    const role = "sales"||"manager"
    const onSubmit = (e) => {
      e.preventDefault();
      addPromotion().catch((err) => alert(err))
    }

    return (
        <>
          <ClientOnly>
              <SideBar />

            <main className="container mx-auto lg:ml-64 px-10">
                <form action="">
                    <Breadcrumb first_name="Promotion" first="/promotion" second_name="Promotion Details" second="/promotiondetails" current="Add Promotion Code" />
                    <h1 className="text-4xl font-bold py-6">Add promotion code details</h1>
                    <div className="w-full rounded-lg border-2 border-black p-4">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                {/* <TextInput placeholder="" label="Promotion Code" onChange={e => setData({ ...data, ['promotionCode']: e.target.value })}/> */}
                                <TextInput placeholder="" label="Discount Percent" onChange={e => setData({ ...data, ['discountPercent']: e.target.value })}/>
                                <TextInput placeholder="" label="Start Date" onChange={e => setData({ ...data, ['startDate']: e.target.value })}/>
                                <TextInput placeholder="" label="Maximum Discount" onChange={e => setData({ ...data, ['maximumDiscount']: e.target.value })}/>
                                <TextInput placeholder="" label="End Date" onChange={e => setData({ ...data, ['endDate']: e.target.value })}/>
                                <TextInput placeholder="" label="Minimum Price" onChange={e => setData({ ...data, ['minimumPrice']: e.target.value })}/>
                            </div>
                            <div class="grid justify-items-center">
                                    <Link href="/promotiondetails">
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

export default PromotionForm;
