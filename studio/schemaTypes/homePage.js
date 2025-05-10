export default {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
      { name: 'heroTitle', title: 'Hero Title', type: 'string' },
      { name: 'heroSubtext', title: 'Hero Subtext', type: 'text' },
      { name: 'bookingUrl', title: 'Booking URL', type: 'url' },
      {
        name: 'featuredServices',
        title: 'Featured Services',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'service' }] }]
      },
      {
        name: 'testimonials',
        title: 'Testimonials',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'name', type: 'string', title: 'Name' },
              { name: 'quote', type: 'text', title: 'Quote' }
            ]
          }
        ]
      }
    ]
  }
  