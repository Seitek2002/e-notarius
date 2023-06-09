export const state = {
  users: [
    {
      id: 'qwerty1234567890',
      login: 'user1',
      password: '123',
      INN: '12102200250339',
      userId: '1234567890',
      role: 'client',
      fullName: 'Берманова Карина Асланмухамедовна',
      dateOfBirth: '21.02.2002',
      citizenship: 'Кыргызстан',
      sex: 'male',
      avatar: '/passport-photo-example.png',
      region: 'Чуй',
      area: 'Кеминский район',
      city: 'г. Бишкек',
      cityFact: 'г. Бишкек',
      email: 'seitek@bk.ru',
      phone: '0707070707',
      registration: {
        street: 'М. Алыбаев',
        house: '10',
        flat: '',
      },
      fact: {
        street: 'Манаса 91',
        house: '10',
        flat: '',
      },
      passport: {
        series: 'ID',
        number: '1816551',
        organization: 'МКК 213021',
        date: '09.09.2020',
      },
    },
    {
      id: 'qwerty123456789012',
      login: 'user',
      password: '123',
      INN: '22102200250339',
      userId: '1234567890',
      role: 'client',
      fullName: 'Бегалиев Сейтек Улугбекович',
      dateOfBirth: '21.02.2002',
      citizenship: 'Кыргызстан',
      sex: 'male',
      avatar: '/passport-photo-example.png',
      region: 'Чуй',
      area: 'Кеминский район',
      city: 'г. Бишкек',
      cityFact: 'г. Бишкек',
      email: 'seitek@bk.ru',
      phone: '0707070707',
      registration: {
        street: 'М. Алыбаев',
        house: '10',
        flat: '',
      },
      fact: {
        street: 'Манаса 91',
        house: '10',
        flat: '',
      },
      passport: {
        series: 'ID',
        number: '1816551',
        organization: 'МКК 213021',
        date: '09.09.2020',
      },
    },
    {
      id: 'qwerty2002',
      login: 'notarius1',
      password: '123',
      INN: '20808198900066',
      userId: '0987654321',
      dateOfBirth: '21.02.2001',
      citizenship: 'Кыргызская',
      sex: 'male',
      role: 'notarius',
      avatar: '/passport-photo.png',
      region: 'Чуй',
      city: 'г. Бишкек',
      area: 'Ленинский район',
      foreigParticipant: 'Да',
      registryNumber: '1816551',
      okpoNumber: '1816551',
      orderDate: '21.02.2023',
      supervisor: 'Нурбеков Айдин',
      founders: '0',
      foundersLayer: '0',
      qntyOfMembers: '2',
      chin: 'ЧН',
      fullName: 'Кобаев Эльдияр Эгембердиевич',
      registration: {
        street: 'М. Алыбаев',
        house: '10',
        flat: '',
      },
      fact: {
        street: 'Манаса 91',
        house: '10',
        flat: '',
      },
      passport: {
        series: 'ID',
        number: '1816551',
        organization: 'МКК 213021',
        date: '09.09.2020',
      },
    },
    {
      id: 'qwerty2002',
      login: 'notarius',
      password: '123',
      INN: '21808198900066',
      userId: '0987654321',
      dateOfBirth: '21.02.2001',
      citizenship: 'Кыргызская',
      sex: 'male',
      role: 'notarius',
      avatar: '/passport-photo.png',
      region: 'Чуй',
      city: 'г. Бишкек',
      area: 'Ленинский район',
      foreigParticipant: 'Да',
      registryNumber: '1816551',
      okpoNumber: '1816551',
      orderDate: '21.02.2023',
      supervisor: 'Нурбеков Айдин',
      founders: '0',
      foundersLayer: '0',
      qntyOfMembers: '2',
      chin: 'ЧН',
      fullName: 'Абдыгулов Баяман Алыкулович',
      registration: {
        street: 'М. Алыбаев',
        house: '10',
        flat: '',
      },
      fact: {
        street: 'Манаса 91',
        house: '10',
        flat: '',
      },
      passport: {
        series: 'ID',
        number: '1816551',
        organization: 'МКК 213021',
        date: '09.09.2020',
      },
    },
    {
      id: 'qwerty2003',
      login: 'notarius1',
      password: '123',
      INN: '00807199710066',
      userId: '0987654321',
      dateOfBirth: '21.02.2001',
      citizenship: 'Кыргызская',
      sex: 'male',
      role: 'notarius',
      avatar: '/passport-photo.png',
      region: 'Чуй',
      city: 'г. Бишкек',
      area: 'Первомайский район',
      foreigParticipant: 'Да',
      registryNumber: '1386-3300-ООО',
      okpoNumber: '21765557',
      orderDate: '13/01/2016',
      supervisor: 'Слепокуров Владислав Анатольевич',
      founders: '0',
      foundersLayer: '2',
      qntyOfMembers: '2',
      chin: 'ЧН',
      officialName: 'Общество с ограниченной возможностью \'НУР Телеком\'',
      nationalName: '\'НУР Телеком\' жоопкерчилиги чектелген коому',
      fullName: 'Кобаев Эльдияр Эгембердиевич',
      registration: {
        street: 'М. Алыбаев',
        house: '10',
        flat: '',
      },
      fact: {
        street: 'ул. Абдрахманова',
        house: '170/2 (Блок 2)',
        flat: '',
      },
      passport: {
        series: 'ID',
        number: '1816551',
        organization: 'МКК 213021',
        date: '09.09.2020',
      },
    },
  ],
  auth: {
    check: false,
    name: '',
  },
  isAdmin: true,
  sidebar:true, 
  chooseObject: false,
  registryClientBigModal: false,
  registryClientMiniModal: false,
  typeOfObject: false,
  notarialActs: false,
  typeOfNotarialActs: false,
  typeOfAction: false,
  doc: false,
  bonusInputs: 'Вы не выбрали нотариальный документ!',
  isSubmit: false,
  choosenApplicant: '',
  dateOfBirth: '',
  personApplicant: {},
  personNotarius: {},
  sideBarOpen: false,
  item: {
    id: 15163,
    qr: false,
    surName: 'Бегалиев',
    name: 'Сейтек',
    lastName: 'Улугбекович',
    registryNumber: '125-8563',
    notariusAction: 'Обеспечение доказательства',
    typeOfAction: 'Доверенность на управление и распоряжение автотранспортным средством',
    typeOfDocument: 'Доверенность',
    applicant: '',
    status: 'В обработке',
    dateOfCreating: '01.01.2022',
    dateOfAdd: '01.01.2022',
    dateOfCancel: '01.01.2022',
    date: '31.05.2023',
    duty: 'Оплачен',
    cause: '',
    executer: 'ЧН Абдыгулов Баяман Алыкулович'
  },
  notariusList: [
    {
      id: 15163,
      name: 'Бегалиев Сейтек Улугбекович',
      avatar:
        'https://i.servimg.com/u/f88/20/10/34/87/photo_11.jpg',
      rating: '4,0',
      votes: 45,
      typeOfNotarius: 'Частный нотариус',
      license: 'Лицензия №053 от 01.05.2010',
      phoneNumbers: ['700 000 000', '555 000 000'],
      whatsApp: '+996 700 000 000',
      email: 'balancha@gmail.com',
      geo: ['Чуй', 'Московский район', 'с. Беловодское', 'Маяковского 95а'],
      schedule: [
        'Рабочие дни, с перерывом на обед',
        'Пн 09:00 - 18:00',
        'Вт 09:00 - 18:00',
        'Ср 09:00 - 18:00',
        'Чт 09:00 - 18:00',
        'Пт 09:00 - 18:00',
        'Сб 09:00 - 14:00',
      ],
    },
    {
      id: 1,
      name: 'Турдалиев Сейтек Улугбекович',
      avatar:
        'http://kontur-rzn.ru/wp-content/uploads/2019/10/foto_documents_after.jpg',
      rating: '1,0',
      votes: 45,
      typeOfNotarius: 'Государственный нотариус',
      license: 'Лицензия №053 от 01.05.2010',
      phoneNumbers: ['700 555 555', '555 111 111'],
      whatsApp: '+996 555 111 111',
      email: 'tu@bk.ru',
      geo: ['Чуй', 'Московский район', 'г. Бишкек', 'Маяковского 165'],
      schedule: ['Без выходных и перерыров'],
    },
    {
      id: 2,
      name: 'Турдалиев Аян Улугбекович',
      avatar:
        'https://static.tildacdn.com/tild3538-6534-4062-a436-623665633064/16.jpg',
      rating: '2,0',
      votes: 15,
      typeOfNotarius: 'Частный нотариус',
      license: 'Лицензия №053 от 01.05.2010',
      phoneNumbers: ['700 555 555', '555 111 111'],
      whatsApp: '+996 555 111 111',
      email: 'tu@bk.ru',
      geo: ['Иссык-Куль', 'Московский район', 'г. Бишкек', 'Алыбаева 165'],
      schedule: ['Без выходных и перерыров'],
    },
    {
      id: 3,
      name: 'Турдалиев Улугбек Улугбекович',
      avatar:
        'https://selfobserved.org/wp-content/uploads/2012/06/passport-photo.jpg',
      rating: '5,0',
      votes: 100,
      typeOfNotarius: 'Частный нотариус',
      license: 'Лицензия №053 от 01.05.2010',
      phoneNumbers: ['700 555 555', '555 111 111'],
      whatsApp: '+996 555 111 111',
      email: 'tu@bk.ru',
      geo: ['Баткен', 'Кадамжайский район', 'Пульгон', 'Бегалиев 1а'],
      schedule: ['Без выходных и перерыров'],
    },
    {
      id: 4,
      name: 'Улугбеков Улугбек Улугбекович',
      avatar:
        'https://wpsovet.ru/wp-content/uploads/f/f/b/ffb469dea939971e09965b22256678b7.jpg',
      rating: '0,0',
      votes: 1000,
      typeOfNotarius: 'Государственный нотариус',
      license: 'Лицензия №053 от 01.05.2010',
      phoneNumbers: ['700 555 555', '555 111 111'],
      whatsApp: '+996 555 111 111',
      email: 'tu@bk.ru',
      geo: ['Ош', 'Кара-Сууйский район', 'Пульгон', 'Бегалиев 1а'],
      schedule: ['Без выходных и перерыров'],
    },
    {
      id: 5,
      name: 'Сейтеков Сейтек Сейтекович',
      avatar:
        'http://static.tildacdn.com/tild3734-6666-4630-b734-376432356634/0030.jpg',
      rating: '0,0',
      votes: 1000,
      typeOfNotarius: 'Государственный нотариус',
      license: 'Лицензия №053 от 01.05.2010',
      phoneNumbers: ['700 555 555', '555 111 111'],
      whatsApp: '+996 555 111 111',
      email: 'tu@bk.ru',
      geo: ['Ош', 'Ноокатский район', 'Пульгон', 'Бегалиев 1а'],
      schedule: ['Без выходных и перерыров'],
    },
    {
      id: 6,
      name: 'Эльдияров Эльдияр Эльдиярович',
      avatar:
        'https://otvet.imgsmail.ru/download/801636b25fc562a8f00f6c01202b39ef_i-177.jpg',
      rating: '0,0',
      votes: 1000,
      typeOfNotarius: 'Государственный нотариус',
      license: 'Лицензия №053 от 01.05.2010',
      phoneNumbers: ['700 555 555', '555 111 111'],
      whatsApp: '+996 555 111 111',
      email: 'tu@bk.ru',
      geo: ['Ош', 'Ноокатский район', 'Пульгон', 'Бегалиев 1а'],
      schedule: ['Без выходных и перерыров'],
    },
    {
      id: 7,
      name: 'Исламов Ислам Исламович',
      avatar:
        'http://sergiev-posad.cleaning-77.ru/upload/iblock/42c/42cd8a50d8c0a09a8dd7a27bc9753f4c.jpg',
      rating: '5,0',
      votes: 1000,
      typeOfNotarius: 'Частный нотариус',
      license: 'Лицензия №053 от 01.05.2010',
      phoneNumbers: ['700 555 555', '555 111 111'],
      whatsApp: '+996 555 111 111',
      email: 'tu@bk.ru',
      geo: ['Чуй', 'Ленинский район', 'г. Бишкек', 'Бегалиев 1а'],
      schedule: ['Без выходных и перерыров'],
    },
    {
      id: 8,
      name: 'Берметовна Бермет Берметовна',
      avatar:
        'https://krot.info/uploads/posts/2021-03/1614875187_1-p-fotografiya-na-pasport-art-kartinki-1.jpg',
      rating: '5,0',
      votes: 1000,
      typeOfNotarius: 'Частный нотариус',
      license: 'Лицензия №053 от 01.05.2010',
      phoneNumbers: ['700 555 555', '555 111 111'],
      whatsApp: '+996 555 111 111',
      email: 'tu@bk.ru',
      geo: ['Чуй', 'Ленинский район', 'г. Бишкек', 'Бегалиев 1а'],
      schedule: ['Без выходных и перерыров'],
    },
  ],
  tableListUser: [
    {
      id: 15163,
      viewAction: 'Доверенность',
      typeOfAction: 'Удостоверение',
      status: 'В обработке',
      date: '01.01.2022',
      notarius: 'ГН Абдымиталипов Абдымиталип Абдымиталипович',
    },
    {
      id: 1,
      viewAction: 'Доверенность',
      typeOfAction: 'Движимое имущество',
      status: 'Принят к исполнению',
      date: '01.01.2022',
      notarius: 'ГН Абдымиталипов Абдымиталип Абдымиталипович',
    },
    {
      id: 2,
      viewAction: 'Соглашение',
      typeOfAction: 'Движимое имущество',
      status: 'На разьяснении',
      date: '01.01.2022',
      notarius: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 3,
      viewAction: 'Договор',
      typeOfAction: 'Договор купли-продажи квартиры(жилого дома)',
      status: 'Исполнен',
      date: '01.01.2022',
      notarius: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 4,
      viewAction: 'Доверенность',
      typeOfAction: 'Доверенность на получение з/п',
      status: 'Отклонен',
      date: '01.01.2022',
      notarius: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 5,
      viewAction: 'Доверенность',
      typeOfAction: 'Доверенность на получение алиментовv',
      status: 'Исполнен',
      date: '01.01.2022',
      notarius: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 6,
      viewAction: 'Доверенность',
      typeOfAction: 'Удостоверение',
      status: 'В обработке',
      date: '01.01.2022',
      notarius: 'ГН Абдымиталипов Абдымиталип Абдымиталипович',
    },
    {
      id: 7,
      viewAction: 'Доверенность',
      typeOfAction: 'Движимое имущество',
      status: 'Принят к исполнению',
      date: '01.01.2022',
      notarius: 'ГН Абдымиталипов Абдымиталип Абдымиталипович',
    },
    {
      id: 8,
      viewAction: 'Соглашение',
      typeOfAction: 'Движимое имущество',
      status: 'На разьяснении',
      date: '01.01.2022',
      notarius: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 9,
      viewAction: 'Договор',
      typeOfAction: 'Договор купли-продажи квартиры(жилого дома)',
      status: 'Исполнен',
      date: '01.01.2022',
      notarius: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 10,
      viewAction: 'Доверенность',
      typeOfAction: 'Доверенность на получение з/п',
      status: 'Отклонен',
      date: '01.01.2022',
      notarius: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 11,
      viewAction: 'Доверенность',
      typeOfAction: 'Доверенность на получение алиментовv',
      status: 'Исполнен',
      date: '01.01.2022',
      notarius: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 12,
      viewAction: 'Доверенность',
      typeOfAction: 'Доверенность на получение алиментовv',
      status: 'Исполнен',
      date: '01.01.2022',
      notarius: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 13,
      viewAction: 'Доверенность',
      typeOfAction: 'Доверенность на получение алиментовv',
      status: 'Исполнен',
      date: '01.01.2022',
      notarius: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 14,
      viewAction: 'Доверенность',
      typeOfAction: 'Доверенность на получение алиментовv',
      status: 'Исполнен',
      date: '01.01.2022',
      notarius: 'ЧН Абдыгулов Баяман Алыкулович',
    },
  ],
  tableListNotarius: [
    {
      id: 15163,
      typeOfDocument: 'Соглашение',
      typeOfAction: 'Удостоверение',
      status: 'В обработке',
      date: '01.01.2022',
      executer: 'Абдыраимова Анар Нуркалыймухаммедовна',
    },
    {
      id: 1,
      typeOfDocument: 'Соглашение',
      typeOfAction: 'Движимое имущество',
      status: 'Принят к исполнению',
      date: '01.01.2022',
      executer: 'Абдыраимова Анар Нуркалыймухаммедовна',
    },
    {
      id: 2,
      typeOfDocument: 'Соглашение',
      typeOfAction: 'Движимое имущество',
      status: 'На разьяснении',
      date: '01.01.2022',
      executer: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 3,
      typeOfDocument: 'Договор',
      typeOfAction: 'Договор купли-продажи квартиры(жилого дома)',
      status: 'Исполнен',
      date: '01.01.2022',
      executer: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 4,
      typeOfDocument: 'Доверенность',
      typeOfAction: 'Доверенность на получение з/п',
      status: 'Отклонен',
      date: '01.01.2022',
      executer: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 5,
      typeOfDocument: 'Доверенность',
      typeOfAction: 'Доверенность на получение алиментовv',
      status: 'Исполнен',
      date: '01.01.2022',
      executer: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 6,
      typeOfDocument: 'Соглашение',
      typeOfAction: 'Удостоверение',
      status: 'В обработке',
      date: '01.01.2022',
      executer: 'Абдыраимова Анар Нуркалыймухаммедовна',
    },
    {
      id: 7,
      typeOfDocument: 'Соглашение',
      typeOfAction: 'Движимое имущество',
      status: 'Принят к исполнению',
      date: '01.01.2022',
      executer: 'Абдыраимова Анар Нуркалыймухаммедовна',
    },
    {
      id: 8,
      typeOfDocument: 'Соглашение',
      typeOfAction: 'Движимое имущество',
      status: 'На разьяснении',
      date: '01.01.2022',
      executer: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 9,
      typeOfDocument: 'Договор',
      typeOfAction: 'Договор купли-продажи квартиры(жилого дома)',
      status: 'Исполнен',
      date: '01.01.2022',
      executer: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 10,
      typeOfDocument: 'Доверенность',
      typeOfAction: 'Доверенность на получение з/п',
      status: 'Отклонен',
      date: '01.01.2022',
      executer: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 11,
      typeOfDocument: 'Доверенность',
      typeOfAction: 'Доверенность на получение алиментовv',
      status: 'Исполнен',
      date: '01.01.2022',
      executer: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 12,
      typeOfDocument: 'Доверенность',
      typeOfAction: 'Доверенность на получение алиментовv',
      status: 'Исполнен',
      date: '01.01.2022',
      executer: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 13,
      typeOfDocument: 'Доверенность',
      typeOfAction: 'Доверенность на получение алиментовv',
      status: 'Исполнен',
      date: '01.01.2022',
      executer: 'ЧН Абдыгулов Баяман Алыкулович',
    },
    {
      id: 14,
      typeOfDocument: 'Доверенность',
      typeOfAction: 'Доверенность на получение алиментовv',
      status: 'Исполнен',
      date: '01.01.2022',
      executer: 'ЧН Абдыгулов Баяман Алыкулович',
    },
  ],
  registryOfNotariusAction: [
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
  ],
  registryOfUser: [
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
    {
      id: 15163,
      qr: false,
      registryNumber: '125-8563',
      notariusAction: 'Обеспечение доказательства',
      typeOfAction: 'Постановление',
      typeOfDocument: 'Постановление о назначении экспертизы',
      applicant: 'Чалбеков Анарбек Ибраимович',
      status: 'Исполнен',
      dateOfCreating: '01.01.2022',
      dateOfAdd: '01.01.2022',
      dateOfCancel: '01.01.2022',
      duty: 'Оплачен',
      cause: '',
    },
  ],
  heirsListStore: [
    {
      name: 'Нурмырзаев Баккелди Абылкасымович',
      testator: '02.02.2010',
      notarius: 'Частный нотариус Баланчаев Б.Б.',
      INN: '1234567890',
    },
    {
      name: 'Руслан Малофеев Ахмедович',
      testator: '01.12.2019',
      notarius: 'Частный нотариус Баланчаев Б.Б.',
      INN: '0987654321',
    },
    {
      name: 'Нурбеков Айдин',
      testator: '10.06.2010',
      notarius: 'Частный нотариус Баланчаев Б.Б.',
      INN: '675894032',
    },
    {
      name: 'Сапаров Ислам Козубекович',
      testator: '31.12.2022',
      notarius: 'Частный нотариус Баланчаев Б.Б.',
      INN: '9876543210',
    },
    {
      name: 'Кыргызбаева Жибек Кыргызбаева',
      testator: '14.05.2023',
      notarius: 'Частный нотариус Баланчаев Б.Б.',
      INN: '0198765432',
    },
    {
      name: 'Насиба Рахат Раматова',
      testator: '10.10.2010',
      notarius: 'Частный нотариус Баланчаев Б.Б.',
      INN: '1234509876',
    },
  ],
  accumulator: {
    partnerTypeSelect: '',
    personalNumber: '',
    lastName: '',
    firstName: '',
    middleName: '',
    identityNumber: '',
    passportSeries: '',
    passportNumber: '',
    authority: '',
    authorityNumber: 0,
    dateOfIssue: '',
    objectSelect: '',
    objectTypeSelect: '',
    notarialActionSelect: '',
    notarialActionTypeSelect: '',
    actionsSelect: '',
    documentSelect: '',
    partnerTypeSelect: '',
    participant: [
      {
        partnerTypeSelect: '',
        personalNumber: '',
        lastName: '',
        firstName: '',
        middleName: '',
        identityNumber: '',
        passportSeries: '',
        passportNumber: '',
        authority: '',
        authorityNumber: 0,
        dateOfIssue: '',
        objectSelect: '',
        objectTypeSelect: '',
        notarialActionSelect: '',
        notarialActionTypeSelect: '',
        actionsSelect: '',
        documentSelect: '',
        partnerTypeSelect: '',
        birthDate: '',
        citizenship: '',
        foreigner: false,
        partnerAddressList: '',
        partnerAddressRegion: '',
        partnerAddressDistrict: '',
        partnerAddressListCity: '',
        partnerAddressListL4: '',
        partnerAddressListL3: '',
        partnerAddressListL2: '',
        partnerAddressListFact: '',
        partnerAddressListFact: '',
        partnerAddressRegionFact: '',
        partnerAddressDistrictFact: '',
        partnerAddressListCityFact: '',
        partnerAddressListL4Fact: '',
        partnerAddressListL3Fact: '',
        partnerAddressListL2Fact: '',
        emailAddress: '',
        phoneNumber: '',
        metaFile: '',
      },
    ],
    powerAttorneyTeam: '',
    realtionDegree: '',
  }
}
