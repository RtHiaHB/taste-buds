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
        </div>
    )
}

export default SignIn