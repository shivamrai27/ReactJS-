function Student(prop) {
    return (
        <>
            <div style={{ backgroundColor: "skyblue" }}>
                <h1>Hello {prop.name}</h1>
                <h2>Email: {prop.email}</h2>
            </div>
        </>
    );
}
export default Student;