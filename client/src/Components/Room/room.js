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
            // address: 'California',
            // lat: "41.223",
            // long: "-111.9738304",
            size: "600x600"
        }
        this.scroller = this.scroller.bind(this)
    }

    componentDidMount() {
      axios.get(`/api/property/${this.props.match.params.id}`, { withCredentials: true })
      .then(res => {
        this.setState({
          property: res.data,
        })
        const roomSearch = document.getElementById('room-search-bar')
        roomSearch.className = "room-search-bar-on"
        this.scroller()

        const pic2 = document.getElementById('pic-2')
        const pic3 = document.getElementById('pic-3')
        const pic4 = document.getElementById('pic-4')
        const pic5 = document.getElementById('pic-5')
        const pic6 = document.getElementById('pic-6')
        const pic7 = document.getElementById('pic-7')
        const pic8 = document.getElementById('pic-8')

        pic2.style = "background-image: url('https://images.unsplash.com/photo-1480434935263-07efee66f5b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b274c9b9f4ff75ac33119c2fb9c35e65&auto=format&fit=crop&w=1350&q=80')"
        pic3.style = "background-image: url('https://images.unsplash.com/photo-1455831843141-7279e47411f7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89c04c9933fe65feab286f226e845134&auto=format&fit=crop&w=1350&q=80')"
        pic4.style = "background-image: url('https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-0.3.5&s=00991cd2db7692320d8625fe09391e87&auto=format&fit=crop&w=1350&q=80')"
        pic5.style = "background-image: url('https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-0.3.5&s=18443ea3849d7542c4a93de0a29d36c8&auto=format&fit=crop&w=1350&q=80')"
        pic6.style = "background-image: url('https://images.unsplash.com/photo-1484061263732-b8b0a5ae7db6?ixlib=rb-0.3.5&s=e4d68bc0bda14a8a8ac389686645bfaf&auto=format&fit=crop&w=1350&q=80')"
        pic7.style = "background-image: url('https://images.unsplash.com/photo-1496664444929-8c75efb9546f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a3a5e87267175e106954c7e76bd968b9&auto=format&fit=crop&w=1350&q=80')"
        pic8.style = "background-image: url('https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c8c144e8e71f0226b0f87f157ba468a&auto=format&fit=crop&w=1351&q=80')"
      }
    ).catch(error => console.log(error))

    }




    scroller() {
        window.onscroll = () => {
            if (this.state.scrollPosition > 800) {
                const rentBox = document.getElementById('rent-box')
                rentBox.className = "rent-box-fixed"
            } else if (this.state.scrollPosition < 800) {
                const rentBox = document.getElementById('rent-box')
                rentBox.className = "rent-box"
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
                        //console.log(this.state)
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
                                                <div>Logan, Your Host</div>
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
                                        <div className="tour-pic" id="pic-1"></div>
                                        <div className="tour-pic" id="pic-2"></div>
                                        <div className="tour-pic" id="pic-3"></div>
                                        <div className="tour-pic" id="pic-4"></div>
                                        <div className="tour-pic" id="pic-5"></div>
                                        <div className="tour-pic" id="pic-6"></div>
                                        <div className="tour-pic" id="pic-7"></div>
                                        <div className="tour-pic" id="pic-8"></div>
                                    </div>
                                    <div className="tour-footer">
                                        <div className="tour-text">See all (11) pics</div>
                                    </div>
                                </div>

                            </div>
                            {/**<div className="housebnb-ad-container">
                                <div className="ad-inner-container">
                                    <div className="ad-inner-text-container">
                                        <div className="ad-header">
                                            <div className="ad-logo" />
                                            <div className="ad-plus">
                                                <div>Plus</div>
                                            </div>

                                        </div>
                                        <div className="ad-subheader">
                                            <div>A selection of homes verified for quality & comfort</div>
                                        </div>
                                        <div className="ad-body">
                                            <div>Every home in Airbnb Plus must pass an in-person quality inspection to ensure it meets high standards of comfort, quality, and style.</div>
                                        </div>
                                        <div className="ad-footer">
                                            <div>Learn more</div>
                                        </div>
                                    </div>


                                </div>
                            </div> **/}

                        </div>
                        <div className="room-map-container">
                            <div className="room-map-header">
                                <div className="location-text">
                                    <div>Location</div>
                                </div>
                                <div className="location-subtext">
                                    <div>{this.state.property[0].city}, {this.state.property[0].state}, {this.state.property[0].country}</div>
                                </div>
                                {/**<div className="location-body-container">
                                    <div className="location-body-left">
                                        <div>West Los Angeles is very walkable. The home is in a single family neighborhood There are grocery stores and restaurants within a mile of the house, and Santa Monica pier and beach are nearby. Plenty of free street parking within a block of the house.</div>
                                    </div>
                                    <div className="location-body-right-container">
                                        <div className="location-body-right-header">
                                            <div>Distance from Los Angeles International Airport</div>
                                        </div>
                                        <div className="location-body-right-body">
                                            <div>13 mins by car without traffic</div>
                                        </div>
                                    </div>
                                </div>**/}
                            </div>
                            <img id="map" src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.property[0].lattitude},${this.state.property[0].longitude}&zoom=13&size=${this.state.size}&maptype=roadmap&markers=color:green%7Clabel:G%7C${this.state.property[0].lattitude},${this.state.property[0].longitude}&key=AIzaSyAVpnn99NumKKO-dn2bvgA6PC4fDFB3pTs`} />
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
