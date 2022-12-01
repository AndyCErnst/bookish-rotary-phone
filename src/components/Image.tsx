interface ImageProps {
  name: string
  alt?: string
  className?: string
}
export const Image = ({ name, className, alt = '' }: ImageProps) => {
  const url = `${process.env.PUBLIC_URL}/images/${name}`
  return <img src={url} alt={alt} className={className} />
}
