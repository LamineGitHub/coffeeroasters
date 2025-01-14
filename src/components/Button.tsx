export function Button({ label }: { label: string }) {
  return (
    <button
      className="rounded-lg bg-primary px-[31px] pb-4 pt-[15px] text-center font-fraunces text-[1.125rem] leading-[25px] text-white transition hover:bg-[#66D2CF]">
      {label}
    </button>
  )
}
