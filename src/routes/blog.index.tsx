import { createFileRoute, Link } from "@tanstack/react-router";

import { posts, categories } from "@/data/blog";
import { site } from "@/data/site";
import { CtaBand } from "@/components/CtaBand";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog contábil | Momesso & Oliveira" },
      {
        name: "description",
        content:
          "Artigos sobre Simples Nacional, Lucro Presumido, Reforma Tributária, certificado digital, abertura de empresas e departamento pessoal, escritos por contadores.",
      },
      { property: "og:title", content: "Blog contábil | Momesso & Oliveira" },
      {
        property: "og:description",
        content:
          "Conteúdo prático sobre tributos, obrigações e gestão para empresários do ABC Paulista.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${site.url}/blog` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/blog` }],
  }),
});

function BlogPage() {
  return (
    <div>
      <section className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-6 block">
            [ Blog ]
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[0.95] max-w-3xl mb-8">
            Conteúdo contábil para quem{" "}
            <span className="italic text-gold">decide</span>.
          </h1>
          <div className="flex flex-wrap gap-3">
            {categories.map((c) => (
              <span
                key={c}
                className="font-mono text-[10px] uppercase tracking-widest border border-navy/15 px-3 py-2 text-navy/60"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-px bg-navy/10 border border-navy/10">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="bg-paper p-8 group hover:bg-navy hover:text-white transition-colors duration-500"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-10">
                  {p.category}
                </span>
                <h2 className="text-xl font-display font-bold mb-3 leading-snug">
                  {p.title}
                </h2>
                <p className="text-sm text-navy/60 group-hover:text-white/60 leading-relaxed mb-6">
                  {p.excerpt}
                </p>
                <span className="font-mono text-[10px] uppercase tracking-widest text-navy/40 group-hover:text-white/40">
                  {p.readingTime} de leitura
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
