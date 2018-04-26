import React, { Component } from 'react'
import axios from 'axios'
import './register.css'

export default class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
          userData: {
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            bio: ""
          }
        }
    }


    handleChange = (event) =>{
      const target = event.target;
      const value = target.value;
      const name = target.name;

      let registerUser = Object.assign({}, this.state.userData);
      registerUser[name] = value;

      this.setState({
        userData: registerUser
      })
    }


    register() {
        axios.post(__dirname + '/api/auth/register', this.state.userData).then(res => {
          axios.get(__dirname + `/api/auth/login/${this.state.userData.username}/${this.state.userData.password}`, {
             withCredentials: true
           }).then( res => {
             console.log('res', res.data.user_id);
             if (res.data.user_id > 0){
               this.props.history.push(`/host/${res.data.user_id}`);
             } else {
               this.props.history.push(`/register/`);
             }
           })
         }
        )

    }

    render() {
        return (
            <div className="register-main-container">
                <div className="register-inner-container">
                    <div className="register-info-container">
                        <div className="register-title">
                            <div>Join Housebnb and let the fun begin!</div>
                        </div>
                        <div className="register-subheader">
                            <div>• Create your username</div>
                        </div>
                        <input
                          name="username"
                          className="register-input"
                          value={this.state.userData.username}
                          placeholder="Username"
                          onChange={this.handleChange}
                          />
                        <div className="register-subheader">
                            <div>• Create your password</div>
                        </div>
                        <input
                          name="password"
                          className="register-input"
                          value={this.state.userData.password}
                          placeholder="Password"
                          onChange={this.handleChange}
                          />
                        <div className="register-subheader">
                            <div>• What is your first name?</div>
                        </div>
                        <input
                          name="firstName"
                          className="register-input"
                          value={this.state.userData.firstName}
                          placeholder="First Name"
                          onChange={this.handleChange}
                          />
                        <div className="register-subheader">
                            <div>• What is your last name?</div>
                        </div>
                        <input
                          name="lastName"
                          className="register-input"
                          value={this.state.userData.lastName}
                          placeholder="Last Name"
                          onChange={this.handleChange}
                          />
                        <div className="register-subheader">
                            <div>• Write a short bio about you</div>
                        </div>
                        <input
                          name="bio"
                          className="register-input"
                          value={this.state.userData.bio}
                          placeholder="Bio"
                          onChange={this.handleChange}
                          />
                        <div className="register-button-container">
                            <div className="register-button" onClick={() => this.register()}>
                                <div>Register</div>
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
