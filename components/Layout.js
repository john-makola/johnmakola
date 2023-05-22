import Nav from "./Nav";
import Meta from "./Meta";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="top">
        <Nav />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
