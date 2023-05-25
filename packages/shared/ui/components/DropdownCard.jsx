import up from '/public/up.svg';
import down from '/public/down.svg';
import left from '/public/left.svg';
import check from '/public/check.svg';
import Image from 'next/image';
import { atom, useAtom } from 'jotai';
import Link from 'next/link';

const isShowAtom = atom({
  การติดต่อ: true,
  การจัดส่ง: false,
  การชำระเงิน: false,
});

const isGreenAtom = atom({
  การติดต่อ: false,
  การจัดส่ง: false,
  การชำระเงิน: false,
});

// export const DropdownCard = ({ topic, backText, handleClick, show = true, Children }) => {
export const DropdownCard = (props) => {
  const [isShow, setIsShow] = useAtom(isShowAtom);
  const [isGreen, setIsGreen] = useAtom(isGreenAtom);

  const name = props.topic;
  const keys = Object.keys(isShow);

  const handleClickShow = () => {
    setIsShow({ ...isShow, [name]: !isShow[name] });
  };

  const handleClickBack = () => {
    if (name === keys[1]) {
      setIsShow({ ...isShow, [name]: !isShow[name], [keys[0]]: true });
    } else if (name === keys[2]) {
      setIsShow({ ...isShow, [name]: !isShow[name], [keys[1]]: true });
    }
  };

  const handleClickNext = () => {
    if (name === keys[0]) {
      setIsShow({ ...isShow, [name]: !isShow[name], [keys[1]]: true });
    } else if (name === keys[1]) {
      setIsShow({ ...isShow, [name]: !isShow[name], [keys[2]]: true });
    } else {
      setIsShow({ ...isShow, [name]: !isShow[name] });
    }
    setIsGreen({ ...isGreen, [name]: true });
  };

  return (
    <>
      <div
        className={
          (isGreen[name] ? 'bg-[#A4DAAC]' : '') +
          ' border-1 mb-4 w-[40%] rounded-md border border-black px-4 py-1'
        }
      >
        <div className=" flex items-center justify-between">
          <div className=" flex items-center text-xl font-bold">
            <span className="pr-4">{name}</span>
            <Image src={check} width={40} height={40} alt="check button" />
          </div>
          {isShow[name] ? (
            <Image
              onClick={handleClickShow}
              src={up}
              width={40}
              height={40}
              alt="up button"
            />
          ) : (
            <Image
              onClick={handleClickShow}
              src={down}
              width={40}
              height={40}
              alt="down button"
            />
          )}
        </div>
        <div className="">
          <form onSubmit={e => {e.preventDefault(); handleClickNext();}}>
            {isShow[name] && props.children}
            {isShow[name] && (
              <div className="flex items-center justify-between">
                {name === keys[0] ? (
                  <Link href="PRODUCT_PATH">
                    <div onClick={handleClickBack} className="flex items-center">
                      <Image
                        src={left}
                        width={15}
                        height={15}
                        alt="left button"
                      />
                      <span className="pl-1">{props.backText}</span>
                    </div>
                  </Link>
                ) : (
                  <div onClick={handleClickBack} className="flex items-center">
                    <Image src={left} width={15} height={15} alt="left button" />
                    <span className="pl-1">{props.backText}</span>
                  </div>
                )}
                <div className="mb-2.5">
                    <input
                      type='submit'
                      className="border-1 h-10 rounded-md bg-[#A4DAAC] border border-black px-6 py-2 text-xl font-medium text-gray-9000  focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-100"
                      onClick={keys[0]==name ? handleClickNext : null}
                      value='NEXT'
                    />
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};