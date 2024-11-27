import ShowcaseHalfItem from './ShowcaseHalfItem';
import ShowcaseThrice from './ShowcaseThrice';

function ShowcaseList({ showcaseDatas }) {
  return (
    <div className="showcase-list">
      <div className="w-full">
        <div className="w-full flex flex-col lg:flex-row gap-6 mb-[30px]">
          {showcaseDatas.slice(0, 2).map((item) => (
            <ShowcaseHalfItem data={item} key={item.id} />
          ))}
        </div>

        <div className="w-full flex flex-col sm:flex-row flex-wrap justify-between gap-y-6">
          {showcaseDatas.slice(2, showcaseDatas.length).map((item) => (
            <ShowcaseThrice data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowcaseList;
