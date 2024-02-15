import style from './EmojiLike.module.css'

import assets, { EmojiLikeAsset } from './assets'


/**
 * 
 * @param {{assetKey: keyof EmojiLikeAsset}} param0 
 * @returns 
 */
export default function EmojiLike({assetKey}) {
  return <span className={style.wrapper}>
    {assets[EmojiLikeAsset[assetKey]]}
  </span>
}