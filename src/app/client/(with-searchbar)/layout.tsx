import SearchBar from "../../../components/_clientComponents/SearchBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex items-center justify-center">
      <div className="h-[800px] w-[600px] rounded-2xl bg-white p-4 shadow-md">
        <div className="h-full w-full overflow-auto">
          <SearchBar side="client" />
          {children}
        </div>
      </div>
    </main>
  );
}
