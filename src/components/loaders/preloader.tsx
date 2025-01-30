interface PreloaderProps {
  phase1: string;
  phase2: string;
  phase3: string;
  brandText: string;
}

export default function Preloader({
  phase1,
  phase2,
  phase3,
  brandText,
}: PreloaderProps) {
  return (
    <div className="impkt-preloader">
      <div className="impkt-preloader-animation">
        <div className="impkt-pos-abs impkt-animation-1">
          <p className="impkt-h3 impkt-muted impkt-thin">{phase1}</p>
          <p className="impkt-h3 impkt-muted">{phase2}</p>
          <p className="impkt-h3 impkt-muted impkt-thin">{phase3}</p>
        </div>
        <div className="impkt-pos-abs impkt-animation-2">
          <div className="impkt-reveal-frame">
            <p className="impkt-reveal-box"></p>
            <p className="impkt-h3 impkt-muted impkt-thin">{brandText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
