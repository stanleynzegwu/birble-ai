import RightSideBarNewsScroll from "@/src/components/RightSideBarNewsScroll";
import RightSideBarUniversal from "@/src/components/RightSideBarUniversal";

const RightSidebar = () => {
  return (
    <div className="rightsidebar rounded-3xl w-[31.25%] top-16 bg-[rgb(17,17,44,0.8)] p-3 pt-8">
      <div className="w-full flex justify-between items-center px-3 mb-3">
        <span className="">Notification</span>
        <span className="text-[#4C86FF] text-[12px] cursor-pointer">see all</span>
      </div>
      <RightSideBarNewsScroll />

      <div className="flex flex-col gap-2 mt-10">
        <span className="pl-3">Activity Center</span>

        <div className="bg-[rgb(35,35,67,0.8)] rounded-3xl p-3 flex flex-col gap-3">
          <div className="rightsidebarContainer">
            <span className="pl-3">NFT Collection</span>
            <div className="grid grid-cols-3 gap-2 w-[100%] h-[100%]">
              {[
                { color: "#9227D2", amount: 3234, action: "Created" },
                { color: "#6232E8", amount: 63, action: "Deployed" },
                { color: "#E42474", amount: 4, action: "Pending" },
              ].map(({ color, amount, action }, index) => (
                <div
                  className="rounded-xl w-[calc(33.33% - 0.5rem)] min-h-auto"
                  key={index}
                  style={{ backgroundColor: color }}
                >
                  <div className="flex flex-col p-3 pt-8">
                    <span>{amount}</span>
                    <span className="text-[12px] font-semibold text-[rgb(255,255,255,0.7)]">
                      {action}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <RightSideBarUniversal
            header={"latest smart contracts"}
            subHeader={"XYZ Automation deal"}
            aside={"Deployed 2 Mar 2024"}
            buttonName={"Deployed"}
            isIcon={true}
          />

          <div className="rightsidebarContainer">
            <span>Campaign</span>
            <div className="flex gap-3">
              {[
                { color: "#D55A33", amount: 24, name: "all campaign" },
                { color: "#01986B", amount: 3, name: "current campaign" },
              ].map(({ color, amount, name }, index) => (
                <div
                  className="capitalize flex-1 rounded-xl flex flex-col p-2 pt-8"
                  key={index}
                  style={{ backgroundColor: color }}
                >
                  <span>{amount}</span>
                  <span className="text-[12px] font-semibold text-[rgb(255,255,255,0.7)]">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <RightSideBarUniversal
            header={"next billing date"}
            subHeader={"Wednesday, 14 Feb 2024"}
            aside={"your pro plan is expiring soon"}
            buttonName={"pay now"}
            isIcon={false}
          />
          <RightSideBarUniversal
            header={"new release"}
            subHeader={"motion creator"}
            aside={"turn your still images into motion"}
            buttonName={"explore"}
            isIcon={false}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
