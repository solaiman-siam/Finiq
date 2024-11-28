import Container from '../Container';
import SolutionList from './components/SolutionList';

const solutionData = [
  {
    id: 1,
    topTitle:
      'FLOW & TRANCHE PRODUCTS, BEST EXECUTION, SOLVERS, TERM SHEETS, NOTIFICATIONS, POST-TRADE DATA',
    title: 'Structured Product Multi-Issuer Platform',
    description:
      'For private bankers, relationship managers, direct to client, investment advisors, structuring desk & middle office',
    imgUrl: 'https://i.ibb.co.com/MVmk7xN/Screenshot-1.png',
    layout: 'half',
    isReversed: false,
    accordionText: `The structured products industry largely follows open architecture pricing, where products are priced from a panel of multiple liquidity providers, which may also include distributing bank's own capital markets desk. FinIQ automates a wide variety of structured product payoffs along with a choice of wrappers including notes, OTC, SI, ELI or SD. Powered by a panel of 25 leading banks, it reduces the time taken for price discovery, order placement, execution, document exchange, and post-trade MTM update. Besides achieving the best execution, the operational risks are also greatly reduced, as over 95% of the communication between RMs and dealers, distributing parties, and liquidity providers is all done electronically. The system capability further includes API which can power direct-to-client trading apps.`,
  },
  {
    id: 2,
    topTitle:
      'TRADEABLE QUOTES, BEST EXECUTION, NOTIFICATIONS, SALES-TRADER WORKFLOW, SCHEDULES',
    title: 'FX Derivatives Multi-Dealer Platform',
    description:
      'For private bankers, relationship managers, investment advisors, structuring desk & middle office',
    imgUrl: 'https://i.ibb.co.com/BChkZJS/Screenshot-2.png',
    layout: 'half',
    isReversed: false,
    accordionText:
      'FX Derivatives quotes are linked to real-time spot prices. In this case, the best execution on behalf of the client becomes very challenging, unless it is done via an electronic platform. FinIQ is a leader in multi-dealer FX derivatives automation, enabling banks to achieve an effective best execution by simultaneously sourcing quotes from a large panel of liquidity-providing banks. The payoffs include vanilla, barrier, digital, strategies, and structures including target redemption, pivot, and accumulator forwards. The system further allows email notifications, booking of trades with accurate barrier and exercise fixing schedules, generation of term sheets, and What-if analysis of the payoff, among many other features. The sales desk margin charged to the client is priced by the FinIQ spread calculation engine. Various pre-trade checks and suitability rules can also be configured to ensure safe user inputs.',
  },
  {
    id: 3,
    topTitle:
      'INDICATIVE & FIRM PRICE, SUITABILITY, EXECUTION VIA VENUES, IPO & SECONDARY, CUSTODIAN LINKS',
    title: 'Bonds Order & Execution',
    description:
      'For private bankers, retail bankers, direct to client, bond desk & operations',
    imgUrl: 'https://i.ibb.co.com/tCPJXLF/Screenshot-3.png',
    layout: 'full',
    isReversed: false,
    accordionText: `ixed income securities distribution involves multiple variations, and the actual workflow differs from case to case. Client-provided price quotes are largely indicative, and the order execution is at the dealing desk's discretion. The FinIQ catalog lists thousands of bonds. The user journey starts with the use of FinIQ workbench which comes with a smart search based on a variety of filters, followed by pre-trade compliance and suitability checks. The spread calculation engine suggests the most appropriate spread which can be changed by the user. Orders placed are either executed one by one or in aggregation. Execution can be electronically performed from various venues for FIX connections and APIs, or it can be manually marked. Contract notes, order status monitoring, aggregate positions, IPO allocation, coupon calculations and entitlements, issuer, and other limits, and many such functions are also automated besides pricing and dealing.`,
  },
  {
    id: 4,
    topTitle:
      'MARKET & LIMIT, SUITABILITY, EXCHANGES ROUTING, EXECUTION, BROKERAGE, CUSTODIAN LINKS, CHARTING & ADVISORY',
    title: 'Equities Order & Execution',
    description:
      'For private bankers, retail bankers, direct to client, equities desk & operations',
    imgUrl: 'https://i.ibb.co.com/QcyJ1GJ/Screenshot-4.png',
    layout: 'full',
    isReversed: true,
    accordionText: `FinIQ's Equities Order Management functionality is suitable for both brokerage and wealth management businesses. The system allows direct execution of cash equities as well as other listed products such as ETF, futures and options, via leading venues. This is implemented using the industry standard protocols including the FIX protocol. Market data, news, corporate reports, announcements, historical charts, and various such valuable contents are available via the same portal. A consolidated view of a client portfolio, holdings, P/L, corporate action entitlements, cashflows, margin, trade history, and order status helps both clients and their advisors in faster decision-making. Orders can be placed one by one or in bulk. Besides the standard FinIQ WebApp, the entire functionality is exposed via FinIQ's mobile apps as well as APIs which then can power the in-house developed apps.`,
  },
  {
    id: 5,
    topTitle:
      'FUNDS UNIVERSE, NAV, FACT SHEETS, SUITABILITY, ORDER & ALLOCATION WORKFLOW, CHARGES, CUSTODIAN LINKS',
    title: 'Mutual Funds Order & Execution',
    description:
      'For private bankers, retail bankers, direct to client, mutual funds product teams & operations',
    imgUrl: 'https://i.ibb.co.com/H2FW8FR/Screenshot-5.png',
    layout: 'half',
    isReversed: false,
    accordionText:
      'Mutual Funds or Unit Trust investments automation is based on subscription-based workflow. FinIQ digitalizes the process of client subscriptions via its native UI or UI built using FinIQ API. Various funds are listed in a user-friendly catalog with various searching and filtering options. The fund fact sheet, historical NAV table, and fees & charges are clearly laid out. The order-taking process goes first through suitability and other pre-trade validations. The orders are then routed to the fund house via electronic API-based links. Upon successful allocations, client holdings are updated, and contract notes are generated. Various post-trade functions such as custodian reconciliation, redemptions, corporate actions, transfers, pledging as collateral, and fund switch are also fully automated. Financing of funds can be using all cash or Lombard-based financing. Monthly or periodic plans can be set as standing instructions, and the system automatically generates the orders thereafter.',
  },
  {
    id: 6,
    topTitle:
      'RFQ, RFS, SINGLE-DEALER, MULTI-DEALER, CLICK & TRADE, POST TRADE, SETTLEMENTS',
    title: 'Foreign Exchange Electronic Dealing',
    description:
      'For branches, trade finance, remittance, wealth RMs, FX desk & back office',
    imgUrl: 'https://i.ibb.co.com/svM3Qc0/Screenshot-6.png',
    layout: 'half',
    isReversed: false,
    accordionText: `FinIQ's eFX or Electronic Dealing module is suitable for both internally hedged trades as well as third-party hedged trades. In the internal pricing model, FinIQ uses bank treasury desk-sourced quotes blended with various margins. In the external pricing model, FinIQ FIX-protocol-based multi-dealer liquidity links facilitate pricing and dealing helping the bank with true best execution. The spreading engine allows a combination of over ten different parameters to ascertain the most appropriate sales spread. The range of pre- and post-trade checks including credit limits and cash availability can be configured based on the business segment, user persona, and much more. Post-trade actions such as rollover, rollback, closeout, cancel, amend, and take up as well as internal GL accounting entries and external SWIFT payments are also automated. Instruments supported include spot, forward, swap, forward-forward, NDF, NDS, precious metals, MM, and limit orders. Mobile apps and APIs are provided. FinIQ also provides trade finance and remittance workflow functionality from an FX booking point of view.`,
  },
  {
    id: 7,
    topTitle:
      'LIVE QUOTES, TREASURY OR MULTI-DEALER PRICING, CLICK & TRADE, FIXING EXERCISE, MTM, ROLLOVER',
    title: 'Dual Currency Investments Dealing',
    description:
      'For private bankers, wealth RM, direct to client, treasury sales & options desk',
    imgUrl: 'https://i.ibb.co.com/x7bBrGp/Screenshot-7.png',
    layout: 'full',
    isReversed: false,
    accordionText: `Dual Currency Investments are extremely popular in the retail and private wealth segments. FinIQ automates sales pricing of these trades with various back-solve targets. Volatility surface can be fed by the options desk or ready-made premium pricing can be sourced from FinIQ's FIX protocol-based multi-dealer liquidity links. MM deposit component is separated by booking independently with the bank's treasury team, where the FX option component can either be retained in-house or hedged externally. The system does indicative and final term sheets, email notifications, mark-to-market, final fixing, exercise delivery, and all the post-trade actions in an equally automated way. Traders can publish indicative pricing grids for reference. Rollovers can be done by simply clicking an expired or exercised trade. Ready-to-mobile apps are provided. APIs are also provided allowing the banks to build their own GUI.`,
  },
  {
    id: 8,
    topTitle:
      'PRODUCT LISTING, APPLICATION FORM CAPTURE, UNDERWRITER LINK, POLICY ISSUANCE, RIDERS, SURRENDER VALUE, STATEMENT',
    title: 'Insurance Order & Booking',
    description:
      'For branch bankers, operations, RMs & bancassurance product team',
    imgUrl: 'https://i.ibb.co.com/zZN4HtL/Screenshot-8.png',
    layout: 'full',
    isReversed: true,
    accordionText: `Insurance policies tend to be very diverse. The FinIQ UCP toolkit allows the modeling of different investment products based on insurance coverage and across multiple underwriters. The entire application process of verification, sending it to an insurance company, receiving feedback, and issuing the policy is all done via an entirely user-configurable workflow. Various add-on riders, policy surrender value, statement generation, and much more are automated besides the main order workflow. All functionality is exposed via API and banks can build their own apps powered by these APIs.`,
  },

  {
    id: 9,
    topTitle:
      'PAYOFF SETUP, FRONT & BACK SOLVE, API/EMAIL/FIX BASED QUOTE REQUESTS, DOCUMENT EXCHANGE, ORDER EXECUTION',
    title: 'Sellside to Buyside Orchestrator',
    description:
      'For structuring desk, trading desk, sales desk & relationship managers',
    imgUrl: 'https://i.ibb.co.com/9hx8cKF/Screenshot-9.png',
    layout: 'half',
    isReversed: false,
    accordionText:
      'Structured product issuance is a multi-phase, multi-party workflow. The wrappers can be note, swap, OTC, and deposit format-based. Banks often retain the funding component in-house and only hedge the derivative component with outside parties. Banks and distributors can also source the entire structured product package from outside. FinIQ helps sellside banks to help their distributors with such offerings. FinIQ accepts emails, FIX, and API-based requests for quotes and prices them via the internal pricing infrastructure at the sellside bank. Validations, order execution, document generation, ISIN update, and final trade capture are also fully automated. All of this is done using a completely configurable framework of FinIQ called FinIQ UCP.',
  },
  {
    id: 10,
    topTitle:
      'INSTRUMENTS INCLUDING FX, FXD, BONDS, EQD & STRUCTURED PRODUCTS, LIVE QUOTES, BACK-SOLVE, ORDER REQUEST, EXECUTION WORKFLOW',
    title: 'Single Issuer Cross-asset ePricer',
    description:
      'For private bankers, retail wealth, external asset managers, sales desk & product desk',
    imgUrl: 'https://i.ibb.co.com/3zVkNbQ/Screenshot-10.png',
    layout: 'half',
    isReversed: false,
    accordionText: `FinIQ's single issuer ePricer is a hosted WebApp that allows buyside distributors across multiple regions and multiple time zones with the trading of structured products. This involves all major asset classes including equity, forex, rates, and credit-based payoffs. Pricing is instant further enhanced with various back-solve options. Orders can be executed at the same time. Limit orders can also be left for later time execution. The system comes with advisory support which includes popular underlyings, trends of the day, and news and commentary broadcasts. Users can create their personalized portfolios and price them in bulk`,
  },
  {
    id: 11,
    topTitle:
      'DETAILED TRADE CAPTURE, ENRICHMENT & APPROVAL WORKFLOW, DOCUMENTATION, VALUATION, EVENTS, REDEMPTION & MATURITY',
    title: 'Structured Products Booking',
    description:
      'For structuring desk, middle office, back office & compliance team',
    imgUrl: 'https://i.ibb.co.com/bHkZ17j/Screenshot-11.png',
    layout: 'full',
    isReversed: false,
    accordionText: `This module allows the capture of trades done in various electronic platforms and also those that are manually dealt with. The system captures economic parameters, event schedules, pricing & regulatory input, client orders, and other details. The input process can be manual UI entry or trade upload or via API trade capture. The system maintains the trade from inception to redemption. It alerts various users on events respective to their functions. It records daily valuation in terms of mark-to-market and sensitivities. Documentation from the product manufacturer and documentation with the end client are all consolidated in one place. Various timestamps and user actions are audited. Accounting entries and payments can also be posted from this module.`,
  },
  {
    id: 12,
    topTitle:
      'PRODUCT SETUP & TRADE CAPTURE, INSTRUMENTS INCLUDING DEPOSITS, FUNDS, BONDS, SHARES, INSURANCE, CASA & ALTERNATIVE INVESTMENTS, VALUATION, HOLDINGS & STATEMENTS',
    title: 'Retail Investments & Deposits Booking',
    description:
      'For product teams, operations, branches, private bankers, direct to client & compliance team',
    imgUrl: 'https://i.ibb.co.com/dG7pVFR/Screenshot-12.png',
    layout: 'full',
    isReversed: true,
    accordionText: `The retail investments such as bonds, funds, insurance, deposits, notes, shares, and also the loans availed, if any. These investments are booked using the FinIQ Retail Investment Booking module. This module acts as the central repository for various products. Even non-financial assets can also be booked. Such a central trade repository helps with client statements, holdings reports, volume reports, reconciliation, issuer position, custodian position, concentration risk, post-trade events, and various other processes. Trade booking can happen from FinIQ's own order and execution platforms or from other systems. Inputs can be manual or via uploads or APIs.`,
  },
];

function SolutionSection() {
  return (
    <section className="pt-[70px] pb-[100px]">
      <Container>
        {/* section title  */}
        <div className="mb-[30px]">
          <h3
            data-aos="fade-left"
            data-aos-delay="500"
            className="text-[30px] sm:text-[50px] font-bold capitalize text-text-primary"
          >
            Build your own platform
          </h3>
          <p
            data-aos="fade-left"
            data-aos-delay="1000"
            className="text-base sm:text-lg mt-5 sm:w-[776px] leading-[27px]"
          >
            We have engineered a completely configurable range of technical
            modules that allow you to create a solution tailored to you, which
            we can support alongside any other platforms you wish to integrate
            with.
          </p>
        </div>
        <SolutionList solutions={solutionData} />
      </Container>
    </section>
  );
}

export default SolutionSection;
