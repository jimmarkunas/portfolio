import { MuradPulseGlow } from "@/components/case-study/diagram-shared/MuradPulseGlow"

export function MuradApiLayerCard({
  title,
  subtitle,
  compact = false,
  onClick,
}: {
  title: string
  subtitle: string
  compact?: boolean
  onClick: () => void
}) {
  if (compact) {
    return (
      <div
        className="w-80 h-32 absolute cursor-pointer group"
        style={{ left: 10, top: 376 }}
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation()
          onClick()
        }}
      >
        <MuradPulseGlow w={320} h={128} uid="pg-m-api" style={{ top: 0, left: 0 }} />
        <div className="w-80 h-32 left-0 top-0 absolute bg-neutral-800 rounded-[10px] border border-[#7b7b7b] group-hover:border-blue-500 transition-colors" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="mb-2">
            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0038 18.9956H6.00378C4.58701 18.9965 3.21563 18.496 2.13247 17.5827C1.04931 16.6695 0.324252 15.4024 0.0856863 14.0059C-0.152879 12.6093 0.110439 11.1734 0.829013 9.95242C1.54759 8.7314 2.67506 7.80405 4.01178 7.33457C3.9665 6.38823 4.11379 5.44254 4.44474 4.5548C4.77569 3.66706 5.2834 2.85574 5.93713 2.16999C6.59085 1.48424 7.37698 0.938325 8.24788 0.565325C9.11879 0.192325 10.0564 0 11.0038 0C11.9512 0 12.8888 0.192325 13.7597 0.565325C14.6306 0.938325 15.4167 1.48424 16.0704 2.16999C16.7242 2.85574 17.2319 3.66706 17.5628 4.5548C17.8938 5.44254 18.0411 6.38823 17.9958 7.33457C19.3325 7.80405 20.46 8.7314 21.1785 9.95242C21.8971 11.1734 22.1604 12.6093 21.9219 14.0059C21.6833 15.4024 20.9583 16.6695 19.8751 17.5827C18.7919 18.496 17.4206 18.9965 16.0038 18.9956ZM16.0038 6.99557C16.004 6.32857 15.8708 5.66827 15.612 5.05354C15.3532 4.4388 14.974 3.88207 14.4967 3.41611C14.0195 2.95015 13.4538 2.58439 12.8331 2.34036C12.2123 2.09633 11.549 1.97896 10.8822 1.99518C10.2154 2.01139 9.55863 2.16085 8.95047 2.43476C8.34231 2.70867 7.79511 3.10149 7.34107 3.59009C6.88703 4.0787 6.53534 4.6532 6.30671 5.27979C6.07807 5.90638 5.97712 6.57237 6.00978 7.23857L6.07978 8.72657L4.67578 9.22057C3.78629 9.53514 3.03653 10.1539 2.55888 10.9675C2.08123 11.7811 1.90639 12.7374 2.06524 13.6674C2.22409 14.5974 2.70641 15.4414 3.42705 16.0503C4.14769 16.6593 5.0603 16.9941 6.00378 16.9956H16.0038C16.7401 16.9953 17.4621 16.7918 18.0902 16.4075C18.7183 16.0232 19.2281 15.473 19.5635 14.8174C19.8989 14.1619 20.0468 13.4265 19.991 12.6923C19.9351 11.9581 19.6777 11.2535 19.2471 10.6562C18.8165 10.059 18.2293 9.59213 17.5503 9.30719C16.8714 9.02225 16.1269 8.93026 15.399 9.04136C14.6711 9.15245 13.988 9.46231 13.4249 9.93681C12.8618 10.4113 12.4406 11.032 12.2078 11.7306L10.3098 11.0976C10.7086 9.90295 11.4731 8.86404 12.4949 8.12787C13.5168 7.3917 14.7443 6.99558 16.0038 6.99557Z" fill="white" />
            </svg>
          </div>
          <div className="text-white text-base font-semibold font-display leading-4">{title}</div>
          <div className="mt-2 text-neutral-50 text-sm font-normal font-display leading-4">{subtitle}</div>
        </div>
      </div>
    )
  }

  return (
    <div
      data-layer="API"
      className="Api w-64 h-16 absolute cursor-pointer group"
      onPointerDown={(e) => e.stopPropagation()}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
    >
      <MuradPulseGlow w={256} h={128} uid="pg-api" style={{ top: -28, left: 0 }} />
      <div data-layer="API Container" className="ApiContainer w-64 h-32 left-0 top-[-28px] absolute bg-[#202124] rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#202124] group-hover:outline-2 group-hover:outline-blue-500 group-hover:shadow-[0_0_0_2px_rgba(68,122,203,0.15),0_8px_32px_rgba(68,122,203,0.35)] transition-[outline,box-shadow] duration-150" />
      <div data-layer="Modal Title" className="ModalTitle w-64 h-8 left-0 top-[36px] absolute">
        <div data-layer="Paragraph" className="Paragraph w-64 h-3.5 left-0 top-[16px] absolute text-center justify-start text-neutral-50 text-sm font-normal font-display leading-4">{subtitle}</div>
        <div data-layer="Header" className="Header w-64 h-4 left-0 top-0 absolute text-center justify-start text-white text-base font-semibold font-display leading-4">{title}</div>
      </div>
      <div data-layer="Modal Logo" className="ModalLogo w-64 h-9 left-0 top-0 absolute">
        <div data-layer="Vector" className="Vector size-6 left-[116px] top-[6px] absolute" />
        <div data-svg-wrapper data-layer="Vector" className="Vector left-[117px] top-[8px] absolute">
          <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0038 18.9956H6.00378C4.58701 18.9965 3.21563 18.496 2.13247 17.5827C1.04931 16.6695 0.324252 15.4024 0.0856863 14.0059C-0.152879 12.6093 0.110439 11.1734 0.829013 9.95242C1.54759 8.7314 2.67506 7.80405 4.01178 7.33457C3.9665 6.38823 4.11379 5.44254 4.44474 4.5548C4.77569 3.66706 5.2834 2.85574 5.93713 2.16999C6.59085 1.48424 7.37698 0.938325 8.24788 0.565325C9.11879 0.192325 10.0564 0 11.0038 0C11.9512 0 12.8888 0.192325 13.7597 0.565325C14.6306 0.938325 15.4167 1.48424 16.0704 2.16999C16.7242 2.85574 17.2319 3.66706 17.5628 4.5548C17.8938 5.44254 18.0411 6.38823 17.9958 7.33457C19.3325 7.80405 20.46 8.7314 21.1785 9.95242C21.8971 11.1734 22.1604 12.6093 21.9219 14.0059C21.6833 15.4024 20.9583 16.6695 19.8751 17.5827C18.7919 18.496 17.4206 18.9965 16.0038 18.9956ZM16.0038 6.99557C16.004 6.32857 15.8708 5.66827 15.612 5.05354C15.3532 4.4388 14.974 3.88207 14.4967 3.41611C14.0195 2.95015 13.4538 2.58439 12.8331 2.34036C12.2123 2.09633 11.549 1.97896 10.8822 1.99518C10.2154 2.01139 9.55863 2.16085 8.95047 2.43476C8.34231 2.70867 7.79511 3.10149 7.34107 3.59009C6.88703 4.0787 6.53534 4.6532 6.30671 5.27979C6.07807 5.90638 5.97712 6.57237 6.00978 7.23857L6.07978 8.72657L4.67578 9.22057C3.78629 9.53514 3.03653 10.1539 2.55888 10.9675C2.08123 11.7811 1.90639 12.7374 2.06524 13.6674C2.22409 14.5974 2.70641 15.4414 3.42705 16.0503C4.14769 16.6593 5.0603 16.9941 6.00378 16.9956H16.0038C16.7401 16.9953 17.4621 16.7918 18.0902 16.4075C18.7183 16.0232 19.2281 15.473 19.5635 14.8174C19.8989 14.1619 20.0468 13.4265 19.991 12.6923C19.9351 11.9581 19.6777 11.2535 19.2471 10.6562C18.8165 10.059 18.2293 9.59213 17.5503 9.30719C16.8714 9.02225 16.1269 8.93026 15.399 9.04136C14.6711 9.15245 13.988 9.46231 13.4249 9.93681C12.8618 10.4113 12.4406 11.032 12.2078 11.7306L10.3098 11.0976C10.7086 9.90295 11.4731 8.86404 12.4949 8.12787C13.5168 7.3917 14.7443 6.99558 16.0038 6.99557Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  )
}
