/**
 *  @copyright 2024 kyiithelord
 *  @license Apache-2.0
 */

import React from 'react'

const strengths = [
  'Responsive UI',
  'Backend logic',
  'API integration',
]

const principles = [
  {
    title: 'Clear hierarchy',
    text: 'Make the important path easy to see at a glance.',
  },
  {
    title: 'Calm motion',
    text: 'Use movement only when it helps the interface breathe.',
  },
  {
    title: 'Reliable delivery',
    text: 'Keep the build clean, fast, and easy to maintain.',
  },
]

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-50/10 bg-zinc-800/50 p-7 md:p-10 reveal-up">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_24%)]"></div>
          <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
            <div className="flex flex-col justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.34em] text-sky-300/80">About me</p>
                <h2 className="headline-2 mt-3 max-w-xl">
                  Crafting interfaces that feel clean, focused, and easy to trust.
                </h2>
                <p className="mt-5 max-w-2xl text-zinc-300 md:text-lg leading-7">
                  Welcome! I&apos;m Thet Zin Kyaw, a dedicated Software Developer passionate about building responsive and dynamic web applications that feel polished, useful, and focused.
                  <br />
                  <br />
                  I like keeping things simple, structured, and effective. My work centers on clean hierarchy, smooth functionality, and frontends that stay fast without losing personality.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {strengths.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-50/10 bg-zinc-50/[0.04] px-4 py-2 text-xs uppercase tracking-[0.22em] text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-x-0 top-6 flex justify-center pointer-events-none">
                <span className="select-none text-[6rem] font-black leading-none tracking-[-0.12em] text-white/[0.04] sm:text-[7rem] lg:text-[8rem]">
                  TZK
                </span>
              </div>

              <div className="relative h-full overflow-hidden rounded-[2rem] border border-zinc-50/10 bg-zinc-950/45 p-6 shadow-2xl shadow-black/20">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.32em] text-zinc-500">Design note</p>
                    <p className="mt-2 text-2xl font-semibold text-zinc-100">Simple. Sharp. Reliable.</p>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
                    <span className="material-symbols-rounded" aria-hidden="true">auto_awesome</span>
                  </div>
                </div>

                <div className="mt-8 space-y-6">
                  {principles.map((item, index) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sky-400/20 bg-zinc-900 text-sm font-semibold text-sky-300">
                        0{index + 1}
                      </div>
                      <div className="pb-5 border-b border-zinc-50/10">
                        <h3 className="text-sm font-semibold tracking-wide text-zinc-100">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-zinc-400">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-sky-400/15 bg-gradient-to-r from-sky-400/10 via-sky-400/5 to-transparent px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-sky-300/80">What matters</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    A good interface should feel natural, stay readable, and make the next step obvious.
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-zinc-50/10 pt-4 text-[11px] uppercase tracking-[0.28em] text-zinc-500">
                  <span>UI systems</span>
                  <span>Frontend craft</span>
                  <span>Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
