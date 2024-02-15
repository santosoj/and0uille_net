import SocialNoise from '../components/SocialNoise'


export default {
  title: 'SocialNoise',
  component: SocialNoise,
  parameters: {
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

export const ImageCard = {
  args: {
        "platform": "twitter",
        "displayName": "@jonassantoso@mastodon.online",
        "accountName": "@jonassantoso",
        "accountHref": "https://twitter.com/jonassantoso",
        "statusLink": "<a href=\"https://twitter.com/jonassantoso/status/1695571703907418249\"><time datetime=\"2023-08-26T22:59:31.000Z\">Aug 27</time></a>",
        "textBody": "<a href=\"https://youtu.be/9Zs21_tnbgs\">https://youtu.be/9Zs21_tnbgs</a> #auspol #xtians #roevwade Mark his words. Dominionists are everywhere, and dominionist money is flowing. Preparing the overturning of RoevWade was a long haul and went under the radar for most.",
        "card": {
            "imgUrl": "https://pbs.twimg.com/card_img/1695571161353236480/Cbyj_F1p?format=webp&name=240x240",
            "href": "https://youtu.be/9Zs21_tnbgs",
            "domain": "youtube.com",
            "title": "Labor MP Dave Kelly warns of religious groups’ threat to abortion...",
            "description": "A Labor MP in the West Australian parliament has warned his state to “never be complacent” about the threat posed by American-inspired religious groups to wo..."
        }
    },
};

export const TextCard = {
  args: {
        "platform": "mastodon",
        "displayName": "Jonas Santoso",
        "accountName": "@jonassantoso",
        "accountHref": "https://mastodon.online/@jonassantoso",
        "statusLink": "<a href=\"https://mastodon.online/@jonassantoso/110977818917111969\"><time datetime=\"2023-08-30T09:18:49.476Z\">Aug 30</time></a>",
        "textBody": "<p><span class=\"h-card\" translate=\"no\"><a href=\"https://mastodon.social/@dhyannada\" class=\"u-url mention\">@<span>dhyannada</span></a></span> Auch in Erinnerung geblieben: Seeßlens auf der gleichen Website erschienener Artikel über die Rechtswerdung vormals Linker wie Elsässers oder des bald postumen Horst Mahler. <a href=\"http://www.getidan.de/gesellschaft/georg_seesslen/76722/renegaten-verraeter-konvertiten-ueberlaeufer-oder-ueberzeugungstaeter\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" translate=\"no\"><span class=\"invisible\">http://www.</span><span class=\"ellipsis\">getidan.de/gesellschaft/georg_</span><span class=\"invisible\">seesslen/76722/renegaten-verraeter-konvertiten-ueberlaeufer-oder-ueberzeugungstaeter</span></a></p>",
        "card": {
            "imgUrl": null,
            "href": "http://www.getidan.de/gesellschaft/georg_seesslen/76722/renegaten-verraeter-konvertiten-ueberlaeufer-oder-ueberzeugungstaeter",
            "domain": "getidan.de",
            "title": "Renegaten, Verräter, Konvertiten, Überläufer oder Überzeugungstäter – getidan",
            "description": ""
        }
    },
};

export const NoCard = {
  args: {
        "platform": "mastodon",
        "displayName": "Jonas Santoso",
        "accountName": "@jonassantoso",
        "accountHref": "https://mastodon.online/@jonassantoso",
        "statusLink": "<a href=\"https://mastodon.online/@jonassantoso/110977818917111969\"><time datetime=\"2023-08-30T09:18:49.476Z\">Aug 30</time></a>",
        "textBody": "<p><span class=\"h-card\" translate=\"no\"><a href=\"https://mastodon.social/@dhyannada\" class=\"u-url mention\">@<span>dhyannada</span></a></span> Auch in Erinnerung geblieben: Seeßlens auf der gleichen Website erschienener Artikel über die Rechtswerdung vormals Linker wie Elsässers oder des bald postumen Horst Mahler. <a href=\"http://www.getidan.de/gesellschaft/georg_seesslen/76722/renegaten-verraeter-konvertiten-ueberlaeufer-oder-ueberzeugungstaeter\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" translate=\"no\"><span class=\"invisible\">http://www.</span><span class=\"ellipsis\">getidan.de/gesellschaft/georg_</span><span class=\"invisible\">seesslen/76722/renegaten-verraeter-konvertiten-ueberlaeufer-oder-ueberzeugungstaeter</span></a></p>",
    },
};
