import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
// import { redirect } from 'next/navigation';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Himanshu Gandhi | CIBC Mortgage Advisor',
  description:
    'Himanshu Gandhi, Mobile Mortgage Advisor in Calgary. Specializing in services for newcomers to Canada. Languages: English, Hindi, Punjabi, Urdu.',
  keywords:
    'mortgage advisor, mobile mortgage, CIBC, Calgary, newcomer to Canada, Himanshu Gandhi',
  openGraph: {
    title: 'Himanshu Gandhi | CIBC Mortgage Advisor',
    description:
      'Mobile Mortgage Advisor in Calgary, specializing in services for newcomers to Canada.',
    images: '/profile-placeholder.svg',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Himanshu Gandhi | CIBC Mortgage Advisor',
    description:
      'Mobile Mortgage Advisor in Calgary, specializing in services for newcomers to Canada.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#c41f3e',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //   redirect('https://advisor.cibc.com/himanshu-gandhi');
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
