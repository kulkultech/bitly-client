const shortenUrl = async (token, url) => {
  let data
  const getIdOrganization = await fetch('https://api-ssl.bitly.com/v4/groups', {
    method: 'GET',
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
    },
  })
  const results = await getIdOrganization.json()
  data = results.groups[0].guid

  return fetch(`https://api-ssl.bitly.com/v4/shorten`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      long_url: `${url}`,
      domain: 'bit.ly',
      group_guid: `${data}`,
    }),
  })
    .then((response) => response.json())
    .then((jsonData) => jsonData.link)
}

export default shortenUrl
