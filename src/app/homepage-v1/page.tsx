import { ArrowDown, ArrowUpRight, ChevronDown } from "lucide-react"

const featuredProjects = [
  {
    title: "Halo Digital Agency website",
    client: "Squaezo",
    image: "https://placehold.co/760x540/E6E1D9/222222?text=Featured+Project",
    featured: true,
  },
  {
    title: "Digital Agency website",
    client: "—",
    image: "https://placehold.co/360x540/D8D0C2/222222?text=Project",
  },
  {
    title: "Brand Studio website",
    client: "—",
    image: "https://placehold.co/360x540/CFCFCF/222222?text=Project",
  },
]

const experiences = [
  {
    company: "Creative Minds, New York, USA",
    dates: "February 2022 - Present",
    role: "Innovated designs, New York, Senior Product Designer",
    tags: ["UI/UX", "Web Design"],
  },
  {
    company: "Innovative Designs Inc, USA",
    dates: "January 2020 - February 2022",
    role: "Led UX/UI, San Francisco, crafting tomorrow’s experiences",
    tags: ["Brand Identity", "Branding"],
  },
  {
    company: "Visionary Creations Ltd, UK",
    dates: "February 2022 - Present",
    role: "Principal Designer, Berlin, crafting tomorrow’s experiences",
    tags: ["UI/UX", "Development"],
  },
  {
    company: "FutureTech, Berlin, Germany",
    dates: "February 2022 - Present",
    role: "From crafting seamless user experiences to leading strategic product design initiatives.",
    tags: ["Branding", "UI/UX"],
    featured: true,
  },
  {
    company: "Expert Designs Inc, USA",
    dates: "February 2022 - Present",
    role: "Innovated designs, New York, Senior Product Designer",
    tags: ["UI/UX", "Dashboard"],
  },
]

const insights = [
  {
    title: "Top Digital Marketing Trends",
    image: "https://placehold.co/560x340/C9C9C9/222222?text=Insight",
  },
  {
    title: "Why Your Website Isn’t Converting",
    image: "https://placehold.co/560x340/D9C9C1/222222?text=Insight",
  },
  {
    title: "4 Ways To Improve Your Website Traffic",
    image: "https://placehold.co/560x340/BFBFBF/222222?text=Insight",
    wide: true,
  },
  {
    title: "Top AI Apps Right Now",
    image: "https://placehold.co/560x340/C6D9E8/222222?text=Insight",
  },
]

function Eyebrow({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-1 shadow-sm ring-1 ring-black/5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#222222]" />
      <span className="text-[14px] leading-5 tracking-[-0.01em] text-[#222222]">
        {label}
      </span>
    </div>
  )
}

