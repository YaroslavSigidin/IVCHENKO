import { useRef, useState } from 'react'
import audience01 from '../01.png'
import audience02 from '../02.png'
import audience03 from '../03.png'
import audience04 from '../04.png'
import aboutCafeImage from '../IMAGES/1/2/3/telegram-cloud-document-1-5084712035413920079 1.jpg'
import aboutCarImage from '../IMAGES/1/2/3/telegram-cloud-document-1-5084712035413920079 2.jpg'
import aboutWarehouseImage from '../IMAGES/1/2/3/telegram-cloud-document-1-5084712035413920079 3.jpg'
import aboutSingaporeImage from '../IMAGES/1/2/3/telegram-cloud-document-1-5084712035413920079 4.jpg'
import aboutChicagoImage from '../IMAGES/1/2/3/telegram-cloud-document-1-5084712035413920079 5.jpg'
import aboutCourtImage from '../IMAGES/1/2/3/telegram-cloud-document-1-5084712035413920079 6.jpg'
import reviewAnnaPreview from '../IMAGES/1/2/Anna.jpg'
import reviewMaksPreview from '../IMAGES/1/2/Maks.jpg'
import reviewArtemPreview from '../IMAGES/1/2/Artem.jpg'
import reviewDanyaPreview from '../IMAGES/1/2/Danya.jpg'
import reviewSofyaPreview from '../IMAGES/1/2/Sofya.jpg'
import reviewOksanaPreview from '../IMAGES/1/2/Oksana.jpg'

import { motion as Motion } from 'motion/react'
import {
  BadgeDollarSign,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Compass,
  Crown,
  Fingerprint,
  Layers3,
  PackageCheck,
  Pencil,
  Rocket,
  Settings2,
  Sparkles,
  Target,
  Users,
  XCircle,
} from 'lucide-react'
import {
  AudienceCard,
  AudienceCardInner,
  AudienceCardText,
  AudienceCardTitle,
} from '@/components/ui/audience-card'
import { BentoGrid } from '@/components/ui/bento-grid'
import { Bucket } from '@/components/ui/bucket'
import { Button } from '@/components/ui/button'
import { FAQ } from '@/components/ui/faq-tabs'
import { FinalCtaContact } from '@/components/ui/final-cta-contact'
import { Footer } from '@/components/ui/footer-section'
import { FeatureCard } from '@/components/ui/grid-feature-cards'
import { HeadlineFrame } from '@/components/ui/headline-frame'
import { Header } from '@/components/ui/header-1'
import { HeroSection, LogosSection } from '@/components/ui/hero-1'
import { MobileReveal } from '@/components/ui/mobile-reveal'
import { ProgramBenefitsSection } from '@/components/ui/program-benefits-features-8'
import * as PricingCard from '@/components/ui/pricing-card'
import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1'
import { cn } from '@/lib/utils'

const audienceCards = [
  {
    index: '01',
    icon: Rocket,
    title: 'Для первого товарного\nбизнеса в США',
    text: 'Подходит тем, кто хочет зайти в рынок США с понятной системой запуска, а не собирать путь из случайных советов.',
    image: audience01,
    imageClassName:
      'right-[1%] bottom-0 w-[35%] sm:right-[2%] sm:w-[38%] md:w-[39%] lg:w-[37%]',
  },
  {
    index: '02',
    icon: Compass,
    title: 'Для тех, кто слышал про TikTok Shop,\nно не понимает, как зайти правильно',
    text: 'Секция снимает туман вокруг платформы и показывает, что делать по шагам: от выбора модели до первых действий.',
    image: audience02,
    imageClassName:
      'right-[0%] bottom-0 w-[36%] sm:right-[-1%] sm:w-[39%] md:w-[40%] lg:w-[37%]',
  },
  {
    index: '03',
    icon: Target,
    title: 'Для тех, кто не хочет терять месяцы\nна хаотичные попытки',
    text: 'Если вы хотите сократить количество ошибок и быстрее перейти к рабочей системе, этот формат собран именно под это.',
    image: audience03,
    imageClassName:
      'right-[1%] bottom-0 w-[33%] sm:right-[3%] sm:w-[35%] md:w-[36%] lg:w-[33%]',
  },
  {
    index: '04',
    icon: Layers3,
    title: 'Для тех, кто хочет пройти\nпуть системно',
    text: 'Когда нужен не просто набор уроков, а ясная структура запуска с понятными этапами, приоритетами и логикой внедрения.',
    image: audience04,
    imageClassName:
      'right-[1%] bottom-0 w-[31%] sm:right-[2%] sm:w-[34%] md:w-[35%] lg:w-[32%]',
  },
]

const outcomes = {
  primary: {
    title: 'Понимание всей модели TikTok Shop от начала до запуска',
    supporting: 'Систему выбора товара\nи оценки\nниши',
  },
  logistics: {
    title: 'Понимание поставщиков, логистики и работы со складами',
    supporting:
      'Все, что нужно, чтобы выстроить базовую операционную систему без хаоса и лишних потерь времени.',
  },
  marketing: {
    title: 'Подход к creators,\nконтенту\nи продвижению',
    supporting:
      'Понимание того, как соединяются контент, creators и продвижение в одной рабочей логике запуска.',
  },
  structure: {
    title: 'Готовую структуру действий вместо хаоса',
    supporting: 'Материалы, чеклисты и ориентиры по запуску',
    items: ['Чек-листы', 'Шаблоны', 'Ориентиры'],
  },
}

