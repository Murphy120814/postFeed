import React, { useState } from "react";
import postPNG from "../assets/paper-plane.png";
import { useDispatch } from "react-redux";
import { addPost } from "../slices/userSlice";

const initialState = {
  name: "",
  title: "",
  comment: "",
};

const resetField = () => ({
  name: "",
  title: "",
  comment: "",
});
import { Button, InputField } from "../utils/index";
function UserInputForm() {
  const dispatch = useDispatch();
  const [userPostInfo, setUserPostInfo] = useState(initialState);
  const canSave =
    Boolean(userPostInfo.name) &&
    Boolean(userPostInfo.title) &&
    Boolean(userPostInfo.comment);
  return (
    <form
      className="p-4 flex flex-col gap-2 rounded-xl mb-4"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(
          addPost(userPostInfo.name, userPostInfo.title, userPostInfo.comment)
        );
        setUserPostInfo(resetField());
      }}>
      <InputField
        name="Name"
        Type="input"
        value={userPostInfo.name}
        onChange={(event) =>
          setUserPostInfo({
            ...userPostInfo,
            name: event.target.value,
          })
        }
        className="p-2 bg-slate-300 rounded-xl text-black outline-none"
      />
      <InputField
        name="Title"
        Type="input"
        value={userPostInfo.title}
        onChange={(event) =>
          setUserPostInfo({
            ...userPostInfo,
            title: event.target.value,
          })
        }
        className="p-2 bg-slate-300 rounded-xl text-black outline-none"
      />
      <InputField
        name="Comment"
        Type="textarea"
        value={userPostInfo.comment}
        onChange={(event) =>
          setUserPostInfo({
            ...userPostInfo,
            comment: event.target.value,
          })
        }
        className="p-2 bg-slate-300 rounded-xl text-black outline-none min-h-[100px]"
      />
      <Button
        className="self-end disabled:bg-orange-200 disabled:cursor-not-allowed"
        type="submit"
        disabled={!canSave}>
        <div className="flex gap-2 items-center">
          <img src={postPNG} alt="post icon" className="w-[15px] h-[15px]" />
          <span>Post</span>
        </div>
      </Button>
    </form>
  );
}

export default UserInputForm;
