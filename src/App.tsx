import { useState } from 'react';

import { Container } from 'components/Container'
import { TheHeader } from 'components/TheHeader';
import { Search } from 'components/Search';
import { UserCard } from 'components/UserCard';
import { defaultUser } from 'mock';
import { GithubError, GithubUser, LocalGithubUser } from 'types';
import { isGithubUser } from 'utils/typeguards';
import { extractLocalUser } from 'utils/exract-local-user';

const BASE_URL = 'https://api.github.com/users/'

function App() {
  // состояние юзера будем обновлять через юзСтейт, по умолчанию дефолтный юзер
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  // юзера будем получать в определенный момент
  const fetchUser = async (text: string) => {
    const url = BASE_URL + text;

    const res = await fetch(url);
    const user = await res.json() as GithubUser | GithubError; // нужна проверка что у нас юзер есть а не ошибка
    // создадим утилиту для защиты (проверки)
    if(isGithubUser(user)) {
      setUser(extractLocalUser(user)); //так как у нас несовпадение типов локал и гитхаб юзер то нужно сделать ремапинг типа, еще одна утилита
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <TheHeader/>
      <Search hasError={!user} onSubmit={fetchUser}/>
      {/* UserCard будем отрисовывать только при наличии user, если нет то выседем сообщение*/}
      {user && (
        <UserCard
          {...user} //теперь можно заменить дефолтного юзера на юзера из стейта
        />
      )} 
    </Container>
  );
}

export default App;
