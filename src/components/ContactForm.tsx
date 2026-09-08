import { useState } from "react";
import { z } from "zod";
import { ArrowRight } from "lucide-react";

import { site } from "@/data/site";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  empresa: z.string().trim().max(120).optional().or(z.literal("")),
  telefone: z.string().trim().min(8, "Informe um telefone válido").max(30),
  email: z.string().trim().email("Informe um e-mail válido").max(255),
  mensagem: z.string().trim().max(1000).optional().or(z.literal("")),
});

type Field = keyof z.infer<typeof schema>;

const fields: { name: Field; label: string; type?: string; full?: boolean }[] = [
  { name: "nome", label: "Nome" },
  { name: "empresa", label: "Empresa" },
  { name: "telefone", label: "Telefone", type: "tel" },
  { name: "email", label: "E-mail", type: "email" },
];

export function ContactForm({ dark = false }: { dark?: boolean }) {
  const [values, setValues] = useState<Record<Field, string>>({
    nome: "",
    empresa: "",
    telefone: "",
    email: "",
    mensagem: "",
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  const inputBase = dark
    ? "w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:border-gold outline-none"
    : "w-full bg-transparent border-b border-navy/20 py-3 text-navy placeholder:text-navy/30 focus:border-gold outline-none";
  const labelBase = `font-mono text-[10px] uppercase tracking-widest ${
    dark ? "text-white/50" : "text-navy/50"
  }`;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const next: Partial<Record<Field, string>> = {};
      for (const issue of result.error.issues) {
        next[issue.path[0] as Field] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const d = result.data;
    const text = [
      "Olá! Vim pelo site da Momesso & Oliveira.",
      `Nome: ${d.nome}`,
      d.empresa ? `Empresa: ${d.empresa}` : null,
      `Telefone: ${d.telefone}`,
      `E-mail: ${d.email}`,
      d.mensagem ? `Mensagem: ${d.mensagem}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid sm:grid-cols-2 gap-6">
        {fields.map((f) => (
          <div key={f.name}>
            <label htmlFor={f.name} className={labelBase}>
              {f.label}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type ?? "text"}
              maxLength={255}
              value={values[f.name]}
              onChange={(e) =>
                setValues((v) => ({ ...v, [f.name]: e.target.value }))
              }
              className={inputBase}
            />
            {errors[f.name] && (
              <p className="mt-1 text-xs text-gold">{errors[f.name]}</p>
            )}
          </div>
        ))}
      </div>
      <div>
        <label htmlFor="mensagem" className={labelBase}>
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={3}
          maxLength={1000}
          value={values.mensagem}
          onChange={(e) =>
            setValues((v) => ({ ...v, mensagem: e.target.value }))
          }
          className={`${inputBase} resize-none`}
        />
      </div>
      <button
        type="submit"
        className={`px-8 py-4 font-mono text-xs uppercase tracking-widest flex items-center gap-3 group transition-all ${
          dark
            ? "bg-gold text-navy hover:bg-white"
            : "bg-navy text-white hover:bg-gold"
        }`}
      >
        Enviar mensagem
        <ArrowRight
          size={16}
          className="group-hover:translate-x-2 transition-transform"
        />
      </button>
      <p className={`text-xs ${dark ? "text-white/40" : "text-navy/50"}`}>
        Ao enviar, sua mensagem é aberta no WhatsApp da nossa equipe já
        preenchida.
      </p>
    </form>
  );
}
