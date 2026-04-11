export async function sendEmail(data) {
  const res = await fetch("https://k104nngvcihh5qrvnrjzgvf2.163.227.238.91.sslip.io/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data, null, 2)
  });
  if (res.ok) {
    const result = await res.json();
    return result;
  } else {
    throw new Error(res.statusText);
  }
}
