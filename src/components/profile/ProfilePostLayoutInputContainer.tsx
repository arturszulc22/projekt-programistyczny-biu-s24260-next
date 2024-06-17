const ProfilePostLayoutInputContainer = () => {
    return (
        <div className="grid grid-cols sm:grid-cols-3 gap-3 my-5">
            <div className="grid grid-cols-3 bg-primary dark:bg-dark-primary-light-blue h-32 p-3 cursor-pointer">
                <div className="col-start-2 grid grid-cols-1 gap-2">
                    <div className="bg-secondary dark:bg-dark-primary-blue"></div>
                </div>
            </div>
            <div className="grid grid-cols-3 bg-primary dark:bg-dark-primary-light-blue h-32 p-3 cursor-pointer">
                <div className="col-start-2 grid grid-cols-2 gap-2">
                    <div className="bg-secondary dark:bg-dark-primary-blue"></div>
                    <div className="bg-secondary dark:bg-dark-primary-blue"></div>
                </div>
            </div>
            <div className="grid grid-cols-3 bg-primary dark:bg-dark-primary-light-blue h-32 p-3 cursor-pointer">
                <div className="col-start-2 grid grid-cols-3 gap-2">
                    <div className="bg-secondary dark:bg-dark-primary-blue"></div>
                    <div className="bg-secondary dark:bg-dark-primary-blue"></div>
                    <div className="bg-secondary dark:bg-dark-primary-blue"></div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePostLayoutInputContainer;