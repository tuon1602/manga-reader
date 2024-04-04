import { NextResponse } from "next/server"
import { getCategories } from "@/app/actions"

export async function GET(){
    const category = await getCategories()
    if(category){
         return NextResponse.json(category)
    }
    else{
        return NextResponse.json({error:"there is something wrong with api"})
    }
}