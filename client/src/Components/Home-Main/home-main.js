import React, {Component} from 'react'
import '../Header/header.css'

export default class HomeMain extends Component {

    searchClick() {
        window.location = __dirname + '/search-condos'
    }

    render() {
        return (
            <div>
                    <div className="header-main">
                        <h1 className="housebnb-text">Housebnb</h1>
                        <h1 className="housebnb-text-2">Book unique homes and experiences</h1>
                        <h1 className="housebnb-text-3">all over the world.</h1>
                        <div className="header-search-container">
                            <div className="glass-icon" />
                            <input placeholder='Try "Salt Lake City"'></input>
                            <div className="search-box" onClick={() => this.searchClick()}>
                                <p>Search</p>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
