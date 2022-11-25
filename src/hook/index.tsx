/* eslint-disable prettier/prettier */
import React from 'react';

import { BagProvider } from './Bag';

type Props = {
    children?: React.ReactNode
  };
const hook: React.FC<Props> = ({ children }) => <BagProvider>{children}</BagProvider>;

export default hook;
