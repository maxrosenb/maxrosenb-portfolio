import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { PlayButton, SongTitle, MusicItem } from './styles';

//debugger
const Music = ({ user }) => {
  let come = new Audio("/around.mp3")
  let natty = new Audio("/natty.mp3")
  let surround = new Audio("/surround.mp3")

  const startCome = () => {
    var come_text = document.getElementById("button_come");
    if(come.paused) {
      come.play();
      come_text.innerHTML = "&#11035;";
    }else {
      come.pause();
      come_text.innerHTML = "&#9654;"
    }
  }

  const startNatty = () => {
    var natty_text = document.getElementById("button_natty");
    if(natty.paused) {
      natty.play();
      natty_text.innerHTML = "&#11035;";
    }else {
      natty.pause();
      natty_text.innerHTML = "&#9654;"
    }
  }

  const startSurround = () => {
    var surround_text = document.getElementById("button_surround");
    if(surround.paused) {
      surround.play();
      surround_text.innerHTML = "&#11035;";
    }else {
      surround.pause();
      surround_text.innerHTML = "&#9654;"
    }
  }

  return (
    <Layout user={user}>
      <SectionTitle>Music</SectionTitle>
        <div>
          <Paragraph>I am constantly working on new music. Here's some of what I've been working on lately!</Paragraph>
        </div>
        <div>
          <Paragraph>Check out my 2018 full-length album Treats <a href="ballersanonymous.bandcamp.com/releases">here</a>.</Paragraph>
        </div>

        <ul>
          <MusicItem>
            <SongTitle>Come Around - Max Rosenberg</SongTitle>
            <br />
            <PlayButton id="button_come" onClick={startCome}>&#9654;</PlayButton>
          </MusicItem>
          <MusicItem>
            <SongTitle>Natty - Max Rosenberg</SongTitle>
            <br />
            <PlayButton id="button_natty" onClick={startNatty}>&#9654;</PlayButton>
          </MusicItem>
          <MusicItem>
            <SongTitle>Surrounded (interlude) - Dhaamin Sideeq - Max Rosenberg (Guitar)</SongTitle>
            <br />
            <PlayButton id="button_surround" onClick={startSurround}>&#9654;</PlayButton>
          </MusicItem>
        </ul>
    </Layout>
  );
};

export default Music;