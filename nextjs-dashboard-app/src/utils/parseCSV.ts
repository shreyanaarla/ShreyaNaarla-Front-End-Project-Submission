export const parseCSV = (data: string): Array<{ year: number; sales: number }> => {
    const lines = data.split('\n');
    const result: Array<{ year: number; sales: number }> = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line) {
            const [year, sales] = line.split(',');
            result.push({ year: parseInt(year), sales: parseFloat(sales) });
        }
    }

    return result;
};