const modules = [
  {
    index: '01',
    icon: Sparkles,
    title: 'Фундамент TikTok Shop',
    description:
      'Как устроена платформа, какая модель реально работает в США и где обычно теряют время новички.',
  },
  {
    index: '02',
    icon: BadgeDollarSign,
    title: 'Выбор товара и анализ ниши',
    description:
      'Критерии отбора продукта, оценка спроса, трендов и юнит-экономики до первых вложений.',
  },
  {
    index: '03',
    icon: Fingerprint,
    title: 'Поставщики и sourcing',
    description:
      'Как искать фабрики, агентов и поставщиков, проверять условия и выстраивать безопасную работу.',
  },
  {
    index: '04',
    icon: PackageCheck,
    title: 'Логистика и операционка',
    description:
      'Движение товара, prep center, склады, доставка и базовая система, без которой масштаб не держится.',
  },
  {
    index: '05',
    icon: Pencil,
    title: 'Creators и контент',
    description:
      'Поиск creators, форматы контента, коммуникация и связки, которые помогают продавать через видео.',
  },
  {
    index: '06',
    icon: Settings2,
    title: 'Запуск и первые продажи',
    description:
      'Как собрать запуск без хаоса, на что смотреть в первые недели и какие действия дают скорость.',
  },
]

const launchToolkitItems = [
  {
    title: 'Пошаговый маршрут запуска',
    meta: 'Core',
    description:
      'Видите весь путь целиком: от выбора модели и товара до первых действий, тестов и контрольных точек на старте.',
    icon: <Compass className="h-4 w-4 text-[#ff8a1c]" />,
    status: 'Основа',
    tags: ['Маршрут', 'США', 'Старт'],
    cta: 'Открыть логику',
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: 'Чек-листы и шаблоны',
    meta: 'Ready',
    description:
      'Материалы, которые помогают не держать процесс в голове и быстрее переходить от уроков к реальным действиям.',
    icon: <BadgeCheck className="h-4 w-4 text-[#ff8a1c]" />,
    status: 'Готово',
    tags: ['Файлы', 'Шаблоны'],
    cta: 'Взять в работу',
  },
  {
    title: 'Юнит-экономика и комиссии',
    meta: 'Numbers',
    description:
      'Понимаете, как смотреть на маржу, комиссии и деньги до того, как запуск превращается в дорогую импровизацию.',
    icon: <BadgeDollarSign className="h-4 w-4 text-[#ff8a1c]" />,
    status: 'Контроль',
    tags: ['Маржа', 'Расчеты'],
    cta: 'Проверить цифры',
  },
  {
    title: 'Creators и контент-связки',
    meta: 'Media',
    description:
      'Разбираетесь, какие форматы контента, creators и коммуникации дают больше шансов на быстрый рабочий тест.',
    icon: <Pencil className="h-4 w-4 text-[#ff8a1c]" />,
    status: 'Практика',
    tags: ['UGC', 'Контент', 'Creators'],
    cta: 'Собрать связку',
  },
  {
    title: 'Контроль первых продаж',
    meta: 'Focus',
    description:
      'Есть понятные ориентиры, на что смотреть в первую неделю, где ускоряться и какие сигналы не игнорировать.',
    icon: <Target className="h-4 w-4 text-[#ff8a1c]" />,
    status: 'Фокус',
    tags: ['Тест', 'Запуск'],
    cta: 'Следить за метриками',
  },
]

const programFlowChips = [
  {
    id: 1,
    title: 'Точка входа понятна',
    description: 'Видно, с чего начинать именно в вашей ситуации.',
    icon: Compass,
  },
  {
    id: 2,
    title: 'Решения связаны в систему',
    description: 'Товар, логистика и creators не существуют отдельно.',
    icon: Layers3,
  },
  {
    id: 3,
    title: 'Быстрее до первого теста',
    description: 'Есть маршрут, который сокращает хаотичные попытки.',
    icon: Rocket,
  },
  {
    id: 4,
    title: 'Фокус на реальном запуске',
    description: 'Не теория ради теории, а действия под рынок США.',
    icon: Target,
  },
]

const aboutSlides = [
  {
    index: '01',
    image: aboutCarImage,
    text: 'Я строю e-commerce так, чтобы бизнес не держался на ручном контроле. Система продает, пока я выбираю, где жить и чем наполнять день.',
  },
  {
    index: '02',
    image: aboutWarehouseImage,
    text: 'За красивой картинкой стоит операционка: товар, склад, логистика и процессы. Когда база собрана правильно, рост становится управляемым.',
  },
  {
    index: '03',
    image: aboutSingaporeImage,
    text: 'Путешествую, изучаю новые рынки и забираю энергию от жизни. Цель бизнеса не занять все время, а дать свободу и масштаб.',
  },
  {
    index: '04',
    image: aboutChicagoImage,
    text: 'Мой фокус — рынок США и модели, которые можно системно повторять. Не хаотичные запуски, а понятная структура действий и решений.',
  },
  {
    index: '05',
    image: aboutCourtImage,
    text: 'Я прошел путь от идей до реальных процессов и понимаю цену ошибок. Поэтому внутри программы даю не теорию, а практичную карту запуска.',
  },
  {
    index: '06',
    image: aboutCafeImage,
    text: 'Свобода появляется не от мотивации, а от системы. Когда бизнес работает сам на себя, у тебя появляется время жить, думать и расти дальше.',
  },
]

