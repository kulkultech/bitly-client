import BitLyService from '../src'
import sinon from 'sinon'
import helpersModule from '../src/lib/helpers'
import chai from 'chai'

const { expect } = chai

describe('Shorten URL', () => {
  describe('Create short URL without alias', () => {
    let stubGetGroup
    let stubShorten
    before(() => {
      const responseGetGroup = Promise.resolve({
        json: async () => (Promise.resolve({
          'groups': [{
            'created': '2020-10-16T08:58:30+0000',
            'modified': '2020-10-16T08:58:30+0000',
            'bsds': [],
            'guid': 'Bkag8DUBzNK',
            'organization_guid': 'Okag8D46CjC',
            'name': 'o_7ieee18cb5',
            'is_active': true,
            'role': 'org-admin',
            'references': { 'organization': 'https://api-ssl.bitly.com/v4/organizations/Okag8D46CjC' },
          }],
        })),
      })
      const responseShorten = Promise.resolve({
        json: async () => (Promise.resolve({
          'created_at': '2020-12-03T10:51:58+0000',
          'id': 'bit.ly/2JtA9kI',
          'link': 'https://bit.ly/2JtA9kI',
          'custom_bitlinks': [],
          'long_url': 'https://gomakethings.com/how-to-use-the-fetch-method-to-make-multiple-api-calls-with-vanilla-javascript/',
          'archived': false,
          'tags': [],
          'deeplinks': [],
          'references': { 'group': 'https://api-ssl.bitly.com/v4/groups/Bkag8DUBzNK' },
        })),
      })
      stubGetGroup = sinon.stub(helpersModule, 'getGroups').returns(responseGetGroup)
      stubShorten = sinon.stub(helpersModule, 'shorten').returns(responseShorten)
    })
    after(() => {
    })

    it('should be able to shorten url using BitLy', async () => {
      const bitLyService = new BitLyService('token')
      const shortenedURL = await bitLyService.shorten('https://kulkul.tech')
      expect(shortenedURL).to.be.equal('https://bit.ly/2JtA9kI')
    })
  })
})
