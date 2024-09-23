import avatar from "../../../public/images/avatar.png";
import bot from "../../../public/icon/bot.svg";
import shape from "../../../public/icon/Shape.svg";

function MobileHeader() {
  return (
    <header className="flex flex-col gap-3 md:hidden">
      <div className="flex justify-between items-center px-[16px]">
        <div className="flex justify-center items-center gap-5">
          <img src={avatar} alt="avatar" className="w-[32px] h-[32px]" />
          <h2 className="font-bold text-[26px] text-[#242424]">Van Arsdel</h2>
        </div>
        <div className="flex items-center gap-5">
          <img src={bot} alt="bot svg" className="w-[24px] h-[24px]" />
          <img src={shape} alt="shape" className="w-[24px] h-[24px]" />
        </div>
      </div>
      {/* {tab} */}
      <div className="flex justify-around border-b pb-2 text-[15px] text-[#242424] ">
        <div>
          <p className="font-semibold">Tab 1</p>
          <span className="bg-[#5B5FC7] w-[120px] h-[2px] absolute left-0 top-[80px] "></span>
        </div>
        <div>
          <p>Tab 2</p>
          <span className="bg-[#5B5FC7] w-[120px] h-[2px] absolute left-1/3 top-[80px] hidden"></span>
        </div>
        <div>
          <p>Tab 3</p>
          <span className="bg-[#5B5FC7] w-[120px] h-[2px] absolute left-2/3 top-[80px] hidden"></span>
        </div>
      </div>
    </header>
  );
}

export default MobileHeader;
