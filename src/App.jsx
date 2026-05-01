import { useEffect, useRef, useState } from 'react'
import audience01 from '../01.png'
import audience02 from '../02.png'
import audience03 from '../03.png'
import audience04 from '../04.png'
import audienceManImage from './assets/audience-man.png'
import audienceWomanImage from './assets/audience-woman.png'
import programInfluencersImage from './assets/program-influencers.jpg'
import programLogisticsImage from './assets/program-logistics.jpg'
import programAiImage from './assets/program-ai.jpg'
import vladAboutVideo from './assets/vlad-about.mp4'
import resultsSalesUpdateVideo from './assets/results-sales-update.mp4'
import resultsCaseVideo from './assets/results-case.mov'
import resultsRealNumbersVideo from './assets/results-real-numbers.mov'
import aboutCafeImage from '../IMAGES/1/2/3/telegram-cloud-document-1-5084712035413920079 1.jpg'
import aboutCarImage from '../IMAGES/1/2/3/telegram-cloud-document-1-5084712035413920079 2.jpg'
import aboutWarehouseImage from '../IMAGES/1/2/3/telegram-cloud-document-1-5084712035413920079 3.jpg'
import aboutSingaporeImage from '../IMAGES/1/2/3/telegram-cloud-document-1-5084712035413920079 4.jpg'
import aboutChicagoImage from '../IMAGES/1/2/3/telegram-cloud-document-1-5084712035413920079 5.jpg'
import aboutCourtImage from '../IMAGES/1/2/3/telegram-cloud-document-1-5084712035413920079 6.jpg'
import breakdownScreen01 from '../IMAGES/Screens/image 106.jpg'
import breakdownScreen02 from '../IMAGES/Screens/image 107.jpg'
import breakdownScreen03 from '../IMAGES/Screens/image 108.jpg'
import breakdownScreen04 from '../IMAGES/Screens/image 109.jpg'
import breakdownScreen05 from '../IMAGES/Screens/image 110.jpg'
import breakdownScreen06 from '../IMAGES/Screens/image 111.jpg'
import breakdownScreen07 from '../IMAGES/Screens/image 112.jpg'
import resultScreen01 from '../IMAGES/Results/telegram-cloud-photo-size-1-4972364186855869190-y 1.jpg'
import resultScreen02 from '../IMAGES/Results/telegram-cloud-photo-size-1-4972364186855869191-y 1.jpg'
import resultScreen03 from '../IMAGES/Results/telegram-cloud-photo-size-1-4972364186855869192-y 1.jpg'
import resultScreen04 from '../IMAGES/Results/telegram-cloud-photo-size-1-4972364186855869193-y 1.jpg'
import resultScreen05 from '../IMAGES/Results/telegram-cloud-photo-size-1-4972364186855869194-y 1.jpg'
import reviewAnnaPreview from '../IMAGES/1/2/Anna.jpg'
import reviewMaksPreview from '../IMAGES/1/2/Maks.jpg'
import reviewArtemPreview from '../IMAGES/1/2/Artem.jpg'
import reviewDanyaPreview from '../IMAGES/1/2/Danya.jpg'
import reviewSofyaPreview from '../IMAGES/1/2/Sofya.jpg'
import reviewOksanaPreview from '../IMAGES/1/2/Oksana.jpg'
import studentCaseOrders from './assets/student-case-orders.jpg'
import studentCaseSupplement from './assets/student-case-supplement.jpg'
import studentCaseSports from './assets/student-case-sports.jpg'

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
  X,
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
    title: 'Для тех, кто хочет\nпродавать на рынок США\nи зарабатывать в $$$',
    text: 'Если вы живёте в США или хотите зайти именно в американский рынок, программа помогает собрать запуск под TikTok Shop без догадок и хаоса.',
    image: audience01,
    imageClassName:
      'right-[1%] bottom-0 w-[35%] sm:right-[2%] sm:w-[38%] md:w-[39%] lg:w-[37%]',
  },
  {
    index: '02',
    icon: Compass,
    title: 'Для тех, кто слышал\nпро TikTok Shop, но не\nпонимает, как зайти правильно',
    text: 'Подходит тем, кто хочет запустить TikTok Shop, но пока не понимает, с чего начать, как выбрать модель и как не слить время на случайные действия.',
    image: audience02,
    imageClassName:
      'right-[0%] bottom-0 w-[36%] sm:right-[-1%] sm:w-[39%] md:w-[40%] lg:w-[37%]',
  },
  {
    index: '03',
    icon: Target,
    title: 'Для тех, кто хочет\nнайти продающий товар\nи запуститься без потерь',
    text: 'Если вы боитесь ошибиться с товаром, закупкой и маржой, программа помогает пройти путь через аналитику, тест и расчёты, а не вслепую.',
    image: audienceManImage,
    imageClassName:
      'right-[1%] bottom-0 w-[34%] sm:right-[2%] sm:w-[36%] md:w-[37%] lg:w-[35%]',
  },
  {
    index: '04',
    icon: Layers3,
    title: 'Для тех, кто уже продавал\nна Amazon, Shopify,\nWildberries или eBay',
    text: 'Если у вас уже был опыт на других площадках и нужен новый канал продаж, здесь вы увидите, как адаптировать мышление и запуск под TikTok Shop.',
    image: audienceWomanImage,
    imageClassName:
      'right-[1%] bottom-0 w-[33%] sm:right-[2%] sm:w-[35%] md:w-[36%] lg:w-[34%]',
  },
  {
    index: '05',
    icon: BadgeDollarSign,
    title: 'Для тех, кто хочет\nвыйти на первые продажи\nза 6–8 недель',
    text: 'Подходит тем, кому нужен не растянутый “когда-нибудь запуск”, а понятная структура действий с коротким горизонтом до первых реальных тестов и продаж.',
    image: audience03,
    imageClassName:
      'right-[1%] bottom-0 w-[33%] sm:right-[3%] sm:w-[35%] md:w-[36%] lg:w-[33%]',
  },
  {
    index: '06',
    icon: BriefcaseBusiness,
    title: 'Для тех, кто хочет\nзапускаться системно,\nа не на интуиции',
    text: 'Если вам нужен не просто контент про TikTok Shop, а логика по товару, поставщику, рекламе, инфлюенсерам и деньгам в одном маршруте, этот формат про вас.',
    image: audience04,
    imageClassName:
      'right-[1%] bottom-0 w-[31%] sm:right-[2%] sm:w-[34%] md:w-[35%] lg:w-[32%]',
  },
]

