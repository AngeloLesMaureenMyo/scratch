//To hold the the threads (Thread.jsx) & ThreadForm.jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getThreads} from '../actions/actions';
import Thread from './Thread.jsx';
import ThreadForm from './ThreadForm.jsx';

const mapStateToProps = (state) => {
  //
  return { threads: state.threads, userId: state.scratch.user.id};
};

//This Thread component will have two pieces of functionality

//Upon clicking comments div,
//1. Send a fetch request to the server to handle the request for data of all all current thread posts for this parent post. 

//2. Show an input field for the user to enter some text as well as a button to the right to POST. 

class ThreadsContainer extends Component {
    constructor(props) {
      super(props);
    }
//Upon initial render of the ThreadsContainer, fetch the past threads
    componentDidMount() {
        console.log('This is my state', this.props)
        this.props.getThreads(this.props.feedPostID);

        //If there are existing threads, set showThreads to true
  
      }

    renderThreads(){
        console.log('Threads in state', this.props.threads)
        if(Array.isArray(this.props.threads.threads)){
            return this.props.threads.threads.map((thread, i) => {
                return(
                    <Thread
                    key={`Thread ${i}`}
                    alias={thread.alias}
                    body={thread.body}
                    dateTime={thread.createdat}
                    feedPostID = {this.props.feedPostID}
                    styling={thread.user_id === this.props.userId ? 'MyPost' : null}
                    />
                )
            })
        }
    }
    
    render() {
      return (
       //Upon conditional being met, between 
       <center className="ThreadsContainer">

        {this.renderThreads()}
       <ThreadForm feedPostID = {this.props.feedPostID}/>
     </center>
      );
     }
    }

    export default connect(mapStateToProps,{getThreads})(ThreadsContainer);