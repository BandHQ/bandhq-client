const addToMailChimpList = async ({ user: { name, email } }) => {
  try {
    const firstName = name
      .split(' ')
      .slice(0, -1)
      .join(' ');
    const lastName = name
      .split(' ')
      .slice(-1)
      .join(' ');

    const formData = new FormData();

    formData.append('EMAIL', email);
    formData.append('FNAME', firstName);
    formData.append('LNAME', lastName);
    formData.append('b_ea5d838d352af7686f80e5c7d_cadd8e2e57', '');

    await fetch(
      'https://app.us4.list-manage.com/subscribe/post?u=ea5d838d352af7686f80e5c7d&amp;id=cadd8e2e57',
      {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      },
    );
  } catch (e) {
    console.log(e);
  }
};

export default addToMailChimpList;
