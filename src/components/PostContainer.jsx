import React from "react";
import { UserPostList, UserInputForm } from "./index";
function PostContainer() {
  return (
    <div className="w-9/12 lg:w-4/12 md:w-6/12  min-h-screen rounded-xl ">
      <UserInputForm />
      <UserPostList />
    </div>
  );
}

export default PostContainer;
