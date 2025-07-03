import React, { useState } from 'react';
import {
  MessageSquare,
  Send,
  Search,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  User,
  Clock,
  CheckCheck
} from 'lucide-react';

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  isFromPatient: boolean;
}

interface Conversation {
  id: string;
  patientId: string;
  patientName: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isOnline: boolean;
}

const Messages: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState<string>('1');
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const conversations: Conversation[] = [
    {
      id: '1',
      patientId: '1',
      patientName: 'Emily Johnson',
      lastMessage: 'Thank you for the prescription update!',
      lastMessageTime: '2024-01-18T10:30:00Z',
      unreadCount: 0,
      isOnline: true
    },
    {
      id: '2',
      patientId: '2',
      patientName: 'Michael Chen',
      lastMessage: 'When should I schedule my next appointment?',
      lastMessageTime: '2024-01-18T09:15:00Z',
      unreadCount: 2,
      isOnline: false
    },
    {
      id: '3',
      patientId: '3',
      patientName: 'Sarah Davis',
      lastMessage: 'The new inhaler is working great!',
      lastMessageTime: '2024-01-17T16:45:00Z',
      unreadCount: 0,
      isOnline: true
    },
    {
      id: '4',
      patientId: '4',
      patientName: 'Robert Wilson',
      lastMessage: 'Can you clarify the medication dosage?',
      lastMessageTime: '2024-01-17T14:20:00Z',
      unreadCount: 1,
      isOnline: false
    }
  ];

  const messages: { [key: string]: Message[] } = {
    '1': [
      {
        id: '1',
        senderId: '1',
        senderName: 'Emily Johnson',
        content: 'Hi Dr. Wilson, I wanted to ask about my blood pressure medication.',
        timestamp: '2024-01-18T09:00:00Z',
        isRead: true,
        isFromPatient: true
      },
      {
        id: '2',
        senderId: 'doctor',
        senderName: 'Dr. Sarah Wilson',
        content: 'Hello Emily! I can help you with that. What specific questions do you have?',
        timestamp: '2024-01-18T09:05:00Z',
        isRead: true,
        isFromPatient: false
      },
      {
        id: '3',
        senderId: '1',
        senderName: 'Emily Johnson',
        content: 'Should I take it with food? I\'ve been having some stomach discomfort.',
        timestamp: '2024-01-18T09:10:00Z',
        isRead: true,
        isFromPatient: true
      },
      {
        id: '4',
        senderId: 'doctor',
        senderName: 'Dr. Sarah Wilson',
        content: 'Yes, it\'s better to take it with food to minimize stomach irritation. I\'ll update your prescription notes.',
        timestamp: '2024-01-18T09:20:00Z',
        isRead: true,
        isFromPatient: false
      },
      {
        id: '5',
        senderId: '1',
        senderName: 'Emily Johnson',
        content: 'Thank you for the prescription update!',
        timestamp: '2024-01-18T10:30:00Z',
        isRead: true,
        isFromPatient: true
      }
    ],
    '2': [
      {
        id: '1',
        senderId: '2',
        senderName: 'Michael Chen',
        content: 'Good morning Dr. Wilson, I hope you\'re doing well.',
        timestamp: '2024-01-18T08:30:00Z',
        isRead: true,
        isFromPatient: true
      },
      {
        id: '2',
        senderId: '2',
        senderName: 'Michael Chen',
        content: 'When should I schedule my next appointment?',
        timestamp: '2024-01-18T09:15:00Z',
        isRead: false,
        isFromPatient: true
      }
    ]
  };

  const filteredConversations = conversations.filter(conv =>
    conv.patientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentMessages = messages[selectedConversation] || [];
  const currentConversation = conversations.find(conv => conv.id === selectedConversation);

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
      return date.toLocaleDateString();
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to the backend
      setNewMessage('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600 mt-1">Communicate with patients securely</p>
        </div>
      </div>

      {/* Messages Interface */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 h-[600px] flex">
        {/* Conversations List */}
        <div className="w-1/3 border-r border-gray-100 flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                  selectedConversation === conversation.id ? 'bg-blue-50 border-r-2 border-blue-600' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="relative">
                    <div className="bg-gray-300 p-2 rounded-full">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    {conversation.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-semibold text-gray-900 truncate">
                        {conversation.patientName}
                      </h3>
                      <span className="text-xs text-gray-500">
                        {formatTime(conversation.lastMessageTime)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                    {conversation.unreadCount > 0 && (
                      <div className="mt-1">
                        <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-blue-600 rounded-full">
                          {conversation.unreadCount}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {currentConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="bg-gray-300 p-2 rounded-full">
                      <User className="w-6 h-6 text-gray-600" />
                    </div>
                    {currentConversation.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{currentConversation.patientName}</h3>
                    <p className="text-sm text-gray-500">
                      {currentConversation.isOnline ? 'Online' : 'Last seen recently'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                    <Phone className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                    <Video className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {currentMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isFromPatient ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md ${
                      message.isFromPatient 
                        ? 'bg-gray-100 text-gray-900' 
                        : 'bg-blue-600 text-white'
                    } rounded-lg px-4 py-2`}>
                      <p className="text-sm">{message.content}</p>
                      <div className={`flex items-center justify-end mt-1 space-x-1 ${
                        message.isFromPatient ? 'text-gray-500' : 'text-blue-100'
                      }`}>
                        <Clock className="w-3 h-3" />
                        <span className="text-xs">{formatTime(message.timestamp)}</span>
                        {!message.isFromPatient && (
                          <CheckCheck className="w-3 h-3" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600">
                      <Smile className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Select a conversation to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;