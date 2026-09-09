import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { getPost } from "@/data/blog";
import { site } from "@/data/site";
import { CtaBand } from "@/components/CtaBand";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Artigo não encontrado | Momesso & Oliveira" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.post;
    const url = `${site.url}/blog/${params.slug}`;
    return {
      meta: [
        { title: `${p.title} | Momesso & Oliveira` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.excerpt,
            datePublished: p.date,
            author: { "@type": "Organization", name: site.legalName },
            publisher: { "@type": "Organization", name: site.legalName },
          }),
        },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();

  return (
    <div>
      <article className="pt-20 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/blog"
            className="font-mono text-[10px] uppercase tracking-widest text-navy/40 hover:text-gold animate-reveal"
          >
            Blog
          </Link>
          <span className="mt-6 font-mono text-[10px] uppercase tracking-widest text-gold block animate-reveal-1">
            {post.category} · {post.readingTime}
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-[1.05] animate-reveal-2">
            {post.title}
          </h1>
          <p className="mt-6 text-lg text-navy/70 leading-relaxed animate-reveal-3">
            {post.excerpt}
          </p>

          <div className="mt-12 space-y-10 animate-reveal-4">
            {post.body.map((block, i) => (
              <section key={i}>
                {block.heading && (
                  <h2 className="font-display text-2xl font-bold mb-4">
                    {block.heading}
                  </h2>
                )}
                {block.paragraphs.map((t, j) => (
                  <p key={j} className="text-navy/70 leading-relaxed mb-4">
                    {t}
                  </p>
                ))}
                {block.bullets && (
                  <ul className="mt-4 space-y-3">
                    {block.bullets.map((b) => (
                      <li
                        key={b}
                        className="border-l border-gold/50 pl-4 text-navy/70 leading-relaxed"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </article>

      <CtaBand title="Quer aplicar isso na sua empresa?" />
    </div>
  );
}
