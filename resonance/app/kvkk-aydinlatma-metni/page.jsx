import LegalPage from "@/components/legal/LegalPage";
import { legalPages } from "@/data/legalPages";

const page = legalPages["kvkk-aydinlatma-metni"];

export const metadata = {
  title: page.title,
  description: page.description,
};

export default function KvkkPage() {
  return <LegalPage page={page} />;
}
