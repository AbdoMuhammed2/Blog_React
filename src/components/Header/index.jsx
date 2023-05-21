import React from "react";
import Img from "../../images/bg.jpg";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return <img className={classes.image} src={Img} alt="icon" />;
};

export default Header;
