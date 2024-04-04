import { NextRequest, NextResponse } from "next/server"
import { getMangaDetail } from "@/app/actions"

export async function GET(request: NextRequest){
    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get("keyword")
    const manga = await getMangaDetail(keyword as string)
    if(manga){
        return NextResponse.json(manga)
   }
   else{
       return NextResponse.json({error:"there is something wrong with api"})
   }
}