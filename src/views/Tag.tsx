import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {NoteSection} from './Money/NoteSection';

type Params = {
  id: string
}
const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  height: 68px;
  background: #464699;
  font-size: 18px;
  align-items: center;
  padding: 0 16px;
   > span{
     font-size: 32px;
   }
`
const Tag: React.FunctionComponent = (props) => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <TopBar>
        <Icon name="back"/>
        <span>编辑标签</span>
        <Icon name=""/>
      </TopBar>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder={tag.name}/>
        </label>
      </div>
      <div>
        <button className="add"><Icon name="remove"/>删除标签</button>
      </div>
    </Layout>
  );
};
export {Tag};