import React from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends React.Component {
    render () {
        return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img
                    src="https://hosting.photobucket.com/images/i/laicatolentino1/profilepic.png"
                    alt="avatar" 
                    className="avatar-img" />

                    <div className="banner-text">
                        <h1>UX Designer</h1>

                        <hr />

                        <p>Unity3D | JavaScript | Photoshop | Illustrator | After Effects | Maya</p>
                    
                        <div className="social-links">
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true" />
                            </a>

                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter-square" aria-hidden="true" />
                            </a>

                            <a href="https://www.instagram.com/anagrammc_music/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
        )
    }
}

export default LandingPage;