import PageShell, { PageHeader } from "../../components/PageShell";
import JourneyTimeline from "../../components/JourneyTimeline";

export const metadata = { title: "The UW Journey | Iva Dhooria" };

export default function JourneyPage() {
  return (
    <PageShell>
      <PageHeader
        title="The UW Journey"
        subtitle="Four years of learning, competing, building, and becoming."
      />
      <JourneyTimeline />
    </PageShell>
  );
}
