import React, { Component } from 'react';
import { Button, Form } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import './style.css';
import { Creators as RepositoryActions } from "../../store/ducks/repositores";
import { connect } from 'react-redux';

// import { Container } from './styles';

class addRepositories extends Component {
    state = {
        input: '',
        shown: true,

    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.props.clearRepositor();
            this.props.submitRepositor();
           
    }
    handleSubmit2 = async (event) => {
        event.preventDefault();
        this.props.addRepositor();
    }



    render() {

        

        return (
            <div className='Add'>
                <Form onSubmit={this.handleSubmit} >
                 
                            <div >
                                
                                <Button type='submit' >Start</Button>
                            </div>
                        
                </Form>
                 <Form onSubmit={this.handleSubmit2} >
                 
             <div >
                 
                 <Button type='submit' >Start</Button>
             </div>
         
 </Form>
            </div>
            

)
    }
}
const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(RepositoryActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(addRepositories);
