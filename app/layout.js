// app/layout.js
import Footer from '@/components/layout/Footer';
import '../styles/global.scss';
import NavbarWrapper from '@/components/layout/NavbarWrapper';

export const metadata = {
  title: "Pet Shop",
  description: "Details information of Pet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarWrapper />  
        {children}
        <Footer />
      </body>
    </html>
  );
}
