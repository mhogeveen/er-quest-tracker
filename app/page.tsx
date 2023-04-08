import HomePage from './home-page'

async function getNpcs() {
  const response = await fetch('http://localhost:3000/api/npcs')
  return await response.json()
}

export default async function Page() {
  const npcsData = await getNpcs()

  return <HomePage npcs={npcsData} />
}
