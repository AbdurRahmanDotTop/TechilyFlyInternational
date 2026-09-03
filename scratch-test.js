const testAdmin = async () => {
  try {
    const formData = new FormData();
    formData.append('email', 'admin@techilyfly.com');
    formData.append('password', 'Password123!');
    const loginRes = await fetch('https://web.techilyflyinternational.workers.dev/api/auth/login', {
      method: 'POST',
      body: formData
    });
    const cookie = loginRes.headers.get('set-cookie');
    console.log('Login Status:', loginRes.status);
    console.log('Cookie:', cookie);

    if (cookie) {
      const adminRes = await fetch('https://web.techilyflyinternational.workers.dev/admin/users', {
        headers: { 'Cookie': cookie }
      });
      console.log('Admin Status:', adminRes.status);
      const text = await adminRes.text();
      console.log('Admin Body start:', text.substring(0, 100));
      if (adminRes.status >= 500) {
        console.error('Error Body:', text);
      }
    }
  } catch(e) {
    console.error(e);
  }
};
testAdmin();
