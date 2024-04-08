// const LeftSidebar = () => {
//   return (
//     // <div className="leftsidebar w-[17%] bg-[#131829]">
//     <div className=" w-[17%] bg-[#131829]">
//     <p h-screen>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit facere consectetur atque quod laboriosam voluptatum saepe! A dolor, error sequi, cum odit consectetur reiciendis blanditiis non deleniti atque, sint dolorem.</p>
//     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit facere consectetur atque quod laboriosam voluptatum saepe! A dolor, error sequi, cum odit consectetur reiciendis blanditiis non deleniti atque, sint dolorem.</p>
//     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit facere consectetur atque quod laboriosam voluptatum saepe! A dolor, error sequi, cum odit consectetur reiciendis blanditiis non deleniti atque, sint dolorem.</p>
//     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit facere consectetur atque quod laboriosam voluptatum saepe! A dolor, error sequi, cum odit consectetur reiciendis blanditiis non deleniti atque, sint dolorem.</p>
//     </div>
//   )
// };

// export default LeftSidebar;


const LeftSidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-[17%] bg-[#131623] overflow-y-auto z-[500] p-4 py-8">
      <div className="flex justify-center">
        <img src="/assets/icons/birbleAILogo.png" alt="birble_logo" className=""/>
      </div>

      <div className="flex flex-col gap-6 mt-10">
        <span className="pl-8 font-semibold">Dashboard</span>

        <div className="space-y-4">
          <span className="pl-8 font-semibold">AI Generator</span>
          <div className="space-y-4">
            {[
              {iconPath:'/assets/icons/conversationIcon.png',name:'conversation'},
              {iconPath:'/assets/icons/imageIcon.png',name:'Image creation'},
              {iconPath:'/assets/icons/music.png',name:'musc creation'},
              {iconPath:'/assets/icons/videoIcon.png',name:'video generation'},
              {iconPath:'/assets/icons/codeIcon.png',name:'code generation'},
              {iconPath:'/assets/icons/TextVoiceIcon.png',name:'text to voice'}
            ].map(({iconPath,name},index) => (
              <div className="flex gap-3 items-center pl-16" key={index}>
                <img src={iconPath} alt="icon" className='w-[10px] h-[10px]'/>
                <p className="capitalize text-[#B2B2B2]">{name}</p>
              </div>
            ))}
          </div>
        </div>

        <span className="pl-8 font-medium">Collections</span>
        <span className="pl-8 font-medium">Token Sale</span>
        <img src="/astronaut.png" alt="astronaut" className="my-4"/>
        <span className="pl-8 font-medium">Profiles & Settings</span>
        <span className="pl-8 font-medium">FAQ & Help</span>
        <span className="pl-8 font-medium">Logout</span>

        <div className="flex gap-3 items-center mt-4">
            <img src="/person.png" alt="person" className="rounded-2xl w-[65px] h-[65px]"/>
            <div className="flex flex-col">
              <span className="font-semibold ">Mima Smith</span>
              <span className="text-[14px] text-[#B2B2B2]">Designer</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
