const getData = async (): Promise<number> => {
    const result = await fetch("https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new")
    const numberStr = await result.text();
    // throw new Error("Que paso?")
    return +numberStr
}

export { getData }