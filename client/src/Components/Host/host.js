import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../Host/host.css'

export default class Host extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: [],
      userProperties: [],
    }
  }

  componentDidMount(){
    axios.get(`/api/user/${this.props.match.params.id}`, { withCredentials: true })
      .then((res) => {
        this.setState({
          userInfo: res.data[0]
        })
        axios.get(`/api/user/homes/${this.props.match.params.id}`, { withCredentials: true })
         .then((res) => {
           this.setState({
             userProperties: res.data
           })
         })
       })


  }


    render() {
        return (
            <div>
                <div className="host-container">
                    <div className="profile-strip-container">
                        <div className="profile-pic">

                        </div>

                        <div className="button">
                            <Link to="/create">Add Property</Link>
                        </div>


                        <div className="verified-info-container">
                            <div className="verified-info-header">
                                <div className="text-margin">Verified info</div>
                            </div>
                            <div className="verified-info-body-container">
                                <div className="verified-container">
                                    <div className="verified-info-body-left">
                                        <div className="text-margin">Government ID</div>
                                        <div className="text-margin">Email address</div>
                                        <div className="text-margin">Phone number</div>
                                        <div className="text-margin">Work email</div>
                                    </div>
                                    <div className="verified-info-right">
                                        <div className="check-circle">
                                            <div>✓</div>
                                        </div>
                                        <div className="check-circle">
                                            <div>✓</div>
                                        </div>
                                        <div className="check-circle">
                                            <div>✓</div>
                                        </div>
                                        <div className="check-circle">
                                            <div>✓</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="learn-more">
                                    <div className="learn-text">
                                        <div>Learn more</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="about-me-container">
                            <div className="verified-info-header">
                                <div className="text-margin">About me</div>
                            </div>
                            <div className="about-me-body-container">
                                <div className="school-header">School</div>
                                <div className="school-body">Oneonta High School, Oneonta Senior High School, University of Rochester, University of Rochester</div>
                                <div className="school-header">Work</div>
                                <div className="school-body">Forrest Technical Coatings</div>
                                <div className="school-header">Languages</div>
                                <div className="school-body">English, Español, Français</div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-body">
                        <div className="profile-header-container">
                            <div className="profile-header">
                                <div>{this.state.userInfo.first_name} {this.state.userInfo.last_name}</div>
                            </div>
                            <div className="profile-location">
                                <div>Eugene, Oregon, United States · Joined in August 2012</div>
                            </div>
                            <div className="profile-report">
                                <div>⚑ Report user</div>
                            </div>
                            <div className="profile-bio">
                                <div>{this.state.userInfo.bio}</div>
                            </div>
                        </div>
                        <div className="profile-badge-container">
                            <div className="superhost">
                                <div className="superhost-pic"></div>
                                <div className="superhost-title">
                                    <div>Superhost</div>
                                </div>
                            </div>
                            <div className="superhost">
                                <div className="reviews-box">
                                    <div>102</div>
                                </div>
                                <div className="superhost-title">
                                    <div>Reviews</div>
                                </div>
                            </div>
                            <div className="superhost">
                                <div className="verified-pic"></div>
                                <div className="superhost-title">
                                    <div>Verified</div>
                                </div>
                            </div>
                        </div>
                        <div className="homes-header">
                            <div>Hosted properties</div>
                        </div>
                        <div className="homes-container">
                          {this.state.userProperties.map(item => {
                              return (
                                <div className="featured-condo">
                                  <Link to = {`/room/${item.property_id}`}>
                                    <div className="featured-condo-pic" style={{ backgroundImage: `url("${item.image_med}")` }}>
                                    </div>
                                    <p className="featured-condo-rooms-font">{item.city}</p>
                                    <p className="featured-condo-name-font">{item.property_name}</p>
                                    <p className="featured-condo-price-font">${item.price}</p>

                                    </Link>
                                    </div>
                              )
                          })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
