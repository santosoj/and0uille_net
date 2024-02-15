import Affiliation from '../Affiliation'

import style from './PigtechTerms.module.css'


/*
 * big tech, pig tech…
 * ha haw, charade ye are.
 */
export default function PigtechTerms({denomination, address}) {
  return <>
    <h4>❤🦜 my terms for bigtechs. 🦜❤</h4>
    <ul className={style.termsList}>
        <li>consulting fee is one point five million islenska krónur an hour.</li>
        <li>equivalent of this at time of payment to be paid to my ETH address.</li>
        <li>because why would And do consulting for bigtech for free.</li>
        <li>consulting provided in the past needs to be reimbursed for as well.</li>
    </ul>
    <Affiliation />  
    <h4 className={style.priceTag}>{denomination}: {address}</h4>
  </>
}
