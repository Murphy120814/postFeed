import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserState } from "../slices/userSlice";
import UserPost from "./UserPost";

function UserPostList() {
  const { userPost } = useSelector(selectUserState);
  const [showIndex, setShowIndex] = useState(0);
  return (
    <div className="w-full rounded-xl p-4">
      {userPost?.map((userPost, index) => (
        <UserPost
          userPost={userPost}
          index={index}
          showItem={index === showIndex}
          setShowIndex={setShowIndex}
          key={userPost.id}
        />
      ))}
    </div>
  );
}

export default UserPostList;
