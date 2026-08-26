import { useEffect, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';
import MouseGlow from '../components/MouseGlow';

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h2 className="font-serif text-[30px] leading-[1.2] tracking-[-0.015em] md:text-[38px]">{children}</h2>
);

export default function BlogPostPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-[100dvh]" style={{ background: 'var(--bg-primary)' }}>
      <MouseGlow />
      <Nav />
      <main className="pb-24 pt-28 md:pt-36">
        <article className="container-main">
          <header className="mx-auto max-w-[920px] pb-12 text-center md:pb-16">
            <Link to="/blog" className="text-label mb-6 inline-block" style={{ color: 'var(--accent-green)' }}>Research · Blog</Link>
            <h1 className="font-serif text-[42px] leading-[1.08] tracking-[-0.025em] md:text-[62px] lg:text-[72px]">Beyond Irony: Our Social-Pragmatic Inference Benchmark Accepted to EMNLP 2026</h1>
            <p className="mt-7 text-[14px] font-medium uppercase tracking-[0.08em]" style={{ color: 'var(--text-muted)' }}>By Shiwei Hong · August 26, 2026</p>
          </header>

          <div className="blog-article mx-auto max-w-[780px]">
            <p className="lead">We are excited to announce that our paper, “Benchmarking Social-Pragmatic Inference for Indirect and Playful Chinese Online Discourse,” has been accepted to the Main Conference of EMNLP 2026.</p>
            <p>EMNLP—the Conference on Empirical Methods in Natural Language Processing—is one of the flagship international conferences in natural language processing. This year, the conference received an unprecedented 17,669 submissions, of which 2,719 were accepted to the Main Conference, representing an acceptance rate of 15.4%.</p>
            <p>Our paper asks a deceptively simple question: when a language model recognizes that an online comment is ironic, humorous, or playful, has it actually understood what the comment means?</p>

            <figure className="my-12 md:-mx-20 md:my-16">
              <div className="overflow-hidden rounded-[20px] border bg-white p-3 md:p-6" style={{ borderColor: 'var(--border)' }}>
                <img src="/images/blog/social-pragmatic-benchmark-examples.png" alt="Three representative diagnostic items in the benchmark" className="w-full" />
              </div>
              <figcaption>Representative diagnostic items in our benchmark. Each card shows a reconstructed local context, a target comment, a diagnostic question, and a human-validated gold answer among plausible distractors.</figcaption>
            </figure>

            <SectionHeading>Recognizing irony is not the same as understanding it</SectionHeading>
            <p>Irony, sarcasm, humour, and wordplay are resources that people use to communicate. Identifying one of these devices, however, does not fully recover the socially situated meaning of an utterance.</p>
            <p>A model may recognize that a comment is ironic while misunderstanding whom it targets. It may detect a pun without knowing why the pun fits the event. It may identify a cultural reference while missing whether the commenter is agreeing with, challenging, or playfully outdoing another participant.</p>
            <p>Two examples from our dataset illustrate this distinction.</p>

            <SectionHeading>“Even Toyota’s son is connected to electricity?”</SectionHeading>
            <p>The first example draws on the Chinese historical drama <em>Ming Dynasty 1566</em>, whose dialogue is frequently reused in contemporary political commentary.</p>
            <p>In the original drama, the Emperor often speaks through suspicion, insinuation, and courtly political logic, and his lines have become recognizable templates for joking about conflicts of interest and political loyalty. One such line is:</p>
            <blockquote>“Let heroes investigate heroes; let stout fellows investigate stout fellows.”<span>让英雄去查英雄，让好汉去查好汉。</span></blockquote>
            <p>In another scene, the Emperor reacts to an accusation that threatens to implicate his own political camp by asking:</p>
            <blockquote>“So you mean even my own son is in league with the pirates?”<span>你的意思是，连我的儿子也通倭？</span></blockquote>
            <p>In an online discussion about Akio Toyoda’s claim that electric vehicles represent industrial regression, one answer quotes the first line to describe Toyoda and Elon Musk as interested parties judging one another. Another commenter then replies:</p>
            <blockquote>“So you’re saying, even Toyota’s son is connected to electricity?”<span>你是说，丰田的儿子也通电？</span></blockquote>
            <p>The commenter replaces a single character: “in league with the pirates” (通倭) becomes “connected to electricity” (通电). This substitution transforms opposition to electric vehicles into a mock political loyalty test, as though any connection to electricity constituted betrayal.</p>
            <p>Calling this comment “ironic” or identifying its character substitution captures only part of what is happening. Its meaning also depends on its position in the reply sequence. The commenter recognizes the previous participant’s reference, signals affiliation with it, and then playfully one-ups that participant by answering with a more specific quotation from the same drama.</p>
            <p>To understand the comment, a model must therefore recover not only the linguistic device but also the relationship between the two quotations, the topic of electric vehicles, and the social action performed by the reply.</p>

            <SectionHeading>“The Duck-Deception War”</SectionHeading>
            <p>The second example appeared under news that counterfeit goose legs sold near Tsinghua and Peking Universities were actually made from duck. A commenter summarized the incident in four characters:</p>
            <blockquote>“The Duck-Deception War”<span>鸭骗战争</span></blockquote>
            <p>“Duck-deception” (鸭骗, yāpiàn) is pronounced exactly like “opium” (鸦片, yāpiàn), making the phrase sound like “the Opium War.”</p>
            <p>Yet identifying the homophone is again only the beginning. The universities’ proximity to the Old Summer Palace introduces an additional association with the Second Opium War. The humour emerges from compressing these references into four characters and applying the historical scale of the Opium Wars to an episode of petty food counterfeiting.</p>
            <p>The comment conveys a knowing and lightly derisive stance. A model that merely reports “this is a homophonic pun” has recognized the device, but it has not yet explained why the expression fits this event or what attitude it communicates.</p>

            <SectionHeading>A benchmark of situated interpretation</SectionHeading>
            <p>Existing benchmarks often begin with a predefined category—such as irony, sarcasm, humour, implicature, or a particular rhetorical device—and ask models to identify, classify, or explain it.</p>
            <p>Our benchmark begins elsewhere: with naturally occurring indirect and playful interactions. It asks which socially situated interpretation is supported by the interaction as a whole.</p>
            <p>We constructed 4,735 benchmark items from online discussions collected across Zhihu, Douban, Xiaohongshu, and Tieba. Human annotators examined each interaction and documented five interrelated dimensions of its interpretation:</p>
            <ul>
              <li>the target of the comment;</li>
              <li>the stance expressed toward that target;</li>
              <li>the comment’s communicative function;</li>
              <li>the contextual evidence supporting the interpretation; and</li>
              <li>the linguistic, cultural, or interactional mechanism through which the meaning is produced.</li>
            </ul>
            <p>Language models subsequently generated candidate multiple-choice questions from these human interpretations, and human reviewers examined 6,400 generated questions before the final benchmark was assembled. In our leave-writer-out evaluation, models were tested only on questions written by other models, preventing them from benefiting from their own question-writing patterns.</p>

            <SectionHeading>Context is part of the meaning</SectionHeading>
            <p>Our experiments show that preceding discourse is not merely helpful background. It is often part of the evidence that determines what a comment means.</p>
            <div className="my-9 grid gap-4 sm:grid-cols-3">
              {[['68.70%', 'Full context'], ['29.63%', 'Target comment only'], ['90.8%', 'Human accuracy']].map(([value, label]) => (
                <div key={label} className="rounded-[16px] border bg-white p-5" style={{ borderColor: 'var(--border)' }}>
                  <strong className="font-serif text-[32px] font-normal" style={{ color: 'var(--accent-green)' }}>{value}</strong>
                  <span className="mt-1 block text-[13px] font-medium" style={{ color: 'var(--text-muted)' }}>{label}</span>
                </div>
              ))}
            </div>
            <p>Across the evaluated models, accuracy reached 68.70% when the full interaction context was available. When models received only the target comment, accuracy fell to 29.63%. Because each item contains five options, random guessing would produce an accuracy of 20%.</p>
            <p>The models frequently recognized that a comment was ironic or playful while still selecting the wrong target, stance, contextual evidence, or interpretive mechanism. On a random sample of 300 final benchmark items, human accuracy reached 90.8%, suggesting that the task is difficult for current models without being inherently uninterpretable.</p>

            <SectionHeading>Why Chinese online discourse?</SectionHeading>
            <p>We do not claim that indirectness, irony, or playful language is unique to Chinese. These are cross-linguistic and cross-cultural phenomena.</p>
            <p>Chinese nevertheless provides a particularly demanding empirical setting. Homophones, single-character substitutions, compressed historical references, embedded quotations, and knowledge of particular online communities often preserve crucial interpretive evidence that cannot be assumed to survive translation.</p>
            <p>The broader distinction applies across languages: recognizing a communicative phenomenon and interpreting its specific meaning in context are two different levels of understanding. The benchmark-construction methodology developed in this work can therefore also be applied to other languages and cultural settings.</p>
            <p>We look forward to presenting this work at EMNLP 2026 in Budapest and to continuing the conversation about how language models can move beyond recognizing linguistic forms toward understanding what people are actually doing with language.</p>

            <div className="mt-14 border-t pt-7" style={{ borderColor: 'var(--border-dark)' }}>
              <Link to="/blog" className="text-[14px] font-semibold underline underline-offset-4" style={{ color: 'var(--accent-green)' }}>← Back to all blog posts</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
