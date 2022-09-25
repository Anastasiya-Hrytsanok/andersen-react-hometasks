const rowData = [
  {
    fieldName: 'Имя',
    label: 'name',
    placeholder: 'Введите Ваше имя',
    validation: [
      {
        type: 'REQUIRED',
        errorMessage: 'Поле пустое. Заполните пожалуйста',
      },
      {
        type: 'UPPERCASE_FIRST_LETTER',
        errorMessage: 'Имя должно начинаться с заглавной буквы',
      },
    ],
  },
  {
    fieldName: 'Фамилия',
    label: 'surname',
    placeholder: 'Введите Вашу фамилию',
    validation: [
      {
        type: 'REQUIRED',
        errorMessage: 'Поле пустое. Заполните пожалуйста',
      },
      {
        type: 'UPPERCASE_FIRST_LETTER',
        errorMessage: 'Фамилия должна начинаться с заглавной буквы',
      },
    ],
  },
  {
    fieldName: 'Дата рождения',
    label: 'birthday',
    placeholder: 'Введите дату Вашего рождения',
    validation: [
      {
        type: 'REQUIRED',
        errorMessage: 'Поле пустое. Заполните пожалуйста',
      },
      {
        type: 'DATE_PICKER',
        errorMessage: 'Дата рождения не может быть больше вчерашней даты',
      },
    ],
  },
  {
    fieldName: 'Телефон',
    label: 'phonenumber',
    maxLength: 12,
    placeholder: 'Введите номер телефона в формате 7-7777-77-77',
    validation: [
      {
        type: 'REQUIRED',
        errorMessage: 'Поле пустое. Заполните пожалуйста',
      },
      {
        type: 'PHONE_FORMAT',
        pattern: /[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}/,
        errorMessage: 'Неправильный формат номера (7-7777-77-77)',
      },
    ],
  },
  {
    fieldName: 'Сайт',
    label: 'website',
    placeholder: 'Оставьте ссылку на сайт',
    validation: [
      {
        type: 'REQUIRED',
        errorMessage: 'Поле пустое. Заполните пожалуйста',
      },
      {
        type: 'INCLUDE_HTTPS',
        errorMessage: 'Ссылка должна начинаться с "https://"',
      },
    ],
  },
  {
    fieldName: 'О себе',
    label: 'aboutUser',
    placeholder: 'Напишите несколько строк о себе',
    linesNumber: 7,
    validation: [
      {
        type: 'REQUIRED',
        errorMessage: 'Поле пустое. Заполните пожалуйста',
      },
      {
        type: 'CHARACTER_LIMIT',
        characterLimit: 600,
        errorMessage: 'Превышен лимит символов',
      },
    ],
  },
  {
    fieldName: 'Стек технологий',
    label: 'technologyStack',
    placeholder: 'Напишите технологии, которые вы использовали',
    linesNumber: 7,
    validation: [
      {
        type: 'REQUIRED',
        errorMessage: 'Поле пустое. Заполните пожалуйста',
      },
      {
        type: 'CHARACTER_LIMIT',
        characterLimit: 600,
        errorMessage: 'Превышен лимит символов',
      },
    ],
  },
  {
    fieldName: 'Описание последнего проекта',
    label: 'projectDescription',
    placeholder: 'Опишите Ваш последний проект',
    linesNumber: 7,
    validation: [
      {
        type: 'REQUIRED',
        errorMessage: 'Поле пустое. Заполните пожалуйста',
      },
      {
        type: 'CHARACTER_LIMIT',
        characterLimit: 600,
        errorMessage: 'Превышен лимит символов',
      },
    ],
  },
];

export default rowData;
