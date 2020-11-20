import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const NumberPad = styled.section`
     border: 1px solid red;
     display: flex;
     justify-content: center;
     align-items: center;
     //flex-direction: column;
     //min-height: 100vh;
     > button{
        display: inline-block;
        width:25%;
     } 
    
    
`;

function Pad() {
  return (
    <Layout className="wrapper">
      <NumberPad>
          <button >1</button>
          <button >2</button>
          <button >3</button>
          <button >删除</button>
          <button >4</button>
          <button >5</button>
          <button >6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>OK</button>
          <button className="zero">0</button>
          <button className="dot">.</button>
      </NumberPad>
    </Layout>

  );
}

export default Pad;