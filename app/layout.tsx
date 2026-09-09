import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anxiety & Trauma Therapist in Santa Monica | Dr. Maya Reynolds',
  description: 'In-person therapy in Santa Monica and secure telehealth across California for adults navigating anxiety, panic, trauma, burnout, and perfectionism.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
