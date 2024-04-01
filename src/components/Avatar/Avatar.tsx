import style from './avatar.module.css';

interface AvatarProps {
  url: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Avatar = (props: AvatarProps) => {
  const { ...rest } = props;
  return (
    <div className={`avatar ${rest.className}`}>
      <img src={props.url} alt="avatar" className={style.avatar} />
    </div>
  );
};
