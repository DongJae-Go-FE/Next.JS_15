import MyInfo from "@/components/MyInfo";
import SearchBar from "../../../components/_clientComponents/SearchBar";
import { Suspense } from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex items-center justify-center">
      <MyInfo />
      <div className="h-[800px] w-[600px] rounded-2xl bg-white p-4 shadow-md">
        <div className="h-full w-full overflow-auto">
          <Suspense fallback={<>...Loading</>}>
            <SearchBar side="server" />
          </Suspense>
          {children}
        </div>
      </div>
    </main>
  );
}
