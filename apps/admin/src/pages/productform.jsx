import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button } from 'ui';
import Link from 'next/link';

import ClientOnly from '@/components/ClientOnly';
import { gql, useMutation } from '@apollo/client';
import { SideBar } from '@/components/SideBar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ADD_PRODUCT = gql`
    mutation AddProduct(
      $productId: String!,
      $productName: String!,
      $categoryId: String!,
      $pictureUrl: String!,
      $pricePerDay: Float!,
      $weight: Float!,
      $height: Float!,
      $width: Float!,
      $depth: Float!,
      $color: String!,
      $material: String!,
      $description: String) {
      addProduct(
        productId: $productId,
        productName: $productName,
        categoryId: $categoryId,
        pictureUrl: $pictureUrl,
        pricePerDay: $pricePerDay,
        weight: $weight,
        height: $height,
        width: $width,
        depth: $depth,
        color: $color,
        material: $material,
        description: $description) {
          productId
        }
      }
`;


const ProductForm = () => {
    // query category name
    const catagoryList = {
        1100: 'chair',
        1201: 'table',
        1200: 'desk',
        3100: 'balloon',
        2100: 'tree',
        2013: 'house',
        3101: 'ball',
        4100: 'lamp'
    }

    const router = useRouter();

    const [data, setData] = useState({
      'productId': String(Math.floor(Math.random() * 999999)).padStart(6, '0'),
      'productName': '',
      'categoryId': '',
      'pictureUrl': '',
      'pricePerDay': '',
      'weight': '',
      'height': '',
      'width': '',
      'depth': '',
      'color': '',
      'material': '',
      'description': '',
    });

    useEffect(()=>{
      console.log(data)
    }, [data])

    const [addProduct] = useMutation(ADD_PRODUCT, {
      variables: {
      'productId': data.productId,
      'productName': data.productName,
      'categoryId': data.categoryId,
      'pictureUrl': data.pictureUrl,
      'pricePerDay': Number(data.pricePerDay),
      'weight': Number(data.weight),
      'height': Number(data.height),
      'width': Number(data.width),
      'depth': Number(data.depth),
      'color': data.color,
      'material': data.material,
      'description': data.description
      },
      onCompleted: () => {
        router.push('/products')
      }
    })

    // const role = "inventory"

    const onSubmit = (e) => {
      e.preventDefault();
      addProduct().catch((err) => alert(err))
    }

    return (
        <>
          <ClientOnly>
              <SideBar />

            <main className="container mx-auto lg:ml-64 px-10">
                <form action="">
                    <Breadcrumb first_name="Stock Inventory" second_name="Products" second="/products" current="Add New Product" />
                    <h1 className="text-4xl font-bold py-6">Add new product</h1>
                    <div className="w-full rounded-lg border-2 border-black p-4">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <TextInput placeholder="" label="Product Name" constraint="^.{1,40}$" onChange={e => setData({ ...data, ['productName']: e.target.value })}  />
                                <Dropdown placeholder="" label="Category Name" options={catagoryList} onChange={e => setData({ ...data, ['categoryId']: e.target.value })}  />
                                <TextInput placeholder="" label="Rental Price Per Day" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$" onChange={e => setData({ ...data, ['pricePerDay']: e.target.value })}  />
                                <TextInput placeholder="" label="Picture URL" onChange={e => setData({ ...data, ['pictureUrl']: e.target.value })} />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <div class="grid grid-rows-6 sm:grid-rows-3 grid-flow-col gap-4">
                                    <TextInput placeholder="" label="color" constraint="^.{1,20}$" onChange={e => setData({ ...data, ['color']: e.target.value })} />
                                    <TextInput placeholder="" label="material" constraint="^.{1,30}$" onChange={e => setData({ ...data, ['material']: e.target.value })} />
                                    <TextInput placeholder="kg" label="weight" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$" onChange={e => setData({ ...data, ['weight']: e.target.value })} />
                                    <TextInput placeholder="cm" label="width" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$" onChange={e => setData({ ...data, ['width']: e.target.value })} />
                                    <TextInput placeholder="cm" label="depth" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$" onChange={e => setData({ ...data, ['depth']: e.target.value })} />
                                    <TextInput placeholder="cm" label="hight" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$" onChange={e => setData({ ...data, ['hight']: e.target.value })} />
                                </div>
                                <div>
                                    <Textarea label="Description" isRequire={false} onChange={e => setData({ ...data, ['description']: e.target.value })} />
                                </div>
                            </div>

                            <div class="grid justify-items-center">
                                    <Link href="/products">
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

export default ProductForm;
