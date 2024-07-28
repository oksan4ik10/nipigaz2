export interface IDataTest {
    question: string;
    answers: ({
        text: string;
        win: boolean;
        desc: string;
        userText: string;
    } | {
        text: string;
        win: boolean;
        userText: string;
        desc?: undefined;
    })[];
}