const outcomes = {
  primary: {
    title: 'Понимание всей модели\nTikTok Shop\nот начала до запуска',
    supporting:
      'Система выбора товара, оценки ниши и перехода от идеи к запуску без хаотичных решений.',
    items: [
      'Пошаговая логика запуска от регистрации до первых продаж',
      'AI-инструменты для анализа товара, конкурентов, листинга и контента',
      'Примеры реальных запусков и ошибок, которые нельзя повторять',
    ],
    preview: programAiImage,
    previewLabel: 'AI сервисы и разборы',
  },
  logistics: {
    title: 'Понимание поставщиков,\nлогистики и работы\nсо складами',
    supporting:
      'Все, что нужно, чтобы выстроить базовую операционную систему без хаоса и лишних потерь времени.',
    items: [
      'Контакты поставщиков, своих агентов в Китае и prep center',
      'Логистика из Китая в США, доставка, хранение и FBT-процессы',
      'Контакты бухгалтеров в США и операционная база под запуск',
    ],
    preview: programLogisticsImage,
    previewLabel: 'Логистика и склады',
  },
  marketing: {
    title: 'Подход к creators,\nконтенту\nи продвижению',
    supporting:
      'Понимание того, как соединяются контент, creators и продвижение в одной рабочей логике запуска.',
    items: [
      'Скрипты для общения с инфлюенсерами и шаблоны писем',
      'Поиск creators, sample request и сценарии переговоров',
      'AI-сервисы для упрощения контента и ускорения запусков',
    ],
    preview: programInfluencersImage,
    previewLabel: 'Модуль Influencers',
  },
  structure: {
    title: 'Готовую структуру действий вместо хаоса',
    supporting: 'Материалы, контакты, сервисы и ориентиры, которые можно сразу применять в работе',
    items: [
      'Контакты поставщиков',
      'Бухгалтеры в США',
      'Свои агенты в Китае',
      'Скрипты для инфлюенсеров',
      'Prep center и хранение',
      'AI сервисы и шаблоны',
    ],
  },
}

const modules = [
  {
    index: '01',
    icon: Sparkles,
    title: 'Регистрация и настройка магазина',
    description:
      'Открытие аккаунта, интерфейс Seller Center, базовые настройки и что нужно подготовить до первого действия внутри платформы.',
  },
  {
    index: '02',
    icon: BadgeDollarSign,
    title: 'Поиск идеи и отбор товара',
    description:
      'Какие источники смотреть, как фильтровать идеи и по каким признакам отсекать слабые товары ещё до закупки.',
  },
  {
    index: '03',
    icon: Fingerprint,
    title: 'Sourcing и переговоры с поставщиками',
    description:
      'Alibaba, 1688, агенты, фабрики, образцы, условия сделки и как задавать правильные вопросы поставщику.',
  },
  {
    index: '04',
    icon: PackageCheck,
    title: 'Листинг, склад и отправка товара',
    description:
      'Подготовка карточки, prep center, FBT, хранение, упаковка и практическая цепочка доставки до клиента.',
  },
  {
    index: '05',
    icon: Pencil,
    title: 'Outreach, creators и контент',
    description:
      'Где искать блогеров, как им писать, как отправлять sample request и какие форматы контента запускать в тест.',
  },
  {
    index: '06',
    icon: Settings2,
    title: 'Тест, аналитика и следующие действия',
    description:
      'Что смотреть после старта, как читать сигналы, какие метрики важны в первые недели и как принимать решения по итогу теста.',
  },
]

