
const reverse = items => {
    return items.split('').sort().reverse('').join('');
}

module.exports = {reverse};
console.log(`Reverse : ${reverse("supercalifragilisticexpialidocious")}`)
console.log(`Reverse : ${reverse("savannah")}`)