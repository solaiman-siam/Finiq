import Container from '@/components/Container';
import NewsItem from './Components/NewsItem';

const newsDatas = [
  {
    id: 1,
    year: 2018,
    newsItems: [
      {
        id: 1,
        month: '',
        year: '2018',
        headline: 'Zurich sspa event ',
        description:
          'SSPA – a thoughtful ambassador for the structured products industry in Switzerland',
        link: 'https://sspa.ch/en/ueber-uns/',
      },
      {
        id: 2,
        month: '',
        year: '2018',
        headline: 'Ice event ',
        description:
          'ICE’s Strategic Alliances program is designed to connect our comprehensive data with technology vendors to enhance our clients’ workflows. From cloud providers to back-office systems, we join forces with a wide range of solution providers to help meet our clients’ needs.',
        link: 'https://www.ice.com/fixed-income-data-services/strategic-alliances',
      },
      {
        id: 3,
        month: '',
        year: '2018',
        headline: 'Math finance event - frankfurt',
        description: `24th MathFinance
Conference`,
        link: 'https://www.mathfinance.com/events/24th-mathfinance-conference/',
      },
      {
        id: 4,
        month: 'August',
        year: '2018',
        headline: 'A pure-play private bank from Geneva has opted for FinIQ',
        description: `A pure-play private bank from Geneva has opted for FinIQ to automate its flows for structured products. The bank will make use of the FinIQ multi issuer platform to connect into a network of leading liquidity providers for pricing and execution of its equity linked payoffs. The system is expected to go live in Q4.`,
        link: '',
      },
      {
        id: 5,
        month: 'July',
        year: '2018',
        headline: 'Futu securities hong kong',
        description: `Futu Securities in Hong Kong alongwith its Singapore arm, Moomoo became a FinIQ client subscribing to FinIQ’s EQ Connect structured products pricing and execution cloud platform, further solidifying cross segment reach of EQ Connect. The platform will enable Futu and Moomoo to get real-time price quotation from a panel of leading investment banks allowing their clients with best execution of various equity linked structured notes.`,
        link: '',
      },
      {
        id: 6,
        date: '17',
        month: 'June',
        year: '2018',
        headline:
          'FinIQ FXDConnect goes live in Europe with Europe’s second largest private bank',
        description: `FinIQ is pleased to announce its rollout at a top European private bank starting with their front office users in Geneva. The initial best execution panel will have 6 liquidity providers, two each from US, UK and France. The payoff list includes vanillas, strategies, barriers, TRF, pivot and accumulators.`,
        link: '',
      },
    ],
  },
  {
    id: 2,
    year: 2019,
    newsItems: [
      {
        id: 1,
        month: '',
        year: '2019',
        headline: 'Zurich sspa event ',
        description:
          'SSPA – a thoughtful ambassador for the structured products industry in Switzerland',
        link: 'https://sspa.ch/en/ueber-uns/',
      },
      {
        id: 2,
        month: '',
        year: '2019',
        headline: 'Ice event ',
        description:
          'ICE’s Strategic Alliances program is designed to connect our comprehensive data with technology vendors to enhance our clients’ workflows. From cloud providers to back-office systems, we join forces with a wide range of solution providers to help meet our clients’ needs.',
        link: 'https://www.ice.com/fixed-income-data-services/strategic-alliances',
      },
      {
        id: 3,
        month: '',
        year: '2019',
        headline: 'Math finance event - frankfurt',
        description: `24th MathFinance
Conference`,
        link: 'https://www.mathfinance.com/events/24th-mathfinance-conference/',
      },
      {
        id: 4,
        month: 'August',
        year: '2019',
        headline: 'A pure-play private bank from Geneva has opted for FinIQ',
        description: `A pure-play private bank from Geneva has opted for FinIQ to automate its flows for structured products. The bank will make use of the FinIQ multi issuer platform to connect into a network of leading liquidity providers for pricing and execution of its equity linked payoffs. The system is expected to go live in Q4.`,
        link: '',
      },
      {
        id: 5,
        month: 'July',
        year: '2019',
        headline: 'Futu securities hong kong',
        description: `Futu Securities in Hong Kong alongwith its Singapore arm, Moomoo became a FinIQ client subscribing to FinIQ’s EQ Connect structured products pricing and execution cloud platform, further solidifying cross segment reach of EQ Connect. The platform will enable Futu and Moomoo to get real-time price quotation from a panel of leading investment banks allowing their clients with best execution of various equity linked structured notes.`,
        link: '',
      },
      {
        id: 6,
        date: '17',
        month: 'June',
        year: '2019',
        headline:
          'FinIQ FXDConnect goes live in Europe with Europe’s second largest private bank',
        description: `FinIQ is pleased to announce its rollout at a top European private bank starting with their front office users in Geneva. The initial best execution panel will have 6 liquidity providers, two each from US, UK and France. The payoff list includes vanillas, strategies, barriers, TRF, pivot and accumulators.`,
        link: '',
      },
    ],
  },
  {
    id: 3,
    year: 2020,
    newsItems: [
      {
        id: 1,
        month: '',
        year: '2020',
        headline: 'Zurich sspa event ',
        description:
          'SSPA – a thoughtful ambassador for the structured products industry in Switzerland',
        link: 'https://sspa.ch/en/ueber-uns/',
      },
      {
        id: 2,
        month: '',
        year: '2020',
        headline: 'Ice event ',
        description:
          'ICE’s Strategic Alliances program is designed to connect our comprehensive data with technology vendors to enhance our clients’ workflows. From cloud providers to back-office systems, we join forces with a wide range of solution providers to help meet our clients’ needs.',
        link: 'https://www.ice.com/fixed-income-data-services/strategic-alliances',
      },
      {
        id: 3,
        month: '',
        year: '2020',
        headline: 'Math finance event - frankfurt',
        description: `24th MathFinance
Conference`,
        link: 'https://www.mathfinance.com/events/24th-mathfinance-conference/',
      },
      {
        id: 4,
        month: 'August',
        year: '2020',
        headline: 'A pure-play private bank from Geneva has opted for FinIQ',
        description: `A pure-play private bank from Geneva has opted for FinIQ to automate its flows for structured products. The bank will make use of the FinIQ multi issuer platform to connect into a network of leading liquidity providers for pricing and execution of its equity linked payoffs. The system is expected to go live in Q4.`,
        link: '',
      },
      {
        id: 5,
        month: 'July',
        year: '2020',
        headline: 'Futu securities hong kong',
        description: `Futu Securities in Hong Kong alongwith its Singapore arm, Moomoo became a FinIQ client subscribing to FinIQ’s EQ Connect structured products pricing and execution cloud platform, further solidifying cross segment reach of EQ Connect. The platform will enable Futu and Moomoo to get real-time price quotation from a panel of leading investment banks allowing their clients with best execution of various equity linked structured notes.`,
        link: '',
      },
      {
        id: 6,
        date: '17',
        month: 'June',
        year: '2020',
        headline:
          'FinIQ FXDConnect goes live in Europe with Europe’s second largest private bank',
        description: `FinIQ is pleased to announce its rollout at a top European private bank starting with their front office users in Geneva. The initial best execution panel will have 6 liquidity providers, two each from US, UK and France. The payoff list includes vanillas, strategies, barriers, TRF, pivot and accumulators.`,
        link: '',
      },
    ],
  },
  {
    id: 4,
    year: 2021,
    newsItems: [
      {
        id: 1,
        month: '',
        year: '2021',
        headline: 'Zurich sspa event ',
        description:
          'SSPA – a thoughtful ambassador for the structured products industry in Switzerland',
        link: 'https://sspa.ch/en/ueber-uns/',
      },
      {
        id: 2,
        month: '',
        year: '2021',
        headline: 'Ice event ',
        description:
          'ICE’s Strategic Alliances program is designed to connect our comprehensive data with technology vendors to enhance our clients’ workflows. From cloud providers to back-office systems, we join forces with a wide range of solution providers to help meet our clients’ needs.',
        link: 'https://www.ice.com/fixed-income-data-services/strategic-alliances',
      },
      {
        id: 3,
        month: '',
        year: '2021',
        headline: 'Math finance event - frankfurt',
        description: `24th MathFinance
Conference`,
        link: 'https://www.mathfinance.com/events/24th-mathfinance-conference/',
      },
      {
        id: 4,
        month: 'August',
        year: '2021',
        headline: 'A pure-play private bank from Geneva has opted for FinIQ',
        description: `A pure-play private bank from Geneva has opted for FinIQ to automate its flows for structured products. The bank will make use of the FinIQ multi issuer platform to connect into a network of leading liquidity providers for pricing and execution of its equity linked payoffs. The system is expected to go live in Q4.`,
        link: '',
      },
      {
        id: 5,
        month: 'July',
        year: '2021',
        headline: 'Futu securities hong kong',
        description: `Futu Securities in Hong Kong alongwith its Singapore arm, Moomoo became a FinIQ client subscribing to FinIQ’s EQ Connect structured products pricing and execution cloud platform, further solidifying cross segment reach of EQ Connect. The platform will enable Futu and Moomoo to get real-time price quotation from a panel of leading investment banks allowing their clients with best execution of various equity linked structured notes.`,
        link: '',
      },
      {
        id: 6,
        date: '17',
        month: 'June',
        year: '2021',
        headline:
          'FinIQ FXDConnect goes live in Europe with Europe’s second largest private bank',
        description: `FinIQ is pleased to announce its rollout at a top European private bank starting with their front office users in Geneva. The initial best execution panel will have 6 liquidity providers, two each from US, UK and France. The payoff list includes vanillas, strategies, barriers, TRF, pivot and accumulators.`,
        link: '',
      },
    ],
  },
  {
    id: 5,
    year: 2022,
    newsItems: [
      {
        id: 1,
        month: '',
        year: '2022',
        headline: 'Zurich sspa event ',
        description:
          'SSPA – a thoughtful ambassador for the structured products industry in Switzerland',
        link: 'https://sspa.ch/en/ueber-uns/',
      },
      {
        id: 2,
        month: '',
        year: '2022',
        headline: 'Ice event ',
        description:
          'ICE’s Strategic Alliances program is designed to connect our comprehensive data with technology vendors to enhance our clients’ workflows. From cloud providers to back-office systems, we join forces with a wide range of solution providers to help meet our clients’ needs.',
        link: 'https://www.ice.com/fixed-income-data-services/strategic-alliances',
      },
      {
        id: 3,
        month: '',
        year: '2022',
        headline: 'Math finance event - frankfurt',
        description: `24th MathFinance
Conference`,
        link: 'https://www.mathfinance.com/events/24th-mathfinance-conference/',
      },
      {
        id: 4,
        month: 'August',
        year: '2022',
        headline: 'A pure-play private bank from Geneva has opted for FinIQ',
        description: `A pure-play private bank from Geneva has opted for FinIQ to automate its flows for structured products. The bank will make use of the FinIQ multi issuer platform to connect into a network of leading liquidity providers for pricing and execution of its equity linked payoffs. The system is expected to go live in Q4.`,
        link: '',
      },
      {
        id: 5,
        month: 'July',
        year: '2022',
        headline: 'Futu securities hong kong',
        description: `Futu Securities in Hong Kong alongwith its Singapore arm, Moomoo became a FinIQ client subscribing to FinIQ’s EQ Connect structured products pricing and execution cloud platform, further solidifying cross segment reach of EQ Connect. The platform will enable Futu and Moomoo to get real-time price quotation from a panel of leading investment banks allowing their clients with best execution of various equity linked structured notes.`,
        link: '',
      },
      {
        id: 6,
        date: '17',
        month: 'June',
        year: '2022',
        headline:
          'FinIQ FXDConnect goes live in Europe with Europe’s second largest private bank',
        description: `FinIQ is pleased to announce its rollout at a top European private bank starting with their front office users in Geneva. The initial best execution panel will have 6 liquidity providers, two each from US, UK and France. The payoff list includes vanillas, strategies, barriers, TRF, pivot and accumulators.`,
        link: '',
      },
    ],
  },
  {
    id: 6,
    year: 2023,
    newsItems: [
      {
        id: 1,
        month: '',
        year: '2023',
        headline: 'Zurich sspa event ',
        description:
          'SSPA – a thoughtful ambassador for the structured products industry in Switzerland',
        link: 'https://sspa.ch/en/ueber-uns/',
      },
      {
        id: 2,
        month: '',
        year: '2023',
        headline: 'Ice event ',
        description:
          'ICE’s Strategic Alliances program is designed to connect our comprehensive data with technology vendors to enhance our clients’ workflows. From cloud providers to back-office systems, we join forces with a wide range of solution providers to help meet our clients’ needs.',
        link: 'https://www.ice.com/fixed-income-data-services/strategic-alliances',
      },
      {
        id: 3,
        month: '',
        year: '2023',
        headline: 'Math finance event - frankfurt',
        description: `24th MathFinance
Conference`,
        link: 'https://www.mathfinance.com/events/24th-mathfinance-conference/',
      },
      {
        id: 4,
        month: 'August',
        year: '2023',
        headline: 'A pure-play private bank from Geneva has opted for FinIQ',
        description: `A pure-play private bank from Geneva has opted for FinIQ to automate its flows for structured products. The bank will make use of the FinIQ multi issuer platform to connect into a network of leading liquidity providers for pricing and execution of its equity linked payoffs. The system is expected to go live in Q4.`,
        link: '',
      },
      {
        id: 5,
        month: 'July',
        year: '2023',
        headline: 'Futu securities hong kong',
        description: `Futu Securities in Hong Kong alongwith its Singapore arm, Moomoo became a FinIQ client subscribing to FinIQ’s EQ Connect structured products pricing and execution cloud platform, further solidifying cross segment reach of EQ Connect. The platform will enable Futu and Moomoo to get real-time price quotation from a panel of leading investment banks allowing their clients with best execution of various equity linked structured notes.`,
        link: '',
      },
      {
        id: 6,
        date: '17',
        month: 'June',
        year: '2023',
        headline:
          'FinIQ FXDConnect goes live in Europe with Europe’s second largest private bank',
        description: `FinIQ is pleased to announce its rollout at a top European private bank starting with their front office users in Geneva. The initial best execution panel will have 6 liquidity providers, two each from US, UK and France. The payoff list includes vanillas, strategies, barriers, TRF, pivot and accumulators.`,
        link: '',
      },
    ],
  },
  {
    id: 7,
    year: 2024,
    newsItems: [
      {
        id: 1,
        month: '',
        year: '2024',
        headline: 'Zurich sspa event ',
        description:
          'SSPA – a thoughtful ambassador for the structured products industry in Switzerland',
        link: 'https://sspa.ch/en/ueber-uns/',
      },
      {
        id: 2,
        month: '',
        year: '2024',
        headline: 'Ice event ',
        description:
          'ICE’s Strategic Alliances program is designed to connect our comprehensive data with technology vendors to enhance our clients’ workflows. From cloud providers to back-office systems, we join forces with a wide range of solution providers to help meet our clients’ needs.',
        link: 'https://www.ice.com/fixed-income-data-services/strategic-alliances',
      },
      {
        id: 3,
        month: '',
        year: '2024',
        headline: 'Math finance event - frankfurt',
        description: `24th MathFinance
Conference`,
        link: 'https://www.mathfinance.com/events/24th-mathfinance-conference/',
      },
      {
        id: 4,
        month: 'August',
        year: '2024',
        headline: 'A pure-play private bank from Geneva has opted for FinIQ',
        description: `A pure-play private bank from Geneva has opted for FinIQ to automate its flows for structured products. The bank will make use of the FinIQ multi issuer platform to connect into a network of leading liquidity providers for pricing and execution of its equity linked payoffs. The system is expected to go live in Q4.`,
        link: '',
      },
      {
        id: 5,
        month: 'July',
        year: '2024',
        headline: 'Futu securities hong kong',
        description: `Futu Securities in Hong Kong alongwith its Singapore arm, Moomoo became a FinIQ client subscribing to FinIQ’s EQ Connect structured products pricing and execution cloud platform, further solidifying cross segment reach of EQ Connect. The platform will enable Futu and Moomoo to get real-time price quotation from a panel of leading investment banks allowing their clients with best execution of various equity linked structured notes.`,
        link: '',
      },
      {
        id: 6,
        date: '17',
        month: 'June',
        year: '2024',
        headline:
          'FinIQ FXDConnect goes live in Europe with Europe’s second largest private bank',
        description: `FinIQ is pleased to announce its rollout at a top European private bank starting with their front office users in Geneva. The initial best execution panel will have 6 liquidity providers, two each from US, UK and France. The payoff list includes vanillas, strategies, barriers, TRF, pivot and accumulators.`,
        link: '',
      },
      {
        id: 7,
        month: 'April',
        year: '2024',
        headline:
          'FinIQ signs with a Japanese bank for Fixed Income, Mutual Funds and Global Equities',
        description: `FinIQ signed a new client, a large Japanese bank to automate their investments and securities trading business. The scope also includes Lombard financing besides accounting, payments, order management, trade capture, fees computation, custodian interface, corporate actions and statement. The system will go live within 6 months. Financial products include global equities, fixed income and mutual funds.`,
        link: '',
      },
      {
        id: 8,
        month: '',
        year: '2024',
        headline: 'Srp 2024  singapore',
        description: `From the Masterclass on Day 1 to the main conference on Day 2 and Day 3, we heard from influential expert speakers from local and global institutions and gained unique insight into the future of structured products..`,
        link: 'https://events.structuredretailproducts.com/event/f057a569-fa18-4139-95b2-caa30b12031b/summary',
      },
      {
        id: 9,
        date: '',
        year: '2024',
        headline: 'Srp 2024  singapore',
        description: `After two highly successful years of hosting SPi events in Canada and the US, WSD is thrilled to announce the expansion of the SPi Conference and Awards to Europe.`,
        link: 'https://www.europe.sp-intelligence.com/',
      },
    ],
  },
];

const NewsSection = () => {
  return (
    <section
      id="news"
      className="bg-white pt-[50px] sm:pt-[100px] sm:pb-[61px] relative z-[1] px-5 xxl:px-0"
    >
      <Container>
        {/* section title  */}
        <h3
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-[30px] sm:text-[50px] font-bold capitalize text-text-primary mb-[30px]"
        >
          News
        </h3>

        <div className="mt-7">
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
