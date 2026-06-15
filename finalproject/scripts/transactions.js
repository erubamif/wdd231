export async function fetchTransactions() {

    try {

        const response =
            await fetch('./data/transactions.json');

        if (!response.ok) {
            throw new Error('Failed to load data');
        }

        return await response.json();

    } catch (error) {

        console.error(error);

        return [];
    }
}