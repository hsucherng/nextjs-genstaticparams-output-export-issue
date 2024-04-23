export const dynamicParams: boolean = false;

export function generateStaticParams() {
  return [
    { lang: "en" }
  ];
}

export default function LangPage() {
  return (
    <>
      Language
    </>
  )
}
