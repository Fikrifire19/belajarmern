import React from 'react'
import {useHistory} from 'react-router-dom'

import { loginImage } from '../../assets'
import { FormInput, Button, Gap, Link } from '../../components'

const Login = () => {
    const history = useHistory();

    return (
        <div className="main-page">
            <div className="left">
                <img src={loginImage} className="bg-image" alt="imageBackground"/>
            </div>
            <div className="right">
                <h1 className="title">Login</h1>
                <Gap height={20} />
                <FormInput label="Email" placeholder="Email"/>
                <Gap height={15} />
                <FormInput label="Password" placeholder="Password"/>
                <Gap height={30} />
                <Button titleBtn="Login" onClick={() => history.push('/')} />
                <Gap height={100} />
                <Link titleLink="Belum punya Akun? Silahkan daftar" onClick={() => history.push('/register')}/>
            </div>
        </div>
    )
}

export default Login
