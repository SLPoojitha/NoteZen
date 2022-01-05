import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import LogoIcon from '../../../icons/logo2.png';
import { capitalizeFirstLetter } from 'shared/utility';

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImg = styled.img`
  width: 137px;
  height: 47px;
  margin-bottom: 4px;
  padding-right: 4px;
`;

const LogoText = styled('span')<{ path: string }>`
  font-size: 2.2rem;
  line-height: 2.4rem;
  color: #5f6368;
  padding-left: 4px;
  font-weight: ${(props) => (props.path ? '400' : '300')};
`;

const Logo = ({ location }: RouteComponentProps) => {
  let path: string = location?.pathname.slice(1)!;
  if (path === 'notes' || path === '') path = 'keep';

  return (
    <LogoContainer href="/">
      {path === 'keep' && <LogoImg src={LogoIcon} alt="Logo" />}
    </LogoContainer>
  );
};

export default withRouter(Logo);
