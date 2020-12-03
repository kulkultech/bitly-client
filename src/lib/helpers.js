const getGroups = async token => await fetch('https://api-ssl.bitly.com/v4/groups', {
  method: 'GET',
  headers: {
    Authorization: `${token}`,
    'Content-Type': 'application/json',
  },
})

const shorten = async (token, url, orgId) => await fetch(`https://api-ssl.bitly.com/v4/shorten`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    long_url: `${url}`,
    domain: 'bit.ly',
    group_guid: `${orgId}`,
  }),
})


module.exports = { getGroups, shorten };
