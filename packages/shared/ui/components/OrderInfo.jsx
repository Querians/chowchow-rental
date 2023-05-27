import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Counter } from './Counter';
import Link from 'next/link';

export const OrderInfo = () => {
    // Declare a new state variable, which we'll call "count"
    const product = {
        product_id: "634322",
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
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(1);
    // query max from stock
    const max = 31
    const add = () => {
        // setCount(count + 1)
        if (count + 1 <= max) {
            setCount(count + 1)
        };
    };
    const add10 = () => {
        if (count + 10 <= max) {
            setCount(count + 10)
        }
        else {
            setCount(max)
        };
    };
    const sub = () => {
        if (count > 1) {
            setCount(count - 1)
        };
    };
    const sub10 = () => {
        if (count > 10) {
            setCount(count - 10)
        }
        else {
            setCount(1)
        };
    };
    const data ={
        product_id: '',
        quantity: ''
    }
    const onClick = () => {
        data.product_id = product["product_id"],
        data.quantity = count
    };    

    return (
        <>
            <div className="">
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
                                    <div className="">
                                        <div className="grid grid-cols-5 gap-2 justify-items-center w-full px-4">

                                            <Button type="count" logo="/minus.svg" text="10" onClick={sub10} />
                                            <Button type="count" logo="/minus.svg" onClick={sub} />
                                            <div className="text-center w-10">
                                                <p className="align-center text-xl font-semibold">{count}</p>
                                            </div>
                                            <Button type="count" logo="/add.svg" onClick={add} />
                                            <Button type="count" logo="/add.svg" text="10" onClick={add10} />
                                        </div>
                                        <p className="text-center text-sm text-red-600 font-medium pt-1">คงเหลือ {max} ชิ้น</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/2">
                            <Link href="/cart" onClick={onClick} >
                                <Button type="submit" text="Add To Cart" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}