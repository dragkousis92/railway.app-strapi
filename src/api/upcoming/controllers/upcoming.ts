'use strict';

/**
 * A set of functions called "actions" for `get-articles`
 */

export default {
  getArticles: async (ctx, next) => {
    console.log("Get articles controller");
    // try {
        const Data = {
            test: "test"
        }
   
         const reminders = await strapi.db.query('api::reminder.reminder').findMany({
        // where: {
        //   // provider,
        //   $or: [{ email: identifier.toLowerCase() }, { username: identifier }],
        // },
      });
      console.log("Reminders", reminders);

      const timeEvents = await strapi.db.query('api::time-event.time-event').findMany({});
      console.log("timeEvents", timeEvents);
      ctx.body = Data;
    // } catch (err) {
    //   ctx.badRequest("Get articles controller error", { moreDetails: err });
    // }
  }
};