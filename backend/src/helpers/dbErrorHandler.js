// some configration may be nedd
const getErrorMessage = (err) => {

    let message = ''
    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
            message = getUniqueErrorMessage(err)
            break
            default:
            message = 'Something went wrong'
        }

    } else {

        for (let errName in err.errors) {
            if (err.errors[errName].message)
            message = err.errors[errName].message
        }
    }
    return message
}



const getUniqueErrorMessage = (err) => {
    let output
    try {
        let fieldName =
        err.message.substring(err.message.lastIndexOf('{')+1, err.message.lastIndexOf('}')+1)
        // let  collactionName = err.message.split('.')[1].split(' ')[0]
        output = fieldName.split(':')[0] + " already existes"
    } catch (ex) {
         output = 'Unique field already exists'
    }
    
 return output
}
   


export default {getErrorMessage}
   