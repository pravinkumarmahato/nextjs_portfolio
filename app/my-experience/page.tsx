import { Timeline } from "@/components/Timeline"
import { experiences } from "@/constants"
const page = () => {
  return (
    <div
      style={{backgroundImage: "url(/bg-6.png)"}}
      className='w-screen h-screen bg-cover bg-center flex items-center justify-center'>
        <div className="w-full bg-no-repeat bg-cover">
          <Timeline data={experiences} title="Work Experience"/>
        </div>
    </div>
  );
};

export default page