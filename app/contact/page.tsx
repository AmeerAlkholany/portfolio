import { Metadata } from "next";
import Contact from "@/app/components/contact";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Contact | Ameer KH",
  description: "Get in touch with Ameer Al.kholany",
};

export default function ContactPage() {
  return (
    <>
      <Contact />
      <Footer />
    </>
  );
}
