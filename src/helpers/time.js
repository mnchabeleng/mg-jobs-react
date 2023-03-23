import moment from 'moment'

function formatMomentsAgoString(dateTimeVal, dateTimeStr) {
    return dateTimeVal + (dateTimeVal > 1 ? ` ${ dateTimeStr }s` : dateTimeStr) + ' ago'
}

export function defaultDate(dateTime) {
    return moment(dateTime).format('D MMMM YYYY')
}

export function compareDates(firstDate, secondDate) {
    const fDate = moment(firstDate)
    const sDate = moment(secondDate)

    if(fDate > sDate) return 1

    if(fDate < sDate) return -1

    return 0
}

export function momentsAgo(dateTime) {
    const now = moment()

    const years = now.diff(dateTime, 'years')
    const months = now.diff(dateTime, 'months')
    const weeks = now.diff(dateTime, 'weeks')
    const days = now.diff(dateTime, 'days')
    const hours = now.diff(dateTime, 'hours')
    const minutes = now.diff(dateTime, 'minutes')
    const seconds = now.diff(dateTime, 'seconds')

    if(years > 0) return formatMomentsAgoString(years, 'year')

    if(months > 0) return formatMomentsAgoString(months, 'month')

    if(weeks > 0) return formatMomentsAgoString(weeks, 'week')

    if(days > 0) return formatMomentsAgoString(days, 'day')

    if(hours > 0) return formatMomentsAgoString(hours, 'hour')

    if(minutes > 0) return formatMomentsAgoString(minutes, 'minute')

    if(seconds > 0) return formatMomentsAgoString(seconds, 'second')

    return ''
}