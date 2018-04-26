import React, { Component } from 'react'
import './searchcondos.css'
import axios from 'axios'

import SearchHeader from '../SearchHeader/searchheader'

export default class SearchCondos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hover: '',
            address: 'California',
            lat: "40.761806",
            long: "-111.890534",
            size: "600x600"
        }
    }

    componentDidMount() {
        const footer1 = document.getElementById('footer-1')
        const footer2 = document.getElementById('footer-2')
        footer1.style = "display: none;"
        footer2.style = "display: none;"
    }

    addressInput(e) {
        this.setState({address: e}, () => console.log(this.state))
    }

    getLat() {
        var HttpClient = function() {
            this.get = function(aUrl, aCallback) {
                var anHttpRequest = new XMLHttpRequest();
                anHttpRequest.onreadystatechange = function() { 
                    if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                        aCallback(anHttpRequest.responseText);
                }
        
                anHttpRequest.open( "GET", aUrl, true );            
                anHttpRequest.send( null );
            }
        }

        var client = new HttpClient();
        client.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.address}&key=AIzaSyAgIZ-A0dS_YP6vEoa7C3To4go4jlAhJ_g`, (response) => {
            response = JSON.parse(response)
            this.setState({lat: response.results[0].geometry.location.lat, long: response.results[0].geometry.location.lng}, () => console.log(this.state))
        })}

    render() {
        return (
            <div>
                <SearchHeader />
                <div className="search-condos-container">
                    <div className="search-condos-left">
                        <div className="search-condos-item" onClick={() => this.getLat()}>
                            <div className="search-condos-picture">
                            <div className="heart-on">
                            ♡
                            </div>
                                <div className="left-arrow-off" id={this.state.hover}>⇚</div>
                                <div className="right-arrow-off" id={this.state.hover}>⇛</div>
                            </div>
                            <div className="search-condo-rooms-font">2 BEDS, 1 BATH</div>
                            <div className="search-condo-name-font">Vestibulum elementum</div>
                            <div className="search-condo-price-font">$120</div>
                            <div className="search-ratings-container">
                                <div className="search-stars-container">
                                    <p className="search-star-color">★★★★★</p>
                                    <p>(139)</p>
                                </div>
                                <p>• Superhost</p>
                            </div>
                        </div>
                        <div className="search-condos-item" onClick={() => this.getLat()}>
                            <div className="search-condos-picture">
                            <div className="heart-on">
                            ♡
                            </div>
                                <div className="left-arrow-off" id="left-arrow">⇚</div>
                                <div className="right-arrow-off" id="right-arrow">⇛</div>
                            </div>
                            <div className="search-condo-rooms-font">2 BEDS, 1 BATH</div>
                            <div className="search-condo-name-font">Vestibulum elementum</div>
                            <div className="search-condo-price-font">$120</div>
                            <div className="search-ratings-container">
                                <div className="search-stars-container">
                                    <p className="search-star-color">★★★★★</p>
                                    <p>(139)</p>
                                </div>
                                <p>• Superhost</p>
                            </div>
                        </div>
                        <div className="search-condos-item" onClick={() => this.getLat()}>
                            <div className="search-condos-picture">
                            <div className="heart-on">
                            ♡
                            </div>
                                <div className="left-arrow-off" id="left-arrow">⇚</div>
                                <div className="right-arrow-off" id="right-arrow">⇛</div>
                            </div>
                            <div className="search-condo-rooms-font">2 BEDS, 1 BATH</div>
                            <div className="search-condo-name-font">Vestibulum elementum</div>
                            <div className="search-condo-price-font">$120</div>
                            <div className="search-ratings-container">
                                <div className="search-stars-container">
                                    <p className="search-star-color">★★★★★</p>
                                    <p>(139)</p>
                                </div>
                                <p>• Superhost</p>
                            </div>
                        </div>
                        <div className="search-condos-item" onClick={() => this.getLat()}>
                            <div className="search-condos-picture">
                            <div className="heart-on">
                            ♡
                            </div>
                                <div className="left-arrow-off" id="left-arrow">⇚</div>
                                <div className="right-arrow-off" id="right-arrow">⇛</div>
                            </div>
                            <div className="search-condo-rooms-font">2 BEDS, 1 BATH</div>
                            <div className="search-condo-name-font">Vestibulum elementum</div>
                            <div className="search-condo-price-font">$120</div>
                            <div className="search-ratings-container">
                                <div className="search-stars-container">
                                    <p className="search-star-color">★★★★★</p>
                                    <p>(139)</p>
                                </div>
                                <p>• Superhost</p>
                            </div>
                        </div>
                    </div>
                    <div className="search-condos-right">
                        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.lat},${this.state.long}&zoom=13&size=${this.state.size}&maptype=roadmap&markers=color:green%7Clabel:G%7C41.242064,-111.947893&key=AIzaSyAVpnn99NumKKO-dn2bvgA6PC4fDFB3pTs`} />
                        <input onChange={(event) => this.addressInput(event.target.value)}></input>
                        <button onClick={() => this.getLat()}>Button</button>
                    </div>
                </div>
                <div className="search-condos-footer-container">Enter dates to see full pricing. Additional fees apply. Taxes may be added.</div>
            </div>
        )
    }
}