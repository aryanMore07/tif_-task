export type InitialState = {
    requisitionDetails: {
        gender: String;
        noOfOpenings: number;
        requisitionTitle: String;
        urgency: String;
    },
    jobDetails: {
        jobDetails: String;
        jobLocation: String;
        jobTitle: String;
    },
    interviewSettings: {
        interviewDuration: String;
        interviewLanguage: String;
        interviewMode: String;
    },
};

export type Actions = {
    type: String;
    payload: string | number;
}