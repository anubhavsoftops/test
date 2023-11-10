import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useQuery } from "react-query";

export const Home: React.FC = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    )
  );

  if (isLoading) return <> Loading...</>;

  if (error) return <>{"An error has occurred: " + error}</>;

  return ( 
    <>
      <div>
        <Grid container spacing={5}>
          {data.map((data: any,idx:number) => (
            <>
              <Grid key={idx} item xs={6} md={4} lg={3}>
                <Box style={{width:'100%',height:'10rem',padding:'5px 15px',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
                 <Typography>{data.title}</Typography>
                 <Typography>{data.body}</Typography>
                </Box>
              </Grid>
            </>
          ))}
        </Grid>
      </div>
    </>
  );
};
