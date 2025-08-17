export function formatCurrency(n){
  return new Intl.NumberFormat('en-IN', {maximumFractionDigits:0}).format(n)
}

export function toMinutes(hhmm){
  const [h,m] = hhmm.split(':').map(Number)
  return h*60+m
}

export function calcDuration(dep, arr){
  let d = toMinutes(arr) - toMinutes(dep)
  if(d < 0) d += 24*60
  const h = Math.floor(d/60), m = d%60
  return `${h}h ${m}m`
}
