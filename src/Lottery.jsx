import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";
export default function Lottery({n,winCondition})
{
    let [ticket,setTicket]=useState(genTicket(n));
    let buyTicket=()=>{
        setTicket(genTicket(n));
    }
    let isWin = winCondition(ticket);
    return(
        <>
        <h3>Lottery</h3>
        <Ticket ticket={ticket}/>
        <br />
        <Button action={buyTicket}/>
        <br />
        {isWin && "Congratulations, You win 🎊"}
        </>
    )
}