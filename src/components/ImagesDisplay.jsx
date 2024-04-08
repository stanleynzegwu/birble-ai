const ImagesDisplay = () => {
  return (
    <div
      className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      // style={{ display: "grid", gridAutoRows: "auto", alignContent: "start" }}
    >
      {[...Array(10).keys()].map((num, index) => (
        <img
          src={`/figma/fig${num + 1}.png`}
          alt="aiImage"
          key={index}
          className="w-full h-auto"
          style={{ width: "100%", height: "auto" }}
        />
      ))}
    </div>
  );
};

export default ImagesDisplay;
