import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function SolutionHalfcard({ data }) {
  return (
    <div
      className={`solution-card-wrap  ${
        data.layout === 'full' ? 'w-full' : 'w-full sm:w-1/2'
      }`}
    >
      <div className="bg-white p-2 rounded-[10px] mt-6 min-h-[547px]">
        <AccordionItem value={`item-${data.id}`}>
          <AccordionTrigger className="w-full">
            <div className="w-full text-left">
              <img
                className="object-cover lg:object-contain h-[310px] w-full rounded-[10px]"
                src={data.imgUrl}
                alt={data.title}
              />
              <div className="mt-5 px-5">
                <p className="text-[12px] max-w-[473px] font-bold leading-[18px] text-black no-underline">
                  {data.topTitle}
                </p>
                <h3 className="text-[22px] sm:text-[28px] max-w-[500px] font-bold text-bg-primary mt-[6px] mb-[10px]">
                  {data.title}
                </h3>
                <p className="text-sm font-medium italic text-paraColor">
                  {data.description}
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="mx-[20px] pt-5 mt-5 pb-0 border-t border-[#DCDCDC]">
              <p>{data.accordionText}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </div>
    </div>
  );
}

export default SolutionHalfcard;
