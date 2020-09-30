import React from 'react'
import {Button, Gap} from '../../components'
import {BlogItem} from '../../components'
import {useHistory} from 'react-router-dom'

import './home.scss'

const Home = () => {
    const history = useHistory();

    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button titleBtn="Create Blog" onClick={() => history.push('/create-blog')} />
            </div>
            <Gap height={20} />
            <div className="content-wrapper">
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>
            <div className="pagination">
                <Button titleBtn="Previous" />
                <Gap width={20} />
                <Button titleBtn="Next" />
            </div>
                <Gap height={20} />
        </div>
    )
}

export default Home
