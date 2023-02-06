import "./style.scss";

interface trackListProps {
  className: string | undefined;
}

export const TrackList = ({ className }: trackListProps): JSX.Element => {
  return <div className={className}></div>;
};
