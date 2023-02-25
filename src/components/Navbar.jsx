// import {Stack} from '@mui/material';
// import {Link } from 'react-router-dom';
// import {SearchBar} from './index.js';
// import {logo} from '../utils/constants';

// const Navbar = () => (
//   <stack
//   direction ="row"
//   alignItems ="center"
//   p = {2}
//   sx ={{ position : 'sticky' , background: '#000' , top :0, justifyContent:' space-between'}} >
//   <Link to = "/" style ={{ display :'flex' , alignItems : 'center'}}>
//     <img src = {logo} alt = "logo" height = {45} />
//   </Link>
//   <h1>hii</h1>
//   </stack>
//   )


// export default Navbar

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./index.js";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#0000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
      </Stack>
);
export default Navbar;


    
