import day from 'dayjs'
import { NamedTimeZoneImpl, createPlugin } from '@fullcalendar/common'

class DayNamedTimeZone extends NamedTimeZoneImpl {
  offsetForArray(a: number[]): number {
    return (day as any).tz(a, this.timeZoneName).utcOffset()
  }

  timestampToArray(ms: number): number[] {
    return (day as any).tz(ms, this.timeZoneName).toArray()
  }
}

export default createPlugin({
  namedTimeZonedImpl: DayNamedTimeZone,
})
