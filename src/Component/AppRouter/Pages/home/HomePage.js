import React from 'react';
import Content from '../common/Content';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          title: 'This is a title post',
          content: 'This is a **bolded** markdown text',
          author: 'Wuilliam Lacruz',
          date: '2018-10-01'
        },
        {
          title: 'This is a title post',
          content: 'This is a **bolded** markdown text',
          author: 'Wuilliam Lacruz',
          date: '2018-10-01'
        },
        {
          title: 'This is a title post',
          content: 'This is a **bolded** markdown text',
          author: 'Wuilliam Lacruz',
          date: '2018-10-01'
        },
        {
          title: 'This is a title post',
          content: 'This is a **bolded** markdown text',
          author: 'Wuilliam Lacruz',
          date: '2018-10-01'
        },
        {
          title: 'This is a title post',
          content: 'This is a **bolded** markdown text',
          author: 'Wuilliam Lacruz',
          date: '2018-10-01'
        }
      ]
    };
  }

  render() {
    return (
      <div className={'col-8'}>
        {this.state.posts.map((post, i) => <Content key={i} {...post} />)}
      </div>
    );
  }
}

export default HomePage;
