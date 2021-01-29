const tableData = [
  {
    id: 1,
    aircraft: 'PP-LAY AIRBUSS',
    passenger: '8',
    partner: 'CAF',
    base: 'SSUB',
    provider: 'R$ 10.500,00',
    recomendedByLider: 'R$ 12.500,00',
    overnightStay: 'cotar',
    comments: '2h cortesia'
  },
  {
    id: 2,
    aircraft: 'PP-LAY AIRBUSS',
    passenger: '8',
    partner: 'CAF',
    base: 'SSUB',
    provider: 'R$ 10.500,00',
    recomendedByLider: 'R$ 12.500,00',
    overnightStay: 'cotar',
    comments: '2h cortesia'
  }
]

const tableHeaders = [
  {
    name: 'aircraft',
    label: 'Aeronave'
  },
  {
    name: 'passenger',
    label: 'PAX'
  },
  {
    name: 'partner',
    label: 'Parceiro'
  },
  {
    name: 'base',
    label: 'Base'
  },
  {
    name: 'provider',
    label: 'Fornecedor'
  },
  {
    name: 'recomendedByLider',
    label: 'Recomendado Lider'
  },
  {
    name: 'overnightStay',
    label: 'Pernoite'
  },
  {
    name: 'comments',
    label: 'Observações'
  }
]

export {
  tableData,
  tableHeaders
}