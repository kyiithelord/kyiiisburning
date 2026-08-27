/**
 *  @copyright 2024 kyiithelord
 *  @license Apache-2.0
 */

import React from 'react'
/**
 * ButtonPrimary Component
 */
import { ButtonPrimary, ButtonOutline } from './Button'

const focusPoints = [
  'Responsive frontends',
  'Clean API integration',
  'Fast, polished delivery',
]

const Hero = () => {
  return (
    <section id='home' className='pt-28 lg:pt-36 '>

      <div className="container lg:grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-12 lg:gap-10">
          <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm tracking-wide text-zinc-200">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                </span>
                Available for Business
              </div>

              <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-6 lg:mb-8'>
                Building Scalable Modern Websites for the Business
              </h2>

              <p className="max-w-2xl text-zinc-400 text-base sm:text-lg leading-7">
                I design and build clean digital experiences that feel sharp, load fast, and help your product stand out with a modern, confident presence.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 ">
                <ButtonPrimary
                  href='#about'
                  label='Scroll down'
                  icon='arrow_downward'
                />
                <ButtonOutline
                  href='#work'
                  label='See work'
                  icon='north_east'
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {focusPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-full border border-zinc-50/10 bg-zinc-50/[0.03] px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm"
                  >
                    {point}
                  </div>
                ))}
              </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl"></div>
            <div className="absolute right-2 top-0 h-24 w-24 rounded-full bg-amber-300/10 blur-2xl"></div>

            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-50/10 bg-zinc-800/50 p-6 shadow-2xl shadow-sky-950/20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.08),transparent_28%)]"></div>
              <div className="relative grid gap-4">
                <div className="flex items-center justify-between rounded-2xl border border-zinc-50/10 bg-zinc-950/40 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-sky-300/80">Current Focus</p>
                    <p className="mt-2 text-lg font-semibold text-zinc-100">Modern web experiences</p>
                  </div>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-sky-400 text-zinc-950">
                    <span className="material-symbols-rounded" aria-hidden="true">design_services</span>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-zinc-50/10 bg-zinc-950/40 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Style</p>
                    <p className="mt-2 text-sm text-zinc-200">Minimal, bold and responsive</p>
                  </div>
                  <div className="rounded-2xl border border-zinc-50/10 bg-zinc-950/40 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Build</p>
                    <p className="mt-2 text-sm text-zinc-200">React, Tailwind API-first</p>
                  </div>
                  <div className="rounded-2xl border border-zinc-50/10 bg-zinc-950/40 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Result</p>
                    <p className="mt-2 text-sm text-zinc-200">Clear, fast and memorable</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-sky-400/20 bg-sky-400/10 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-sky-300/80">Signature</p>
                      <p className="mt-2 text-zinc-100">
                        Smooth motion, clean hierarchy and thoughtful spacing.
                      </p>
                    </div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-sky-400/20 bg-zinc-950/50">
                      <div className="h-8 w-8 rounded-full border-4 border-sky-400 border-t-transparent animate-spin"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

    </section>
  )
}

export default Hero
