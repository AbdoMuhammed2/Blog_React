import React from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography, Link,Grid } from '@material-ui/core'
import {Facebook,Twitter,YouTube,Pinterest, SearchRounded} from '@material-ui/icons'
import {AiFillBehanceSquare} from 'react-icons/ai'
import useStyles from './styles'
import {useNavigate } from 'react-router-dom';
const Navbar = () => {
  const classes = useStyles();
  return (
    <>
    <AppBar className={classes.appBar}>
      <Typography className={classes.typography} variant="h6" noWrap>RUNO</Typography>
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent='flex-end'>
          <div className={classes.linkContainer}>
            <Link className={classes.link} to='/' >Home</Link>
            <Link className={classes.link} to='/' >About</Link>
            <Link className={classes.link} to='/' >Articles</Link>
            <Link className={classes.link} to='/' >Contact Us</Link>
          </div>
          <Typography className={classes.separation} variant='h6'>|</Typography>
          <div className={classes.socialContainer}>
            <Link className={classes.link} to='/' ><Facebook /></Link>
            <Link className={classes.link} to='/' ><Twitter /></Link>
            <Link className={classes.link} to='/' ><YouTube /></Link>
            <Link className={classes.link} to='/' ><Pinterest /></Link>
            <Link className={classes.link} to='/'><AiFillBehanceSquare /></Link>
          </div>
          <Typography className={classes.separation} variant='h6'>|</Typography>
          <div className={classes.searchContainer}>
            <Link className={classes.link} to='/' ><SearchRounded /></Link>
          </div>
        </Grid> 
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar
