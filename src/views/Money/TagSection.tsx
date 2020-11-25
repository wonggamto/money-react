import React, {useState} from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';

const TagSection: React.FunctionComponent = (props) => {
  const [tags, setTags] = useState<string[]>(['transportation', 'gas', 'medical', 'gift']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const onAddTag = () => {
    const tagName = window.prompt('新标签的名称为');
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
      const index = selectedTags.indexOf(tag)
      if(index >= 0){
        //如果tag已经被选中，就复制所有没有被选中的tag作为新的selectedTag
        setSelectedTags(selectedTags.filter(t => t !==tag))
        console.log(111);
      }else{
        setSelectedTags([...selectedTags,tag])
      }
  };
  const getClass = (tag:string) =>selectedTags.indexOf(tag)>=0 ?'selected':''
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag}
            onClick={() => onToggleTag(tag)}
          className={getClass(tag)}>
            <Icon name={tag}/>
            <span>{tag}</span>
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