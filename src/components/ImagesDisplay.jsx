import Image from "next/image";

const ImagesDisplay = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {[...Array(10).keys()].map((num, index) => (
        // <img
        //   src={`/figma/fig${num + 1}.png`}
        //   alt="aiImage"
        //   key={index}
        //   className="w-full h-auto"
        //   style={{ width: "100%", height: "auto" }}
        // />

        <Image
          key={index}
          src={`/figma/fig${num + 1}.png`}
          alt="AI Image"
          width={500}
          height={500}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      ))}
    </div>
  );
};

export default ImagesDisplay;
