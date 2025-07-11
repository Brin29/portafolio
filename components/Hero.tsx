import { Spotlight } from "./ui/Spotlight"

export const Hero = () => {
  return (
    <div className="h-[100vh]">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
      </div>
    </div>
  )
}
