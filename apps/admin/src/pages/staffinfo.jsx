import { Sidebar, Breadcrumb, TextInput, Textarea, Dropdown, Button } from 'ui';
import Link from 'next/link';

const PromotionForm = () => {

    const role = "manager"
    const s_info = {
        staff_id: '23000121',
        prefix: "Mr.",
        first_name: "Wanna",
        last_name: "Resign",
        dob: "2000-16-01",
        tel:'0XXXXXXXXX',
        position_id: "INV",
        salary: '100000',
        start_date: "2023-01-01"
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
                    <Breadcrumb current="Staff" />
                    <h1 className="text-4xl font-bold py-6">Staff Info</h1>
                    <div className="w-full rounded-lg border border-2 border-black p-4">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                                <TextInput type='readOnly' placeholder="" value={s_info['staff_id']} label="Staff ID" />
                                <TextInput type='readOnly' placeholder="" value={s_info['prefix']} label="Prefix" />
                                <TextInput type='readOnly' placeholder="" value={s_info['first_name']} label="Firstname" />
                                <TextInput type='readOnly' placeholder="" value={s_info['last_name']} label="Lastname" />
                                <TextInput type='readOnly' placeholder="" value={s_info['dob']} label="Date of Birth" />
                                <TextInput type='readOnly' placeholder="" value={s_info['tel']} label="Tel." />
                                <TextInput type='readOnly' placeholder="" value={s_info['position_id']} label="Position ID" />
                                <TextInput type='readOnly' placeholder="" value={s_info['salary']} label="Salary per month" />
                                <TextInput type='readOnly' placeholder="" value={s_info['start_date']} label="Start Date" />
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
};

export default PromotionForm;