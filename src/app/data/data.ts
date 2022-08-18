import {User} from "../models/User";

export const fakeData = [
  {
    _id: '1',
    description: 'description1',
    price: 222,
    title: 'title1'
  },
  {
    _id: '2',
    description: 'description2',
    price: 222,
    title: 'title2'
  },
  {
    _id: '3',
    description: 'description3',
    price: 222,
    title: 'title3'
  },
  {
    _id: '4',
    description: 'description3',
    price: 222,
    title: 'title3'
  },
  {
    _id: '5',
    description: 'description3',
    price: 222,
    title: 'title3'
  },
  {
    _id: '6',
    description: 'description3',
    price: 222,
    title: 'title3'
  },
  {
    _id: '7',
    description: 'description3',
    price: 222,
    title: 'title3'
  },
  {
    _id: '8',
    description: 'description3',
    price: 222,
    title: 'title3'
  },
  {
    _id: '9',
    description: 'description3',
    price: 222,
    title: 'title3'
  }]
export const users = [
  {
    _id: 1,
    name: 'Dr.Emily',
    username: 'Dr.Emily',
    password: 'title1',
    speciality: 'generalist',
    picture: 'https://scontent.ftun10-1.fna.fbcdn.net/v/t1.6435-9/42349682_1876342722402756_6822042279629291520_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_z9xK4DRYyYAX-ZjzjO&tn=BSDXf1nn5-zV1p6W&_nc_ht=scontent.ftun10-1.fna&oh=00_AT83_rc1lAgqt3FM4otCEudrg3FVGaVqjBwZ10y67-cTVA&oe=63196EA5',
    description:'You can switch back to English at any time. More languages coming soon.'
  },
  {
    _id: 2,
    name: 'Dr.Vectoria',
    username: 'Dr.Vectoria',
    password: 'title1',
    speciality: 'pediatrician',
    picture: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description:'You can switch back to English at any time. More languages coming soon.'
  },
  {
    _id: 3,
    name: 'Dr.Mery',
    username: 'Dr.Mery',
    password: 'title1',
    speciality: 'gynecologist',
    picture: 'https://www.dr-karazaitri-ma.net/wp-content/uploads/2022/04/medical-doctor-image.png'
  }
  ,
  {
    _id: 4,
    name: 'Dr.Asma',
    username: 'Dr.Asma',
    password: 'title1',
    speciality: 'surgeon',
    picture: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    _id: 5,
    name: 'Dr.Smith',
    username: 'Smith123',
    password: 'title1',
    speciality: 'generalist',
    picture: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
  },
  {
    _id: 6,
    name: 'Dr.Vectoria',
    username: 'Dr.Vectoria',
    password: 'title1',
    speciality: 'gynecologist',
    picture: 'https://media.istockphoto.com/photos/doctor-holding-digital-tablet-at-meeting-room-picture-id1189304032?k=20&m=1189304032&s=612x612&w=0&h=ovTNnR0JX2cRZkzMBed9exRO_PamZLlysLDFkXesr4Q='
  },
]
export const posts = [{
  _id: 0,
  title: 'A question to ask 1',
  user: {
    _id: '1',
    name: 'Emily',
    username: 222,
    password: 'title1',
    picture:'https://i0.wp.com/jobstanzania.co.tz/wp-content/uploads/2022/01/problem-solving-ideas.jpg?fit=1200%2C800&ssl=1'

  },
  message: 'what can i do if something like this happen..',
  date: "05/08/2022",
  comments: [{
    _id:'1',
    subject:'yous sjsjjsjsjs',
    user:  {
      _id: '2',
      name: 'Vectoria',
      username: 222,
      password: 'title1',
      speciality: 'pediatric',
      picture: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    },
    date:'09/08/2022'
    // _id: string;
    // subject: string;
    // user: User;
    // date:Date;
  },{
    _id:1,
    subject:'yous sjsjjsjsjs',
    user:  {
      _id: '2',
      name: 'Vectoria',
      username: 222,
      password: 'title1',
      speciality: 'pediatric',
      picture: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    },
    date:'09/08/2022',
    // _id: string;
    // subject: string;
    // user: User;
    // date:Date;
    picture:"ilagg.jog"
  }],
},
  {
    _id: 1,
    title: 'A question to ask 2',
    user: {
      _id: '1',
      name: 'Emily',
      username: 222,
      password: 'title1',
      picture:'https://scontent.ftun10-1.fna.fbcdn.net/v/t1.6435-9/42349682_1876342722402756_6822042279629291520_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_z9xK4DRYyYAX-ZjzjO&tn=BSDXf1nn5-zV1p6W&_nc_ht=scontent.ftun10-1.fna&oh=00_AT83_rc1lAgqt3FM4otCEudrg3FVGaVqjBwZ10y67-cTVA&oe=63196EA5'
    },
    message: 'what can i do if something like this happen..',
    date: "05/08/2022",
    comments: [{
      _id:'1',
      subject:'yous sjsjjsjsjs',
      user:  {
        _id: '2',
        name: 'Vectoria',
        username: 222,
        password: 'title1',
        speciality: 'pediatric',
        picture: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
      },
      date:'09/08/2022'
      // _id: string;
      // subject: string;
      // user: User;
      // date:Date;
    },{
      _id:'1',
      subject:'yous sjsjjsjsjs',
      user:  {
        _id: '2',
        name: 'Vectoria',
        username: 222,
        password: 'title1',
        speciality: 'pediatric',
        picture: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
      },
      date:'09/08/2022'
      // _id: string;
      // subject: string;
      // user: User;
      // date:Date;
    }],
    picture:"ilagg.jog"
  }
  ,{
    _id: 2,
    title: 'A question to ask 3',
    user: {
      _id: '1',
      name: 'Emily',
      username: 222,
      password: 'title1',
      picture:'https://scontent.ftun10-1.fna.fbcdn.net/v/t1.6435-9/42349682_1876342722402756_6822042279629291520_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_z9xK4DRYyYAX-ZjzjO&tn=BSDXf1nn5-zV1p6W&_nc_ht=scontent.ftun10-1.fna&oh=00_AT83_rc1lAgqt3FM4otCEudrg3FVGaVqjBwZ10y67-cTVA&oe=63196EA5'

    },
    message: 'what can i do if something like this happen..',
    date: "05/08/2022",
    comments: [{
      _id:4,
      subject:'yous sjsjjsjsjs',
      user:  {
        _id: '2',
        name: 'Vectoria',
        username: 222,
        password: 'title1',
        speciality: 'pediatric',
        picture: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
      },
      date:'09/08/2022',
      // _id: string;
      // subject: string;
      // user: User;
      // date:Date;
      picture:"ilagg.jog"
    },{
      _id:'1',
      subject:'yous sjsjjsjsjs',
      user:  {
        _id: '2',
        name: 'Vectoria',
        username: 222,
        password: 'title1',
        speciality: 'pediatric',
        picture: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
      },
      date:'09/08/2022',
      // _id: string;
      // subject: string;
      // user: User;
      // date:Date;
      picture:"ilagg.jog"
    }],
  }
]
export const talkAbout =["covid","Advices for women","take care of skin","covid","Advices for women","take care of skin"];
