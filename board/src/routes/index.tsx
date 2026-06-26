import { useState, useCallback } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import type { Lane, Boss, QuestScroll as QuestScrollType } from '../types'
import BoardLayout from '../components/BoardLayout'
import BoardHeader from '../components/BoardHeader'
import BossBanner from '../components/BossBanner'
import QuestBoard from '../components/QuestBoard'
import FloatingHUD from '../components/FloatingHUD'
import QuestInspectionModal from '../components/QuestInspectionModal'

export const Route = createFileRoute('/')({ component: QuestBoardPage })

const INITIAL_LANES: Lane[] = [
  {
    id: 'available',
    title: 'Available',
    scrolls: [
      {
        id: 'q-1', title: 'Set up CI/CD pipeline', description: 'Configure GitHub Actions for automated testing and deployment across all environments', priority: 'high', xp: 250, hp: 30, estimate: '4h', loot: 'Steel Ingot', assignees: ['Aria'], combo: 2,
        objectives: [
          { text: 'Configure test runner in CI', done: true },
          { text: 'Set up deployment to staging', done: true },
          { text: 'Add production deployment gate', done: false },
          { text: 'Configure Slack notifications', done: false },
        ],
        comments: [
          { author: 'Kael', text: 'Make sure to add caching for node_modules', timestamp: '2h ago' },
          { author: 'Aria', text: 'Production gate should require 2 approvals', timestamp: '1h ago' },
        ],
        history: [
          { event: 'Created', timestamp: '3d ago' },
          { event: 'Assigned to Aria', timestamp: '3d ago' },
          { event: 'CI config completed', timestamp: '1d ago' },
        ],
        guild: 'DevOps',
        dependencies: ['Infra setup (q-7)'],
      },
      { id: 'q-2', title: 'Design system audit', priority: 'medium', xp: 150, hp: 20, estimate: '6h', loot: 'Blueprint', assignees: ['Kael'],
        objectives: [
          { text: 'Audit all button components', done: false },
          { text: 'Document spacing conventions', done: false },
          { text: 'Create migration guide', done: false },
        ],
        history: [
          { event: 'Created', timestamp: '5d ago' },
          { event: 'Assigned to Kael', timestamp: '4d ago' },
        ],
      },
      { id: 'q-3', title: 'Write API documentation', description: 'Document all REST endpoints with request/response examples and error codes', priority: 'low', xp: 100, hp: 10, estimate: '3h', loot: 'Scroll Fragment', assignees: ['Luna'],
        objectives: [
          { text: 'Document auth endpoints', done: true },
          { text: 'Document user endpoints', done: true },
          { text: 'Document payment endpoints', done: false },
        ],
        comments: [
          { author: 'Thorn', text: 'Use the OpenAPI spec as reference', timestamp: '1d ago' },
        ],
      },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    scrolls: [
      {
        id: 'q-4', title: 'Implement user authentication', description: 'Add OAuth2 login flow with Google and GitHub providers. Must support refresh tokens.', priority: 'critical', xp: 500, hp: 80, estimate: '12h', loot: 'Magic Gem', assignees: ['Aria', 'Kael'], combo: 3,
        objectives: [
          { text: 'Google OAuth2 integration', done: true },
          { text: 'GitHub OAuth2 integration', done: false },
          { text: 'Refresh token rotation', done: false },
          { text: 'Session management UI', done: false },
          { text: 'Token encryption at rest', done: false },
        ],
        comments: [
          { author: 'Thorn', text: 'Remember to rotate the client secrets before prod', timestamp: '5h ago' },
          { author: 'Aria', text: 'Google provider is done, working on GitHub', timestamp: '3h ago' },
          { author: 'Kael', text: 'We need to handle token refresh on the mobile app too', timestamp: '1h ago' },
        ],
        history: [
          { event: 'Created', timestamp: '1w ago' },
          { event: 'Assigned to Aria & Kael', timestamp: '1w ago' },
          { event: 'Google OAuth completed', timestamp: '2d ago' },
          { event: 'Code review requested', timestamp: '1d ago' },
          { event: 'Review feedback addressed', timestamp: '12h ago' },
        ],
        reviewer: 'Thorn',
        guild: 'Core',
        links: ['https://github.com/example/auth-spec'],
        dependencies: ['Infra setup (q-7)'],
      },
      { id: 'q-5', title: 'Database migration v2', priority: 'high', xp: 300, hp: 50, estimate: '8h', loot: 'Ancient Tome', assignees: ['Thorn'],
        objectives: [
          { text: 'Write migration scripts', done: true },
          { text: 'Back up production data', done: true },
          { text: 'Run dry-run migration', done: false },
          { text: 'Verify data integrity', done: false },
        ],
        comments: [
          { author: 'Aria', text: 'Run the dry-run on staging first', timestamp: '2d ago' },
        ],
        history: [
          { event: 'Created', timestamp: '1w ago' },
          { event: 'Assigned to Thorn', timestamp: '6d ago' },
          { event: 'Migration scripts written', timestamp: '3d ago' },
        ],
        dependencies: ['Infra setup (q-7)'],
      },
    ],
  },
  {
    id: 'review',
    title: 'Review',
    scrolls: [
      {
        id: 'q-6', title: 'Refactor payment module', priority: 'high', xp: 350, hp: 40, estimate: '6h', loot: 'Gold Coin', assignees: ['Kael', 'Luna'],
        objectives: [
          { text: 'Split payment service into smaller modules', done: true },
          { text: 'Add unit tests for each module', done: false },
          { text: 'Update API contracts', done: false },
          { text: 'Smoke test in staging', done: false },
        ],
        comments: [
          { author: 'Thorn', text: 'Make sure Stripe SDK is updated too', timestamp: '4h ago' },
        ],
        history: [
          { event: 'Created', timestamp: '4d ago' },
          { event: 'Assigned to Kael & Luna', timestamp: '4d ago' },
          { event: 'Service split completed', timestamp: '1d ago' },
        ],
        reviewer: 'Thorn',
      },
    ],
  },
  {
    id: 'completed',
    title: 'Completed',
    scrolls: [
      { id: 'q-7', title: 'Project scaffold', priority: 'medium', xp: 200, hp: 15, estimate: '2h', loot: 'Wood Plank', assignees: ['Thorn'] },
      { id: 'q-8', title: 'Logo design', priority: 'low', xp: 80, hp: 5, estimate: '4h', loot: 'Paint Brush', assignees: ['Luna'] },
    ],
  },
]

const INITIAL_BOSS: Boss = {
  id: 'boss-1',
  name: 'The Legacy Monolith',
  subtitle: 'Ancient codebase guarding the production realm',
  maxHp: 100,
  currentHp: 73,
  unlocked: true,
  campaign: 'Spring Cleanse',
  reward: 'Legendary Artifact',
}

function QuestBoardPage() {
  const [lanes, setLanes] = useState<Lane[]>(INITIAL_LANES)
  const [boss] = useState<Boss>(INITIAL_BOSS)
  const [selectedScroll, setSelectedScroll] = useState<QuestScrollType | null>(null)

  const handleMoveScroll = useCallback(
    (scrollId: string, sourceLaneId: string, destLaneId: string, destIndex: number, sourceIndex: number) => {
      setLanes((prev) => {
        const sourceLane = prev.find((l) => l.id === sourceLaneId)
        const destLane = prev.find((l) => l.id === destLaneId)
        if (!sourceLane || !destLane) return prev

        const scroll = sourceLane.scrolls.find((s) => s.id === scrollId)
        if (!scroll) return prev

        if (sourceLaneId === destLaneId) {
          return prev.map((l) => {
            if (l.id !== sourceLaneId) return l
            const without = l.scrolls.filter((s) => s.id !== scrollId)
            const newScrolls = [...without]
            newScrolls.splice(destIndex, 0, scroll)
            return { ...l, scrolls: newScrolls }
          })
        }

        return prev.map((l) => {
          if (l.id === sourceLaneId) {
            return { ...l, scrolls: l.scrolls.filter((s) => s.id !== scrollId) }
          }
          if (l.id === destLaneId) {
            const newScrolls = [...l.scrolls]
            newScrolls.splice(destIndex, 0, scroll)
            return { ...l, scrolls: newScrolls }
          }
          return l
        })
      })
    },
    [],
  )

  return (
    <>
      <BoardLayout
        header={
          <BoardHeader
            guildName="Code Weavers"
            boardName="Sprint 7"
            avatarName="Adventurer"
          />
        }
        bossArea={<BossBanner boss={boss} />}
        board={<QuestBoard lanes={lanes} onMoveScroll={handleMoveScroll} onSelectScroll={setSelectedScroll} />}
        hud={<FloatingHUD />}
      />
      <QuestInspectionModal scroll={selectedScroll} onClose={() => setSelectedScroll(null)} />
    </>
  )
}
