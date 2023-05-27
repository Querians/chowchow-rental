import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button } from 'ui';
import Link from 'next/link';

const EditProduct = () => {

    const picurl = "https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__0728160_pe736117_s5.jpg?f=s";
    const role = "inventory"
    const catagoryList = {
        chair: 'chair',
        table: 'table',
        decoration: 'decoration'
    }
    const product = {
        product_id: 30030,
        product_name: 'Black Chair',
        category_id: 2300,
        price_per_day: 28,
        weight: 4.3,
        height: 150,
        width: 50,
        depth: 50,
        color: "black",
        material: "wood",
        picture_URL: "https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__0728160_pe736117_s5.jpg?f=s",
        description: "ใครมันคิดจะทำโปรเจคเรื่องนี้วะ"
    }

    const onEdit = () => {

    }

    return (
        <>
            <aside>
                <Sidebar role={role} showStock="true" />
            </aside>

            <main className="container mx-auto lg:ml-64 px-10">
                <form action="">
                    <Breadcrumb first_name="Stock Inventory" first="/inventory" second_name="Products" second="/products" current="Edit Product" />
                    <h1 className="text-4xl font-bold py-6">Edit product details</h1>
                    <div className="w-full rounded-lg border border-2 border-black p-4">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <TextInput placeholder="" defaultValue={product['product_name']} label="Product Name" constraint=".{1,40}" />
                                <Dropdown placeholder="" defaultValue={product['category_id']} label="Category Name" options={catagoryList} />
                                <TextInput placeholder="" defaultValue={product['price_per_day']} label="Rental Price Per Day" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$" />
                                <TextInput placeholder="" defaultValue={product['picture_URL']} label="Picture URL" />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <div class="grid grid-rows-6 sm:grid-rows-3 grid-flow-col gap-4">
                                    <TextInput placeholder="" defaultValue={product['color']} label="color" constraint="^.{1,20}$" />
                                    <TextInput placeholder="" defaultValue={product['material']} label="material" constraint="^.{1,30}$" />
                                    <TextInput placeholder="kg" defaultValue={product['weight']} label="weight" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$" />
                                    <TextInput placeholder="cm" defaultValue={product['width']} label="width" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$" />
                                    <TextInput placeholder="cm" defaultValue={product['depth']} label="depth" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$" />
                                    <TextInput placeholder="cm" defaultValue={product['hight']} label="hight" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$" />
                                </div>
                                <div>
                                    <Textarea defaultValue={product['description']} label="Description" isRequire={false} />
                                </div>
                            </div>
                            <div className='grid justify-items-center'>
                                <Link href="/products">
                                    <Button type="submit" text="CONFIRM" onClick={onEdit} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
};

export default EditProduct;