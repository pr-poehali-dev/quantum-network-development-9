import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"
import { useState } from "react"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

function HeroSection({ isActive, showButton, buttonText }: SectionProps) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.div
        className="flex items-center gap-4 mb-6"
        {...fadeUp(0)}
        animate={isActive ? fadeUp(0).animate : {}}
      >
        <img
          src="https://cdn.poehali.dev/files/f0d60fb7-3306-4dc2-89f8-a0a62b3199aa.PNG"
          alt="Карел Климат логотип"
          className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg"
          style={{ mixBlendMode: 'screen' }}
        />
        <div>
          <div className="text-white font-bold text-2xl md:text-3xl tracking-tight leading-tight">
            Карел<span className="text-amber-400">Климат</span>
          </div>
          <div className="text-neutral-400 text-sm tracking-widest uppercase mt-0.5">Строительная компания</div>
        </div>
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        {...fadeUp(0.1)}
        animate={isActive ? fadeUp(0.1).animate : {}}
      >
        Строительство<br />
        <span className="text-amber-400">Газификация</span><br />
        Климат — под ключ
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl max-w-2xl mt-6 text-neutral-400"
        {...fadeUp(0.2)}
        animate={isActive ? fadeUp(0.2).animate : {}}
      >
        Профессиональная команда, которая берёт на себя весь объём работ — от проекта до сдачи объекта.
      </motion.p>
      {showButton && (
        <motion.div
          {...fadeUp(0.35)}
          animate={isActive ? fadeUp(0.35).animate : {}}
          className="mt-10"
        >
          <Button
            size="lg"
            className="bg-amber-400 text-black hover:bg-amber-300 font-semibold text-base px-8 py-6"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}

function AboutSection({ isActive }: SectionProps) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.span
        className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }} animate={isActive ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
      >
        О нас
      </motion.span>
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight"
        {...fadeUp(0.1)}
        animate={isActive ? fadeUp(0.1).animate : {}}
      >
        Строим жильё, коммерцию и промышленные объекты
      </motion.h2>
      <motion.div
        className="mt-8 max-w-2xl space-y-4"
        {...fadeUp(0.2)}
        animate={isActive ? fadeUp(0.2).animate : {}}
      >
        <p className="text-neutral-300 text-lg leading-relaxed">
          Мы работаем в трёх ключевых сферах: жилищное строительство, коммерческие объекты и промышленные сооружения. Единая команда специалистов ведёт проект от первой сметы до финального осмотра.
        </p>
        <p className="text-neutral-400 text-base leading-relaxed">
          Никаких субподрядчиков-посредников — только собственный штат инженеров, строителей и технадзора. Честные сметы без скрытых платежей и переплат на финише.
        </p>
      </motion.div>
      <motion.div
        className="mt-10 flex gap-10"
        {...fadeUp(0.35)}
        animate={isActive ? fadeUp(0.35).animate : {}}
      >
        {[['10+', 'лет на рынке'], ['200+', 'сданных объектов'], ['100%', 'фикс-цена']].map(([num, label]) => (
          <div key={label}>
            <div className="text-3xl font-bold text-amber-400">{num}</div>
            <div className="text-neutral-400 text-sm mt-1">{label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

const features = [
  { icon: 'RefreshCw', title: 'Полный цикл', desc: 'От проекта и согласований до сдачи под ключ' },
  { icon: 'Users', title: 'Свой штат', desc: 'Только собственные специалисты без посредников' },
  { icon: 'BadgeCheck', title: 'Фикс-цена', desc: 'Смета фиксируется в договоре и не меняется' },
  { icon: 'Clock', title: 'Сроки', desc: 'Сдаём объекты точно в оговорённые сроки' },
  { icon: 'ShieldCheck', title: 'Контроль качества', desc: 'Технадзор на каждом этапе строительства' },
  { icon: 'Building2', title: 'Любые объекты', desc: 'Жильё, коммерция, промышленность — всё берём' },
]

function FeaturesSection({ isActive }: SectionProps) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.span
        className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }} animate={isActive ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
      >
        Преимущества
      </motion.span>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-10"
        {...fadeUp(0.1)}
        animate={isActive ? fadeUp(0.1).animate : {}}
      >
        Почему нас выбирают
      </motion.h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl"
        {...fadeUp(0.2)}
        animate={isActive ? fadeUp(0.2).animate : {}}
      >
        {features.map(({ icon, title, desc }) => (
          <div key={title} className="flex gap-3 items-start group">
            <div className="mt-0.5 text-amber-400 shrink-0">
              <Icon name={icon} size={22} fallback="CheckCircle" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm md:text-base">{title}</div>
              <div className="text-neutral-500 text-xs md:text-sm mt-1">{desc}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

const services = [
  {
    icon: 'HardHat',
    title: 'Строительство',
    desc: 'Полный цикл возведения объектов под ключ — проектирование, строительство, отделка и сдача в эксплуатацию.',
  },
  {
    icon: 'Flame',
    title: 'Газификация',
    desc: 'Разработка проекта, согласование с газовой службой, монтаж газопровода и сдача системы под ключ.',
  },
  {
    icon: 'Wind',
    title: 'Кондиционирование и вентиляция',
    desc: 'Проектирование и монтаж систем кондиционирования, вентиляции и климат-контроля для любых объектов.',
  },
]

function ServicesSection({ isActive }: SectionProps) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.span
        className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }} animate={isActive ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
      >
        Услуги
      </motion.span>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-10"
        {...fadeUp(0.1)}
        animate={isActive ? fadeUp(0.1).animate : {}}
      >
        Наши услуги
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl"
        {...fadeUp(0.2)}
        animate={isActive ? fadeUp(0.2).animate : {}}
      >
        {services.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="border border-neutral-800 rounded-xl p-6 hover:border-amber-400 transition-colors group bg-neutral-900/50"
          >
            <div className="text-amber-400 mb-4">
              <Icon name={icon} size={32} fallback="Wrench" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-5">{desc}</p>
            <button className="text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors flex items-center gap-1">
              Подробнее <Icon name="ArrowRight" size={14} />
            </button>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

function ContactsSection({ isActive }: SectionProps) {
  const [form, setForm] = useState({ name: '', phone: '', service: '' })

  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.span
        className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }} animate={isActive ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
      >
        Контакты
      </motion.span>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-8"
        {...fadeUp(0.1)}
        animate={isActive ? fadeUp(0.1).animate : {}}
      >
        Свяжитесь с нами
      </motion.h2>
      <motion.div
        className="flex flex-col lg:flex-row gap-12 max-w-4xl"
        {...fadeUp(0.2)}
        animate={isActive ? fadeUp(0.2).animate : {}}
      >
        <div className="flex-1 space-y-4">
          <input
            className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
            placeholder="Ваше имя"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          />
          <input
            className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
            placeholder="Телефон"
            value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
          />
          <select
            className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-400 focus:outline-none focus:border-amber-400 transition-colors appearance-none"
            value={form.service}
            onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
          >
            <option value="">Выберите услугу</option>
            <option value="construction">Строительство</option>
            <option value="gas">Газификация</option>
            <option value="climate">Кондиционирование и вентиляция</option>
          </select>
          <Button className="w-full bg-amber-400 text-black hover:bg-amber-300 font-semibold py-6 text-base">
            Отправить заявку
          </Button>
        </div>
        <div className="space-y-5 text-neutral-300">
          <div className="flex items-center gap-3">
            <Icon name="Phone" size={18} className="text-amber-400" />
            <span>+7 (902) 777-77-30</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="Mail" size={18} className="text-amber-400" />
            <span>karelklimat@yandex.ru</span>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <span className="text-neutral-500 text-sm">Мессенджеры:</span>
            <button className="text-neutral-300 hover:text-amber-400 transition-colors">
              <Icon name="MessageCircle" size={22} fallback="Phone" />
            </button>
            <button className="text-neutral-300 hover:text-amber-400 transition-colors">
              <Icon name="Send" size={22} fallback="Phone" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function FooterSection({ isActive }: SectionProps) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-end p-8 md:p-16 lg:p-24 pb-12">
      <motion.div
        className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0 }} animate={isActive ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
      >
        <div className="text-white font-bold text-xl tracking-tight">
          Карел<span className="text-amber-400">Климат</span>
        </div>
        <p className="text-neutral-600 text-sm">© 2024 Карел Климат. Все права защищены.</p>
        <button className="text-neutral-500 text-sm hover:text-neutral-300 transition-colors">
          Политика конфиденциальности
        </button>
      </motion.div>
    </section>
  )
}

export default function Section(props: SectionProps) {
  switch (props.type) {
    case 'hero': return <HeroSection {...props} />
    case 'about': return <AboutSection {...props} />
    case 'features': return <FeaturesSection {...props} />
    case 'services': return <ServicesSection {...props} />
    case 'contacts': return <ContactsSection {...props} />
    case 'footer': return <FooterSection {...props} />
    default: return null
  }
}