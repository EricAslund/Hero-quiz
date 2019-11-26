import React, { Component } from 'react';
// import Add from '../..//components/addRepositories';
// import Repositorios from '../../components/repositories';

// import { connect } from "react-redux";



class Result extends Component {

    render() {
        return (
            <div>
               <h1> hi</h1>
                {/* <Add />

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

export default Result;