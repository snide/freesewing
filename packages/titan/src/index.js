import freesewing from '@freesewing/core'
import plugins from '@freesewing/plugin-bundle'
import config from '../config'
// Parts
import draftBack from './back'
import draftFront from './front'

// Create design
const Pattern = new freesewing.Design(config, plugins)

// Attach draft methods to prototype
Pattern.prototype.draftBack = (part) => draftBack(part)
Pattern.prototype.draftFront = (part) => draftFront(part)

export default Pattern