const studentResults = [
  {
    text: 'Стало намного понятнее, как зайти в TikTok Shop без хаоса. До этого информация была кусками, здесь наконец сложилась система.',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Алина',
    role: 'Первый запуск в США',
  },
  {
    text: 'Самое ценное для меня — логика по товару, поставщику и контенту. После программы стало ясно, что делать по шагам, а не просто что изучать.',
    image: 'https://randomuser.me/api/portraits/men/15.jpg',
    name: 'Максим',
    role: 'Seller / e-commerce',
  },
  {
    text: 'До обучения было ощущение, что TikTok Shop это хаос. Сейчас есть структура, понимание по creators и нормальная точка входа.',
    image: 'https://randomuser.me/api/portraits/women/18.jpg',
    name: 'София',
    role: 'Новичок в TikTok Shop',
  },
  {
    text: 'Очень сильный блок по операционке и запуску. Особенно полезно, что объясняется не теория, а реальный порядок действий.',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    name: 'Даниил',
    role: 'Marketplace operator',
  },
  {
    text: 'Появилась уверенность по рынку США и перестало казаться, что без десятков ошибок туда невозможно зайти.',
    image: 'https://randomuser.me/api/portraits/women/29.jpg',
    name: 'Екатерина',
    role: 'Founder',
  },
  {
    text: 'Больше всего понравилось, что контент, creators и логистика собраны в одну систему, а не разбросаны по разным урокам.',
    image: 'https://randomuser.me/api/portraits/men/31.jpg',
    name: 'Тимур',
    role: 'Brand owner',
  },
  {
    text: 'Программа экономит месяцы на хаотичных попытках. После нее уже есть маршрут, куда смотреть и что проверять в первую очередь.',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    name: 'Мария',
    role: 'Старт с нуля',
  },
  {
    text: 'Мне зашло, что здесь нет лишней воды. Все направлено на то, чтобы быстрее дойти до понятного рабочего запуска.',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
    name: 'Илья',
    role: 'Performance marketer',
  },
  {
    text: 'После прохождения стало гораздо легче понимать, где риск, где точка роста и как не распыляться на ненужные действия.',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    name: 'Виктория',
    role: 'Product-led entrepreneur',
  },
]

const firstStudentColumn = studentResults.slice(0, 3)
const secondStudentColumn = studentResults.slice(3, 6)
const thirdStudentColumn = studentResults.slice(6, 9)

const videoReviews = [
  {
    id: 'review-01',
    title: 'Anna',
    videoId: '4j8U9izNqUA',
    previewSrc: reviewAnnaPreview,
  },
  {
    id: 'review-02',
    title: 'Maks',
    videoId: '4pV-1ZXo0Nk',
    previewSrc: reviewMaksPreview,
  },
  {
    id: 'review-03',
    title: 'Artem',
    videoId: 'fSECZ15mq_4',
    previewSrc: reviewArtemPreview,
  },
  {
    id: 'review-04',
    title: 'Danya',
    videoId: 'aM0BStovRuo',
    previewSrc: reviewDanyaPreview,
  },
  {
    id: 'review-05',
    title: 'Sofya',
    videoId: 'YfDhRcFdlNg',
    previewSrc: reviewSofyaPreview,
  },
  {
    id: 'review-06',
    title: 'Oksana',
    videoId: 'ztGS1RAp-vo',
    previewSrc: reviewOksanaPreview,
  },
]

