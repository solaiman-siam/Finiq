import Container from '@/components/Container';
import NewsItem from './Components/NewsItem';

const newsDatas = [
  {
    id: 1,
    year: 2018,
    newsItems: [
      {
        id: 1,
        date: '23',
        month: 'October',
        headline: 'E.g. ICE event in Hong Kong',
        description:
          'Fermentum purus dictum magna consectetur a cras eu fermentum eu. Sed viverra tincidunt morbi lobortis congue in. Duis eu turpis enim malesuada egestas ac amet. Turpis ac etiam lectus massa. Quis est magna est lacus nunc.',
        link: '/',
      },
      {
        id: 2,
        date: '12',
        month: 'October',
        headline: 'UK office expanding',
        description:
          'Fermentum purus dictum magna consectetur a cras eu fermentum eu. Sed viverra tincidunt morbi lobortis congue in. Duis eu turpis enim malesuada egestas ac amet. Turpis ac etiam lectus massa. Quis est magna est lacus nunc.',
        link: '/',
      },
      {
        id: 3,
        date: '4',
        month: 'October',
        headline: 'E.g. ICE event in Hong Kong',
        description:
          'Fermentum purus dictum magna consectetur a cras eu fermentum eu. Sed viverra tincidunt morbi lobortis congue in. Duis eu turpis enim malesuada egestas ac amet. Turpis ac etiam lectus massa. Quis est magna est lacus nunc.',
        link: '/',
      },
    ],
  },
  {
    id: 2,
    year: 2019,
    newsItems: [
      {
        id: 1,
        date: '15',
        month: 'December',
        headline: 'E.g. ICE event in Hong Kong',
        description:
          'Fermentum purus dictum magna consectetur a cras eu fermentum eu. Sed viverra tincidunt morbi lobortis congue in. Duis eu turpis enim malesuada egestas ac amet. Turpis ac etiam lectus massa. Quis est magna est lacus nunc.',
        link: '/',
      },
      {
        id: 2,
        date: '30',
        month: 'December',
        headline: 'UK office expanding',
        description:
          'Fermentum purus dictum magna consectetur a cras eu fermentum eu. Sed viverra tincidunt morbi lobortis congue in. Duis eu turpis enim malesuada egestas ac amet. Turpis ac etiam lectus massa. Quis est magna est lacus nunc.',
        link: '/',
      },
      {
        id: 3,
        date: '4',
        month: 'December',
        headline: 'E.g. ICE event in Hong Kong',
        description:
          'Fermentum purus dictum magna consectetur a cras eu fermentum eu. Sed viverra tincidunt morbi lobortis congue in. Duis eu turpis enim malesuada egestas ac amet. Turpis ac etiam lectus massa. Quis est magna est lacus nunc.',
        link: '/',
      },
      {
        id: 4,
        date: '14',
        month: 'December',
        headline: 'E.g. ICE event in Hong Kong',
        description:
          'Fermentum purus dictum magna consectetur a cras eu fermentum eu. Sed viverra tincidunt morbi lobortis congue in. Duis eu turpis enim malesuada egestas ac amet. Turpis ac etiam lectus massa. Quis est magna est lacus nunc.',
        link: '/',
      },
      {
        id: 4,
        date: '16',
        month: 'December',
        headline: 'E.g. ICE event in Hong Kong',
        description:
          'Fermentum purus dictum magna consectetur a cras eu fermentum eu. Sed viverra tincidunt morbi lobortis congue in. Duis eu turpis enim malesuada egestas ac amet. Turpis ac etiam lectus massa. Quis est magna est lacus nunc.',
        link: '/',
      },
    ],
  },
  {
    id: 3,
    year: 2020,
    newsItems: [],
  },
  {
    id: 4,
    year: 2021,
    newsItems: [],
  },
  {
    id: 5,
    year: 2022,
    newsItems: [],
  },
  {
    id: 6,
    year: 2023,
    newsItems: [],
  },
  {
    id: 7,
    year: 2024,
    newsItems: [],
  },
];

const NewsSection = () => {
  return (
    <section className="bg-white pt-[50px] sm:pt-[100px] pb-[61px] relative z-[1] px-5 xl:px-0">
      <Container>
        {/* section title  */}
        <h3 className="text-[30px] sm:text-[50px] font-bold capitalize text-text-primary mb-[30px]">
          News
        </h3>

        <div className="mt-7">
          {/* <NewsTimeline data={newsDatas} /> */}
          <NewsItem data={newsDatas} />
        </div>
      </Container>

      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <img
          src="/waves-2.png"
          alt=""
          className="w-full max-w-full object-cover"
        />
      </div>
    </section>
  );
};

export default NewsSection;
