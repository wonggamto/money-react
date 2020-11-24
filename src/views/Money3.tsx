import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Icon from '../components/Icon';

const TagsSection = styled.section`
    background: #FFF;
    padding: 12px 0;
    > ol{
      padding:0 4px;
    > li{
        background: #d9d9d9;
        border-radius: 50%;
        display: inline-block;
        padding: 2px 14px;
        margin: 8px 12px; 
      }
    }
    button{
      margin-left: 16px;
      background: none;
      border: none;
      padding: 2px 4px;
      border-bottom: 1px solid #333;
      color: #666;
      margin-bottom: 8px;
    }
    
`;

const NotesSection = styled.section`
  background: #f5f5f5;
  padding: 10px 16px;
  font-size: 14px;
  > label{
      display: flex;
      align-items: center; 
    > span{
      margin-right: 16px;
      white-space: nowrap;
      }
      > input{
        display: block;
        width: 100%;
        height: 72px;
        border: none;
        background: none;
        
      }
   
  } 
`;

const CategorySection = styled.section`
    font-size: 24px;
    > ul{
      display: flex;
      background: #c4c4c4;
      > li{
        width: 50%;
        padding: 16px 0;
        text-align: center;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        &.selected::after{
            content:'';
            display: block;
            height: 3px;
            background: #333;
            position: absolute;
            bottom: 0;
            width: 100%;
            left: 0;
        }
      }
    }
    
`;

const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;
  > .output{
    background: white;
    font-size:36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{
    > button{
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      border: none;
      &.ok{
        height: 128px;
        float: right;
      }
      &.zero{
        width: 50%;
      }
      &:nth-child(1){
        background: #f2f2f2;
      }
       &:nth-child(2),
       &:nth-child(5){
        background: #E0E0E0;
      }
       &:nth-child(3),
       &:nth-child(6),
       &:nth-child(9){
        background: #D3D3D3;
      }
      &:nth-child(4),
       &:nth-child(7),
       &:nth-child(10){
        background: #C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13){
        background: #B8B8B8;
      }
      &:nth-child(12){
        background: #9A9A9A;
      }
      &:nth-child(14){
        background: #A9A9A9;
      }
    }
  }
`;
function Money3() {
  return (
    <Layout>
      <CategorySection>
        <ul>
          <li className="selected">
            <Icon name="income"/>
            收入
          </li>
          <li>
            <Icon name="pay"/>
            支出
          </li>
        </ul>
      </CategorySection>
      <TagsSection>
        <ol>
          <li>
            <Icon name="gift"/>
          </li>
          <li>
            <Icon name="foods"/>
          </li>
          <li>
            <Icon name="habitation"/>
          </li>
          <li>
            <Icon name="transportation"/>
          </li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注:</span>
          <input type="text" placeholder="请添加备注"/>
        </label>
      </NotesSection>
      <NumberPadSection>
        <div className="output ">100</div>
        <div className="pad clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
}

export default Money3;