import styled from 'styled-components';
import React from 'react';
import Icon from '../../components/Icon';

const _CategorySection = styled.section`
    font-size: 18px;
    height: 80px;
    background: #464699;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    > .wrapper{
      margin: 0 68px;
      display: flex;
      width: 168px;
      height: 36px;
      justify-content: center;
      align-items: center;
      background: #5A5AA3;
      border-radius: 18px;
      > .pay{
        width: 50%;
        height: 28px;
        align-items: center;
        justify-content: center;
        padding-top: 4px;
        &.selected{
          background: #fff;
          color:#5A5AA3;
          border-radius: 14px;
          margin: 4px 4px;
        }
      }
      > .income{
        width: 50%;
        height: 28px;
        align-items: center;
        justify-content: center;
        padding-top: 4px;
      }
    }
  
    
      
    
`;
const CategorySection: React.FunctionComponent = () => {
  return (
    <_CategorySection>
      <Icon name="back"/>
      <div className="wrapper">
        <div className="income">收入</div>
        <div className="pay selected">支出</div>
      </div>
    </_CategorySection>
  );
};
export {CategorySection};
