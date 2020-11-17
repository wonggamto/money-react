import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components'
import Icon from '../components/Icon';

const TagsSection = styled.section``

const NotesSection = styled.section``

const CategorysSection = styled.section``

const NumberPadSection = styled.section``
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
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注:</span>
          <input type="text"/>
        </label>
      </NotesSection>
      <CategorysSection>
        <ul>
          <li>
            <Icon name="income"/>
          </li>
          <li>
            <Icon name="pay"/>
          </li>
        </ul>
      </CategorysSection>
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