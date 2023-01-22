import dayjs from "dayjs"


export function generateDays(){
    const fistDay = dayjs().startOf('year')
    const today = new Date()

    const dates = []
    let compareDate = fistDay

    while (compareDate.isBefore(today)){
        dates.push(compareDate.toDate())
        compareDate = compareDate.add(1,'day')
        
    }

    return dates
}