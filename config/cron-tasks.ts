import type { Core } from '@strapi/strapi';

export default {
  /**
   * Simple example.
   * Every day at 1am.
   */
  
  datesUpdate: {
    task: async({ strapi }:{strapi:Core.Strapi}) => {

      console.log('Running the datesUpdate cron task');

      const events = await strapi.entityService.findMany('api::time-event.time-event', {
        filters: {
            Date: { $lt: new Date() }, // Filter dates in the past
            Persist: {
              $eq: true,
            }, // Filter events that should persist
        },
      });

      // Loop through each event and update its date
      for (const event of events) {
        let newDate = new Date(event.Date);

        const stepSize =event.stepSize;
        

        // Update the date based on the interval
        switch (event.Repeat) {
          case 'Daily':
            newDate.setDate(newDate.getDate() + 1 * stepSize);
            break;
          case 'Weekly':
            newDate.setDate(newDate.getDate() + 7 * stepSize);
            break;
          case 'Monthly':
            newDate.setMonth(newDate.getMonth() + 1 * stepSize);
            break;
          case 'Yearly':
            newDate.setFullYear(newDate.getFullYear() + 1 * stepSize);
            break;
          default:
            break;
        }

        // Save the updated date back to the database
        await strapi.entityService.update('api::time-event.time-event', event.id, {
          data: { Date: newDate },
        });
      }
      // Add your own logic here (e.g. send a queue of email, create a database backup, etc.).
    },
    options: {
      rule: "* 1 * * *",
    },
  },
};