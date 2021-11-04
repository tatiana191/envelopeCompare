
function envelopeCompare() {
    let height = document.querySelector('.input-height').value;
    let width = document.querySelector('.input-width').value;
    let second_height = document.querySelector('.second-height').value;
    let second_width = document.querySelector('.second-width').value;
          if (height > second_height && width > second_width) {
            document.querySelector('.class-div').innerHTML = 'Первый конверт больше второго';
        } if (height < second_height && width < second_width) {
        document.querySelector('.class-div').innerHTML = 'Второй конверт больше первого';
        } if (height === second_height && width === second_width) {
            document.querySelector('.class-div').innerHTML = 'Конверты равны';
        }
    }
// вот тут я запускаю код вызывая функцию envelopeCompare
document.querySelector('.class-button').onclick = envelopeCompare;


