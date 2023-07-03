import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
      <main className="p-8">
          <section className="space-y-2 text-center">
              <h1 className="w-full text-3xl font-bold">
                  OCaml - Next - Python
              </h1>
              <p>
                  A collaboration project by <br /> Axel Krukziener and Jakob
                  Nunnendorf
              </p>
          </section>
          <section className="py-8">
              <h2 className="text-2xl">Introduction</h2>
              <p>
                  To refine and showcase our development skills, we will create
                  a series of OCaml and Python applications, accessible through
                  a NextJS frontend.
              </p>
          </section>
          <section className="py-8">
              <h2 className="text-2xl">Phase 1: NextJS and JavaScript</h2>
              <p>
                  In this phase Axel will be implementing algorithms using
                  JavaScript because it is easy to learn. Jakob will assist in
                  integrating Axels code into a website such that it is
                  accessible through the web.
              </p>
              <Link href="/week-1">
                  <h3>Week 1 - Pseudocode to Javascript</h3>
              </Link>
          </section>
      </main>
  );
}
