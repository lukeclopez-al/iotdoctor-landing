import React from "react"
import styled from "styled-components"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <span>Features</span>
        <ul>
          <li>Automation</li>
          <li>Rewards</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Resources</span>
        <ul>
          <li>Compare</li>
          <li>Blog</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Company</span>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Legal</span>
        <ul>
          <li>
            <a href="/terms-and-privacy">Privacy</a>
          </li>
          <li>
            <a href="/terms-and-privacy">Terms</a>
          </li>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
    <LogoWrapper>
      Powered by{" "}
      <Logo href="https://aethonlabs.com" referrerpolicy="origin">
        Aethon Labs
      </Logo>
    </LogoWrapper>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
      a {
        text-decoration: none;
        color: inherit;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }
`

const LogoWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  opacity: 60%;
  margin: 1em;
`

const Logo = styled.a`
  color: ${props => props.theme.color.primary};
  text-decoration: none;
  font-weight: bold;
`

export default Footer
