export function detectAspectOfMoney( amount ){

    if( !Number(amount) ){
        throw Error(`detectAspectOfMoney() | Given parameter cannot convert to number => amount: ${amount}, type: ${typeof amount}`)
    }

    
}


export function labelTypeDetector(status) {
    return (status === "Active") ? "success" : "warning"; 
}