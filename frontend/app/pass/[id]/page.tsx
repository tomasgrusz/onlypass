import passesJson from "@/data/passes.json";
import LargePassCard from "@/components/LargePassCard/LargePassCard";

export default async function Pass({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pass = passesJson.find((pass) => pass.id === id);

  return (
    <section className="p-4 bg-[#E17B7B] h-[83vh]">
      {pass && <LargePassCard pass={pass} />}
    </section>
  );
}
