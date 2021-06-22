import React from "react";

const Notice: React.FC<Notice> = (props: Notice) => {
  return (
    <>
      <div
        className={props.visible ? "p-4" : "d-none"}
        style={{
          position: "absolute",
          bottom: 100,
          right: 50,
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
      </div>
    </>
  );
};

export default Notice;
