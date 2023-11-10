import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import axios from "axios";

function FollowButton () {

    const styles = {
        "&.MuiButton-unfollow": {
          backgroundColor: 'gray'
        },
        "&.MuiButton-follow": {
          color: "grey"
        }
      };

    const [title, setTitle] = useState("Follow");

    function changeTitle(){
        if (title == "Follow") {
            setTitle("Following");
            // axios
            // .post("http://localhost:6969/follow", 1)
            // .catch((err) => {
            //     if(err) throw(err);
            // });
            console.log("Recebi follow");
        } else {
            setTitle("Follow");
            // axios
            // .post("http://localhost:6969/follow", 2)
            // .catch((err) => {
            //     if(err) throw(err);
            // });
            console.log("Recebi unfollow");
        }
    }


    return (
            <Button
            style={{marginLeft : '2rem'}}
            variant="contained"
            onClick={changeTitle}
            sx={{
                bgcolor: (title === 'Following') ? 'gray' : 'primary.main',
                ":hover": {
                    bgcolor: (title === 'Following') ? 'gray' : 'primary.main',
                }
            }}>{title}</Button>
    );
}

export default FollowButton;