import React, { useState } from 'react';
import { withFirebase } from '../firebase';

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Typography } from '@material-ui/core';
import Center from 'react-center';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const sideBarStyles = makeStyles(theme => ({
    list: {
        width: 200,
        flex: 1,
        minHeight: window.innerHeight,
        height: "100%",
        borderRight: '1px solid rgb(0,0,0)',
    },
    drawer: {
        top: 30,
    },
    card: {
        minWidth: 300,
        minHeight: 300,
        marginTop: '20px',
        // border: '1px solid rgb(0,0,0)',
        overflow: 'hidden'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
    title: {
        marginTop: '5px',
        fontWeight: 'bold',
    },
    image:{
        maxWidth: 300,
        minWidth: 300,
        maxHeight: 200,
        height: 200
    },
    grid: {
        overflow: 'hidden'
    },
    userIcon: {
        marginLeft: '15px',
        marginTop: '10px',
    },
    requestor:{
        display: 'inline',
        paddingLeft: '10px',
        paddingBottom: '1000px'
    },
    date:{
        display: 'inline',
        paddingLeft: '10px',
        float: 'right',
        marginTop: '10px',
        marginRight: '10px'
    },
    button: {
        margin: theme.spacing(1),
      },
    desc:{
        marginLeft: '15px',
        marginTop: '15px'
    },
    price:{
        float:'right',
        marginRight: '10px',
        marginBottom: '10px',
        color: '#008000'
    }
}));

class Home extends React.Component {
    constructor(props){
        super(props);

        this.state={
            loaded: false,
            jobs: []
        }
    }

    componentDidMount(){
        if(!this.state.loaded){
            var info = this.props.firebase.jobs();
            info.on('value', snapshot => {
                this.setState({
                    loaded: true,
                    jobs: snapshot.val(),
                })
            }, []);
        }
    }

    render(){
        return(
            <div>
                <PersistentDrawer jobs={this.state.jobs} loaded={this.state.loaded} />
            </div>

        );
    }
}

const PersistentDrawer = ({jobs, loaded}) => {
    const classes = sideBarStyles();
    const [search, setSearch] = useState('');

    if(loaded){
        console.log(Object.values(jobs[Object.keys(jobs)[0]]));
    }

    return(
        <div>
        <Grid className={classes.grid} container spacing={3}>
            <Grid item xs={3}>
                <div className={classes.list}>
                    {/* <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                            <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List> */}
                    <TextField
                        id="outlined-name"
                        label="Search"
                        className={classes.textField}
                        value={search}
                        onChange={event => setSearch(event.target.value)}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
            </Grid>
            <Grid item xs={9}>
                <Grid container spacing={10}>
                    {
                        Object.keys(jobs).filter(key => {
                            if(search !== ''){
                                return Object.values(jobs[key])[6].match(
                                    new RegExp(search.split(' ').join('|')
                                          .replace(/["]/g, ""))
                                ) !== null;
                            }else{
                                return true;
                            }
                        }).map(key => (
                                <Grid item xs={5}>
                                    <Card className={classes.card}>
                                        <Typography>
                                            <Center>
                                                <img
                                                    src={Object.values(jobs[key])[2]} 
                                                    alt="new"
                                                    className={classes.image}
                                                />
                                            </Center>
                                            <div>
                                                <AccountCircle className={classes.userIcon} />
                                                <div className={classes.requestor}>
                                                    {Object.values(jobs[key])[5]}
                                                </div>
                                                <Typography className={classes.date}>
                                                    {Object.values(jobs[key])[0]}
                                                </Typography>
                                            </div>
                                            <Center>
                                                <Typography className={classes.desc}>
                                                    {Object.values(jobs[key])[1]}
                                                </Typography>
                                            </Center>

                                            <hr />
                                            
                                            <Typography className={classes.price}>
                                                {Object.values(jobs[key])[4]}
                                            </Typography>
                                            
                                            {/* <Center>
                                                <div className={classes.title}>
                                                    {key.toUpperCase()}
                                                </div>
                                            </Center>
                                            <div>
                                                Requestor: {Object.values(jobs[key])[4]}
                                            </div>
                                            <div>
                                                Description: {Object.values(jobs[key])[1]}
                                            </div> */}
                                        </Typography>
                                    </Card>
                                </Grid>
                        ))
                    }
                </Grid>
                
            </Grid>

        </Grid>
        </div>
    );
}

export default withFirebase(Home);