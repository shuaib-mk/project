import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anxiety & Trauma Therapy in Santa Monica | Dr. Maya Reynolds',
  description:
    'Therapy for anxiety, panic, trauma, burnout, and perfectionism with Dr. Maya Reynolds in Santa Monica and through secure telehealth across California.',
  keywords: [
    'therapist Santa Monica',
    'anxiety therapy Santa Monica',
    'trauma therapy California',
    'burnout therapist',
    'EMDR Santa Monica',
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-paper font-body text-ink antialiased">{children}</body>
    </html>
  );
}
