import Header from "../Header/Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
