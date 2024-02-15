import style from './HeadingWithSmall.module.css'


export default function HeadingWithSmall({headingText, smallNode, subheadingText}) {
  return <div className={style.headingContainer}>
    <h1 className={style.heading}>{headingText}</h1>
    {!!smallNode && <small className={style.small}>{smallNode}</small>}
    {!!subheadingText && <span className={style.subheading}>{subheadingText}</span>}
  </div>
}