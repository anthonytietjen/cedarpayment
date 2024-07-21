import Header from "./Header";

interface Props {
  children?: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <div className="bg-[#F2F8FF] min-h-screen">
      <Header />
      <main>{children}</main>
    </div>
  );
}
