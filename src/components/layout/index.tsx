interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="font-Poppins bg-cinza-500 text-white">{children}</div>;
};

export default Layout;
