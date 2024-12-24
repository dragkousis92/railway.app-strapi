// module.exports = {
//     getArticles: async () => {
//         try {
//             // Fetching data
//             const entries = await strapi.entityService.findMany(
//                 "api::article.article",
//                 {
//                     fields: ["id", "Title", "Content", "createdAt"],
//                     populate: {
//                         Author: {
//                             fields: ["username", "email"],
//                         },
//                         Category: {
//                             fields: ["name"],
//                         },
//                     },
//                 }
//             );

//             // Reduce the data to the format we want to return
//             let entriesReduced;
//             if (entries && Array.isArray(entries)) {
//                 entriesReduced = entries.reduce((acc, item) => {
//                     acc = acc || [];
//                     acc.push({
//                         id: item?.id,
//                         title: item.Title || "",
//                         category: item.Category.name || "",
//                         publishedDate: new Date(item.createdAt).toDateString() || "",
//                         authorName: item.Author?.username || "",
//                         authorEmail: item.Author?.email || "",
//                         content: item.Content || ""
//                     });
//                     return acc;
//                 }, []);
//             }

//             // Return the reduced data
//             return entriesReduced;
//         } catch (err) {
//             return err;
//         }
//     },
// };
