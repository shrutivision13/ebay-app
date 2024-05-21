'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import '../style/table.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation'
import Permission from "@/helper/permission/permission";
import Loader from "@/helper/loader/loader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const router = useRouter()
  useEffect(() => {
    console.log('router :>> ', pathname);
    if (!Permission()?.authToken) {
      router.push('/login')
    } else {
      // if (Permission()?.authToken && pathname === '/login') {
      //   router.push('/dashboard')
      // }
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <Loader />
        {children}
      </body>
    </html>
  );
}
