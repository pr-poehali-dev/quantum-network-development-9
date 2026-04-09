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
    icon: "FileText",
    title: "Разработка проекта",
    desc: "Создаем схему газоснабжения, рассчитываем нагрузки и подбираем оборудование с учетом всех норм.",
  },
  {
    icon: "ClipboardList",
    title: "Согласование с газовой службой",
    desc: "Самостоятельно проходим все инстанции, получаем технические условия и разрешительную документацию.",
  },
  {
    icon: "Wrench",
    title: "Монтаж газопровода",
    desc: "Прокладываем наружные и внутренние сети, устанавливаем газовые котлы, счетчики, системы безопасности.",
  },
  {
    icon: "ShieldCheck",
    title: "Сдача под ключ",
    desc: "Проводим пусконаладку, оформляем акты ввода и передаем объект полностью готовым к безопасной эксплуатации.",
  },
]

export default function Gasification() {
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
            Газификация <span className="text-blue-500">под ключ</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-16"
            {...fadeUp(0.2)}
          >
            Мы предлагаем готовое решение для подключения газа к частному дому, предприятию или коттеджному поселку.
            Один договор — полный цикл работ:
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
