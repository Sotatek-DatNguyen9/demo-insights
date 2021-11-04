import React from 'react';
// import Header from '../../Base/Header';
import Content from '../../Base/Content';
import Footer from '../../Base/Footer';

const DefaultLayout = (props: any) => {

  return (
    <div>
      {/* <Header {...props}/> */}
      <Content>{props.children}</Content>
      <Footer {...props}/>
    </div>
  );
};

export default DefaultLayout;