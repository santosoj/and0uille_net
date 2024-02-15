const SYM_TRANS_PRIDE = Symbol('TRANS_PRIDE')
const SYM_LGBTQ_PRIDE = Symbol('LGBTQ_PRIDE')
const SYM_AUS_ABO_FLAG = Symbol('AUS_ABO_FLAG')
const SYM_GO_VEGAN = Symbol('GO_VEGAN')
const SYM_PALESTINE_FLAG = Symbol('PALESTINE_FLAG')


export const EmojiLikeAsset = Object.freeze({
  TRANS_PRIDE: SYM_TRANS_PRIDE,
  LGBTQ_PRIDE: SYM_LGBTQ_PRIDE,
  AUS_ABO_FLAG: SYM_AUS_ABO_FLAG,
  GO_VEGAN: SYM_GO_VEGAN,
  PALESTINE_FLAG: SYM_PALESTINE_FLAG,
})

const svgTransPrideFlag = (
  <svg
    viewBox="0 0 800 480"
    style={{
      display: 'inline-block',
      verticalAlign: 'middle',
      height: '0.8em',
      transform: 'translateY(-1px)',
      marginLeft: '1px',
      marginRight: '1px',
    }}
  >
    <rect fill="#5BCEFA" width="800" height="480" />
    <rect fill="#F5A9B8" width="800" height="288" y="96" />
    <rect fill="#FFF" width="800" height="96" y="192" />
  </svg>  
)

const svgLGBTQPrideFlag = (
  <svg
    viewBox="0 0 777 480"
    style={{
      display: 'inline-block',
      verticalAlign: 'middle',
      height: '0.8em',
      transform: 'translateY(-1px)',
      marginLeft: '1px',
      marginRight: '1px',
    }}
  >
    <path fill="#770088" d="M0 0h777v480H0z"/>
    <path fill="#004CFF" d="M0 0h777v400H0z"/>
    <path fill="#028121" d="M0 0h777v320H0z"/>
    <path fill="#FFEE00" d="M0 0h777v240H0z"/>
    <path fill="#FF8D00" d="M0 0h777v160H0z"/>
    <path fill="#E50000" d="M0 0h777v80H0z"/>
  </svg>
)

const svgAusAboFlag = (
  <svg 
    viewBox="0 0 10 6"
    style={{
      display: 'inline-block',
      verticalAlign: 'middle',
      height: '0.8em',
      transform: 'translateY(-1px)',
      marginLeft: '1px',
      marginRight: '1px',
    }}
    role="img"
    aria-label="Australian Aboriginal Flag"
  >
    <rect
       width="10"
       height="6"
       id="rect4" />
    <rect
       width="10"
       height="3"
       y="3"
       fill="#de3831"
       id="rect6"
       style={{fill: '#d22630', fillOpacity: 1}} />
    <circle
       r="1.5"
       cy="3"
       cx="5"
       fill="#fdc82f"
       id="circle8"
       style={{fill:'#ffc72c', fillOpacity: 1}} />
  </svg>  
)


const svgGoVegan = (
  <svg
    viewBox="0 0 109.75 28"
    style={{
      display: 'inline-block',
      verticalAlign: 'middle',
      height: '1em',
      transform: 'translateY(-2px)',
      marginLeft: '1px',
      marginRight: '1px',
    }}
    role="img"
    aria-label="GO VEGAN"
  >
    <g shapeRendering="crispEdges">
      <rect width="41.5" height="28" fill="#555"/>
      <rect x="41.5" width="68.25" height="28" fill="#97ca00"/>
    </g>
    <g fill="#fff" textAnchor="middle" fontFamily="Verdana,Geneva,DejaVu Sans,sans-serif" textRendering="geometricPrecision" fontSize="100">
      <text transform="scale(.13)" x="155" y="150" textLength="175" fill="#fff">GO</text>
      <text transform="scale(.13)" x="586" y="150" textLength="442.5" fill="#fff" fontWeight="bold">VEGAN</text>
    </g>
  </svg>
)

const svgPalestineFlag = (
  <svg
    viewBox="0 0 6 3"
    style={{
      display: 'inline-block',
      verticalAlign: 'middle',
      height: '0.8em',
      transform: 'translateY(-1px)',
      marginLeft: '1px',
      marginRight: '1px',
    }}
    role="img"
    aria-label="Flag of Palestine"
  >
      <rect fill="#009639" width="6" height="3"/>
      <rect fill="#FFF" width="6" height="2"/>
      <rect width="6" height="1"/>
      <path fill="#ED2E38" d="M0,0l2,1.5L0,3Z"/>
  </svg>  
)

/** @type {{[K in EmojiLikeAsset[keyof EmojiLikeAsset]]: JSX.Element}} */
const assets = {
  [EmojiLikeAsset.TRANS_PRIDE]: svgTransPrideFlag,
  [EmojiLikeAsset.LGBTQ_PRIDE]: svgLGBTQPrideFlag,
  [EmojiLikeAsset.AUS_ABO_FLAG]: svgAusAboFlag,
  [EmojiLikeAsset.GO_VEGAN]: svgGoVegan,
  [EmojiLikeAsset.PALESTINE_FLAG]: svgPalestineFlag,
}


export default assets
