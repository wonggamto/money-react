import React from 'react';
import Icon from './Icon';
import styled from 'styled-components';

const _TagSection = styled.section`
     background: #FFF;
     padding:12px 0;
      > ol{
         display: flex;
         flex-wrap: wrap;
         padding: 0 24px;
         > li{
            background: #F5F5F5;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            width: 68px;
            height: 68px;
            font-size: 32px;
            margin: 4px 6px;
            border-radius: 30%;
            > span{
              margin: 4px 0;
              font-size: 12px;
              text-align: center;
            }
          }
     }
`;

function TagSection() {
  return (
    <_TagSection>
      <ol>
        <li>
          <Icon name="gift"/>
          <span>购物</span>
        </li>
        <li>
          <Icon name="medical"/>
          <span>医疗</span>
        </li>
        <li>
          <Icon name="clothes"/>
          <span>衣服</span>
        </li>
        <li>
          <Icon name="gas"/>
          <span>加油</span>
        </li>
        <li>
          <Icon name="transportation"/>
          <span>交通</span>
        </li>
        <li>
          <Icon name="add"/>
          <span>添加标签</span>
        </li>
      </ol>
    </_TagSection>
  );
}

export {TagSection};