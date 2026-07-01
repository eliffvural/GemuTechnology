import LegalPage from "@/components/legal/LegalPage";
import { legalPages } from "@/data/legalPages";

const page = legalPages["hizmet-sartlari"];

export const metadata = {
  title: page.title,
  description: page.description,
};

export default function TermsPage() {
  return <LegalPage page={page} />;
}
