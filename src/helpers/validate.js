const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/

export function validName(name) {
    if(name.length >= 3) return true
    return false
}

export function validEmail(email) 
{
    if (emailRegex.test(email)) return true
    return false
}
