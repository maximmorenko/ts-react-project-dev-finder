import styles from './Button.module.scss';

interface ButtonProps { 
  children: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>, //наводим на атрибут onClick в кнопке и смотрим тип
}

export const Button = ({ children, onClick }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);
