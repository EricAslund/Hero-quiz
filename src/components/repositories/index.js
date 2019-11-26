import React, { Component } from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';
import './style.css';
import Remove from '../icons/remove.svg';
import Reload from '../icons/reload.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Creators as RepositoryActions } from "../../store/ducks/repositores";


class Repositories extends Component {

    render() {
        return (
            <Grid.Column className="column">
                <Card >
                    <Card.Content>
                        {console.log('card', this.props.repositores)}
                        <div className="empresa">

                            <Image src={this.props.repositores.length !== 0 ? this.props.repositores.image.url : null } wrapped ui={true} width="125" height="200" />
                            <Card.Header className='cardHeader'>{this.props.repositores.name}</Card.Header>
                            <ul>
                                <li><a>
                                {this.props.repositores.name}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="icons">
                            <a onClick={() => this.props.submitrefresh(this.props.repositores.full_name)}>
                                <img src={Reload} />
                            </a>
                            <a onClick={() => this.props.deleter(this.props.repositores.id)}>
                                <img src={Remove} />
                            </a>
                        </div>
                    </Card.Content>
                </Card>
            </Grid.Column>)
    }
}
const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(RepositoryActions, dispatch);




export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
