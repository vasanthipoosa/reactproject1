import React,{ useContext } from 'react'
import {technology} from '../APIs/ApiTech'

const Technology = () => {
  const [dataTech] = useContext(technology);
  return (
    <>
    <div className="contentPage">
      {dataTech.map((item) => {
        return (
          <a href={item.url}>
            <div className="card">
              <img src={item.urlToImage} alt="TechImg" />
              <p>{item.title}</p>
              <hr />
              <p>{item.description}{item.content}</p>
              <p>{item.author}{item.publishedAt}</p>
            </div></a>
        );
      })}
      </div>
      <div className="right">
      </div>
    </>
  )
}

export default Technology