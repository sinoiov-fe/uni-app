const request = ({
	method = 'POST',
	url = '',
	data = {},
	header = {},
	success = () => {},
	fail = () => {},
}) => {
	url = url || ''
	data = data || null
	method = method || 'POST'
	header = {
		'content-type': 'application/json',
		timestamp: new Date().getTime(),
		...header,
	}
	success = success || function() {}
	uni.request({
		url: url,
		data: data,
		method: method,
		header: header,
		dataType: 'json',
		success: function(res) {
			if (res.data.code === '10001') {
				success(res.data)
			} else {
				fail(res.data)
			}
		},
		fail: function(err) {
			fail(err)
		},
	})
}

export default {
	request,
}
