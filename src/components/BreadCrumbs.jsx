const BreadCrumbs = () => (
    <div className="bg-body-primary">
        <div className = " container">
            <div className="w-full mb-8">
                <div className=" px-4 py-4 border rounded-lg border-light dark:border-dark-3 shadow-1 dark:shadow-card bg-tg-bg dark:bg-dark-2 sm:px-6 md:px-8 md:py-5">
                    <ul className=" flex items-center justify-evenly">
                        <li className=" flex items-center">
                            <a className=" text-primary">
                                Home
                            </a>
                        </li>
                        <li className=" flex items-center">
                            <a className=" text-primary">
                                About Me
                            </a>
                        </li>
                        <li className=" flex items-center">
                            <a className=" text-primary">
                                Item 
                            </a>
                        </li>
                        <li className=" flex items-center">
                            <a className=" text-primary">
                                Item 
                            </a>
                        </li>
                        <li className=" flex items-center">
                            <a className=" text-primary">
                                Item 
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

);

export default BreadCrumbs;