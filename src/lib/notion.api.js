import {Client} from '@notionhq/client'

/**
 * Initialize the Notion client
 */
export const notionClient = new Client({
    auth: String(import.meta.env.VITE_NOTION_TOKEN || process['env']['VITE_NOTION_TOKEN'],
})

/**
 * Notion's DB to pull
 * @param databaseId
 * @returns
 */
export const getDatabase = async (databaseId = notionDatabaseId) => {
    const {results} = await notionClient.databases.query({
        database_id: databaseId, sorts: [{"timestamp": "created_time", "direction": "ascending"}]
    })
    return results
}
export const getDatabases = async () => {
    return await notionClient.search({})
}