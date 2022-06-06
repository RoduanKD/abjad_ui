export default {
  name: 'حرف القاف',
  letter: 'ق',
  exercises: [
    {
      sort: 0,
      type: 'video_tutorial',
      source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    {
      sort: 1,
      type: 'sort_letters',
      question: {
        text: '',
        voice: '',
      },
      attributes: {
        word: 'قناع',
        media: 'https://via.placeholder.com/150', // link to image
      },
    },
    {
      sort: 2,
      type: 'multiple_choice',
      question: {
        text: 'اختر الإجابة الصحيحة',
        voice: '',
      },
      choices: [
        { text: '', media: 'https://via.placeholder.com/150' },
        { text: '', media: 'https://via.placeholder.com/150' },
        { text: '', media: 'https://via.placeholder.com/150' },
      ],
    },
    {
      sort: 3,
      type: 'draw_letter',
      question: {
        text: '',
        voice: '',
      },
      attributes: {
        with_path: true,
        media: 'https://via.placeholder.com/150',
      },
    },
    {
      sort: 4,
      type: 'draw_letter', // https://stackoverflow.com/a/8398189/1892335
      question: {
        text: '',
        voice: '',
      },
      attributes: {
        with_path: true,
        media: 'https://via.placeholder.com/150',
      },
    },
    {
      sort: 5,
      type: 'listen_and_repeat',
      question: {
        text: '',
        voice: '',
      },
    },
    {
      sort: 6,
      type: 'choose_a_letter',
      question: {
        text: '',
        voice: '',
      },
      choices: [
        { text: '' },
        { text: '' },
        { text: '' },
      ],
      attributes: {
        bubbles: true,
      },
    },
  ],
}
