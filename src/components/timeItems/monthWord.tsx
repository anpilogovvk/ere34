type MonthNameProps = {
    time:Date
}



export const GetNowMonthName = ({time}:MonthNameProps) =>{

    let getMonth = time.getMonth();

    const Months = [
        {id: 0,
          name:'Января'},
        {id: 1,
          name:'Февраля'},
        {id: 2,
          name:'Марта'},
        {id: 3,
          name:'Апреля'},
        {id: 4,
          name:'Мая'},
        {id: 5,
          name:'Июня'},
        {id: 6,
          name:'Июля'},
        {id: 7,
          name:'Августа'},
        {id: 8,
          name:'Сентября'},
        {id: 9,
          name:'Октября'},
        {id: 10,
          name:'Ноября'},
        {id: 11,
          name:'Декабря'},
      ];

      let RealMonth = Months.filter(person => person.id === getMonth)

      return(
        <>
            {RealMonth.map(person =>
            <h1 key={person.id}>{person.name}</h1>)}
        </>
      )
}