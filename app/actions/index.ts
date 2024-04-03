import {
  HOME_API,
  CATEGORIES_API,
  SEARCH_API,
  MANGALIST_API,
  MANGADETAILS_API,
  GET_MANGA_IMAGES_API,
  GETMANGABYCATEGORY_API
} from "@/constants";

export async function getHomeDetail() {
  const res = await fetch(HOME_API, {
    next: {
      revalidate: 200,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getCategories() {
  const res = await fetch(CATEGORIES_API, {
    cache: "force-cache",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getMangaByCategory(keyword:string,page:number){
  const res = await fetch(`${GETMANGABYCATEGORY_API}/${keyword}?page=${page}`, {
    next:{
      revalidate:200
    },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getSearchMangas(keyword: string) {
  const res = await fetch(`${SEARCH_API + `${keyword}`}`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getListMangaByKeyword(keyword: string, page: number) {
  const res = await fetch(`${MANGALIST_API + `${keyword}`}?page=${page}`, {
    next: {
      revalidate: 200,
    },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getMangaDetail(slug: string) {
  const res = await fetch(`${MANGADETAILS_API + `${slug}`}`, {
    next: {
      revalidate: 200,
    },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getImageDetail(id: string) {
  const res = await fetch(`${GET_MANGA_IMAGES_API + `${id}`}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
