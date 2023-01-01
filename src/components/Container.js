import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import { data } from "../data";
import Moment from "react-moment";

const Container = () => {
  return (
    <Grid container spacing={5} sx={{ backgroundColor: "#f0f3f5" }}>
      <Grid item xs={1}>
        <div class="menu"></div>
      </Grid>
      <Grid item xs={8}>
        <Stack spacing={8}>
          {data.posts.map((d) => (
            <Paper elevation={3} sx={{ padding: "20px" }}>
              <div
                className="row"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="col-lg-9 col-md-9">
                  <p>{d.postContent.slice(0, 200)}...</p>
                  <a target="_blank" href={d.postUrl}>
                    {" "}
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ width: "100%", maxWidth: "100px" }}
                    >
                      <span style={{ textTransform: "capitalize" }}>
                        {" "}
                        See More
                      </span>
                    </Button>
                  </a>
                  <p style={{ fontSize: "14px", marginTop: "15px" }}>
                    <b>Posted At:</b> <Moment>{d.postedAt}</Moment>
                  </p>
                </div>
                <div className="right_con col-lg-3 col-md-3">
                  <h4>{d.userName}</h4>
                  <a target="_blank" href={d.userProfileUrl}>
                    {" "}
                    <Button
                      variant="contained"
                      color="info"
                      sx={{
                        width: "100%",
                        maxWidth: "150px",
                        marginTop: "15px",
                      }}
                    >
                      View Profile
                    </Button>
                  </a>
                </div>
              </div>
            </Paper>
          ))}
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <div class="extra"></div>
      </Grid>
    </Grid>
  );
};

export default Container;
