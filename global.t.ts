import en from './messages/en.json'
import es from './messages/es.json'

declare global {
  type IntlMessages = {} & typeof en & typeof es
}
