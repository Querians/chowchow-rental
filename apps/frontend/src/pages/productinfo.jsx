import Image from 'next/image';
import { Navbar, Header, Breadcrumb, Counter, Button } from 'ui';

const ProductInfo = () => {

    const product = {
        product_name: 'Black Chair',
        price: '17',
        color: 'white',
        material: 'wood',
        width: '50',
        depth: '50',
        height: '150',
        weight: '1.25',
        detail: 'เก้าอี้ทรงธรรมดาที่บ้านไหนก็(น่าจะ)มี ไม่ค่อยแน่ใจว่าจะมาเช่าทำไม แต่โอเคมันได้ตังเราพร้อมให้คุณเช่าเสมอ เวลานั่งแล้วรู้สึกเหมือนอยู่ในบ้าน ภายในโลกที่มีเพียงแค่สีขาว ดำ เทา ช่างเหมาะกับคนคูลอย่างเธอจริง ๆ สุดสวยห์/สุดหล่อห์',
        image: '/ikea_black_chair.png',
    }

    const onClick = () => {

    };

    return (
        <>
            <Navbar />
            <main className="container pt-24 md:pt-24 mx-auto px-4">
                <div className="pb-6">
                    <Breadcrumb first_name="Home" first="/" second_name="Products" second="/product" current="Products Information" />
                </div>
                <div className="flex flex-col-reverse md:flex-row py-4 gap-10">
                    <div class="basis-3/10 ">
                        <Image
                            src={product['image']}
                            className="w-full rounded-lg border border-2 border-black p-2"
                            alt={product['product_name']}
                            width={500}
                            height={500}
                            quality={100}
                        />
                    </div>

                    <div class="flex flex-col basis-7/10 gap-y-6">
                        <div className="w-full rounded-lg border border-2 border-black p-4">
                            <div className="sm:flex grid-flow-col justify-between items-end">
                                <p className="text-start text-3xl text-black font-bold pb-1 justify-items-start">{product['product_name']}</p>
                                <p className="text-start text-xl text-red-700 font-semibold pb-1 pr-4 justify-items-start">{product['price']} THB/day</p>
                            </div>
                            <div className="p-4 pb-0">
                                <div className="flex flex-col lg:flex-row gap-4">
                                    <div className="basis-1/2">
                                        <div className="flex flex-col md:flex-row">
                                            <p className="text-start text-lg text-black font-bold justify-center">จำนวนสินค้าสั่งเช่า</p>
                                            <div>
                                                <Counter />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="basis-1/2">
                                        <Button type="submit" text="Add To Cart" onClick={onClick} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-full rounded-lg border border-2 border-black p-4">
                            <p className="text-start text-2xl text-black font-bold pb-1">รายละเอียดสินค้า</p>
                            <p className="text-start font-normal text-black pb-1 px-4 justify-items-start">{product['detail']}</p>
                            <div class="grid grid-rows-6 sm:grid-rows-3 grid-flow-col gap-2 p-4 pb-0">
                                <div class="grid grid-cols-2 gap-2">
                                    <div class="">
                                        <p className="text-start font-semibold text-black font-medium pb-1 justify-items-start">สี</p>
                                    </div>
                                    <div class="">
                                        <p className="text-start font-normal text-black font-normal pb-1 justify-items-start">{product['color']}</p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 gap-2">
                                    <div class="">
                                        <p className="text-start font-semibold text-black font-medium pb-1 justify-items-start">วัสดุ</p>
                                    </div>
                                    <div class="">
                                        <p className="text-start font-normal text-black font-normal pb-1 justify-items-start">{product['material']}</p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 gap-2">
                                    <div class="">
                                        <p className="text-start font-semibold text-black font-medium pb-1 justify-items-start">น้ำหนัก (กก.)</p>
                                    </div>
                                    <div class="">
                                        <p className="text-start font-normal text-black font-normal pb-1 justify-items-start">{product['weight']}</p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 gap-2">
                                    <div class="">
                                        <p className="text-start font-semibold text-black font-medium pb-1 justify-items-start">ความกว้าง (ซม.)</p>
                                    </div>
                                    <div class="">
                                        <p className="text-start font-normal text-black font-normal pb-1 justify-items-start">{product['weight']}</p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 gap-2">
                                    <div class="">
                                        <p className="text-start font-semibold text-black font-medium pb-1 justify-items-start">ความยาว (ซม.)</p>
                                    </div>
                                    <div class="">
                                        <p className="text-start font-normal text-black font-normal pb-1 justify-items-start">{product['depth']}</p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 gap-2">
                                    <div class="">
                                        <p className="text-start font-semibold text-black font-medium pb-1 justify-items-start">ความสูง (ซม.)</p>
                                    </div>
                                    <div class="">
                                        <p className="text-start font-normal text-black font-normal pb-1 justify-items-start">{product['height']}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-lg border border-2 border-black p-4 bg-[#fffbeb] mb-4">
                    <p className="text-start text-2xl text-black font-bold pb-1">
                        เงื่อนไขการจัดส่ง
                        <span class="inline text-[#C26666] p-4">
                            *โปรดอ่านทำความเข้าใจก่อนกดสั่งสินค้า*
                        </span>
                    </p>
                    <ul class="list-disc list-inside pl-4">
                        <li>
                            การชำระเงินค่าเช่าอุปกรณ์ จะถูกแบ่งเป็น 2 ส่วน ได้แก่
                            <ul class="list-disc list-inside pl-6">
                                <li>
                                    ค่ามัดจำอุปกรณ์: 50% ของราคาเช่า จ่ายในวันสั่งเช่า
                                </li>
                                <li>
                                    ค่าเช่าอุปกรณ์: ทำการจ่ายในวันสั่งเช่า(สามารถเลือกผ่อนจ่ายได้)
                                </li>
                            </ul>
                        </li>
                        <li>
                            การรับมอบและส่งคืนสินค้า จะต้องทำในเวลาทำการของบริษัท เวลา 10.00 - 20.00 น. เท่านั้น โดยจะต้องส่งคืนสินค้าตามวันและเวลาที่ได้เลือกไว้ หากส่งคืนล่าช้าบริษัทจะหักจากค่ามัดจำวันละ 5% จากค่าเช่าอุปกรณ์
                        </li>
                        <li>
                            สำหรับการเปลี่ยนแปลงวันรับมอบสินค้า สามารถทำการเปลี่ยนแปลงวันรับมอบสินค้าจะสามารถแจ้งเปลี่ยนแปลงได้เพียง 1 ครั้ง ก่อนการชำระเงินค่ามัดจำเท่านั้น โดยจะต้องแจ้งเปลี่ยนวันรับมอบสินค้าล่วงหน้าอย่างน้อย 3 วันก่อนวันรับมอบสินค้าเดิม
                        </li>
                        <li>
                            หากสินค้าชำรุดเสียหาย ลูกค้าจะต้องชำระเงินตามสภาพสินค้าที่ส่งคืนตามเกณฑ์ของบริษัท โดยหากไม่ทำการชำระเพิ่มภายใน 3 วันทำการ บริษัทจะทำการหักจากค่ามัดจำโดยทันที
                        </li>
                    </ul>
                </div>
            </main >
        </>
    );
};

export default ProductInfo;