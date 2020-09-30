import React from 'react'
import {useHistory} from 'react-router-dom'
import { registerImage } from '../../../assets'

import './blogItem.scss'
import { Link } from '../../atoms'

const BlogItem = () => {
    const history = useHistory();

    return (
        <div className="blog-item">
            <img className="image-thumb" src={registerImage} alt="post" />
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Nulla minim in nulla incididunt in et reprehenderit occaecat laborum cillum mollit dolore non mollit. Sunt officia ipsum laborum dolore esse tempor nostrud mollit. Ut elit elit velit reprehenderit aute Lorem excepteur quis tempor pariatur.</p>
            </div>
            <Link titleLink="View Detail" onClick={() => history.push('/detail-blog')} />
        </div>
    )
}

export default BlogItem
