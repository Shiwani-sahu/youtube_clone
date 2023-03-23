// import React from 'react'
// import {Box , CardContent , CardMedia , Typography} from '@mui/material';
// import {CheckCircle} from '@mui/icons-material';
// import {Link} from 'react-router-dom' ;
// import {
//   demoThumbnailUrl,
//   demoChannelUrl,
//   demoChannelTitle,
// } from "../utils/constants";

// const ChannelCard = ({channelDetail , marginTop}) => {
//   return (
//   <Box 
//   sx ={{
//     boxShadow : 'none' ,
//     borderRadius : '20px',
//     display : 'flex',
//     justifyContent: 'center' ,
//     alignItems: 'center',
//     width : {xs : '356px' , md:'320px'},
//     height:'326px',
//     margin:'auto',
//     marginTop,

//   }}
//   >
// <Link to = {channelDetail?.snippet?.channelId ? `/channel/$ {channelDetail?.snippet?.channelId}` : demoChannelUrl }>

// <CardMedia 
// image ={channelDetail?.snippet ?. thumbnails?.medium?.url}  

//         alt ={channelDetail?.snippet?. channnelTitle}
//         sx ={{ width : 250 , height :180}} />
//         </Link>
//         <CardContent sx ={{ display :'flex' , flexDirection: 'column' ,justifyContent: 'center' ,textAlign : 'center' ,
//         color:"#fff"
//         }}>
//             <Link to = {channelDetail?.snippet?.channelId ? `/channel/$ {channelDetail?.snippet?.channelId}` : demoChannelUrl }>
//             <Typography variant ="h6"
//             fontWeight = "bold" color ="#FFF">
//               {channelDetail?.snippet?.title 
           
//               }
//  <CheckCircle sx ={{fontSize :14 , color: 'gray' , m1:"5px" }} />
//             </Typography>
// {channelDetail?.statistics?.subscriberCount &&(
//   <Typography>
//     {parseInt(channelDetail?.statistics?.
//       subscriberCount).toLocaleString()} Subscribers
//   </Typography>
// )}
//             </Link>
// </CardContent>
// </Box>
// );
            
// };
// export default ChannelCard;
import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  demoChannelUrl,
  demoProfilePicture,
   demoVideoUrl,
} from "../utils/constants";
const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        margin: "auto",
        height: "326px",
        marginTop,
      }}
    >
      <Link
        to={
          channelDetail?.snippet?.channelId
            ? `/channel/${channelDetail.snippet?.channelId}`: demoChannelUrl
        }
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",

            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;