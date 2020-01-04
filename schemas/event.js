export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Event Name',
        type: 'string'
      },
      {
          name: 'restaurant',
          title: 'Restaurant',
          type: 'string'
      },
      {
        name: 'category',
        title: 'Event Category',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          list: [
            {title: "Triva", value: "trivia"},
            {title: "Happy Hour", value: "happyHour"},
            {title: "Bingo", value: "bingo"},
            {title: "Karaoke", value: "karaoke"},
            {title: "Live Music", value: "liveMusic"},
            {title: "Food Specials", value: "foodSpecials"},
            {title: "Drink Specials", value: "drinkSpecials"},
            {title: "Brunch", value: "brunch"},
            {title: "Unique", value: "unique"},
            {title: "Late Night", value: "lateNight"}
          ]
        }
      },
      {
        name: 'description',
        title: 'Event Description',
        type: 'string'
      },
      {
        name: 'day',
        title: 'Day(s)',
        type: 'array',
        of: [{type: 'string'}],
        options: {
            list: [
                {title: "Sunday", value: "sunday"},
                {title: "Monday", value: "monday"},
                {title: "Tuesday", value: "tuesday"},
                {title: "Wednesday", value: "wednesday"},
                {title: "Thursday", value: "thursday"},
                {title: "Friday", value: "friday"},
                {title: "Saturday", value: "saturday"}, 
            ]
        }
      },
      {
        name: 'isRecurring',
        title: 'Recurring?',
        type: 'boolean'
      },
      {
          name: 'time',
          title: "Time",
          type: 'string'
      }
    ],
    preview: {
      select: {
        title: 'name',
        name: 'restaurant'
      }
    }
  }
  