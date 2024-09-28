import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { remark } from "remark";
import html from "remark-html";
interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Who can join MUACM?",
    answer:
      "MUACM is open to all students from Medicaps University, regardless of their major or programming experience. We welcome students of all levels, from beginners to experienced programmers.",
    value: "item-2",
  },
  {
    question: "What kind of activities does MUACM organize?",
    answer: `MUACM organizes a variety of activities, including:
- **Workshops and Hackathons**: These events provide hands-on experience and opportunities to learn new technologies.
- **Coding Competitions**: These competitions test your programming skills and offer a chance to win prizes.
- **Guest Lectures**: We invite industry experts to share their insights and experiences.
- **Networking Events**: These events help you connect with other tech enthusiasts and potential employers.`,
    value: "item-3",
  },
  {
    question: "Do I need to have prior programming experience to join MUACM?",
    answer:
      "No, prior programming experience is not required to join MUACM. Our goal is to create a welcoming and inclusive environment where students of all levels can learn and grow. We offer resources and support for beginners to help them get started.",
    value: "item-4",
  },
  {
    question: "How can I become a member of MUACM?",
    answer:
      "To become a member of MUACM, simply fill out the membership form on our website or contact us directly. We will provide you with more information about our activities and how to get involved.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(async ({ question, answer, value }) => {
          const processedContent = await remark().use(html).process(answer);
          const contentHtml = processedContent.toString();
          return (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>

              <AccordionContent>
                <div
                  className="prose dark:prose-invert leading-snug"
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
};
