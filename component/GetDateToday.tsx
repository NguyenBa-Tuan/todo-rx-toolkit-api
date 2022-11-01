const GetDateToday = () => {
    const day = new Date().toLocaleString("en", {
        day: "numeric",
    });

    const month = new Date().toLocaleString("en", {
        month: "long",
    });

    const weekday = new Date().toLocaleString("en", {
        weekday: "long",
    });

    return (
        <div>
            <h1>
                {weekday}, {day}
            </h1>
            <p>{month}</p>
        </div>
    );
};

export default GetDateToday;
