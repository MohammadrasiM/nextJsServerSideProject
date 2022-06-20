import React from "react";
import axios from "../components/Services/Services";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
const divStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};
export default function posts({ posts }) {
  return (
    <Card sx={{ maxWidth: 480 }}>
      <CardActionArea>
        <CardContent>
          <div style={divStyle}>
            {" "}
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              {posts?.title}
              <bt />
            </Typography>
            <Typography variant="h5" component="div">
              {" "}
              User id: {posts?.userId}
            </Typography>
            <bt />
            <bt />
            {"  "}
            <Typography variant="body2" color="text.secondary" align="center">
              {posts?.body}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
}

export async function getServerSideProps({ params }) {
  const result = await axios(`/posts/${params?.id}`);

  return {
    props: {
      posts: result?.data,
      seo: {
        title: result?.data?.title || "",
        description: result?.data?.body || "",
      },
    },
  };
}