const pricing = [
  {
    name: 'START',
    icon: BriefcaseBusiness,
    badge: 'Self-paced',
    price: 'от $299',
    period: '/ доступ',
    originalPrice: '$399',
    tone: 'Самостоятельный формат обучения для тех, кто хочет получить полную систему запуска TikTok Shop в США и двигаться в своём темпе.',
    summary:
      'Самостоятельный формат обучения без чатов и сопровождения. Подходит тем, кто хочет получить полную базу, инструменты и материалы для запуска TikTok Shop.',
    includes: [
      'Полная программа обучения: N+ видео-уроков и X+ часов материала',
      'Пошаговая система запуска TikTok Shop в США',
      'Все основные модули по запуску, работе с товаром и платформой',
      'Чек-листы, шаблоны и дополнительные материалы',
      'Калькуляторы юнит-экономики, маржи и комиссий TikTok Shop',
      'Подборка сервисов для поиска трендовых товаров',
      'Инструменты для поиска инфлюенсеров и creators',
      'Сервисы аналитики по товарам и контенту',
      'AI-сервисы для работы с продуктами и оптимизацией листингов',
      'Spy Ads инструменты для анализа рекламы конкурентов',
    ],
    excludes: [
      'Закрытый чат клуба',
      'Эфиры с Владиславом',
      'Поддержка куратора',
      'Личное сопровождение',
    ],
    cta: 'Получить доступ',
    href: '/checkout-start',
  },
  {
    name: 'SYNDICATE',
    icon: Users,
    badge: 'Most Popular',
    price: 'от $799',
    period: '/ участие',
    originalPrice: '$999',
    featured: true,
    tone: 'Формат с поддержкой для тех, кто хочет не просто изучить программу, а проходить путь с обратной связью и помощью по ключевым шагам.',
    summary:
      'Формат для тех, кому важно не идти в одиночку. Участник получает доступ в закрытый клуб, поддержку, эфиры и окружение других селлеров.',
    includes: [
      'Всё, что входит в тариф START',
      'Доступ в закрытый ECOM SYNDICATE CLUB',
      'Общение с другими учениками, селлерами и участниками сообщества',
      'Поддержка от куратора / команды по вопросам прохождения',
      'Помощь по ключевым этапам запуска',
      'Ответы на вопросы внутри закрытого пространства',
      'Видео-эфиры с Владиславом каждые 2 недели',
      'Инсайты, новости, обновления по TikTok Shop',
      'Разборы магазинов, ошибок и типичных ситуаций участников',
      'Более глубокое вовлечение в среду и реальную практику',
    ],
    excludes: [
      'Личный чат с Владиславом',
      'Индивидуальное сопровождение 1 на 1',
      'Персональное ведение за руку',
    ],
    cta: 'Присоединиться',
    href: '/checkout-syndicate',
  },
  {
    name: 'PRIVATE 1:1',
    icon: Crown,
    badge: 'High Touch',
    price: 'По заявке',
    period: '',
    originalPrice: '',
    tone: 'Персональный формат для тех, кто хочет пройти путь быстрее, с личной помощью Владислава, индивидуальной обратной связью и максимальным фокусом на своём результате.',
    summary:
      'Максимальный формат участия с личной работой. Подходит тем, кто хочет меньше ошибок, больше скорости и персональный контроль на каждом этапе.',
    includes: [
      'Всё, что входит в тариф START / SYNDICATE',
      'Личное сопровождение 1 на 1 с Владиславом',
      'Персональный чат с Владиславом',
      'Приоритетная поддержка и ответы без ожидания',
      'Индивидуальный разбор ситуации, стратегии и модели запуска',
      'Ведение за руку по ключевым этапам',
      'Помощь в обходе типичных ошибок и потерь времени',
      'Максимальный фокус на результате конкретно под человека',
      '1 месяц бесплатного хранения товара на 3PL / prep center',
      'Скидки на будущие офлайн-мероприятия и ивенты',
      'Бесплатное использование личных софтов после релиза',
    ],
    excludes: [],
    cta: 'Оставить заявку',
    href: '/apply-private',
  },
]

const faqData = [
  {
    question: 'Подойдет ли мне, если я с нуля?',
    answer:
      'Да. Программа собрана так, чтобы человек без опыта понял логику TikTok Shop, увидел понятную последовательность шагов и не терялся в хаотичной информации.',
  },
  {
    question: 'Нужны ли документы США?',
    answer:
      'Это зависит от вашей модели входа и текущей точки. Внутри программы разбирается, какие варианты существуют, на что смотреть в вашем случае и как не делать лишних движений заранее.',
  },
  {
    question: 'Сколько денег нужно на старт?',
    answer:
      'Точная сумма зависит от товара, логистики, формата теста и выбранной модели запуска. В программе даются ориентиры и логика расчета, чтобы вы понимали диапазон еще до старта.',
  },
  {
    question: 'Когда я получу доступ?',
    answer:
      'Доступ открывается после подтверждения участия. Для самостоятельных форматов это обычно происходит сразу после оплаты, а для персонального формата после согласования заявки.',
  },
  {
    question: 'Какой формат обучения?',
    answer:
      'Основу составляют видео-уроки, модули, дополнительные материалы и практические ориентиры. В старших тарифах добавляется поддержка, эфиры и более плотное сопровождение.',
  },
  {
    question: 'Есть ли поддержка?',
    answer:
      'Да, но ее уровень зависит от тарифа. В START вы проходите программу самостоятельно, в SYNDICATE получаете среду и поддержку, а в PRIVATE 1:1 формат строится вокруг персональной работы.',
  },
  {
    question: 'Чем отличаются тарифы?',
    answer:
      'START подходит тем, кто хочет пройти весь путь самостоятельно. SYNDICATE добавляет поддержку, окружение и закрытый клуб. PRIVATE 1:1 нужен тем, кто хочет максимум скорости, личного внимания и персональной обратной связи.',
  },
  {
    question: 'Есть ли рассрочка?',
    answer:
      'Возможность рассрочки зависит от выбранного формата участия и текущих условий набора. Если вам важен этот вариант, оставьте заявку в финальном блоке и мы подскажем доступные опции.',
  },
]

const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
}

