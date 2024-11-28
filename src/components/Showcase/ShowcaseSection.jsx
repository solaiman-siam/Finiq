import { useEffect } from 'react';
import Container from '../Container';
import ShowcaseList from './Components/ShowcaseList';

const showcaseData = [
  {
    id: 1,
    topTitle: 'RM Platform',
    info: 'LGT and FinIQ partner to boost automation in structured products and derivatives',
    description: `Liechtenstein-based private bank LGT and software provider FinIQ have worked together to automate and streamline its structured products and derivatives business in Asia. FinIQ and its EQ Connect platform offers connectivity to top market makers in the equity-linked space for products. LGT has subscribed to EQ Connect since 2018. Furthermore, the collaboration is set to further automate pre-trade suitability and order process, trade booking as well as post-trade information flow. LGT aims to achieve seamless integration with the FinIQ EQ Connect platform and its core banking system from Avaloq. In addition, FinIQ's FXD platform offers connectivity to market makers in the FX-linked space for cash FX, options, strategies and also structured products.

In addition, FinIQ’s FXD platform offers connectivity to market makers in the FX-linked space for cash FX, options, strategies and also structured products.

Sven Oesch, regional head of trading and treasury, LGT Private Banking Asia, said: “LGT is committed to leveraging technology in ways which improves efficiency and adds value to our clients. The adoption of EQ Connect back in 2018 helped us to handle the increased volumes in equity linked structured products over the last years. It has also produced positive results in the form of improved customer service and new business opportunities.

“With the success achieved thus far, the automation of price discovery and trading workflows in FXD Connect and further enhancements in EQ Connect will ensure we are able to provide our investment advisors, relationship managers and clients with the best user and customer experience for a wide range of asset classes on a single multi dealer platform.”

Mahesh Bulchandani, CEO and director of FinIQ Europe, added: “We have seen tremendous growth in our SaaS platform. However the traditional installed offering continues to be attractive to customers for a variety of reasons, one of which is the ease of integration with other upstream and downstream systems of the bank. With this project we have now achieved upstream and downstream integration with our SaaS platform, as well as made our SaaS platform multi-asset-class, thus making our SaaS offering a lot more attractive.”

With over CHF218bn of assets under management (as of 30 June 2020), LGT is one of the world’s leading wealth management organisations.

LGT Bank has been present in Asia since 1986 and today is one of the top ten private banks in the region according to recent data published in the Asian Private Banker league table. In Asia, LGT serves high net worth individuals via full fledged booking platforms in Hong Kong and Singapore and wealth management offices in Bangkok, Thailand.
FinIQ specialises in distribution and transaction processing of treasury and wealth management products. FinIQ’s unchallenged leadership is proven by its unmatched market share. The key to FinIQ’s success is in its ability to innovate continuously and deliver functionally rich productivity tools for Structuring, Pricing, Payoff design, Electronic liquidity, Order management, Suitability, Documentation, Collateral, Fixing, Settlement and Accounting for the entire order and trade life cycle.

The FinIQ solution automates instruments ranging from traditional products such as FX spot, options, bonds, stocks, Funds, Insurance, IRS to more sophisticated products such as OTC accumulators, ELN, dual currency investments, target redemptions, and range accruals.`,
    imgUrl: '/showcase-img-1.png',
    link: 'https://www.privatebankerinternational.com/news/lgt-finiq-automation-structured-products-derivatives/',
  },
  {
    id: 2,
    topTitle: 'Wealth Core',
    info: 'Mashreq partnered with FinIQ to enhance client experience with an integrated Wealth Management platform',
    description: `Liechtenstein-based private bank LGT and software provider FinIQ have worked together to automate and streamline its structured products and derivatives business in Asia. FinIQ and its EQ Connect platform offers connectivity to top market makers in the equity-linked space for products. LGT has subscribed to EQ Connect since 2018. Furthermore, the collaboration is set to further automate pre-trade suitability and order process, trade booking as well as post-trade information flow. LGT aims to achieve seamless integration with the FinIQ EQ Connect platform and its core banking system from Avaloq. In addition, FinIQ's FXD platform offers connectivity to market makers in the FX-linked space for cash FX, options, strategies and also structured products.

In addition, FinIQ’s FXD platform offers connectivity to market makers in the FX-linked space for cash FX, options, strategies and also structured products.

Sven Oesch, regional head of trading and treasury, LGT Private Banking Asia, said: “LGT is committed to leveraging technology in ways which improves efficiency and adds value to our clients. The adoption of EQ Connect back in 2018 helped us to handle the increased volumes in equity linked structured products over the last years. It has also produced positive results in the form of improved customer service and new business opportunities.

“With the success achieved thus far, the automation of price discovery and trading workflows in FXD Connect and further enhancements in EQ Connect will ensure we are able to provide our investment advisors, relationship managers and clients with the best user and customer experience for a wide range of asset classes on a single multi dealer platform.”

Mahesh Bulchandani, CEO and director of FinIQ Europe, added: “We have seen tremendous growth in our SaaS platform. However the traditional installed offering continues to be attractive to customers for a variety of reasons, one of which is the ease of integration with other upstream and downstream systems of the bank. With this project we have now achieved upstream and downstream integration with our SaaS platform, as well as made our SaaS platform multi-asset-class, thus making our SaaS offering a lot more attractive.”

With over CHF218bn of assets under management (as of 30 June 2020), LGT is one of the world’s leading wealth management organisations.

LGT Bank has been present in Asia since 1986 and today is one of the top ten private banks in the region according to recent data published in the Asian Private Banker league table. In Asia, LGT serves high net worth individuals via full fledged booking platforms in Hong Kong and Singapore and wealth management offices in Bangkok, Thailand.
FinIQ specialises in distribution and transaction processing of treasury and wealth management products. FinIQ’s unchallenged leadership is proven by its unmatched market share. The key to FinIQ’s success is in its ability to innovate continuously and deliver functionally rich productivity tools for Structuring, Pricing, Payoff design, Electronic liquidity, Order management, Suitability, Documentation, Collateral, Fixing, Settlement and Accounting for the entire order and trade life cycle.

The FinIQ solution automates instruments ranging from traditional products such as FX spot, options, bonds, stocks, Funds, Insurance, IRS to more sophisticated products such as OTC accumulators, ELN, dual currency investments, target redemptions, and range accruals.`,
    imgUrl: '/showcase-img-2.png',
  },
  {
    id: 3,
    topTitle: 'FX Derivatives',
    info: 'Nomura and FinIQ work together in FinIQ’s Market Connect Trading Platform',
    description: `Liechtenstein-based private bank LGT and software provider FinIQ have worked together to automate and streamline its structured products and derivatives business in Asia. FinIQ and its EQ Connect platform offers connectivity to top market makers in the equity-linked space for products. LGT has subscribed to EQ Connect since 2018. Furthermore, the collaboration is set to further automate pre-trade suitability and order process, trade booking as well as post-trade information flow. LGT aims to achieve seamless integration with the FinIQ EQ Connect platform and its core banking system from Avaloq. In addition, FinIQ's FXD platform offers connectivity to market makers in the FX-linked space for cash FX, options, strategies and also structured products.

In addition, FinIQ’s FXD platform offers connectivity to market makers in the FX-linked space for cash FX, options, strategies and also structured products.

Sven Oesch, regional head of trading and treasury, LGT Private Banking Asia, said: “LGT is committed to leveraging technology in ways which improves efficiency and adds value to our clients. The adoption of EQ Connect back in 2018 helped us to handle the increased volumes in equity linked structured products over the last years. It has also produced positive results in the form of improved customer service and new business opportunities.

“With the success achieved thus far, the automation of price discovery and trading workflows in FXD Connect and further enhancements in EQ Connect will ensure we are able to provide our investment advisors, relationship managers and clients with the best user and customer experience for a wide range of asset classes on a single multi dealer platform.”

Mahesh Bulchandani, CEO and director of FinIQ Europe, added: “We have seen tremendous growth in our SaaS platform. However the traditional installed offering continues to be attractive to customers for a variety of reasons, one of which is the ease of integration with other upstream and downstream systems of the bank. With this project we have now achieved upstream and downstream integration with our SaaS platform, as well as made our SaaS platform multi-asset-class, thus making our SaaS offering a lot more attractive.”

With over CHF218bn of assets under management (as of 30 June 2020), LGT is one of the world’s leading wealth management organisations.

LGT Bank has been present in Asia since 1986 and today is one of the top ten private banks in the region according to recent data published in the Asian Private Banker league table. In Asia, LGT serves high net worth individuals via full fledged booking platforms in Hong Kong and Singapore and wealth management offices in Bangkok, Thailand.
FinIQ specialises in distribution and transaction processing of treasury and wealth management products. FinIQ’s unchallenged leadership is proven by its unmatched market share. The key to FinIQ’s success is in its ability to innovate continuously and deliver functionally rich productivity tools for Structuring, Pricing, Payoff design, Electronic liquidity, Order management, Suitability, Documentation, Collateral, Fixing, Settlement and Accounting for the entire order and trade life cycle.

The FinIQ solution automates instruments ranging from traditional products such as FX spot, options, bonds, stocks, Funds, Insurance, IRS to more sophisticated products such as OTC accumulators, ELN, dual currency investments, target redemptions, and range accruals.`,
    imgUrl: '/showcase-img-3.png',
    link: 'https://www.nomuraconnects.com/focused-thinking-posts/fx-options-embracing-the-potential-of-platforms/?token=tVJkpPC_j3JHs6LBMLY7ACqvX0zoyzpv',
  },
  {
    id: 4,
    topTitle: 'Structured Products',
    info: 'FinIQ EQ Connect has been recognised by SRP as the best issuance platform',
    description: `Liechtenstein-based private bank LGT and software provider FinIQ have worked together to automate and streamline its structured products and derivatives business in Asia. FinIQ and its EQ Connect platform offers connectivity to top market makers in the equity-linked space for products. LGT has subscribed to EQ Connect since 2018. Furthermore, the collaboration is set to further automate pre-trade suitability and order process, trade booking as well as post-trade information flow. LGT aims to achieve seamless integration with the FinIQ EQ Connect platform and its core banking system from Avaloq. In addition, FinIQ's FXD platform offers connectivity to market makers in the FX-linked space for cash FX, options, strategies and also structured products.

In addition, FinIQ’s FXD platform offers connectivity to market makers in the FX-linked space for cash FX, options, strategies and also structured products.

Sven Oesch, regional head of trading and treasury, LGT Private Banking Asia, said: “LGT is committed to leveraging technology in ways which improves efficiency and adds value to our clients. The adoption of EQ Connect back in 2018 helped us to handle the increased volumes in equity linked structured products over the last years. It has also produced positive results in the form of improved customer service and new business opportunities.

“With the success achieved thus far, the automation of price discovery and trading workflows in FXD Connect and further enhancements in EQ Connect will ensure we are able to provide our investment advisors, relationship managers and clients with the best user and customer experience for a wide range of asset classes on a single multi dealer platform.”

Mahesh Bulchandani, CEO and director of FinIQ Europe, added: “We have seen tremendous growth in our SaaS platform. However the traditional installed offering continues to be attractive to customers for a variety of reasons, one of which is the ease of integration with other upstream and downstream systems of the bank. With this project we have now achieved upstream and downstream integration with our SaaS platform, as well as made our SaaS platform multi-asset-class, thus making our SaaS offering a lot more attractive.”

With over CHF218bn of assets under management (as of 30 June 2020), LGT is one of the world’s leading wealth management organisations.

LGT Bank has been present in Asia since 1986 and today is one of the top ten private banks in the region according to recent data published in the Asian Private Banker league table. In Asia, LGT serves high net worth individuals via full fledged booking platforms in Hong Kong and Singapore and wealth management offices in Bangkok, Thailand.
FinIQ specialises in distribution and transaction processing of treasury and wealth management products. FinIQ’s unchallenged leadership is proven by its unmatched market share. The key to FinIQ’s success is in its ability to innovate continuously and deliver functionally rich productivity tools for Structuring, Pricing, Payoff design, Electronic liquidity, Order management, Suitability, Documentation, Collateral, Fixing, Settlement and Accounting for the entire order and trade life cycle.

The FinIQ solution automates instruments ranging from traditional products such as FX spot, options, bonds, stocks, Funds, Insurance, IRS to more sophisticated products such as OTC accumulators, ELN, dual currency investments, target redemptions, and range accruals.`,
    imgUrl: '/showcase-img-4.png',
    link: 'https://www.structuredretailproducts.com/news/76785/exclusive-finiq-sets-mip-world-record-aims-at-us100bn',
  },
  {
    id: 5,
    topTitle: 'Trading APIs',
    info: 'Four of the world’s top 10 banks built their pricing and order management flow using the FinIQ API',
    description: `Liechtenstein-based private bank LGT and software provider FinIQ have worked together to automate and streamline its structured products and derivatives business in Asia. FinIQ and its EQ Connect platform offers connectivity to top market makers in the equity-linked space for products. LGT has subscribed to EQ Connect since 2018. Furthermore, the collaboration is set to further automate pre-trade suitability and order process, trade booking as well as post-trade information flow. LGT aims to achieve seamless integration with the FinIQ EQ Connect platform and its core banking system from Avaloq. In addition, FinIQ's FXD platform offers connectivity to market makers in the FX-linked space for cash FX, options, strategies and also structured products.

In addition, FinIQ’s FXD platform offers connectivity to market makers in the FX-linked space for cash FX, options, strategies and also structured products.

Sven Oesch, regional head of trading and treasury, LGT Private Banking Asia, said: “LGT is committed to leveraging technology in ways which improves efficiency and adds value to our clients. The adoption of EQ Connect back in 2018 helped us to handle the increased volumes in equity linked structured products over the last years. It has also produced positive results in the form of improved customer service and new business opportunities.

“With the success achieved thus far, the automation of price discovery and trading workflows in FXD Connect and further enhancements in EQ Connect will ensure we are able to provide our investment advisors, relationship managers and clients with the best user and customer experience for a wide range of asset classes on a single multi dealer platform.”

Mahesh Bulchandani, CEO and director of FinIQ Europe, added: “We have seen tremendous growth in our SaaS platform. However the traditional installed offering continues to be attractive to customers for a variety of reasons, one of which is the ease of integration with other upstream and downstream systems of the bank. With this project we have now achieved upstream and downstream integration with our SaaS platform, as well as made our SaaS platform multi-asset-class, thus making our SaaS offering a lot more attractive.”

With over CHF218bn of assets under management (as of 30 June 2020), LGT is one of the world’s leading wealth management organisations.

LGT Bank has been present in Asia since 1986 and today is one of the top ten private banks in the region according to recent data published in the Asian Private Banker league table. In Asia, LGT serves high net worth individuals via full fledged booking platforms in Hong Kong and Singapore and wealth management offices in Bangkok, Thailand.
FinIQ specialises in distribution and transaction processing of treasury and wealth management products. FinIQ’s unchallenged leadership is proven by its unmatched market share. The key to FinIQ’s success is in its ability to innovate continuously and deliver functionally rich productivity tools for Structuring, Pricing, Payoff design, Electronic liquidity, Order management, Suitability, Documentation, Collateral, Fixing, Settlement and Accounting for the entire order and trade life cycle.

The FinIQ solution automates instruments ranging from traditional products such as FX spot, options, bonds, stocks, Funds, Insurance, IRS to more sophisticated products such as OTC accumulators, ELN, dual currency investments, target redemptions, and range accruals.`,
    imgUrl: '/showcase-img-5.png',
  },
];

function ShowcaseSection() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="pt-[70px] pb-[50px] sm:pb-[100px] z-[1]">
      <Container>
        {/* section title  */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
          className="mb-[30px]"
        >
          <h3 className="text-[32px] sm:text-[50px] font-bold capitalize text-text-primary">
            Showcase
          </h3>
        </div>

        <ShowcaseList showcaseDatas={showcaseData} />
      </Container>

      <div className="absolute top-0 left-0 w-full max-w-full z-[-1]">
        <img src="/footer-logo.png" />
      </div>
    </section>
  );
}

export default ShowcaseSection;
