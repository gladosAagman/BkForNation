// TARGET PATH: app/plantation-drives/[slug]/ReserveForm.tsx  (new file)
"use client";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

interface ReserveFormProps {
  city: string;
  spotsLeft: number;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  participants: string;
  message: string;
}

const initial: FormState = { name: "", email: "", phone: "", participants: "1", message: "" };

export function ReserveForm({ city, spotsLeft }: ReserveFormProps) {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const isFull = spotsLeft <= 0;

  function validate(values: FormState) {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) e.name = "Please tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = "Enter a valid email address.";
    if (!/^[0-9+\-\s()]{7,15}$/.test(values.phone)) e.phone = "Enter a valid phone number.";
    const p = Number(values.participants);
    if (!p || p < 1) e.participants = "Must be at least 1.";
    else if (p > spotsLeft) e.participants = `Only ${spotsLeft} spots remaining.`;
    return e;
  }

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      // TODO: wire to real reservation API / backend endpoint once available.
      setSubmitted(true);
    }
  }

  function field(key: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-soft text-center">
        <div className="mx-auto h-14 w-14 rounded-full bg-leaf-gradient grid place-items-center text-forest">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-forest">You're in, {form.name.split(" ")[0]}.</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
          We've reserved {form.participants} spot{form.participants !== "1" ? "s" : ""} for the {city} drive. A confirmation
          with directions and what to bring is on its way to {form.email}.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(initial); }}
          className="mt-6 text-sm font-semibold text-forest underline underline-offset-4"
        >
          Reserve another spot
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-soft">
      <h3 className="font-display text-2xl font-bold text-forest">Reserve your spot</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {isFull ? "This drive is full — join the waitlist and we'll notify you of any openings." : `${spotsLeft} spots remaining for ${city}.`}
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-medium">Full name</span>
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

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-medium">Phone</span>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => field("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          {errors.phone && <span className="mt-1 block text-xs text-red-600">{errors.phone}</span>}
        </label>
        <label className="block">
          <span className="text-sm font-medium">Participants</span>
          <input
            type="number"
            min={1}
            value={form.participants}
            onChange={(e) => field("participants", e.target.value)}
            aria-invalid={!!errors.participants}
            className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          {errors.participants && <span className="mt-1 block text-xs text-red-600">{errors.participants}</span>}
        </label>
      </div>

      <label className="block mt-4">
        <span className="text-sm font-medium">Message (optional)</span>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => field("message", e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </label>

      <button
        type="submit"
        className="mt-6 magnetic inline-flex items-center gap-2 rounded-full bg-hero text-white px-6 py-3.5 text-sm font-bold"
      >
        <Send className="h-4 w-4" /> {isFull ? "Join waitlist" : "Confirm reservation"}
      </button>
    </form>
  );
}