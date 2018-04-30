import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './room.css'
import axios from 'axios'
import ScrollListener from 'react-scroll-listen'

export default class Room extends Component {

    constructor(props) {
        super(props)
        this.state = {
            property: [],
            scrollPosition: 0,
            hover: '',
            address: 'California',
            lat: "",
            long: "",
            size: "600x600",
            street: "",
            city: "",
            state: "",
            hostName: ""
        }
        this.scroller = this.scroller.bind(this)
    }

    componentDidMount() {
      axios.get(`http://localhost:3001/api/property/${this.props.match.params.id}`, { withCredentials: true })
      .then(res => {
          console.log(3333, res)
        this.setState({
          property: res.data,
          street: res.data[0].street,
          city: res.data[0].city,
          state: res.data[0].state,
          hostID: res.data[0].property_user
        })
        const roomSearch = document.getElementById('room-search-bar')
        roomSearch.className = "room-search-bar-on"
        this.scroller()
      }
    ).catch(error => console.log(error))
    .then( () => {
        this.scroller()
        this.getLat()
    }).then( () =>
    axios.get(`http://localhost:3001/api/user/${this.state.hostID}`, { withCredentials: true })
    .then((res) => {
        console.log(66666, res)
          this.setState({ hostName: res.data[0].first_name })
    }))
}



    getLat() {
        var HttpClient = function () {
            this.get = function (aUrl, aCallback) {
                var anHttpRequest = new XMLHttpRequest();
                anHttpRequest.onreadystatechange = function () {
                    if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                        aCallback(anHttpRequest.responseText)
                } 



                anHttpRequest.open("GET", aUrl, true);
                anHttpRequest.send(null);
            }
        }

        var client = new HttpClient();
        client.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.street}+${this.state.city}+${this.state.state}&key=AIzaSyAgIZ-A0dS_YP6vEoa7C3To4go4jlAhJ_g`, (response) => {
            response = JSON.parse(response)
            this.setState({ lat: response.results[0].geometry.location.lat, long: response.results[0].geometry.location.lng }, () => console.log(this.state))
        })
    }






    scroller() {
        window.onscroll = () => {
            if (this.state.scrollPosition > 800) {
                const rentBox = document.getElementById('rent-box')
                if (rentBox === null) {
                } else {  
                rentBox.className = "rent-box-fixed"
                }
            } else if (this.state.scrollPosition < 800) {
                const rentBox = document.getElementById('rent-box')
                if (rentBox === null) {
                } else {
                rentBox.className = "rent-box"
                }
            }
        }
    }


     bookProperty() {
      axios.put(`/api/property/book/${this.props.match.params.id}`, { withCredentials: true })
      .then(res => {
        this.setState({
          property: res.data,
        })
      }
    ).catch(error => console.log(error))
    }



    render() {
      if (this.state.property[0]){
        return (
            <div>
                <ScrollListener
                    onScroll={value => this.setState({ scrollPosition: value }, () => {
                    })}
                />
              <div className="room-header-container" id="room-header" style={{ backgroundImage: `url("${this.state.property[0].image_med}")` }}>
                    <div className="room-header-top">
                        <div className="room-header-top-box">
                            <div className="save-heart">⤿</div>
                            <div>Share</div>
                        </div>
                        <div className="room-header-top-box">
                            <div className="save-heart">♡</div>
                            <div>Save</div>
                        </div>
                    </div>
                    <div className="room-header-bottom">
                        <div className="room-header-bottom-box">
                            <div>View Photos</div>
                        </div>
                    </div>
                </div>
                <div className="take-up-room">
                    <div className="room-column">
                        <div className="room-main-container">
                            <div className="room-inner-container">
                                <div className="room-desc-container">
                                    <div className="desc-container">
                                        <div className="room-desc">
                                            <div>
                                                {this.state.property[0].summary}
                                            </div>
                                        </div>
                                        <div className="room-specs">
                                            <div>2 Rooms</div>
                                            <div>Studio</div>
                                            <div>1 Bathroom</div>
                                            <div>1 Private Bath</div>
                                        </div>
                                    </div>
                                    <div className="room-host-container">

                                        <div className="room-host-pic-container">
                                            <div className="room-host-pic">

                                            </div>
                                        </div>
                                        <div className="host-text-container">
                                          <Link to= {`/host/${this.state.property[0].property_user}`} >
                                            <div className="host-text">
                                                <div>{this.state.hostName}, Your Host</div>
                                            </div>
                                          </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="room-tour-container">
                                    <div className="tour-header">
                                        <div>Tour this home</div>
                                    </div>
                                    <div className="tour-pics-container">
                                        <div className="tour-pic1"></div>
                                        <div className="tour-pic2"></div>
                                        <div className="tour-pic3"></div>
                                        <div className="tour-pic4"></div>
                                        <div className="tour-pic5"></div>
                                        <div className="tour-pic6"></div>
                                        <div className="tour-pic7"></div>
                                        <div className="tour-pic8"></div>
                                    </div>
                                    <div className="tour-footer">
                                        <div className="tour-text">See all (11) pics</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="room-map-container">
                            <div className="room-map-header">
                                <div className="location-text">
                                    <div>Location</div>
                                </div>
                                <div className="location-subtext">
                                    <div>{this.state.property[0].city}, {this.state.property[0].state}, {this.state.property[0].country}</div>
                                </div>
                            </div>
                            <img id="map" src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.lat},${this.state.long}&zoom=13&size=${this.state.size}&maptype=roadmap&markers=color:green%7Clabel:G%7C${this.state.lat},${this.state.long}&key=AIzaSyAVpnn99NumKKO-dn2bvgA6PC4fDFB3pTs`} />
                            <div className="room-map-footer" />
                        </div>
                    </div>
                    <div className="rent-box" id="rent-box">
                        <div className="rent-box-border">
                            <div className="rent-inner-box">
                                <div className="room-price-container">
                                    <div className="price-per-night-container">
                                        <div className="price-per-night-font-1">${this.state.property[0].price}</div>
                                        <div className="price-per-night-font-2">per night</div>
                                    </div>
                                    <div className="price-per-night-stars-container">
                                        <div className="star-color">★★★★★</div><div className="stars-total">392</div>

                                    </div>
                                </div>

                                <div className="number-of-nights-container">
                                    <div className="number-of-nights-text">Number of nights</div>
                                    <div className="nights-box-container">
                                        <div className="night-box">
                                            <div>1</div>
                                        </div>
                                        <div className="night-box">
                                            <div>2</div>
                                        </div>
                                        <div className="night-box">
                                            <div>3</div>
                                        </div>
                                        <div className="night-box">
                                            <div>4</div>
                                        </div>
                                        <div className="night-box">
                                            <div>5</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="number-of-nights-container">
                                    <div className="number-of-nights-text">Number of Guests</div>
                                    <div className="nights-box-container">
                                        <div className="night-box">
                                            <div>1</div>
                                        </div>
                                        <div className="night-box">
                                            <div>2</div>
                                        </div>
                                        <div className="night-box">
                                            <div>3</div>
                                        </div>
                                        <div className="night-box">
                                            <div>4</div>
                                        </div>
                                        <div className="night-box">
                                            <div>5</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rent-button-container">
                                    <div className="rent-button" onClick={() => this.bookProperty()}>
                                        <div >{this.state.property[0].booked ? 'Unavailable' : 'Book'}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else{
      return(
        <div></div>
      )
    }
  }
}
