import React from 'react'
import {loginImage} from '../../../assets'

import './upload.scss'

const Upload = () => {
    return (
        <div className="upload">
            <img className="preview" src={loginImage} alt="preview" />
            <input type="file" />
        </div>
    )
}

export default Upload
