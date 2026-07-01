import LegalPage from "@/components/legal/LegalPage";
import { legalPages } from "@/data/legalPages";

const page = legalPages["gizlilik-politikasi"];

export const metadata = {
  title: page.title,
  description: page.description,
};

export default function PrivacyPage() {
  return <LegalPage page={page} />;
}
