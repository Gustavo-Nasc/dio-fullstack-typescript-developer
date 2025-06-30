type CardProps = {
  title: string
  text: string
  details: string
}

export function Card({ title, text, details }: CardProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{details}</span>
    </div>
  )
}
