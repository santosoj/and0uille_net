/* eslint sort-keys: error */
export default {
  components: {
    h1: ({ children }) => (
      <h1
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          backgroundImage: 'linear-gradient(90deg,#7928CA,#FF0080)',
          lineHeight: '1.21',
        }}
      >
        {children}
      </h1>
    ),
  },
  darkMode: true,
  dateFormatter: date => `Last updated at ${date.toDateString()}`,
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <abbr
        title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
        style={{ cursor: 'help' }}
      >
        CC BY-NC 4.0
      </abbr>{' '}
      {new Date().getFullYear()} © Jonas Santoso.
      <style jsx>{`
        a {
          float: right;
        }

        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  head({meta, title}) {
    return <>
      <meta property="og:title" content={meta.title || "and0uille.net"} />
      <meta property="og:description" content={meta.description || "Andouille ‘Jonas’ Santoso, digital media artist and software entomologist. Woke as fxxx and unapologetic. he/him/they/them"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://and0uille.net" />
      <meta property="og:image" content="https://jonassantoso.com/jscomassets/jonassantoso_com_og.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="675" />
      <meta property="og:image" content="https://jonassantoso.com/jscomassets/jonassantoso_com_og__sq.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="1200" />
    </>
  },
  navs: [
    {
      name: 'Empire',
      url: '/empire',
    },
    {
      name: 'ViyellaHistory',
      url: '/viyellahistory',
    },
  ],
}
