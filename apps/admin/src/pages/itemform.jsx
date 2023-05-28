import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button } from 'ui';
import Link from 'next/link';

const ItemForm = () => {

    const role = "INV"
    const item = {
        item_id: 23000121,
        product_id: 230030,
        item_register_date: "2023-01-01 13:30:44",
        stock_address: "A1-023-122",
        item_status: "A",
    }
    const onSubmit = () => {

    }

    return (
        <>
            <aside>
                <Sidebar role={role} showStock="true" />
            </aside>

            <main className="container mx-auto lg:ml-64 px-10">
                <form action="">
                    <Breadcrumb first_name="Stock Inventory" first="/inventory" second_name="Items" second="/items" current="Add New Item" />
                    <h1 className="text-4xl font-bold py-6">Add New Item</h1>
                    <div className="w-full rounded-lg border border-2 border-black p-4">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <TextInput placeholder="" label="Product ID" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$"/>
                                <TextInput placeholder="id_floor_row_loc"label="Stock address" />
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
        </>
    );
};

export default ItemForm;