export default {
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
      { name: 'headline', title: 'Headline', type: 'string' },
      { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] },
      { name: 'image', title: 'Image', type: 'image' }
    ]
  }
  