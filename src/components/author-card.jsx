import React from "react";


class AuthorCard extends React.Component{
    constructor(props) {
      super(props);
    }
    
    render() 
    {
      
      return (
        <div className="card">
          <div className="content">
            <div className="author-card header">{this.props.name}</div>
            <div className="author-card meta">{this.props.role}</div>
            <div className="author-card description">
              <p 
                dangerouslySetInnerHTML={{__html: this.props.html}}/></div>
          </div>
        </div>

      );
    }


}

export default AuthorCard;