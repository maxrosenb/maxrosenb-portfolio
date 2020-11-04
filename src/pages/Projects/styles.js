import styled from 'styled-components'
import { white } from '@carbon/colors'

export const ProjectItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`

export const ProjectTitle = styled.h4`
  font-weight: bold;
`

export const SkillContainer = styled.div`
  margin-top: 1.2rem;
`

export const DiscordContainer = styled.div`
margin-top: 1.2rem;
`

export const ViewGitLink = styled.a`
  display: flex;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  border: 2px solid #2ecc40;
  background-color: rgba(46, 204, 64, 0.3);
  transition: background-color 250ms ease;
  &:hover {
    background-color: #2ecc40;
  }
  svg {
    fill: white;
    margin-left: 8px;
  }
`;