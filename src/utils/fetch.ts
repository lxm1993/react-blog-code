import { config } from "../config";

/**
 * 获取文章列表
 * @param githubRepo 
 * @returns 
 */
export const fetchPostList = (githubRepo: string): any => {
    return new Promise((resolve, reject) => {
        const url = `https://api.github.com/repos/${config.githubUserName}/${githubRepo}/issues`;
        fetch(url)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                if (!Array.isArray(data)) {
                    resolve({})
                    return;
                }
                const articleMap: any = {};

                const posts = data
                    .filter((item: any) => item.state === "open");
                posts.forEach((item: any) => {
                    const firstTag = item.labels && item.labels[0] || {};
                    const tag = firstTag.name || '其他';
                    if (!articleMap[tag]) {
                        articleMap[tag] = {
                            description: firstTag.description || '其他',
                            color: firstTag.color,
                            artList: [],
                        };
                    }
                    articleMap[tag].artList.unshift({
                        id: item.number,
                        title: item.title,
                        labels: item.labels,
                        url: item.html_url,
                        date: item.created_at.substring(0, 10),
                    })
                })
                resolve(articleMap);
            }).catch(e => {
                reject(e)
            });
    })
}