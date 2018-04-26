import React, { Component } from 'react'
import axios from "axios"
import './create.css'

export default class Create extends Component {

    constructor(props) {
        super(props)
        this.state = {
            property_user: "1",
            property_name: "",
            summary: "",
            image_med: "",
            street: "",
            city: "",
            state: "",
            country: "",
            postal_code: "",
            latitude: "1234",
            longitude: "5678",
            property_type: "Condominium",
            room_type: "Single room",
            price: "",
        }
    }

    submit() {
        axios.post(__dirname + '/api/add', {withCredentials: true}, this.state)
    }

    render() {
        return (
            <div>
                <div className="create-container">
                    <div className="create-left-container">
                        <div className="create-header">
                            <div>What kind of place are you listing?</div>
                        </div>
                        <div className="create-sub-header">
                            <div>• First, let’s narrow things down</div>
                        </div>
                        <div className="select" defaultValue="Condo" onChange={(e) => this.setState({ property_type: e.target.value })}>
                            <select id="language" className="create-select">
                                <option value="Condo">Condo</option>
                                <option value="Cabin">Cabin</option>
                                <option value="Timeshare">Timeshare</option>
                            </select>
                        </div>
                        <div className="create-sub-header">
                            <div>• Name your property</div>
                        </div>
                        <div className="create-input">
                            <input placeholder="Name" onChange={(event) => this.setState({ property_name: event.target.value }, () => console.log(this.state))}></input>
                        </div>
                        <div className="create-sub-header">
                            <div>• Say a little something about your property</div>
                        </div>
                        <div className="create-input">
                            <input placeholder="Summary" onChange={(event) => this.setState({ summary: event.target.value }, () => console.log(this.state))}></input>
                        </div>
                        <div className="create-sub-header">
                            <div>• What's your address?</div>
                        </div>
                        <div className="create-input">
                            <input placeholder="Street" onChange={(event) => this.setState({ street: event.target.value }, () => console.log(this.state))}></input>
                        </div>
                        <div className="create-input-margin">
                            <input placeholder="City" onChange={(event) => this.setState({ city: event.target.value }, () => console.log(this.state))}></input>
                        </div>
                        <div className="create-input-margin">
                            <input placeholder="State" onChange={(event) => this.setState({ state: event.target.value }, () => console.log(this.state))}></input>
                        </div>
                        <div className="create-input-margin">
                            <input placeholder="ZIP Code" onChange={(event) => this.setState({ postal_code: event.target.value }, () => console.log(this.state))}></input>
                        </div>
                        <div className="create-input-margin">
                            <input placeholder="Country" onChange={(event) => this.setState({ country: event.target.value }, () => console.log(this.state))}></input>
                        </div>
                        <div className="create-sub-header">
                            <div>• How much would you like to rent for? (i.e. $50 a day)</div>
                        </div>
                        <div className="create-input">
                            <input placeholder="Price per day" onChange={(event) => this.setState({ price: event.target.value }, () => console.log(this.state))}></input>
                        </div>
                        <div className="create-sub-header">
                            <div>• Lastly, please copy & paste the URL of your home's picture</div>
                        </div>
                        <div className="create-input">
                            <input placeholder="Picture URL" onChange={(event) => this.setState({ image_med: event.target.value }, () => console.log(this.state))}></input>
                        </div>
                        <div className="create-button-container">
                            <div className="create-button">
                                <div onClick={(

                                ) => this.submit()}>Submit</div>
                            </div>
                        </div>

                    </div>
                    <div className="create-right-container">
                        <div className="create-homes-picture">

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
