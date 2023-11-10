export function useUserAgent() {
  const userAgent = navigator.userAgent

  const isMac = /Macintosh/.test(userAgent)
  const isWindows = /Windows/.test(userAgent)
  const isLinux = /Linux/.test(userAgent)

  const isPc = isWindows || isLinux

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)

  return {
    isMac,
    isPc,
    isMobile
  }
}