const launchToolkitItems = [
  {
    title: 'Полное понимание TikTok Shop в США',
    meta: 'Outcome',
    description:
      'Понимаете, как устроена платформа, где деньги, как выглядит маршрут запуска и какие решения действительно влияют на первые продажи.',
    icon: <Compass className="h-4 w-4 text-[#ff8a1c]" />,
    status: 'База',
    tags: ['Платформа', 'США', 'Логика'],
    cta: 'Понять систему',
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: 'Выбранная ниша и товар для запуска',
    meta: 'Product',
    description:
      'На выходе у вас есть не абстрактные идеи, а понятное направление: какую нишу смотреть и какой продукт есть смысл тестировать под TikTok Shop.',
    icon: <Target className="h-4 w-4 text-[#ff8a1c]" />,
    status: 'Выбор',
    tags: ['Ниша', 'Товар'],
    cta: 'Искать осознанно',
  },
  {
    title: 'Расчет реальной юнит-экономики',
    meta: 'Numbers',
    description:
      'Умеете считать маржу, комиссии, доставку и запас по прибыли до закупки товара, чтобы не заходить в минус на старте.',
    icon: <BadgeDollarSign className="h-4 w-4 text-[#ff8a1c]" />,
    status: 'Контроль',
    tags: ['Маржа', 'P&L'],
    cta: 'Считать до закупки',
  },
  {
    title: 'Список потенциальных поставщиков',
    meta: 'Supply',
    description:
      'Понимаете, где искать фабрики и поставщиков, как с ними общаться и по каким критериям отбирать нормальные варианты под тест и масштабирование.',
    icon: <PackageCheck className="h-4 w-4 text-[#ff8a1c]" />,
    status: 'Контакты',
    tags: ['Factory', 'Sourcing'],
    cta: 'Собирать базу',
  },
  {
    title: 'Готовая стратегия запуска',
    meta: 'Launch',
    description:
      'У вас есть понятная последовательность действий: товар, листинг, контент, creators, тест, первые сигналы и что делать дальше по результатам.',
    icon: <Rocket className="h-4 w-4 text-[#ff8a1c]" />,
    status: 'Маршрут',
    tags: ['Старт', 'Тест'],
    cta: 'Двигаться по шагам',
  },
  {
    title: 'Шаблоны и сценарии для инфлюенсеров',
    meta: 'Creators',
    description:
      'Не пишете вслепую: на руках есть готовые шаблоны сообщений, сценарии коммуникации и понимание, как искать creators под ваш продукт.',
    icon: <Pencil className="h-4 w-4 text-[#ff8a1c]" />,
    status: 'Шаблоны',
    tags: ['UGC', 'Outreach'],
    cta: 'Запускать outreach',
  },
  {
    title: 'Понимание логистики и фулфилмента',
    meta: 'Operations',
    description:
      'Разбираетесь, как отправлять товар, работать с prep center, хранением, доставкой и выстраивать операционку так, чтобы запуск не разваливался.',
    icon: <Settings2 className="h-4 w-4 text-[#ff8a1c]" />,
    status: 'Операционка',
    tags: ['3PL', 'Fulfillment'],
    cta: 'Собирать операционку',
  },
  {
    title: 'План действий на первые 30–60 дней',
    meta: 'Execution',
    description:
      'После обучения у вас есть не хаос, а понятный план: что делать сразу, что тестировать в первый месяц и как переходить к следующему этапу.',
    icon: <BadgeCheck className="h-4 w-4 text-[#ff8a1c]" />,
    status: 'План',
    tags: ['30 дней', '60 дней'],
    cta: 'Идти самостоятельно',
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

const roadmapSteps = [
  {
    index: '01',
    phase: 'Неделя 1',
    title: 'Разбираем TikTok Shop и модель продаж',
    description:
      'Понимаете, как устроена платформа, какие товары заходят, где деньги и какие ошибки чаще всего тормозят новичков.',
    milestone: 'Зарегистрировали TikTok Shop аккаунт',
    icon: Compass,
  },
  {
    index: '02',
    phase: 'Неделя 2',
    title: 'Выбор ниши и товара',
    description:
      'Ищем товар под запуск, анализируем спрос, конкурентов, маржу и потенциал продаж до первых закупок.',
    milestone: 'Выбрали правильный товар для запуска',
    icon: Target,
  },
  {
    index: '03',
    phase: 'Неделя 3',
    title: 'Поиск поставщика и первая партия',
    description:
      'Разбираем США, Китай, Alibaba, 1688, агентов и локальных поставщиков, чтобы закупка не была хаотичной.',
    milestone: 'Закупили партию у поставщика, и она уже едет к нам',
    icon: PackageCheck,
  },
  {
    index: '04',
    phase: 'Неделя 4',
    title: 'Подготовка магазина и листинга',
    description:
      'Собираем продающую карточку товара: оффер, визуал, описание, цену, структуру листинга и подачу.',
    milestone: 'Собрали продающую карточку товара',
    icon: Fingerprint,
  },
  {
    index: '05',
    phase: 'Неделя 5',
    title: 'Инфлюенсеры и первые договоренности',
    description:
      'Учимся находить блогеров, писать им, договариваться за комиссию или flat fee и готовить отправку семплов.',
    milestone: 'Нашли инфлюенсеров для рекламы товара',
    icon: Users,
  },
  {
    index: '06',
    phase: 'Неделя 6',
    title: 'AI-контент для публикаций',
    description:
      'Собираем контент-связки и учимся быстро генерировать AI-видео, чтобы не зависеть только от внешних creators.',
    milestone: 'Нагенерировали AI видео-контент для публикаций',
    icon: Pencil,
  },
  {
    index: '07',
    phase: 'Неделя 7',
    title: 'Первые продажи и отправка семплов',
    description:
      'Запускаем тесты, отслеживаем метрики, отправляем образцы блогерам и выходим на первые деньги.',
    milestone: 'Запустили продажи и начали получать первые $',
    icon: BadgeDollarSign,
  },
  {
    index: '08',
    phase: 'Неделя 8',
    title: 'Масштабирование и реклама',
    description:
      'Подключаем рекламу, усиливаем рабочие связки, добавляем новых creators и выстраиваем рост на системной основе.',
    milestone: 'Выходим на первые $5,000-$10,000 продаж',
    icon: Rocket,
  },
  {
    index: '09',
    phase: '2 месяц+',
    title: 'Eat. Sleep. Sale. Repeat.',
    description:
      'Повторяете цикл, усиливаете лучшие офферы, работаете с топ-инфлюенсерами и превращаете запуск в рабочую систему.',
    milestone: 'Система повторяется и масштабируется дальше',
    icon: Crown,
  },
]

const aboutSlides = [
  {
    index: '01',
    image: aboutCarImage,
    text: 'Больше 5 лет занимаюсь e-commerce в США и продаю товары на Amazon, TikTok Shop и других маркетплейсах. Это не теория, а ежедневная работа внутри рынка.',
  },
  {
    index: '02',
    image: aboutWarehouseImage,
    text: 'У нас есть своя операционная база: склад, команда, поставщики, prep center и логистика. Поэтому в обучении я показываю не идеи, а рабочую механику запуска.',
  },
  {
    index: '03',
    image: aboutSingaporeImage,
    text: 'В 2026 году у нас уже более $2M продаж. Этот опыт помогает трезво смотреть на товар, экономику, риски и private label, а не обещать лёгкие деньги.',
  },
  {
    index: '04',
    video: vladAboutVideo,
    text: 'В обучении показываю, как сам выбираю товар, считаю маржу, общаюсь с поставщиками, запускаю продукт через инфлюенсеров и не сливаю деньги на первом тесте.',
  },
  {
    index: '05',
    image: aboutChicagoImage,
    text: 'Я понимаю, как запускать товары под рынок США: от поиска продукта и переговоров с фабриками до доставки, упаковки, prep center и первых повторяемых продаж.',
  },
  {
    index: '06',
    image: aboutCourtImage,
    text: 'Внутри программы даю не пересказ из интернета, а практичную карту запуска: товар, юнит-экономика, поставщик, инфлюенсеры, контент, тест и масштабирование.',
  },
  {
    index: '07',
    image: aboutCafeImage,
    text: 'Моя задача в обучении — не просто вдохновить, а помочь пройти первый запуск без лишних потерь, чтобы у вас появилась рабочая система, а не набор надежд.',
  },
]

const studentResults = [
  {
    text: 'До программы я не понимала, какой товар вообще имеет смысл тестировать. После разбора отобрала 3 позиции, посчитала экономику и вышла на первые 27 заказов без хаотичной закупки.',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Алина',
    role: 'Первый запуск в США, 27 orders',
  },
  {
    text: 'У меня раньше был опыт в e-commerce, но TikTok Shop не складывался в систему. Здесь собрал нормальную связку: товар, creators, контент и логистика. Первый рабочий тест дал около $4.5k GMV.',
    image: 'https://randomuser.me/api/portraits/men/15.jpg',
    name: 'Максим',
    role: 'Seller / e-commerce, $4.5k GMV',
  },
  {
    text: 'Для меня самый полезный блок был по creators. До этого я просто не понимала, как писать и кого отбирать. После запуска 5 блогеров получили семплы, и с первых видео пошли заказы.',
    image: 'https://randomuser.me/api/portraits/women/18.jpg',
    name: 'София',
    role: '5 creators in test',
  },
  {
    text: 'Сильнее всего помог блок по операционке. До этого не было понимания, как считать доставку, хранение и prep center. После настройки всё стало прозрачно, и маржа перестала быть “на глаз”.',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    name: 'Даниил',
    role: 'Marketplace operator',
  },
  {
    text: 'У меня был страх заходить в рынок США без понимания цифр. После обучения я уже считала не “по ощущениям”, а по юнит-экономике, и это убрало лишние ошибки ещё до первой закупки.',
    image: 'https://randomuser.me/api/portraits/women/29.jpg',
    name: 'Екатерина',
    role: 'Founder, unit economics first',
  },
  {
    text: 'Мне зашло, что здесь не просто уроки по отдельности. Когда собрали контент, influencers и отправку в одну систему, стало понятно, почему раньше запуск буксовал. Сейчас уже есть первые повторяемые продажи.',
    image: 'https://randomuser.me/api/portraits/men/31.jpg',
    name: 'Тимур',
    role: 'Brand owner, repeatable sales',
  },
  {
    text: 'Я пришла с нуля и думала, что на запуск уйдут месяцы хаоса. По факту получила понятный план на первые 30-60 дней и уже на первом этапе стало ясно, что делать по товару, листингу и тестам.',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    name: 'Мария',
    role: 'Старт с нуля, roadmap 30-60 days',
  },
  {
    text: 'Тут нет ощущения, что тебя просто мотивируют. Всё прикладное. Мы быстро дошли до теста товара, посмотрели сигналы по контенту и уже в первую неделю было понятно, что стоит масштабировать, а что нет.',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
    name: 'Илья',
    role: 'Performance marketer, first-week signals',
  },
  {
    text: 'После программы у меня не осталось ощущения, что TikTok Shop это лотерея. Я понимаю, где смотреть спрос, как считать риск и как не влететь в минус на товаре ещё до запуска рекламы.',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    name: 'Виктория',
    role: 'Product-led entrepreneur',
  },
  {
    text: 'Сейчас с одним из учеников сделали 65 продаж за первый месяц. Профит держится около $6 за юнит, и это уже примерно $700 чистыми на самом старте. Без сказок про “вложил $3-4k и сразу сделал $10k чистыми”.',
    preview: studentCaseOrders,
    name: 'Кейс ученика',
    role: '65 sales in month one · ~$700 net',
  },
  {
    text: '30 марта запускали ещё один supplement-продукт с другим учеником. Реакция от аудитории очень живая: инфлюенсеры сами просят продукт на тест, и уже видно хороший отклик по отправкам.',
    preview: studentCaseSupplement,
    name: 'Кейс по supplement',
    role: 'March 30 · strong creator demand',
  },
  {
    text: 'Ещё один запуск в спортивных товарах: около $10 профита за юнит. Сейчас продукт разгоняется через рекламу уже после того, как получили первые видео от инфлюенсеров и пошли нормальные сигналы.',
    preview: studentCaseSports,
    name: 'Кейс в sports',
    role: '~$10 profit per unit',
  },
]

const firstStudentColumn = studentResults.slice(0, 4)
const secondStudentColumn = studentResults.slice(4, 8)
const thirdStudentColumn = studentResults.slice(8, 12)

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

const videoBreakdowns = [
  {
    index: '01',
    image: breakdownScreen01,
    title: 'Разбор стратегии запуска',
  },
  {
    index: '02',
    image: breakdownScreen02,
    title: 'Разбор выбора товара',
  },
  {
    index: '03',
    image: breakdownScreen03,
    title: 'Разбор юнит-экономики',
  },
  {
    index: '04',
    image: breakdownScreen04,
    title: 'Разбор контента и creators',
  },
  {
    index: '05',
    image: breakdownScreen05,
    title: 'Разбор первых продаж',
  },
  {
    index: '06',
    image: breakdownScreen06,
    title: 'Разбор ошибок на старте',
  },
  {
    index: '07',
    image: breakdownScreen07,
    title: 'Разбор масштабирования',
  },
]

const resultScreens = [
  {
    index: '01',
    image: resultScreen01,
    title: 'День с выручкой $11,410',
    metric: '$11,410 revenue',
    layout: 'phone',
  },
  {
    index: '02',
    image: resultScreen02,
    title: 'Рост за неделю',
    metric: '$26,563 GMV',
    layout: 'phone',
  },
  {
    index: '03',
    image: resultScreen03,
    title: 'Продажи за день',
    metric: '$4,495 GMV',
    layout: 'phone',
  },
  {
    index: '05',
    image: resultScreen05,
    title: 'Результат за период',
    metric: '$81,275 GMV',
    layout: 'phone',
  },
]

const resultsInsights = [
  {
    label: '$5k-$10k+ / month',
    title: 'Показываем, как находить товары с потенциалом продаж $5,000–$10,000+ в месяц',
  },
  {
    label: '$50k-$200k+ / month',
    title: 'Разбираем товары, которые уже продаются на TikTok Shop на $50,000–$200,000+ в месяц',
  },
  {
    label: 'Unit economics',
    title: 'Показываем, как считать маржу до закупки товара, чтобы не зайти в минус',
  },
  {
    label: 'Small batch testing',
    title: 'Учим тестировать продукт небольшими партиями, а не закупать вслепую',
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
      'Полная программа обучения: 70+ роликов и 15 модулей',
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
      'Если вы находитесь в США, то да. Если вы находитесь за пределами США, есть возможность зайти через представителя, и с этим мы тоже помогаем отдельно.',
  },
  {
    question: 'Сколько денег нужно на старт?',
    answer:
      'Есть разные варианты, но минимум вам нужно иметь $1,500-$2,000 на запуск. Не живите в иллюзиях, что можно нормально запуститься на $500.',
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

function SafeImage({
  src,
  fallbackSrc,
  alt,
  className,
  loading = 'lazy',
  ...props
}) {
  const [imageSrc, setImageSrc] = useState(src)

  return (
    <img
      {...props}
      src={imageSrc}
      alt={alt}
      loading={loading}
      onError={() => {
        if (fallbackSrc && imageSrc !== fallbackSrc) {
          setImageSrc(fallbackSrc)
        }
      }}
      className={className}
    />
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

function RoadmapSection({ steps }) {
  return (
    <div className="mx-auto w-[min(1320px,94vw)]">
      <SectionHeader
        eyebrow="Roadmap"
        title="От нуля до первых $5,000-$10,000 продаж"
        text="Ниже понятный маршрут запуска на первые 2 месяца: от регистрации TikTok Shop и выбора товара до первых продаж, рекламы и системного масштабирования."
      />

      <div className="mx-auto mt-8 max-w-[920px] sm:mt-12">
        <div className="grid gap-3 sm:gap-4">
          {steps.map((step, index) => (
            <MobileReveal
              key={step.index}
              delay={0.04 * index}
              y={20}
              blur={10}
              variant={index % 2 === 0 ? 'drift-right' : 'drift-left'}
            >
              <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.22)] sm:p-5">
                <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#ff9a33]">
                      <step.icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                  <div className="min-w-0 flex-1 text-left">
                      <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-1 text-[0.62rem] tracking-[0.22em] text-white/54">
                        {step.phase}
                      </span>
                    </div>
                      <h3 className="mt-3 max-w-[28ch] text-[1.18rem] font-medium leading-[1.04] tracking-[-0.045em] text-white sm:text-[1.36rem]">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-[58ch] text-[0.94rem] leading-6 text-white/60 sm:text-[0.98rem] sm:leading-7">
                        {step.description}
                      </p>
                    </div>
                </div>
                <div className="mt-4 flex items-start gap-3 text-left text-sm leading-6 text-white/72 sm:text-[0.95rem]">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#ff9a33]" />
                  <span>{step.milestone}</span>
                </div>
              </div>
            </MobileReveal>
          ))}
        </div>
      </div>
    </div>
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
        text="Я больше 5 лет занимаюсь e-commerce в США. Продаю на Amazon, TikTok Shop и других маркетплейсах, веду запуски с собственной командой, складом, поставщиками, prep center и логистикой. В обучении показываю только то, что сам использую в бизнесе: от выбора товара и расчёта экономики до инфлюенсеров, тестов и первых продаж без лишних потерь."
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
                  {slide.video ? (
                    <video
                      src={slide.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover object-center"
                    />
                  ) : (
                    <img
                      src={slide.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  )}
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

function VideoBreakdownsSlider({ items }) {
  const sliderRef = useRef(null)

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return

    sliderRef.current.scrollBy({
      left: direction * Math.min(sliderRef.current.clientWidth * 0.9, 720),
      behavior: 'smooth',
    })
  }

  return (
    <div className="mx-auto w-[min(1320px,94vw)]">
      <SectionHeader
        eyebrow="Video Breakdowns"
        title="Видеоразборы"
        text="Короткие визуальные разборы показывают, как выглядит системный запуск изнутри: где искать точки роста, как оценивать решения и что исправлять до того, как ошибка станет дорогой."
      />

      <div className="relative mt-8 sm:mt-12">
        <div className="mb-5 flex items-center justify-center gap-3 sm:justify-end">
          <button
            type="button"
            onClick={() => scrollSlider(-1)}
            className="flex h-13 w-13 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/78 backdrop-blur-md transition duration-300 hover:border-white/22 hover:bg-white/[0.08] hover:text-white"
            aria-label="Предыдущий разбор"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollSlider(1)}
            className="flex h-13 w-13 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/78 backdrop-blur-md transition duration-300 hover:border-white/22 hover:bg-white/[0.08] hover:text-white"
            aria-label="Следующий разбор"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] sm:gap-7 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, index) => (
            <MobileReveal
              key={item.index}
              delay={0.05 * index}
              y={24}
              blur={10}
              variant={moduleRevealVariants[index % moduleRevealVariants.length]}
              className="snap-start"
            >
              <article className="group relative w-[min(42rem,86vw)] shrink-0 overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#171919] shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:w-[42rem] lg:w-[46rem]">
                <div className="relative overflow-hidden bg-black">
                  <SafeImage
                    src={item.image}
                    fallbackSrc={breakdownScreen06}
                    alt={item.title}
                    loading="lazy"
                    className="aspect-[2.05/1] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),transparent_54%,rgba(0,0,0,0.5))]" />
                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/72 text-sm font-medium text-white shadow-[0_14px_28px_rgba(0,0,0,0.25)] backdrop-blur-md sm:left-5 sm:top-5">
                    {item.index}
                  </div>
                  <div className="absolute inset-x-5 bottom-5">
                    <div className="w-fit rounded-full border border-white/12 bg-black/48 px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/70 backdrop-blur-md">
                      Практический разбор
                    </div>
                    <h3 className="mt-3 max-w-xl text-2xl font-medium leading-none tracking-[-0.055em] text-white sm:text-3xl">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </article>
            </MobileReveal>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.82))] lg:block"
        />
      </div>
    </div>
  )
}

function ResultsSlider({ items }) {
  return (
    <div className="mx-auto w-[min(1320px,94vw)]">
      <SectionHeader
        eyebrow="Numbers"
        title="Мои цифры"
        text="Не просто ‘можно заработать’, а конкретная логика: какие товары искать, как смотреть на оборот и как считать деньги до закупки, чтобы TikTok Shop не превращался в дорогую импровизацию."
        align="center"
      />

      <div className="mt-8 grid gap-4 sm:mt-12 xl:grid-cols-3 xl:gap-6">
        <MobileReveal delay={0.04} y={24} blur={10} variant="drift-left">
          <article className="h-full overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#171919] shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
            <div className="relative aspect-[16/10] overflow-hidden bg-black">
              <video
                src={resultsSalesUpdateVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.03),transparent_54%,rgba(0,0,0,0.48))]" />
              <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-black/42 px-4 py-2 text-[0.66rem] uppercase tracking-[0.24em] text-white/72 backdrop-blur-md">
                Live sales update
              </div>
            </div>
            <div className="px-5 py-5 sm:px-6 sm:py-6">
              <div className="text-[0.62rem] uppercase tracking-[0.26em] text-[#ff8a1c]">
                Обновление продаж вживую
              </div>
              <h3 className="mt-2 max-w-[21ch] text-[1.45rem] font-medium leading-[1.02] tracking-[-0.045em] text-white sm:text-[1.76rem]">
                Показываю, как выглядит рост, когда товар, контент и фулфилмент собраны в одну систему
              </h3>
              <p className="mt-4 max-w-[58ch] text-[0.94rem] leading-7 text-white/60">
                Это не ‘мотивационный’ ролик, а живая механика продаж: движение заказов,
                обновление показателей и результат, который появляется из правильной связки решений.
              </p>
            </div>
          </article>
        </MobileReveal>

        <MobileReveal delay={0.08} y={24} blur={10} variant="reveal">
          <article className="h-full overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#171919] shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
            <div className="relative aspect-[16/10] overflow-hidden bg-black">
              <video
                src={resultsCaseVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.03),transparent_56%,rgba(0,0,0,0.5))]" />
              <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-black/42 px-4 py-2 text-[0.66rem] uppercase tracking-[0.24em] text-white/72 backdrop-blur-md">
                Product test case
              </div>
            </div>
            <div className="px-5 py-5 sm:px-6 sm:py-6">
              <div className="text-[0.62rem] uppercase tracking-[0.26em] text-[#ff8a1c]">
                Практический кейс
              </div>
              <h3 className="mt-2 max-w-[22ch] text-[1.34rem] font-medium leading-[1.04] tracking-[-0.04em] text-white sm:text-[1.58rem]">
                Учим тестировать продукт небольшими партиями и смотреть на цифры до масштабирования
              </h3>
              <p className="mt-4 max-w-[56ch] text-[0.94rem] leading-7 text-white/60">
                На одном из продуктов мы вышли на первые продажи через связку:
                правильный товар, инфлюенсеры, контент и быстрый фулфилмент. Логику такого запуска показываю внутри по шагам.
              </p>
            </div>
          </article>
        </MobileReveal>

        <MobileReveal delay={0.12} y={24} blur={10} variant="drift-right">
          <article className="h-full overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#171919] shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
            <div className="relative aspect-[16/10] overflow-hidden bg-black">
              <video
                src={resultsRealNumbersVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.03),transparent_56%,rgba(0,0,0,0.5))]" />
              <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-black/42 px-4 py-2 text-[0.66rem] uppercase tracking-[0.24em] text-white/72 backdrop-blur-md">
                Real numbers
              </div>
            </div>
            <div className="px-5 py-5 sm:px-6 sm:py-6">
              <div className="text-[0.62rem] uppercase tracking-[0.26em] text-[#ff8a1c]">
                Реальные показатели
              </div>
              <h3 className="mt-2 max-w-[18ch] text-[1.34rem] font-medium leading-[1.04] tracking-[-0.04em] text-white sm:text-[1.58rem]">
                Показываю реальные цифры по продажам и динамике продукта
              </h3>
              <p className="mt-4 max-w-[56ch] text-[0.94rem] leading-7 text-white/60">
                Здесь видно не общие слова, а сами показатели: как двигаются продажи,
                что происходит по заказам и как выглядит результат, когда продукт начинает
                набирать оборот.
              </p>
            </div>
          </article>
        </MobileReveal>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
        {resultsInsights.map((item, index) => (
          <MobileReveal
            key={item.title}
            delay={0.05 * index}
            y={22}
            blur={10}
            variant={index % 2 === 0 ? 'pop' : 'drift-right'}
          >
            <article className="h-full rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-5 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.22)] sm:px-6">
              <div className="text-[0.62rem] uppercase tracking-[0.24em] text-[#ff8a1c]">
                {item.label}
              </div>
              <h3 className="mt-3 max-w-[24ch] text-[1.12rem] font-medium leading-[1.08] tracking-[-0.035em] text-white sm:text-[1.22rem]">
                {item.title}
              </h3>
            </article>
          </MobileReveal>
        ))}
      </div>
    </div>
  )
}

