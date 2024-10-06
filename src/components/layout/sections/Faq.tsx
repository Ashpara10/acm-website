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
    question: "Who can join MU-ACM?",
    answer:
      " Any student of Medi-Caps University regardless of their domain can apply to join the team of MU-ACM Student Chapter during the official recruitment process. People from all over the world can become a part of our community and join our WhatsApp group. Our webinars and online sessions are open for everyone across the globe.",
    value: "item-2",
  },
  {
    question: "What kind of activities does MU-ACM organize?",
    answer: `MU-ACM organizes a variety of activities, including:
- **Workshops**: Hands-on project making sessions to provide a practical experience of the topic under study.
- **Expert Lectures**: Lectures from prominent speakers to dive deep into trendy tech topics. 

- **Webinars**: Creative online sessions through Zoom Premium which can be joined by anyone across the globe.

- **Competitions**: Interesting competitions to promote the love for tech in a fun way and provide a chance to students win amazing prizes.`,
    value: "item-3",
  },
  {
    question: "Do I need to have prior programming experience to join MU-ACM?",
    answer:
      "No, prior programming experience is not required to join MU-ACM. Our goal is to create a welcoming and inclusive environment where students of all levels can learn and grow. We offer resources and support for beginners to help them get started.",
    value: "item-4",
  },
  {
    question: "How can I become a member of MU-ACM?",
    answer:
      "You can connect with us on our social media handles and join our WhatsApp community. To be a part of our team you have to apply in our formal recruitment procedure which generally takes place around August- September every year.",
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
