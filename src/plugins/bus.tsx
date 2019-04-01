import { EventEmitter } from 'events'
const bus: any = { ...EventEmitter.prototype }
export default bus