import { Sidebar, Breadcrumb, TextInput, Button } from 'ui';
import Link from 'next/link';

const ItemCheckInOut = () => {

    const role = "INV"
    const order_id = "hhei2me234"
    const itemList = {
        1: {
            item_id: 23000121,
            product_name: 230030,
        },
        2: {
            item_id: 23000121,
            product_name: 230030,
        },
        3: {
            item_id: 23000121,
            product_name: 230030,
        },
        4: {
            item_id: 23000121,
            product_name: 230030,
        },
    }
    const onSubmit = () => {

    }

    return (
        <>
            <aside>
                <Sidebar role={role} showStock="true" />
            </aside>

            <main className="container mx-auto lg:ml-64 px-10 ">
                <Breadcrumb first_name="Order Management" second_name="Order" second="/order" third_name="Order Tracking" third="/ordertracking" current="Edit Item status" />
                <h1 className="text-4xl font-bold py-6">Item Check-Out and Check-In</h1>
                <div className="space-y-2">
                    <div className="w-full rounded-lg border border-2 border-black p-4">
                        <TextInput type="readOnly" defaultValue={order_id} label="Order ID" />
                        <div class="relative overflow-x-auto rounded-lg h-60">
                            <table class="w-full text-sm text-center text-gray-500 ">
                                <thead class="text-xs text-gray-700 bg-[#E3C291] uppercase sticky top-0">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Item ID
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Product Name
                                        </th>
                                        {role == 'INV' ? (
                                            <th scope="col" class="px-6 py-3">
                                                Check In
                                            </th>) : (
                                            <></>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(itemList).map((key) => (
                                        <tr class="bg-white border-b">
                                            <th scope="row" class="px-6 py-4 font-normal">
                                                {itemList[key]['item_id']}
                                            </th>
                                            <td class="px-6 py-4">
                                                {itemList[key]['product_name']}
                                            </td>
                                            {role == 'INV' ? (
                                                <td class="px-6 py-4">
                                                    <a href="/itemcheckin" class="font-medium text-red-600 hover:underline">update</a>
                                                </td>) : (
                                                <></>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                   {role=="INV" ? (<form action="">
                        <div className="w-full rounded-lg border border-2 border-black p-4">
                            <div className="space-y-4">
                                <h1 className="text-2xl font-bold">Item Check-out</h1>
                                <div className="grid grid-cols-1 grid-flow-row gap-4">
                                    <TextInput placeholder="" label="Item ID" constraint="^([0-9]+([.][0-9]*)?|[.][0-9]+)$" />
                                </div>
                                <div class="grid justify-items-center">
                                    <Link href="">
                                        <Button type="submit" text="Check-out" onClick={onSubmit} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>) :( <></> )}
                </div>
            </main>
        </>
    );
};

export default ItemCheckInOut;