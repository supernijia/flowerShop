const BASE_URL = 'http://localhost:8888'
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+ options.url,
			method: options.method || 'get',
			data: options.data || {},
			success: (res)=>{
				if(res.statusCode !== 200) {
					return uni.showToast({
						title: '获取数据失败',
						icon : 'error'
					})
				}
				resolve(res)
			},
			fail: (err)=>{
				uni.showToast({
					title: '请求数据失败',
					icon : 'error'
				})
				reject(err)
			}
		})
	})
}