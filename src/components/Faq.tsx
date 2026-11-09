import { frequentlyAskedQuestions } from "@/data/faqs";

const Faq = () => (
  <section className="section-shell" aria-labelledby="faq-heading">
    <div className="site-container">
      <div className="section-heading">
        <span className="section-kicker">Quick Answers</span>
        <h2 id="faq-heading" className="mb-4 text-4xl font-bold md:text-5xl">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
        <div className="section-underline" />
      </div>

      <div className="mx-auto max-w-3xl divide-y divide-border/70">
        {frequentlyAskedQuestions.map((faq) => (
          <details key={faq.question} className="group py-5">
            <summary className="cursor-pointer pr-6 text-lg font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              {faq.question}
            </summary>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
