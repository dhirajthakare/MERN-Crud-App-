const URL = "http://localhost:4000";

export async function createuser(data) {
  var response = await fetch(URL + "/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return await response.json();
}

export async function updateuser(data) {
  var response = await fetch(URL + "/updateuser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return await response.json();
}

export async function getAllUser(search) {
  var response = await fetch(URL + "/getAllUser/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(search),
  });

  return await response.json();
}

export async function deleteuser(id) {
  var response = await fetch(URL + "/deleteuser/" + id, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
}
