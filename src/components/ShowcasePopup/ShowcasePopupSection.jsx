import Container from '../Container';

const ShowcasePopupSection = ({ data }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-end bg-black/40">
      <Container>
        <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[60%] h-[80%] flex justify-center items-center rounded-[10px] overflow-y-scroll no-scrollbar">
          <div className="w-full bg-white flex flex-col justify-between p-10 rounded-[10px]">
            <img
              src={data.imgUrl}
              alt="Showcase Item Image"
              className="w-full h-[392px] max-w-full rounded-[10px] object-cover"
            />

            <div>
              <h3 className="text-bg-primary text-[28px] font-bold font-poppins mt-5">
                {data.topTitle}
              </h3>

              <h5 className="text-black text-sm font-bold font-poppins leading-[150%] mt-[10px]">
                {data.info}
              </h5>

              <p className="text-black text-sm font-poppins leading-[150%] mt-[10px]">
                {data.description}
              </p>

              <button onClick={()=>} className="px-[72px] py-[14px] rounded-full border-2 border-bg-primary mt-6">
                Close
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShowcasePopupSection;
