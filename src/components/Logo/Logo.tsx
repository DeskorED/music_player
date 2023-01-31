import "./style.scss";

interface LogoProps {
  className: string | undefined;
  imageSrc: string | undefined;
}

export const Logo = ({ className, imageSrc }: LogoProps): JSX.Element => {
  return (
    <div className={className}>
      <img className={className + "-img"} src={imageSrc} alt="" />
    </div>
  );
};
