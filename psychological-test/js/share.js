function sendLink() {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: 'https://lovetype-jt.netlify.app',
        description: '간단한 테스트를 통한 나의 연애유형을 알아보자!',
        imageUrl:
          'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          mobileWebUrl: 'https://lovetype-jt.netlify.app',
          webUrl: 'https://lovetype-jt.netlify.app',
        },
      },
      buttons: [
        {
          title: '테스트 하기',
          link: {
            mobileWebUrl: 'https://lovetype-jt.netlify.app',
            webUrl: 'https://lovetype-jt.netlify.app',
          },
        },
      ],
    })
  }