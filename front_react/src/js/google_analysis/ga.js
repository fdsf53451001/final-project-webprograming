import ReactGA from 'react-ga'

export const initGA = () => {
    console.log('GA init')
    ReactGA.initialize('UA-xxxxxxxxx-1')
}

export const logPageView = (page) => {
    console.log('Logging pageview for '+page)
    ReactGA.set({ page: page })
    // ReactGA.pageview(window.location.pathname)
  }