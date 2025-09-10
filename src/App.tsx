import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Bird, Drama, ExternalLink, Gamepad2, Github, Mail, Moon, Rocket, Sparkles, Sun, Users } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const projects = [
  {
    name: 'Παντομίμα',
    slug: 'pantomima',
    url: 'https://pantomima.app',
    description: 'Το απόλυτο party game για παρέες! Με πολλές κατηγορίες, ντουντούνισμα και παιδική έκδοση.',
    tags: ['Party', 'Charades', 'Kids'],
    icon: <Drama className="w-5 h-5" aria-hidden />,
  },
  {
    name: 'Παλερμο',
    slug: 'palermo',
    url: 'https://playpalermo.gr',
    description: 'Κλασικό παιχνίδι με ρόλους, μυστικές ψηφοφορίες, ένταση μέχρι το τέλος και αφηγητή.',
    tags: ['Social Deduction', 'Classic'],
    icon: <Users className="w-5 h-5" aria-hidden />,
  },
];

const Feature = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-start gap-3"
  >
    <div className="p-2 rounded-2xl bg-primary/10 text-primary">{icon}</div>
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-muted-foreground">{text}</p>
    </div>
  </motion.div>
);

export default function GameNestLanding() {
  const [dark, setDark] = useState<boolean>(localStorage.getItem('gamenest-theme') === 'dark');

  useEffect(() => {
    const saved = localStorage.getItem('gamenest-theme');
    if (saved) setDark(saved === 'dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('gamenest-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 font-bold text-xl">
              <span className="relative inline-flex items-center justify-center">
                <span className="absolute -inset-1 bg-primary/20 blur-xl rounded-full" aria-hidden />
                <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-2xl bg-primary text-primary-foreground">
                  <Bird className="w-5 h-5" aria-hidden />
                </span>
              </span>
              GameNest
            </a>

            <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-foreground">
                Σχετικά
              </a>
              <a href="#projects" className="hover:text-foreground">
                Εφαρμογές
              </a>
              <a href="#contact" className="hover:text-foreground">
                Επικοινωνία
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <Button
                className="cursor-pointer"
                variant="ghost"
                size="icon"
                aria-label="Εναλλαγή θέματος"
                onClick={() => setDark(!dark)}
              >
                {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button asChild>
                <a href="#projects" className="font-semibold">
                  Δες τα παιχνίδια
                </a>
              </Button>
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
          </div>
          <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground mb-4">
                <Sparkles className="w-4 h-4" />
                Φτιάχνουμε παιχνίδια για να φέρνουμε τους ανθρώπους πιο κοντά
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Καλώς ήρθες στη <span className="text-primary">GameNest</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Μια φωλιά (nest) γεμάτη παιχνίδια και εμπειρίες για παρέες, σχεδιασμένα από ανθρώπους που αγαπούν τα
                party games.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#projects">Δες τις εφαρμογές</a>
                </Button>
              </div>
              {/* <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                <Badge variant="secondary" className="px-3 py-1">
                  Web Ready
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Χωρίς εγκατάσταση
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Γρήγορες
                </Badge>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative rounded-3xl border bg-card p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="col-span-2">
                    <CardContent className="p-5 flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                        <Gamepad2 className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold">Party-first σχεδιασμός</p>
                        <p className="text-sm text-muted-foreground">Γρήγορη εκμάθηση, γέλιο στο λεπτό.</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="col-span-2">
                    <CardContent className="p-5 flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold">Για μικρές & μεγάλες παρέες</p>
                        <p className="text-sm text-muted-foreground">Κλίμακα 4–20+ ατόμων.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-4 py-16" id="about">
          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              icon={<Rocket className="w-5 h-5" />}
              title="Γρήγορο launch"
              text="Μικρές, καλοδουλεμένες κυκλοφορίες που βελτιώνονται συνεχώς."
            />
            <Feature
              icon={<Gamepad2 className="w-5 h-5" />}
              title="Gameplay"
              text="Σχεδιάζουμε με προτεραιότητα την εμπειρία της παρέας."
            />
            <Feature
              icon={<Sparkles className="w-5 h-5" />}
              title="Καθαρός σχεδιασμός"
              text="Μινιμαλιστικά UI, ελληνικά κείμενα και εύκολα στη χρήση."
            />
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 pb-8" id="projects">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Οι εφαρμογές μας</h2>
              <p className="text-muted-foreground">Ζωντανά και υπό ανάπτυξη projects της GameNest.</p>
            </div>
            <Badge className="h-7" variant="secondary">
              + ΚΑΙ ΑΛΛΑ ΣΥΝΤΟΜΑ
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <motion.a
                key={p.slug}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-primary">
                        {p.icon}
                        <span className="font-semibold">{p.name}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition" />
                    </div>
                    <p className="mt-2 text-muted-foreground">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Badge key={t} variant="outline">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="rounded-3xl border bg-card overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold">Έχεις ιδέα για παιχνίδι; Φτιάξ’ το μαζί μας.</h3>
                <p className="mt-2 text-muted-foreground">
                  Αναλαμβάνουμε design, ανάπτυξη και λανσάρισμα. Από prototype μέχρι παραγωγή.
                </p>
                <div className="mt-6 flex gap-3">
                  <Button asChild>
                    <a href="#contact">Ζήτα προσφορά</a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="mailto:hello@gamenest.gr">Γράψε μας</a>
                  </Button>
                </div>
              </div>
              <div className="p-8 md:p-10 bg-primary/5 flex items-center">
                <div className="space-y-4">
                  <Feature
                    icon={<Users className="w-5 h-5" />}
                    title="Co-creation"
                    text="Συνεργαζόμαστε με creators και κοινότητες για σύλληψη/δοκιμές."
                  />
                  <Feature
                    icon={<Rocket className="w-5 h-5" />}
                    title="Live Ops"
                    text="Συνεχής βελτίωση, events, νέες κατηγορίες, analytics."
                  />
                  <Feature
                    icon={<Sparkles className="w-5 h-5" />}
                    title="Branding & Launch"
                    text="Όλα όσα χρειάζονται για ωραία, καθαρή παρουσία."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="max-w-6xl mx-auto px-4 pb-24" id="contact">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold">Επικοινωνία</h3>
              <p className="mt-2 text-muted-foreground">
                Στείλε μας ένα email στο{' '}
                <a className="underline" href="mailto:hello@gamenest.gr">
                  hello@gamenest.gr
                </a>{' '}
                ή τη φόρμα δίπλα. Θα απαντήσουμε σύντομα.
              </p>

              <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                <a className="inline-flex items-center gap-2 hover:text-foreground" href="mailto:hello@gamenest.gr">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a
                  className="inline-flex items-center gap-2 hover:text-foreground"
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div>
                    <label className="text-sm" htmlFor="name">
                      Όνομα
                    </label>
                    <input
                      id="name"
                      className="mt-1 w-full rounded-xl border bg-background px-3 py-2"
                      placeholder="Πώς να σε φωνάζουμε;"
                    />
                  </div>
                  <div>
                    <label className="text-sm" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="mt-1 w-full rounded-xl border bg-background px-3 py-2"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm" htmlFor="message">
                      Μήνυμα
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 w-full rounded-xl border bg-background px-3 py-2"
                      placeholder="Πες μας λίγα λόγια…"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Αποστολή
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Η φόρμα είναι demo. Συνδέστε την εύκολα με ένα serverless endpoint.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
        <footer className="border-t">
          <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Bird className="w-4 h-4" />
              <span>© {new Date().getFullYear()} GameNest</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#about" className="hover:text-foreground">
                Σχετικά
              </a>
              <a href="#projects" className="hover:text-foreground">
                Εφαρμογές
              </a>
              <a href="#contact" className="hover:text-foreground">
                Επικοινωνία
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
