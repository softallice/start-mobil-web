<template>
  <q-page class="q-pa-sm">  
    <div style="max-width: 800px; width: 100%;">
        <!-- <span>다이어트 달력</span> -->
        <q-toolbar class="text-primary row justify-between items-center">
          <!-- <q-btn-group flat class="col-10"> -->
            <q-btn color="primary" flat label="이전" @click="onPrev" />
            <div class="col-4" style="text-align: center;">
            {{ title }}
            </div>
            <q-btn color="primary" flat label="다음" @click="onNext" />
          <!-- </q-btn-group> -->

          
        </q-toolbar>
        <q-calendar
        v-model="selectedDate"
        ref="calendar"
        view="month"
        locale="en-us"
        :day-height="50"
        @change="onChange"
        >
        <template #day="{ timestamp }">
            <template v-for="(event, index) in getEvents(timestamp.date)">
            <q-badge
                :key="index"
                style="width: 100%; cursor: pointer; height: 16px; max-height: 16px"
                :class="badgeClasses(event, 'day')"
                :style="badgeStyles(event, 'day')"
            >
                <q-icon v-if="event.icon" :name="event.icon" class="q-mr-xs"></q-icon><span class="ellipsis" @click=msg(event.details)>{{ event.title }}</span>
            </q-badge>
            </template>
        </template>
        </q-calendar>
    </div>
    
    <span>일정 내용</span>
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">경희명 한의원</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{comment}}
      </q-card-section>

      <!-- <q-separator inset />
      <q-card-section>
        한달간 주기적인 체중 감소를 하였습니다. 대단합니다.
      </q-card-section> -->
    </q-card>
    <span>체중</span>
    <card-charts />
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">체중 입력 {{today}}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="bodyweight" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="취소" v-close-popup />
          <q-btn flat label="저장" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    
    <div class="q-pa-md q-gutter-sm vertical-middle">
        <q-btn class="btn-fixed-width " rounded icon="lightbulb_outline" label="체중입력" color="primary" @click="prompt = true" />
    </div>
  </q-page>
</template>

