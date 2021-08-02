import{ useState } from 'react'

const useCounter = ( initialState ={ } ) => {
    const [state, setstate] = useState(initialState)

    const yesterday = () => {
        let daymilisecounds = 24 * 60 * 60 * 1000;
        const ayer = new Date(state.date.getTime() - daymilisecounds)
        return ayer;
    }
    const tomorrow = () => {
        let daymilisecounds = 24 * 60 * 60 * 1000;
        const tomorrowdate = new Date(state.date.getTime() + daymilisecounds)
        return tomorrowdate;
    }

    const nextDay = ( ) =>{
        setstate({
            date: new Date(tomorrow().getFullYear(), tomorrow().getMonth(), tomorrow().getDate()),
            day: tomorrow().getDate(),
            month: tomorrow().getMonth() + 1,
            year: tomorrow().getFullYear(),
        })
    }
    const previusDay = ( ) => {
        setstate({
            date: new Date(yesterday().getFullYear(), yesterday().getMonth(), yesterday().getDate()),
            day: yesterday().getDate(),
            month: yesterday().getMonth() + 1,
            year: yesterday().getFullYear(),
        })
    }

    return [state, setstate ,nextDay, previusDay ];

}

export default useCounter;