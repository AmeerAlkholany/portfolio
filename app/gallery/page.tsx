import { Metadata } from "next";
import Gallery from "@/app/components/gallery";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Gallery | Ameer KH",
  description: "Screenshots of websites and systems I have built",
};

export default function GalleryPage() {
  return (
    <>
      <Gallery />
      <Footer />
    </>
  );
}
