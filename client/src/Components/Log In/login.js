import React, { Component } from 'react'
import  { Redirect } from 'react-router-dom'
import axios from 'axios'
import './login.css'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
          userData: {
            username: "Logan91",
            password: "password"
          },
          loggedIn : false
        }
    }

    handleChange = (event) =>{
      const target = event.target;
      const value = target.value;
      const name = target.name;

      let loginUser = Object.assign({}, this.state.userData);
      loginUser[name] = value;

      this.setState({
        userData: loginUser
      })
    }

    register() {
      axios.get(`/api/auth/login/${this.state.userData.username}/${this.state.userData.password}`, {
         withCredentials: true
       }).then( res => {
         console.log('res', res.data.user_id);
         if (res.data.user_id > 0){
           this.props.history.push(`/host/${res.data.user_id}`);
         } else {
           this.props.history.push(`/login/`);
         }
       })
    }


    render() {
        return (
            <div className="register-main-container">
                <div className="register-inner-container">
                    <div className="register-info-container">
                        <div className="register-title">
                            <div>Log in!</div>
                        </div>
                        <div className="register-subheader">
                            <div>• Enter your username</div>
                        </div>
                        <input
                          name="username"
                          className="register-input"
                          value={this.state.userData.username}
                          placeholder="Username"
                          onChange={this.handleChange}
                          />
                        <div className="register-subheader">
                            <div>• Enter your password</div>
                        </div>
                        <input
                          name="password"
                          className="register-input"
                          value={this.state.userData.password}
                          placeholder="Password"
                          onChange={this.handleChange}
                          />
                        <div className="register-button-container">
                            <div className="register-button" onClick={() => this.register()}>
                                <div>Log in</div>
                            </div>
                        </div>
                    </div>
                    <div className="register-picture-container">
                        <div className="register-picture">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
