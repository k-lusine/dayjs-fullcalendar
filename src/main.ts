import day from 'dayjs'
import { NamedTimeZoneImpl, createPlugin } from '@fullcalendar/common'
import { Calendar } from '@fullcalendar/core';

class DayNamedTimeZone extends NamedTimeZoneImpl {
  constructor(timezone) {
    super(timezone);
    const name = Calendar.name;
    console.log(name);
    
  }
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
