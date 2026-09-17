export async function load(){
    const res = await fetch("https://fdnd.directus.app/items/person/173");
    const data = await res.json();

    return{person: data.data}
}
