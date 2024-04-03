import React from 'react'

const languageContext = React.createContext({
  activeLanguage: 'EN',
  changeLanguage: () => {},
})

export default languageContext
