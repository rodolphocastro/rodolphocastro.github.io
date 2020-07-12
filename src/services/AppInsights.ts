import { ApplicationInsights } from '@microsoft/applicationinsights-web'

const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: process.env.VUE_APP_INSIGHTS_KEY,
    autoTrackPageVisitTime: true,
    enableAutoRouteTracking: true
  }
})
appInsights.loadAppInsights()

/**
 * Obtem a instância do AppInsights.
 */
export function useAppInsights () {
  return appInsights
}
