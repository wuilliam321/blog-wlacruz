import React from 'react';

class Content extends React.Component {
  render() {
    const {title, content, author, date} = this.props || null;
    return (
      <div>
        <h1>{title}</h1>
        <p>
          <small>
            By {author} on {date}
          </small>
        </p>
        <p>{content}</p>
      </div>
    );
  }
}

export default Content;
