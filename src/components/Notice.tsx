import React from "react";
import { NoticeContainer } from "./styled";

const Notice: React.FC<Notice> = (props: Notice) => {
  return (
    <>
      <NoticeContainer
        className={props.visible ? "p-3" : "d-none"}
        style={{
          backgroundColor:
            props.type === "SUCCESS"
              ? "rgba(152, 250, 180, 0.5)"
              : "rgba(255, 47, 0, 0.5",
        }}
      >
        <p
          style={{
            textAlign: "center",
            margin: 0,
            fontSize: 18,
            color: "black",
          }}
        >
          {props.content}
        </p>
      </NoticeContainer>
    </>
  );
};

export default Notice;
