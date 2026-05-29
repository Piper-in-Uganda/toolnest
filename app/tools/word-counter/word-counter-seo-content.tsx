import { ToolSeoSection } from '@/components/tools/tool-seo-section'

const features = [
  {
    title: 'Real-time word count',
    description:
      'See your word total update instantly as you type or paste, with no button clicks required.',
  },
  {
    title: 'Character and sentence stats',
    description:
      'Track total characters and sentence count to meet editorial, academic, or platform limits.',
  },
  {
    title: 'Reading time estimate',
    description:
      'Get a quick reading time based on an average pace of 200 words per minute.',
  },
  {
    title: 'Private and browser-based',
    description:
      'Your text stays in your browser. Nothing is uploaded or stored on a server.',
  },
]

const steps = [
  'Paste or type your content into the text box at the top of this page.',
  'Review the live statistics below the editor: words, characters, sentences, and reading time.',
  'Edit your draft until the counts match your goal for blogs, essays, ads, or social posts.',
  'Copy your finished text and use the metrics for publishing, grading, or client deliverables.',
]

const faqs = [
  {
    question: 'How does this word counter calculate words?',
    answer:
      'Words are counted by splitting text on whitespace. Consecutive spaces are treated as a single separator, which matches how most writing platforms count words.',
  },
  {
    question: 'Does the tool count characters with spaces?',
    answer:
      'Yes. The character count includes every character in your text, including letters, numbers, punctuation, and spaces.',
  },
  {
    question: 'How accurate is the reading time estimate?',
    answer:
      'Reading time is an estimate based on 200 words per minute, a common average for adult readers. Actual reading speed may vary by audience and content complexity.',
  },
  {
    question: 'Is my text saved or sent to a server?',
    answer:
      'No. ToolNest runs this word counter entirely in your browser. Your content is not uploaded, logged, or stored by us.',
  },
  {
    question: 'Can I use this word counter for essays and SEO content?',
    answer:
      'Yes. Students, bloggers, marketers, and editors use word counters to meet length requirements for assignments, articles, product pages, and meta descriptions.',
  },
]

export function WordCounterSeoContent() {
  return (
    <div className="mt-12 space-y-10" aria-label="Word counter guide and FAQ">
      <ToolSeoSection id="what-is-word-counter" title="What is a Word Counter?">
        <p>
          A word counter is an online tool that measures how many words, characters, and sentences
          appear in a piece of text. Writers, students, editors, and marketers rely on word counters
          to meet length requirements for blog posts, academic papers, newsletters, ad copy, and
          social media captions.
        </p>
        <p>
          ToolNest&apos;s free word counter updates your results in real time as you type or paste.
          Instead of copying text into a separate document or spreadsheet, you get instant metrics in
          one clean workspace—helping you write with clarity and hit your targets faster.
        </p>
      </ToolSeoSection>

      <ToolSeoSection id="word-counter-features" title="Features">
        <ul className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <h3 className="font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
            </li>
          ))}
        </ul>
      </ToolSeoSection>

      <ToolSeoSection id="how-to-use-word-counter" title="How to Use">
        <ol className="list-decimal space-y-3 pl-5">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </ToolSeoSection>

      <ToolSeoSection id="word-counter-faq" title="Frequently Asked Questions (FAQ)">
        <div className="space-y-6">
          {faqs.map((faq) => (
            <article key={faq.question}>
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{faq.question}</h3>
              <p className="mt-2">{faq.answer}</p>
            </article>
          ))}
        </div>
      </ToolSeoSection>
    </div>
  )
}
