import { makeStyles } from "@material-ui/core/styles";
{
  /* <link href="https://fonts.cdnfonts.com/css/spartan" rel="stylesheet"></link>; */
}

export default makeStyles((theme) => ({
  appBar: {
    height: "80px",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    color: "transparent",
    backgroundColor: "rgba(0,0,0,0.2)",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "800px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  typography: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: "#F8F9FA",
    fontFamily: "Spartan",
    fontWeight: "700",
    fontSize: "20px",
    marginLeft: "50px",
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    underline: "none",
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: "15px",
    fontWeight: "700",
    alignItems: "center",
    marginRight: "5px",
    marginLeft: "5px",
  },
  socialContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: "70px",
  },
  separation: {
    color: "#F8F9FA",
    fontFamily: "Spartan",
    fontWeight: "700",
    fontSize: "20px",
  },
  container: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
