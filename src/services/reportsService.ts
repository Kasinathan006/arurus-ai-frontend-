import { reportsApi } from '../lib/api';

export interface ExecutionHealthData {
    sprintProgress: number;
    healthy: number;
    atRisk: number;
    blocked: number;
    velocityAlert?: string;
}

export interface DiscussionLoop {
    id: string;
    topic: string;
    status: 'stalled' | 'circling' | 'resolved';
    participants: string[];
    lastUpdated: string;
    escalatedTo?: string;
    etaClose?: string;
}

export interface GhostAction {
    id: string;
    action: string;
    timestamp: string;
    type: 'nudge' | 'update' | 'escalation' | 'summary';
    target?: string;
}

export interface MeetingData {
    id: string;
    title: string;
    duration: number;
    participants: number;
    status: 'scheduled' | 'live' | 'completed';
    audioWaveform?: number[];
}

class ReportsService {
    /**
     * Get execution health data
     * GET to http://localhost:3006/api/reports/execution-health
     */
    async getExecutionHealth(sprintId?: string): Promise<ExecutionHealthData> {
        try {
            const response = await reportsApi.get<{ success: boolean; data: ExecutionHealthData }>(
                '/api/reports/execution-health',
                { params: { sprintId } }
            );
            return response.data.data;
        } catch (error: any) {
            console.error('Execution health error:', error);
            throw new Error(error.response?.data?.message || 'Failed to fetch execution health');
        }
    }

    /**
     * Get discussion loops
     * GET to http://localhost:3006/api/reports/discussion-loops
     */
    async getDiscussionLoops(): Promise<DiscussionLoop[]> {
        try {
            const response = await reportsApi.get<{ success: boolean; loops: DiscussionLoop[] }>(
                '/api/reports/discussion-loops'
            );
            return response.data.loops || [];
        } catch (error: any) {
            console.error('Discussion loops error:', error);
            return [];
        }
    }

    /**
     * Get ghost actions
     * GET to http://localhost:3006/api/reports/ghost-actions
     */
    async getGhostActions(limit: number = 10): Promise<GhostAction[]> {
        try {
            const response = await reportsApi.get<{ success: boolean; actions: GhostAction[] }>(
                '/api/reports/ghost-actions',
                { params: { limit } }
            );
            return response.data.actions || [];
        } catch (error: any) {
            console.error('Ghost actions error:', error);
            return [];
        }
    }

    /**
     * Get meeting data
     * GET to http://localhost:3006/api/reports/meetings
     */
    async getMeetings(status?: 'scheduled' | 'live' | 'completed'): Promise<MeetingData[]> {
        try {
            const response = await reportsApi.get<{ success: boolean; meetings: MeetingData[] }>(
                '/api/reports/meetings',
                { params: { status } }
            );
            return response.data.meetings || [];
        } catch (error: any) {
            console.error('Meetings error:', error);
            return [];
        }
    }

    /**
     * Get sprint velocity metrics
     * GET to http://localhost:3006/api/reports/velocity
     */
    async getVelocityMetrics(sprintId?: string): Promise<any> {
        try {
            const response = await reportsApi.get('/api/reports/velocity', { params: { sprintId } });
            return response.data;
        } catch (error: any) {
            console.error('Velocity metrics error:', error);
            throw new Error(error.response?.data?.message || 'Failed to fetch velocity metrics');
        }
    }

    /**
     * Get burnout risk data
     * GET to http://localhost:3006/api/reports/burnout-risk
     */
    async getBurnoutRisk(teamId?: string): Promise<any> {
        try {
            const response = await reportsApi.get('/api/reports/burnout-risk', { params: { teamId } });
            return response.data;
        } catch (error: any) {
            console.error('Burnout risk error:', error);
            throw new Error(error.response?.data?.message || 'Failed to fetch burnout risk');
        }
    }

    /**
     * Generate weekly report
     * POST to http://localhost:3006/api/reports/weekly
     */
    async generateWeeklyReport(projectId?: string): Promise<any> {
        try {
            const response = await reportsApi.post('/api/reports/weekly', { projectId });
            return response.data;
        } catch (error: any) {
            console.error('Weekly report error:', error);
            throw new Error(error.response?.data?.message || 'Failed to generate weekly report');
        }
    }
}

export default new ReportsService();
