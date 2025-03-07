// export function Home({ setLocation, onClick })

import { Card1 } from './utils/Card1';
import { Card2 } from './utils/Card2';
import { Card3 } from './utils/Card3';

export function Home() {
  return (
    <>
      <section className="p-8">
        <div className="container justify-center m-auto ">
          <h1 className="text-center text-white font-bold text-4xl leading-[45px]">
            Seeing the weather of the whole world <br /> with <span className=" text-[#CAECFF]">Dark Weather!</span>
          </h1>
          <div className="search flex justify-center flex-wrap gap-16 text-white pt-20 m-auto ">
            <input
              type="search"
              placeholder="Search Here"
              className=" bg-[#24343D] min-w-96 rounded-xl outline-none py-[10px] pr-48 pl-7"
              //   onChange={(e) => {
              //     setLocation(e.target.value);
              //   }
              // }
            />
            {/* <button
              type="button"
              //  onClick={onClick}
            >
              Search
            </button> */}
            <div className="filters flex justify-center flex-wrap gap-6 bg-[#24343D] rounded-xl py-[15px] px-[30px] ">
              <label className=" text-2xl font-medium">Filters</label>
              <select className="py-[5px] px-[15px] border-solid border border-[#FFFFFF78] rounded-[10px] outline-none bg-[#1F2D346E]">
                <option>Coldest</option>
              </select>
              <select className=" py-[5px] px-[15px] border-solid border border-[#FFFFFF78] rounded-[10px] outline-none bg-[#1F2D346E]">
                <option>10°C - 20°C</option>
              </select>
              <select className="py-[5px] px-[15px] border-solid border border-[#FFFFFF78] rounded-[10px] outline-none bg-[#1F2D346E]">
                <option>Rainy</option>
              </select>
            </div>
          </div>
          <div className="cards flex justify-center flex-wrap gap-16 pt-24">
            <Card1 />
            <Card2 />
            <Card3 />
          </div>
        </div>
      </section>
    </>
  );
}
