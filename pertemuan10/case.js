const persiapan = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Menyiapkan Bahan ...");
        }, 3000);
    });
};

const rebusAir = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Merebus Air ...");
        }, 7000);
    });
};

const masak = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Masak Mie ...");
        }, 5000);
    });
};

const main = () => {
    persiapan()
    .then((res) => {
        console.log(res);
        return rebusAir();
    })
    .then((res) => {
        console.log(res);
        return masak();
    })
    .then((res) => {
        console.log(res);
    });
};

main();

async function main1() {
    console.log(await persiapan());
    console.log(await rebusAir());
    console.log(await masak());
}
main1();

const main2 = async () => {
    console.log(await persiapan());
    console.log(await rebusAir());
    console.log(await masak());
};
main2();