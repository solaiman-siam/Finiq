import React from "react";
import SolutionFullcard from "./SolutionFullcard";
import SolutionHalfcard from "./SolutionHalfcard";
import { Accordion } from "@/components/ui/accordion";

function SolutionList({ solutions }) {
  return (
    <div className="solution-list">
      <div className="w-full">
        <Accordion type="single" collapsible className="flex flex-wrap solution-list-row">
          {solutions.map((solution) => (
            <>
              {solution.layout === "full" ? (
                <SolutionFullcard data={solution} />
              ) : (
                <SolutionHalfcard data={solution} />
              )}
            </>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default SolutionList;
