
export const domainUrl = "http://ec2-3-85-3-27.compute-1.amazonaws.com/travel-frontend/"
export const getImageUrl = (path) => { 
    return domainUrl+"media/"+path 
}


export const getTripUrl = (id) => {
    return domainUrl+"/trip/"+id
}

export const getEditTrip = (id) => {
    return domainUrl+"/edit-itenarary/"+id
}