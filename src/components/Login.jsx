import React from 'react';
import "./style.scss";

export class Login extends React.Component {

    render() {
        let checkboxid = this.props.checkboxid;
        return (
            <div className="App">
                <div className="base-container">
                    <div className="image">
                        <img src={"https://green.cdn.energy/branding/logo-r.svg"} alt="Logo" />
                    </div>

                    <h1>Example login screen</h1>
                    <p>Getting started with Green. </p>

                    <div className="content">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="emailadress" className="emaillabel">Email Address</label>
                                <input type="text" name="emailaddress" />
                                <div className="checkboxitem">
                                    <input type="checkbox" name={checkboxid} />
                                    <label htmlFor="checkboxtext">Remember this Device</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button className="signinbutton" type="button">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
