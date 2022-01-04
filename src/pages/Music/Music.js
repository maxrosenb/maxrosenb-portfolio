import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph } from "../../styles";
import { SongTitle, MusicItem } from "./styles";
import AudioPlayer from "react-h5-audio-player";

const Player = ({ sound }) => (
  <AudioPlayer
    src={sound}
    onPlay={(e) => console.log("onPlay")}
    // other props here
  />
);

const Music = ({ user }) => {
  return (
    <Layout user={user}>
      <SectionTitle>Music</SectionTitle>
      <div>
        <Paragraph>
          I am constantly working on new music. Here's some of what I've been
          working on lately!
        </Paragraph>
      </div>
      <div>
        <Paragraph>
          Check out my 2018 full-length album Treats{" "}
          <a href="https://www.ballersanonymous.bandcamp.com/releases">here</a>.
        </Paragraph>
      </div>

      <ul>
        <MusicItem>
          <SongTitle>Kokomo Beach</SongTitle>
          <br />
          <Player sound="kokomo.mp3"></Player>
        </MusicItem>
        <MusicItem>
          <SongTitle>Poster</SongTitle>
          <br />
          <Player sound="poster.mp4"></Player>
        </MusicItem>
        <MusicItem>
          <SongTitle>Come Around</SongTitle>
          <br />
          <Player sound="around.mp3"></Player>
        </MusicItem>
        <MusicItem>
          <SongTitle>It Snowed</SongTitle>
          <br />
          <Player sound="snow.mp3"></Player>
        </MusicItem>
        <MusicItem>
          <SongTitle>Natty</SongTitle>
          <Player sound="natty.mp3"></Player>
        </MusicItem>
        <MusicItem>
          <SongTitle>Surrounded (interlude)</SongTitle>
          <br />
          <Player sound="surround.mp3"></Player>
        </MusicItem>
      </ul>
    </Layout>
  );
};

export default Music;
