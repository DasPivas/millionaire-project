import { VARIANT_ID_TO_LABEL } from '../questions';

const phrases = [
	'Привет! Да, конечно, я знаю, что тут %.',
	'Хмм... Где-то я уже такое слышал. Я точно не уверен, но это %.',
	'Знаешь, это очень интересный вопрос. Мне кажется, что правильный ответ %.',
	'Дружище, я буквально вчера смотрел сериал, и Шелдон сказал, что %.',
	'Ну как ты такое не знаешь? Даже мой хомячок знает! Это %, и точка.',
	'Есть у меня один друг, он говорит, что это %, но я бы ему не доверял.',
	'Ну у тебя и вопросы! Я не знаю.',
	'Отвечай, что тут %, и пойдем скорее в бар!',
	'Я на 100 процентов уверен, что это %',
];

const getRandom = (number: number = 1): number => {
	return Math.floor(Math.random() * number);
};

const getRandomPhrases = (insertStr: string | undefined): string => {
	console.log(insertStr);
	if (insertStr === undefined || Object.values(VARIANT_ID_TO_LABEL).indexOf(insertStr) === -1) {
		return '';
	}

	return phrases[getRandom(phrases.length)].replace('%', insertStr);
};

export { getRandomPhrases };
