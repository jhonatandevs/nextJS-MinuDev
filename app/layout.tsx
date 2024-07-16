import { montserrat } from './ui/fonts';
import './ui/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <h1>HOLA MUNDO</h1>
        {children}
        <footer className="pt-20 justify-center items-center bg-slate-900 text-white">FOOTER PAGE</footer>
        </body>
    </html>
  );
}
