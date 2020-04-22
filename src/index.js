import worldGreeterModuleBytes from "./world-greeter.wat";
import './style.css';

async function main() {
  document.body.innerHTML += `
    <main>
      <label id='hello'></label>
    </main>
  `;

  const worldGreeter = (
    await WebAssembly.instantiate(
      worldGreeterModuleBytes,
    )
  ).instance;

  document.getElementById('hello').textContent
    = worldGreeter.exports.getHello();
}

main()
  .catch(error => {
    window.alert('Oops something went wrong - check the console');
    throw error;
  });
