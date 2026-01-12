import { coreApi } from '../lib/api';

export interface Project {
    id: string;
    name: string;
    description: string;
    status: 'active' | 'completed' | 'archived';
    createdAt: string;
    updatedAt: string;
}

export interface Task {
    id: string;
    title: string;
    description: string;
    status: 'todo' | 'in_progress' | 'blocked' | 'completed';
    priority: 'low' | 'medium' | 'high' | 'critical';
    assignee?: string;
    projectId: string;
    sprintId?: string;
    createdAt: string;
    updatedAt: string;
    dueDate?: string;
}

export interface Sprint {
    id: string;
    name: string;
    projectId: string;
    startDate: string;
    endDate: string;
    status: 'planning' | 'active' | 'completed';
    velocity: number;
    burnoutRisk: 'low' | 'medium' | 'high';
}

class CoreService {
    // ==================== PROJECTS ====================

    /**
     * Get all projects
     * GET to http://localhost:3002/api/projects
     */
    async getProjects(): Promise<Project[]> {
        try {
            const response = await coreApi.get<{ success: boolean; projects: Project[] }>('/api/projects');
            return response.data.projects || [];
        } catch (error: any) {
            console.error('Get projects error:', error);
            throw new Error(error.response?.data?.message || 'Failed to fetch projects');
        }
    }

    /**
     * Get project by ID
     * GET to http://localhost:3002/api/projects/:id
     */
    async getProject(id: string): Promise<Project> {
        try {
            const response = await coreApi.get<{ success: boolean; project: Project }>(`/api/projects/${id}`);
            return response.data.project;
        } catch (error: any) {
            console.error('Get project error:', error);
            throw new Error(error.response?.data?.message || 'Failed to fetch project');
        }
    }

    /**
     * Create new project
     * POST to http://localhost:3002/api/projects
     */
    async createProject(data: Partial<Project>): Promise<Project> {
        try {
            const response = await coreApi.post<{ success: boolean; project: Project }>('/api/projects', data);
            return response.data.project;
        } catch (error: any) {
            console.error('Create project error:', error);
            throw new Error(error.response?.data?.message || 'Failed to create project');
        }
    }

    /**
     * Update project
     * PUT to http://localhost:3002/api/projects/:id
     */
    async updateProject(id: string, data: Partial<Project>): Promise<Project> {
        try {
            const response = await coreApi.put<{ success: boolean; project: Project }>(`/api/projects/${id}`, data);
            return response.data.project;
        } catch (error: any) {
            console.error('Update project error:', error);
            throw new Error(error.response?.data?.message || 'Failed to update project');
        }
    }

    /**
     * Delete project
     * DELETE to http://localhost:3002/api/projects/:id
     */
    async deleteProject(id: string): Promise<void> {
        try {
            await coreApi.delete(`/api/projects/${id}`);
        } catch (error: any) {
            console.error('Delete project error:', error);
            throw new Error(error.response?.data?.message || 'Failed to delete project');
        }
    }

    // ==================== TASKS ====================

    /**
     * Get all tasks
     * GET to http://localhost:3002/api/tasks
     */
    async getTasks(filters?: { projectId?: string; status?: string; assignee?: string }): Promise<Task[]> {
        try {
            const response = await coreApi.get<{ success: boolean; tasks: Task[] }>('/api/tasks', { params: filters });
            return response.data.tasks || [];
        } catch (error: any) {
            console.error('Get tasks error:', error);
            throw new Error(error.response?.data?.message || 'Failed to fetch tasks');
        }
    }

    /**
     * Get task by ID
     * GET to http://localhost:3002/api/tasks/:id
     */
    async getTask(id: string): Promise<Task> {
        try {
            const response = await coreApi.get<{ success: boolean; task: Task }>(`/api/tasks/${id}`);
            return response.data.task;
        } catch (error: any) {
            console.error('Get task error:', error);
            throw new Error(error.response?.data?.message || 'Failed to fetch task');
        }
    }

    /**
     * Create new task
     * POST to http://localhost:3002/api/tasks
     */
    async createTask(data: Partial<Task>): Promise<Task> {
        try {
            const response = await coreApi.post<{ success: boolean; task: Task }>('/api/tasks', data);
            return response.data.task;
        } catch (error: any) {
            console.error('Create task error:', error);
            throw new Error(error.response?.data?.message || 'Failed to create task');
        }
    }

    /**
     * Update task
     * PUT to http://localhost:3002/api/tasks/:id
     */
    async updateTask(id: string, data: Partial<Task>): Promise<Task> {
        try {
            const response = await coreApi.put<{ success: boolean; task: Task }>(`/api/tasks/${id}`, data);
            return response.data.task;
        } catch (error: any) {
            console.error('Update task error:', error);
            throw new Error(error.response?.data?.message || 'Failed to update task');
        }
    }

    /**
     * Delete task
     * DELETE to http://localhost:3002/api/tasks/:id
     */
    async deleteTask(id: string): Promise<void> {
        try {
            await coreApi.delete(`/api/tasks/${id}`);
        } catch (error: any) {
            console.error('Delete task error:', error);
            throw new Error(error.response?.data?.message || 'Failed to delete task');
        }
    }

    // ==================== SPRINTS ====================

    /**
     * Get all sprints
     * GET to http://localhost:3002/api/sprints
     */
    async getSprints(projectId?: string): Promise<Sprint[]> {
        try {
            const response = await coreApi.get<{ success: boolean; sprints: Sprint[] }>('/api/sprints', {
                params: { projectId },
            });
            return response.data.sprints || [];
        } catch (error: any) {
            console.error('Get sprints error:', error);
            throw new Error(error.response?.data?.message || 'Failed to fetch sprints');
        }
    }

    /**
     * Get sprint by ID
     * GET to http://localhost:3002/api/sprints/:id
     */
    async getSprint(id: string): Promise<Sprint> {
        try {
            const response = await coreApi.get<{ success: boolean; sprint: Sprint }>(`/api/sprints/${id}`);
            return response.data.sprint;
        } catch (error: any) {
            console.error('Get sprint error:', error);
            throw new Error(error.response?.data?.message || 'Failed to fetch sprint');
        }
    }

    /**
     * Create new sprint
     * POST to http://localhost:3002/api/sprints
     */
    async createSprint(data: Partial<Sprint>): Promise<Sprint> {
        try {
            const response = await coreApi.post<{ success: boolean; sprint: Sprint }>('/api/sprints', data);
            return response.data.sprint;
        } catch (error: any) {
            console.error('Create sprint error:', error);
            throw new Error(error.response?.data?.message || 'Failed to create sprint');
        }
    }

    /**
     * Update sprint
     * PUT to http://localhost:3002/api/sprints/:id
     */
    async updateSprint(id: string, data: Partial<Sprint>): Promise<Sprint> {
        try {
            const response = await coreApi.put<{ success: boolean; sprint: Sprint }>(`/api/sprints/${id}`, data);
            return response.data.sprint;
        } catch (error: any) {
            console.error('Update sprint error:', error);
            throw new Error(error.response?.data?.message || 'Failed to update sprint');
        }
    }
}

export default new CoreService();
