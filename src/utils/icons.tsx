import {
  BiLogoGithub,
  BiLogoGmail,
  BiLogoGoLang,
  BiLogoLinkedinSquare,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoReact,
  BiLogoTelegram,
  BiLogoTypescript,
  BiLogoVuejs
} from "react-icons/bi";
import { IconCard } from "../components/IconCard";

export const Icons = {
  // Languages
  TYPESCRIPT:
  <IconCard tooltip="TypeScript">
    <BiLogoTypescript
    aria-label="typescript"
    style={{ color: "#3178c6" }} />
  </IconCard>,
  PYTHON:
  <IconCard tooltip="Python">
    <BiLogoPython
    aria-label="python"
    style={{ color: "#ffd140" }}/>
  </IconCard>,
  GOLANG:
  <IconCard tooltip="Golang">
    <BiLogoGoLang
    aria-label="golang"
    style={{ color: "#00acd7" }}/>
  </IconCard>,

  // Frameworks
  REACT:
  <IconCard tooltip="React">
    <BiLogoReact
    aria-label="react"
    style={{ color: "#61dafb" }}/>
  </IconCard>,
  VUE:
  <IconCard tooltip="Vue">
    <BiLogoVuejs
    aria-label="vue"
    style={{ color: "#41b883" }}/>
  </IconCard>,

  // Databases
  POSTGRESQL:
  <IconCard tooltip="PostgreSQL">
    <BiLogoPostgresql
    aria-label="postgresql"
    style={{ color: "#336791" }}/>
  </IconCard>,

  // Socials
  EMAIL:
  <IconCard>
    <BiLogoGmail aria-label="email"/>
  </IconCard>,
  GITHUB:
  <IconCard>
    <BiLogoGithub aria-label="github"/>
  </IconCard>,
  LINKEDIN:
  <IconCard>
    <BiLogoLinkedinSquare aria-label="linkedin"/>
  </IconCard>,
  TELEGRAM:
  <IconCard>
    <BiLogoTelegram aria-label="telegram"/>
  </IconCard>
}
