import Image from 'next/image';
import { useState } from 'react';
import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button, SearchBar } from 'ui';
import Link from 'next/link';
import { ProductTable } from '@/components/ProductTable';
import ClientOnly from '@/components/ClientOnly';
import { SideBar } from '@/components/SideBar';

const Products = () => {

  return (
    <>
      <ClientOnly>
        <SideBar />
      </ClientOnly>
      <main className="container mx-auto lg:ml-64 px-10 space-y-4">
        <Breadcrumb first_name="Stock Inventory" first="/inventory" current="Products" />
        <h1 className="text-4xl font-bold py-6">Product Management</h1>
        <ClientOnly>
          <ProductTable />
        </ClientOnly>
      </main>
    </>
  );
};

export default Products;
