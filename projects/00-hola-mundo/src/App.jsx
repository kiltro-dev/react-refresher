import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  { userName: 'lalo', name: 'Lalo Silva', isFollowing: false },
  { userName: 'tala', name: 'Tala Parra', isFollowing: false   },
]

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          userName={userName}
          initialIsFollowing={isFollowing}
          key={userName}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  )
}
