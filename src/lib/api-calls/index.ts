export async function fetchAPI(route: RequestInfo, options: RequestInit = {}) {
  //creo mi propio headers:{} que basicamente va a tener el content-type json + las demás propiedades como body,methods
  //  que vienen por defecto
  const myHeader = {
    "content-type": "application/json",
    ...options.headers,
  };

  //aca basicamente hago un nuevo objeto de Request que va a tener mi header personalizado + body,methods y demas cosas de tipo request
  const newOptions: RequestInit = {
    ...options,
    headers: myHeader,
    credentials: "include",
  };

  const respuesta = await fetch("http://localhost:3000" + route, newOptions);

  return respuesta.json();
}

export async function authUser(email) {
  const data = await fetchAPI("/api/auth", {
    method: "POST",
    body: JSON.stringify({
      email,
    }),
  });
  return data;
}

export async function authCode(email: string, code: number) {
  const data = await fetchAPI("/api/auth/token", {
    method: "post",
    body: JSON.stringify({
      email,
      code,
    }),
  });
  return data;
}

export async function getMe() {
  return await fetchAPI("/api/me");
}

export async function createPreferenceProducts(email, productId: string[]) {
  const data = await fetchAPI("/api/transaction", {
    method: "post",
    body: JSON.stringify({
      email,
      productId,
    }),
  });
  return data;
}

export async function updateUserData(data) {
  const result = await fetchAPI("/api/me", {
    method: "put",
    body: JSON.stringify({
      id: data.id,
      name: data.name,
      surname: data.surname,
      address: {
        street_name: data.calle,
        street_number: data.numero,
      },
    }),
  });
  return result;
}

export async function getTransactions(id) {
  const result = await fetchAPI(`/api/me/transactions?userId=${id}`);
  return result;
}
