import React, { Component } from 'react';
import {BASE_URL} from '../../constants/const';

export default class Subsform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ''
        };
    }
    emailChangeHandler = (evt) => {
        this.setState({email : evt.target.value});
    }
    subsHandler = (evt) => {
        evt.preventDefault();
        this.setState(()=>{
            this.state.email = this.state.email.trim();
        })
        try {
            let result = fetch( BASE_URL + 'letter/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            result.then((res) => { 
                if(res.status === 201) {
                    alert("Already Subscribed");
                   
                } else if(res.status === 200) {
                    alert("Successfully Subscribed")
              
                } else {
                    alert("Something went wrong!!");
                }
                this.setState({email:''});
         })
        } catch (error) {
            alert("Something went wrong... Try again.");
        }
    }
    render() {
        return (
            <div className="newsletter">
                <div className="bg-gray-50">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="block">Ready to dive in?</span>
                            <span className="block text-iblue-600">Subscribe to our Newsletters!</span>
                        </h2>
                        <form className="mt-8 lex lg:mt-0 lg:flex-shrink-0" onSubmit={this.subsHandler}>
                            <div className="subs-div inline-flex rounded-md shadow">
                                <input type="email" required
                                value={this.state.email} onChange={this.emailChangeHandler} placeholder="Email"
                                 className="nl-input inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"></input>
                            </div>
                            <div className="inline-flex rounded-md shadow">
                                <button type="submit" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-iblue-600 hover:bg-iblue-700">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>            
        )
    }
}
