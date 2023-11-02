import Vconsole from 'vconsole';
import { isMobile } from'react-device-detect';

export const startVconsole = () => isMobile && new Vconsole();