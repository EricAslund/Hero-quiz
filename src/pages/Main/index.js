import React, { Component, Fragment } from 'react';
import Add from '../../components/addRepositories';
import Repositorios from '../../components/repositories';
import './style.css';


import { connect } from "react-redux";



class Main extends Component {
    
   

    render() {
        return (
            <div>
            <Fragment>
                <h1></h1>
                <h1></h1>
                <Add />
                {console.log("add",  this.props)}
                <h2 className="h2">Who is this in the picture?</h2>

                <div className="flex-container" >
                    {
                        this.props.repositories.map(repo => (
                            <Repositorios key={repo.id} repositores={repo} />))
                    }
                </div>
            
            </Fragment>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    repositories: state.repositores.listRepos
});



export default connect(mapStateToProps)(Main);

