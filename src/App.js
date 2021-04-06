import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CssBaseline, Box } from "@material-ui/core";
import Navbar from "./Components/layout/Navbar"

const useStyles = makeStyles({
  root: {
  
    color: (props) => props.color,
    marginTop:"5px",
    padding:"0 1px"
  },
  box:{}
});

function App(props) {
  
  const classes = useStyles(props);
  
  return (
    <Container maxWidth="xl" className={classes.root}  >
      <CssBaseline />
      <Box className={classes.box}>
        <Navbar />
      </Box>
    </Container>
  );
}

export default App;
