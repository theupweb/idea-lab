import React, { Component } from 'react';
import {BASE_URL} from '../../constants/const';

export class Letterform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heading: '',
            content: ''
        };
    }
    headingChangeHandler = (evt) => {
        this.setState({heading : evt.target.value});
    }
    contentChangeHandler = (evt) => {
        this.setState({content : evt.target.value});
    }
    letterSubmitHandler = (evt) => {
        evt.preventDefault();
        console.log(this.state);
        try {
            let result = fetch( BASE_URL +'letter/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            result.then((res) => { 
                if(res.status === 204) {
                    alert("No Mail in Mailing list");
                   
                } else if(res.status === 200) {
                    alert("Successfully mailed")
            
                } else {
                    alert("Something went wrong!!");
                }
                this.setState({heading:'', content:''});
             })
        } catch (error) {
            alert("Something went wrong");
        }
    }
    render() {
        return (
            <div className="newsletter bg-gray-50">
                <h2 className="mg-bottom text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block text-iblue-600">Publish a Newsletter!</span>
                </h2>
                <form onSubmit={this.letterSubmitHandler}>
                    <label htmlFor="heading">Heading</label>
                    <br></br>
                    <input id="heading" required spellCheck="false"
                    className="nl-input inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50" 
                    type="text" spellCheck="false" value={this.state.heading} onChange={this.headingChangeHandler}/>
                    <br></br>
                    <br></br>
                    <label htmlFor="content">Content</label>
                    <br></br>
                    <textarea spellCheck="false" id="content" required spellCheck="false"
                    className="nl-input inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50" 
                    value={this.state.content} onChange={this.contentChangeHandler}></textarea>
                    <br></br>
                    <br></br>
                    <button type="submit"
                    className="mg-bottom inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-iblue-600 hover:bg-iblue-700"
                    >Publish</button>
                </form>      
            </div>
        )
    }
}

export default Letterform;
