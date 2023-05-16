import axios from 'axios';

export const instance = axios.create({
   baseURL: 'http://localhost:3000',
});

const transformBtns = (data) => {
   const { commonMarkColor, sections } = data;

   for (const key in sections) {
      const { markColor } = sections[key];

      const index = markColor.indexOf('commonMarkColor');
      markColor.splice(index, 1, ...commonMarkColor);
   }

   return sections;
};

export const responseBtns = instance
   .get('btns')
   .then(({ data }) => transformBtns(data));

// const obj = [
//    'kakak'
// ]

// obj.kakak = 'adasd';

// console.log(obj)
