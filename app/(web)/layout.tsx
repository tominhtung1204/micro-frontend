import "../../public/css/style.css";
import WebFooter from "./components/common/footer";
import WebHeader from "./components/common/header";

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <WebHeader />
      {children}
      <WebFooter />
    </>
  );
}
