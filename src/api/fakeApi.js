const mockData = {
  users: [
    {
      id: 1,
      fullName: 'Alberta Catharine',
      account: 'companydomain/AlbertaCatharine',
      email: 'AlbertaCatharine@companydomain.com',
      group: 'CDN/CEO',
      phone: '+123(456)123-45-66'
    },
    {
      id: 2,
      fullName: 'Alexander Suhotin',
      account: 'companydomain/AlexanderSuhotin',
      email: 'AlexanderSuhotin@companydomain.com',
      group: 'CDN/Managers',
      phone: '+123(456)123-45-66'
    },
    {
      id: 3,
      fullName: 'Andrey Fedorov',
      account: 'companydomain/AndreyFedorov',
      email: 'AndreyFedorov@companydomain.com',
      group: 'CDN/Managers',
      phone: '+123(456)123-45-66'
    },
    {
      id: 4,
      fullName: 'Azobe Cylister',
      account: 'companydomain/AzobeCylister',
      email: 'AzobeCylister@companydomain.com',
      group: 'Unmanaged',
      phone: '+123(456)123-45-66'
    }
  ],
  groups: [
    { id: 1, name: 'CDN/CEO', description: 'Руководство компании' },
    { id: 2, name: 'CDN/Managers', description: 'Менеджмент среднего звена' },
    { id: 3, name: 'Unmanaged', description: 'Пользователи без группы' }
  ]
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const fetchUsers = async () => {
  await delay(800)
  return [...mockData.users]
}

export const fetchGroups = async () => {
  await delay(800)
  return [...mockData.groups]
}
