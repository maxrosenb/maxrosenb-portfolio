import styled from 'styled-components'
import { white } from '@carbon/colors'

export const PlayButton = styled.button` 
    width: 74px;
    height: 74px;
    margin-top: 1rem;
  `

export const SongTitle = styled.p`
    font-weight: bold;
    display: inline-block;
  `

export const ArtistTitle = styled.p`
    display: inline-block;
  `

export const MusicItem = styled.li`
    margin-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${white};
  `