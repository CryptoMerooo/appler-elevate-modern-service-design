import Breadcrumbs from "@/components/Breadcrumbs";

const SectionLibraryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-card border-b border-border">
        <div className="container-custom py-8">
          <Breadcrumbs />
          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-6 mb-4">
            Библиотека секций
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Готовые блоки и компоненты для сайта Mr.Appler — премиального сервиса ремонта техники Apple в Москве. 
            Каждая секция представлена в 5 вариантах (A–E) с разной композицией и акцентами.
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-secondary/50 border-b border-border">
        <div className="container-custom py-6">
          <h2 className="font-display font-semibold text-lg mb-4">Содержание</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Header/Topbar",
              "Hero",
              "Услуги",
              "Преимущества",
              "Процесс",
              "Цены",
              "Отзывы",
              "FAQ",
              "География",
              "Контакты",
              "CTA",
              "Footer",
              "UI-кит"
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/[/\s]/g, "-")}`}
                className="px-4 py-2 bg-card rounded-lg border border-border text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom py-12 space-y-24">
        {/* ============================================= */}
        {/* 1. HEADER / TOPBAR */}
        {/* ============================================= */}
        <section id="header-topbar">
          <div className="mb-8">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-2">1. Header / Topbar + Навигация</h2>
            <p className="text-muted-foreground">Верхняя панель сайта с логотипом, навигацией и контактами.</p>
          </div>

          {/* Header A */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант A — Компактный с акцентом на телефон</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: для максимальной конверсии звонков, минималистичный дизайн.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <header className="bg-dark text-cream">
                <div className="container-custom flex items-center justify-between py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                    </div>
                    <span className="font-display font-bold text-xl">Mr.Appler</span>
                  </div>
                  <nav className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-cream/80 hover:text-primary transition-colors">Услуги</a>
                    <a href="#" className="text-cream/80 hover:text-primary transition-colors">Цены</a>
                    <a href="#" className="text-cream/80 hover:text-primary transition-colors">О нас</a>
                    <a href="#" className="text-cream/80 hover:text-primary transition-colors">Контакты</a>
                  </nav>
                  <a href="tel:+74951234567" className="btn-primary flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +7 (495) 123-45-67
                  </a>
                </div>
              </header>
            </div>
          </div>

          {/* Header B */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант B — Двухуровневый с топбаром</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: когда нужно показать дополнительную информацию (адрес, график).</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <div className="bg-primary text-primary-foreground text-sm py-2">
                <div className="container-custom flex items-center justify-between">
                  <span>📍 Москва, ул. Тверская, 15 • Пн–Вс: 10:00–21:00</span>
                  <div className="hidden md:flex items-center gap-4">
                    <span>✉️ info@mrappler.ru</span>
                    <span className="font-semibold">📞 +7 (495) 123-45-67</span>
                  </div>
                </div>
              </div>
              <header className="bg-card border-b border-border">
                <div className="container-custom flex items-center justify-between py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                    </div>
                    <span className="font-display font-bold text-xl text-foreground">Mr.Appler</span>
                  </div>
                  <nav className="hidden lg:flex items-center gap-8">
                    <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Ремонт iPhone</a>
                    <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Ремонт Mac</a>
                    <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Ремонт iPad</a>
                    <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Цены</a>
                    <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Отзывы</a>
                  </nav>
                  <div className="flex items-center gap-3">
                    <button className="btn-secondary hidden md:flex">Перезвоните мне</button>
                    <button className="btn-primary">Записаться</button>
                  </div>
                </div>
              </header>
            </div>
          </div>

          {/* Header C */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант C — Центрированный логотип</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: для премиального восприятия, акцент на бренд.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <header className="bg-card">
                <div className="container-custom py-4">
                  <div className="flex items-center justify-between">
                    <a href="tel:+74951234567" className="text-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="hidden md:inline font-medium">+7 (495) 123-45-67</span>
                    </a>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                          <svg className="w-7 h-7 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                          </svg>
                        </div>
                        <div>
                          <span className="font-display font-bold text-2xl text-foreground">Mr.Appler</span>
                          <p className="text-xs text-muted-foreground">Премиальный сервис Apple</p>
                        </div>
                      </div>
                    </div>
                    <button className="btn-primary">Записаться</button>
                  </div>
                  <nav className="flex items-center justify-center gap-8 mt-4 pt-4 border-t border-border">
                    <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Главная</a>
                    <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Услуги</a>
                    <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Цены</a>
                    <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">О нас</a>
                    <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
                  </nav>
                </div>
              </header>
            </div>
          </div>

          {/* Header D */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант D — Прозрачный с blur</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: для современного лендинга с полноэкранным hero.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-dark to-dark-soft p-8 relative">
                <header className="absolute top-0 left-0 right-0 bg-dark/60 backdrop-blur-xl border-b border-cream/10">
                  <div className="container-custom flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                        </svg>
                      </div>
                      <span className="font-display font-bold text-xl text-cream">Mr.Appler</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                      <a href="#" className="text-cream/80 hover:text-primary transition-colors">Услуги</a>
                      <a href="#" className="text-cream/80 hover:text-primary transition-colors">Цены</a>
                      <a href="#" className="text-cream/80 hover:text-primary transition-colors">Отзывы</a>
                      <a href="#" className="text-cream/80 hover:text-primary transition-colors">Контакты</a>
                    </nav>
                    <div className="flex items-center gap-3">
                      <span className="text-cream font-semibold hidden lg:block">+7 (495) 123-45-67</span>
                      <button className="btn-primary">Записаться</button>
                    </div>
                  </div>
                </header>
                <div className="h-24"></div>
              </div>
            </div>
          </div>

          {/* Header E */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант E — Мега-меню с категориями</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: для сайта с большим количеством услуг и страниц.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <header className="bg-card border-b border-border">
                <div className="container-custom">
                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                        </svg>
                      </div>
                      <span className="font-display font-bold text-xl text-foreground">Mr.Appler</span>
                    </div>
                    <nav className="hidden lg:flex items-center gap-1">
                      <div className="group relative">
                        <button className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
                          Ремонт iPhone
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      <div className="group relative">
                        <button className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
                          Ремонт Mac
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      <a href="#" className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium">Цены</a>
                      <a href="#" className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium">О нас</a>
                    </nav>
                    <div className="flex items-center gap-3">
                      <div className="hidden xl:block text-right">
                        <p className="font-semibold text-foreground">+7 (495) 123-45-67</p>
                        <p className="text-xs text-muted-foreground">Ежедневно 10:00–21:00</p>
                      </div>
                      <button className="btn-primary">Заявка на ремонт</button>
                    </div>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 2. HERO */}
        {/* ============================================= */}
        <section id="hero">
          <div className="mb-8">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-2">2. Hero-секции</h2>
            <p className="text-muted-foreground">Главный экран сайта с основным оффером и призывом к действию.</p>
          </div>

          {/* Hero A */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант A — Классический с изображением справа</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: универсальный вариант, баланс текста и визуала.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <section className="bg-gradient-to-br from-cream via-background to-cream-dark section-padding">
                <div className="container-custom">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                        ⚡ Ремонт за 30 минут
                      </span>
                      <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                        Премиальный ремонт <span className="text-gradient-orange">iPhone</span> в Москве
                      </h1>
                      <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                        Восстанавливаем технику Apple с гарантией до 2 лет. Оригинальные запчасти, 
                        сертифицированные мастера, бесплатная диагностика.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="btn-primary text-lg px-8 py-4">
                          Записаться на ремонт
                        </button>
                        <button className="btn-secondary text-lg px-8 py-4">
                          Узнать стоимость
                        </button>
                      </div>
                      <div className="flex items-center gap-8 mt-8 pt-8 border-t border-border">
                        <div>
                          <p className="text-3xl font-display font-bold text-foreground">15 000+</p>
                          <p className="text-sm text-muted-foreground">Ремонтов в год</p>
                        </div>
                        <div>
                          <p className="text-3xl font-display font-bold text-foreground">98%</p>
                          <p className="text-sm text-muted-foreground">Довольных клиентов</p>
                        </div>
                        <div>
                          <p className="text-3xl font-display font-bold text-foreground">2 года</p>
                          <p className="text-sm text-muted-foreground">Гарантия</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-orange-glow/20 rounded-3xl flex items-center justify-center">
                        <div className="w-3/4 h-3/4 bg-card rounded-2xl shadow-lg flex items-center justify-center">
                          <span className="text-6xl">📱</span>
                        </div>
                      </div>
                      <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-lg p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">Ремонт завершён</p>
                            <p className="text-sm text-muted-foreground">iPhone 15 Pro Max</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Hero B */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант B — Тёмный с центрированным текстом</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: премиальное позиционирование, акцент на бренд.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <section className="bg-gradient-to-b from-dark via-dark-soft to-dark section-padding relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-glow/20 rounded-full blur-3xl"></div>
                </div>
                <div className="container-custom relative z-10">
                  <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-8">
                      Официальный сервис-партнёр
                    </span>
                    <h1 className="heading-display text-4xl md:text-6xl lg:text-7xl text-cream mb-8 leading-tight">
                      Ремонт техники Apple<br />
                      <span className="text-primary">на уровне гения</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-cream/70 mb-10 leading-relaxed max-w-2xl mx-auto">
                      Mr.Appler — это команда сертифицированных инженеров, которые знают вашу технику лучше, 
                      чем вы сами. Восстановим любое устройство.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="btn-primary text-lg px-10 py-5 animate-pulse-glow">
                        Бесплатная диагностика
                      </button>
                      <button className="bg-cream/10 text-cream hover:bg-cream/20 font-semibold px-10 py-5 rounded-xl transition-all border border-cream/20">
                        Позвонить нам
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Hero C */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант C — С формой заявки</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: максимальная конверсия, сбор заявок.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <section className="bg-background section-padding">
                <div className="container-custom">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h1 className="heading-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                        Сломался iPhone?<br />
                        <span className="text-primary">Починим сегодня!</span>
                      </h1>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Оставьте заявку и получите бесплатную диагностику + скидку 15% на первый ремонт. 
                        Работаем без выходных с 10:00 до 21:00.
                      </p>
                      <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-foreground">Ремонт от 30 минут</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-foreground">Гарантия до 2 лет</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-foreground">Оригинальные запчасти</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
                      <h2 className="font-display font-bold text-2xl text-foreground mb-2">Оставить заявку</h2>
                      <p className="text-muted-foreground mb-6">Перезвоним в течение 5 минут</p>
                      <div className="space-y-4">
                        <input 
                          type="text" 
                          placeholder="Ваше имя" 
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input 
                          type="tel" 
                          placeholder="+7 (___) ___-__-__" 
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-muted-foreground">
                          <option>Выберите устройство</option>
                          <option>iPhone</option>
                          <option>iPad</option>
                          <option>MacBook</option>
                          <option>iMac</option>
                        </select>
                        <button className="btn-primary w-full text-lg py-4">
                          Получить консультацию
                        </button>
                        <p className="text-xs text-muted-foreground text-center">
                          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Hero D */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант D — С каруселью услуг</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: демонстрация спектра услуг сразу.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <section className="bg-cream section-padding">
                <div className="container-custom">
                  <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                      🔧 Сервисный центр №1 в Москве
                    </span>
                    <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                      Ремонтируем <span className="text-primary">всё</span> от Apple
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Выберите ваше устройство и узнайте стоимость ремонта прямо сейчас
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {[
                      { icon: "📱", name: "iPhone", price: "от 990 ₽" },
                      { icon: "📟", name: "iPad", price: "от 1 490 ₽" },
                      { icon: "💻", name: "MacBook", price: "от 2 990 ₽" },
                      { icon: "🖥️", name: "iMac", price: "от 3 990 ₽" },
                    ].map((item) => (
                      <div key={item.name} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1 border border-border">
                        <div className="text-5xl mb-4">{item.icon}</div>
                        <h3 className="font-display font-bold text-lg text-foreground mb-1">{item.name}</h3>
                        <p className="text-primary font-semibold">{item.price}</p>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-10">
                    <button className="btn-primary text-lg px-8 py-4">
                      Все услуги и цены
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Hero E */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант E — Минималистичный с видео-фоном</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: премиум-сегмент, технологичный имидж.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <section className="bg-dark relative min-h-[500px] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-br from-primary/20 to-orange-glow/10"></div>
                <div className="container-custom relative z-10 py-20">
                  <div className="max-w-xl">
                    <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6 leading-tight">
                      Возвращаем жизнь<br />вашим устройствам
                    </h1>
                    <p className="text-lg text-cream/70 mb-8 leading-relaxed">
                      Профессиональный ремонт iPhone, iPad и Mac с использованием оригинальных комплектующих. 
                      Работаем с 2015 года.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="btn-primary">
                        Записаться на ремонт
                      </button>
                      <button className="flex items-center gap-2 text-cream hover:text-primary transition-colors font-medium">
                        <div className="w-12 h-12 border-2 border-cream/30 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        Смотреть видео
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 3. УСЛУГИ / КАТЕГОРИИ */}
        {/* ============================================= */}
        <section id="услуги">
          <div className="mb-8">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-2">3. Услуги / Категории</h2>
            <p className="text-muted-foreground">Блоки с перечнем услуг и категорий ремонта.</p>
          </div>

          {/* Services A */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант A — Карточки в сетке 3 колонки</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: стандартный вариант для 6+ услуг.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-background">
              <section className="section-padding">
                <div className="container-custom">
                  <div className="text-center mb-12">
                    <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">Наши услуги</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Полный спектр услуг по ремонту и обслуживанию техники Apple
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { icon: "🔋", title: "Замена батареи", desc: "Восстановим ёмкость аккумулятора до 100%. Оригинальные батареи с гарантией 1 год.", price: "от 2 490 ₽" },
                      { icon: "📺", title: "Замена экрана", desc: "Оригинальные OLED и Retina дисплеи. Ремонт за 40 минут при вас.", price: "от 4 990 ₽" },
                      { icon: "💧", title: "Ремонт после воды", desc: "Ультразвуковая чистка платы. Спасаем утопленные устройства.", price: "от 1 990 ₽" },
                      { icon: "🔌", title: "Замена разъёма", desc: "Lightning, USB-C, MagSafe. Восстановим зарядку вашего устройства.", price: "от 1 990 ₽" },
                      { icon: "📷", title: "Ремонт камеры", desc: "Замена модуля камеры, чистка линзы, калибровка фокуса.", price: "от 3 490 ₽" },
                      { icon: "🔊", title: "Ремонт динамиков", desc: "Замена разговорного и полифонического динамика.", price: "от 1 490 ₽" },
                    ].map((service) => (
                      <div key={service.title} className="bg-card rounded-2xl p-6 border border-border card-hover">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="font-display font-bold text-xl text-foreground mb-2">{service.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{service.desc}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-primary font-bold text-lg">{service.price}</span>
                          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
                            Подробнее
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Services B */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант B — Горизонтальные карточки</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: для подробных описаний услуг.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-cream">
              <section className="section-padding">
                <div className="container-custom">
                  <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-8">Популярные услуги</h2>
                  <div className="space-y-6">
                    {[
                      { icon: "📺", title: "Замена экрана iPhone", desc: "Используем оригинальные OLED-дисплеи Apple. Ремонт занимает от 30 минут. Сохраняем True Tone и Face ID.", price: "от 4 990 ₽", time: "30 мин" },
                      { icon: "🔋", title: "Замена аккумулятора", desc: "Оригинальные батареи с показателем здоровья 100%. Гарантия на работу и запчасть 1 год.", price: "от 2 490 ₽", time: "20 мин" },
                      { icon: "💻", title: "Ремонт MacBook", desc: "Диагностика материнской платы, замена клавиатуры, чистка системы охлаждения.", price: "от 2 990 ₽", time: "1-3 дня" },
                    ].map((service) => (
                      <div key={service.title} className="bg-card rounded-2xl p-6 md:p-8 border border-border flex flex-col md:flex-row gap-6 items-start card-hover">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                          <span className="text-3xl">{service.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display font-bold text-xl text-foreground mb-2">{service.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                        </div>
                        <div className="md:text-right shrink-0">
                          <p className="text-primary font-bold text-2xl mb-1">{service.price}</p>
                          <p className="text-sm text-muted-foreground mb-3">⏱️ {service.time}</p>
                          <button className="btn-primary">Записаться</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Services C */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант C — Табы по устройствам</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: много услуг, группировка по типу устройства.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-background">
              <section className="section-padding">
                <div className="container-custom">
                  <h2 className="heading-display text-3xl md:text-4xl text-foreground text-center mb-8">Услуги по ремонту</h2>
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {["iPhone", "iPad", "MacBook", "iMac"].map((tab, i) => (
                      <button 
                        key={tab}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                          i === 0 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-card text-foreground hover:bg-muted border border-border"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      "Замена экрана",
                      "Замена батареи",
                      "Ремонт Face ID",
                      "Замена разъёма",
                      "Ремонт камеры",
                      "Замена стекла",
                      "Ремонт кнопок",
                      "Чистка от влаги",
                    ].map((service) => (
                      <a key={service} href="#" className="bg-card rounded-xl p-4 border border-border hover:border-primary hover:shadow-md transition-all flex items-center justify-between group">
                        <span className="font-medium text-foreground">{service}</span>
                        <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Services D */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант D — Тёмная секция с иконками</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: контраст, премиальное восприятие.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <section className="bg-dark section-padding">
                <div className="container-custom">
                  <div className="text-center mb-12">
                    <h2 className="heading-display text-3xl md:text-4xl text-cream mb-4">Что мы ремонтируем</h2>
                    <p className="text-cream/70 max-w-2xl mx-auto">
                      Любая неисправность — от разбитого экрана до залитой материнской платы
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {[
                      { icon: "📺", name: "Экран" },
                      { icon: "🔋", name: "Батарея" },
                      { icon: "📷", name: "Камера" },
                      { icon: "🔌", name: "Разъём" },
                      { icon: "🔊", name: "Звук" },
                      { icon: "💧", name: "Влага" },
                    ].map((item) => (
                      <div key={item.name} className="text-center group cursor-pointer">
                        <div className="w-20 h-20 mx-auto bg-dark-soft border border-cream/10 rounded-2xl flex items-center justify-center mb-3 group-hover:border-primary group-hover:bg-primary/10 transition-all">
                          <span className="text-3xl">{item.icon}</span>
                        </div>
                        <p className="text-cream font-medium group-hover:text-primary transition-colors">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Services E */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант E — Список с ценами и CTA</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: акцент на цены и быстрый выбор.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-background">
              <section className="section-padding">
                <div className="container-custom">
                  <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/3">
                      <h2 className="heading-display text-3xl text-foreground mb-4">Услуги и цены</h2>
                      <p className="text-muted-foreground mb-6">
                        Прозрачное ценообразование без скрытых платежей. Диагностика бесплатна при ремонте.
                      </p>
                      <button className="btn-primary">Полный прайс-лист</button>
                    </div>
                    <div className="lg:w-2/3">
                      <div className="space-y-3">
                        {[
                          { name: "Замена экрана iPhone 15 Pro Max", price: "12 990 ₽" },
                          { name: "Замена экрана iPhone 14 Pro", price: "9 990 ₽" },
                          { name: "Замена батареи iPhone", price: "2 490 ₽" },
                          { name: "Ремонт Face ID", price: "от 4 990 ₽" },
                          { name: "Замена заднего стекла iPhone", price: "от 3 990 ₽" },
                        ].map((service) => (
                          <div key={service.name} className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-primary transition-all group">
                            <span className="font-medium text-foreground">{service.name}</span>
                            <div className="flex items-center gap-4">
                              <span className="text-primary font-bold">{service.price}</span>
                              <button className="opacity-0 group-hover:opacity-100 transition-opacity btn-primary py-2 px-4 text-sm">
                                Записаться
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 4. ПРЕИМУЩЕСТВА */}
        {/* ============================================= */}
        <section id="преимущества">
          <div className="mb-8">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-2">4. Преимущества</h2>
            <p className="text-muted-foreground">Блоки с ключевыми преимуществами сервиса.</p>
          </div>

          {/* Advantages A */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант A — Сетка 4 колонки с иконками</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: компактно показать 4 ключевых преимущества.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-cream">
              <section className="section-padding">
                <div className="container-custom">
                  <h2 className="heading-display text-3xl md:text-4xl text-foreground text-center mb-12">Почему выбирают нас</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { icon: "⚡", title: "Быстро", desc: "Ремонт от 30 минут. Большинство работ выполняем при вас." },
                      { icon: "🛡️", title: "Надёжно", desc: "Гарантия до 2 лет на работы и запасные части." },
                      { icon: "💎", title: "Качественно", desc: "Только оригинальные комплектующие Apple." },
                      { icon: "🎯", title: "Честно", desc: "Фиксированные цены, без скрытых платежей." },
                    ].map((item) => (
                      <div key={item.title} className="text-center">
                        <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                          <span className="text-3xl">{item.icon}</span>
                        </div>
                        <h3 className="font-display font-bold text-xl text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Advantages B */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант B — Большие карточки с номерами</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: подробное описание преимуществ.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-background">
              <section className="section-padding">
                <div className="container-custom">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">Преимущества работы с Mr.Appler</h2>
                      <p className="text-muted-foreground text-lg">
                        Мы не просто ремонтируем технику — мы возвращаем вам уверенность в вашем устройстве.
                      </p>
                    </div>
                    <div className="space-y-6">
                      {[
                        { num: "01", title: "Сертифицированные мастера", desc: "Все инженеры прошли обучение по стандартам Apple и имеют опыт от 5 лет." },
                        { num: "02", title: "Прозрачная диагностика", desc: "Покажем проблему на экране, объясним причину и предложим варианты решения." },
                        { num: "03", title: "Оригинальные запчасти", desc: "Используем только сертифицированные компоненты с заводской калибровкой." },
                      ].map((item) => (
                        <div key={item.num} className="flex gap-4">
                          <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-display font-bold shrink-0">
                            {item.num}
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-lg text-foreground mb-1">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Advantages C */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант C — Статистика в числах</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: доверие через конкретные цифры.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <section className="bg-dark section-padding">
                <div className="container-custom">
                  <div className="text-center mb-12">
                    <h2 className="heading-display text-3xl md:text-4xl text-cream mb-4">Цифры говорят за нас</h2>
                    <p className="text-cream/70">Результаты работы за 9 лет на рынке</p>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { value: "45 000+", label: "Устройств отремонтировано" },
                      { value: "98%", label: "Клиентов рекомендуют нас" },
                      { value: "2 года", label: "Максимальная гарантия" },
                      { value: "30 мин", label: "Средний срок ремонта" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.value}</p>
                        <p className="text-cream/70">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Advantages D */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант D — Сравнение «до/после»</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: показать отличие от конкурентов.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-background">
              <section className="section-padding">
                <div className="container-custom">
                  <h2 className="heading-display text-3xl md:text-4xl text-foreground text-center mb-12">Чем мы отличаемся</h2>
                  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                      <h3 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                        <span className="text-destructive">✕</span> Обычный сервис
                      </h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Неизвестные запчасти</li>
                        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Гарантия 30 дней</li>
                        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Ремонт за закрытыми дверями</li>
                        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Цена растёт в процессе</li>
                      </ul>
                    </div>
                    <div className="bg-primary/5 rounded-2xl p-6 border-2 border-primary">
                      <h3 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                        <span className="text-primary">✓</span> Mr.Appler
                      </h3>
                      <ul className="space-y-3 text-foreground">
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Только оригинальные компоненты</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Гарантия до 2 лет</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Ремонт при вас в зале</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Фиксированная цена сразу</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Advantages E */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант E — Иконки + акцентный CTA</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: краткий формат с призывом к действию.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-cream">
              <section className="section-padding">
                <div className="container-custom">
                  <div className="bg-card rounded-3xl p-8 md:p-12 border border-border">
                    <div className="grid md:grid-cols-5 gap-8 items-center">
                      <div className="md:col-span-3">
                        <h2 className="heading-display text-2xl md:text-3xl text-foreground mb-6">Почему 15 000 москвичей доверяют нам технику Apple</h2>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { icon: "🔧", text: "Ремонт при вас" },
                            { icon: "💯", text: "Гарантия 2 года" },
                            { icon: "📍", text: "5 минут от метро" },
                            { icon: "💳", text: "Оплата картой" },
                          ].map((item) => (
                            <div key={item.text} className="flex items-center gap-3">
                              <span className="text-2xl">{item.icon}</span>
                              <span className="font-medium text-foreground">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="md:col-span-2 text-center md:text-right">
                        <button className="btn-primary text-lg px-8 py-4 mb-3 w-full md:w-auto">
                          Записаться на ремонт
                        </button>
                        <p className="text-sm text-muted-foreground">Бесплатная диагностика при ремонте</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 5. ПРОЦЕСС / ЭТАПЫ */}
        {/* ============================================= */}
        <section id="процесс">
          <div className="mb-8">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-2">5. Процесс / Этапы</h2>
            <p className="text-muted-foreground">Визуализация процесса работы с клиентом.</p>
          </div>

          {/* Process A */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант A — Горизонтальная шкала</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: чёткая последовательность шагов.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-background">
              <section className="section-padding">
                <div className="container-custom">
                  <h2 className="heading-display text-3xl md:text-4xl text-foreground text-center mb-12">Как мы работаем</h2>
                  <div className="grid md:grid-cols-4 gap-6">
                    {[
                      { step: "1", title: "Заявка", desc: "Оставьте заявку на сайте или позвоните нам. Ответим за 5 минут." },
                      { step: "2", title: "Диагностика", desc: "Бесплатно определим неисправность и назовём точную цену." },
                      { step: "3", title: "Ремонт", desc: "Устраним поломку при вас или за 1-3 дня для сложных случаев." },
                      { step: "4", title: "Гарантия", desc: "Выдадим гарантийный талон и будем на связи 2 года." },
                    ].map((item, i) => (
                      <div key={item.step} className="relative">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-display font-bold text-xl">
                            {item.step}
                          </div>
                          {i < 3 && (
                            <div className="hidden md:block absolute top-7 left-1/2 w-full h-0.5 bg-border ml-7"></div>
                          )}
                        </div>
                        <h3 className="font-display font-bold text-lg text-foreground mb-2 text-center">{item.title}</h3>
                        <p className="text-muted-foreground text-center text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Process B */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант B — Вертикальный таймлайн</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: детальное описание каждого этапа.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-cream">
              <section className="section-padding">
                <div className="container-custom">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">Этапы ремонта</h2>
                      <p className="text-muted-foreground text-lg mb-8">
                        Прозрачный процесс от заявки до получения устройства
                      </p>
                      <button className="btn-primary">Оставить заявку</button>
                    </div>
                    <div className="space-y-6">
                      {[
                        { time: "5 мин", title: "Приём заявки", desc: "Связываемся с вами, уточняем детали, записываем на удобное время." },
                        { time: "15 мин", title: "Диагностика", desc: "Осматриваем устройство, определяем неисправности, называем стоимость." },
                        { time: "30+ мин", title: "Ремонт", desc: "Выполняем работу при вас или оставляем на срок от 1 дня." },
                        { time: "∞", title: "Поддержка", desc: "Даём гарантию до 2 лет, консультируем по уходу за техникой." },
                      ].map((item, i) => (
                        <div key={item.title} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-4 h-4 bg-primary rounded-full"></div>
                            {i < 3 && <div className="w-0.5 h-full bg-border mt-2"></div>}
                          </div>
                          <div className="pb-6">
                            <span className="text-sm text-primary font-semibold">{item.time}</span>
                            <h3 className="font-display font-bold text-lg text-foreground">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Process C */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант C — Карточки с иллюстрациями</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: визуально привлекательный формат.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-background">
              <section className="section-padding">
                <div className="container-custom">
                  <h2 className="heading-display text-3xl md:text-4xl text-foreground text-center mb-4">Простой процесс ремонта</h2>
                  <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                    Всего 4 шага от заявки до работающего устройства с гарантией
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { emoji: "📞", title: "Свяжитесь с нами", desc: "Позвоните или оставьте заявку онлайн" },
                      { emoji: "🔍", title: "Диагностика", desc: "Выясним причину поломки бесплатно" },
                      { emoji: "🔧", title: "Ремонтируем", desc: "Устраним неисправность качественно" },
                      { emoji: "🎁", title: "Получайте", desc: "Заберите устройство с гарантией" },
                    ].map((item, i) => (
                      <div key={item.title} className="bg-card rounded-2xl p-6 border border-border text-center">
                        <div className="text-5xl mb-4">{item.emoji}</div>
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-3">
                          Шаг {i + 1}
                        </div>
                        <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Process D */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант D — Тёмная секция с акцентами</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: контрастный блок для привлечения внимания.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <section className="bg-dark section-padding">
                <div className="container-custom">
                  <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-6">
                      Как это работает
                    </span>
                    <h2 className="heading-display text-3xl md:text-4xl text-cream">Ремонт за 4 простых шага</h2>
                  </div>
                  <div className="grid md:grid-cols-4 gap-1">
                    {[
                      { num: "01", title: "Заявка", desc: "Позвоните или напишите нам" },
                      { num: "02", title: "Визит", desc: "Приезжайте в сервис" },
                      { num: "03", title: "Ремонт", desc: "Чиним при вас" },
                      { num: "04", title: "Готово", desc: "Получите устройство" },
                    ].map((item) => (
                      <div key={item.num} className="bg-dark-soft p-6 first:rounded-l-2xl last:rounded-r-2xl">
                        <span className="text-primary font-display font-bold text-3xl">{item.num}</span>
                        <h3 className="font-display font-bold text-lg text-cream mt-2 mb-1">{item.title}</h3>
                        <p className="text-cream/60 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Process E */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант E — Компактный список с иконками</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: минималистичный формат.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-cream">
              <section className="py-12">
                <div className="container-custom">
                  <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                      <span className="font-medium text-foreground">Заявка</span>
                    </div>
                    <svg className="w-6 h-6 text-muted-foreground hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                      <span className="font-medium text-foreground">Диагностика</span>
                    </div>
                    <svg className="w-6 h-6 text-muted-foreground hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
                      <span className="font-medium text-foreground">Ремонт</span>
                    </div>
                    <svg className="w-6 h-6 text-muted-foreground hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</div>
                      <span className="font-medium text-foreground">Гарантия</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 6. ЦЕНЫ / ПРАЙС */}
        {/* ============================================= */}
        <section id="цены">
          <div className="mb-8">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-2">6. Цены / Прайс</h2>
            <p className="text-muted-foreground">Таблицы и списки с ценами на услуги.</p>
          </div>

          {/* Pricing A */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант A — Таблица с категориями</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: полный прайс-лист с фильтрацией.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-background">
              <section className="section-padding">
                <div className="container-custom">
                  <h2 className="heading-display text-3xl md:text-4xl text-foreground text-center mb-8">Цены на ремонт iPhone</h2>
                  <div className="bg-card rounded-2xl border border-border overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-muted">
                          <tr>
                            <th className="text-left p-4 font-semibold text-foreground">Услуга</th>
                            <th className="text-center p-4 font-semibold text-foreground">iPhone 12-14</th>
                            <th className="text-center p-4 font-semibold text-foreground">iPhone 15</th>
                            <th className="text-center p-4 font-semibold text-foreground">iPhone 15 Pro</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          <tr className="hover:bg-muted/50 transition-colors">
                            <td className="p-4 text-foreground">Замена экрана</td>
                            <td className="p-4 text-center text-primary font-semibold">от 4 990 ₽</td>
                            <td className="p-4 text-center text-primary font-semibold">от 7 990 ₽</td>
                            <td className="p-4 text-center text-primary font-semibold">от 12 990 ₽</td>
                          </tr>
                          <tr className="hover:bg-muted/50 transition-colors">
                            <td className="p-4 text-foreground">Замена батареи</td>
                            <td className="p-4 text-center text-primary font-semibold">2 290 ₽</td>
                            <td className="p-4 text-center text-primary font-semibold">2 490 ₽</td>
                            <td className="p-4 text-center text-primary font-semibold">2 990 ₽</td>
                          </tr>
                          <tr className="hover:bg-muted/50 transition-colors">
                            <td className="p-4 text-foreground">Ремонт Face ID</td>
                            <td className="p-4 text-center text-primary font-semibold">от 4 990 ₽</td>
                            <td className="p-4 text-center text-primary font-semibold">от 5 990 ₽</td>
                            <td className="p-4 text-center text-primary font-semibold">от 7 990 ₽</td>
                          </tr>
                          <tr className="hover:bg-muted/50 transition-colors">
                            <td className="p-4 text-foreground">Замена разъёма</td>
                            <td className="p-4 text-center text-primary font-semibold">1 990 ₽</td>
                            <td className="p-4 text-center text-primary font-semibold">2 490 ₽</td>
                            <td className="p-4 text-center text-primary font-semibold">2 990 ₽</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="p-4 bg-muted/50 text-center">
                      <p className="text-sm text-muted-foreground">* Точная стоимость определяется после бесплатной диагностики</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Pricing B */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант B — Карточки тарифов</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: пакетные предложения или услуги с разным уровнем сервиса.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-cream">
              <section className="section-padding">
                <div className="container-custom">
                  <h2 className="heading-display text-3xl md:text-4xl text-foreground text-center mb-12">Выберите формат обслуживания</h2>
                  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-card rounded-2xl p-6 border border-border">
                      <h3 className="font-display font-bold text-xl text-foreground mb-2">Стандарт</h3>
                      <p className="text-muted-foreground text-sm mb-6">Базовый ремонт с гарантией</p>
                      <p className="text-3xl font-display font-bold text-foreground mb-6">от 990 ₽</p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2 text-sm text-muted-foreground"><span className="text-primary">✓</span> Бесплатная диагностика</li>
                        <li className="flex items-center gap-2 text-sm text-muted-foreground"><span className="text-primary">✓</span> Гарантия 6 месяцев</li>
                        <li className="flex items-center gap-2 text-sm text-muted-foreground"><span className="text-primary">✓</span> Срок ремонта 1-3 дня</li>
                      </ul>
                      <button className="btn-secondary w-full">Выбрать</button>
                    </div>
                    <div className="bg-card rounded-2xl p-6 border-2 border-primary relative">
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                        Популярный
                      </span>
                      <h3 className="font-display font-bold text-xl text-foreground mb-2">Оптимальный</h3>
                      <p className="text-muted-foreground text-sm mb-6">Лучшее соотношение цены и качества</p>
                      <p className="text-3xl font-display font-bold text-primary mb-6">от 2 490 ₽</p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2 text-sm text-foreground"><span className="text-primary">✓</span> Бесплатная диагностика</li>
                        <li className="flex items-center gap-2 text-sm text-foreground"><span className="text-primary">✓</span> Гарантия 1 год</li>
                        <li className="flex items-center gap-2 text-sm text-foreground"><span className="text-primary">✓</span> Оригинальные запчасти</li>
                        <li className="flex items-center gap-2 text-sm text-foreground"><span className="text-primary">✓</span> Ремонт за 1 день</li>
                      </ul>
                      <button className="btn-primary w-full">Выбрать</button>
                    </div>
                    <div className="bg-dark rounded-2xl p-6">
                      <h3 className="font-display font-bold text-xl text-cream mb-2">Премиум</h3>
                      <p className="text-cream/60 text-sm mb-6">VIP-сервис с максимальной гарантией</p>
                      <p className="text-3xl font-display font-bold text-cream mb-6">от 4 990 ₽</p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2 text-sm text-cream/80"><span className="text-primary">✓</span> Курьер бесплатно</li>
                        <li className="flex items-center gap-2 text-sm text-cream/80"><span className="text-primary">✓</span> Гарантия 2 года</li>
                        <li className="flex items-center gap-2 text-sm text-cream/80"><span className="text-primary">✓</span> Подменный телефон</li>
                        <li className="flex items-center gap-2 text-sm text-cream/80"><span className="text-primary">✓</span> Ремонт за 1 час</li>
                      </ul>
                      <button className="btn-primary w-full">Выбрать</button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Pricing C */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант C — Компактный список</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: краткий прайс рядом с другим контентом.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-background">
              <section className="section-padding">
                <div className="container-custom">
                  <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                      <h2 className="heading-display text-3xl text-foreground mb-4">Прозрачные цены</h2>
                      <p className="text-muted-foreground mb-6">
                        Никаких скрытых платежей. Стоимость работ включает запчасти и работу мастера. 
                        Диагностика бесплатна при заказе ремонта.
                      </p>
                      <button className="btn-primary">Полный прайс-лист</button>
                    </div>
                    <div className="space-y-2">
                      {[
                        { service: "Замена экрана iPhone", price: "от 4 990 ₽" },
                        { service: "Замена батареи iPhone", price: "от 2 290 ₽" },
                        { service: "Замена экрана iPad", price: "от 5 990 ₽" },
                        { service: "Ремонт MacBook", price: "от 2 990 ₽" },
                        { service: "Чистка MacBook", price: "от 3 490 ₽" },
                        { service: "Ремонт после воды", price: "от 1 990 ₽" },
                      ].map((item) => (
                        <div key={item.service} className="flex items-center justify-between py-3 border-b border-border">
                          <span className="text-foreground">{item.service}</span>
                          <span className="text-primary font-bold">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Pricing D */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант D — Сетка услуг с ценами</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: визуально привлекательный каталог.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <section className="bg-dark section-padding">
                <div className="container-custom">
                  <h2 className="heading-display text-3xl md:text-4xl text-cream text-center mb-12">Популярные услуги</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[
                      { icon: "📺", name: "Экран iPhone", price: "от 4 990 ₽" },
                      { icon: "🔋", name: "Батарея iPhone", price: "от 2 290 ₽" },
                      { icon: "📷", name: "Камера iPhone", price: "от 3 490 ₽" },
                      { icon: "🔌", name: "Разъём iPhone", price: "от 1 990 ₽" },
                      { icon: "💻", name: "Экран MacBook", price: "от 19 990 ₽" },
                      { icon: "⌨️", name: "Клавиатура Mac", price: "от 7 990 ₽" },
                      { icon: "📟", name: "Экран iPad", price: "от 5 990 ₽" },
                      { icon: "💧", name: "Чистка от воды", price: "от 1 990 ₽" },
                    ].map((item) => (
                      <div key={item.name} className="bg-dark-soft rounded-xl p-4 border border-cream/10 hover:border-primary transition-all cursor-pointer group">
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <h3 className="font-medium text-cream mb-1 group-hover:text-primary transition-colors">{item.name}</h3>
                        <p className="text-primary font-bold">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Pricing E */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант E — Аккордеон по устройствам</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: много услуг, структурированный прайс.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-cream">
              <section className="section-padding">
                <div className="container-custom max-w-3xl">
                  <h2 className="heading-display text-3xl md:text-4xl text-foreground text-center mb-8">Прайс-лист</h2>
                  <div className="space-y-4">
                    <div className="bg-card rounded-2xl border border-border overflow-hidden">
                      <button className="w-full p-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors">
                        <span className="font-display font-bold text-lg text-foreground flex items-center gap-3">
                          <span className="text-2xl">📱</span> Ремонт iPhone
                        </span>
                        <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="p-4 pt-0 space-y-2">
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Замена экрана</span>
                          <span className="text-primary font-semibold">от 4 990 ₽</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Замена батареи</span>
                          <span className="text-primary font-semibold">от 2 290 ₽</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-muted-foreground">Ремонт Face ID</span>
                          <span className="text-primary font-semibold">от 4 990 ₽</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-card rounded-2xl border border-border">
                      <button className="w-full p-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors">
                        <span className="font-display font-bold text-lg text-foreground flex items-center gap-3">
                          <span className="text-2xl">💻</span> Ремонт MacBook
                        </span>
                        <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    <div className="bg-card rounded-2xl border border-border">
                      <button className="w-full p-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors">
                        <span className="font-display font-bold text-lg text-foreground flex items-center gap-3">
                          <span className="text-2xl">📟</span> Ремонт iPad
                        </span>
                        <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 7. ОТЗЫВЫ */}
        {/* ============================================= */}
        <section id="отзывы">
          <div className="mb-8">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-2">7. Отзывы</h2>
            <p className="text-muted-foreground">Блоки с отзывами клиентов.</p>
          </div>

          {/* Reviews A */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант A — Карточки в сетке</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: много отзывов, визуально насыщенный блок.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-background">
              <section className="section-padding">
                <div className="container-custom">
                  <h2 className="heading-display text-3xl md:text-4xl text-foreground text-center mb-4">Отзывы наших клиентов</h2>
                  <p className="text-muted-foreground text-center mb-12">Более 2 000 положительных отзывов на Яндекс.Картах</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { name: "Александр К.", device: "iPhone 15 Pro", text: "Разбил экран в пятницу вечером. Приехал без записи, через 40 минут телефон был как новый. Цена как и обещали, без накруток. Рекомендую!", rating: 5 },
                      { name: "Мария С.", device: "MacBook Air M2", text: "Залила ноутбук кофе. Думала, что всё — конец. Ребята разобрали, почистили, высушили. Работает идеально уже полгода!", rating: 5 },
                      { name: "Дмитрий В.", device: "iPhone 14", text: "Меняли батарею. Всё сделали при мне за 20 минут. Показатель здоровья 100%, телефон держит целый день. Спасибо!", rating: 5 },
                    ].map((review) => (
                      <div key={review.name} className="bg-card rounded-2xl p-6 border border-border">
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-foreground mb-4 leading-relaxed">{review.text}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-foreground">{review.name}</span>
                          <span className="text-sm text-muted-foreground">{review.device}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-8">
                    <a href="#" className="text-primary font-semibold hover:underline">Смотреть все отзывы на Яндекс.Картах →</a>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Reviews B */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант B — Большая цитата с фото</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: акцент на одном ключевом отзыве.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-cream">
              <section className="section-padding">
                <div className="container-custom max-w-4xl">
                  <div className="text-center">
                    <div className="text-6xl text-primary mb-6">"</div>
                    <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                      Обратился в Mr.Appler после неудачного опыта в другом сервисе. Здесь всё по-другому: 
                      объяснили проблему, показали на экране, назвали точную цену. MacBook работает уже год без сбоев. 
                      Теперь только к ним!
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center text-2xl">👨‍💼</div>
                      <div className="text-left">
                        <p className="font-semibold text-foreground">Сергей Михайлов</p>
                        <p className="text-sm text-muted-foreground">Предприниматель • MacBook Pro</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Reviews C */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант C — Тёмная секция с рейтингом</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: контраст, акцент на высоком рейтинге.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <section className="bg-dark section-padding">
                <div className="container-custom">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-5xl font-display font-bold text-cream">4.9</span>
                        <div>
                          <div className="flex gap-1 mb-1">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-cream/70 text-sm">2 147 отзывов на Яндекс.Картах</p>
                        </div>
                      </div>
                      <h2 className="heading-display text-3xl md:text-4xl text-cream mb-4">Клиенты доверяют нам</h2>
                      <p className="text-cream/70 text-lg">
                        98% клиентов рекомендуют Mr.Appler друзьям и возвращаются за повторным обслуживанием.
                      </p>
                    </div>
                    <div className="space-y-4">
                      {[
                        { name: "Елена", text: "Быстро, качественно, недорого. Всё как обещали!", time: "2 дня назад" },
                        { name: "Михаил", text: "Заменили экран на iPhone за 30 минут. Сервис на высоте!", time: "Неделю назад" },
                      ].map((review) => (
                        <div key={review.name} className="bg-dark-soft rounded-xl p-4 border border-cream/10">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                              {review.name[0]}
                            </div>
                            <span className="text-cream font-medium">{review.name}</span>
                            <span className="text-cream/50 text-sm">• {review.time}</span>
                          </div>
                          <p className="text-cream/80">{review.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Reviews D */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант D — Карусель отзывов</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: много отзывов, интерактивный формат.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-background">
              <section className="section-padding">
                <div className="container-custom">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="heading-display text-3xl text-foreground">Отзывы клиентов</h2>
                    <div className="flex gap-2">
                      <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4">
                    {[
                      { name: "Анна М.", text: "Отличный сервис! Починили телефон быстро и качественно." },
                      { name: "Павел К.", text: "Рекомендую! Честные цены и профессиональный подход." },
                      { name: "Ольга Д.", text: "Спасли мой MacBook после залития. Огромное спасибо!" },
                    ].map((review) => (
                      <div key={review.name} className="min-w-[300px] bg-card rounded-2xl p-6 border border-border shrink-0">
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-foreground mb-4">{review.text}</p>
                        <p className="text-muted-foreground font-medium">{review.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Reviews E */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант E — Минималистичный с агрегатором</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: ссылка на внешние отзывы.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-cream">
              <section className="py-12">
                <div className="container-custom">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl font-display font-bold text-foreground">4.9</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-foreground font-medium">2 147 отзывов</span>
                    <a href="#" className="btn-primary">Читать на Яндекс.Картах</a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 8. FAQ */}
        {/* ============================================= */}
        <section id="faq">
          <div className="mb-8">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-2">8. FAQ</h2>
            <p className="text-muted-foreground">Блоки с часто задаваемыми вопросами.</p>
          </div>

          {/* FAQ A */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант A — Классический аккордеон</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: стандартный формат FAQ.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-background">
              <section className="section-padding">
                <div className="container-custom max-w-3xl">
                  <h2 className="heading-display text-3xl md:text-4xl text-foreground text-center mb-8">Часто задаваемые вопросы</h2>
                  <div className="space-y-3">
                    {[
                      { q: "Сколько времени занимает ремонт?", a: "Большинство ремонтов выполняется за 30-60 минут. Сложные случаи (ремонт материнской платы, восстановление после воды) могут занять 1-3 дня." },
                      { q: "Какая гарантия на ремонт?", a: "Мы предоставляем гарантию от 6 месяцев до 2 лет в зависимости от типа ремонта. Гарантийный талон выдаётся после каждой работы." },
                      { q: "Используете ли вы оригинальные запчасти?", a: "Да, мы используем только оригинальные комплектующие Apple с заводской калибровкой. Это гарантирует сохранение всех функций устройства." },
                      { q: "Можно ли приехать без записи?", a: "Да, мы принимаем клиентов без записи с 10:00 до 21:00. Однако для сложного ремонта рекомендуем записаться заранее." },
                    ].map((item, i) => (
                      <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
                        <button className="w-full p-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors">
                          <span className="font-semibold text-foreground pr-4">{item.q}</span>
                          <svg className="w-5 h-5 text-muted-foreground shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div className="p-4 pt-0 text-muted-foreground">
                          {item.a}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* FAQ B */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант B — Две колонки</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: много вопросов, экономия пространства.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-cream">
              <section className="section-padding">
                <div className="container-custom">
                  <h2 className="heading-display text-3xl md:text-4xl text-foreground text-center mb-12">Ответы на ваши вопросы</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {[
                        { q: "Как записаться на ремонт?", a: "Позвоните нам, оставьте заявку на сайте или напишите в WhatsApp." },
                        { q: "Диагностика платная?", a: "Диагностика бесплатна при заказе ремонта. Отдельно — 500 ₽." },
                      ].map((item, i) => (
                        <div key={i}>
                          <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                          <p className="text-muted-foreground">{item.a}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-6">
                      {[
                        { q: "Работаете с юрлицами?", a: "Да, заключаем договоры с компаниями на обслуживание техники." },
                        { q: "Есть ли у вас курьер?", a: "Да, курьер забирает и доставляет устройства по Москве бесплатно." },
                      ].map((item, i) => (
                        <div key={i}>
                          <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                          <p className="text-muted-foreground">{item.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* FAQ C */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант C — С категориями</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: вопросы по разным темам.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-background">
              <section className="section-padding">
                <div className="container-custom max-w-4xl">
                  <h2 className="heading-display text-3xl md:text-4xl text-foreground text-center mb-8">FAQ</h2>
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {["Все", "Цены", "Гарантия", "Сроки", "Запчасти"].map((tab, i) => (
                      <button 
                        key={tab}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                          i === 0 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-muted text-foreground hover:bg-muted/80"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <div className="bg-card rounded-xl p-6 border border-border">
                      <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded mb-2">Цены</span>
                      <h3 className="font-semibold text-foreground mb-2">Почему ваши цены ниже официального сервиса?</h3>
                      <p className="text-muted-foreground">Мы работаем напрямую с поставщиками запчастей и не платим за аренду в ТЦ, поэтому можем предложить цены ниже на 30-40%.</p>
                    </div>
                    <div className="bg-card rounded-xl p-6 border border-border">
                      <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded mb-2">Гарантия</span>
                      <h3 className="font-semibold text-foreground mb-2">Что включает гарантия?</h3>
                      <p className="text-muted-foreground">Гарантия покрывает работу мастера и установленные запчасти. Не распространяется на механические повреждения и попадание влаги.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* FAQ D */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант D — Тёмная секция</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: контраст перед CTA.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <section className="bg-dark section-padding">
                <div className="container-custom max-w-3xl">
                  <h2 className="heading-display text-3xl md:text-4xl text-cream text-center mb-8">Остались вопросы?</h2>
                  <div className="space-y-4">
                    {[
                      { q: "Сохранятся ли мои данные?", a: "Да, при стандартном ремонте данные сохраняются. Рекомендуем делать резервные копии." },
                      { q: "Нужно ли отключать Find My iPhone?", a: "Для замены некоторых компонентов — да. Мастер подскажет, если это потребуется." },
                    ].map((item, i) => (
                      <div key={i} className="bg-dark-soft rounded-xl border border-cream/10 overflow-hidden">
                        <button className="w-full p-4 flex items-center justify-between text-left">
                          <span className="font-semibold text-cream">{item.q}</span>
                          <svg className="w-5 h-5 text-cream/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div className="p-4 pt-0 text-cream/70">
                          {item.a}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-8">
                    <p className="text-cream/70 mb-4">Не нашли ответ?</p>
                    <button className="btn-primary">Задать вопрос</button>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* FAQ E */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант E — Компактный с боковым описанием</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: FAQ + CTA.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-cream">
              <section className="section-padding">
                <div className="container-custom">
                  <div className="grid lg:grid-cols-3 gap-12">
                    <div>
                      <h2 className="heading-display text-2xl text-foreground mb-4">Популярные вопросы</h2>
                      <p className="text-muted-foreground mb-6">
                        Собрали ответы на самые частые вопросы наших клиентов.
                      </p>
                      <button className="btn-secondary">Связаться с нами</button>
                    </div>
                    <div className="lg:col-span-2 space-y-4">
                      {[
                        { q: "Можно посмотреть процесс ремонта?", a: "Да, у нас открытая мастерская — можете наблюдать за работой." },
                        { q: "Принимаете карты?", a: "Да, оплата наличными, картой или переводом." },
                        { q: "Есть ли скидки?", a: "Скидка 10% пенсионерам и студентам, 15% на второй ремонт." },
                      ].map((item, i) => (
                        <div key={i} className="bg-card rounded-xl p-4 border border-border">
                          <h3 className="font-semibold text-foreground mb-1">{item.q}</h3>
                          <p className="text-muted-foreground text-sm">{item.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 9. ГЕОГРАФИЯ */}
        {/* ============================================= */}
        <section id="география">
          <div className="mb-8">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-2">9. География (районы Москвы)</h2>
            <p className="text-muted-foreground">Блоки с охватом географии услуг.</p>
          </div>

          {/* Geography A */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант A — Сетка районов</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: SEO, охват районов.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-background">
              <section className="section-padding">
                <div className="container-custom">
                  <h2 className="heading-display text-3xl md:text-4xl text-foreground text-center mb-4">Ремонт Apple в вашем районе</h2>
                  <p className="text-muted-foreground text-center mb-8">Работаем по всей Москве. Курьер бесплатно.</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      "Арбат", "Басманный", "Беговой", "Хамовники", "Пресненский",
                      "Тверской", "Замоскворечье", "Таганский", "Мещанский", "Красносельский"
                    ].map((district) => (
                      <a key={district} href="#" className="px-4 py-2 bg-card border border-border rounded-lg text-sm hover:border-primary hover:text-primary transition-all">
                        {district}
                      </a>
                    ))}
                    {/* Hidden districts */}
                    <div className="hidden">
                      {["Сокольники", "Марьина Роща", "Алексеевский", "Останкинский", "Бутырский"].map((district) => (
                        <a key={district} href="#" className="px-4 py-2 bg-card border border-border rounded-lg text-sm">
                          {district}
                        </a>
                      ))}
                    </div>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
                      Показать все районы
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Geography B */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант B — С картой</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: визуализация охвата.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-cream">
              <section className="section-padding">
                <div className="container-custom">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="heading-display text-3xl text-foreground mb-4">Обслуживаем всю Москву</h2>
                      <p className="text-muted-foreground mb-6">
                        Наш сервис расположен в центре, но мы работаем по всему городу. 
                        Бесплатный курьер в пределах МКАД.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {["ЦАО", "СВАО", "ВАО", "ЮВАО", "ЮАО", "ЮЗАО", "ЗАО", "СЗАО"].map((district) => (
                          <div key={district} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-foreground">{district}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-muted rounded-2xl aspect-square flex items-center justify-center">
                      <span className="text-muted-foreground">[Карта Москвы]</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Geography C */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант C — Станции метро</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: удобство для клиентов.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-background">
              <section className="section-padding">
                <div className="container-custom">
                  <h2 className="heading-display text-3xl text-foreground text-center mb-8">Ближайшие станции метро</h2>
                  <div className="max-w-3xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        { line: "🔴", station: "Тверская", time: "5 мин" },
                        { line: "🟢", station: "Пушкинская", time: "7 мин" },
                        { line: "🟣", station: "Чеховская", time: "6 мин" },
                      ].map((item) => (
                        <div key={item.station} className="bg-card rounded-xl p-4 border border-border text-center">
                          <span className="text-2xl mb-2 block">{item.line}</span>
                          <p className="font-semibold text-foreground">{item.station}</p>
                          <p className="text-sm text-muted-foreground">Пешком {item.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Geography D */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант D — Тёмная секция с акцентом</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: подчеркнуть удобство расположения.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <section className="bg-dark section-padding">
                <div className="container-custom text-center">
                  <h2 className="heading-display text-3xl md:text-4xl text-cream mb-4">📍 Удобное расположение</h2>
                  <p className="text-cream/70 text-lg mb-8 max-w-2xl mx-auto">
                    5 минут пешком от метро Тверская. Бесплатная парковка для клиентов.
                  </p>
                  <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-dark-soft rounded-2xl p-6 border border-cream/10">
                    <div className="text-4xl">🏢</div>
                    <div className="text-left">
                      <p className="text-cream font-semibold">ул. Тверская, 15</p>
                      <p className="text-cream/60 text-sm">Москва, 125009</p>
                    </div>
                    <button className="btn-primary">Построить маршрут</button>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Geography E */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант E — Компактный с выездом</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: акцент на курьерскую доставку.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-cream">
              <section className="py-12">
                <div className="container-custom">
                  <div className="bg-card rounded-2xl p-6 md:p-8 border border-border flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                        <span className="text-3xl">🚗</span>
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-foreground">Курьер по всей Москве</h3>
                        <p className="text-muted-foreground">Заберём и привезём устройство бесплатно в пределах МКАД</p>
                      </div>
                    </div>
                    <button className="btn-primary shrink-0">Вызвать курьера</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 10. КОНТАКТЫ / ФОРМА */}
        {/* ============================================= */}
        <section id="контакты">
          <div className="mb-8">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-2">10. Контакты / Форма заявки</h2>
            <p className="text-muted-foreground">Блоки с контактами и формами обратной связи.</p>
          </div>

          {/* Contacts A */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант A — Полный блок с картой</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: финальная секция с полной информацией.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-background">
              <section className="section-padding">
                <div className="container-custom">
                  <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                      <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6">Свяжитесь с нами</h2>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                            <span className="text-xl">📍</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">Адрес</h3>
                            <p className="text-muted-foreground">Москва, ул. Тверская, 15, офис 302</p>
                            <p className="text-sm text-muted-foreground">5 минут от м. Тверская</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                            <span className="text-xl">📞</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">Телефон</h3>
                            <a href="tel:+74951234567" className="text-primary font-semibold hover:underline">+7 (495) 123-45-67</a>
                            <p className="text-sm text-muted-foreground">Ежедневно с 10:00 до 21:00</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                            <span className="text-xl">✉️</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">Email</h3>
                            <a href="mailto:info@mrappler.ru" className="text-primary hover:underline">info@mrappler.ru</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center">
                      <span className="text-muted-foreground">[Яндекс Карта]</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Contacts B */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант B — Форма слева, контакты справа</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: акцент на форме заявки.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-cream">
              <section className="section-padding">
                <div className="container-custom">
                  <div className="grid lg:grid-cols-2 gap-12">
                    <div className="bg-card rounded-2xl p-8 border border-border">
                      <h2 className="heading-display text-2xl text-foreground mb-2">Оставить заявку</h2>
                      <p className="text-muted-foreground mb-6">Перезвоним в течение 5 минут</p>
                      <div className="space-y-4">
                        <input 
                          type="text" 
                          placeholder="Ваше имя" 
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input 
                          type="tel" 
                          placeholder="+7 (___) ___-__-__" 
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <textarea 
                          placeholder="Опишите проблему" 
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        ></textarea>
                        <button className="btn-primary w-full">Отправить заявку</button>
                        <p className="text-xs text-muted-foreground text-center">
                          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-display font-bold text-xl text-foreground mb-6">Или свяжитесь напрямую</h3>
                      <div className="space-y-4">
                        <a href="tel:+74951234567" className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-all">
                          <span className="text-2xl">📞</span>
                          <div>
                            <p className="font-semibold text-foreground">+7 (495) 123-45-67</p>
                            <p className="text-sm text-muted-foreground">Позвонить</p>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-all">
                          <span className="text-2xl">💬</span>
                          <div>
                            <p className="font-semibold text-foreground">WhatsApp</p>
                            <p className="text-sm text-muted-foreground">Написать в мессенджер</p>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-all">
                          <span className="text-2xl">✈️</span>
                          <div>
                            <p className="font-semibold text-foreground">Telegram</p>
                            <p className="text-sm text-muted-foreground">Написать в мессенджер</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Contacts C */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант C — Компактная форма</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: минималистичный подход.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-background">
              <section className="section-padding">
                <div className="container-custom max-w-xl">
                  <div className="text-center mb-8">
                    <h2 className="heading-display text-3xl text-foreground mb-2">Записаться на ремонт</h2>
                    <p className="text-muted-foreground">Оставьте контакт — перезвоним за 5 минут</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="tel" 
                      placeholder="+7 (___) ___-__-__" 
                      className="flex-1 px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="btn-primary shrink-0">Перезвоните мне</button>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Contacts D */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант D — Тёмная секция</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: контраст, финал страницы.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <section className="bg-dark section-padding">
                <div className="container-custom">
                  <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h2 className="heading-display text-3xl text-cream mb-6">Контакты</h2>
                        <div className="space-y-4 text-cream/80">
                          <p><span className="text-primary">📍</span> Москва, ул. Тверская, 15</p>
                          <p><span className="text-primary">📞</span> +7 (495) 123-45-67</p>
                          <p><span className="text-primary">⏰</span> Ежедневно 10:00–21:00</p>
                          <p><span className="text-primary">✉️</span> info@mrappler.ru</p>
                        </div>
                        <div className="flex gap-4 mt-6">
                          <a href="#" className="w-10 h-10 bg-dark-soft rounded-full flex items-center justify-center text-cream hover:text-primary transition-colors">
                            <span>VK</span>
                          </a>
                          <a href="#" className="w-10 h-10 bg-dark-soft rounded-full flex items-center justify-center text-cream hover:text-primary transition-colors">
                            <span>TG</span>
                          </a>
                          <a href="#" className="w-10 h-10 bg-dark-soft rounded-full flex items-center justify-center text-cream hover:text-primary transition-colors">
                            <span>WA</span>
                          </a>
                        </div>
                      </div>
                      <div className="bg-dark-soft rounded-2xl p-6 border border-cream/10">
                        <h3 className="font-display font-bold text-xl text-cream mb-4">Быстрая заявка</h3>
                        <div className="space-y-3">
                          <input 
                            type="tel" 
                            placeholder="Ваш телефон" 
                            className="w-full px-4 py-3 rounded-xl bg-dark border border-cream/10 text-cream placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                          <button className="btn-primary w-full">Перезвоните мне</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Contacts E */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант E — Карточки контактов</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: несколько способов связи.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-cream">
              <section className="section-padding">
                <div className="container-custom">
                  <h2 className="heading-display text-3xl text-foreground text-center mb-8">Как с нами связаться</h2>
                  <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <a href="tel:+74951234567" className="bg-card rounded-2xl p-6 border border-border text-center hover:border-primary hover:shadow-lg transition-all">
                      <div className="text-4xl mb-4">📞</div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-1">Позвонить</h3>
                      <p className="text-primary font-semibold">+7 (495) 123-45-67</p>
                    </a>
                    <a href="#" className="bg-card rounded-2xl p-6 border border-border text-center hover:border-primary hover:shadow-lg transition-all">
                      <div className="text-4xl mb-4">💬</div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-1">WhatsApp</h3>
                      <p className="text-primary font-semibold">Написать</p>
                    </a>
                    <a href="#" className="bg-card rounded-2xl p-6 border border-border text-center hover:border-primary hover:shadow-lg transition-all">
                      <div className="text-4xl mb-4">📍</div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-1">Приехать</h3>
                      <p className="text-primary font-semibold">Тверская, 15</p>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 11. CTA-БЛОК */}
        {/* ============================================= */}
        <section id="cta">
          <div className="mb-8">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-2">11. CTA-блок</h2>
            <p className="text-muted-foreground">Призывы к действию в разных форматах.</p>
          </div>

          {/* CTA A */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант A — Полноширинный с градиентом</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: яркий финальный призыв.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <section className="bg-gradient-to-r from-primary to-orange-glow py-16">
                <div className="container-custom text-center">
                  <h2 className="heading-display text-3xl md:text-4xl text-primary-foreground mb-4">
                    Готовы вернуть устройство к жизни?
                  </h2>
                  <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                    Запишитесь на бесплатную диагностику прямо сейчас. Мастер свяжется с вами в течение 5 минут.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-dark text-cream font-semibold px-8 py-4 rounded-xl hover:bg-dark-soft transition-all">
                      Записаться на ремонт
                    </button>
                    <button className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 font-semibold px-8 py-4 rounded-xl hover:bg-primary-foreground/20 transition-all">
                      Позвонить: +7 (495) 123-45-67
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* CTA B */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант B — Карточка с формой</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: сбор заявок внутри контента.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-cream">
              <section className="section-padding">
                <div className="container-custom">
                  <div className="bg-dark rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h2 className="heading-display text-2xl md:text-3xl text-cream mb-4">
                          Скидка 15% на первый ремонт
                        </h2>
                        <p className="text-cream/70">
                          Оставьте заявку и получите персональную скидку на первый визит в наш сервис.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <input 
                          type="tel" 
                          placeholder="Ваш телефон" 
                          className="w-full px-4 py-3 rounded-xl bg-dark-soft border border-cream/10 text-cream placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button className="btn-primary w-full">Получить скидку</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* CTA C */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант C — Минималистичный</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: лёгкий призыв между секциями.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-background">
              <section className="py-12">
                <div className="container-custom text-center">
                  <p className="text-lg text-foreground mb-4">Остались вопросы?</p>
                  <button className="btn-primary">Позвоните нам: +7 (495) 123-45-67</button>
                </div>
              </section>
            </div>
          </div>

          {/* CTA D */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант D — С преимуществами</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: убеждение перед действием.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <section className="bg-dark section-padding">
                <div className="container-custom">
                  <div className="max-w-4xl mx-auto text-center">
                    <h2 className="heading-display text-3xl md:text-4xl text-cream mb-6">
                      Почему стоит обратиться именно сейчас?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      {[
                        "⚡ Бесплатная экспресс-диагностика",
                        "🎁 Скидка 10% до конца недели",
                        "🚗 Бесплатный курьер по Москве",
                      ].map((item) => (
                        <div key={item} className="bg-dark-soft rounded-xl p-4 border border-cream/10 text-cream/80">
                          {item}
                        </div>
                      ))}
                    </div>
                    <button className="btn-primary text-lg px-10 py-5">
                      Записаться на ремонт
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* CTA E */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант E — Плавающая плашка</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: sticky CTA внизу страницы.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden bg-cream relative">
              <section className="py-24">
                <div className="container-custom text-center text-muted-foreground">
                  [Контент страницы]
                </div>
              </section>
              <div className="sticky bottom-0 left-0 right-0 bg-card border-t border-border p-4">
                <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-foreground">Нужна консультация?</p>
                    <p className="text-sm text-muted-foreground">Ответим на любые вопросы</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="btn-secondary">Написать в WhatsApp</button>
                    <button className="btn-primary">Позвонить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 12. FOOTER */}
        {/* ============================================= */}
        <section id="footer">
          <div className="mb-8">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-2">12. Footer</h2>
            <p className="text-muted-foreground">Варианты подвала сайта.</p>
          </div>

          {/* Footer A */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант A — Полный с колонками</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: информативный подвал.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <footer className="bg-dark pt-12 pb-6">
                <div className="container-custom">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                          </svg>
                        </div>
                        <span className="font-display font-bold text-xl text-cream">Mr.Appler</span>
                      </div>
                      <p className="text-cream/60 text-sm mb-4">Премиальный сервис ремонта техники Apple в Москве с 2015 года.</p>
                      <div className="flex gap-3">
                        <a href="#" className="w-9 h-9 bg-dark-soft rounded-full flex items-center justify-center text-cream/60 hover:text-primary transition-colors text-sm">VK</a>
                        <a href="#" className="w-9 h-9 bg-dark-soft rounded-full flex items-center justify-center text-cream/60 hover:text-primary transition-colors text-sm">TG</a>
                        <a href="#" className="w-9 h-9 bg-dark-soft rounded-full flex items-center justify-center text-cream/60 hover:text-primary transition-colors text-sm">WA</a>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cream mb-4">Услуги</h4>
                      <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-cream/60 hover:text-primary transition-colors">Ремонт iPhone</a></li>
                        <li><a href="#" className="text-cream/60 hover:text-primary transition-colors">Ремонт MacBook</a></li>
                        <li><a href="#" className="text-cream/60 hover:text-primary transition-colors">Ремонт iPad</a></li>
                        <li><a href="#" className="text-cream/60 hover:text-primary transition-colors">Ремонт iMac</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cream mb-4">Информация</h4>
                      <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-cream/60 hover:text-primary transition-colors">О компании</a></li>
                        <li><a href="#" className="text-cream/60 hover:text-primary transition-colors">Цены</a></li>
                        <li><a href="#" className="text-cream/60 hover:text-primary transition-colors">Гарантия</a></li>
                        <li><a href="#" className="text-cream/60 hover:text-primary transition-colors">Блог</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cream mb-4">Контакты</h4>
                      <ul className="space-y-2 text-sm text-cream/60">
                        <li>📍 Москва, ул. Тверская, 15</li>
                        <li>📞 +7 (495) 123-45-67</li>
                        <li>⏰ Ежедневно 10:00–21:00</li>
                        <li>✉️ info@mrappler.ru</li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/50">
                    <p>© 2025 Mr.Appler. Все права защищены.</p>
                    <div className="flex gap-6">
                      <a href="#" className="hover:text-cream transition-colors">Политика конфиденциальности</a>
                      <a href="#" className="hover:text-cream transition-colors">Оферта</a>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>

          {/* Footer B */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант B — Компактный</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: минимум информации.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <footer className="bg-dark py-6">
                <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                    </div>
                    <span className="font-display font-bold text-cream">Mr.Appler</span>
                  </div>
                  <nav className="flex flex-wrap justify-center gap-6 text-sm">
                    <a href="#" className="text-cream/60 hover:text-cream transition-colors">Услуги</a>
                    <a href="#" className="text-cream/60 hover:text-cream transition-colors">Цены</a>
                    <a href="#" className="text-cream/60 hover:text-cream transition-colors">Контакты</a>
                    <a href="#" className="text-cream/60 hover:text-cream transition-colors">Политика</a>
                  </nav>
                  <p className="text-sm text-cream/50">© 2025</p>
                </div>
              </footer>
            </div>
          </div>

          {/* Footer C */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант C — С CTA</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: призыв в подвале.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <footer className="bg-dark">
                <div className="container-custom py-8 border-b border-cream/10">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <p className="text-cream font-semibold text-lg">Нужен ремонт?</p>
                      <p className="text-cream/60">Перезвоним в течение 5 минут</p>
                    </div>
                    <div className="flex gap-3">
                      <input 
                        type="tel" 
                        placeholder="+7 (___) ___-__-__" 
                        className="px-4 py-2 rounded-lg bg-dark-soft border border-cream/10 text-cream placeholder:text-cream/40"
                      />
                      <button className="btn-primary">Перезвонить</button>
                    </div>
                  </div>
                </div>
                <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/50">
                  <p>© 2025 Mr.Appler. Москва, ул. Тверская, 15</p>
                  <a href="tel:+74951234567" className="text-cream font-semibold">+7 (495) 123-45-67</a>
                </div>
              </footer>
            </div>
          </div>

          {/* Footer D */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант D — Светлый</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: для светлых страниц.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <footer className="bg-cream border-t border-border py-8">
                <div className="container-custom">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-display font-bold text-foreground">Mr.Appler</span>
                        <p className="text-xs text-muted-foreground">Премиальный сервис Apple</p>
                      </div>
                    </div>
                    <nav className="flex flex-wrap justify-center gap-6">
                      <a href="#" className="text-foreground hover:text-primary transition-colors">Услуги</a>
                      <a href="#" className="text-foreground hover:text-primary transition-colors">Цены</a>
                      <a href="#" className="text-foreground hover:text-primary transition-colors">О нас</a>
                      <a href="#" className="text-foreground hover:text-primary transition-colors">Контакты</a>
                    </nav>
                    <a href="tel:+74951234567" className="text-primary font-semibold">+7 (495) 123-45-67</a>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
                    © 2025 Mr.Appler. Все права защищены.
                  </div>
                </div>
              </footer>
            </div>
          </div>

          {/* Footer E */}
          <div className="mb-12">
            <div className="bg-muted/50 p-4 rounded-t-2xl border border-border border-b-0">
              <h3 className="font-display font-semibold text-lg">Вариант E — Минималистичный</h3>
              <p className="text-sm text-muted-foreground">Когда использовать: для одностраничников.</p>
            </div>
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <footer className="bg-dark py-4">
                <div className="container-custom text-center text-sm text-cream/50">
                  © 2025 Mr.Appler • Москва • +7 (495) 123-45-67
                </div>
              </footer>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 13. UI-КИТ */}
        {/* ============================================= */}
        <section id="ui-кит">
          <div className="mb-8">
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-2">13. UI-кит (Сетка компонентов)</h2>
            <p className="text-muted-foreground">Базовые элементы интерфейса: кнопки, бейджи, карточки, формы.</p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 space-y-12">
            {/* Buttons */}
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-4">Кнопки</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">Primary Button</button>
                <button className="btn-secondary">Secondary Button</button>
                <button className="bg-dark text-cream font-semibold px-6 py-3 rounded-xl hover:bg-dark-soft transition-all">Dark Button</button>
                <button className="border-2 border-primary text-primary font-semibold px-6 py-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all">Outline Button</button>
                <button className="text-primary font-semibold hover:underline">Link Button</button>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <button className="btn-primary text-sm px-4 py-2">Small</button>
                <button className="btn-primary">Normal</button>
                <button className="btn-primary text-lg px-8 py-4">Large</button>
              </div>
            </div>

            {/* Badges */}
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-4">Бейджи и теги</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">Primary</span>
                <span className="px-3 py-1 bg-muted text-foreground rounded-full text-sm font-medium">Muted</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Soft</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Success</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Error</span>
                <span className="px-3 py-1 border border-border text-foreground rounded-full text-sm font-medium">Outline</span>
              </div>
            </div>

            {/* Cards */}
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-4">Карточки</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background rounded-2xl p-6 border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Базовая карточка</h4>
                  <p className="text-muted-foreground text-sm">Описание контента в карточке.</p>
                </div>
                <div className="bg-background rounded-2xl p-6 border border-border shadow-card hover:shadow-lg transition-all">
                  <h4 className="font-semibold text-foreground mb-2">Карточка с тенью</h4>
                  <p className="text-muted-foreground text-sm">Hover-эффект на карточке.</p>
                </div>
                <div className="bg-background rounded-2xl p-6 border-2 border-primary">
                  <h4 className="font-semibold text-foreground mb-2">Акцентная карточка</h4>
                  <p className="text-muted-foreground text-sm">Выделенная рамкой.</p>
                </div>
              </div>
            </div>

            {/* Form Elements */}
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-4">Элементы форм</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Текстовое поле</label>
                  <input 
                    type="text" 
                    placeholder="Введите текст" 
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    placeholder="+7 (___) ___-__-__" 
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Выпадающий список</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Выберите опцию</option>
                    <option>iPhone</option>
                    <option>iPad</option>
                    <option>MacBook</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">С иконкой</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">🔍</span>
                    <input 
                      type="text" 
                      placeholder="Поиск" 
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Текстовая область</label>
                  <textarea 
                    placeholder="Введите сообщение" 
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-4">Типографика</h3>
              <div className="space-y-4">
                <p className="heading-display text-4xl text-foreground">Heading Display (Outfit)</p>
                <p className="font-display font-bold text-2xl text-foreground">Heading Bold (Outfit)</p>
                <p className="text-lg text-foreground">Body Large (Inter)</p>
                <p className="text-base text-foreground">Body Normal (Inter)</p>
                <p className="text-sm text-muted-foreground">Body Small, Muted (Inter)</p>
                <p className="text-xs text-muted-foreground">Caption (Inter)</p>
                <p className="text-gradient-orange text-2xl font-bold">Gradient Text</p>
              </div>
            </div>

            {/* Colors */}
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-4">Цветовая палитра</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="text-center">
                  <div className="w-full aspect-square bg-primary rounded-xl mb-2"></div>
                  <p className="text-sm text-foreground">Primary</p>
                </div>
                <div className="text-center">
                  <div className="w-full aspect-square bg-orange-glow rounded-xl mb-2"></div>
                  <p className="text-sm text-foreground">Orange Glow</p>
                </div>
                <div className="text-center">
                  <div className="w-full aspect-square bg-cream rounded-xl border border-border mb-2"></div>
                  <p className="text-sm text-foreground">Cream</p>
                </div>
                <div className="text-center">
                  <div className="w-full aspect-square bg-dark rounded-xl mb-2"></div>
                  <p className="text-sm text-foreground">Dark</p>
                </div>
                <div className="text-center">
                  <div className="w-full aspect-square bg-foreground rounded-xl mb-2"></div>
                  <p className="text-sm text-foreground">Foreground</p>
                </div>
                <div className="text-center">
                  <div className="w-full aspect-square bg-muted rounded-xl border border-border mb-2"></div>
                  <p className="text-sm text-foreground">Muted</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SectionLibraryPage;