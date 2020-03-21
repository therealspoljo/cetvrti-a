export const state = () => ({
    lastCommit: 'test',
})

export const mutations = {
    SET_LAST_COMMIT: (state, date) => {
        state.lastCommit = date
    },
}

export const actions = {
    async nuxtServerInit({ commit }) {
        let res = await this.$axios.get('https://api.github.com/repos/therealspoljo/cetvrti-a/commits')
        commit('SET_LAST_COMMIT', res.data[0].commit.author.date)
    },
}
