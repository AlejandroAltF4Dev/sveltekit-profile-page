import {getDatabase} from "$lib/notion.api.js";

export async function get() {
    const works = await getDatabase('a5b1e98a5f674421ac4cc8117f2da1b9');
    const companies = await getDatabase('a218bdcf395845bbbbb43ed748b69105');
    const hero = await getDatabase('c1221feee4ad43938ba0cf605fee88f2');
    const techs = await getDatabase('3f023ccdd9b643d18f58c353cee759fd');
    return {
        body: {
            data: {
                hero,
                companies,
                works,
                techs
            }
        }
    }
}