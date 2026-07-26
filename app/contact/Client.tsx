"use client";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { brand } from "@/data/site";
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin, Youtube, CheckCircle2 } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initial: FormState = { name: "", email: "", subject: "", message: "" };

export default function ContactClient() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormState) {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) e.name = "Please tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = "Enter a valid email address.";
    if (!values.message.trim()) e.message = "Let us know what's on your mind.";
    return e;
  }

  function field(key: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      // TODO: wire to a real contact endpoint / email service once available.
      setSubmitted(true);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Write to us. We answer."
        subtitle="Whether you want to volunteer, partner, or ask a hard question — we respond within 48 hours."
        backgroundImage="/images/campaign-urban.jpg"
      />
      {/* Same -mt-8 overlap rhythm as Home / Drives / Impact / Gallery. */}
      <section className="relative -mt-8 z-10 pb-24">
        <div className="container-nice grid lg:grid-cols-3 gap-8">
          <Reveal className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-glow text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-leaf-gradient grid place-items-center text-forest">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-forest">
                  Thanks, {form.name.split(" ")[0]}.
                </h2>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                  We've received your message and will get back to you at {form.email} within 48 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initial); }}
                  className="mt-6 text-sm font-semibold text-forest underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-glow">
                <h2 className="font-display text-2xl font-bold text-forest">Send us a note</h2>
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm font-medium">Name</span>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => field("name", e.target.value)}
                      aria-invalid={!!errors.name}
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    {errors.name && <span className="mt-1 block text-xs text-red-600">{errors.name}</span>}
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium">Email</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => field("email", e.target.value)}
                      aria-invalid={!!errors.email}
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    {errors.email && <span className="mt-1 block text-xs text-red-600">{errors.email}</span>}
                  </label>
                </div>
                <label className="block mt-4">
                  <span className="text-sm font-medium">Subject</span>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => field("subject", e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
                <label className="block mt-4">
                  <span className="text-sm font-medium">Message</span>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => field("message", e.target.value)}
                    aria-invalid={!!errors.message}
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  {errors.message && <span className="mt-1 block text-xs text-red-600">{errors.message}</span>}
                </label>
                <button
                  type="submit"
                  className="mt-6 magnetic inline-flex items-center gap-2 rounded-full bg-hero text-white px-6 py-3.5 text-sm font-bold"
                >
                  <Send className="h-4 w-4" /> Send message
                </button>
              </form>
            )}
          </Reveal>

          <div className="space-y-4">
            {[
              { Icon: Mail, k: "Email", v: brand.email },
              { Icon: Phone, k: "Phone", v: brand.phone },
              { Icon: MapPin, k: "Office", v: brand.address },
            ].map((b, i) => (
              <Reveal key={b.k} delay={i * 80}>
                <div className="rounded-2xl bg-card border border-border p-6 shadow-soft">
                  <div className="h-10 w-10 rounded-xl bg-leaf-gradient grid place-items-center text-forest">
                    <b.Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-display font-bold text-forest">{b.k}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{b.v}</p>
                </div>
              </Reveal>
            ))}

            {/* Social links */}
            <Reveal delay={240}>
              <div className="rounded-2xl bg-card border border-border p-6 shadow-soft">
                <div className="font-display font-bold text-forest">Follow along</div>
                <div className="mt-4 flex gap-3">
                  {[
                    { Icon: Instagram, href: brand.social.instagram, label: "Instagram" },
                    { Icon: Twitter, href: brand.social.twitter, label: "Twitter" },
                    { Icon: Linkedin, href: brand.social.linkedin, label: "LinkedIn" },
                    { Icon: Youtube, href: brand.social.youtube, label: "YouTube" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="h-10 w-10 rounded-full bg-accent/70 grid place-items-center text-forest hover:bg-forest hover:text-white transition-colors"
                    >
                      <s.Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Map placeholder */}
            <Reveal delay={320}>
              {/* TODO: Replace with a real embedded map (Google Maps / Mapbox) once an API key is available. */}
              <div className="rounded-2xl bg-accent border border-border h-48 grid place-items-center text-center px-6">
                <div>
                  <MapPin className="h-6 w-6 text-forest mx-auto" />
                  <div className="mt-2 text-xs text-muted-foreground">Map integration coming soon</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}