const RightSideBarUniversal = ({header,subHeader,aside,buttonName,isIcon}) => {
    return (
        <div className="rightsidebarContainer">
            <div className="flex justify-between px-3">
              <span className="capitalize">{header}</span>
              <img src="/assets/icons/arrow_forward.png" alt="arrow-foraward" className={`w-[14px] h-[14px] cursor-pointer ${!isIcon && 'hidden'}`}/>
            </div>
            <div className="bg-[rgb(0,0,0,0.2)] rounded-2xl p-3 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-[14px] capitalize">{subHeader}</span>
                <span className="text-[12px] text-[rgb(255,255,255,0.5)] capitalize">{aside}</span>
              </div>
              <button className="bg-[#72F6C0] text-sm font-semibold w-[90px] text-black rounded-[25px] p-2 capitalize">{buttonName}</button>
            </div>
        </div>
    );
  };
  
  export default RightSideBarUniversal;