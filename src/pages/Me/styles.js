import styled from "styled-components";
import { SideNav } from "carbon-components-react/lib/components/UIShell";

export const ProfileLink = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 18px;
`;
export const DiscordParagraph = styled.p`
  white-space: pre-wrap;
  line-height: 1.6;
`;

export const DiscordWidget = styled.p`
  white-space: pre-wrap;
  margin-top: 10px;
`;

export const StyledSideNav = styled(SideNav)`
  @media (max-width: 640px) {
    display: none;
  }
`;
