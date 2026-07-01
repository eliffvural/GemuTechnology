import LegalPage from "@/components/legal/LegalPage";
import { legalPages } from "@/data/legalPages";

const page = legalPages["acik-riza-metni"];

export const metadata = {
  title: page.title,
  description: page.description,
};

export default function AcikRizaPage() {
  return <LegalPage page={page} />;
}
