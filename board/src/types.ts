export interface QuestObjective {
  text: string
  done: boolean
}

export interface QuestComment {
  author: string
  text: string
  timestamp: string
}

export interface QuestHistoryEvent {
  event: string
  timestamp: string
}

export interface QuestScroll {
  id: string
  title: string
  description?: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  xp: number
  hp: number
  estimate: string
  loot: string
  assignees: string[]
  combo?: number
  objectives?: QuestObjective[]
  comments?: QuestComment[]
  history?: QuestHistoryEvent[]
  attachments?: string[]
  links?: string[]
  dependencies?: string[]
  reviewer?: string
  guild?: string
}

export interface Lane {
  id: string
  title: string
  scrolls: QuestScroll[]
}

export interface Boss {
  id: string
  name: string
  subtitle: string
  maxHp: number
  currentHp: number
  unlocked: boolean
  campaign: string
  reward: string
}
