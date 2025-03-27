import './globals.css';
import { Inter, Bebas_Neue } from 'next/font/google';

export const metadata = {
  title: 'Sai Sowrav | Portfolio',
  description:'Full-stack web developer with hands-on experience in the MERN stack. Passionate about building modern, scalable, and user-friendly web applications. Explore my projects and skills',
  keywords:
    'Sai Sowrav, Sai Sowrav Andukuri, web developer portfolio, full-stack developer, React developer, Next.js developer, JavaScript, front-end developer, MERN stack, software engineer, UI/UX developer, modern web development',
  author: 'Sai Sowrav',
  robots: 'index, follow',
  openGraph: {
    title: 'Sai Sowrav | Web Developer Portfolio',
    description:
      'Full-stack developer specializing in React, Next.js, and modern web technologies.',
    url: 'https://saisowrav-portfolio.vercel.app',
    type: 'website',
    images: [
      {
        url: 'https://saisowrav-portfolio.vercel.app/dev.png',
        width: 1200,
        height: 630,
        alt: 'Sai Sowrav Portfolio Preview',
      },
    ],
    locale: 'en_US',
    site_name: 'Sai Sowrav | Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sai_saurav61831', 
    creator: '@sai_saurav61831', 
    title: 'Sai Sowrav | Web Developer Portfolio',
    description: 'Showcasing my web development skills, projects, and experience.',
    image: 'https://saisowrav-portfolio.vercel.app/dev.png',
  },
};

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const bebas = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bebas',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`antialiased ${inter.variable} ${bebas.variable}`}>{children}</body>
    </html>
  );
}
