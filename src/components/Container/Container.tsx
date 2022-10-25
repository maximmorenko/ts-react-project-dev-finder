import { ReactNode } from 'react';
import styles from './Container.module.scss';

// контейнер будет принимать чилдренов, и куда-то пробрасывать
interface ContainerProps {
  children: ReactNode,
}

export const Container = ({ children }: ContainerProps) => (
  // деструктурируем пропс

  <div className={styles.container}>
    {children}
  </div>
);
