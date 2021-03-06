import { put, takeLatest } from 'redux-saga/effects'

import { GoogleBooksActions } from '../actions/googleBooks'
import { VolumeList } from '../models/Volume'
import { VolumeApi } from '../apiClient/googleBooks'

function* getVolumes(action: ReturnType<typeof GoogleBooksActions.getVolumes>) {
  const searchString = action.payload
  const params = { q: searchString }
  const response = yield VolumeApi.get(params)
  if (response.isSuccess) {
    yield put(
      GoogleBooksActions.setVolumes(VolumeList.fromResponse(response.data))
    )
  } else window.alert(String(response.error))
}

export function* GoogleBooksSaga() {
  yield takeLatest(GoogleBooksActions.getVolumes, getVolumes)
}
