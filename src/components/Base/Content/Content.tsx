import React from 'react';

const Content: React.FC<any> = (props: any) => {
  return (
    <>
      <div>{props.children}</div>
    </>
  );
};

export default Content;