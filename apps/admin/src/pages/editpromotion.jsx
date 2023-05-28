import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button } from 'ui';
import Link from 'next/link';

const PromotionForm = () => {

    const role = "sales"||"manager"
    const promo = {
        promotion_code: '23000121',
        start_date: "2023-01-01 13:30:44",
        end_date: "2023-01-01 13:30:44",
        period_month: 1,
        total_used: 24,
    }
    const onSubmit = () => {

    }

    return (
        <>
            <aside>
                <Sidebar role={role} />
            </aside>

            <main className="container mx-auto lg:ml-64 px-10">
                <form action="">
                    <Breadcrumb first_name="Promotion" first="/promotion" second_name="Promotion Details" second="/promotiondetails" current="Edit Promotion Code" />
                    <h1 className="text-4xl font-bold py-6">Edit promotion code details</h1>
                    <div className="w-full rounded-lg border border-2 border-black p-4">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <TextInput type='readOnly' placeholder="" value={promo['promotion_code']} label="Promotion Code" />
                                <TextInput placeholder="" label="Discount Percent" />
                                <TextInput type = 'readOnly' placeholder="" value={promo['start_date']} label="Start Date" />
                                <TextInput placeholder="" label="Maximum Discount" />
                                <TextInput placeholder="" label="End Date" />
                                <TextInput placeholder="" label="Minimum Price" />
                            </div>
                            <div class="grid justify-items-center">
                                    <Link href="/promotiondetails">
                                        <Button type="submit" text="CONFIRM" onClick={onSubmit} />
                                    </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
};

export default PromotionForm;
