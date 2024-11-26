import Container from "../Container";
import SolutionList from "./components/SolutionList";

const solutionData = [
  {
    id: 1,
    topTitle:
      "low & Tranche Products, Best Execution, Solvers, Term Sheets, Notifications, Post-Trade Data",
    title: "Structured Product Multi-Issuer Platform",
    description:
      "For private bankers, relationship managers, direct to client, investment advisors, structuring desk & middle office",
    imgUrl: "https://i.ibb.co.com/MVmk7xN/Screenshot-1.png",
    layout: "half",
    isReversed: false,
    accordionText:
      "This module allows the capture of trades done in various electronic platforms and also those that are manually dealt with. The system captures economic parameters, event schedules, pricing & regulatory input, client orders, and other details. The input process can be manual UI entry or trade upload or via API trade capture. The system maintains the trade from inception to redemption. It alerts various users on events respective to their functions. It records daily valuation in terms of mark-to-market and sensitivities. Documentation from the product manufacturer and documentation with the end client are all consolidated in one place. Various timestamps and user actions are audited. Accounting entries and payments can also be posted from this module.",
  },
  {
    id: 2,
    topTitle:
      "Tradeable Quotes, Best Execution, Notifications, Sales-Trader Workflow, Schedules",
    title: "FX Derivatives Multi-Dealer Platform",
    description:
      "For private bankers, relationship managers, investment advisors, structuring desk & middle office",
    imgUrl: "https://i.ibb.co.com/BChkZJS/Screenshot-2.png",
    layout: "half",
    isReversed: false,
    accordionText:
      "This module allows the capture of trades done in various electronic platforms and also those that are manually dealt with. The system captures economic parameters, event schedules, pricing & regulatory input, client orders, and other details. The input process can be manual UI entry or trade upload or via API trade capture. The system maintains the trade from inception to redemption. It alerts various users on events respective to their functions. It records daily valuation in terms of mark-to-market and sensitivities. Documentation from the product manufacturer and documentation with the end client are all consolidated in one place. Various timestamps and user actions are audited. Accounting entries and payments can also be posted from this module.",
  },
  {
    id: 3,
    topTitle:
      "Market & Limit, Suitability, Exchanges Routing, Execution, Brokerage, Custodian Links, Charting & Advisory",
    title: "Equities Order & Execution",
    description:
      "For private bankers, retail bankers, direct to client, equities desk & operations",
    imgUrl: "https://i.ibb.co.com/tCPJXLF/Screenshot-3.png",
    layout: "full",
    isReversed: false,
    accordionText:
      "This module allows the capture of trades done in various electronic platforms and also those that are manually dealt with. The system captures economic parameters, event schedules, pricing & regulatory input, client orders, and other details. The input process can be manual UI entry or trade upload or via API trade capture. The system maintains the trade from inception to redemption. It alerts various users on events respective to their functions. It records daily valuation in terms of mark-to-market and sensitivities. Documentation from the product manufacturer and documentation with the end client are all consolidated in one place. Various timestamps and user actions are audited. Accounting entries and payments can also be posted from this module.",
  },
  {
    id: 4,
    topTitle:
      "Funds Universe, Nav, Fact Sheets, Suitability, Order & Allocation Workflow, Charges, Custodian Links",
    title: "Mutual Funds Order & Execution",
    description:
      "For private bankers, relationship managers, direct to client, investment advisors, structuring desk & middle office",
    imgUrl: "https://i.ibb.co.com/QcyJ1GJ/Screenshot-4.png",
    layout: "full",
    isReversed: true,
    accordionText:
      "This module allows the capture of trades done in various electronic platforms and also those that are manually dealt with. The system captures economic parameters, event schedules, pricing & regulatory input, client orders, and other details. The input process can be manual UI entry or trade upload or via API trade capture. The system maintains the trade from inception to redemption. It alerts various users on events respective to their functions. It records daily valuation in terms of mark-to-market and sensitivities. Documentation from the product manufacturer and documentation with the end client are all consolidated in one place. Various timestamps and user actions are audited. Accounting entries and payments can also be posted from this module.",
  },
  {
    id: 5,
    topTitle:
      "Rfq, Rfs, Single-Dealer, Multi-Dealer, Click & Trade, Post Trade, Settlements",
    title: "Foreign Exchange Electronic Dealing",
    description:
      "For branches, trade finance, remittance, wealth RMs, FX desk & back office",
    imgUrl: "https://i.ibb.co.com/H2FW8FR/Screenshot-5.png",
    layout: "half",
    isReversed: false,
    accordionText:
      "This module allows the capture of trades done in various electronic platforms and also those that are manually dealt with. The system captures economic parameters, event schedules, pricing & regulatory input, client orders, and other details. The input process can be manual UI entry or trade upload or via API trade capture. The system maintains the trade from inception to redemption. It alerts various users on events respective to their functions. It records daily valuation in terms of mark-to-market and sensitivities. Documentation from the product manufacturer and documentation with the end client are all consolidated in one place. Various timestamps and user actions are audited. Accounting entries and payments can also be posted from this module.",
  },
  {
    id: 6,
    topTitle:
      "Live Quotes, Treasury Or Multi-Dealer Pricing, Click & Trade, Fixing Exercise, Mtm, Rollover",
    title: "Dual Currency Investments Dealing",
    description:
      "For private bankers, wealth RM, direct to client, treasury sales & options desk",
    imgUrl: "https://i.ibb.co.com/svM3Qc0/Screenshot-6.png",
    layout: "half",
    isReversed: false,
    accordionText:
      "This module allows the capture of trades done in various electronic platforms and also those that are manually dealt with. The system captures economic parameters, event schedules, pricing & regulatory input, client orders, and other details. The input process can be manual UI entry or trade upload or via API trade capture. The system maintains the trade from inception to redemption. It alerts various users on events respective to their functions. It records daily valuation in terms of mark-to-market and sensitivities. Documentation from the product manufacturer and documentation with the end client are all consolidated in one place. Various timestamps and user actions are audited. Accounting entries and payments can also be posted from this module.",
  },
  {
    id: 7,
    topTitle:
      "Product Listing, Application Form Capture, Underwriter Link, Policy Issuance, Riders, Surrender Value, Statement",
    title: "Insurance Order & Booking",
    description:
      "For branch bankers, operations, RMs & bancassurance product team",
    imgUrl: "https://i.ibb.co.com/x7bBrGp/Screenshot-7.png",
    layout: "full",
    isReversed: false,
    accordionText:
      "This module allows the capture of trades done in various electronic platforms and also those that are manually dealt with. The system captures economic parameters, event schedules, pricing & regulatory input, client orders, and other details. The input process can be manual UI entry or trade upload or via API trade capture. The system maintains the trade from inception to redemption. It alerts various users on events respective to their functions. It records daily valuation in terms of mark-to-market and sensitivities. Documentation from the product manufacturer and documentation with the end client are all consolidated in one place. Various timestamps and user actions are audited. Accounting entries and payments can also be posted from this module.",
  },
  {
    id: 8,
    topTitle:
      "Payoff Setup, Front & Back Solve, Api/Email/Fix Based Quote Requests, Document Exchange, Order Execution",
    title: "Sellside to Buyside Orchestrator",
    description:
      "For structuring desk, trading desk, sales desk & relationship managers",
    imgUrl: "https://i.ibb.co.com/zZN4HtL/Screenshot-8.png",
    layout: "full",
    isReversed: true,
    accordionText:
      "This module allows the capture of trades done in various electronic platforms and also those that are manually dealt with. The system captures economic parameters, event schedules, pricing & regulatory input, client orders, and other details. The input process can be manual UI entry or trade upload or via API trade capture. The system maintains the trade from inception to redemption. It alerts various users on events respective to their functions. It records daily valuation in terms of mark-to-market and sensitivities. Documentation from the product manufacturer and documentation with the end client are all consolidated in one place. Various timestamps and user actions are audited. Accounting entries and payments can also be posted from this module.",
  },

  {
    id: 9,
    topTitle:
      "Market Data Including Spot, Swap, Yield Curve, Correlation & Volatility Surface, Closed Form & Simulation Models, Greeks, Back-Solve",
    title: "Derivatives Pricing Models",
    description:
      "For product teams, risk teams, sales advisors & client relationship managers",
    imgUrl: "https://i.ibb.co.com/9hx8cKF/Screenshot-9.png",
    layout: "half",
    isReversed: false,
    accordionText:
      "This module allows the capture of trades done in various electronic platforms and also those that are manually dealt with. The system captures economic parameters, event schedules, pricing & regulatory input, client orders, and other details. The input process can be manual UI entry or trade upload or via API trade capture. The system maintains the trade from inception to redemption. It alerts various users on events respective to their functions. It records daily valuation in terms of mark-to-market and sensitivities. Documentation from the product manufacturer and documentation with the end client are all consolidated in one place. Various timestamps and user actions are audited. Accounting entries and payments can also be posted from this module.",
  },
  {
    id: 10,
    topTitle:
      "Instruments Including Fx, Fxd, Bonds, Eqd & Structured Products, Live Quotes, Back-Solve, Order Request, Execution Workflow",
    title: "Single Issuer Cross-asset ePricer",
    description:
      "For private bankers, retail wealth, external asset managers, sales desk & product desk",
    imgUrl: "https://i.ibb.co.com/3zVkNbQ/Screenshot-10.png",
    layout: "half",
    isReversed: false,
    accordionText:
      "This module allows the capture of trades done in various electronic platforms and also those that are manually dealt with. The system captures economic parameters, event schedules, pricing & regulatory input, client orders, and other details. The input process can be manual UI entry or trade upload or via API trade capture. The system maintains the trade from inception to redemption. It alerts various users on events respective to their functions. It records daily valuation in terms of mark-to-market and sensitivities. Documentation from the product manufacturer and documentation with the end client are all consolidated in one place. Various timestamps and user actions are audited. Accounting entries and payments can also be posted from this module.",
  },
  {
    id: 11,
    topTitle:
      "Detailed Trade Capture, Enrichment & Approval Workflow, Documentation, Valuation, Events, Redemption & Maturity",
    title: "Structured Products Booking",
    description:
      "For structuring desk, middle office, back office & compliance team",
    imgUrl: "https://i.ibb.co.com/bHkZ17j/Screenshot-11.png",
    layout: "full",
    isReversed: false,
    accordionText:
      "This module allows the capture of trades done in various electronic platforms and also those that are manually dealt with. The system captures economic parameters, event schedules, pricing & regulatory input, client orders, and other details. The input process can be manual UI entry or trade upload or via API trade capture. The system maintains the trade from inception to redemption. It alerts various users on events respective to their functions. It records daily valuation in terms of mark-to-market and sensitivities. Documentation from the product manufacturer and documentation with the end client are all consolidated in one place. Various timestamps and user actions are audited. Accounting entries and payments can also be posted from this module.",
  },
  {
    id: 12,
    topTitle:
      "Detailed Trade Capture, Enrichment & Approval Workflow, Documentation, Valuation, Events, Redemption & Maturity",
    title: "Structured Products Booking",
    description:
      "For structuring desk, middle office, back office & compliance team",
    imgUrl: "https://i.ibb.co.com/dG7pVFR/Screenshot-12.png",
    layout: "full",
    isReversed: true,
    accordionText:
      "This module allows the capture of trades done in various electronic platforms and also those that are manually dealt with. The system captures economic parameters, event schedules, pricing & regulatory input, client orders, and other details. The input process can be manual UI entry or trade upload or via API trade capture. The system maintains the trade from inception to redemption. It alerts various users on events respective to their functions. It records daily valuation in terms of mark-to-market and sensitivities. Documentation from the product manufacturer and documentation with the end client are all consolidated in one place. Various timestamps and user actions are audited. Accounting entries and payments can also be posted from this module.",
  },
];

function SolutionSection() {
  return (
    <section className="pt-[70px] pb-[100px]">
      <Container>
        {/* section title  */}
        <div className="mb-[30px]">
            <h3 className="text-[50px] font-bold capitalize text-text-primary">Build your own platform</h3>
            <p className="text-[18px] mt-5 w-[776px] leading-[27px]">We have engineered a completely configurable range of technical modules that allow you to create a solution tailored to you, which we can support alongside any other platforms you wish to integrate with.</p>
        </div>
        <SolutionList solutions={solutionData} />
      </Container>
    </section>
  );
}

export default SolutionSection;
