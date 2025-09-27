import React from 'react';
import { Mail, MapPin, Link as LinkIcon, Github, Twitter, Linkedin } from 'lucide-react';

interface SocialLink {
  platform: 'github' | 'twitter' | 'linkedin' | 'website';
  url: string;
}

interface UserProfileProps {
  avatar: string;
  name: string;
  email: string;
  bio: string;
  location?: string;
  socialLinks?: SocialLink[];
}

const UserProfile: React.FC<UserProfileProps> = ({
  avatar,
  name,
  email,
  bio,
  location,
  socialLinks = []
}) => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      default:
        return <LinkIcon className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 max-w-sm mx-auto">
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-24 h-24 rounded-full object-cover border-4 border-gray-100 hover:border-blue-200 transition-colors duration-300"
        />
      </div>

      {/* Name */}
      <h2 className="text-xl font-bold text-gray-900 text-center mb-2 hover:text-blue-600 transition-colors duration-200">
        {name}
      </h2>

      {/* Email */}
      <div className="flex items-center justify-center mb-3 text-gray-600">
        <Mail className="w-4 h-4 mr-2" />
        <a 
          href={`mailto:${email}`}
          className="text-sm hover:text-blue-600 transition-colors duration-200"
        >
          {email}
        </a>
      </div>

      {/* Location */}
      {location && (
        <div className="flex items-center justify-center mb-4 text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
      )}

      {/* Bio */}
      <p className="text-gray-700 text-sm text-center mb-6 leading-relaxed">
        {bio}
      </p>

      {/* Social Links */}
      {socialLinks.length > 0 && (
        <div className="flex justify-center space-x-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-200 hover:scale-110"
            >
              {getSocialIcon(link.platform)}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
