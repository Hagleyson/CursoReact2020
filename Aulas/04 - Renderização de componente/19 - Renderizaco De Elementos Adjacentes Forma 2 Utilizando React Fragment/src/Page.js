import React, { Fragment } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Page() {
  return (
    //Reac.fragment para não precisar encapsular
    //forma 1
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
    //forma 2
    /*
    nessa forma tem que importar a hook Fragment
    <Fragment>
      <Header />
      <Main />
      <Footer />
     </Fragment> 
     */
    //forma 3
    /*
    <>
      <Header />
      <Main />
      <Footer />      
    </>*/
  );
}
export default Page;
