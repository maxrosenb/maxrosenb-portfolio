import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph } from "../../styles";
import {
  ProfileLink,
  DiscordWidget,
  DiscordParagraph,
  DevBadge,
  BadgeTitle,
} from "./styles";

const devBadgeLinks = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-line.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
];

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>{user.basics.summary}</Paragraph>
      </div>
      <div>
        <BadgeTitle>Languages, Libraries, and Frameworks</BadgeTitle>
        {devBadgeLinks.map((link, index) => {
          return <DevBadge key={index} src={link} alt="devicon" />;
        })}
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
          {user.basics.profiles.map((profile, i) => (
            <ProfileLink key={profile.network}>
              {i !== 0 && " | "}
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                {profile.network}
              </a>
            </ProfileLink>
          ))}
        </ul>
      </div>
      <div>
        <SectionTitle>Discord</SectionTitle>
        <DiscordParagraph>
          {" "}
          Learning languages, Burmese in particular, is a passion of mine.{" "}
          {"\n"}
          If you're into language exchange, or if you are simply interested in
          learning a bit about something new, {"\n"}check out my SEA-English
          language exchange Discord server! We are 125 members strong and
          growing.
        </DiscordParagraph>
        <DiscordWidget>
          <iframe
            title="discord-server"
            src="https://discord.com/widget?id=653748714044784660&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </DiscordWidget>
      </div>
    </Layout>
  );
};

export default Me;
