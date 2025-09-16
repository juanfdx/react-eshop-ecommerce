import './Title.scss';


type TitleProps = {
  title?: string;
  center?: boolean;
}


export const Title = ({ title, center = false }: TitleProps) => {
  
  return (
    <h2 className={`title ${(center) ? 'title--center' : ''} `}>
      {(title) ? title : 'Title'}
    </h2>
  )
}