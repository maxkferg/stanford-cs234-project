import React, { Component } from 'react';
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import ApolloClient from "apollo-boost";
import Typography from '@material-ui/core/Typography';
import Wheels from './wheels.js';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  section:{
    paddingBottom: "100px",
  }
});



class Home extends Component {
  constructor(props) {
    super(props);
  }

  createClient() {
    // Initialize Apollo Client with URL to our server
    return new ApolloClient({
      link: new HttpLink({
        uri: 'http://localhost:5000/graph.ql'
      }),
      connectToDevTools: true,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      // Feed the client instance into your React component tree
      <ApolloProvider client={this.createClient()}>
        <section className={classes.section}>
            <Typography variant="display1" align="center">Wheels</Typography>
            <Wheels />
        </section>
      </ApolloProvider>
    );
  }
}

export default withStyles(styles)(Home);