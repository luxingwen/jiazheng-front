import request from '@/utils/request'

export function getCategoryList(params) {
  return request({
    url: '/v1/category',
    method: 'get',
    params
  })
}

export function addCategoryList(data) {
  return request({
    url: '/v1/category',
    method: 'post',
    data: data
  })
}

export function updateCategory(id, data) {
  return request({
    url: '/v1/category/' + id,
    method: 'put',
    data: data
  })
}

export function getTypList(params) {
  return request({
    url: '/v1/typ',
    method: 'get',
    params
  })
}

export function addTyp(data) {
  return request({
    url: '/v1/typ',
    method: 'post',
    data: data
  })
}

export function getShifuList(params) {
  return request({
    url: '/v1/shifu',
    method: 'get',
    params
  })
}

export function addShifu(data) {
  return request({
    url: '/v1/shifu',
    method: 'post',
    data
  })
}

export function uploadImg(data) {
  return request({
    url: '/v1/upload/image',
    method: 'post',
    data: data,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

export function getBrandList(params) {
  return request({
    url: '/v1/brand',
    method: 'get',
    params
  })
}

export function addBrand(data) {
  return request({
    url: '/v1/brand',
    method: 'post',
    data: data
  })
}

export function updateBrand(id, data) {
  return request({
    url: '/v1/brand/' + id,
    method: 'put',
    data: data
  })
}

export function getArean(params) {
  return request({
    url: '/v1/arean',
    method: 'get',
    data: params
  })
}
