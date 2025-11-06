
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { MapPin, Globe, MessageCircle, Video, Shield, Moon, Sun } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">World Chat Map</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-foreground" />
              ) : (
                <Sun className="w-5 h-5 text-foreground" />
              )}
            </button>
            {user ? (
              <button
                onClick={() => navigate('/map')}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Open Map
              </button>
            ) : (
              <button
                onClick={() => navigate('/auth')}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Chat with People
            <span className="text-primary"> Around You</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Connect with nearby users in real-time on an interactive map. Join local chats or the global lounge.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate(user ? '/map' : '/auth')}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
            >
              Start Chatting
            </button>
            <button
              onClick={() => navigate('/lounge')}
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-semibold text-lg"
            >
              Global Lounge
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center text-foreground mb-12">
          Powerful Features
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={<MapPin className="w-8 h-8" />}
            title="Location-Based Chat"
            description="Chat with users within 1-10 km radius. Adjust your range anytime."
          />
          <FeatureCard
            icon={<Globe className="w-8 h-8" />}
            title="Global Lounge"
            description="Connect with users worldwide in our global chat room."
          />
          <FeatureCard
            icon={<MessageCircle className="w-8 h-8" />}
            title="Rich Messaging"
            description="Send text, images, videos, emojis, and reply to messages."
          />
          <FeatureCard
            icon={<Video className="w-8 h-8" />}
            title="Voice & Video Calls"
            description="Make P2P voice and video calls with nearby users."
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Ghost Mode"
            description="Hide your location while staying active in chats."
          />
          <FeatureCard
            icon={<Globe className="w-8 h-8" />}
            title="Multi-Language"
            description="Available in English and Arabic with more coming soon."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center">
          <h3 className="text-4xl font-bold text-white mb-4">
            Ready to Connect?
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of users chatting on the World Chat Map
          </p>
          <button
            onClick={() => navigate(user ? '/map' : '/auth')}
            className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors font-semibold text-lg"
          >
            Launch App
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>&copy; 2025 World Chat Map. Built with React, Supabase & Mapbox.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-primary mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-foreground mb-2">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}