<script>
// normally you would not import "all" of QCalendar, but is needed for this example to work with UMD (codepen)
import QCalendar from '@quasar/quasar-ui-qcalendar' // ui is aliased from '@quasar/quasar-ui-qcalendar'
const CURRENT_DAY = new Date()
function getCurrentDay (day) {
  const newDay = new Date(CURRENT_DAY)
  newDay.setDate(day)
  const tm = QCalendar.parseDate(newDay)
  return tm.date
}
const reRGBA = /^\s*rgb(a)?\s*\((\s*(\d+)\s*,\s*?){2}(\d+)\s*,?\s*([01]?\.?\d*?)?\s*\)\s*$/
function textToRgb (color) {
  if (typeof color !== 'string') {
    throw new TypeError('Expected a string')
  }
  const m = reRGBA.exec(color)
  if (m) {
    const rgb = {
      r: Math.min(255, parseInt(m[2], 10)),
      g: Math.min(255, parseInt(m[3], 10)),
      b: Math.min(255, parseInt(m[4], 10))
    }
    if (m[1]) {
      rgb.a = Math.min(1, parseFloat(m[5]))
    }
    return rgb
  }
  return hexToRgb(color)
}
function hexToRgb (hex) {
  if (typeof hex !== 'string') {
    throw new TypeError('Expected a string')
  }
  hex = hex.replace(/^#/, '')
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  else if (hex.length === 4) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]
  }
  const num = parseInt(hex, 16)
  return hex.length > 6
    ? { r: num >> 24 & 255, g: num >> 16 & 255, b: num >> 8 & 255, a: Math.round((num & 255) / 2.55) }
    : { r: num >> 16, g: num >> 8 & 255, b: num & 255 }
}
function luminosity (color) {
  if (typeof color !== 'string' && (!color || color.r === undefined)) {
    throw new TypeError('Expected a string or a {r, g, b} object as color')
  }
  const
    rgb = typeof color === 'string' ? textToRgb(color) : color,
    r = rgb.r / 255,
    g = rgb.g / 255,
    b = rgb.b / 255,
    R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4),
    G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4),
    B = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)
  return 0.2126 * R + 0.7152 * G + 0.0722 * B
}
export default {
  name: 'Diet',
  components: {
    CardCharts: () =>  import('components/cards/CardCharts'),
  },
  data () {
    return {
      locale: 'ko-kr',
      shortWeekdayLabel: false,
      shortMonthLabel: false,
      prompt: false,
      dateFormatter: undefined,
      start: undefined,
      bodyweight: 0,
      title: '',
      comment: '따뜻한 마음으로 진료 합니다.',
      selectedDate: '',
      today: getCurrentDay(17),
      events: [
        {
          title: '운동 시작',
          details: '경희명 한의원에서 상담 받고 운동 시작',
          date: getCurrentDay(1),
          bgcolor: 'orange'
        },
        {
          title: '약처방(다이어트한약)',
          details: '체질 개선 및 식욕 억제를 위한 한약 복욕 시작',
          date: getCurrentDay(4),
          bgcolor: 'green',
          icon: 'fas fa-birthday-cake'
        },
        {
          title: '운동 시작',
          details: '근력 운동 및 요가',
          date: getCurrentDay(8),
          time: '10:00',
          duration: 120,
          bgcolor: 'red',
          icon: 'fas fa-handshake'
        },
        {
          title: 'Lunch',
          details: 'Company is paying!',
          date: getCurrentDay(8),
          time: '11:30',
          duration: 90,
          bgcolor: 'teal',
          icon: 'fas fa-hamburger'
        },
        {
          title: '휴식',
          details: '집에서 하루 종일 휴식....',
          date: getCurrentDay(20),
          time: '17:00',
          duration: 90,
          bgcolor: 'blue-grey',
          icon: 'fas fa-car'
        },
        {
          title: '상담',
          details: '2번째 체질 개선 상황 상담',
          date: getCurrentDay(15),
          time: '08:00',
          duration: 540,
          bgcolor: 'blue',
          icon: 'fas fa-chalkboard-teacher'
        },
        {
          title: 'Girlfriend',
          details: 'Meet GF for dinner at Swanky Restaurant',
          date: getCurrentDay(15),
          time: '19:00',
          duration: 180,
          bgcolor: 'teal',
          icon: 'fas fa-utensils'
        },
        {
          title: '체중(67kg)',
          details: '체중 2kg 감량',
          date: getCurrentDay(10),
          bgcolor: 'purple',
          icon: 'rowing',
          // days: 1
        },
        {
          title: '체중(65kg)',
          details: '체중 4kg 감량',
          date: getCurrentDay(16),
          bgcolor: 'purple',
          icon: 'rowing',
          // days: 1
        },
        {
          title: '체중(60kg)',
          details: '체중 6kg 감량',
          date: getCurrentDay(19),
          bgcolor: 'purple',
          icon: 'rowing',
          // days: 1
        },
        {
          title: '상담(한의사)',
          details: '피해야 할 음식과 먹어야 할 음식 확인',
          date: getCurrentDay(22),
          bgcolor: 'purple',
          icon: 'fas fa-plane',
          // days: 1
        }
      ]
    }
  },
  watch: {
    locale () {
      this.updateFormatter()
      this.updateTitle()
    }
  },
  beforeMount () {
    this.updateFormatter()
  },
  methods: {
    updateFormatter () {
      try {
        this.dateFormatter = new Intl.DateTimeFormat(this.locale || undefined, {
          month: this.shortMonthLabel ? 'short' : 'long',
          year: 'numeric',
          timeZone: 'UTC'
        })
      }
      catch (e) {
        // console.error('Intl.DateTimeFormat not supported')
        this.dateFormatter = undefined
      }
    },
    updateTitle () {
      const myDate = QCalendar.makeDate(this.start)
      if (this.dateFormatter !== undefined) {
        this.title = this.dateFormatter.format(myDate)
      }
    },
    onChange ({ start }) {
      this.start = start
      this.updateTitle()
    },
    onPrev () {
      this.$refs.calendar.prev()
    },
    onNext () {
      this.$refs.calendar.next()
    },
    msg(message) {
      this.comment= message
    },
    isCssColor (color) {
      return !!color && !!color.match(/^(#|(rgb|hsl)a?\()/)
    },
    badgeClasses (event, type) {
      const cssColor = this.isCssColor(event.bgcolor)
      const isHeader = type === 'header'
      return {
        [`text-white bg-${event.bgcolor}`]: !cssColor,
        'full-width': !isHeader && (!event.side || event.side === 'full'),
        'left-side': !isHeader && event.side === 'left',
        'right-side': !isHeader && event.side === 'right'
      }
    },
    badgeStyles (event, type, timeStartPos, timeDurationHeight) {
      const s = {}
      if (this.isCssColor(event.bgcolor)) {
        s['background-color'] = event.bgcolor
        s.color = luminosity(event.bgcolor) > 0.5 ? 'black' : 'white'
      }
      if (timeStartPos) {
        s.top = timeStartPos(event.time) + 'px'
      }
      if (timeDurationHeight) {
        s.height = timeDurationHeight(event.duration) + 'px'
      }
      s['align-items'] = 'flex-start'
      return s
    },
    getEvents (dt) {
      const currentDate = QCalendar.parseTimestamp(dt)
      const events = []
      for (let i = 0; i < this.events.length; ++i) {
        let added = false
        if (this.events[i].date === dt) {
          if (this.events[i].time) {
            if (events.length > 0) {
              // check for overlapping times
              const startTime = QCalendar.parseTimestamp(this.events[i].date + ' ' + this.events[i].time)
              const endTime = QCalendar.addToDate(startTime, { minute: this.events[i].duration })
              for (let j = 0; j < events.length; ++j) {
                if (events[j].time) {
                  const startTime2 = QCalendar.parseTimestamp(events[j].date + ' ' + events[j].time)
                  const endTime2 = QCalendar.addToDate(startTime2, { minute: events[j].duration })
                  if (QCalendar.isBetweenDates(startTime, startTime2, endTime2) || QCalendar.isBetweenDates(endTime, startTime2, endTime2)) {
                    events[j].side = 'left'
                    this.events[i].side = 'right'
                    events.push(this.events[i])
                    added = true
                    break
                  }
                }
              }
            }
          }
          if (!added) {
            this.events[i].side = undefined
            events.push(this.events[i])
          }
        }
        else if (this.events[i].days) {
          // check for overlapping dates
          const startDate = QCalendar.parseTimestamp(this.events[i].date)
          const endDate = QCalendar.addToDate(startDate, { day: this.events[i].days })
          if (QCalendar.isBetweenDates(currentDate, startDate, endDate)) {
            events.push(this.events[i])
            added = true
          }
        }
      }
      return events
    }
  }
}
</script>