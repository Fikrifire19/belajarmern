import React from 'react'
import {Button, FormInput, Upload, TextArea, Gap, Link} from '../../components'

import {useHistory} from 'react-router-dom';

import './createBlog.scss'

const CreateBlog = () => {
    const history = useHistory();
    return (
        <div className="blog-post">
            <Link titleLink="Kembali" onClick={() => history.push('/')} />
            <p className="title">Create Blog</p>
            <FormInput label="Post Title" />
            <Upload />
            <TextArea />
            <Gap height={20} />
            <div className="btn-action">
                <Button titleBtn="Save" />
            </div>
        </div>
    )
}

export default CreateBlog
