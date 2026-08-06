// this file is responsible for making API 
// requests related to projects. It exports two
// functions: getProjects and getProjectSlug. 
// The getProjects function fetches a list of 
// all projects, while the getProjectSlug function 
// fetches details of a specific project based on its slug.

import { apiRequest } from './api'

export async function getProjects() {
    return apiRequest('/projects')
}

export async function getProjectSlug(slug) {
    return apiRequest(`/projects/${slug}`)
}