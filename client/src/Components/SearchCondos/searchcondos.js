import React, { Component } from 'react'
import './searchcondos.css'
import axios from 'axios'
import { connect } from "react-redux";

import SearchHeader from '../SearchHeader/searchheader'

class SearchCondos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hover: '',
            address: 'California',
            lat: "40.761806",
            long: "-111.890534",
            size: "600x600",
            searchResults: []
        }
    }

    componentWillReceiveProps(props) {

        this.setState({ searchResults: props.searchResults })

    }

    componentDidMount() {
        console.log(333, this.props.match.params)

        axios.get(`/api/properties/${this.props.match.params.query}`, {widthCredentials: true})
            .then(res => {
                this.setState({
                    searchResults: res.data,
                }, console.log(4444, this.state))

                const footer1 = document.getElementById('footer-1')
                const footer2 = document.getElementById('footer-2')
                footer1.style = "display: none;"
                footer2.style = "display: none;"

            })
    }

    addressInput(e) {
        this.setState({ address: e }, () => console.log(this.state))
    }

    getLat() {
        var HttpClient = function () {
            this.get = function (aUrl, aCallback) {
                var anHttpRequest = new XMLHttpRequest();
                anHttpRequest.onreadystatechange = function () {
                    if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                        aCallback(anHttpRequest.responseText);
                }

                anHttpRequest.open("GET", aUrl, true);
                anHttpRequest.send(null);
            }
        }

        var client = new HttpClient();
        client.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.address}&key=AIzaSyAgIZ-A0dS_YP6vEoa7C3To4go4jlAhJ_g`, (response) => {
            response = JSON.parse(response)
            this.setState({ lat: response.results[0].geometry.location.lat, long: response.results[0].geometry.location.lng }, () => console.log(this.state))
        })
    }

    render() {
        console.log('test', this.props, 'state is here', this.state)
        return (
            <div>
                <SearchHeader />
                <div className="search-condos-container">
                    <div className="search-condos-left">





                        {this.state.searchResults.map(item => {

                            return (

                                    <div className="search-condos-item" onClick={() => this.getLat()}>
                                                                <a href={`/room/${item.property_id}`} className="search-condos-picture" style={{backgroundImage: `url(${item.image_med})`}}>

                                        </a>
                                        <div className="search-condo-rooms-font">{item.room_type}</div>
                                        <div className="search-condo-name-font">{item.property_name}</div>
                                        <div className="search-condo-price-font">${item.price}</div>
                                        <div className="search-ratings-container">
                                            <div className="search-stars-container">
                                                <p className="search-star-color">★★★★★</p>
                                                <p>(139)</p>
                                            </div>
                                            <p>• Superhost</p>
                                        </div>

                                    </div>

                            )
                        })}




                    </div>
                    <div className="search-condos-right">
                        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.lat},${this.state.long}&zoom=13&size=${this.state.size}&maptype=roadmap
                        &markers=color:green%7Clabel:G%7C${this.state.lat},${this.state.long}&key=AIzaSyAVpnn99NumKKO-dn2bvgA6PC4fDFB3pTs
                        &markers=color:green%7Clabel:G%7C41.242075,-111.947893&key=AIzaSyAVpnn99NumKKO-dn2bvgA6PC4fDFB3pTs`} />
                        <input onChange={(event) => this.addressInput(event.target.value)}></input>
                        <button onClick={() => this.getLat()}>Button</button>
                    </div>
                </div>
                <div className="search-condos-footer-container">Enter dates to see full pricing. Additional fees apply. Taxes may be added.</div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return (
        state
    )
}

export default connect(mapStateToProps)(SearchCondos)
