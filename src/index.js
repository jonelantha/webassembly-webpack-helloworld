import './style.css';

async function main() {
  document.body.innerHTML += `
    <main>
    </main>
  `;
}

main()
  .catch(error => {
    window.alert('Oops something went wrong - check the console');
    throw error;
  });
