import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
class AboutMe extends React.Component {
    render () {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2>Laica Tolentino</h2>
                    <img
                    src="https://hosting.photobucket.com/images/i/laicatolentino1/profilepic.png"
                    alt="avatar" 
                    style={{height: '250px'}}/>

                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                    Hi! Thanks for stopping by. I currently attend George Brown College and I'm studying Interaction Design & Development. I have passion for designing beautiful and interactive interfaces that are functional aswell. Collaboration and teamwork are my jam.

Previously, I studied at University of Guelph. I took Computer Science/Software Engineering. There I learned my coding skills and started off as a team leader when it came to group assignments. I later found the program I am in at George Brown where I excell in coding and designing mock ups such as wireframes.

Currently, I am looking for new job opportunities or internships. Feel free to reach out to chat or anything!</p>
                    </Cell>
                    <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr />

                    <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className='fa fa-phone-square' aria-hidden="true"/>
                                (905) 805-4968
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className='fa fa-fax' aria-hidden="true"/>
                                (123) 456-7890
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className='fa fa-envelope' aria-hidden="true"/>
                                laicadtolentino@gmail.com
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className='fa fa-skype' aria-hidden="true"/>
                                laicatolz
                            </ListItemContent>
                        </ListItem>
                    </List>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default AboutMe;