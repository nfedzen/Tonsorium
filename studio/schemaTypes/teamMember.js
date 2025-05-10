export default {
    name: 'teamMember',
    title: 'Team Member',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'bio', title: 'Bio', type: 'text' },
      { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } },
      {
        name: 'social',
        title: 'Social Links',
        type: 'object',
        fields: [
          { name: 'instagram', type: 'url', title: 'Instagram' },
          { name: 'website', type: 'url', title: 'Website' }
        ]
      }
    ]
  }
  