import './App.css'
import UserProfile from './components/UserProfile'

const sampleUsers = [
  {
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    bio: "Full-stack developer passionate about creating innovative web solutions. Love working with React, Node.js, and modern web technologies.",
    location: "San Francisco, CA",
    socialLinks: [
      { platform: 'github' as const, url: 'https://github.com/alexjohnson' },
      { platform: 'twitter' as const, url: 'https://twitter.com/alexjohnson' },
      { platform: 'linkedin' as const, url: 'https://linkedin.com/in/alexjohnson' }
    ]
  },
  {
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    bio: "UX/UI Designer with 5+ years of experience creating beautiful and intuitive user interfaces. Specializing in mobile-first design.",
    location: "New York, NY",
    socialLinks: [
      { platform: 'github' as const, url: 'https://github.com/sarahchen' },
      { platform: 'linkedin' as const, url: 'https://linkedin.com/in/sarahchen' },
      { platform: 'website' as const, url: 'https://sarahchen.design' }
    ]
  },
  {
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Michael Rodriguez",
    email: "michael.rodriguez@example.com",
    bio: "DevOps engineer focused on cloud infrastructure and automation. AWS certified with expertise in Docker, Kubernetes, and CI/CD.",
    location: "Austin, TX",
    socialLinks: [
      { platform: 'github' as const, url: 'https://github.com/mrodriguez' },
      { platform: 'twitter' as const, url: 'https://twitter.com/mrodriguez' }
    ]
  },
  {
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    bio: "Data scientist and machine learning engineer. PhD in Computer Science with focus on natural language processing and AI ethics.",
    location: "Seattle, WA",
    socialLinks: [
      { platform: 'github' as const, url: 'https://github.com/emilydavis' },
      { platform: 'linkedin' as const, url: 'https://linkedin.com/in/emilydavis' },
      { platform: 'website' as const, url: 'https://emilydavis.ai' }
    ]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            User Profiles
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of user profile cards showcasing different professionals 
            with their contact information and social links.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sampleUsers.map((user, index) => (
            <UserProfile
              key={index}
              avatar={user.avatar}
              name={user.name}
              email={user.email}
              bio={user.bio}
              location={user.location}
              socialLinks={user.socialLinks}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
