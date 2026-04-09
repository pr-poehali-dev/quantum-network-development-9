import Layout from "@/components/landing/Layout"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

const stages = [
  {
    icon: "Ruler",
    title: "Проектирование",
    desc: "Создаем архитектурные, конструктивные и инженерные разделы проекта с учетом всех норм (СНиП, ГОСТ).",
  },
  {
    icon: "HardHat",
    title: "Строительство",
    desc: "Возводим фундамент, стены, перекрытия и кровлю — строго по согласованным срокам и бюджету.",
  },
  {
    icon: "Wrench",
    title: "Отделка и инженерия",
    desc: "Проводим электрику, водоснабжение, отопление, выполняем черновую и чистовую отделку любых помещений.",
  },
  {
    icon: "ClipboardCheck",
    title: "Сдача в эксплуатацию",
    desc: "Готовим документы, устраняем недочеты (при их выявлении) и передаем объект полностью готовым к использованию.",
  },
]

export default function Construction() {
  const navigate = useNavigate()

  return (
    <Layout>
      <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-700">
        <div className="min-h-screen flex flex-col justify-center p-8 md:p-16 lg:p-24">
          <motion.button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8 text-sm"
            {...fadeUp(0)}
          >
            <Icon name="ArrowLeft" size={16} />
            На главную
          </motion.button>

          <motion.span
            className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-4"
            {...fadeUp(0)}
          >
            Услуга
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight mb-6"
            {...fadeUp(0.1)}
          >
            Строительство <span className="text-blue-500">под ключ</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-16"
            {...fadeUp(0.2)}
          >
            Мы предлагаем готовое решение для тех, кто ценит время и контроль качества.
            В рамках одного договора мы реализуем полный цикл строительства:
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-16"
            {...fadeUp(0.3)}
          >
            {stages.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className="border border-neutral-800 rounded-xl p-6 bg-neutral-900/50 hover:border-blue-500 transition-colors relative"
              >
                <div className="absolute top-4 right-4 text-neutral-700 font-bold text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-blue-500 mb-4">
                  <Icon name={icon} size={32} fallback="Wrench" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.4)}>
            <Button
              size="lg"
              className="bg-blue-500 text-white hover:bg-blue-400 font-semibold text-base px-8 py-6"
              onClick={() => navigate("/")}
            >
              Оставить заявку
            </Button>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
