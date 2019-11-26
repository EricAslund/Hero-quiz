import React, { Component } from 'react';
// import Add from '../../components/addRepositories';
// import Repositorios from '../../components/repositories';
import './style.css';

// import { connect } from "react-redux";



class Main extends Component {


    render() {
        return (
            <div>
                <h1 className = 'h2'>Welcome</h1>
                
                {/* <Add />
                {/* {console.log("add",  this.props)}

                <div className="flex-container" >
                    {
                        this.props.repositories.map(repo => (
                            <Repositorios key={repo.id} repositores={repo} />))
                    }
                </div> */}
            </div>
        );
    }
}
// const mapStateToProps = state => ({
//     repositories: state.repositores.listRepos
// });

export default (Main);