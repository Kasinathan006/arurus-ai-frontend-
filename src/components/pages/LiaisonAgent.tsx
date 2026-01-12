import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mic, Paperclip, Sparkles, FileText, Folder, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import aiService from '../../services/aiService';

interface Message {
    id: string;
    type: 'user' | 'ai';
    content: string;
    timestamp: Date;
    widget?: 'table' | 'list' | 'chart' | null;
    data?: any;
}

const LiaisonAgent: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isThinking, setIsThinking] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const starterPrompts = [
        { icon: '📊', text: 'Analyze Sprint Health', color: 'from-cyan-500 to-blue-600' },
        { icon: '📝', text: 'Draft Weekly Report', color: 'from-purple-500 to-pink-600' },
        { icon: '⚠️', text: 'Show Blocker Risks', color: 'from-orange-500 to-red-600' },
        { icon: '🎯', text: 'Review Team Velocity', color: 'from-green-500 to-emerald-600' },
    ];

    const activeContext = [
        { label: 'Project', value: 'Alpha Launch' },
        { label: 'Sprint', value: 'Sprint 24' },
        { label: 'Team', value: '6 Members' },
    ];

    const recentFiles = [
        { name: 'Meeting_Notes.pdf', icon: FileText, size: '2.4 MB' },
        { name: 'Q3_Goals.docx', icon: FileText, size: '156 KB' },
        { name: 'Sprint_Backlog.xlsx', icon: Folder, size: '892 KB' },
    ];

    const handleSendMessage = async (content?: string) => {
        const messageContent = content || inputValue.trim();
        if (!messageContent) return;

        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            type: 'user',
            content: messageContent,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsThinking(true);

        try {
            // Real API call to AI Engine (Port 3003)
            const response = await aiService.sendMessage({
                message: messageContent,
                context: {
                    projectId: 'alpha-launch',
                    sprintId: 'sprint-24',
                },
            });

            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                type: 'ai',
                content: response.message,
                timestamp: new Date(),
                widget: response.widget,
                data: response.data,
            };

            setMessages(prev => [...prev, aiMessage]);
        } catch (err: any) {
            console.error('AI chat error:', err);

            // Add error message as AI response
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                type: 'ai',
                content: "I'm having trouble connecting to the AI service. Please make sure the backend is running on Port 3003.",
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsThinking(false);
        }
    };

    const renderWidget = (widget: string, data: any) => {
        if (widget === 'table' && data) {
            return (
                <div className="mt-3 overflow-hidden rounded-lg border border-white/10">
                    <table className="w-full text-sm">
                        <thead className="bg-white/5">
                            <tr>
                                {data.headers.map((header: string, i: number) => (
                                    <th key={i} className="px-3 py-2 text-left text-xs font-semibold text-gray-400">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.rows.map((row: string[], i: number) => (
                                <tr key={i} className="border-t border-white/5">
                                    {row.map((cell: string, j: number) => (
                                        <td key={j} className="px-3 py-2 text-gray-300">
                                            {j === 3 ? (
                                                <span
                                                    className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${cell === 'High'
                                                        ? 'bg-red-500/20 text-red-400'
                                                        : cell === 'Medium'
                                                            ? 'bg-yellow-500/20 text-yellow-400'
                                                            : 'bg-green-500/20 text-green-400'
                                                        }`}
                                                >
                                                    {cell}
                                                </span>
                                            ) : (
                                                cell
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="flex h-full">
            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Conversation Feed */}
                <div className="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar">
                    {messages.length === 0 ? (
                        // Welcome State
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center justify-center h-full"
                        >
                            {/* AI Avatar */}
                            <div className="relative mb-8">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-purple-500/50 animate-pulse">
                                    <Sparkles className="w-12 h-12 text-white" />
                                </div>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 blur-xl opacity-50 animate-pulse"></div>
                            </div>

                            {/* Greeting */}
                            <h2 className="text-2xl font-bold text-white mb-2 text-center">
                                Ready to orchestrate, James.
                            </h2>
                            <p className="text-gray-400 text-center mb-12 max-w-md">
                                I'm monitoring <span className="text-cyan-400 font-semibold">12 active tasks</span> and{' '}
                                <span className="text-purple-400 font-semibold">3 upcoming meetings</span>.
                            </p>

                            {/* Quick Actions Grid */}
                            <div className="grid grid-cols-2 gap-4 max-w-2xl w-full">
                                {starterPrompts.map((prompt, index) => (
                                    <motion.button
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        onClick={() => handleSendMessage(prompt.text)}
                                        className="glass-card p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all group hover:scale-105"
                                    >
                                        <div className={`text-4xl mb-3 bg-gradient-to-r ${prompt.color} bg-clip-text text-transparent`}>
                                            {prompt.icon}
                                        </div>
                                        <p className="text-white font-semibold text-left group-hover:text-cyan-400 transition-colors">
                                            {prompt.text}
                                        </p>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        // Message History
                        <div className="space-y-6 max-w-4xl mx-auto">
                            <AnimatePresence>
                                {messages.map((message) => (
                                    <motion.div
                                        key={message.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div className={`flex gap-3 max-w-2xl ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                                            {/* Avatar */}
                                            {message.type === 'ai' && (
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                                                    <Sparkles className="w-5 h-5 text-white" />
                                                </div>
                                            )}

                                            {/* Message Bubble */}
                                            <div
                                                className={`px-5 py-3 rounded-2xl ${message.type === 'user'
                                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                                                    : 'glass-card border border-white/10 text-gray-200'
                                                    }`}
                                            >
                                                <p className="text-sm leading-relaxed">{message.content}</p>
                                                {message.widget && message.data && renderWidget(message.widget, message.data)}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {/* Thinking Indicator */}
                            {isThinking && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                                            <Sparkles className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="glass-card border border-white/10 px-5 py-3 rounded-2xl">
                                            <div className="flex gap-1">
                                                <motion.div
                                                    animate={{ y: [0, -8, 0] }}
                                                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                                                    className="w-2 h-2 rounded-full bg-cyan-400"
                                                />
                                                <motion.div
                                                    animate={{ y: [0, -8, 0] }}
                                                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                                                    className="w-2 h-2 rounded-full bg-purple-400"
                                                />
                                                <motion.div
                                                    animate={{ y: [0, -8, 0] }}
                                                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                                                    className="w-2 h-2 rounded-full bg-cyan-400"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    )}
                </div>

                {/* Input Area (Fixed Bottom) */}
                <div className="p-6">
                    <div
                        className={`glass-card backdrop-blur-xl border rounded-2xl transition-all ${isFocused ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' : 'border-white/10'
                            }`}
                    >
                        <div className="flex items-center gap-3 px-5 py-4">
                            {/* Attach Icon */}
                            <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <Paperclip className="w-5 h-5" />
                            </button>

                            {/* Input Field */}
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Ask Liaison to analyze, execute, or draft..."
                                className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
                            />

                            {/* Mic Icon */}
                            <button className="text-gray-400 hover:text-purple-400 transition-colors">
                                <Mic className="w-5 h-5" />
                            </button>

                            {/* Send Button */}
                            <button
                                onClick={() => handleSendMessage()}
                                disabled={!inputValue.trim()}
                                className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                <Send className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Context Panel */}
            <div className="w-80 bg-[#030303] border-l border-white/5 flex flex-col">
                {/* Memory Section */}
                <div className="p-6 border-b border-white/5">
                    <h3 className="text-sm font-semibold text-gray-400 mb-4 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        Active Context
                    </h3>
                    <div className="space-y-3">
                        {activeContext.map((item, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <span className="text-xs text-gray-500">{item.label}</span>
                                <span className="text-sm text-white font-medium">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Files */}
                <div className="p-6 flex-1">
                    <h3 className="text-sm font-semibold text-gray-400 mb-4 flex items-center gap-2">
                        <Folder className="w-4 h-4 text-cyan-400" />
                        Recent Files
                    </h3>
                    <div className="space-y-2">
                        {recentFiles.map((file) => (
                            <button
                                key={file.name}
                                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                            >
                                <file.icon className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                                <div className="flex-1 text-left">
                                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors truncate">
                                        {file.name}
                                    </p>
                                    <p className="text-xs text-gray-600">{file.size}</p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transition-colors" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiaisonAgent;
