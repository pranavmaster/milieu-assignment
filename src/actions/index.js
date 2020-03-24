import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchThreads = () => async (dispatch) => {
	const response = await jsonPlaceholder.get("/posts");

	dispatch({ type: "FETCH_THREADS", payload: response.data });
};
