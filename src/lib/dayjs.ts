import dayjs from 'dayjs'
import 'dayjs/locale/pt0br'
import loalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.locale('pt-br')
dayjs.extend(loalizedFormat)


export { dayjs }

