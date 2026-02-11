import YearPageContent from "../../components/YearPageContent";

export function generateStaticParams() {
  return [
    { year: "freshman" },
    { year: "sophomore" },
    { year: "junior" },
    { year: "senior" },
  ];
}

export default async function YearPage({ params }) {
  const { year } = await params;
  return <YearPageContent year={year} />;
}
