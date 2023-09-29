import { useState } from "react";

function FollowButton () {

    const [title, setTitle] = useState("Follow");

    function changeTitle(){
        if (title == "Follow") {
            setTitle("Unfollow");
        } else {
            setTitle("Follow");
        }
    }


    return (
            <button type="button" class="btn btn-success" onClick={changeTitle}>{title}</button>
    );
}

export default FollowButton;