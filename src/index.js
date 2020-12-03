import { getGroups, shorten } from './lib/helpers'


class BitLyService {
  constructor(token) {
    this.token = token
  }

  async shorten(url) {
    const getIdOrganization = await getGroups(this.token)
    const results = await getIdOrganization.json()
    const [groups] = results.groups
    const orgId = groups.guid
    const shortenedURL = await shorten(this.token, url, orgId)
    const data = await shortenedURL.json()
    return data.link
  }
}

export default BitLyService
