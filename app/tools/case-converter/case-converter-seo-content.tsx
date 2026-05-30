import { ToolSeoSection } from '@/components/tools/tool-seo-section'

const features = [
  {
    title: 'Seven case formats',
    description:
      'Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, and kebab-case in one view.',
  },
  {
    title: 'Live preview',
    description:
      'Every format updates as you type or paste, so you can compare results without clicking a convert button.',
  },
  {
    title: 'One-click copy',
    description:
      'Copy any converted output to your clipboard for code, headings, URLs, or content drafts.',
  },
  {
    title: 'Browser-only processing',
    description:
      'Your text is not uploaded to a server. All conversions run locally in your browser.',
  },
]

const steps = [
  'Enter or paste your text in the input box at the top of the page.',
  'Review the seven output cards to find the case style you need.',
  'Click Copy on any card to use that result in your editor, CMS, or codebase.',
  'Check character, word, and line counts in the statistics row when planning length limits.',
]

const faqs = [
  {
    question: 'What is a case converter?',
    answer:
      'A case converter changes the capitalization pattern of text. Writers use title and sentence case; developers use camelCase, snake_case, and kebab-case for variables, files, and URLs.',
  },
  {
    question: 'Does this tool preserve punctuation?',
    answer:
      'Yes for uppercase, lowercase, title case, and sentence case—the original punctuation and spacing stay in place. camelCase, snake_case, and kebab-case are built from words in your text, so only letter and number tokens are joined.',
  },
  {
    question: 'What is the difference between Title Case and Sentence case?',
    answer:
      'Title Case capitalizes the first letter of each word. Sentence case capitalizes the first letter of each sentence while keeping the rest of the words lowercase (except proper nouns you type yourself).',
  },
  {
    question: 'When should I use snake_case or kebab-case?',
    answer:
      'snake_case is common in Python and database column names. kebab-case is popular in URLs, CSS classes, and file slugs because hyphens are URL-friendly.',
  },
  {
    question: 'Is my text stored on ToolNest?',
    answer:
      'No. The case converter runs entirely in your browser. We do not save or transmit your input.',
  },
]

export function CaseConverterSeoContent() {
  return (
    <div className="mt-12 space-y-10" aria-label="Case converter guide and FAQ">
      <ToolSeoSection id="what-is-case-converter" title="What is a Case Converter?">
        <p>
          A case converter is an online tool that transforms text between capitalization styles. Instead
          of retyping headings, variable names, or slugs by hand, you paste your source text once and
          copy the format you need.
        </p>
        <p>
          ToolNest&apos;s free case converter is built for writers, marketers, and developers who switch
          between prose-friendly cases (Title Case, Sentence case) and code-friendly cases (camelCase,
          snake_case, kebab-case) throughout the day.
        </p>
      </ToolSeoSection>

      <ToolSeoSection id="case-converter-features" title="Features">
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

      <ToolSeoSection id="how-to-use-case-converter" title="How to Use">
        <ol className="list-decimal space-y-3 pl-5">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </ToolSeoSection>

      <ToolSeoSection id="case-converter-faq" title="Frequently Asked Questions (FAQ)">
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
