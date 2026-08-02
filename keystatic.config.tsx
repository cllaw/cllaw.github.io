import { config, fields, collection, singleton } from '@keystatic/core';
import { postComponents } from './src/lib/blocks';

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'content/posts/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date', validation: { isRequired: true } }),
        year: fields.integer({ label: 'Year', validation: { isRequired: true } }),
        category: fields.text({ label: 'Category' }),
        location: fields.text({ label: 'Location' }),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/images/blog',
          publicPath: '/images/blog',
        }),
        description: fields.text({ label: 'Description', multiline: true }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/blog',
              publicPath: '/images/blog',
            },
          },
          components: postComponents,
        }),
      },
    }),

    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'content/projects/*',
      format: { data: 'yaml' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        image: fields.image({
          label: 'Screenshot',
          directory: 'public/images/projects',
          publicPath: '/images/projects',
        }),
        sortOrder: fields.integer({ label: 'Sort Order', defaultValue: 0 }),
        links: fields.array(
          fields.object({
            label: fields.text({ label: 'Label' }),
            url: fields.url({ label: 'URL' }),
          }),
          {
            label: 'Links',
            itemLabel: (props) => props.fields.label.value,
          },
        ),
      },
    }),
  },

  singletons: {
    homepage: singleton({
      label: 'Homepage',
      path: 'content/singletons/homepage',
      format: { data: 'yaml' },
      schema: {
        name: fields.text({ label: 'Name' }),
        title: fields.text({ label: 'Title/Role' }),
        location: fields.text({ label: 'Location' }),
        aboutMe: fields.text({ label: 'About Me', multiline: true }),
        skillsDescription: fields.text({ label: 'Skills Description', multiline: true }),
      },
    }),
  },
});
