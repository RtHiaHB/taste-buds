import React from 'react'

const SignIn = () => {
    const centeredtext = {
        'paddingLeft': '25%',
        'paddingRight': '25%',
    }
    const bottomspacing = {
        'paddingBottom': '.5em'
    }
    return (
        <div style={centeredtext}>
            <h1>Sign In</h1>
            <form>
                <div style={bottomspacing}>
                    <label htmlFor='username'>Email:&nbsp;</label>
                    <input type='text' id='username' /> <br />
                </div>
                <div style={bottomspacing}>
                    <label htmlFor='password'>Password:&nbsp;</label>
                    <input type='password' id='password' /><br />
                </div>
                <input type='submit' id='login' value={'Submit'} />
            </form>
            <h2>Sign Up</h2>
            <form>
                <div style={bottomspacing}>
                    <label htmlFor='newusername'>Email:&nbsp;</label>
                    <input type='text' id='newusername' />
                </div>
                <div style={bottomspacing}>
                    <label htmlFor='newpassword'>New Password:&nbsp;</label>
                    <input type='password' id='newpassword' />
                </div>
                <div style={bottomspacing}>
                    <label htmlFor='newpasswordconfirm'>Confirm Password:&nbsp;</label>
                    <input type='password' id='newpasswordconfirm' />
                </div>
                <input type='submit' value={'Submit'} />
            </form>
            <p>Here, at Taste Bud's, we value your privacy.  Email is only used for identification purposes.</p>
        </div>
    )
}

export default SignIn