const audienceRevealVariants = ['drift-left', 'reveal', 'drift-right', 'pop']
const moduleRevealVariants = ['tilt-left', 'pop', 'tilt-right', 'drift-left', 'drift-right', 'reveal']
const storyRevealVariants = ['drift-left', 'pop', 'drift-right', 'tilt-right']
const pricingRevealVariants = ['drift-left', 'reveal', 'drift-right']

function GridLines() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="mx-auto grid h-full w-[min(1320px,94vw)] grid-cols-12 gap-4 px-4 sm:px-6 lg:px-8">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="border-l border-white/[0.055] last:border-r"
          />
        ))}
      </div>
    </div>
  )
}

function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <MobileReveal delay={0.02} y={18} blur={8} variant="fade">
        <div className="text-[0.68rem] uppercase tracking-[0.42em] text-white/40">
          {eyebrow}
        </div>
      </MobileReveal>
      <MobileReveal delay={0.08} y={24} blur={10} variant="pop">
        <HeadlineFrame className="mt-4">
          <h2 className="text-[2rem] font-medium leading-[0.92] tracking-[-0.06em] text-white sm:text-5xl">
            {title}
          </h2>
        </HeadlineFrame>
      </MobileReveal>
      {text ? (
        <MobileReveal delay={0.14} y={20} blur={10} variant="rise">
          <p className="mt-4 text-[0.98rem] leading-7 text-white/64 sm:mt-5 sm:text-lg sm:leading-8">
            {text}
          </p>
        </MobileReveal>
      ) : null}
    </div>
  )
}

function SplitCardText({ text }) {
  const words = text.split(' ')
  const lead = words.slice(0, 4).join(' ')
  const rest = words.slice(4).join(' ')

  return (
    <>
      {lead}
      {rest ? <span className="text-white/50"> {rest}</span> : null}
    </>
  )
}

function AboutMeSlider({ slides }) {
  const sliderRef = useRef(null)

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return

    sliderRef.current.scrollBy({
      left: direction * Math.min(sliderRef.current.clientWidth * 0.82, 460),
      behavior: 'smooth',
    })
  }

  return (
    <div className="mx-auto w-[min(1320px,94vw)]">
      <SectionHeader
        eyebrow="About"
        title="Обо мне"
        text="Я показываю не абстрактный путь, а модель жизни, к которой приводит системный e-commerce: бизнес работает, а у вас появляется свобода выбирать свой ритм."
      />

      <div className="relative mt-8 sm:mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 hidden items-center justify-between lg:flex">
          <button
            type="button"
            onClick={() => scrollSlider(-1)}
            className="pointer-events-auto -ml-7 flex h-14 w-14 items-center justify-center rounded-full border border-white/12 bg-black/54 text-white/78 shadow-[0_18px_38px_rgba(0,0,0,0.32)] backdrop-blur-md transition duration-300 hover:border-white/22 hover:bg-black/72 hover:text-white"
            aria-label="Предыдущий слайд"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollSlider(1)}
            className="pointer-events-auto -mr-7 flex h-14 w-14 items-center justify-center rounded-full border border-white/12 bg-black/54 text-white/78 shadow-[0_18px_38px_rgba(0,0,0,0.32)] backdrop-blur-md transition duration-300 hover:border-white/22 hover:bg-black/72 hover:text-white"
            aria-label="Следующий слайд"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] sm:gap-6 lg:gap-7 [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, index) => (
            <MobileReveal
              key={slide.index}
              delay={0.05 * index}
              y={26}
              blur={10}
              variant={storyRevealVariants[index % storyRevealVariants.length]}
              className="snap-start"
            >
              <article className="group relative flex w-[min(22.5rem,80vw)] shrink-0 flex-col overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#1d1f1f] shadow-[0_26px_70px_rgba(0,0,0,0.3)] sm:w-[23rem] lg:w-[23.25rem]">
                <div className="relative h-[26rem] overflow-hidden sm:h-[28.75rem] lg:h-[29.25rem]">
                  <img
                    src={slide.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.03),transparent_54%,rgba(0,0,0,0.34))]" />
                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-black/78 text-lg font-medium text-white shadow-[0_14px_30px_rgba(0,0,0,0.25)] backdrop-blur-md">
                    {slide.index}
                  </div>
                </div>

                <div className="min-h-[8.8rem] border-t border-white/8 bg-[#1b1d1d] px-6 py-5 sm:px-6 sm:py-6">
                  <p className="text-[1.18rem] font-medium leading-[1.13] tracking-[-0.055em] text-white sm:text-[1.32rem]">
                    <SplitCardText text={slide.text} />
                  </p>
                </div>
              </article>
            </MobileReveal>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.82))] lg:block"
        />

        <div className="mt-6 flex justify-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => scrollSlider(-1)}
            className="flex h-13 w-13 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/78 backdrop-blur-md transition duration-300 hover:border-white/22 hover:bg-white/[0.08] hover:text-white"
            aria-label="Предыдущий слайд"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollSlider(1)}
            className="flex h-13 w-13 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/78 backdrop-blur-md transition duration-300 hover:border-white/22 hover:bg-white/[0.08] hover:text-white"
            aria-label="Следующий слайд"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

