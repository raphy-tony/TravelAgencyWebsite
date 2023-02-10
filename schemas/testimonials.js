import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
   
    defineField({
      name: 'img',
      title: 'Testimonial Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
  ],
})
