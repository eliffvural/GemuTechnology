import LegalPage from "@/components/legal/LegalPage";
import { legalPages } from "@/data/legalPages";

const page = legalPages["cerez-politikasi"];

export const metadata = {
  title: page.title,
  description: page.description,
};

export default function CookiePage() {
  return <LegalPage page={page} />;
}
