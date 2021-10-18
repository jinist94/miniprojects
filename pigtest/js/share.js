function sendLink() {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '돼지력 테스트',
        description: '나의 숨겨진 돼지력을 테스트 해보자',
        imageUrl:
          './img/kakao-share-img.png',
        link: {
          mobileWebUrl: 'https://angry-northcutt-a37387.netlify.app/',
          webUrl: 'https://angry-northcutt-a37387.netlify.app/',
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      ],
    })
  }