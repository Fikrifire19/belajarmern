import React from 'react'
import { logoF, ICInstagram, ICTwitter, ICGithub, ICFacebook, ICDiscord } from '../../../assets'

import './footer.scss'

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-image" src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <div >
            <div className="footer">
                <div>
                    <img src={logoF} alt="imagelogo" />
                </div>
                <div className="social-wrapper">
                    <Icon img={ICFacebook} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICTwitter} />
                    <Icon img={ICDiscord} />
                    <Icon img={ICGithub} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
