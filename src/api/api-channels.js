import baseUrl from './api-auth';

// Create function to retrieve headers from sessionStorage
const userHeaders = JSON.parse(sessionStorage.getItem('userLoggedInDetails'));
console.log(userHeaders);

// Create a channel
export const channelCreate = async ({ name, user_ids, headers}) => {
    try {
        const response = await baseUrl.post('/api/v1/channels', {name, user_ids}, {userHeaders})
        return response;
    } catch (error) {
        return error;
    }
}