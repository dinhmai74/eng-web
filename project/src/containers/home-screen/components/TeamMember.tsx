import { Container, Section } from "@front10/landing-page-book/dist/components"
import { tran } from "localization/i18n"
import React, { Component } from "react"

class TeamMember extends Component {
  render() {
    return (
      <Section title={tran("ourTeacher")}>
        <div className="flex">
          {teamMembers.map((v, i) => (
            <Team {...v} key={i} />
          ))}
        </div>
      </Section>
    )
  }
}

const teamMembers: TeamProps[] = [
  {
    image: "https://picsum.photos/300/400",
    name: "Leonardo",
    job: "Ninja",
    summary:
      "Leonardo, nickname Leo, is a fictional character and one of the four main characters in the Teenage Mutant Ninja Turtles comics and related media.",
    profile: [
      {
        social: "facebook",
        url: "https://www.facebook.com/JavaScriptTeam/",
      },
      {
        social: "twitter",
        url: "https://twitter.com/front10hello?lang=es",
      },
    ],
  },
  {
    image: "https://picsum.photos/300/401",
    name: "Van Gogh",
    job: "Painter",
    summary:
      "He was a Dutch painter, one of the main exponents of post-impressionism, he painted some 900 paintings and made more than 1,600 drawings.",
    profile: [
      {
        social: "facebook",
        url: "https://www.facebook.com/JavaScriptTeam/",
      },
      {
        social: "email",
        url: "https://front10.com",
      },
    ],
  },
  {
    image: "https://picsum.photos/300/402",
    name: "Neil",
    job: "Astronaut",
    summary:
      "American astronaut and aeronautical engineer who was the first person to walk on the Moon. He was also a naval aviator, test pilot, and university professor.",
    profile: [
      {
        social: "facebook",
        url: "https://www.facebook.com/JavaScriptTeam/",
      },
      {
        social: "twitter",
        url: "https://twitter.com/front10hello?lang=es",
      },
    ],
  },
]

interface TeamProps {
  image: string
  name: string
  job: string
  summary: string
  profile?: any
}

const Team: React.FC<TeamProps> = ({ image, name, job, summary }) => {
  return (
    <div className="mx-4 border p-8 px-12 flex flex-col justify-center text-gray-700 text-center max-w-xl">
      <img src={image} alt="avatar" className="mb-4" />
      <p className="font-semibold">{name}</p>
      <p className="text-gray-600">{job}</p>
      <br />

      <p className="">{summary}</p>
    </div>
  )
}

export default TeamMember
