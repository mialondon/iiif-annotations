module.exports = class TitlesIndex {
  data() {
    return {
      permalink: '/annotations/titles.json'
    }
  }

  render() {
    const page = {
      '@context': 'http://iiif.io/api/presentation/3/context.json',
      id: 'https://zooniverse.github.io/iiif-annotations/annotations/titles.json',
      type: 'AnnotationCollection',
      first: {
        id: 'https://zooniverse.github.io/iiif-annotations/annotations/titles/0.json',
        type: 'AnnotationPage'
      },
      last: {
        id: 'https://zooniverse.github.io/iiif-annotations/annotations/titles/0.json',
        type: 'AnnotationPage'
      }
    }
    return JSON.stringify(page)
  }
}