function Tag({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-[100px] px-3 py-1 text-[12px] leading-4 ${
        dark
          ? "bg-[#222222] text-white"
          : "bg-transparent text-[#4B5154] ring-1 ring-black/5"
      }`}
    >
      {label}
    </span>
  )
}

export default function Page() {
  return (
    <main
      className="min-h-screen bg-[#F3F3F3] text-[#222222]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="mx-auto max-w-[1440px] px-6 pb-6 pt-5 md:px-10 lg:px-12">
        <header className="flex items-center justify-between pb-10 lg:pb-14">
          <div className="flex items-center gap-14">
            <a
              href="#"
              className="flex items-center gap-2 text-[28px] font-medium tracking-[-0.03em]"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#222222] text-white">
                •
              </span>
              <span className="italic">Finox</span>
            </a>

            <nav className="hidden items-center gap-8 text-[16px] text-[#4B5154] md:flex">
              <a href="#about" className="hover:text-[#222222]">
                About Me
              </a>
              <a href="#portfolio" className="hover:text-[#222222]">
                Portfolio
              </a>
              <a href="#services" className="hover:text-[#222222]">
                Services
              </a>
              <a href="#blog" className="hover:text-[#222222]">
                Blog
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-1 hover:text-[#222222]"
              >
                Pages <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.75} />
              </a>
            </nav>
          </div>

          <a
            href="#footer"
            className="inline-flex items-center gap-1 text-[16px] underline underline-offset-4"
          >
            Book A Call <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </a>
        </header>

        <section className="relative overflow-hidden rounded-[20px] pb-12 pt-2 lg:min-h-[760px]">
          <div className="absolute left-0 top-24 hidden h-[430px] w-px bg-black/10 lg:block" />
          <div className="absolute left-[-6px] top-28 hidden -rotate-90 text-[12px] text-[#7B7B7B] lg:block">
            Product designer / UX
          </div>
          <div className="absolute bottom-24 left-[-6px] hidden -rotate-90 text-[12px] text-[#7B7B7B] lg:block">
            2024
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
            <div className="flex flex-col justify-between pt-4 lg:pt-16">
              <div className="flex items-start gap-10 text-[#4B5154]">
                <div>
                  <div className="text-[52px] leading-none tracking-[-0.06em] text-[#222222]">
                    +200
                  </div>
                  <div className="mt-2 text-[13px]">Project completed</div>
                </div>
                <div>
                  <div className="text-[52px] leading-none tracking-[-0.06em] text-[#222222]">
                    +50
                  </div>
                  <div className="mt-2 text-[13px]">Startup raised</div>
                </div>
              </div>

              <div className="pt-16 lg:pt-28">
                <h1 className="max-w-[760px] text-[88px] font-light leading-[0.92] tracking-[-0.09em] md:text-[140px] lg:text-[170px]">
                  Hello
                </h1>
                <div className="mt-5 flex items-center gap-3 text-[18px] text-[#4B5154]">
                  <span className="block h-px w-8 bg-[#222222]" />
                  <span>It’s Finox a design wizard</span>
                </div>
              </div>

              <div className="mt-12 inline-flex items-center gap-2 text-[13px] text-[#4B5154]">
                Scroll down <ArrowDown className="h-4 w-4" strokeWidth={1.75} />
              </div>
            </div>

            <div className="relative flex items-end justify-center lg:justify-end">
              <img
                src="/test/man-placeholder.png"
                alt="Portrait placeholder"
                className="h-auto w-full max-w-[650px] object-cover grayscale"
              />
            </div>
          </div>
        </section>

        <section id="about" className="pt-4 lg:pt-10">
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <h2 className="text-[44px] font-normal leading-[1.05] tracking-[-0.04em] lg:text-[48px]">
                About Me
              </h2>
              <p className="mt-5 max-w-[400px] text-[18px] leading-7 text-[#7B7B7B]">
                I’m specialize in turning complex problems into elegant
                solutions. My approach blends creativity with strategic
                thinking to deliver designs that not only look great but work
                seamlessly. Ready to start your next project?
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-[270px_170px_1fr]">
              <div className="rounded-[12px] bg-white p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-transparent text-xl">
                  ◎
                </div>
                <div className="mt-6 text-[56px] leading-none tracking-[-0.05em]">
                  120%
                </div>
                <p className="mt-4 text-[18px] leading-7 text-[#7B7B7B]">
                  Average increase in client engagement in the first 6 months
                </p>
                <img
                  src="https://placehold.co/269x320/D8D8D8/222222?text=Portrait"
                  alt="Portrait placeholder"
                  className="mt-10 h-[320px] w-full rounded-[12px] object-cover grayscale"
                />
              </div>

              <div className="flex flex-col gap-5">
                <div className="relative overflow-hidden rounded-[12px] bg-[#B6A99E]">
                  <img
                    src="https://placehold.co/170x170/CFCFCF/222222?text=Card"
                    alt="Card placeholder"
                    className="h-[170px] w-full object-cover grayscale"
                  />
                  <button className="absolute inset-x-0 inset-y-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#222222] shadow-md">
                    <ArrowUpRight className="h-5 w-5" strokeWidth={1.75} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-end gap-8 pb-2 lg:pl-4">
                <div className="flex gap-4">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#222222] text-white">
                    ✦
                  </span>
                  <p className="max-w-[360px] text-[18px] leading-7 text-[#4B5154]">
                    With 4+ years of experience, I specialize in crafting
                    intuitive, user-focused designs that solve real-world
                    problems and deliver seamless digital experiences.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#222222] text-white">
                    ✦
                  </span>
                  <p className="max-w-[360px] text-[18px] leading-7 text-[#4B5154]">
                    I thrive on working closely with clients, blending
                    creativity with strategy to bring their vision to life
                    through thoughtful, impactful design solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="pt-14 lg:pt-20">
          <div className="grid gap-4 lg:grid-cols-[0.23fr_0.54fr_0.23fr]">
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className={`group overflow-hidden rounded-[12px] ${
                  project.featured ? "lg:col-span-1" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-[12px] bg-[#DDD8D2]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover transition duration-300 group-hover:scale-[1.02] ${
                      index === 1 ? "h-[420px] lg:h-[460px]" : "h-[420px] lg:h-[460px]"
                    }`}
                  />
                  {index === 1 && (
                    <button className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#222222] text-white shadow-lg">
                      <ArrowUpRight className="h-6 w-6" strokeWidth={1.75} />
                    </button>
                  )}
                </div>
                <div className="flex items-center justify-between gap-4 px-1 pb-1 pt-3">
                  <h3 className="text-[32px] leading-none tracking-[-0.04em]">
                    {project.title}
                  </h3>
                  <span className="text-[12px] text-[#7B7B7B]">
                    For {project.client}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="services"
          className="mt-16 bg-white px-6 py-16 md:px-10 lg:mt-20 lg:px-12 lg:py-24"
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <Eyebrow label="Experiences" />
              <h2 className="mt-5 max-w-[380px] text-[46px] leading-[1.05] tracking-[-0.04em]">
                Explore My Design Journey
              </h2>
            </div>
            <div className="max-w-[530px] text-[18px] leading-7 text-[#7B7B7B]">
              Over the past 4+ years, I’ve had the opportunity to work on a
              wide range of design projects, collaborating with diverse teams
              and clients to bring creative visions to life.
              <div className="mt-3">
                <a
                  href="#footer"
                  className="inline-flex items-center gap-1 text-[#222222] underline underline-offset-4"
                >
                  Book A Call <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 divide-y divide-black/10 border-t border-black/10">
            {experiences.map((item) => (
              <div key={item.company} className="py-6">
                {item.featured ? (
                  <div className="grid gap-6 lg:grid-cols-[0.42fr_0.4fr_0.18fr] lg:items-start">
                    <div>
                      <h3 className="text-[30px] tracking-[-0.03em]">
                        {item.company}
                      </h3>
                      <p className="mt-2 text-[13px] text-[#7B7B7B]">• {item.dates}</p>
                      <div className="mt-6 flex gap-3">
                        <img
                          className="h-[84px] w-[110px] rounded-[8px] object-cover"
                          src="https://placehold.co/220x168/D7C0BA/222222?text=Work"
                          alt="Work placeholder"
                        />
                        <img
                          className="h-[84px] w-[110px] rounded-[8px] object-cover"
                          src="https://placehold.co/220x168/B6D0E8/222222?text=Work"
                          alt="Work placeholder"
                        />
                        <img
                          className="h-[84px] w-[110px] rounded-[8px] object-cover"
                          src="https://placehold.co/220x168/DDD8D2/222222?text=Work"
                          alt="Work placeholder"
                        />
                      </div>
                    </div>
                    <p className="max-w-[400px] pt-1 text-[16px] leading-7 text-[#7B7B7B]">
                      {item.role}
                    </p>
                    <div className="flex items-start justify-between gap-3 lg:flex-col lg:items-end">
                      <div className="flex flex-wrap gap-2 lg:justify-end">
                        {item.tags.map((tag, i) => (
                          <Tag key={tag} label={tag} dark={i === 0} />
                        ))}
                      </div>
                      <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#222222] text-white">
                        <ArrowUpRight className="h-5 w-5" strokeWidth={1.75} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-5 lg:grid-cols-[0.42fr_0.4fr_0.18fr] lg:items-center">
                    <div>
                      <h3 className="text-[30px] tracking-[-0.03em]">
                        {item.company}
                      </h3>
                      <p className="mt-2 text-[13px] text-[#7B7B7B]">• {item.dates}</p>
                    </div>
                    <p className="max-w-[380px] text-[16px] leading-7 text-[#7B7B7B]">
                      {item.role}
                    </p>
                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      {item.tags.map((tag) => (
                        <Tag key={tag} label={tag} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="relative overflow-hidden rounded-[12px] bg-black text-white">
            <img
              src="https://placehold.co/1400x430/1A1A1A/FFFFFF?text=CTA+Banner"
              alt="CTA placeholder"
              className="absolute inset-0 h-full w-full object-cover opacity-65"
            />
            <div className="relative z-10 flex min-h-[300px] flex-col items-center justify-center px-6 text-center lg:min-h-[340px]">
              <div className="text-[12px] tracking-[0.04em] text-white/85">
                Book Your Free Consultation Now!
              </div>
              <h2 className="mt-4 max-w-[760px] text-[40px] leading-[1.02] tracking-[-0.04em] lg:text-[56px]">
                Exclusive Winter Deal Days Get a Free Consultation
              </h2>
              <p className="mt-4 max-w-[620px] text-[14px] leading-6 text-white/80 lg:text-[16px]">
                Take advantage of the limited-time offer to discuss your design
                needs with an experienced UI, UX and product designer.
              </p>
              <a
                href="#footer"
                className="mt-8 inline-flex items-center gap-1 text-[14px] underline underline-offset-4"
              >
                Let&apos;s talk <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </section>

        <section id="blog" className="py-10 lg:py-12">
          <div className="flex flex-col items-center text-center">
            <Eyebrow label="Blogs" />
            <h2 className="mt-5 text-[48px] leading-[1.05] tracking-[-0.04em] lg:text-[64px]">
              Design Insights & Trends
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {insights.map((post, index) => (
              <article key={post.title} className={post.wide ? "lg:col-span-1" : ""}>
                <div className="group overflow-hidden rounded-[12px] bg-[#DDD8D2]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className={`w-full object-cover transition duration-300 group-hover:scale-[1.02] ${
                      index < 2 ? "h-[280px]" : "h-[320px]"
                    }`}
                  />
                </div>
                <div className="mt-3 inline-flex items-center gap-1 rounded-[100px] bg-white px-3 py-1 text-[12px] shadow-sm ring-1 ring-black/5">
                  <span>{post.title}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer
          id="footer"
          className="mt-12 overflow-hidden rounded-[12px] bg-black text-white"
        >
          <div className="px-6 py-8 md:px-10 lg:px-12 lg:py-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex flex-col gap-8">
                <a
                  href="#"
                  className="flex items-center gap-2 text-[28px] font-medium tracking-[-0.03em]"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
                    •
                  </span>
                  <span className="italic">Finox</span>
                </a>
                <div className="space-y-3 text-[28px] leading-none tracking-[-0.05em] md:text-[56px] lg:hidden">
                  <div>(207) 555-0119</div>
                  <div>finox@gmail.com</div>
                </div>
                <div className="space-y-3 text-[22px] text-white/85">
                  <div>Instagram</div>
                  <div>LinkedIn</div>
                </div>
              </div>

              <div className="hidden lg:block">
                <nav className="flex items-center justify-center gap-8 text-[13px] text-white/85">
                  <a href="#about">About Me</a>
                  <a href="#portfolio">Portfolio</a>
                  <a href="#services">Services</a>
                  <a href="#blog">Blog</a>
                </nav>
                <div className="mt-14 space-y-3 text-center text-[56px] leading-none tracking-[-0.05em]">
                  <div>(207) 555-0119</div>
                  <div>finox@gmail.com</div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-8 lg:items-end">
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-[14px] underline underline-offset-4"
                >
                  Book A Call <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </a>
                <div className="space-y-3 text-[22px] text-white/85 lg:text-right">
                  <div>Facebook</div>
                  <div>Twitter</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative border-t border-white/10 px-6 pb-5 pt-10 md:px-10 lg:px-12">
            <div className="pointer-events-none select-none overflow-hidden text-[100px] font-medium leading-none tracking-[-0.08em] text-white/8 md:text-[170px] lg:text-[220px]">
              FINOX FINOX
            </div>
            <div className="absolute inset-x-0 bottom-5 text-center text-[11px] text-white/70">
              ©Finox | Wolf Pixel | Licenced | Powered By Webflow
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
