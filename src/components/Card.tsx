type CardProps = {
    children: JSX.Element | JSX.Element[];
}

const Card = ({ children }: CardProps) => {
  return (
    <div>
        { children }
    </div>
  )
}

export default Card;