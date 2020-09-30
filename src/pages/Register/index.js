import React from 'react'
import {useHistory} from 'react-router-dom'

import './register.scss'
import { registerImage } from '../../assets'
import { FormInput, Button, Gap, Link } from '../../components'

const Register = () => {
    const history = useHistory();

    return (
        <div className="main-page">
            <div className="left">
                <img src={registerImage} className="bg-image" alt="imageBackground"/>
            </div>
            <div className="right">
                <h1 className="title">Register</h1>
                <Gap height={20} />
                <FormInput label="Full Name" placeholder="Full Name"/>
                <Gap height={15} />
                <FormInput label="Email" placeholder="Email"/>
                <Gap height={15} />
                <FormInput label="Password" placeholder="Password"/>
                <Gap height={30} />
                <Button titleBtn="Register" onClick={() => history.push('/')} />
                <Gap height={100} />
                <Link titleLink="Kembali ke Login" onClick={() => history.push('/login')}/>
            </div>
        </div>
    )
}

export default Register