function AnalyticsScreensSlider({ items }) {
  const sliderRef = useRef(null)

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return

    sliderRef.current.scrollBy({
      left: direction * Math.min(sliderRef.current.clientWidth * 0.82, 520),
      behavior: 'smooth',
    })
  }

  return (
    <div className="mx-auto w-[min(1320px,94vw)]">
      <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.26)] sm:p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <div className="text-[0.62rem] uppercase tracking-[0.24em] text-[#ff8a1c]">
              Скрины аналитики
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollSlider(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/78 backdrop-blur-md transition duration-300 hover:border-white/22 hover:bg-white/[0.08] hover:text-white"
              aria-label="Предыдущая карточка результата"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollSlider(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/78 backdrop-blur-md transition duration-300 hover:border-white/22 hover:bg-white/[0.08] hover:text-white"
              aria-label="Следующая карточка результата"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, index) => (
            <MobileReveal
              key={item.index}
              delay={0.04 * index}
              y={22}
              blur={10}
              variant={pricingRevealVariants[index % pricingRevealVariants.length]}
              className="w-full shrink-0 snap-start lg:w-[350px]"
            >
              <article className="w-full overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#171919] shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
                <div className="relative overflow-hidden bg-[#f4f4f4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-top lg:aspect-[0.64]"
                  />
                  <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/72 text-xs font-medium text-white shadow-[0_14px_28px_rgba(0,0,0,0.25)] backdrop-blur-md">
                    {item.index}
                  </div>
                </div>

                <div className="border-t border-white/8 bg-[#1b1d1d] px-4 py-4 sm:px-5 sm:py-5">
                  <div className="text-[0.58rem] uppercase tracking-[0.24em] text-[#ff8a1c]">
                    {item.metric}
                  </div>
                  <h3 className="mt-2 max-w-[22ch] text-[1.08rem] font-medium leading-[1.06] tracking-[-0.03em] text-white sm:text-[1.18rem]">
                    {item.title}
                  </h3>
                </div>
              </article>
            </MobileReveal>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-20 bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.8))] lg:block"
        />
      </div>
    </div>
  )
}

