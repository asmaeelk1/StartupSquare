import React from "react";
import './ArticleApps.css';

export default function ArticlApps(props) {
  return (
    <div>
      <article className="article1">
        <div>
          <h4>{props.titel1}</h4>
          <p>{props.p1}</p>
        </div>
        <figure>
          <img src={props.img1} />
        </figure>
      </article>

      <article className="article2">
        <figure>
          <img src={props.img2} />
        </figure>
        <div>
          <h4>{props.titel2}</h4>
          <p>{props.p2}</p>
        
        </div>
      </article>

    </div>
  );
}
