export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'price', title: 'Price', type: 'string' },
      { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    ],
  }
  