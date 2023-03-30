export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? "Não temos"}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.link}>Acessar Repositório</a>
    </li>
  );
}
