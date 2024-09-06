function genTicket(n)
{
    let arr = new Array(n);
    for(let i =0; i<arr.length; i++)
    {
        arr[i] = Math.floor(Math.random()*10);
    }
    return arr;
}

let sum=(arr)=>{
    return arr.reduce((prev,curr)=>prev+curr,0);
}

export {genTicket,sum};