function ModalInputShell({ children }) {
  return (
    <div className="rounded-[1.1rem] border border-white/10 bg-white/[0.04] transition-colors focus-within:border-[#ff8a1c]/60 focus-within:bg-[#ff8a1c]/[0.06]">
      {children}
    </div>
  )
}

function PricingLeadModal({
  open,
  selectedPlan,
  plans,
  formData,
  submitted,
  onClose,
  onChange,
  onSubmit,
}) {
  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [open, onClose])

  if (!open) return null

  const activePlan = plans.find((plan) => plan.name === selectedPlan) ?? plans[0]

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        aria-label="Закрыть окно"
        className="absolute inset-0 bg-black/72 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-[34rem] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#111214] shadow-[0_30px_90px_rgba(0,0,0,0.46)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_34%)]" />

        <div className="relative z-10 p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[0.66rem] uppercase tracking-[0.28em] text-[#ff8a1c]">
                Тариф участия
              </div>
              <h3 className="mt-3 text-[1.55rem] font-medium leading-[1] tracking-[-0.05em] text-white sm:text-[2rem]">
                Оставьте заявку на {activePlan.name}
              </h3>
              <p className="mt-3 max-w-[42ch] text-sm leading-7 text-white/58 sm:text-[0.98rem]">
                Введите данные, и выбранный формат уже будет привязан к заявке.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/72 transition hover:border-white/18 hover:bg-white/[0.08] hover:text-white"
              aria-label="Закрыть"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-5 rounded-[1.2rem] border border-white/8 bg-white/[0.03] px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-[0.62rem] uppercase tracking-[0.24em] text-white/42">
                  Выбранный формат
                </div>
                <div className="mt-2 text-lg font-medium tracking-[-0.03em] text-white">
                  {activePlan.name}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[0.62rem] uppercase tracking-[0.24em] text-white/42">
                  Стоимость
                </div>
                <div className="mt-2 text-lg font-medium tracking-[-0.03em] text-[#ffcfaa]">
                  {activePlan.price}
                </div>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="mt-6 rounded-[1.2rem] border border-emerald-400/18 bg-emerald-400/[0.06] px-4 py-4 text-sm leading-7 text-white/74">
              Заявка сохранена. Тариф <span className="text-white">{activePlan.name}</span> уже привязан.
              При подключении CRM или внешнего обработчика эти данные можно будет сразу отправлять дальше.
            </div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-white/58">
                  Имя
                </label>
                <ModalInputShell>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={onChange}
                    placeholder="Как к вам обращаться"
                    required
                    className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                </ModalInputShell>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/58">
                    Email
                  </label>
                  <ModalInputShell>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={onChange}
                      placeholder="name@email.com"
                      required
                      className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                    />
                  </ModalInputShell>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/58">
                    Telegram / WhatsApp
                  </label>
                  <ModalInputShell>
                    <input
                      name="messenger"
                      type="text"
                      value={formData.messenger}
                      onChange={onChange}
                      placeholder="@username или номер"
                      required
                      className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                    />
                  </ModalInputShell>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/58">
                  Комментарий
                </label>
                <ModalInputShell>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={onChange}
                    placeholder="Кратко опишите вашу ситуацию или вопрос"
                    rows={4}
                    className="w-full resize-none bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                </ModalInputShell>
              </div>

              <button
                type="submit"
                className="relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-full border border-[#ffb15c]/55 bg-[linear-gradient(180deg,#ffb24d_0%,#ff951f_44%,#ff7800_100%)] px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.32),inset_0_-1px_0_rgba(110,39,0,0.24),0_16px_36px_rgba(255,122,11,0.26),0_0_24px_rgba(255,140,32,0.12)] transition hover:border-[#ffc278] hover:bg-[linear-gradient(180deg,#ffbc5c_0%,#ff9b2d_44%,#ff7d08_100%)]"
              >
                Отправить заявку
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [pricingModalPlan, setPricingModalPlan] = useState(null)
  const [pricingLeadSubmitted, setPricingLeadSubmitted] = useState(false)
  const [pricingLeadForm, setPricingLeadForm] = useState({
    name: '',
    email: '',
    messenger: '',
    comment: '',
  })

  const openPricingModal = (planName) => {
    setPricingModalPlan(planName)
    setPricingLeadSubmitted(false)
  }

  const closePricingModal = () => {
    setPricingModalPlan(null)
  }

  const handlePricingLeadChange = (event) => {
    const { name, value } = event.target
    setPricingLeadForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handlePricingLeadSubmit = (event) => {
    event.preventDefault()

    const payload = {
      ...pricingLeadForm,
      plan: pricingModalPlan,
      submittedAt: new Date().toISOString(),
    }

    const existing = JSON.parse(localStorage.getItem('ivchenko_pricing_leads') ?? '[]')
    localStorage.setItem('ivchenko_pricing_leads', JSON.stringify([...existing, payload]))
    setPricingLeadSubmitted(true)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_22%),radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.05),transparent_30%)]" />
      <div className="noise-mask absolute inset-0 opacity-35" />
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

      <Motion.section {...sectionReveal} className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <RoadmapSection steps={roadmapSteps} />
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
            text="6 ключевых модулей, собранных в одной системе: без лишнего шума, с понятной логикой и пошаговым разбором того, что реально работает."
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
            title="Что будет на выходе"
            text="После обучения у вас будет не просто набор уроков, а собранная система запуска: понимание TikTok Shop в США, товар, экономика, поставщики, стратегия, логистика и план действий на первые 30–60 дней. Мы собираем с вами велосипед вместе, а дальше вы уже спокойно крутите педали самостоятельно."
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
            text="Реальные кейсы участников: первые запуски, созвоны, понятные результаты и изменения, к которым они пришли после прохождения программы."
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
            text="Короткие отзывы участников о программе: как изменилось понимание запуска, что дало больше ясности и какие результаты они увидели на практике."
          />
          <VideoStoryRow items={videoReviews} />
        </div>
      </Motion.section>

      <Motion.section {...sectionReveal} className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <VideoBreakdownsSlider items={videoBreakdowns} />
      </Motion.section>

      <Motion.section {...sectionReveal} className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <ResultsSlider items={resultScreens} />
      </Motion.section>

      <Motion.section {...sectionReveal} className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <AnalyticsScreensSlider items={resultScreens} />
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
                      type="button"
                      onClick={() => openPricingModal(plan.name)}
                      className={[
                        'mt-6 h-11 w-full rounded-xl font-semibold shadow-none backdrop-blur-sm',
                        plan.name === 'PRIVATE 1:1'
                          ? "relative overflow-hidden border border-[#ffb15c]/55 !bg-[linear-gradient(180deg,#ffb24d_0%,#ff951f_44%,#ff7800_100%)] !text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.32),inset_0_-1px_0_rgba(110,39,0,0.24),0_16px_36px_rgba(255,122,11,0.26),0_0_24px_rgba(255,140,32,0.12)] before:absolute before:inset-x-[9%] before:top-0 before:h-[48%] before:rounded-full before:bg-[linear-gradient(180deg,rgba(255,255,255,0.24),rgba(255,255,255,0))] before:opacity-90 before:content-[''] after:absolute after:right-6 after:top-1.5 after:h-8 after:w-16 after:rotate-[16deg] after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.24),rgba(255,255,255,0))] after:blur-md after:content-[''] hover:!border-[#ffc278] hover:!bg-[linear-gradient(180deg,#ffbc5c_0%,#ff9b2d_44%,#ff7d08_100%)] hover:!text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.38),inset_0_-1px_0_rgba(110,39,0,0.2),0_20px_44px_rgba(255,122,11,0.34),0_0_36px_rgba(255,140,32,0.18)]"
                          : 'border border-white/12 !bg-transparent !text-white hover:!border-white/22 hover:!bg-white/[0.05] hover:!text-white',
                      ].join(' ')}
                    >
                      {plan.cta}
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

      <PricingLeadModal
        open={Boolean(pricingModalPlan)}
        selectedPlan={pricingModalPlan}
        plans={pricing}
        formData={pricingLeadForm}
        submitted={pricingLeadSubmitted}
        onClose={closePricingModal}
        onChange={handlePricingLeadChange}
        onSubmit={handlePricingLeadSubmit}
      />
    </main>
  )
}

export default App
