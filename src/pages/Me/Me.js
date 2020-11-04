import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
import { ProfileLink,DiscordWidget } from './styles';

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>{user.basics.summary}</Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <div>
          {user.skills.map(skill => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
          {user.basics.profiles.map((profile, i) => (
            <ProfileLink key={profile.network}>
              {i !== 0 && ' | '}
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                {profile.network}
              </a>
            </ProfileLink>
          ))}
        </ul>
      </div>
      <div >
        <SectionTitle>Discord</SectionTitle>
        <Paragraph>Southeast Asian languages, Burmese in particular, are a huge passon of mine. {"\n"} 
          If you're into language exchange, or if you are simply interested in learning a bit about something new, {"\n"}check out my SEA-English
          language exchange Discord server! 125 members strong and growing.
        </Paragraph>
        <DiscordWidget>
          <iframe title="discord-server" src="https://discord.com/widget?id=653748714044784660&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </DiscordWidget>
      </div>
    </Layout>
  );
};

export default Me;