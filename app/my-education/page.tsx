import { Timeline } from "@/components/Timeline"
import { education } from "@/constants"

const page = () => {
  return (
    <div
     style={{backgroundImage: "url(/bg-7.png)"}}
     className='w-screen h-screen bg-cover bg-center flex items-center justify-center'>
    <div className="w-full bg-no-repeat bg-cover">
      <Timeline data={education} title="Academic Qualification"/>
    </div>
    </div>
  )
}

export default page