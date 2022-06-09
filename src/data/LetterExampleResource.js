export default {
  name: 'حرف القاف',
  letter: 'ق',
  exercises: [
    {
      sort: 0,
      type: 'video_tutorial',
      source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    // {
    //   sort: 1,
    //   type: 'sort_letters',
    //   question: {
    //     text: '',
    //     voice: '',
    //   },
    //   attributes: {
    //     word: 'قناع',
    //     media: 'https://via.placeholder.com/150', // link to image
    //   },
    // },
    {
      sort: 2,
      type: 'multiple_choice',
      question: {
        text: 'اختر الإجابة الصحيحة',
        voice: '',
        image: 'https://via.placeholder.com/300', // or false
      },
      choices: [
        { text: '', media: 'https://via.placeholder.com/150' },
        { text: '', media: 'https://via.placeholder.com/150' },
        { text: '', media: 'https://via.placeholder.com/150' },
      ],
    },
    {
      sort: 3,
      type: 'listen_and_repeat',
      question: {
        text: 'استمع إلى كيفية نطق حرف القاف وانطقه ق',
        voice: '',
      },
      letters: [
        { text: 'ق', audio: '' },
        { text: 'قَ', audio: '' },
        { text: 'قُ', audio: '' },
        { text: 'قِ', audio: '' },
      ],
    },
    {
      sort: 4,
      type: 'multiple_choice',
      question: {
        text: '',
        voice: '',
        bubbles: true,
      },
      choices: [
        { text: '' },
        { text: '' },
        { text: '' },
        { text: '' },
      ],
    },
  ],
}
