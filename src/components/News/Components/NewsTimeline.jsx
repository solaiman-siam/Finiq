const NewsTimeline = ({ data }) => {
  return (
    <div className="flex mb-[15px]">
      {data.map((item) => (
        <h6
          className="text-black text-base capitalize px-4 opacity-50 cursor-pointer hover:opacity-100 duration-300 relative after:absolute after:bottom-[-15px] after:left-0 after:w-full after:h-[1px] after:bg-bg-primary after:content-[''] first:pl-0 last:pr-0"
          key={item.id}
        >
          {item.year}
        </h6>
      ))}
    </div>
  );
};

export default NewsTimeline;
