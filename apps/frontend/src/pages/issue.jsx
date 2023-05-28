import Image from 'next/image';
import { Navbar, Breadcrumb, Dropdown, Textarea, Button } from 'ui';

const ProductInfo = () => {

    const issue_cate = {
        Application_error: "AE",
        Feedback: "FB",
        Improper_service: "IS",
        Late_delivery: "LD",
        Payment_problem: "PP",
        Question_answer: "QA",
    }

    return (
        <>
            <Navbar />
            <main className="container pt-24 md:pt-24 mx-auto px-4">
                <div className="grid grid-cols-5">
                    <div></div>
                    <div className="col-span-3">
                        <div className="pb-6">
                            <Breadcrumb first_name="Home" first="/" current="Issues" />
                        </div>
                        <form action="">
                            <div className="w-full flex flex-col justify-center">
                                <h1 className="text-4xl font-bold pb-4 ">Issue Report</h1>
                                <Dropdown options={issue_cate} placeholder='Select issue type' label="Issue Category" />
                                <Textarea label="Description" isRequire={true} />
                            </div>
                            <div className="grid justify-end">
                                <Button type="submit" text="SEND" />
                            </div>
                        </form>
                    </div>
                </div>
            </main >
        </>
    );
};

export default ProductInfo;