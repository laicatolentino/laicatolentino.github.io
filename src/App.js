import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends React.Component {
  render() {
    return(
    <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Laica Tolentino</Link>} scroll>
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
              </Navigation>
          </Header>
          <Content>
              <div className="page-content" />
              <Main />
          </Content>
      </Layout>
    </div>
    )
  }

}

export default App;