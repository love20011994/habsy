import React, { useEffect, useState } from "react";
import "./Viewstatus.css";
import WhiteCircle from "./white-circle.svg";
import { useDispatch } from "react-redux";
import Msg from "./Message.json";
import BlueImg from "./blue-icon.svg";
import Level from "../../../../../datas/Data.json";

function ViewStatus(props) {
  const [img, setImg] = useState("");
  const [level, setLevel] = useState(0);

  const dispatch = useDispatch();
  const [msg, setMsg] = useState(false);
  useEffect(() => {
    if (Msg.length !== 0) {
      setMsg(true);
    } else {
      setMsg(false);
    }
    for (let i = 0; i < Level.length; i++) {
      if (props.id === Level[i].id) {
        console.log(Level);
        setLevel(Level[i].level);
      }
    }
    var icons = [
      WhiteCircle,
      WhiteCircle,
      WhiteCircle,
      WhiteCircle,
      WhiteCircle,
    ];
    if (level > 5) {
      alert("Error in levels");
    } else {
      for (let i = 0; i < level; i++) {
        icons.splice(i, 1, BlueImg);
      }
      setImg(icons);
    }
  }, [level]);

  return (
    <div className="Viewstatus-div">
      <div className="Viewstatus">
        <div className="w-100 row">
          <div className="col-6">
            <p>Invoice Status</p>
          </div>
          <div className="col-6 d-flex cancel">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.887"
              height="16.887"
              viewBox="0 0 16.887 16.887"
              onClick={() => dispatch({ type: "close" })}
            >
              <g
                id="Group_23183"
                data-name="Group 23183"
                transform="translate(-1326.527 -75.528)"
              >
                <g
                  id="Group_23181"
                  data-name="Group 23181"
                  transform="translate(1327.942 76.942)"
                >
                  <path
                    id="Path_4230"
                    data-name="Path 4230"
                    d="M14.058,0,0,14.058"
                    fill="none"
                    stroke="#7b7b7b"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
                <g
                  id="Group_23182"
                  data-name="Group 23182"
                  transform="translate(1327.942 76.942)"
                >
                  <path
                    id="Path_4231"
                    data-name="Path 4231"
                    d="M0,0,14.058,14.058"
                    fill="none"
                    stroke="#7b7b7b"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="levels row">
          {img &&
            img.map((val, index) => (
              <div className="level" key={index}>
                <img src={val} style={{ width: 33 }} alt="BlueCircle" />
                <h6>Level{index + 1}</h6>
              </div>
            ))}
        </div>
        <div className="remarks">
          <h6>Remark</h6>
          {msg && Msg.map((val, index) => <p key={index}>{val.message}</p>)}
          <textarea name="remarks" id="remarks" cols="30" rows="3" />
          {msg ? (
            <>
              <button>Send</button>
              {"    "}
              <button>Cancel</button>
            </>
          ) : (
            <button>Reply</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewStatus;
