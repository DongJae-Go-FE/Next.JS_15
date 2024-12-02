import Modal from "@/components/Modal/Modal";
import ServerBookInfo from "@/components/_serverComponents/ServerBookInfo";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Modal>
      <ServerBookInfo id={id} />
    </Modal>
  );
}
