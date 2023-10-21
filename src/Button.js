export default function Button({ titulo, ...props }) {
  return <button {...props}>{titulo}</button>;
}
