import express from 'express';
import db from '@repo/db/client';

const app=express()

app.post("/hdfcWebhook",(req,res)=>{
    const paymentInfo={
        token:req.body.token,
        userId:req.body.userId,
        amount:req.body.amount
    }
    db.balance.update({
        where:{
            userId:paymentInfo.userId
        }
        ,data:{
            amount:{
                increment:paymentInfo.amount
            }
        }
    })
})