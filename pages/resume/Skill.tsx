import React from 'react';
import './styles/skill.less';
import { SkillType } from '@/typings/resume';

const Skill: React.FC<SkillType.Props> = props => {
  const { skill = {} } = props;
  const { title = '', val = [] } = skill as SkillType.Item;
  return (
    <div className="hing-div__skill">
      <h4>{title}</h4>
      <ul>
        {
          val?.map((val: string, index: number) => {
            return (<li className="" key={index}>{val}</li>);
          })
        }
      </ul>
    </div>
  );
};

export default Skill;
