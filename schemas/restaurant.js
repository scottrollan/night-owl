export default {
    name: 'restaurant',
    title: 'Restaurant',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'neighborhood',
        title: 'Neighborhood',
        type: 'string',
        options: {
          list: [
              {title: "Decatur", value: "decatur"},
              {title: "Midtown", value: "midtown"},
              {title: "West Midtown", value: "westMidtown"}
          ]
        }
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string'
      },
      {
        name: 'url',
        title: 'Website',
        type: 'string'
      },
      {
        name: 'tagline',
        title: 'Tagline',
        type: 'string'
      },
      {
          name: 'lat',
          title: "Latitude",
          type: 'number'
      },
      {
          name: 'lng',
          title: "Longitude",
          type: 'number'
      }
    ],
    preview: {
      select: {
        title: 'name'
      }
    }
  }
  