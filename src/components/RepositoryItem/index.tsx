import { Repository } from "../../types/repository";
import "./styles.css";

interface RepositoryItemProps {
  repo: Repository;
}

export const RepositoryItem = ({ repo }: RepositoryItemProps) => {
  return (
    <li>
      <a
        target="_blank"
        href={repo.html_url}
        rel="noreferrer"
        className="repo-link"
      >
        {repo.name}
      </a>

      <p className="description">{repo.description}</p>

      <hr />
    </li>
  );
};
