import { createStore } from 'vuex';
import sourceData from '@/data.json'

export default createStore({
    state: {
        ...sourceData,
        authId: '7uVPJS9GHoftN58Z2MXCYDqmNAh2'
    },

    getters:{
        authUser(state){
            const user = state.users.find(user => user.id === state.authId);
            if(!user) return null;

            return{
                ...user,
                //authUser.postList (we can call without bracket)
                get postLists(){
                    return state.posts.filter(post => post.userId === user.id);
                },
                //authUser.postCount
                get postCount(){
                    return this.postLists.length;
                },
                //authUser.threads
                get threads(){
                    return state.threads.filter(thread => thread.userId === user.id);
                },
                //authUser.threadCount
                get threadCount(){
                    return this.threads.length;
                }
            }
        }
    },

    actions:{
        createPost({ commit, state }, { post }){
            post.id = 'ggg' + Math.random(); // Append post ID
            post.userId = state.authId;
            post.publishedAt = Math.floor(Date.now() / 1000);
            commit('setPost', { post }); // Set post to posts array
            commit('setPostToThread', { postId: post.id, threadId: post.threadId }); // Set post id to thread array.
        },
        updateUser({commit}, updatedUser){
            commit('setUser', {updatedUser})
        }
    },

    mutations:{
        setPost(state, { post }){
            state.posts.push(post);
        },
        setUser(state, { updatedUser }){
            const userIndex = state.users.findIndex(user => user.id === updatedUser.id);
            state.users[userIndex] = updatedUser;
        },
        setPostToThread(state, { postId, threadId }){
            const foundThread = state.threads.find(thread => thread.id === threadId);
            foundThread.posts.push(postId);
        }
    }
});