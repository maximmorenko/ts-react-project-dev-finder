import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import { Button } from 'components/Button';

import styles from './Search.module.scss';

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void,
}

type FormFields = {
  username: HTMLInputElement,
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    // чтобы страница не перегружалась при отправке 
    event.preventDefault();

    const text = event.currentTarget.username.value;

    // сделаем провпрку есть ли текст в поиске, если есть то передаем его в сабмит 
    // на случай лишних пробелов очищаем их
    // после сабмита очищаем 
    if (text.trim()) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {/* отключаем автозаполнение autoComplete off */}
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search GitHub username..."
        />
        {/* на случай ошибки делаем проверку, если есть то выводим текст */}
        {hasError && (
          <div className={styles.error}>
            No result
          </div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  );
};
