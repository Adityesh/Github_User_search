export async function getUserData(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const result = await response.json();
        if(result.login !== username) {
            return {
                error : true,
                message : "Profile not found"
            };
        }
        return {
            error : false,
            result
        };
    } catch(err) {
        return {
            error : true,
            message : "Profile not found"
        };
    }
}

export async function getUserRepos(username, page) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=10&sort=updated&page=${page}`);
        const result = await response.json();
        if(!Array.isArray(result) || result.length === 0) {
            return {
                error : true,
                message : "No repositories found"
            };
        }
        return {
            error : false,
            result
        };
    } catch(err) {
        return {
            error : true,
            message : "Repositories not found"
        };
    }
}