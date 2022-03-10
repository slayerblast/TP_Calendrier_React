import React from "react";
import { Calendrier } from "./Date/calendrier";
import { Fragment } from "react";



export function FormCalendrier()
{
    const { calendarRows, selectedDate, todayFormatted, getNextMonth, getPrevMonth,jour,mois,getNextYear, getPrevYear, } = Calendrier();
    console.log(selectedDate.getFullYear())

    return(
        <Fragment>
          <h1>  <a href="#" onClick={getPrevMonth}>&lt;&lt;</a>    {`${mois[selectedDate.getMonth()]}`} <a href="#" onClick={getNextMonth}>&gt;&gt;</a>  </h1> 
          <h1>  <a href="#" onClick={getPrevYear}>&lt;&lt;</a>    {`${selectedDate.getFullYear()}`} <a href="#" onClick={getNextYear}>&gt;&gt;</a>  </h1> 
          <table className="table">
            <thead>
              <tr>
                {jour.map(day => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {
                Object.values(calendarRows).map(cols => {
                  return <tr key={cols[0].date}>
                    {cols.map(col => (
                      col.date === todayFormatted
                        ? <td key={col.date} className={`${col.classes} today`}>
                          {col.value}
                        </td>
                        : <td key={col.date} className={col.classes}>{col.value}</td>
                    ))}
                  </tr>
                })
              } 
            </tbody>
          </table>
        </Fragment>
      );






    
}

