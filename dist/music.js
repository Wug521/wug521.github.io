const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "梦伴",
        artist: '李悦君Ericaceae',
        url: 'https://www.joy127.com/url/76855.mp3',
        cover: 'https://s3.ax1x.com/2020/12/18/rJaMwD.jpg',
      },
      {
        name: 'Love Story',
        artist: 'Taylor Swift',
        url: 'https://www.joy127.com/url/71680.mp3',
        cover: 'https://github.com/Wug521/image/blob/master/2019-01-31/timg.jpg?raw=true?param=130y130',
      },
      {
        name: '你莫走',
        artist: '山水组合',
        url: 'https://www.joy127.com/url/77226.mp3',
        cover: 'https://s3.ax1x.com/2020/12/18/rJUmVg.jpg',
      }
    ]
});