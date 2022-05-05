import React, { useEffect, useState } from "react";
import "./Calender.css";

function Calender() {
  const [monYear, setMonYear] = useState("");
  const [days, setdays] = useState([]);
  const [today, setToday] = useState(new Date());
  const [style, setStyle] = useState("");

  useEffect(() => {
    var date = new Date(today);
    var month_year = date.toLocaleString("default", {
      month: "short",
      year: "numeric",
    });
    setMonYear(month_year);

    var firstDay = parseInt(
      new Date(date.getFullYear(), date.getMonth() + 1).toLocaleString(
        "default",
        {
          day: "2-digit",
        }
      )
    );

    var first = date.getDate() - date.getDay();

    var firstDayofWeek = parseInt(
      new Date(date.setDate(first)).toLocaleString("default", {
        day: "2-digit",
      })
    );
    var lastDays = parseInt(
      new Date(date.getFullYear(), date.getMonth() + 1, 0).toLocaleString(
        "default",
        {
          day: "2-digit",
        }
      )
    );
    var dates = date.getDate();
    var day = date.getDay();
    var startdate = dates - day;
    var arrdays = [];
    var arr = [];
    var newstartdate = dates - day;
    for (let i = 1; i < 8; i++) {
      arr.push(newstartdate++);
    }
    var includes = arr.includes(0) || arr.includes(lastDays);
    var week = ["S", "M", "T", "W", "T", "F", "S"];

    if (includes !== true) {
      for (let i = 1; i < 8; i++) {
        var datas = { week: week[i - 1], Wcss: "", day: startdate++, css: "" };
        arrdays.push(datas);
      }
    } else {
      const condition = firstDayofWeek;
      for (let i = 1; i < 8; i++) {
        if (firstDayofWeek !== lastDays + 1) {
          if (style === true && lastDays + 1 !== condition + 7) {
            var datas = {
              week: week[i - 1],
              day: firstDayofWeek++,
              css: "style-gray",
              Wcss: "",
            };
            arrdays.push(datas);
          } else {
            var datas = {
              week: week[i - 1],
              day: firstDayofWeek++,
              css: "",
              Wcss: "",
            };
            arrdays.push(datas);
          }
        } else {
          if (style === false) {
            var datas = {
              week: week[i - 1],
              Wcss: "",
              day: firstDay++,
              css: "style-gray",
            };
            arrdays.push(datas);
          } else {
            var datas = {
              week: week[i - 1],
              Wcss: "",
              day: firstDay++,
              css: "",
            };
            arrdays.push(datas);
          }
        }
      }
    }
    var currentDate = new Date().getDate();
    var currentMonth = new Date().toLocaleString("default", {
      month: "long",
    });
    var changingMon = today.toLocaleString("default", {
      month: "long",
    });
    var findDate = arr.includes(currentDate);
    var checkarr = [];
    for (let i = 0; i < arrdays.length; i++) {
      if (arrdays[i].css !== "style-gray") {
        checkarr.push(false);
      } else {
        checkarr.push(true);
      }
    }
    var findcheckarr = checkarr.includes(true);
    if (findcheckarr === false) {
      if (changingMon === currentMonth) {
        if (findDate === true) {
          var findIndex = arr.indexOf(currentDate);
          arrdays[findIndex].css = "day-style";
          arrdays[findIndex].Wcss = "week-style";
        }
      }
    }
    setdays(arrdays);
  }, [today]);

  const PreviousWeek = () => {
    setStyle(true);
    var date = new Date(today);
    var first = date.getDate() - date.getDay();
    var firstDayofWeek = parseInt(
      new Date(date.setDate(first)).toLocaleString("default", {
        day: "2-digit",
      })
    );
    var previousweekday = new Date(date.setDate(firstDayofWeek - 1));
    setToday(previousweekday);
  };

  const NextWeek = () => {
    setStyle(false);

    var date = new Date(today);
    var first = date.getDate() - date.getDay();

    var last = first + 6;
    var lastdayOfWeek = parseInt(
      new Date(date.setDate(last)).toLocaleString("default", {
        day: "2-digit",
      })
    );
    var nextdayofweek = new Date(date.setDate(lastdayOfWeek + 1));
    setToday(nextdayofweek);
  };

  return (
    <div className="calender">
      <div className="arrow-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
          onClick={() => PreviousWeek()}
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
        {monYear && <p className="p-month">{monYear}</p>}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
          onClick={() => NextWeek()}
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </div>
      <table className="tables table-borderless">
        <thead>
          <tr className="Calen-thead">
            {days &&
              days.map((weeks, index) => (
                <th className={weeks.Wcss && weeks.Wcss} key={index}>
                  <p> {weeks.week}</p>
                </th>
              ))}
          </tr>
        </thead>
        <tbody className="Calen-tbody">
          <tr>
            {days &&
              days.map((day, index) => (
                <td className={day.css} key={index}>
                  <p>{day.day}</p>
                </td>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calender;
