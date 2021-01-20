export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6008a8eee319bf0cb03a1bd3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5jbygivq',
                  apiId: '324a39eb-ad60-4d64-9061-a4dc67097c1f'
                },
                {
                  buildHookId: '6008a8ee1747eb097aa4a7ae',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-54z1q8vs',
                  apiId: '770e03dd-25af-4d6e-964f-a9b68f0a98e0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/msmenzyk/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-54z1q8vs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
