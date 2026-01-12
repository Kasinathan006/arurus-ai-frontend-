import { motion } from 'framer-motion';
import { Video, Calendar, Clock, Users, Plus } from 'lucide-react';

const Meetings: React.FC = () => {
    const upcomingMeetings = [
        {
            id: 1,
            title: 'Sprint Planning',
            time: 'Today, 2:00 PM',
            duration: '60 min',
            attendees: 8,
            type: 'recurring',
            status: 'starting-soon',
        },
        {
            id: 2,
            title: 'Executive Strategy Review',
            time: 'Today, 4:30 PM',
            duration: '90 min',
            attendees: 6,
            type: 'one-time',
            status: 'scheduled',
        },
        {
            id: 3,
            title: 'Product Roadmap Discussion',
            time: 'Tomorrow, 10:00 AM',
            duration: '45 min',
            attendees: 12,
            type: 'recurring',
            status: 'scheduled',
        },
        {
            id: 4,
            title: '1:1 with Sarah (Engineering)',
            time: 'Tomorrow, 2:00 PM',
            duration: '30 min',
            attendees: 2,
            type: 'one-time',
            status: 'scheduled',
        },
    ];

    const pastMeetings = [
        {
            id: 5,
            title: 'Q4 Budget Review',
            time: 'Yesterday, 3:00 PM',
            duration: '120 min',
            attendees: 10,
            hasRecording: true,
            hasTranscript: true,
        },
        {
            id: 6,
            title: 'Marketing Campaign Kickoff',
            time: 'Jan 8, 11:00 AM',
            duration: '60 min',
            attendees: 15,
            hasRecording: true,
            hasTranscript: true,
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-7xl mx-auto"
        >
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-white mb-2">Meetings</h1>
                    <p className="text-lg text-gray-400">Your meeting schedule and recordings</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors">
                    <Plus className="w-5 h-5" />
                    Schedule Meeting
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="glass-card rounded-xl p-4 border border-white/5">
                    <div className="text-sm text-gray-500 mb-1">Today</div>
                    <div className="text-3xl font-mono font-bold text-cyan-400">3</div>
                </div>
                <div className="glass-card rounded-xl p-4 border border-white/5">
                    <div className="text-sm text-gray-500 mb-1">This Week</div>
                    <div className="text-3xl font-mono font-bold text-purple-400">12</div>
                </div>
                <div className="glass-card rounded-xl p-4 border border-white/5">
                    <div className="text-sm text-gray-500 mb-1">Total Hours</div>
                    <div className="text-3xl font-mono font-bold text-green-400">18.5h</div>
                </div>
                <div className="glass-card rounded-xl p-4 border border-white/5">
                    <div className="text-sm text-gray-500 mb-1">Recordings</div>
                    <div className="text-3xl font-mono font-bold text-orange-400">24</div>
                </div>
            </div>

            {/* Upcoming Meetings */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Upcoming Meetings</h2>
                <div className="space-y-3">
                    {upcomingMeetings.map((meeting, index) => (
                        <motion.div
                            key={meeting.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card rounded-xl p-5 border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer group"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 flex-1">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${meeting.status === 'starting-soon'
                                            ? 'bg-red-500/20 border border-red-500/30'
                                            : 'bg-cyan-500/10 border border-cyan-500/20'
                                        }`}>
                                        <Video className={`w-6 h-6 ${meeting.status === 'starting-soon' ? 'text-red-400' : 'text-cyan-400'
                                            }`} />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                            {meeting.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{meeting.time}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{meeting.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="w-4 h-4" />
                                                <span>{meeting.attendees} attendees</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {meeting.status === 'starting-soon' && (
                                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all">
                                        Join Now
                                    </button>
                                )}

                                {meeting.type === 'recurring' && (
                                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold border border-purple-500/30">
                                        RECURRING
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Past Meetings */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-4">Past Meetings</h2>
                <div className="space-y-3">
                    {pastMeetings.map((meeting, index) => (
                        <motion.div
                            key={meeting.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card rounded-xl p-5 border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer group"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="w-12 h-12 rounded-lg bg-gray-500/10 border border-gray-500/20 flex items-center justify-center">
                                        <Video className="w-6 h-6 text-gray-400" />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                            {meeting.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{meeting.time}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{meeting.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="w-4 h-4" />
                                                <span>{meeting.attendees} attendees</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    {meeting.hasRecording && (
                                        <button className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/20 transition-colors border border-cyan-500/20">
                                            Recording
                                        </button>
                                    )}
                                    {meeting.hasTranscript && (
                                        <button className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-400 text-sm font-semibold hover:bg-purple-500/20 transition-colors border border-purple-500/20">
                                            Transcript
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Meetings;
