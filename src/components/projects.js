import React from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Background from '../images/Mario.png';
import Background2 from '../images/lifetomars.png';
import Background3 from '../images/pong.png';
import Background4 from '../images/assessment.png';

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background2}) center / cover`}}>Bring Life To Mars</CardTitle>
                        <CardText>
                        This is a simulation created in Maya using 3D Models and video. 
                        </CardText>
                        <CardActions butons>
                            <a href="https://youtu.be/ZoM6WQQGS-Y" target="_blank">
                            <Button colored>Youtube</Button>
                            </a>

                        </CardActions>
                        
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1)
        {
            return(
                <div className="projects-grid">
                {/*Project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background3}) center / cover`}}>Pong</CardTitle>
                    <CardText>
                    This is my version of Pong created using Java. 
                    </CardText>
                    <CardActions butons>
                        <a href="https://github.com/laicatolentino/Pong/blob/master/pong " target="_blank">
                        <Button colored>GitHub</Button>
                        </a>
                    </CardActions>
             
                </Card>

                
            </div>
            )
        } else if (this.state.activeTab === 2)
        {
            return (
                <div className="projects-grid">
                {/*Project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background4}) center / cover`}}>Anthropometric Assessment</CardTitle>
                    <CardText>
                    This is an assessment I did on the ergonomics of a workstation. 
                    </CardText>
                    <CardActions butons>
                        <a href="https://docs.google.com/document/d/1CQbEcv1gJOmI26x6vXe4NUr-BhyBtRSRdwRMUh5S1fc/edit" target="_blank">
                        <Button colored>Google docs</Button>
                        </a>
                    </CardActions>
           
                </Card>
            </div>
            )
        }
    }

    render () {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>AR Project</Tab>
                    <Tab>Java</Tab>
                    <Tab>Anthropometric Assessment</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;