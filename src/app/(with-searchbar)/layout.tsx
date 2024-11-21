import SearchBar from "../../components/SearchBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-[100dvh] w-[100dvw] items-center justify-center bg-gray-100 pt-14">
      <div className="h-[800px] w-[600px] bg-white rounded-2xl shadow-md p-4">
        <SearchBar />
        {children}
      </div>
    </main>
  );
}
