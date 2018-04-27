import React, {Component} from 'react'
import '../Header/header.css'
import { connect } from "react-redux";
import { search } from '../../reducer'
import axios from 'axios'

class HomeMain extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search_query: ""
        }
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
                            <input placeholder='Try "Salt Lake City"' onChange={(e) => this.setState({search_query: e.target.value})}></input>
                            <a href={`/search-condos/${this.state.search_query}`} className="search-box">
                                <p>Search</p>
                            </a>
                        </div>
                    </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { search })(HomeMain)
