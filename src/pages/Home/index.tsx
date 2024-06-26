import { ChangeEvent, useEffect, useState } from "react";
import { Repository } from "../../types/repository";
import { RepositoryItem } from "../../components/RepositoryItem";

import "./styles.css";

export const Home = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<string>("");

  const handleGetRepos = async () => {
    setIsLoading(true);

    const response = await fetch(
      `https://api.github.com/users/${
        user || "lucielsantos"
      }/repos?sort=created`
    ).then((response) => response.json());

    setRepos(response);

    setIsLoading(false);
  };

  const handleChangeUser = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    setUser(inputValue);
  };

  useEffect(() => {
    handleGetRepos();
  }, []);

  return (
    <div>
      <h1 className="title">Usuário do Github:</h1>

      <input className="search" value={user} onChange={handleChangeUser} />

      <button onClick={handleGetRepos}>Buscar</button>

      <h1 className="title">Repositórios:</h1>

      {isLoading ? (
        <h2>Carregando repositórios...</h2>
      ) : (
        <ul>
          {repos.map((repo) => {
            return <RepositoryItem key={repo.id} repo={repo} />;
          })}
        </ul>
      )}
    </div>
  );
};
