import SearchBar from "./_components/SearchBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SearchBar />
      {children}
      직접 위치 셋팅
    </div>
  );
}
