import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';
import angleDown from '../../../assets/images/angle-down.svg';

function SolutionFullcard({ data }) {
  const [isCollapsed, setIscollapsed] = useState(false);

  return (
    <div
      className={`solution-card-wrap mt-6 ${
        data.layout === 'full' ? 'w-full' : 'w-1/2'
      }`}
    >
      <div
        data-aos="fade-left"
        className="card-full py-5 px-[30px] bg-white rounded-[10px] group"
      >
        <div>
          <AccordionItem value={`item-${data.id}`}>
            <AccordionTrigger
              className={`text-left !flex flex-col lg:flex-row items-center justify-between ${
                data.isReversed
                  ? 'lg:flex-row-reverse  pl-[100px]'
                  : 'pr-[100px]'
              }`}
              onClick={() => setIscollapsed(!isCollapsed)}
            >
              <div className="max-w-[800px] order-2 sm:order-1">
                <p className="text-[12px] font-bold leading-[18px] text-black no-underline">
                  {data.topTitle}
                </p>
                <h3 className="text-[22px] sm:text-[28px] font-bold text-bg-primary mt-[6px] mb-[10px]">
                  {data.title}
                </h3>
                <p className="text-sm font-medium italic text-paraColor">
                  {data.description}
                </p>
                <div className="mt-5">
                  <img
                    className={`w-[18px] h-[12px] duration-200 ease-in-out ${
                      isCollapsed ? 'rotate-[180deg]' : ''
                    }`}
                    src={angleDown}
                    alt="angleDown"
                  />
                </div>
              </div>
              <div className="order-1 sm:order-2 overflow-hidden">
                <img
                  className="w-[207px] h-[170px] object-cover lg:object-contain group-hover:scale-105 duration-300"
                  src={data.imgUrl}
                  alt={data.title}
                />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pt-5 mt-5 border-t border-[#DCDCDC]">
                <p>{data.accordionText}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </div>
      </div>
    </div>
  );
}

export default SolutionFullcard;
