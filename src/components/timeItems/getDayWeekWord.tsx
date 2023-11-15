import React from "react";
import { GetNowMonthName } from "./monthWord";






export const  GetNowDayWeek = () => {
    let days =  [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];

    let date = new Date();
    let nowDay = date.getDay();

    return(
        <>
        <div>
            {days[nowDay]},
        </div>
        </>
    )
}