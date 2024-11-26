import Container from "../Container";

function CoreFrameworkPowering() {
  return (
    <div className="w-full h-full bg-bg-secondary py-24">
      <Container>
        <div className="">
          <h3 className="text-4xl text-center  font-bold text-text-primary">
            The Core Frameworks <br></br> Powering FinIQ
          </h3>
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div>
              <div className="rounded-xl overflow-hidden h-[300px] ">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.ibb.co.com/rcTfcVg/finiq1.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col pt-4 gap-3">
                <h3 className="font-bold text-xl text-text-dark">FinIQ UCP</h3>
                <p className="text-sm text-text-dark">
                  The User Configured Products (UCP) framework is a powerful
                  low-code/no-code toolkit designed to create a broad range of
                  financial instruments. It enables seamless configuration of
                  product schemas, graphical inputs, cashflow modeling, and
                  redemption behaviors via FinIQ's FinSPL language. UCP also
                  supports workflow management, processing queues, audits,
                  access controls, document templates, GL accounting, STP
                  integration with risk and core banking systems, and settlement
                  processes—all with almost no coding.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden h-[300px] ">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.ibb.co.com/BZmR8s0/finiq2.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col pt-4 gap-3">
                <h3 className="font-bold text-xl text-text-dark">
                  FinIQ Connect
                </h3>
                <p className="text-sm text-text-dark">
                  The User Configured Products (UCP) framework is a powerful
                  low-code/no-code toolkit designed to create a broad range of
                  financial instruments. It enables seamless configuration of
                  product schemas, graphical inputs, cashflow modeling, and
                  redemption behaviors via FinIQ's FinSPL language. UCP also
                  supports workflow management, processing queues, audits,
                  access controls, document templates, GL accounting, STP
                  integration with risk and core banking systems, and settlement
                  processes—all with almost no coding.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden h-[300px] ">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.ibb.co.com/DfzcQCb/finiq3.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col pt-4 gap-3">
                <h3 className="font-bold text-xl text-text-dark">
                  FinIQ Gateway
                </h3>
                <p className="text-sm text-text-dark">
                  The User Configured Products (UCP) framework is a powerful
                  low-code/no-code toolkit designed to create a broad range of
                  financial instruments. It enables seamless configuration of
                  product schemas, graphical inputs, cashflow modeling, and
                  redemption behaviors via FinIQ's FinSPL language. UCP also
                  supports workflow management, processing queues, audits,
                  access controls, document templates, GL accounting, STP
                  integration with risk and core banking systems, and settlement
                  processes—all with almost no coding.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 p-4 divide-bg-secondary rounded-lg bg-white mt-14 divide-x">
            <div className="flex flex-1 items-center flex-col gap-2">
                <h2 className="text-4xl font-bold text-bg-primary">25</h2>
                <h4 className="text-text-primary">Liguidity Providers</h4>
            </div>
            <div className="flex flex-1 items-center flex-col gap-2">
                <h2 className="text-4xl font-bold text-bg-primary">225,000</h2>
                <h4 className="text-text-primary">RFQs Daily</h4>
            </div>
            <div className="flex flex-1 items-center flex-col gap-2">
                <h2 className="text-4xl font-bold text-bg-primary">$100 Billion</h2>
                <h4 className="text-text-primary">Traded
                </h4>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CoreFrameworkPowering;
