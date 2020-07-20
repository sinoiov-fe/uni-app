const request = ({
    method = 'POST',
    url = '',
    data = {},
    header = {},
    success = () => {},
    fail = () => {}
}) => {
    url = url || ''
    data = data || null
    method = method || 'POST'
    header = {
        'content-type': 'application/json',
        timestamp: new Date().getTime(),
        ...header
    }
    uni.request({
        url: url,
        data: data,
        method: method,
        header: header,
        dataType: 'json',
        success: (res) => {
            if (res.data.code === '10001') {
                success(res.data)
            } else {
                fail(res.data)
            }
        },
        fail: (err) => {
            fail(err)
        }
    })
}

export default {
    request
}
