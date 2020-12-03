import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import {useTags} from '../../useTags';
import {createId} from '../../lib/createId';

type Props = {
  value: number[];
  onChange: (selected: number[]) => void;
}
const TagSection: React.FunctionComponent<Props> = (props) => {
  const {tags, setTags} = useTags();
  const selectedTagIds = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('新标签的名称为');
    if (tagName !== null) {
      setTags([...tags, {id:createId(),name:tagName}]);
    }
  };
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      //如果tag已经被选中，就复制所有没有被选中的tag作为新的selectedTag
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id}
              onClick={() => onToggleTag(tag.id)}
              className={getClass(tag.id)}>
            <Icon name={tag.name}/>
            <span>{tag.name}</span>
          </li>
        )}
        <button onClick={onAddTag}>
          <Icon name="add"/>
          <span>新增标签</span>
        </button>
      </ol>
    </Wrapper>

  );
};

const Wrapper = styled.section`
     background: #FFF;
     padding:12px 0;
      > ol{
         display: flex;
         flex-wrap: wrap;
         padding: 0 24px;
         overflow: scroll;
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
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            &.selected{
              background: #DDD;
            }
          }
            > button{
              width: 68px;
              height: 68px;
              font-size: 32px;
              margin: 4px 6px;
              border: none;
              border-radius: 30%; 
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              background: #F5F5F5;
              > span{
              margin: 4px 0;
              font-size: 12px;
              text-align: center;
            }
           }
     }
`;


export {TagSection};