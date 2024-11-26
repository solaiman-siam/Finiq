import LocationSection from '@/components/Location/LocationSection';
import NewsSection from '@/components/News/NewsSection';
import PartnersSection from '@/components/Partners/PartnersSection';
import ShowcaseSection from '@/components/Showcase/ShowcaseSection';

function ShowCases() {
  return (
    <div>
      <div className="bg-bg-secondary">
        <ShowcaseSection />
      </div>
      <div>
        <NewsSection />
        <PartnersSection />
        <LocationSection />
      </div>
    </div>
  );
}

export default ShowCases;
