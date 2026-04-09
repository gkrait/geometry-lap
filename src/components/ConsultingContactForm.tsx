import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

/** FormSubmit AJAX API — deliveries go to the inbox configured for this endpoint. */
const CONTACT_FORM_API = "https://formsubmit.co/ajax/gmatharab1991@gmail.com";

const ConsultingContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(CONTACT_FORM_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          _subject: "Geometry Lap — Contact form",
          _honey: "",
        }),
      });

      const data = (await res.json()) as { success?: boolean | string; message?: string };

      const ok =
        res.ok &&
        (data.success === true || data.success === "true" || data.success === "OK");

      if (!ok) {
        throw new Error(typeof data.message === "string" ? data.message : "Submission failed");
      }

      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent. We will get back to you soon.");
    } catch {
      toast.error("Something went wrong. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  const disabled = submitting || sent;

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="consult-name">Name</Label>
          <Input
            id="consult-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            disabled={disabled}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="consult-email">Email</Label>
          <Input
            id="consult-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            disabled={disabled}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="consult-message">Message</Label>
        <Textarea
          id="consult-message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Briefly describe your project, timeline, and how we can help."
          rows={5}
          required
          disabled={disabled}
          className="min-h-[120px] resize-y"
        />
      </div>
      <Button type="submit" disabled={disabled} className="w-full sm:w-auto">
        {submitting ? "Sending…" : sent ? "Sent" : "Send message"}
      </Button>
      {sent && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Thank you. If you do not hear from us within a few business days, please check your spam
            folder.
          </p>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-auto px-0 text-primary"
            onClick={() => setSent(false)}
          >
            Send another message
          </Button>
        </div>
      )}
    </form>
  );
};

export default ConsultingContactForm;
