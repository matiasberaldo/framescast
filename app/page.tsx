"use client";

import Image from "next/image";
import { styled } from "styled-components";
import Switch from "./components/switch";
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const Logo = styled.div`
  align-content: center;
  align-items: center;
  background-color: #8a63d2;
  border-radius: 12px;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  width: 50px;
  height: 50px;
  justify-content: center;
  overflow: hidden;
  padding: 10px 9px;
  position: relative;
`;

const LogoWrapper = styled.div`
  display:flex;
  align-items:center;
  font-size:25px;

  div:first-of-type {
    margin-right:10px;
  }

  p {
    margin:0;
    padding:0;
    font-family: 'Pacifico';

    span {
      position:relative;
      top:-8px;
      left:2px;
      display:inline-block;
      font-size:20px;
    }
  }
`;

const Nav = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  margin:auto;
  width:100%;
  padding:20px 0;
  display:flex;
  justify-content:space-between;
  align-items:center;
  max-width:1200px;
  margin:0 auto;
`;

const Connect = styled.div`
  .dynamic-widget {
    button {
      background-color:red!important;
    }
  }
`;

const Content = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  flex-grow:1;
  text-align:center;
  width:100%;
  max-width:800px;
  margin:0 auto;

  h1 {
    font-size:2rem;
    font-weight:bold;
    margin:20px 0;
  }

  input {
    width:100%;
    border:3px solid rgba(0,0,0,1);
    border-radius:10px;
    padding:20px 20px;
    outline-style:none;
    transition: all .2s;
    box-shadow: 0 0 0 0 rgba(0,0,0,.0);

    &:focus {
      transition: all .2s;
      box-shadow: 0 0 0 5px rgba(0,0,0,.05);
    }
  }
`;

const Frames = styled.div`
  width:100%;
  height:100vh;
  background-color:#fff;
  border-top: 1px solid rgba(0,0,0,.05);
`;

const Header = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  background-color:#fafafa;
  height:100vh;

  * {
    z-index:1;
  }

  @keyframes move {
    from {
      background-position:0% 0%;
    }

    to {
      background-position:500% 500%;
    }
  }

  &:before {
    position:absolute;
    content:"";
    width:100%;
    height:100%;
    background-image:url("/framescast_minilogo.png");
    background-size:70px 70px;
    opacity:.02;
    z-index:0;
    animation-name:move;
    animation-duration:300s;
    animation-iteration-count:infinite;
    animation-fill-mode:forwards;
  }
`;

const Button = styled.button`
  font-size:1rem;
  border-radius:40px;
  background-color: #eaeaea;
  padding:0px 15px;
  color:#000;
  margin-top:20px;
  border:2px solid rgba(0,0,0,.1);
  font-size:.8rem;
  display:flex;
  align-items:center;

  span {
    font-size:1.2rem;
    margin-right:10px;
  }
`;

const Actions = styled.div`
  display:flex;
  width:100%;
  justify-content:flex-start;
  text-align:left;

  button:not(:last-of-type) {
    margin-right:10px;
  }
`;

export default function Home() {
  return (
    <DynamicContextProvider 
        settings={{ 
          environmentId: 'b85a87cc-1d03-4f7d-bd32-5f4ff455bc6d',
          walletConnectors: [ EthereumWalletConnectors ],
        }}> 
      <Header>
      <Nav>
        <LogoWrapper>
          <Logo>
            <Image
              src="/framescaster_logo.png"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </Logo>
          <p>
            framescast
            <span>✨</span>
          </p>
        </LogoWrapper>
        <Connect>
          <DynamicWidget variant="dropdown" innerButtonComponent={
            <>Connect wallet</>
          } />
        </Connect>
      </Nav>
      <Content>
            <h1>Find, sell & buy Farcaster frames easily<span>✨</span></h1>
            <input type="text" placeholder="Type here a frame name or description" />
          <Actions>
            <Button><span style={{ fontWeight: "bold" }}>+</span> Add a frame</Button>
            <Button><span style={{ fontWeight: "bold" }}>{">"}</span> Explore recent frames</Button>
            <Button>Sell a frame</Button>
          </Actions>
      </Content>
      </Header>
      <Frames>
          <h1>Trending</h1>
      </Frames>
    </DynamicContextProvider>
  );
}
