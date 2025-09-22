
export interface Store {
  _id: string
  name: string
  street: string
  city: string
  phone: string
  lat?: number
  lng?: number
}




export const stores: Store[] = [
  {
    _id: "eabf8c3f-5c4f-4b2f-bc2e-1ccbe8c0d39e",
    name: 'Germany Store',
    street: '785 15h Street, Office 478/B Green',
    city: 'Mall Berlin, De 81566',
    phone: '+888 999 777, +999 555 800',
    lat: 52.5200,
    lng: 13.4050
  },
  {
    _id: "df8c1c4b-3e37-4d37-a59e-2d3b697a9a0f",
    name: 'New York Store',
    street: '12/A, New Boston Tower, New York',
    city: 'United States, NY',
    phone: '+888 999 777, +999 555 800',
    lat: 40.7128,
    lng: -74.0060
  },
  {
    _id: "1261e4e3-5e60-4a6b-b9e3-e800b48fef3a",
    name: 'Sub Office',
    street: '785 15h Street, Office 478/B Green',
    city: 'Mall Berlin, De 81566',
    phone: '+888 999 777, +999 555 800',
    lat: 52.5200,
    lng: 13.4050
  },
  {
    _id: "2b5d9c75-85ce-4f53-8c1b-173b3158d42e",
    name: 'Commercial',
    street: '16122 Collins St, West Melbourne',
    city: 'vic 3008, Australia',
    phone: '+061 999 777, +061 555 800',
    lat: 52.5200,
    lng: 13.4050
  }
]