import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Button } from 'ui';

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <main className="container pt-24 md:pt-24 mx-auto px-4">
        <div className='flex flex-col justify-center items-center md:flex-row md:gap-4 lg:gap-4'>
          <div className='basis-1/4 flex flex-col items-center gap-4 md:gap-8 md:basis-1/3 md:items-start lg:gap-16'>
            <div className='font-bold text-5xl flex flex-col justify-center md:text-3xl lg:text-4xl'>
              <div>CHOW CHOW</div>
              <div>-Online Rental-</div>
            </div>
            <p className="text-lg md:text-md lg:text-xl" >สัมผัสประสบการณ์เช่าอุปกรณ์จัดงานรื่นเริงในรูปแบบที่ดีกว่าเดิมพร้อมดำเนินการตลอด 24 ชั่วโมง</p>
            <Link className='w-full' href="/login">
              <Button text={'GET STARTED'} type={'normal'}/>
            </Link>
          </div>
            <Image className='w-full md:w-[50%] md:pr-0 md:px-0 lg:basis-1/2 2xl:px-14' src={'/party.svg'} width={400} height={400} quality={100} alt='party image'></Image>
        </div>

      </main>
    </div>
  );
};

export default Home;
