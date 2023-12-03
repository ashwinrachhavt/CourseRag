import getRandomCourse from '@/lib/getRandomCourse'
import Course from './Components/Courses'

export default async function Home() {
  const randomCourse = await getRandomCourse()

  return <Course {...randomCourse} />
}