import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button } from 'ui';
import Link from 'next/link';

const EditProduct = () => {

    const role = "INV"
    const item = {
        item_id: 23000121,
        product_id: 230030,
        item_register_date: "2023-01-01 13:30:44",
        stock_address: "A1-023-122",
        item_status: "A",
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
                    <Breadcrumb first_name="Stock Inventory" second_name="Items" second="/items" current="Edit Item" />
                    <h1 className="text-4xl font-bold py-6">Edit item details</h1>
                    <div className="w-full rounded-lg border-2 border-black p-4 bg-white">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <TextInput type="readOnly" placeholder="" value={item['item_id']} label="Item ID" />
                                <TextInput placeholder="" defaultValue={item['product_id']} label="Product ID" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$"/>
                                <TextInput placeholder="id_floor_row_loc" defaultValue={item['stock_address']} label="Stock address" />
                            </div>
                            <div class="grid justify-items-center">
                                <Link href="/items">
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
