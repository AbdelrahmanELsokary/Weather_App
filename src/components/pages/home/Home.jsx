export function Home() {
  return (
    <>
      <section className="p-8">
        <div className="container justify-center ">
          <h1 className="text-center text-white font-bold text-4xl leading-[45px]">
            Seeing the weather of the whole world <br /> with <span className=" text-[#CAECFF]">Dark Weather!</span>
          </h1>
          <div className=" w-[80%] search flex justify-between flex-wrap text-white pt-20 m-auto">
            <input type="search" placeholder="Search Here" className="  bg-[#24343D] rounded-xl outline-none py-[10px] pr-48 pl-7" />
            <div className="filters flex gap-6 bg-[#24343D] rounded-xl py-[15px] px-[30px] ">
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
        </div>
      </section>
    </>
  );
}
