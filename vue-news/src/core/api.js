export const getArticles = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(res)
    return res.data.json()
}

export const getArticleByID = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    console.log(await res.json())
}