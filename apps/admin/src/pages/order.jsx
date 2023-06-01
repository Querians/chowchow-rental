import { useState } from 'react';
import { Sidebar, Breadcrumb, Button, SearchBar } from 'ui';
import Link from 'next/link';
import ClientOnly from '@/components/ClientOnly';
import { OrderTable } from '@/components/OrderTable';
import { SideBar } from '@/components/SideBar';
import { Order2Table } from '@/components/Order2Table';

const Order = () => {

    const [isShow, setShow] = useState(false);
    const popup = () => {
        setShow(!isShow);
    };
    const drop = () => {
        popup();
        // code for drop row
    }

    return (
        <>
            <ClientOnly>
              <SideBar />
            </ClientOnly>
            <main className="container mx-auto lg:ml-64 px-10 space-y-4 pb-8">
                <Breadcrumb first_name="Order Management" current="Order" />
                <h1 className="text-4xl font-bold pt-6 pb-4">Order Management</h1>
                <ClientOnly>
                  <OrderTable />
                </ClientOnly>
                <ClientOnly>
                  <Order2Table />
                </ClientOnly>
            </main>
        </>
    );
};

export default Order;
