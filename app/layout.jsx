import "./globals.css";
import Navigator from "@/components/Navigator";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coding",
  description:
    "Upgrade your skills and advance your IT career with our online courses and training programs. Our platform offers practical, hands-on learning for all levels, with courses in software development, cybersecurity, cloud computing, data science, and more. With expert instructors, interactive content, and personalized support, you can stay up-to-date with the latest technologies and thrive in a competitive industry. Start your learning journey today and take your IT career to the next level!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigator />
        {children}
        <Footer />
      </body>
    </html>
  );
}
