import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph } from "../../styles";
import { SongTitle, MusicItem } from "./styles";
import AudioPlayer from "react-h5-audio-player";
import BandcampPlayer from "react-bandcamp";

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
        <BandcampPlayer album="2705074966" tracklist={false} artwork="small" />
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
          <SongTitle>Don't Look Back in Anger</SongTitle>
          <br />
          <Player sound="anger.mp4"></Player>
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
