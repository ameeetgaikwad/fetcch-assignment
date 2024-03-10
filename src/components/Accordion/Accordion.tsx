import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Options from "@/components/Addons/Options/Options";
import Advanced from "../Addons/Advanced/Advanced";
function AccordionComponent({ title }: { title: string }) {
  return (
    <>
      <AccordionItem value={title} className="w-[400px]">
        <AccordionTrigger className="text-2xl font-semibold">
          {title}
        </AccordionTrigger>
        <AccordionContent className="">
          {title === "Options" ? <Options /> : <Advanced />}
        </AccordionContent>
      </AccordionItem>
      {/* <AccordionItem value="item-2">
          <AccordionTrigger>Advanced</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem> */}
    </>
  );
}
export default AccordionComponent;