function VideoStoryRow({ items }) {
  const [activeVideoId, setActiveVideoId] = useState(null)

  return (
    <div className="mx-auto mt-8 grid max-w-[70rem] grid-cols-1 justify-items-center gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-8">
      {items.map((item, index) => (
        <MobileReveal
          key={item.id}
          delay={0.06 * index}
          y={26}
          blur={10}
          variant={storyRevealVariants[index % storyRevealVariants.length]}
          className="group flex flex-col items-center gap-3 text-center"
        >
          <div className="relative block rounded-full bg-[linear-gradient(180deg,rgba(255,138,28,0.96),rgba(255,255,255,0.18))] p-[3px] shadow-[0_0_0_1px_rgba(255,138,28,0.22),0_18px_46px_rgba(255,138,28,0.12)] transition-transform duration-300 group-hover:scale-[1.025]">
            {activeVideoId === item.id ? (
              <div className="relative flex h-[16rem] w-[16rem] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black sm:h-[18rem] sm:w-[18rem] lg:h-[19.5rem] lg:w-[19.5rem]">
                <iframe
                  className="absolute left-1/2 top-1/2 h-[178%] w-full -translate-x-1/2 -translate-y-1/2 scale-[1.2]"
                  src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.14),transparent_36%)]"
                />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setActiveVideoId(item.id)}
                className="relative flex h-[16rem] w-[16rem] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8a1c] sm:h-[18rem] sm:w-[18rem] lg:h-[19.5rem] lg:w-[19.5rem]"
                aria-label={`Воспроизвести видео-отзыв: ${item.title}`}
              >
                <>
                  <img
                    src={item.previewSrc}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full scale-[1.18] object-cover object-center transition-transform duration-500 group-hover:scale-[1.24]"
                  />
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.2)_52%,rgba(0,0,0,0.48)_100%)]" />
                  <span className="absolute flex h-14 w-14 items-center justify-center rounded-full border border-white/18 bg-black/42 text-white shadow-[0_14px_30px_rgba(0,0,0,0.3)] backdrop-blur-md transition-transform duration-300 group-hover:scale-105 sm:h-[4rem] sm:w-[4rem]">
                    <span className="ml-1 h-0 w-0 border-y-[0.62rem] border-l-[0.92rem] border-y-transparent border-l-white sm:border-y-[0.72rem] sm:border-l-[1.05rem]" />
                  </span>
                </>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.14),transparent_36%)]"
                />
              </button>
            )}
          </div>
          <div>
            <div className="text-base font-medium tracking-[-0.03em] text-white sm:text-lg">
              {item.title}
            </div>
            <div className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-white/42 sm:mt-1.5 sm:text-[0.72rem] sm:tracking-[0.24em]">
              YouTube Shorts
            </div>
          </div>
        </MobileReveal>
      ))}
    </div>
  )
}

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_22%),radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.05),transparent_30%)]" />
      <div className="noise-mask absolute inset-0 opacity-35" />
      <GridLines />
      <Header />
      <HeroSection />
      <LogosSection />

      <Motion.section {...sectionReveal} className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto w-[min(1320px,94vw)]">
          <SectionHeader
            eyebrow="Audience"
            title="Кому подойдет эта программа"
            text="Блок отвечает на главный вопрос пользователя: для кого это и почувствует ли он, что программа про него."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:gap-6 md:grid-cols-2">
            {audienceCards.map((item, index) => (
              <MobileReveal
                key={item.title}
                delay={0.05 * index}
                y={24}
                blur={10}
                variant={audienceRevealVariants[index % audienceRevealVariants.length]}
              >
              <AudienceCard className="h-full">
                <AudienceCardInner className="h-full min-h-[330px] overflow-hidden px-5 pb-5 pt-6 sm:min-h-[360px] sm:px-8 sm:pb-7 sm:pt-7 lg:min-h-[380px]">
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="text-xs uppercase tracking-[0.24em] text-white/38">
                      {item.index}
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm transition duration-300 group-hover:border-white/16 group-hover:bg-white/[0.06]">
                        <item.icon
                          className="size-5 text-white/72 transition duration-300 group-hover:text-white/88"
                          strokeWidth={1.4}
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                  <div className="relative z-10 mt-10 max-w-none space-y-4 pr-[38%] sm:mt-12 sm:max-w-[64%] sm:pr-0 lg:max-w-[60%]">
                    <AudienceCardTitle className="mt-0 whitespace-pre-line text-[1.18rem] leading-[1.08] tracking-[-0.055em] sm:text-[1.48rem] sm:leading-[1.08] lg:text-[1.72rem] lg:leading-[1.08]">
                      {item.title}
                    </AudienceCardTitle>
                    <AudienceCardText className="mt-0 max-w-[34ch] text-[1rem] leading-[1.45] text-white/54 sm:max-w-[36ch] sm:text-[1.06rem] sm:leading-[1.5]">
                      {item.text}
                    </AudienceCardText>
                  </div>

                  <img
                    src={item.image}
                    alt=""
                      aria-hidden="true"
                      className={cn(
                        'pointer-events-none absolute bottom-0 z-[2] select-none object-contain',
                        item.imageClassName,
                      )}
                    />
                  </AudienceCardInner>
                </AudienceCard>
              </MobileReveal>
            ))}
          </div>
        </div>
      </Motion.section>

      <Motion.section {...sectionReveal} className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <ProgramBenefitsSection
          eyebrow="Value"
          title="Что ты получишь внутри"
          description="Здесь упакована ценность программы без перегруза: логика, инструменты, опора и практический маршрут."
          benefits={outcomes}
        />
      </Motion.section>

      <Motion.section
        id="program"
        {...sectionReveal}
        className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto w-[min(1320px,94vw)]">
          <SectionHeader
            eyebrow="Modules"
            title="Что внутри программы"
            text="Логика старого блока сохранена, но собрана чище: 6 крупных модулей на одном экране без визуального шума."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
            {modules.map((module, index) => (
              <MobileReveal
                key={module.index}
                delay={0.04 * index}
                y={22}
                blur={10}
                variant={moduleRevealVariants[index % moduleRevealVariants.length]}
              >
                <FeatureCard
                  feature={{
                    index: module.index,
                    title: module.title,
                    icon: module.icon,
                    description: module.description,
                  }}
                />
              </MobileReveal>
            ))}
          </div>
        </div>
      </Motion.section>

      <Motion.section {...sectionReveal} className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto w-[min(1320px,94vw)]">
          <SectionHeader
            eyebrow="Toolkit"
            title="Что будет у вас под рукой"
            text="Помимо самих уроков, внутри есть рабочие ориентиры, шаблоны и контрольные точки, которые помогают принимать решения быстрее и действовать увереннее."
          />
          <div className="mt-8 sm:mt-12">
            <BentoGrid items={launchToolkitItems} />
          </div>
        </div>
      </Motion.section>

      <Motion.section {...sectionReveal} className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Bucket
          eyebrow="Momentum"
          title="Как программа собирает импульс"
          description="Этот блок показывает сам принцип движения внутри обучения: вы не просто смотрите материалы, а последовательно переходите от понимания к рабочему запуску."
          chips={programFlowChips}
        />
      </Motion.section>

      <Motion.section {...sectionReveal} className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <AboutMeSlider slides={aboutSlides} />
      </Motion.section>

      <Motion.section {...sectionReveal} className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto w-[min(1320px,94vw)]">
          <SectionHeader
            eyebrow="Student Results"
            title="Результаты учеников"
            text="Сейчас можно оставить как каркас под видео-кейсы, созвоны и реальные результаты участников."
          />
          <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)] sm:mt-12">
            <div className="flex max-h-[620px] justify-center gap-4 overflow-hidden sm:max-h-[760px] sm:gap-5">
              <TestimonialsColumn testimonials={firstStudentColumn} duration={15} />
              <TestimonialsColumn
                testimonials={secondStudentColumn}
                className="hidden md:block"
                duration={18}
              />
              <TestimonialsColumn
                testimonials={thirdStudentColumn}
                className="hidden xl:block"
                duration={16}
              />
            </div>
          </div>
        </div>
      </Motion.section>

      <Motion.section {...sectionReveal} className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto w-[min(1320px,94vw)]">
          <SectionHeader
            eyebrow="Testimonials"
            title="Видео-отзывы"
            text="Шесть коротких видео-отзывов в формате Shorts, расположенные в указанной последовательности."
          />
          <VideoStoryRow items={videoReviews} />
        </div>
      </Motion.section>

      <Motion.section
        id="pricing"
        {...sectionReveal}
        className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto w-[min(1320px,94vw)]">
          <SectionHeader
            eyebrow="Pricing"
            title="Тарифы участия"
            text="Три формата входа: самостоятельный, с поддержкой и персональный. Карточки разделены по логике, чтобы человек быстро понял разницу."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 xl:grid-cols-3">
            {pricing.map((plan, index) => (
              <MobileReveal
                key={plan.name}
                delay={0.06 * index}
                y={28}
                blur={10}
                variant={pricingRevealVariants[index % pricingRevealVariants.length]}
              >
                <PricingCard.Card
                  className={[
                    'flex h-full flex-col',
                    plan.name === 'PRIVATE 1:1' ? 'overflow-hidden' : '',
                    plan.featured ? 'ring-1 ring-white/14' : '',
                  ].join(' ')}
                >
                  {plan.name === 'PRIVATE 1:1' ? (
                    <>
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-[1px] rounded-[1.15rem] border border-white/[0.035]"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-10 top-0 h-20 rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),rgba(255,214,176,0.08)_34%,transparent_74%)] blur-2xl"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-0 top-[4.8rem] h-[58%] w-20 bg-[radial-gradient(circle_at_left,rgba(255,226,188,0.08),transparent_72%)] blur-2xl"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute right-0 top-[5.4rem] h-[54%] w-24 bg-[radial-gradient(circle_at_right,rgba(255,177,92,0.1),transparent_74%)] blur-2xl"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-10 bottom-0 h-16 rounded-full bg-[radial-gradient(circle_at_bottom,rgba(255,132,36,0.14),transparent_72%)] blur-2xl"
                      />
                    </>
                  ) : null}
                  <PricingCard.Header className={plan.featured ? 'bg-white/[0.06]' : ''}>
                    <PricingCard.Plan>
                      <PricingCard.PlanName>
                        <plan.icon aria-hidden="true" />
                        <span>{plan.name}</span>
                      </PricingCard.PlanName>
                      <PricingCard.Badge>{plan.badge}</PricingCard.Badge>
                    </PricingCard.Plan>

                    <PricingCard.Price>
                      <PricingCard.MainPrice>{plan.price}</PricingCard.MainPrice>
                      {plan.period ? <PricingCard.Period>{plan.period}</PricingCard.Period> : null}
                      {plan.originalPrice ? (
                        <PricingCard.OriginalPrice>{plan.originalPrice}</PricingCard.OriginalPrice>
                      ) : null}
                    </PricingCard.Price>

                    <PricingCard.Description>{plan.tone}</PricingCard.Description>

                    <div className="mt-5 text-xl leading-8 tracking-[-0.05em] text-white">
                      {plan.summary}
                    </div>

                    <Button
                      asChild
                      className={[
                        'mt-6 h-11 w-full rounded-xl font-semibold shadow-none backdrop-blur-sm',
                        plan.name === 'PRIVATE 1:1'
                          ? "relative overflow-hidden border border-[#ffb15c]/55 !bg-[linear-gradient(180deg,#ffb24d_0%,#ff951f_44%,#ff7800_100%)] !text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.32),inset_0_-1px_0_rgba(110,39,0,0.24),0_16px_36px_rgba(255,122,11,0.26),0_0_24px_rgba(255,140,32,0.12)] before:absolute before:inset-x-[9%] before:top-0 before:h-[48%] before:rounded-full before:bg-[linear-gradient(180deg,rgba(255,255,255,0.24),rgba(255,255,255,0))] before:opacity-90 before:content-[''] after:absolute after:right-6 after:top-1.5 after:h-8 after:w-16 after:rotate-[16deg] after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.24),rgba(255,255,255,0))] after:blur-md after:content-[''] hover:!border-[#ffc278] hover:!bg-[linear-gradient(180deg,#ffbc5c_0%,#ff9b2d_44%,#ff7d08_100%)] hover:!text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.38),inset_0_-1px_0_rgba(110,39,0,0.2),0_20px_44px_rgba(255,122,11,0.34),0_0_36px_rgba(255,140,32,0.18)]"
                          : 'border border-white/12 !bg-transparent !text-white hover:!border-white/22 hover:!bg-white/[0.05] hover:!text-white',
                      ].join(' ')}
                    >
                      <a href={plan.href}>{plan.cta}</a>
                    </Button>
                  </PricingCard.Header>

                  <PricingCard.Body className="flex flex-1 flex-col">
                    <div>
                      <div className="mb-4 text-[0.62rem] uppercase tracking-[0.34em] text-white/42">
                        Что входит
                      </div>
                      <PricingCard.List>
                        {plan.includes.map((item) => (
                          <PricingCard.ListItem key={item}>
                            <span className="mt-0.5">
                              <BadgeCheck
                                className="h-4 w-4 text-emerald-400"
                                aria-hidden="true"
                              />
                            </span>
                            <span>{item}</span>
                          </PricingCard.ListItem>
                        ))}
                      </PricingCard.List>
                    </div>

                    {plan.excludes.length ? (
                      <>
                        <PricingCard.Separator className="mt-6">
                          Не входит
                        </PricingCard.Separator>
                        <PricingCard.List>
                          {plan.excludes.map((item) => (
                            <PricingCard.ListItem key={item} className="opacity-80">
                              <span className="mt-0.5">
                                <XCircle
                                  className="h-4 w-4 text-white/34"
                                  aria-hidden="true"
                                />
                              </span>
                              <span>{item}</span>
                            </PricingCard.ListItem>
                          ))}
                        </PricingCard.List>
                      </>
                    ) : (
                      <>
                        <PricingCard.Separator className="mt-6">
                          Премиальный формат
                        </PricingCard.Separator>
                        <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-7 text-white/62">
                          Максимальная глубина, личная связь и приоритетный фокус на
                          результате под ваш кейс.
                        </div>
                      </>
                    )}
                  </PricingCard.Body>
                </PricingCard.Card>
              </MobileReveal>
            ))}
          </div>
        </div>
      </Motion.section>

      <Motion.section
        id="faq"
        {...sectionReveal}
        className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <FAQ
          title="Частые вопросы"
          subtitle="FAQ"
          faqData={faqData}
          className="mx-auto w-[min(1320px,94vw)] rounded-[2.25rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
        />
      </Motion.section>

      <Motion.div
        {...sectionReveal}
      >
        <FinalCtaContact
          title="Выбери подходящий формат и начни двигаться системно"
          description="Если вы хотите не просто посмотреть программу, а выбрать лучший следующий шаг под свой этап, оставьте контакты и укажите формат, который вам ближе."
        />
      </Motion.div>

      <Footer />
    </main>
  )
}

export default App
