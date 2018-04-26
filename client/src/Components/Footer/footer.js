import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="gray-dividing-line" />
                <div className="first-footer-container" id="footer-1">
                    <div className="inner-footer-container">
                        <div className="first-footer-div">
                            <select id="language" className="footer-select-1">
                                <option>English</option>
                                <option value="Spanish">Spanish</option>
                                <option value="French">French</option>
                                <option value="Japanese">Japanese</option>
                                <option value="Chinese">Chinese</option>
                            </select>
                            <select id="currency" className="footer-select-2">
                                <option>Dollar</option>
                                <option value="Peso">Peso</option>
                                <option value="Euro">Euro</option>
                                <option value="Yen">Yen</option>
                                <option value="Yuan">Yuan</option>
                            </select>
                        </div>
                        <div className="second-footer-div">
                            <div className="second-footer-header">
                                Housebnb
                            </div>
                            <div className="second-footer-body">
                                <div className="hover-underline">About us</div>
                                <div className="hover-underline">Careers</div>
                                <div className="hover-underline">Press</div>
                                <div className="hover-underline">Policies</div>
                                <div className="hover-underline">Help</div>
                                <div className="hover-underline">Diversity & Belonging</div>
                            </div>
                        </div>
                        <div className="second-footer-div">
                            <div className="second-footer-header">
                                Discover
                            </div>
                            <div className="second-footer-body">
                                <div className="hover-underline">Trust & Safety</div>
                                <div className="hover-underline">Travel Credit</div>
                                <div className="hover-underline">Gift Cards</div>
                                <div className="hover-underline">Housebnb Citizen</div>
                                <div className="hover-underline">Business Travel</div>
                                <div className="hover-underline">Guidebooks</div>
                                <div className="hover-underline">Housebnbmag</div>
                            </div>
                        </div>
                        <div className="second-footer-div">
                            <div className="second-footer-header">
                                Hosting
                            </div>
                            <div className="second-footer-body">
                                <div className="hover-underline">Why Host?</div>
                                <div className="hover-underline">Hospitality</div>
                                <div className="hover-underline">Responsible Hosting</div>
                                <div className="hover-underline">Community Center</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="skinny-footer-container" id="footer-2">
                    <div className="skinny-footer-left-div">
                        <div className="little-logo"> </div>
                        <div>©</div>
                        <div>Housebnb, Inc.</div>
                </div>
                        <div className="skinny-footer-right-div">
                            <div>Terms</div>
                            <div>Privacy</div>
                            <div>Site Map</div>
                            <div className="facebook-logo" />
                            <div className="twitter-logo" />
                            <div>
                            </div>
                        </div>
                    </div>
                    </div>
                    )
    }
}