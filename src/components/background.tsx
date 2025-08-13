export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Base subtle vignette */}
      <div className="absolute inset-0 vignette"></div>
      
      {/* Extended top gradient so navbar isn't dark/monotone */}
      <div className="absolute inset-x-0 -top-64 h-[520px] blur-3xl opacity-90 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(45,92,224,0.25),rgba(45,92,224,0.15),transparent_70%)]"></div>
      
      {/* Subtle side glow */}
      <div className="absolute -left-40 top-1/3 h-72 w-72 rounded-full blur-3xl opacity-25" style={{ backgroundColor: 'rgba(45,92,224,0.25)' }}></div>
      <div className="absolute -right-40 top-1/4 h-72 w-72 rounded-full blur-3xl opacity-20" style={{ backgroundColor: 'rgba(224,45,183,0.20)' }}></div>
      
      {/* Bottom fade for depth */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>
  )
}
