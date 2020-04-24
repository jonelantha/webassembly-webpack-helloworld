import worldGreeterModuleBytes from "./world-greeter.wat";
import './style.css';

async function main() {
  document.body.innerHTML += `
    <main>
      <label id='hello'></label>
      <label id='world'></label>
    </main>
  `;

  const sharedMemory = new WebAssembly.Memory({ initial: 1 });

  const worldCallback = (offset, length) => {
    const rawBytes = sharedMemory.buffer.slice(offset, length);

    const jsString = new TextDecoder().decode(rawBytes);

    document.getElementById('world').textContent = jsString;
  }

  const worldGreeter = (
    await WebAssembly.instantiate(
      worldGreeterModuleBytes,
      { imports: { sharedMemory, worldCallback } },
    )
  ).instance;

  document.getElementById('hello').textContent
    = worldGreeter.exports.getHello();

  worldGreeter.exports.outputWorld();
}

main()
  .catch(error => {
    window.alert('Oops something went wrong - check the console');
    throw error;
  });
