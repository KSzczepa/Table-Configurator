export async function getData(url: string) {
    try {
        const response = await fetch(url);
        if (response.ok) {
          const jsonData = await response.json();
          return jsonData;
        } else {
          throw new Error('Request failed');
        }
      } catch (error) {
        console.error(error);
      }
    return null;
}