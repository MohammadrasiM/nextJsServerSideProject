import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "./components/Services/Services";
import React from "react";
import Grid from "@mui/material/Grid";

export default function Home({ lists }) {
  return (
    <div>
      <Grid container spacing={2}>
        {lists?.map((item) => (
          <Grid item xs={6} lg={3} key={item?.id}>
            <Card sx={{ minWidth: 275, height: "40vh" }}>
              <div className="buttonFixed">
                <CardContent>
                  <Typography variant="h5" component="div" align="center">
                    {item?.title}
                  </Typography>
                  <br />
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    align="center"
                  >
                    User id: {item?.userId}
                  </Typography>
                  <Typography variant="body2" align="center">
                    {item?.body}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={`/posts/${item?.id}`}>
                    <Button size="small">Learn More</Button>
                  </Link>
                </CardActions>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export async function getServerSideProps({ props }) {
  const result = await axios("/posts");

  return {
    props: {
      lists: result?.data,
      seo: { title: "Vitrin", description: "Home page" },
    },
  };
}
