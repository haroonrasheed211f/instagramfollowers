import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const ButtonWithDropdown = ({ imageSrc, buttonText, dropdownContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper onMouseLeave={closeDropdown}>
      <StyledButton onClick={toggleDropdown}>
        <img src={imageSrc} alt="icon" />
        <span>{buttonText}</span>
      </StyledButton>
      {isOpen && <DropdownMenu>{dropdownContent}</DropdownMenu>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  text-decoration: none;
  background: linear-gradient(
    270deg,
    rgba(81, 56, 238, 0.4),
    rgba(56, 238, 81, 0.4)
  );
  background-size: 200% 200%;
  animation: ${gradientAnimation} 3s linear infinite;
  color: rgb(255 255 255);
  padding: 0.5rem 1rem;
  border: 3px solid transparent;
  border-radius: 2rem;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  img {
    margin-left: 0;
    padding: 0;
    width: auto;
    height: 100%;
  }

  span {
    margin-left: 0.5rem;
  }

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    transform: scale(0.96);
  }
`;
const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;
  font-size: 1.5rem;
`;

const DropdownItem = styled.a`
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #f1f1f1;
    color: #007bff;
  }
`;

export default ButtonWithDropdown;
