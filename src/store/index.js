import { createStore } from 'vuex';
import sourceData from '@/data.json'

export default createStore({
    state: sourceData,

    actions:{
        savePost(context, { post }){
            post.id = 'ggg' + Math.random(); // Append post ID
            context.commit('setPost', { post }); // Set post to posts array
            context.commit('setPostToThread', { postId: post.id, threadId: post.threadId }); // Set post id to thread array.
        }
    },

    mutations:{
        setPost(state, { post }){
            state.posts.push(post);
        },
        setPostToThread(state, { postId, threadId }){
            const foundThread = state.threads.find(thread => thread.id === threadId);
            foundThread.posts.push(postId);
        }
    }
});