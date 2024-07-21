import Header from "./Header";

interface Props {
  children?: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <body className="bg-[#F2F8FF]">
      <Header />
      <main>{children}</main>
    </body>
  );
}
