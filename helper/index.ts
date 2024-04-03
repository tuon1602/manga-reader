export function getChapterId(url:string){
    return url.split("/").pop()
}