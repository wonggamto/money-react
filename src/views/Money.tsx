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

const NotesSection = styled.section``;

const CategorySection = styled.section``;

const NumberPadSection = styled.section``;



function Money() {
  return (
    <Layout>
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
          <input type="text"/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li>
            <Icon name="income"/>
          </li>
          <li>
            <Icon name="pay"/>
          </li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div>100</div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>OK</button>
        <button>0</button>
        <button>.</button>
      </NumberPadSection>
    </Layout>
  );
}

export default Money;