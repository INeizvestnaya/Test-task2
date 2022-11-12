import './style.scss';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

library.add(faCheck);
dom.watch();

const form = document.querySelector('#form');
const input = form.elements.number;

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!input.value) {
    alert('Input field is empty!');
    return;
  }

  try {
    const response = await fetch(
      'https://test-2b452-default-rtdb.firebaseio.com/test.json',
      {
        method: 'POST',
        body: JSON.stringify(input.value),
      }
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    alert('Data was sent!');
  } catch (err) {
    alert(err);
  }
});
