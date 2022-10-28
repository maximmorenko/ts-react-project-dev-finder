import { LocalGithubUser } from 'types';
import styles from './UserTitle.module.scss';

// из пропсов нам понадобятся логин неим и криэйтид, возьмем их в локалГитхабЮзер
interface UserTitleProps extends Pick<
  LocalGithubUser,
  'name' | 'login' | 'created'
>{}

// так как криейтид приходит в виде строки, то нужно преобразовать его в дату
// в JS есть объект Intl интел, отвечает за интернационалиозацию и унего есть метод DateTimeFormat
// в котором мы укажем в каком формате показывать дату
const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short', //короткая форма
  year: 'numeric',
});

export const UserTitle = ({ created, login, name }: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created))

  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
  );
};
