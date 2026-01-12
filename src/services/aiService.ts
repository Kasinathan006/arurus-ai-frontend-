import { aiApi } from '../lib/api';

export interface ChatMessage {
    id: string;
    type: 'user' | 'ai';
    content: string;
    timestamp: Date;
    widget?: 'table' | 'list' | 'chart' | null;
    data?: any;
}

export interface ChatRequest {
    message: string;
    context?: {
        projectId?: string;
        sprintId?: string;
        userId?: string;
    };
}

export interface ChatResponse {
    success: boolean;
    message: string;
    widget?: 'table' | 'list' | 'chart' | null;
    data?: any;
    suggestions?: string[];
}

export interface SummaryRequest {
    type: 'sprint' | 'weekly' | 'meeting';
    projectId?: string;
    sprintId?: string;
    meetingId?: string;
}

export interface SummaryResponse {
    success: boolean;
    summary: string;
    insights: string[];
    recommendations: string[];
}

class AIService {
    /**
     * Send chat message to Liaison AI
     * POST to http://localhost:3003/api/chat
     */
    async sendMessage(request: ChatRequest): Promise<ChatResponse> {
        try {
            const response = await aiApi.post<ChatResponse>('/api/chat', request);
            return response.data;
        } catch (error: any) {
            console.error('Chat error:', error);
            throw new Error(error.response?.data?.message || 'Failed to send message');
        }
    }

    /**
     * Send chat message with streaming response
     * POST to http://localhost:3003/api/chat/stream
     * 
     * @param request - Chat request
     * @param onChunk - Callback for each streamed chunk
     */
    async sendMessageStream(
        request: ChatRequest,
        onChunk: (chunk: string) => void
    ): Promise<void> {
        try {
            const response = await fetch(`${aiApi.defaults.baseURL}/api/chat/stream`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('auras_auth_token')}`,
                },
                body: JSON.stringify(request),
            });

            if (!response.ok) {
                throw new Error('Stream request failed');
            }

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();

            if (!reader) {
                throw new Error('No reader available');
            }

            while (true) {
                const { done, value } = await reader.read();

                if (done) break;

                const chunk = decoder.decode(value);
                onChunk(chunk);
            }
        } catch (error: any) {
            console.error('Stream error:', error);
            throw new Error('Failed to stream message');
        }
    }

    /**
     * Generate AI summary
     * POST to http://localhost:3003/api/summary
     */
    async generateSummary(request: SummaryRequest): Promise<SummaryResponse> {
        try {
            const response = await aiApi.post<SummaryResponse>('/api/summary', request);
            return response.data;
        } catch (error: any) {
            console.error('Summary generation error:', error);
            throw new Error(error.response?.data?.message || 'Failed to generate summary');
        }
    }

    /**
     * Analyze sprint health
     * POST to http://localhost:3003/api/analyze/sprint
     */
    async analyzeSprintHealth(sprintId: string): Promise<any> {
        try {
            const response = await aiApi.post('/api/analyze/sprint', { sprintId });
            return response.data;
        } catch (error: any) {
            console.error('Sprint analysis error:', error);
            throw new Error(error.response?.data?.message || 'Failed to analyze sprint');
        }
    }

    /**
     * Get AI suggestions
     * GET to http://localhost:3003/api/suggestions
     */
    async getSuggestions(context?: { projectId?: string }): Promise<string[]> {
        try {
            const response = await aiApi.get('/api/suggestions', { params: context });
            return response.data.suggestions || [];
        } catch (error: any) {
            console.error('Suggestions error:', error);
            return [];
        }
    }

    /**
     * Analyze team burnout
     * POST to http://localhost:3003/api/analyze/burnout
     */
    async analyzeBurnout(teamId?: string): Promise<any> {
        try {
            const response = await aiApi.post('/api/analyze/burnout', { teamId });
            return response.data;
        } catch (error: any) {
            console.error('Burnout analysis error:', error);
            throw new Error(error.response?.data?.message || 'Failed to analyze burnout');
        }
    }

    /**
     * Get ghost actions (AI autonomous actions)
     * GET to http://localhost:3003/api/ghost-actions
     */
    async getGhostActions(limit: number = 10): Promise<any[]> {
        try {
            const response = await aiApi.get('/api/ghost-actions', { params: { limit } });
            return response.data.actions || [];
        } catch (error: any) {
            console.error('Ghost actions error:', error);
            return [];
        }
    }
}

export default new AIService();
