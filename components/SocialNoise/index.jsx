import style from './SocialNoise.module.css'


/**
 * @typedef {Object} Card
 * @property {string} imgUrl
 * @property {string} domain
 * @property {string} title
 * @property {string} description
 * 
 * @typedef {Object} SocialNoiseProps
 * @property {string} displayName
 * @property {string} accountName
 * @property {string} accountHref
 * @property {string} statusLink HTML literal
 * @property {string} textBody HTML literal
 * @property {Card} [card]
 */


/**
 * @param {SocialNoiseProps}
 */
export default function SocialNoise({
  displayName,
  accountName,
  accountHref,
  statusLink,
  textBody,
  card,
}) {

  return <div className={style.root}>
    <div className={style.header}>
      <span><a href={accountHref}>{displayName}</a></span>
      <span><a href={accountHref}>{accountName}</a></span>
      <span>·</span>
      <bdo dangerouslySetInnerHTML={{__html: statusLink}}></bdo>
    </div>
    <div className={style.textBody} dangerouslySetInnerHTML={{__html: textBody}} />
    {!!card && (
      <a className={style.card} href={card.href}>
      {!!card.imgUrl ? (
        <div
          className={style.cardImg}
          style={{
            backgroundImage: `url("${card.imgUrl}")`,
          }}
        >
        </div>
      ) : (
        <div className={style.cardHeader} />
      )}
        <div className={style.cardTextBody}>
          <span className={style.cardDomain}>{card.domain}</span>
          <span className={style.cardTitle}>{card.title}</span>
          <span className={style.cardDescription}>{card.description}</span>
        </div>
      </a>      
    )}
  </div>
}
