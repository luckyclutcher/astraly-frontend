export const DEFAULT_DELAY = 5 * 1000

export type ToastNotification = {
  id: string
  delay: number
  title: string
  action: any
  postion: ToastPositions
}

export type ToastNotificationMessage = Partial<ToastNotification>

export enum ToastPositions {
  CENTER_LEFT = 'CENTER_LEFT',
}
