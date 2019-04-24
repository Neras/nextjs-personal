import React from 'react';
import Skill from './Skill';

class Content extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const {skill, experience = []} = this.props.resume;
    return (
      <div className="hing-div__intro__wrapper">
        <div className="hing-div__experience">
          <h4>工作经历</h4>
          {
            experience.map( (val, index) => {
              return (
                <div className="hing-div__content" key={val.key}>
                  <p><b>{val.company}</b></p>
                  <p>{val.time}</p>
                  {
                    !!val.department && <p>{val.department}</p>
                  }
                  <ul>
                    {
                      (val.projects || []).map( (project, key) => (
                        <li key={`pro${key}`} dangerouslySetInnerHTML={{__html: project}}></li>
                      ))
                    }</ul>
                  <p dangerouslySetInnerHTML={{__html: val.content}}></p>
                  <div className="hing-div__skills">
                    {
                      (val.skills || []).map( (item, index) => {
                        return (<span className="hing-span__skill" key={index}>{item}</span>)
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        <style jsx>
          {`
            .hing-div__intro__wrapper{
              max-width: 600px;
              margin-left: auto;
              margin-right: auto;
            }
            .hing-div__content{
              width: 100%;
              border-bottom: 1px solid #e3e3e3;
            }
            .hing-div__experience{
              padding: 0 20px;
            }
            .hing-div__skills{
              display:block;
            }
            .hing-div__skills::after{
              clear: both;
              display: table;
              content: '';
              visibility: hidden;
              padding-bottom: 10px;
            }
            .hing-span__skill{
              float: left;
              border: 1px solid transparent;
              box-shadow: 1px 1px 1px #e3e3e3;
              border-radius: 4px;
              margin-right: 10px;
              padding: 2px 5px;
              background-color: #5DAC81;
              color: #fff;
            }
            `}
          </style>
          <Skill skill={skill} />
        </div>
    )
  }
}

export default Content;