import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Skills from './skills';
import Education from './education';
import Experience from './experience';

class Resume extends React.Component {
    render () {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                        <img
                        src="https://hosting.photobucket.com/images/i/laicatolentino1/profilepic.png "
                        alt="avatar" 
                        style={{height: '200px'}} />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Laica Tolentino</h2>
                        <h4 style={{color: 'grey'}}>UX Designer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <p>Laica Tolentino is a UX Designer based out of Toronto.</p>

                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <h5>Address</h5>
                        <p>629 King St West Toronto, ON</p>
                        <h5>Phone</h5>
                        <p>(905) 806-4968</p>
                        <h5>Email</h5>
                        <p>laicadtolentino@gmail.com</p>
                        <h5>Web</h5>
                        <p>https://laicatolentino.github.io/</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                    <Education
                    startYear={2017}
                    endYear={2021}
                    schoolName="George Brown College"
                    schoolDescription="Interaction Design & Development" />

                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Experience</h2>
                    <Experience
                    startYear={2019}
                    endYear={"Present"}
                    jobName="Server @ Lobster Burger Bar"
                    jobDescription="Served food and beverages in efficient, courteous and professional manner "
                    />

                    <Experience
                    startYear={2018}
                    endYear={"2019"}
                    jobName="Manager @ Porchetta & co."
                    jobDescription="Trained new employees, Managed inventory, Ordered Meat & Produce"
                    />

                    <Experience
                    startYear={2015}
                    endYear={"2019"}
                    jobName="Social Media Manager @ Lucky Belly Food co."
                    jobDescription="Created content for instagram/Responsible for responding to customers"
                    />

                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Skills</h2>
                    <Skills
                    skill="Javascript"
                    progress={100} />

                    <Skills
                    skill="React"
                    progress={80} />

                    <Skills
                    skill="CSS"
                    progress={60} />
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Resume;