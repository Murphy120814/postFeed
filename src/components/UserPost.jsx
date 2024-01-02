import React, { useState } from "react";
import { Button } from "../utils";
import upArrowPNG from "../assets/upload.png";
import downArrowPNG from "../assets/arrow-down-sign-to-navigate.png";
function UserPost({ userPost, index, showItem, setShowIndex }) {
  const handleClick = () => setShowIndex(index);
  return (
    <div className="mt-4 bg-card-color p-4 rounded-xl">
      <span className="text-2xl font-mono">{userPost.title}</span>
      <div className="flex flex-col mt-2 leading-tight ">
        <span className="text-justify text-slate-100">
          {!showItem && userPost.content.length > 120
            ? userPost.content.slice(0, 120) + "..."
            : userPost.content}
        </span>
        {userPost.content.length > 120 ? (
          <Button onClick={handleClick} className="self-end rounded-full mt-0">
            {
              <img
                src={showItem ? upArrowPNG : downArrowPNG}
                className="w-[15px] h-[15px]"></img>
            }
          </Button>
        ) : null}
      </div>
      <span className="text-button-color">- {userPost.name}</span>
    </div>
  );
}

export default UserPost;
