import React, {Component} from 'react'
import './searchheader.css'

export default class SearchHeader extends Component {

    componentDidMount() {
        const searchBar = document.getElementById('search-bar')
        searchBar.className="condos-search-bar"
    }
    
    render() {
        return (
            <div className="search-container">
                <div className="search-header">
                    <div className="search-header-left">
                        <div className="dates-box">
                        Dates
                        </div>
                        <div className="dates-box">
                        Guests
                        </div>
                        <div className="dates-box">
                        House Type
                        </div>
                        <div className="dates-box">
                        Price
                        </div>
                        <div className="dates-box">
                        Instant Book
                        </div>
                        <div className="dates-box">
                        More Filters
                        </div>
                    </div>
                    <div className="search-header-right">
                    1 recently viewed home
                    </div>
                </div>
                <div className="header-bottom-border">

</div>
            </div>
        )
    }
}