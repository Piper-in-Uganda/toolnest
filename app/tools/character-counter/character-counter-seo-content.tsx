import { ToolSeoSection } from '@/components/tools/tool-seo-section'

const features = [
  {
    title: 'Detailed character metrics',
    description:
      'See counts with spaces, without spaces, and letters only to match strict editorial or platform limits.',
  },
  {
    title: 'Structure-aware stats',
    description:
      'Track words, sentences, paragraphs, and lines for essays, blog posts, and long-form drafts.',
  },
  {
    title: 'Instant updates',
    description:
      'Every metric refreshes as you type or paste—no submit button required.',
  },
  {
    title: 'Private browser processing',
    description:
      'Your text never leaves your device. ToolNest does not upload or store your content.',
  },
]

const steps = [
  'Paste or type your text into the editor at the top of this page.',
  'Review the live statistics grid for characters, words, sentences, paragraphs, and lines.',
  'Use Copy Text to grab your draft, or Clear to start over with a blank editor.',
  'Adjust your writing until the numbers match your assignment, ad limit, or SEO target.',
]

const faqs = [
  {
    question: 'What is a character counter?',
    answer:
      'A character counter measures how many characters appear in your text. Many platforms—especially social networks and meta fields—limit content by character count rather than word count.',
  },
  {
    question: 'What is the difference between characters with and without spaces?',
    answer:
      'Characters with spaces includes every letter, number, symbol, and space. Characters without spaces excludes spaces, tabs, and line breaks—useful when a limit applies only to visible characters.',
  },
  {
    question: 'How are paragraphs counted?',
    answer:
      'Paragraphs are blocks of text separated by one or more blank lines. A single block without blank lines counts as one paragraph.',
  },
  {
    question: 'How is this different from the Word Counter tool?',
    answer:
      'The Word Counter focuses on words, reading time, and general writing stats. The Character Counter emphasizes character breakdowns (with/without spaces, letters only) plus paragraphs and lines.',
  },
  {
    question: 'Is my text saved on ToolNest servers?',
    answer:
      'No. All counting happens locally in your browser for privacy and speed.',
  },
]

export function CharacterCounterSeoContent() {
  return (
    <div className="mt-12 space-y-10" aria-label="Character counter guide and FAQ">
      <ToolSeoSection id="what-is-character-counter" title="What is a Character Counter?">
        <p>
          A character counter is an online tool that totals how many characters, words, and structural
          units appear in your writing. Unlike a basic word count, it often separates characters with
          spaces, characters without spaces, and letters only—metrics commonly required for tweets,
          meta descriptions, SMS, and form fields.
        </p>
        <p>
          ToolNest&apos;s free character counter gives writers, students, and marketers a single
          dashboard to validate length limits while drafting, so you can publish with confidence.
        </p>
      </ToolSeoSection>

      <ToolSeoSection id="character-counter-features" title="Features">
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

      <ToolSeoSection id="how-to-use-character-counter" title="How to Use">
        <ol className="list-decimal space-y-3 pl-5">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </ToolSeoSection>

      <ToolSeoSection id="character-counter-faq" title="Frequently Asked Questions (FAQ)">
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
